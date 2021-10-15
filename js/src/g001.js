import {$} from "../vendor/edges2/dependencies/jquery"
import {es} from "../vendor/edges2/dependencies/es"

import {Edge} from "../vendor/edges2/src/core"
import {ComponentList} from "../vendor/edges2/src/templates/html/ComponentList";
import {Chart, dateHistogram} from "../vendor/edges2/src/components/Chart";
import {MultibarRenderer} from "../vendor/edges2/src/renderers/nvd3/MultibarRenderer";
import {numFormat} from "../vendor/edges2/src/utils";
import {GeohashedZoomableMap} from "../vendor/edges2/src/components/GeohashedZoomableMap";
import {GoogleMapView} from "../vendor/edges2/src/renderers/googlemap/GoogleMapView";

global.nglp = {}
nglp.g001 = {
    active: {}
}

nglp.g001.init = function (params) {
    if (!params) { params = {} }

    var selector = params.selector || "#g001";
    var search_url = params.searchUrl

    var countFormat = numFormat({
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

    nglp.g001.overviewEdge(search_url);
    nglp.g001.overviewMap(search_url);
}


nglp.g001.overviewEdge = function(search_url) {
    nglp.g001.active["#overview-container"] = new Edge({
        selector: "#overview-container",
        template: new ComponentList(),
        searchUrl: search_url,
        manageUrl : false,
        openingQuery: new es.Query({
            must : [
                new es.TermsFilter({field: "event.exact", values: ["request", "investigation", "export"]}),
                new es.TermsFilter({field: "object_type.exact", values: ["article", "file"]}),
                new es.RangeFilter({field : "occurred_at", gte: "2020-05-01", lte: "2021-07-01"})    // FIXME: these will need to be wired up to a date selector
            ],
            size: 0,
            aggs: [
                new es.DateHistogramAggregation({
                    name: "occurred_at",
                    field: "occurred_at",
                    interval: "1M"
                })
            ]
        }),
        components : [
            new Chart({
                id: "overview",
                dataFunction: dateHistogram({
                    agg: "occurred_at",
                    seriesName: "Occurred At"
                }),
                renderer : new MultibarRenderer({
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
    })
}

// Article interactions overview map
nglp.g001.overviewMap = function(search_url) {
    nglp.g001.active["#overview-map-container"] = new Edge({
        selector: "#overview-map-container",
        template: new ComponentList(),
        searchUrl: search_url,
        manageUrl: false,
        openingQuery: new es.Query({
            must: [
                new es.TermsFilter({field: "event.exact", values: ["request", "investigation", "export"]}),
                new es.TermsFilter({field: "object_type.exact", values: ["article", "file"]}),
                new es.RangeFilter({field: "occurred_at", gte: "2020-05-01", lte: "2021-07-01"})    // FIXME: these will need to be wired up to a date selector
            ],
            size: 0,
            aggs: [
                new es.GeohashGridAggregation({
                    name: "geo",
                    field: "location",
                    precision: 1
                })
            ]
        }),
        components: [
            new GeohashedZoomableMap({
                id: "overview-map",
                geoHashAggregation: "geo",
                // renderer: edges.google.newMapViewRenderer({
                renderer: new GoogleMapView({
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

export default nglp;