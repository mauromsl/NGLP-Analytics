var nglp = {}
nglp.g001 = {
    active : {},

    init : function(params) {
        if (!params) { params = {} }

        var selector = params.selector || "#g001";
        var search_url = params.searchUrl

        var countFormat = edges.numFormat({
            thousandsSeparator: ","
        });

        $(selector).html(`
            <h2>Overview</h2>
            <div class="row">
                <div class="col-md-6">
                    <div id="overview-container"></div>
                </div>
                <div class="col-md-6">
                    <div id="overview-map-container"></div>
                </div>
            </div>
            <h2>Interactions with Article Landing Pages</h2>
            <div class="row">
                <div class="col-md-6">
                    <div id="investigations-container"></div>
                </div>
                <div class="col-md-6">
                    <div id="investigations-map-container"></div>
                </div>
            </div>
            <h2>Fulltext Views</h2>
            <div class="row">
                <div class="col-md-6">
                    <div id="fulltext-container"></div>
                </div>
                <div class="col-md-6">
                    <div id="fulltext-map-container"></div>
                </div>
            </div>
            <h2>Article Exports</h2>
            <div class="row">
                <div class="col-md-6">
                    <div id="export-container"></div>
                </div>
                <div class="col-md-6">
                    <div id="export-map-container"></div>
                </div>
            </div>
        `);

        // Article interactions Date Histogram Overview
        nglp.g001.active["#overview-container"] = edges.newEdge({
            selector: "#overview-container",
            template: edges.html.newComponentList(),
            search_url: search_url,
            manageUrl : false,
            openingQuery: es.newQuery({
                must : [
                    es.newTermsFilter({field: "event.exact", values: ["request", "investigation", "export"]}),
                    es.newTermsFilter({field: "object_type.exact", values: ["article", "file"]}),
                    es.newRangeFilter({field : "occurred_at", gte: "2020-05-01", lte: "2021-07-01"})    // FIXME: these will need to be wired up to a date selector
                ],
                size: 0,
                aggs: [
                    es.newDateHistogramAggregation({
                        name: "occurred_at",
                        field: "occurred_at",
                        interval: "1M"
                    })
                ]
            }),
            components : [
                edges.newMultibar({
                    id: "overview",
                    dataFunction: edges.ChartDataFunctions.dateHistogram({
                        agg: "occurred_at",
                        seriesName: "Occurred At"
                    }),
                    renderer : edges.nvd3.newMultibarRenderer({
                        xTickFormat: function(d) { return d3.time.format('%b %y')(new Date(d))},
                        barColor : ["#1e9dd8"],
                        yTickFormat : ",.0f",
                        showLegend: false,
                        xAxisLabel: "Occurred At",
                        yAxisLabel: "Article Interactions",
                        marginLeft: 80
                    })
                })
            ]
        });

        // Article interactions overview map
        nglp.g001.active["#overview-map-container"] = edges.newEdge({
            selector: "#overview-map-container",
            template: edges.html.newComponentList(),
            search_url: search_url,
            manageUrl : false,
            openingQuery: es.newQuery({
                must : [
                    es.newTermsFilter({field: "event.exact", values: ["request", "investigation", "export"]}),
                    es.newTermsFilter({field: "object_type.exact", values: ["article", "file"]}),
                    es.newRangeFilter({field : "occurred_at", gte: "2020-05-01", lte: "2021-07-01"})    // FIXME: these will need to be wired up to a date selector
                ],
                size: 0,
                aggs: [
                    es.newGeohashGridAggregation({
                        name: "geo",
                        field: "location",
                        precision: 1
                    })
                ]
            }),
            components : [
                edges.newGeohashedZoomableMap({
                    id: "overview-map",
                    geoHashAggregation : "geo",
                    renderer: edges.google.newMapViewRenderer({
                        clusterByCount: true,
                        reQueryOnBoundsChange: true,
                        clusterIcons: {
                            0: "/static/img/m1.png",
                            2: "/static/img/m2.png",
                            20: "/static/img/m3.png",
                            50: "/static/img/m4.png",
                            100: "/static/img/m5.png"
                        }
                    })
                })
            ]
        });

        // Article investigations Date Histogram
        nglp.g001.active["#investigations-container"] = edges.newEdge({
            selector: "#investigations-container",
            template: edges.html.newComponentList(),
            search_url: search_url,
            manageUrl : false,
            openingQuery: es.newQuery({
                must : [
                    es.newTermsFilter({field: "event.exact", values: ["investigation"]}),
                    es.newTermsFilter({field: "object_type.exact", values: ["article"]}),
                    es.newRangeFilter({field : "occurred_at", gte: "2020-05-01", lte: "2021-07-01"})    // FIXME: these will need to be wired up to a date selector
                ],
                size: 0,
                aggs: [
                    es.newDateHistogramAggregation({
                        name: "occurred_at",
                        field: "occurred_at",
                        interval: "1M"
                    })
                ]
            }),
            components : [
                edges.newMultibar({
                    id: "investigations",
                    dataFunction: edges.ChartDataFunctions.dateHistogram({
                        agg: "occurred_at",
                        seriesName: "Occurred At"
                    }),
                    renderer : edges.nvd3.newMultibarRenderer({
                        xTickFormat: function(d) { return d3.time.format('%b %y')(new Date(d))},
                        barColor : ["#1e9dd8"],
                        yTickFormat : ",.0f",
                        showLegend: false,
                        xAxisLabel: "Occurred At",
                        yAxisLabel: "Article Investigations",
                        marginLeft: 80
                    })
                })
            ]
        });

        // Article investigations map
        nglp.g001.active["#investigations-map-container"] = edges.newEdge({
            selector: "#investigations-map-container",
            template: edges.html.newComponentList(),
            search_url: search_url,
            manageUrl : false,
            openingQuery: es.newQuery({
                must : [
                    es.newTermsFilter({field: "event.exact", values: ["investigation"]}),
                    es.newTermsFilter({field: "object_type.exact", values: ["article"]}),
                    es.newRangeFilter({field : "occurred_at", gte: "2020-05-01", lte: "2021-07-01"})    // FIXME: these will need to be wired up to a date selector
                ],
                size: 0,
                aggs: [
                    es.newGeohashGridAggregation({
                        name: "geo",
                        field: "location",
                        precision: 1
                    })
                ]
            }),
            components : [
                edges.newGeohashedZoomableMap({
                    id: "investigations-map",
                    geoHashAggregation : "geo",
                    renderer: edges.google.newMapViewRenderer({
                        clusterByCount: true,
                        reQueryOnBoundsChange: true,
                        clusterIcons: {
                            0: "/static/img/m1.png",
                            2: "/static/img/m2.png",
                            20: "/static/img/m3.png",
                            50: "/static/img/m4.png",
                            100: "/static/img/m5.png"
                        }
                    })
                })
            ]
        });


        // Article fulltext Date Histogram & list of formats
        nglp.g001.active["#fulltext-container"] = edges.newEdge({
            selector: "#fulltext-container",
            template: edges.html.newComponentList(),
            search_url: search_url,
            manageUrl : false,
            openingQuery: es.newQuery({
                must : [
                    es.newTermsFilter({field: "event.exact", values: ["request"]}),
                    es.newTermsFilter({field: "object_type.exact", values: ["file"]}),
                    es.newRangeFilter({field : "occurred_at", gte: "2020-05-01", lte: "2021-07-01"})    // FIXME: these will need to be wired up to a date selector
                ],
                size: 0,
                aggs: [
                    es.newDateHistogramAggregation({
                        name: "occurred_at",
                        field: "occurred_at",
                        interval: "1M"
                    })
                ]
            }),
            components : [
                edges.newORTermSelector({
                    id: "fulltext-formats",
                    field: "format.exact",
                    display: "Fulltext Formats",
                    size: 10,
                    syncCounts: false,
                    lifecycle: "static",
                    orderBy: "count",
                    orderDir: "desc",
                    renderer : edges.bs3.newORTermSelectorRenderer({
                        showCount: true,
                        hideEmpty: true,
                        open: true,
                        togglable: false
                    })
                }),
                edges.newMultibar({
                    id: "fulltext",
                    dataFunction: edges.ChartDataFunctions.dateHistogram({
                        agg: "occurred_at",
                        seriesName: "Occurred At"
                    }),
                    renderer : edges.nvd3.newMultibarRenderer({
                        xTickFormat: function(d) { return d3.time.format('%b %y')(new Date(d))},
                        barColor : ["#1e9dd8"],
                        yTickFormat : ",.0f",
                        showLegend: false,
                        xAxisLabel: "Occurred At",
                        yAxisLabel: "Article Downloads",
                        marginLeft: 80
                    })
                })
            ],
            callbacks : {
                "edges:pre-query" : function(edge) {
                    if ("#fulltext-map-container" in nglp.g001.active) {
                        let formats = edge.currentQuery.listMust(es.newTermsFilter({field: "format.exact"}));
                        let selectedFormats = false;
                        if (formats.length > 0) {
                            selectedFormats = formats[0].values;
                        }

                        let mapEdge = nglp.g001.active["#fulltext-map-container"];
                        let nq = mapEdge.cloneQuery();

                        nq.removeMust(es.newTermsFilter({field: "format.exact"}))
                        if (selectedFormats) {
                            nq.addMust(es.newTermsFilter({field: "format.exact", values: selectedFormats}));
                        }

                        mapEdge.pushQuery(nq);
                        mapEdge.cycle();
                    }
                }
            }
        });

        // Article fulltext map
        nglp.g001.active["#fulltext-map-container"] = edges.newEdge({
            selector: "#fulltext-map-container",
            template: edges.html.newComponentList(),
            search_url: search_url,
            manageUrl : false,
            openingQuery: es.newQuery({
                must : [
                    es.newTermsFilter({field: "event.exact", values: ["request"]}),
                    es.newTermsFilter({field: "object_type.exact", values: ["file"]}),
                    es.newRangeFilter({field : "occurred_at", gte: "2020-05-01", lte: "2021-07-01"})    // FIXME: these will need to be wired up to a date selector
                ],
                size: 0,
                aggs: [
                    es.newGeohashGridAggregation({
                        name: "geo",
                        field: "location",
                        precision: 1
                    })
                ]
            }),
            components : [
                edges.newGeohashedZoomableMap({
                    id: "fulltext-map",
                    geoHashAggregation : "geo",
                    renderer: edges.google.newMapViewRenderer({
                        clusterByCount: true,
                        reQueryOnBoundsChange: true,
                        clusterIcons: {
                            0: "/static/img/m1.png",
                            2: "/static/img/m2.png",
                            20: "/static/img/m3.png",
                            50: "/static/img/m4.png",
                            100: "/static/img/m5.png"
                        }
                    })
                })
            ]
        });


        // Article export Date Histogram & list of formats
        nglp.g001.active["#export-container"] = edges.newEdge({
            selector: "#export-container",
            template: edges.html.newComponentList(),
            search_url: search_url,
            manageUrl : false,
            openingQuery: es.newQuery({
                must : [
                    es.newTermsFilter({field: "event.exact", values: ["export"]}),
                    es.newTermsFilter({field: "object_type.exact", values: ["article"]}),
                    es.newRangeFilter({field : "occurred_at", gte: "2020-05-01", lte: "2021-07-01"})    // FIXME: these will need to be wired up to a date selector
                ],
                size: 0,
                aggs: [
                    es.newDateHistogramAggregation({
                        name: "occurred_at",
                        field: "occurred_at",
                        interval: "1M"
                    })
                ]
            }),
            components : [
                edges.newORTermSelector({
                    id: "export-formats",
                    field: "format.exact",
                    display: "Export Formats",
                    size: 10,
                    syncCounts: false,
                    lifecycle: "static",
                    orderBy: "count",
                    orderDir: "desc",
                    renderer : edges.bs3.newORTermSelectorRenderer({
                        showCount: true,
                        hideEmpty: true,
                        open: true,
                        togglable: false
                    })
                }),
                edges.newMultibar({
                    id: "export",
                    dataFunction: edges.ChartDataFunctions.dateHistogram({
                        agg: "occurred_at",
                        seriesName: "Occurred At"
                    }),
                    renderer : edges.nvd3.newMultibarRenderer({
                        xTickFormat: function(d) { return d3.time.format('%b %y')(new Date(d))},
                        barColor : ["#1e9dd8"],
                        yTickFormat : ",.0f",
                        showLegend: false,
                        xAxisLabel: "Occurred At",
                        yAxisLabel: "Article Exports",
                        marginLeft: 80
                    })
                })
            ],
            callbacks : {
                "edges:pre-query" : function(edge) {
                    if ("#export-map-container" in nglp.g001.active) {
                        let formats = edge.currentQuery.listMust(es.newTermsFilter({field: "format.exact"}));
                        let selectedFormats = false;
                        if (formats.length > 0) {
                            selectedFormats = formats[0].values;
                        }

                        let mapEdge = nglp.g001.active["#export-map-container"];
                        let nq = mapEdge.cloneQuery();

                        nq.removeMust(es.newTermsFilter({field: "format.exact"}))
                        if (selectedFormats) {
                            nq.addMust(es.newTermsFilter({field: "format.exact", values: selectedFormats}));
                        }

                        mapEdge.pushQuery(nq);
                        mapEdge.cycle();
                    }
                }
            }
        });

        // Article export map
        nglp.g001.active["#export-map-container"] = edges.newEdge({
            selector: "#export-map-container",
            template: edges.html.newComponentList(),
            search_url: search_url,
            manageUrl : false,
            openingQuery: es.newQuery({
                must : [
                    es.newTermsFilter({field: "event.exact", values: ["export"]}),
                    es.newTermsFilter({field: "object_type.exact", values: ["article"]}),
                    es.newRangeFilter({field : "occurred_at", gte: "2020-05-01", lte: "2021-07-01"})    // FIXME: these will need to be wired up to a date selector
                ],
                size: 0,
                aggs: [
                    es.newGeohashGridAggregation({
                        name: "geo",
                        field: "location",
                        precision: 1
                    })
                ]
            }),
            components : [
                edges.newGeohashedZoomableMap({
                    id: "export-map",
                    geoHashAggregation : "geo",
                    renderer: edges.google.newMapViewRenderer({
                        clusterByCount: true,
                        reQueryOnBoundsChange: true,
                        clusterIcons: {
                            0: "/static/img/m1.png",
                            2: "/static/img/m2.png",
                            20: "/static/img/m3.png",
                            50: "/static/img/m4.png",
                            100: "/static/img/m5.png"
                        }
                    })
                })
            ]
        });


    }
}