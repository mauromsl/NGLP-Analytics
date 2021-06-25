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
            <div id="overview-container"></div>
            <div id="overview-map-container"></div>
        `);

        // Article investigations Date Histogram Overview
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

        // Article investigations overview map
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
    }
}