import {$} from "../vendor/edges2/dependencies/jquery"
import {es} from "../vendor/edges2/dependencies/es"

import {Edge, Template} from "../vendor/edges2/src/core"
import {Chart, termSplitDateHistogram, nestedTerms} from "../vendor/edges2/src/components/Chart";
import {MultibarRenderer} from "../vendor/edges2/src/renderers/nvd3/MultibarRenderer";
import {htmlID, numFormat, idSelector, on, getParam} from "../vendor/edges2/src/utils";
import {GeohashedZoomableMap} from "../vendor/edges2/src/components/GeohashedZoomableMap";
import {GoogleMapView} from "../vendor/edges2/src/renderers/googlemap/GoogleMapView";
import {ORTermSelector} from "../vendor/edges2/src/components/ORTermSelector";
import {CheckboxORTermSelector} from "../vendor/edges2/src/renderers/bs3/CheckboxORTermSelector";
import {HorizontalMultibarRenderer} from "../vendor/edges2/src/renderers/nvd3/HorizontalMultibarRenderer";
import {ChartDataTable} from "../vendor/edges2/src/renderers/bs3/ChartDataTable";

import {extractPalette} from "./nglpcommon";

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

    let palette = extractPalette("g001.css");

    let interactionValueMap = {
        "investigation" : "VIEWS",
        "export" : "EXPORTS",
        "request" : "DOWNLOADS"
    }

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
                    interval: "1M",
                    aggs: [
                        new es.TermsAggregation({
                            name: "events",
                            field: "event.exact"
                        })
                    ]
                }),
                new es.GeohashGridAggregation({
                    name: "geo",
                    field: "location",
                    precision: 1
                }),
                new es.TermsAggregation({
                    name: "events",
                    field: "event.exact",
                    aggs: [
                        new es.TermsAggregation({
                            name: "formats",
                            field: "format.exact",
                            size: 3
                        })
                    ]
                })
            ]
        }),
        components : [
            new Chart({
                id: "g001-interactions-chart",
                dataFunction: termSplitDateHistogram({
                    histogramAgg: "occurred_at",
                    termsAgg: "events"
                }),
                renderer : new MultibarRenderer({
                    xTickFormat: function(d) { return d3.time.format('%b %y')(new Date(d))},
                    color: function(d, i) {
                        return palette[d.key]
                    },
                    yTickFormat : ",.0f",
                    showLegend: false,
                    xAxisLabel: "Occurred At",
                    yAxisLabel: "Article Interactions",
                    marginLeft: 80,
                    stacked: true,
                    groupSpacing: 0.7
                })
            }),
            new Chart({
                id: "g001-interactions-table",
                dataFunction: termSplitDateHistogram({
                    histogramAgg: "occurred_at",
                    termsAgg: "events"
                }),
                renderer : new ChartDataTable({
                    labelFormat: function(d) { return d3.time.format('%b %y')(new Date(d))},
                    valueFormat: countFormat,
                    headerFormat: function(d) {
                        return interactionValueMap[d] || d;
                    }
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
            }),
            new ORTermSelector({
                id: "g001-interactions",
                field: "event.exact",
                syncCounts: false,
                lifecycle: "update",
                updateType: "fresh",
                orderBy: "term",
                orderDir: "asc",
                valueMap: interactionValueMap,
                renderer: new CheckboxORTermSelector({
                    title: "Interactions",
                    open: true,
                    togglable: false,
                    showCount: true,
                    countFormat: countFormat
                })
            }),
            new ORTermSelector({
                id: "g001-format",
                field: "format.exact",
                size: 10,
                syncCounts: false,
                lifecycle: "static",
                orderBy: "count",
                orderDir: "desc",
                valueFunction : (v) => {
                    return v.toUpperCase();
                },
                renderer: new CheckboxORTermSelector({
                    title: "Format",
                    open: true,
                    togglable: false,
                    showCount: true,
                    countFormat: countFormat
                })
            }),
            // this doesn't work - there isn't format information associated with investigations
            // new Chart({
            //     id: "g001-top-investigations",
            //     dataFunction: nestedTerms({
            //         aggs: [
            //             {events: {keys : ["investigation"], aggs: ["formats"]}}
            //         ]
            //     }),
            //     renderer: new HorizontalMultibarRenderer({
            //         title: "Investigations",
            //         legend: false
            //     })
            // }),
            new Chart({
                id: "g001-top-downloads",
                dataFunction: nestedTerms({
                    aggs: [
                        {events: {keys : ["request"], aggs: ["formats"]}}
                    ],
                    seriesName: "request"
                }),
                renderer: new HorizontalMultibarRenderer({
                    title: "Downloads",
                    legend: false,
                    valueFormat: countFormat,
                    color: function(d, i) {
                        return palette[d.key]
                    },
                    showXAxis: true,
                    showYAxis: false,
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    groupSpacing: 0.7,
                    onUpdate: () => {
                        let ticks = $("#g001-top-downloads .tick text");
                        for (let i = 0; i < ticks.length; i++) {
                            let tick = $(ticks[i]);
                            tick.attr("x", 0);
                            tick.attr("y", 20);
                            tick.css("text-anchor", "start");
                        }
                    }
                })
            }),
            new Chart({
                id: "g001-top-exports",
                dataFunction: nestedTerms({
                    aggs: [
                        {events: {keys : ["export"], aggs: ["formats"]}}
                    ],
                    seriesName: "export"
                }),
                renderer: new HorizontalMultibarRenderer({
                    title: "Exports",
                    legend: false,
                    valueFormat: countFormat,
                    color: function(d, i) {
                        return palette[d.key]
                    },
                    showXAxis: true,
                    showYAxis: false,
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    groupSpacing: 0.7,
                    onUpdate: () => {
                        let ticks = $("#g001-top-exports .tick text");
                        for (let i = 0; i < ticks.length; i++) {
                            let tick = $(ticks[i]);
                            tick.attr("x", 0);
                            tick.attr("y", 20);
                            tick.css("text-anchor", "start");
                        }
                    }
                })
            })
        ]
    })
}

