import {$} from "../vendor/edges2/dependencies/jquery"
import {es} from "../vendor/edges2/dependencies/es"

import {Edge, Template} from "../vendor/edges2/src/core"
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

    nglp.g001.active[selector] = new Edge({
        selector: selector,
        template: new nglp.g001.G001Template(),
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
                }),
                new es.GeohashGridAggregation({
                    name: "geo",
                    field: "location",
                    precision: 1
                })
            ]
        }),
        components : [
            new Chart({
                id: "g001-interactions-chart",
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
            }),
            new GeohashedZoomableMap({
                id: "g001-interactions-map",
                geoHashAggregation: "geo",
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
    })
}

nglp.g001.G001Template = class extends Template {
    draw(edge) {
        let frame = `<div class="row header">
            <div class="col-xs-12">
                <h1>G001: Article  Downloads for  Unit Administrators</h1>
                <h2>Article downloads by format, including landing page and metadata exports in aggregate, with information about users who downloaded them</h2> 
            </div>
        </div>
        <div class="row controls">
            <div class="col-md-6">
                <ul class="nav">
                    <li><a href="#">Go back to Dashboard</a></li>
                    <li><a href="#">Print this view to PDF</a></li>
                </ul>
            </div>
            <div class="col-md-6">
                <div id="g001-date-range"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div id="g001-interactions"></div>
                <div id="g001-format"></div>
            </div>
            <div class="col-md-9">
                <div id="g001-interactions-chart"></div>
                <div id="g001-interactions-map"></div>
                <div class="row">
                    <div class="col-md-4">
                        <div id="g001-top-investigations"></div>
                    </div>
                    <div class="col-md-4">
                        <div id="g001-top-downloads"></div>
                    </div>
                    <div class="col-md-4">
                        <div id="g001-top-exports"></div>
                    </div>
                </div>
            </div>
        </div>`;

        edge.context.html(frame);
    }
}

export default nglp;