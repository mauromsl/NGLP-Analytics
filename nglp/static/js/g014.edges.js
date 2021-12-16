var nglp = {}
nglp.g014 = {
    active : {},

    rangeGenerator : function(params) {
        let start = params.start;
        let end = params.end;
        let count = params.count;

        let sms = start.getTime();
        let ems = end.getTime();
        let bucketSize = Math.round((ems - sms) / count)

        let ranges = [];
        for (let i = 0; i < count; i++) {
            let bstart = sms + (i * bucketSize);
            let bend = bstart + bucketSize;
            ranges.push({
                start_millis: bstart,
                end_millis: bend,
                start: nglp.g014.isoDateStr(new Date(bstart)),
                end: nglp.g014.isoDateStr(new Date(bend))
            });
        }

        return ranges;
    },

    isoDateStr : function(date) {
        let padder = edges.numFormat({zeroPadding: 2});

        let y = date.getUTCFullYear();
        let m = date.getUTCMonth();
        let d = date.getUTCDate();
        let H = date.getUTCHours();
        let M = date.getUTCMinutes();
        let S = date.getUTCSeconds();

        m = padder(m + 1)
        d = padder(d);
        H = padder(H);
        M = padder(M);
        S = padder(S);

        return y + "-" + m + "-" + d + "T" + H + ":" + M + ":" + S + "Z";
    },

    init : function(params) {
        if (!params) { params = {} }

        var selector = params.selector || "#g014";
        var search_url = params.searchUrl
        var state_progression = params.state_progression || [
            "submit",
            "first_decision",
            "review",
            "accept",
            "publish"
        ];

        var countFormat = edges.numFormat({
            thousandsSeparator: ","
        });

        $(selector).html(`
            <div class="row">
                <div class="col-md-2">
                    <div id="journal-container"></div>
                </div>
                <div class="col-md-10">
                    <h2>Current Articles</h2>
                    <div class="row">
                        <div class="col-md-12">
                            <div id="current-container"></div>
                        </div>
                    </div>
                    <h2>Age</h2>
                    <div class="row">
                        <div class="col-md-12">
                            <div id="age-container"></div>
                        </div>
                    </div>
                    <h2>Transition Time</h2>
                    <div class="row">
                        <div class="col-md-12">
                            <div id="transition-container"></div>
                        </div>
                    </div>
                    <h2>Workflow capacity</h2>
                    <div class="row">
                        <div class="col-md-12">
                            <div id="capacity-container"></div>
                        </div>
                    </div>
                </div>
            </div>
        `);

        nglp.g014.active["#journal-container"] = edges.newEdge({
            selector: "#journal-container",
            template: edges.html.newComponentList(),
            search_url: search_url,
            manageUrl : false,
            openingQuery: es.newQuery({
                must : [
                    es.newTermsFilter({field: "category.exact", values: ["workflow"]}),
                    es.newTermsFilter({field: "object_type.exact", values: ["article"]}),
                ],
                size: 0
            }),
            components : [
                edges.newORTermSelector({
                    id: "journals",
                    field: "container.exact",
                    display: "Journals",
                    syncCounts: false,
                    lifecycle: "static",
                    orderBy: "count",
                    orderDir: "desc",
                    renderer: edges.bs3.newORTermSelectorRenderer({
                        open: true,
                        togglable: false,
                        hideEmpty: true
                    })
                })
            ],
            callbacks : {
                "edges:post-render" : function(edge) {
                    let comp = edge.getComponent({id: "journals"});
                    let selected = comp.selected;

                    let actives = Object.keys(nglp.g014.active);
                    for (let i = 0; i < actives.length; i++) {
                        let active = actives[i];
                        if (active === "#journal-container") {
                            continue;
                        }
                        let otherEdge = nglp.g014.active[active];

                        let nq = otherEdge.cloneQuery();
                        nq.removeMust(es.newTermsFilter({field: "container.exact"}));
                        if (selected.length > 0) {
                            nq.addMust(es.newTermsFilter({
                                field: "container.exact",
                                values: selected
                            }))
                        }
                        otherEdge.pushQuery(nq)
                        otherEdge.cycle();
                    }
                }
            }
        });

        // Current workflow load
        let currentComponents = [];
        for (let i = 0; i < state_progression.length; i++) {
            currentComponents.push(
                edges.numbers.newImportantNumbers({
                    id: "current_" + state_progression[i],
                    calculate: function(state) {
                        return function(component) {
                            let agg = component.edge.result.aggregation("states");
                            for (let i = 0; i < agg.buckets.length; i++) {
                                let bucket = agg.buckets[i];
                                if (bucket.key === state) {
                                    return {main: bucket.doc_count, second: false}
                                }
                            }
                            return {main: 0, second: false};
                        }
                    }(state_progression[i]),
                    renderer: edges.bs3.newImportantNumbersRenderer({
                        title: state_progression[i]
                    })
                })
            )
        }
        nglp.g014.active["#current-container"] = edges.newEdge({
            selector: "#current-container",
            template: edges.html.newComponentList(),
            search_url: search_url,
            manageUrl : false,
            openingQuery: es.newQuery({
                must : [
                    es.newTermsFilter({field: "category.exact", values: ["workflow"]}),
                    es.newTermsFilter({field: "object_type.exact", values: ["article"]}),
                ],
                mustNot : [
                    es.newExistsFilter({field: "workflow.followed_by.state"})
                ],
                size: 0,
                aggs: [
                    es.newTermsAggregation({
                        name: "states",
                        field: "event.exact",
                        size: state_progression.length
                    })
                ]
            }),
            components : currentComponents
        });


        // Age distribution
        let ageComponents = [];
        for (let i = 0; i < state_progression.length; i++) {
            ageComponents.push(
                edges.newHorizontalMultibar({
                    id: "age_" + state_progression[i],
                    dataFunction: function(state) {
                        let ageRanges = ["<1M", "1-2M", "2-3M", "3-4M", "4-5M", "5M+"]
                        return function(component) {
                            let histogram = false;
                            let states = component.edge.result.aggregation("states")
                            for (let i = 0; i < states.buckets.length; i++) {
                                let bucket = states.buckets[i];
                                if (bucket.key === state) {
                                    histogram = bucket.age
                                    break;
                                }
                            }

                            let values = [];
                            let longTail = 0;

                            if (histogram) {
                                for (let i = 0; i < histogram.buckets.length; i++) {
                                    let bucket = histogram.buckets[i];
                                    if (i < ageRanges.length - 1) {
                                        values.push({label: ageRanges[i], value: bucket.doc_count});
                                    } else {
                                        longTail += bucket.doc_count;
                                    }
                                }
                            } else {
                                for (let i = 0; i < ageRanges.length - 1; i++) {
                                    values.push({label: ageRanges[i], value: 0});
                                }
                            }

                            values.push({label: ageRanges[ageRanges.length - 1], value: longTail});

                            return [{key: state, values: values}]
                        }
                    }(state_progression[i]),
                    renderer : edges.nvd3.newHorizontalMultibarRenderer({
                        barColor : ["#1e9dd8"],
                        showLegend: false,
                        xAxisLabel: "Age",
                        yAxisLabel: "Count",
                        marginLeft: 80,
                        valueFormat: ".0"
                    })
                })
            )
        }
        nglp.g014.active["#age-container"] = edges.newEdge({
            selector: "#age-container",
            template: edges.html.newComponentList(),
            search_url: search_url,
            manageUrl : false,
            openingQuery: es.newQuery({
                must : [
                    es.newTermsFilter({field: "category.exact", values: ["workflow"]}),
                    es.newTermsFilter({field: "object_type.exact", values: ["article"]}),
                ],
                mustNot : [
                    es.newExistsFilter({field: "workflow.followed_by.state"})
                ],
                size: 0,
                aggs: [
                    es.newTermsAggregation({
                        name: "states",
                        field: "event.exact",
                        size: state_progression.length,
                        aggs: [
                            es.newDateHistogramAggregation({
                                name: "age",
                                field: "occurred_at"
                            })
                        ]
                    })
                ]
            }),
            components : ageComponents
        });

        // Transition time
        let transitionComponents = [];
        for (let i = 0; i < state_progression.length - 1; i++) {
            transitionComponents.push(
                edges.numbers.newImportantNumbers({
                    id: "transition_" + state_progression[i],
                    calculate: function(state) {
                        let secondsPerDay = 60 * 60 * 24;
                        return function(component) {
                            let agg = component.edge.result.aggregation("states");
                            for (let i = 0; i < agg.buckets.length; i++) {
                                let bucket = agg.buckets[i];
                                if (bucket.key === state) {
                                    return {main: Math.ceil(bucket.time.avg / secondsPerDay), second: Math.ceil(bucket.time.min / secondsPerDay)}
                                }
                            }
                            return {main: 0, second: 0};
                        }
                    }(state_progression[i]),
                    renderer: edges.bs3.newImportantNumbersRenderer({
                        title: "From " + state_progression[i] + " to " + state_progression[i+1],
                        mainNumberFormat : function(num) {
                            return num + "d avg";
                        },
                        secondNumberFormat : function(num) {
                            return num + "d min";
                        }
                    })
                })
            )
        }
        nglp.g014.active["#transition-container"] = edges.newEdge({
            selector: "#transition-container",
            template: edges.html.newComponentList(),
            search_url: search_url,
            manageUrl : false,
            openingQuery: es.newQuery({
                must : [
                    es.newTermsFilter({field: "category.exact", values: ["workflow"]}),
                    es.newTermsFilter({field: "object_type.exact", values: ["article"]}),
                    es.newExistsFilter({field: "workflow.follows.state"})
                ],
                size: 0,
                aggs: [
                    es.newTermsAggregation({
                        name: "states",
                        field: "workflow.follows.state.exact",
                        size: state_progression.length,
                        aggs: [
                            es.newStatsAggregation({
                                name: "time",
                                field: "workflow.follows.transition_time"
                            })
                        ]
                    })
                ]
            }),
            components : transitionComponents
        });


        // workflow capacity
        let yearmillis = 1000*60*60*24*365;
        let ranges = nglp.g014.rangeGenerator({
            start: new Date((new Date()).getTime() - yearmillis),
            end: new Date(),
            count: 12
        })
        let filters = {};
        for (let i = 0; i < ranges.length; i++) {
            let range = ranges[i];
            filters[range.start_millis.toString()] = {
                "bool" : {
                    "must" : [
                        {"range" : {"occurred_at" : {"lte" : range.end}}},
                        {"range" : {"workflow.followed_by.date" : {"gte" : range.start}}}
                    ]
                }
            }
        }
        nglp.g014.active["#capacity-container"] = edges.newEdge({
            selector: "#capacity-container",
            template: edges.html.newComponentList(),
            search_url: search_url,
            manageUrl : false,
            openingQuery: es.newQuery({
                must : [
                    es.newTermsFilter({field: "category.exact", values: ["workflow"]}),
                    es.newTermsFilter({field: "object_type.exact", values: ["article"]}),
                    es.newRangeFilter({field : "occurred_at", gte: "2020-07-01", lte: "2021-07-01"})    // FIXME: these will need to be wired up to a date selector
                ],
                size: 0,
                aggs: [
                    es.newTermsAggregation({
                        name: "states",
                        field: "event.exact",
                        size: state_progression.length,
                        aggs: [
                            es.newFiltersAggregation({
                                name: "time",
                                filters: filters
                            })
                        ]
                    })
                ]
            }),
            components : [
                edges.newChart({
                    id: "workflow-capacity",
                    dataFunction: function(component) {
                        let dataset = [];
                        let states = component.edge.result.aggregation("states");
                        for (let i = 0; i < states.buckets.length; i++) {
                            let bucket = states.buckets[i];
                            let keys = Object.keys(bucket.time.buckets);
                            keys.sort()
                            let values = []
                            for (let j = 0; j < keys.length; j++) {
                                let cap = bucket.time.buckets[keys[j]];
                                let pair = {label: parseInt(keys[j]), value: cap.doc_count}
                                values.push(pair);
                            }
                            let series = {key: bucket.key, values: values};
                            dataset.push(series);
                        }
                        return dataset;
                    },
                    renderer: edges.nvd3.newStackedAreaChartRenderer({
                        xTickFormat: function(d) {
                            return d3.time.format('%B %Y')(new Date(d))
                        }
                    })
                })
            ]
        });
    }
}