nglp.g001.G001Template = class extends Template {
    constructor() {
        super();
        this.edge = false;
        this.showing = "chart";
        this.namespace = "g001-template";
    }

    draw(edge) {
        this.edge = edge;
        let checkboxId = htmlID(this.namespace, "show-as-table");

        let frame = `<div class="row header">
            <div class="col-xs-12">
                <h1>G001: Article  Downloads for  Unit Administrators</h1>
                <h2>Article downloads by format, including landing page and metadata exports in aggregate</h2> 
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
        <div class="row report-area">
            <div class="col-md-3">
                <div id="g001-interactions"></div>
                <div id="g001-format"></div>
            </div>
            <div class="col-md-9">
                <p><input type="checkbox" name="${checkboxId}" id="${checkboxId}"> Show as table</p>
                <div id="g001-interactions-chart"></div>
                <div id="g001-interactions-table" style="display:none">TABLE HERE</div>
                <div id="g001-interactions-map"></div>
                <div class="row formats-header">
                    <div class="col-xs-12">
                        <h3>Top 3 Formats</h3>
                    </div>
                </div>
                <div class="row">
<!--                    <div class="col-md-4">-->
<!--                        <div id="g001-top-investigations"></div>-->
<!--                    </div>-->
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

        let checkboxSelector = idSelector(this.namespace, "show-as-table");
        on(checkboxSelector, "change", this, "toggleTable");
    }

    toggleTable() {
        let chart = this.edge.jq("#g001-interactions-chart");
        let table = this.edge.jq("#g001-interactions-table");
        if (this.showing === "chart") {
            chart.hide();
            table.show();
            this.showing = "table"
        } else {
            table.hide();
            chart.show();
            this.showing = "chart"
        }
    }
}

export default nglp;