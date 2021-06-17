var nglp = {}
nglp.search = {
    active : {},

    init : function(params) {
        if (!params) { params = {} }

        var selector = params.selector || "#event-search";
        var search_url = params.searchUrl

        var countFormat = edges.numFormat({
            thousandsSeparator: ","
        });

        var components = [
            edges.newFullSearchController({
                id: "search-input-bar",
                category: "controller",
                fieldOptions : [
                    {'display':'Identifier','field':'object_id'},
                    {'display':'Container','field':'container'}
                ],
                sortOptions : [
                    {'display':'Occurred At','field':'occurred_at', "dir" : "desc"},
                    {'display':'Relevance','field':'_score'}
                ],
                defaultOperator : "AND",
                renderer : edges.bs3.newFullSearchControllerRenderer({
                    freetextSubmitDelay: -1,
                    clearButton: true,
                    searchButton: true,
                    searchPlaceholder: "",
                })
            }),

            edges.newRefiningANDTermSelector({
                id: "category",
                category: "facet",
                field: "category.exact",
                display: "Category",
                renderer: edges.bs3.newRefiningANDTermSelectorRenderer({
                    countFormat: countFormat
                })
            }),

            edges.newRefiningANDTermSelector({
                id: "event",
                category: "facet",
                field: "event.exact",
                display: "Event",
                renderer: edges.bs3.newRefiningANDTermSelectorRenderer({
                    countFormat: countFormat
                })
            }),

            edges.newRefiningANDTermSelector({
                id: "object_type",
                category: "facet",
                field: "object_type.exact",
                display: "Object Type",
                renderer: edges.bs3.newRefiningANDTermSelectorRenderer({
                    countFormat: countFormat
                })
            }),

            edges.newDateHistogramSelector({
                id : "occurred_at",
                category: "facet",
                field: "occurred_at",
                interval: "month",
                display: "Occurred At",
                displayFormatter : function(val) {
                    let d = new Date(parseInt(val));
                    return d.getUTCFullYear() + "-" + d.getUTCMonth();
                },
                sortFunction : function(values) {
                    values.reverse();
                    return values;
                },
                renderer: edges.bs3.newDateHistogramSelectorRenderer({
                    countFormat: countFormat
                })
            }),

            // the pager, with the explicitly set page size options (see the openingQuery for the initial size)
            edges.newPager({
                id: "top-pager",
                category: "top-pager",
                renderer: edges.bs3.newPagerRenderer({
                    sizeOptions: [10, 25, 50, 100],
                    numberFormat: countFormat,
                    scrollSelector: "html, body"
                })
            }),
            edges.newPager({
                id: "bottom-pager",
                category: "bottom-pager",
                renderer: edges.bs3.newPagerRenderer({
                    sizeOptions: [10, 25, 50, 100],
                    numberFormat: countFormat,
                    scrollSelector: "html, body"
                })
            }),

            // selected filters display, with all the fields given their display names
            edges.newSelectedFilters({
                id: "selected-filters",
                category: "selected-filters",
                fieldDisplays: {
                    'category.exact': 'Category',
                    'event.exact' : 'Event',
                    'object_type.exact' : 'Object Type',
                },
                rangeFunctions : {
                    "occurred_at" : function(params) {
                        var from = params.from;
                        var to = params.to;
                        var field = params.field;
                        let d = new Date(parseInt(val));
                        var display = d.getUTCFullYear() + "-" + d.getUTCMonth();
                        return {to: to, toType: "lt", from: from, fromType: "gte", display: display}
                    }
                }
            }),

            // the standard searching notification
            edges.newSearchingNotification({
                id: "searching-notification",
                category: "searching-notification"
            }),

            edges.newResultsDisplay({
                id: "results",
                category: "results",
                renderer: edges.bs3.newResultsFieldsByRowRenderer({
                    rowDisplay : [
                        [{"pre" : "<strong style='display: inline-block; width: 20%'>Category</strong> ", "field" : "category"}],
                        [{"pre" : "<strong style='display: inline-block; width: 20%'>Event</strong> ", "field" : "event"}],
                        [{"pre" : "<strong style='display: inline-block; width: 20%'>Object Type</strong> ", "field" : "object_type"}],
                        [{"pre" : "<strong style='display: inline-block; width: 20%'>Object ID</strong> ", "field" : "object_id"}],
                        [{"pre" : "<strong style='display: inline-block; width: 20%'>Occurred At</strong> ", "field" : "occurred_at"}],
                        [{"pre" : "<strong style='display: inline-block; width: 20%'>Format</strong> ", "field" : "format"}],
                        [{"pre" : "<strong style='display: inline-block; width: 20%'>Container</strong> ", "field" : "container"}],
                        [{"pre" : "<strong style='display: inline-block; width: 20%'>User ID</strong> ", "field" : "user_id"}],
                        [{"pre" : "<strong style='display: inline-block; width: 20%'>User Org</strong> ", "field" : "user_org"}],
                        [{"pre" : "<strong style='display: inline-block; width: 20%'>IP</strong> ", "field" : "ip"}],
                        [
                            {"pre" : "<strong style='display: inline-block; width: 20%'>Lat/Lon</strong> ", "field" : "location.lat"},
                            {"pre" : "/", "field": "location.lon"}
                        ],
                        [{"pre" : "<strong style='display: inline-block; width: 20%'>City</strong> ", "field" : "city"}],
                        [{"pre" : "<strong style='display: inline-block; width: 20%'>Country</strong> ", "field" : "country"}],
                    ]
                })
            }),
        ];

        var e = edges.newEdge({
            selector: selector,
            template: edges.bs3.newFacetview(),
            search_url: search_url,
            manageUrl : false,
            openingQuery: es.newQuery({
                sort: [{"field" : "occurred_at", "order" : "desc"}],
                size: 50
            }),
            components : components,
        });
        nglp.search.active[selector] = e;
    }
}