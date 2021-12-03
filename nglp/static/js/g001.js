(function () {
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}
function $0ace6cd118fdb36a$export$9099ad97b570f7c(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}

function $1d4692efe908bac5$export$9099ad97b570f7c(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function $6b21f555626aa41c$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $6b21f555626aa41c$export$9099ad97b570f7c(Constructor, protoProps, staticProps) {
    if (protoProps) $6b21f555626aa41c$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $6b21f555626aa41c$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}

function $0726ab3728f86779$export$9099ad97b570f7c(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

function $6f1885a119f0af4a$var$getPrototypeOf(o) {
    $6f1885a119f0af4a$var$getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return $6f1885a119f0af4a$var$getPrototypeOf(o);
}
function $6f1885a119f0af4a$export$9099ad97b570f7c(o) {
    return $6f1885a119f0af4a$var$getPrototypeOf(o);
}


function $b593bef4e8d65d9f$export$9099ad97b570f7c(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = $6f1885a119f0af4a$export$9099ad97b570f7c(object);
        if (object === null) break;
    }
    return object;
}


function $59ef20e355e8922b$var$get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) $59ef20e355e8922b$var$get = Reflect.get;
    else $59ef20e355e8922b$var$get = function get(target1, property1, receiver1) {
        var base = $b593bef4e8d65d9f$export$9099ad97b570f7c(target1, property1);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property1);
        if (desc.get) return desc.get.call(receiver1 || target1);
        return desc.value;
    };
    return $59ef20e355e8922b$var$get(target, property, receiver);
}
function $59ef20e355e8922b$export$9099ad97b570f7c(target, property, reciever) {
    return $59ef20e355e8922b$var$get(target, property, reciever);
}

function $36386457df3576da$var$setPrototypeOf(o, p) {
    $36386457df3576da$var$setPrototypeOf = Object.setPrototypeOf || function setPrototypeOf(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return $36386457df3576da$var$setPrototypeOf(o, p);
}
function $36386457df3576da$export$9099ad97b570f7c(o, p) {
    return $36386457df3576da$var$setPrototypeOf(o, p);
}


function $cb9ce7a7602b77d1$export$9099ad97b570f7c(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) $36386457df3576da$export$9099ad97b570f7c(subClass, superClass);
}


function $870d9c554f775ab9$export$9099ad97b570f7c(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}


function $968cbe9a7612a00d$export$9099ad97b570f7c(self, call) {
    if (call && ($870d9c554f775ab9$export$9099ad97b570f7c(call) === "object" || typeof call === "function")) return call;
    return $0ace6cd118fdb36a$export$9099ad97b570f7c(self);
}

function $dc707e5b58b75f7a$export$9099ad97b570f7c(arr) {
    if (Array.isArray(arr)) return arr;
}


function $9849c3158b9a2728$export$9099ad97b570f7c(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}


function $0222784b69dbfd43$export$9099ad97b570f7c() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}


function $3fd025669e1dbd56$export$9099ad97b570f7c(arr, i) {
    return $dc707e5b58b75f7a$export$9099ad97b570f7c(arr) || $9849c3158b9a2728$export$9099ad97b570f7c(arr, i) || $0222784b69dbfd43$export$9099ad97b570f7c();
}

function $960b9d880449f042$export$9099ad97b570f7c(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    }
}



function $af05cca3b5e4897b$export$9099ad97b570f7c() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}


function $631c5afe36f33b96$export$9099ad97b570f7c(arr) {
    return $960b9d880449f042$export$9099ad97b570f7c(arr) || $9849c3158b9a2728$export$9099ad97b570f7c(arr) || $af05cca3b5e4897b$export$9099ad97b570f7c();
}



var $aa95204b620a0ef2$export$4048ae5fe51d81b7 = window.$;




var $1f5712c12abeeb70$var$Aggregation = /*#__PURE__*/ function() {
    "use strict";
    function $1f5712c12abeeb70$var$Aggregation(params) {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $1f5712c12abeeb70$var$Aggregation);
        this.name = params.name;
        this.aggs = params.aggs || [];
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($1f5712c12abeeb70$var$Aggregation, [
        {
            key: "addAggregation",
            value: function addAggregation(agg) {
                for(var i = 0; i < this.aggs.length; i++){
                    if (this.aggs[i].name === agg.name) return;
                }
                this.aggs.push(agg);
            }
        },
        {
            key: "removeAggregation",
            value: function removeAggregation() {
            }
        },
        {
            key: "clearAggregations",
            value: function clearAggregations() {
            }
        },
        {
            // for use by sub-classes, for their convenience in rendering
            // the overall structure of the aggregation to an object
            key: "_make_aggregation",
            value: function _make_aggregation(type, body) {
                var obj = {
                };
                obj[this.name] = {
                };
                obj[this.name][type] = body;
                if (this.aggs.length > 0) {
                    obj[this.name]["aggs"] = {
                    };
                    for(var i = 0; i < this.aggs.length; i++)$aa95204b620a0ef2$export$4048ae5fe51d81b7.extend(obj[this.name]["aggs"], this.aggs[i].objectify());
                }
                return obj;
            }
        },
        {
            key: "_parse_wrapper",
            value: function _parse_wrapper(obj, type) {
                this.name = Object.keys(obj)[0];
                var body = obj[this.name][type];
                var aggs = obj[this.name].aggs ? obj[this.name].aggs : obj[this.name].aggregations;
                if (aggs) {
                    var anames = Object.keys(aggs);
                    for(var i = 0; i < anames.length; i++){
                        var name = anames[i];
                        var agg = aggs[anames[i]];
                        var subtype = Object.keys(agg)[0];
                        var raw = {
                        };
                        raw[name] = agg;
                        var oa = $1f5712c12abeeb70$export$8b446892c82de644.aggregationFactory(subtype, {
                            raw: raw
                        });
                        if (oa) this.addAggregation(oa);
                    }
                }
                return body;
            }
        }
    ]);
    return $1f5712c12abeeb70$var$Aggregation;
}();
$0726ab3728f86779$export$9099ad97b570f7c($1f5712c12abeeb70$var$Aggregation, "type", "aggregation");
var $1f5712c12abeeb70$var$Filter = /*#__PURE__*/ function() {
    "use strict";
    function $1f5712c12abeeb70$var$Filter(params) {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $1f5712c12abeeb70$var$Filter);
        this.field = params.field;
        this.type_name = params.type_name;
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($1f5712c12abeeb70$var$Filter, [
        {
            key: "matches",
            value: function matches(other) {
                return this._baseMatch(other);
            }
        },
        {
            key: "_baseMatch",
            value: function _baseMatch(other) {
                // type must match
                if (other.type_name !== this.type_name) return false;
                // field (if set) must match
                if (other.field && other.field !== this.field) return false;
                // otherwise this matches
                return true;
            }
        },
        {
            key: "objectify",
            value: function objectify() {
            }
        },
        {
            key: "parse",
            value: function parse() {
            }
        }
    ]);
    return $1f5712c12abeeb70$var$Filter;
}();
$0726ab3728f86779$export$9099ad97b570f7c($1f5712c12abeeb70$var$Filter, "type", "filter");
function $1f5712c12abeeb70$var$_classExtends(clazz, ref) {
    if (clazz.__proto__ === null) return false;
    if (clazz.__proto__ === ref) return true;
    else return $1f5712c12abeeb70$var$_classExtends(clazz.__proto__, ref);
}
/** @namespace */ var $1f5712c12abeeb70$export$8b446892c82de644 = {
    /////////////////////////////////////////////////////
    // fixed properties, like special characters, etc
    // The reserved characters in elasticsearch query strings
    // Note that the "\" has to go first, as when these are substituted, that character
    // will get introduced as an escape character
    specialChars: [
        "\\",
        "+",
        "-",
        "=",
        "&&",
        "||",
        ">",
        "<",
        "!",
        "(",
        ")",
        "{",
        "}",
        "[",
        "]",
        "^",
        '"',
        "~",
        "*",
        "?",
        ":",
        "/"
    ],
    // FIXME: specialChars is not currently used for encoding, but it would be worthwhile giving the option
    // to allow/disallow specific values, but that requires a much better (automated) understanding of the
    // query DSL
    // the reserved special character set with * and " removed, so that users can do quote searches and wildcards
    // if they want
    specialCharsSubSet: [
        "\\",
        "+",
        "-",
        "=",
        "&&",
        "||",
        ">",
        "<",
        "!",
        "(",
        ")",
        "{",
        "}",
        "[",
        "]",
        "^",
        "~",
        "?",
        ":",
        "/"
    ],
    // values that have to be in even numbers in the query or they will be escaped
    characterPairs: [
        '"'
    ],
    // distance units allowed by ES
    distanceUnits: [
        "km",
        "mi",
        "miles",
        "in",
        "inch",
        "yd",
        "yards",
        "kilometers",
        "mm",
        "millimeters",
        "cm",
        "centimeters",
        "m",
        "meters"
    ],
    // request method to be used throughout.  Set this before using the module if you want it different
    requestMethod: "get",
    // add request headers (such as Auth) if you need to
    requestHeaders: false,
    Filter: $1f5712c12abeeb70$var$Filter,
    Aggregation: $1f5712c12abeeb70$var$Aggregation,
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    // object factories
    aggregationFactory: function aggregationFactory(type, params) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.entries($1f5712c12abeeb70$export$8b446892c82de644)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _value = $3fd025669e1dbd56$export$9099ad97b570f7c(_step.value, 2), key = _value[0], value = _value[1];
                if ($1f5712c12abeeb70$var$_classExtends($1f5712c12abeeb70$export$8b446892c82de644[key], $1f5712c12abeeb70$var$Aggregation)) {
                    if ($1f5712c12abeeb70$export$8b446892c82de644[key].type === type) return new $1f5712c12abeeb70$export$8b446892c82de644[key](params);
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    },
    filterFactory: function filterFactory(type, params) {
        // query string is a special case
        if (type === "query_string") return new $1f5712c12abeeb70$export$8b446892c82de644.QueryString(params);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            // otherwise auto-detect
            for(var _iterator = Object.entries($1f5712c12abeeb70$export$8b446892c82de644)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _value = $3fd025669e1dbd56$export$9099ad97b570f7c(_step.value, 2), key = _value[0], value = _value[1];
                if ($1f5712c12abeeb70$var$_classExtends($1f5712c12abeeb70$export$8b446892c82de644[key], $1f5712c12abeeb70$var$Filter)) {
                    if ($1f5712c12abeeb70$export$8b446892c82de644[key].type === type) return new $1f5712c12abeeb70$export$8b446892c82de644[key](params);
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    },
    ////////////////////////////////////////////////////
    /** @namespace */ /** Query objects for standard query structure */ /**
     *
     * @param filtered {Boolean} Is this an ES filtered query?
     * @param size=10 {Number} What amount of results are required. ES defaults to 10.
     * @param from {Number} Beginning point for results.
     * @param fields {String[]} Required fields.
     * @param aggs {String[]} ES aggregations.
     * @param must {String[]} ES must query.
     * @param source {String} ES source.
     * @param should {String[]} ES should.
     * @param mustNot {String[]} ES must not.
     * @param partialFields ???
     * @param scriptFields ???
     * @param minimumShouldMatch ???
     * @param facets {String[]} for older versions of ES
     */ Query: /*#__PURE__*/ function() {
        "use strict";
        function _class(params) {
            $1d4692efe908bac5$export$9099ad97b570f7c(this, _class);
            if (!params) params = {
            };
            // properties that can be set directly (thought note that they may need to be read via their getters)
            this.filtered = false; // this is no longer present in es5.x+
            this.trackTotalHits = true; // FIXME: hard code this for the moment, we can introduce the ability to vary it later
            this.size = $1f5712c12abeeb70$export$8b446892c82de644.getParam(params.size, false);
            this.from = $1f5712c12abeeb70$export$8b446892c82de644.getParam(params.from, false);
            this.fields = $1f5712c12abeeb70$export$8b446892c82de644.getParam(params.fields, []);
            this.aggs = $1f5712c12abeeb70$export$8b446892c82de644.getParam(params.aggs, []);
            this.must = $1f5712c12abeeb70$export$8b446892c82de644.getParam(params.must, []);
            this.mustNot = $1f5712c12abeeb70$export$8b446892c82de644.getParam(params.mustNot, []);
            // defaults from properties that will be set through their setters (see the bottom
            // of the function)
            this.queryString = false;
            this.sort = [];
            // ones that we haven't used yet, so are awaiting implementation
            // NOTE: once we implement these, they also need to be considered in merge()
            this.source = $1f5712c12abeeb70$export$8b446892c82de644.getParam(params.source, false);
            this.should = $1f5712c12abeeb70$export$8b446892c82de644.getParam(params.should, []);
            this.partialFields = $1f5712c12abeeb70$export$8b446892c82de644.getParam(params.partialField, false);
            this.scriptFields = $1f5712c12abeeb70$export$8b446892c82de644.getParam(params.scriptFields, false);
            this.minimumShouldMatch = $1f5712c12abeeb70$export$8b446892c82de644.getParam(params.minimumShouldMatch, false);
            this.partialFields = $1f5712c12abeeb70$export$8b446892c82de644.getParam(params.partialFields, false);
            this.scriptFields = $1f5712c12abeeb70$export$8b446892c82de644.getParam(params.scriptFields, false);
            // for old versions of ES, so are not necessarily going to be implemented
            this.facets = $1f5712c12abeeb70$export$8b446892c82de644.getParam(params.facets, []);
            ///////////////////////////////////////////////////////////
            // final part of construction - set the dynamic properties
            // via their setters
            if (params.queryString) this.setQueryString(params.queryString);
            if (params.sort) this.setSortBy(params.sort);
            // finally, if we're given a raw query, parse it
            if (params.raw) this.parse(params.raw);
        }
        $6b21f555626aa41c$export$9099ad97b570f7c(_class, [
            {
                /////////////////////////////////////////////////
                // getters and setters
                key: "getSize",
                value: function getSize() {
                    if (this.size !== undefined && this.size !== false) return this.size;
                    return 10;
                }
            },
            {
                key: "getFrom",
                value: function getFrom() {
                    if (this.from) return this.from;
                    return 0;
                }
            },
            {
                key: "addField",
                value: function addField(field) {
                    if ($aa95204b620a0ef2$export$4048ae5fe51d81b7.inArray(field, this.fields) === -1) this.fields.push(field);
                }
            },
            {
                key: "setQueryString",
                value: function setQueryString(params) {
                    var qs = params;
                    if (!(params instanceof $1f5712c12abeeb70$export$8b446892c82de644.QueryString)) {
                        if ($aa95204b620a0ef2$export$4048ae5fe51d81b7.isPlainObject(params)) qs = new $1f5712c12abeeb70$export$8b446892c82de644.QueryString(params);
                        else qs = new $1f5712c12abeeb70$export$8b446892c82de644.QueryString({
                            queryString: params
                        });
                    }
                    this.queryString = qs;
                }
            },
            {
                key: "getQueryString",
                value: function getQueryString() {
                    return this.queryString;
                }
            },
            {
                key: "removeQueryString",
                value: function removeQueryString() {
                    this.queryString = false;
                }
            },
            {
                key: "setSortBy",
                value: function setSortBy(params) {
                    // overwrite anything that was there before
                    this.sort = [];
                    // ensure we have a list of sort options
                    var sorts = params;
                    if (!$aa95204b620a0ef2$export$4048ae5fe51d81b7.isArray(params)) sorts = [
                        params
                    ];
                    // add each one
                    for(var i = 0; i < sorts.length; i++)this.addSortBy(sorts[i]);
                }
            },
            {
                key: "addSortBy",
                value: function addSortBy(params) {
                    // ensure we have an instance of es.Sort
                    var sort = params;
                    if (!(params instanceof $1f5712c12abeeb70$export$8b446892c82de644.Sort)) sort = new $1f5712c12abeeb70$export$8b446892c82de644.Sort(params);
                    // prevent repeated sort options being added
                    for(var i = 0; i < this.sort.length; i++){
                        var so = this.sort[i];
                        if (so.field === sort.field) return;
                    }
                    // add the sort option
                    this.sort.push(sort);
                }
            },
            {
                key: "prependSortBy",
                value: function prependSortBy(params) {
                    // ensure we have an instance of es.Sort
                    var sort = params;
                    if (!(params instanceof $1f5712c12abeeb70$export$8b446892c82de644.Sort)) sort = new $1f5712c12abeeb70$export$8b446892c82de644.Sort(params);
                    this.removeSortBy(sort);
                    this.sort.unshift(sort);
                }
            },
            {
                key: "removeSortBy",
                value: function removeSortBy(params) {
                    // ensure we have an instance of es.Sort
                    var sort = params;
                    if (!(params instanceof $1f5712c12abeeb70$export$8b446892c82de644.Sort)) sort = new $1f5712c12abeeb70$export$8b446892c82de644.Sort(params);
                    var removes = [];
                    for(var i = 0; i < this.sort.length; i++){
                        var so = this.sort[i];
                        if (so.field === sort.field) removes.push(i);
                    }
                    removes = removes.sort().reverse();
                    for(var i = 0; i < removes.length; i++)this.sort.splice(removes[i], 1);
                }
            },
            {
                key: "getSortBy",
                value: function getSortBy() {
                    return this.sort;
                }
            },
            {
                key: "setSourceFilters",
                value: function setSourceFilters(params) {
                    if (!this.source) this.source = {
                        include: [],
                        exclude: []
                    };
                    if (params.include) this.source.include = params.include;
                    if (params.exclude) this.source.exclude = params.exclude;
                }
            },
            {
                key: "addSourceFilters",
                value: function addSourceFilters(params) {
                    if (!this.source) this.source = {
                        include: [],
                        exclude: []
                    };
                    if (params.include) {
                        if (this.source.include) Array.prototype.push.apply(this.source.include, params.include);
                        else this.source.include = params.include;
                    }
                    if (params.exclude) {
                        if (this.source.include) Array.prototype.push.apply(this.source.include, params.include);
                        else this.source.include = params.include;
                    }
                }
            },
            {
                key: "getSourceIncludes",
                value: function getSourceIncludes() {
                    if (!this.source) return [];
                    return this.source.include;
                }
            },
            {
                key: "getSourceExcludes",
                value: function getSourceExcludes() {
                    if (!this.source) return [];
                    return this.source.exclude;
                }
            },
            {
                key: "getAggregation",
                value: function getAggregation(params) {
                    var name = params.name;
                    for(var i = 0; i < this.aggs.length; i++){
                        var a = this.aggs[i];
                        if (a.name === name) return a;
                    }
                }
            },
            {
                key: "addAggregation",
                value: function addAggregation(agg, overwrite) {
                    if (overwrite) this.removeAggregation(agg.name);
                    else for(var i = 0; i < this.aggs.length; i++){
                        if (this.aggs[i].name === agg.name) return;
                    }
                    this.aggs.push(agg);
                }
            },
            {
                key: "removeAggregation",
                value: function removeAggregation(name) {
                    var removes = [];
                    for(var i = 0; i < this.aggs.length; i++)if (this.aggs[i].name === name) removes.push(i);
                    removes = removes.sort().reverse();
                    for(var i = 0; i < removes.length; i++)this.aggs.splice(removes[i], 1);
                }
            },
            {
                key: "clearAggregations",
                value: function clearAggregations() {
                    this.aggs = [];
                }
            },
            {
                key: "listAggregations",
                value: function listAggregations() {
                    return this.aggs;
                }
            },
            {
                key: "addMust",
                value: function addMust(filter) {
                    var existing = this.listMust(filter);
                    if (existing.length === 0) this.must.push(filter);
                }
            },
            {
                key: "listMust",
                value: function listMust(template) {
                    return this.listFilters({
                        boolType: "must",
                        template: template
                    });
                }
            },
            {
                key: "removeMust",
                value: function removeMust(template) {
                    var removes = [];
                    for(var i = 0; i < this.must.length; i++){
                        var m = this.must[i];
                        if (m.matches(template)) removes.push(i);
                    }
                    removes = removes.sort().reverse();
                    for(var i = 0; i < removes.length; i++)this.must.splice(removes[i], 1);
                    // return the count of filters that were removed
                    return removes.length;
                }
            },
            {
                key: "clearMust",
                value: function clearMust() {
                    this.must = [];
                }
            },
            {
                key: "addMustNot",
                value: function addMustNot(filter) {
                    var existing = this.listMustNot(filter);
                    if (existing.length === 0) this.mustNot.push(filter);
                }
            },
            {
                key: "listMustNot",
                value: function listMustNot(template) {
                    return this.listFilters({
                        boolType: "must_not",
                        template: template
                    });
                }
            },
            {
                key: "removeMustNot",
                value: function removeMustNot(template) {
                    var removes = [];
                    for(var i = 0; i < this.mustNot.length; i++){
                        var m = this.mustNot[i];
                        if (m.matches(template)) removes.push(i);
                    }
                    removes = removes.sort().reverse();
                    for(var i = 0; i < removes.length; i++)this.mustNot.splice(removes[i], 1);
                    // return the count of filters that were removed
                    return removes.length;
                }
            },
            {
                key: "clearMustNot",
                value: function clearMustNot() {
                    this.mustNot = [];
                }
            },
            {
                /////////////////////////////////////////////////
                // interrogative functions
                key: "hasFilters",
                value: function hasFilters() {
                    return this.must.length > 0 || this.should.length > 0 || this.mustNot.length > 0;
                }
            },
            {
                // in general better to use the listMust, listShould, listMustNot, directly.
                // those methods each use this method internally anyway
                key: "listFilters",
                value: function listFilters(params) {
                    var boolType = params.boolType || "must";
                    var template = params.template || false;
                    //var field = params.field || false;
                    //var filterType = params.filterType || false;
                    // first get the boolean filter field that we're going to look in
                    var bool = [];
                    if (boolType === "must") bool = this.must;
                    else if (boolType === "should") bool = this.should;
                    else if (boolType === "must_not") bool = this.mustNot;
                    if (!template) return bool;
                    var l = [];
                    for(var i = 0; i < bool.length; i++){
                        var m = bool[i];
                        if (m.matches(template)) l.push(m);
                    }
                    return l;
                }
            },
            {
                ////////////////////////////////////////////////
                // create, parse, serialise functions
                key: "merge",
                value: function merge(source) {
                    // merge this query (in place) with the provided query, where the provided
                    // query is dominant (i.e. any properties it has override this object)
                    //
                    // These are the merge rules:
                    // this.filtered - take from source
                    // this.size - take from source if set
                    // this.from - take from source if set
                    // this.fields - append any new ones from source
                    // this.aggs - append any new ones from source, overwriting any with the same name
                    // this.must - append any new ones from source
                    // this.mustNot - append any new ones from source
                    // this.queryString - take from source if set
                    // this.sort - prepend any from source
                    // this.source - append any new ones from source
                    this.filtered = source.filtered;
                    if (source.size) this.size = source.size;
                    if (source.from) this.from = source.from;
                    if (source.fields && source.fields.length > 0) for(var i = 0; i < source.fields.length; i++)this.addField(source.fields[i]);
                    var aggs = source.listAggregations();
                    for(var i = 0; i < aggs.length; i++)this.addAggregation(aggs[i], true);
                    var must = source.listMust();
                    for(var i = 0; i < must.length; i++)this.addMust(must[i]);
                    var mustNot = source.listMustNot();
                    for(var i1 = 0; i1 < mustNot.length; i1++)this.addMustNot(mustNot[i1]);
                    if (source.getQueryString()) this.setQueryString(source.getQueryString());
                    var sorts = source.getSortBy();
                    if (sorts && sorts.length > 0) {
                        sorts.reverse();
                        for(var i = 0; i < sorts.length; i++)this.prependSortBy(sorts[i]);
                    }
                    var includes = source.getSourceIncludes();
                    var excludes = source.getSourceExcludes();
                    this.addSourceFilters({
                        include: includes,
                        exclude: excludes
                    });
                }
            },
            {
                key: "objectify",
                value: function objectify(params) {
                    if (!params) params = {
                    };
                    // this allows you to specify which bits of the query get objectified
                    var include_query_string = params.include_query_string === undefined ? true : params.include_query_string;
                    var include_filters = params.include_filters === undefined ? true : params.include_filters;
                    var include_paging = params.include_paging === undefined ? true : params.include_paging;
                    var include_sort = params.include_sort === undefined ? true : params.include_sort;
                    var include_fields = params.include_fields === undefined ? true : params.include_fields;
                    var include_aggregations = params.include_aggregations === undefined ? true : params.include_aggregations;
                    var include_source_filters = params.include_source_filters === undefined ? true : params.include_source_filters;
                    // queries will be separated in queries and bool filters, which may then be
                    // combined later
                    var q = {
                    };
                    var query_part = {
                    };
                    var bool = {
                    };
                    // query string
                    if (this.queryString && include_query_string) $aa95204b620a0ef2$export$4048ae5fe51d81b7.extend(query_part, this.queryString.objectify());
                    if (include_filters) {
                        // add any MUST filters
                        if (this.must.length > 0) {
                            var musts = [];
                            for(var i = 0; i < this.must.length; i++){
                                var m = this.must[i];
                                musts.push(m.objectify());
                            }
                            bool["must"] = musts;
                        }
                        // add any must_not filters
                        if (this.mustNot.length > 0) {
                            var mustNots = [];
                            for(var i = 0; i < this.mustNot.length; i++){
                                var m = this.mustNot[i];
                                mustNots.push(m.objectify());
                            }
                            bool["must_not"] = mustNots;
                        }
                    }
                    var qpl = Object.keys(query_part).length;
                    var bpl = Object.keys(bool).length;
                    var query_portion = {
                    };
                    if (qpl === 0 && bpl === 0) query_portion["match_all"] = {
                    };
                    else if (qpl === 0 && bpl > 0) query_portion["bool"] = bool;
                    else if (qpl > 0 && bpl === 0) query_portion = query_part;
                    else if (qpl > 0 && bpl > 0) {
                        query_portion["bool"] = bool;
                        query_portion["bool"]["must"].push(query_part);
                    }
                    q["query"] = query_portion;
                    if (include_paging) {
                        // page size
                        if (this.size !== undefined && this.size !== false) q["size"] = this.size;
                        // page number (from)
                        if (this.from) q["from"] = this.from;
                    }
                    // sort option
                    if (this.sort.length > 0 && include_sort) {
                        q["sort"] = [];
                        for(var i = 0; i < this.sort.length; i++)q.sort.push(this.sort[i].objectify());
                    }
                    // fields
                    if (this.fields.length > 0 && include_fields) q["stored_fields"] = this.fields;
                    // add any aggregations
                    if (this.aggs.length > 0 && include_aggregations) {
                        q["aggs"] = {
                        };
                        for(var i = 0; i < this.aggs.length; i++){
                            var agg = this.aggs[i];
                            $aa95204b620a0ef2$export$4048ae5fe51d81b7.extend(q.aggs, agg.objectify());
                        }
                    }
                    // add the source filters
                    if (include_source_filters && this.source && (this.source.include || this.source.exclude)) {
                        q["_source"] = {
                        };
                        if (this.source.include.length > 0) q["_source"]["include"] = this.source.include;
                        if (this.source.exclude.length > 0) q["_source"]["exclude"] = this.source.exclude;
                    }
                    // set whether to track the total
                    if (this.trackTotalHits) q["track_total_hits"] = true;
                    return q;
                }
            },
            {
                key: "toString",
                value: function toString() {
                    return JSON.stringify(this.objectify());
                }
            },
            {
                key: "parse",
                value: function parse(obj) {
                    function parseBool(bool, target) {
                        if (bool.must) for(var i = 0; i < bool.must.length; i++){
                            var type = Object.keys(bool.must[i])[0];
                            var fil = $1f5712c12abeeb70$export$8b446892c82de644.filterFactory(type, {
                                raw: bool.must[i]
                            });
                            if (fil && type !== "query_string") target.addMust(fil);
                            else if (fil && type === "query_string") // FIXME: this will work fine as long as there are no nested bools
                            target.setQueryString(fil);
                        }
                        if (bool.must_not) for(var i = 0; i < bool.must_not.length; i++){
                            var type = Object.keys(bool.must_not[i])[0];
                            var fil = $1f5712c12abeeb70$export$8b446892c82de644.filterFactory(type, {
                                raw: bool.must_not[i]
                            });
                            if (fil) target.addMustNot(fil);
                        }
                    }
                    function parseQuery(q, target) {
                        var keys = Object.keys(q);
                        for(var i = 0; i < keys.length; i++){
                            var type = keys[i];
                            if (type === "bool") {
                                parseBool(q.bool, target);
                                continue;
                            }
                            var impl = $1f5712c12abeeb70$export$8b446892c82de644.filterFactory(type, {
                                raw: q[type]
                            });
                            if (impl) {
                                if (type === "query_string") target.setQueryString(impl);
                            }
                        }
                    }
                    // parse the query itself
                    if (obj.query) {
                        if (obj.query.filtered) {
                            this.filtered = true;
                            var bool = obj.query.filtered.filter.bool;
                            if (bool) parseBool(bool, this);
                            var q = obj.query.filtered.query;
                            parseQuery(q, this);
                        } else {
                            var q = obj.query;
                            parseQuery(q, this);
                        }
                    }
                    if (obj.size) this.size = obj.size;
                    if (obj.from) this.from = obj.from;
                    if (obj.stored_fields) this.fields = obj.stored_fields;
                    if (obj.sort) for(var i = 0; i < obj.sort.length; i++){
                        var so = obj.sort[i];
                        this.addSortBy(new $1f5712c12abeeb70$export$8b446892c82de644.Sort({
                            raw: so
                        }));
                    }
                    if (obj.aggs || obj.aggregations) {
                        var aggs = obj.aggs ? obj.aggs : obj.aggregations;
                        var anames = Object.keys(aggs);
                        for(var i = 0; i < anames.length; i++){
                            var name = anames[i];
                            var agg = aggs[name];
                            var type = Object.keys(agg)[0];
                            var raw = {
                            };
                            raw[name] = agg;
                            var oa = $1f5712c12abeeb70$export$8b446892c82de644.aggregationFactory(type, {
                                raw: raw
                            });
                            if (oa) this.addAggregation(oa);
                        }
                    }
                    if (obj._source) {
                        var source = obj._source;
                        var include = [];
                        var exclude = [];
                        if (typeof source === "string") include.push(source);
                        else if (Array.isArray(source)) include = source;
                        else {
                            if (source.hasOwnProperty("include")) include = source.include;
                            if (source.hasOwnProperty("exclude")) exclude = source.exclude;
                        }
                        this.setSourceFilters({
                            include: include,
                            exclude: exclude
                        });
                    }
                }
            },
            {
                key: "clone",
                value: function clone() {
                    return new $1f5712c12abeeb70$export$8b446892c82de644.Query({
                        raw: Object.assign({
                        }, this.objectify())
                    });
                }
            }
        ]);
        return _class;
    }(),
    ///////////////////////////////////////////////
    // Query String
    QueryString: /*#__PURE__*/ function() {
        "use strict";
        function _class(params) {
            $1d4692efe908bac5$export$9099ad97b570f7c(this, _class);
            this.queryString = params.queryString || false;
            this.defaultField = params.defaultField || false;
            this.defaultOperator = params.defaultOperator || "OR";
            this.fuzzify = params.fuzzify || false; // * or ~
            this.escapeSet = params.escapeSet || $1f5712c12abeeb70$export$8b446892c82de644.specialCharsSubSet;
            this.pairs = params.pairs || $1f5712c12abeeb70$export$8b446892c82de644.characterPairs;
            this.unEscapeSet = params.unEscapeSet || $1f5712c12abeeb70$export$8b446892c82de644.specialChars;
            if (params.raw) this.parse(params.raw);
        }
        $6b21f555626aa41c$export$9099ad97b570f7c(_class, [
            {
                key: "objectify",
                value: function objectify() {
                    var qs = this._escape(this._fuzzify(this.queryString));
                    var obj = {
                        query_string: {
                            query: qs
                        }
                    };
                    if (this.defaultOperator) obj.query_string["default_operator"] = this.defaultOperator;
                    if (this.defaultField) obj.query_string["default_field"] = this.defaultField;
                    return obj;
                }
            },
            {
                key: "parse",
                value: function parse(obj) {
                    if (obj.query_string) obj = obj.query_string;
                    this.queryString = this._unescape(obj.query);
                    if (obj.default_operator) this.defaultOperator = obj.default_operator;
                    if (obj.default_field) this.defaultField = obj.default_field;
                }
            },
            {
                key: "_fuzzify",
                value: function _fuzzify(str) {
                    if (!this.fuzzify || !(this.fuzzify === "*" || this.fuzzify === "~")) return str;
                    if (!(str.indexOf('*') === -1 && str.indexOf('~') === -1 && str.indexOf(':') === -1)) return str;
                    var pq = "";
                    var optparts = str.split(' ');
                    for(var i = 0; i < optparts.length; i++){
                        var oip = optparts[i];
                        if (oip.length > 0) {
                            oip = oip + this.fuzzify;
                            this.fuzzify === "*" && (oip = "*" + oip);
                            pq += oip + " ";
                        }
                    }
                    return pq;
                }
            },
            {
                key: "_escapeRegExp",
                value: function _escapeRegExp(string) {
                    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
                }
            },
            {
                key: "_replaceAll",
                value: function _replaceAll(string, find, replace) {
                    return string.replace(new RegExp(this._escapeRegExp(find), 'g'), replace);
                }
            },
            {
                key: "_unReplaceAll",
                value: function _unReplaceAll(string, find) {
                    return string.replace(new RegExp("\\\\(" + this._escapeRegExp(find) + ")", 'g'), "$1");
                }
            },
            {
                key: "_paired",
                value: function _paired(string, pair) {
                    var matches = string.match(new RegExp(this._escapeRegExp(pair), "g")) || [];
                    return matches.length % 2 === 0;
                }
            },
            {
                key: "_escape",
                value: function _escape(str) {
                    // make a copy of the special characters (we may modify it in a moment)
                    var scs = this.escapeSet.slice(0);
                    // first check for pairs, and push any extra characters to be escaped
                    for(var i = 0; i < this.pairs.length; i++){
                        var char = this.pairs[i];
                        if (!this._paired(str, char)) scs.push(char);
                    }
                    // now do the escape
                    for(var i = 0; i < scs.length; i++){
                        var char = scs[i];
                        str = this._replaceAll(str, char, "\\" + char);
                    }
                    return str;
                }
            },
            {
                key: "_unescape",
                value: function _unescape(str) {
                    for(var i = 0; i < this.unEscapeSet.length; i++){
                        var char = this.unEscapeSet[i];
                        str = this._unReplaceAll(str, char);
                    }
                    return str;
                }
            }
        ]);
        return _class;
    }(),
    //////////////////////////////////////////////
    // Sort Option
    Sort: /*#__PURE__*/ function() {
        "use strict";
        function _class(params) {
            $1d4692efe908bac5$export$9099ad97b570f7c(this, _class);
            this.field = params.field || "_score";
            this.order = params.order || "desc";
            if (params.raw) this.parse(params.raw);
        }
        $6b21f555626aa41c$export$9099ad97b570f7c(_class, [
            {
                key: "objectify",
                value: function objectify() {
                    var obj = {
                    };
                    obj[this.field] = {
                        order: this.order
                    };
                    return obj;
                }
            },
            {
                key: "parse",
                value: function parse(obj) {
                    this.field = Object.keys(obj)[0];
                    if (obj[this.field].order) this.order = obj[this.field].order;
                }
            }
        ]);
        return _class;
    }(),
    //////////////////////////////////////////////
    // Root Aggregation and aggregation implementations
    TermsAggregation: function() {
        var _class = /*#__PURE__*/ function(Aggregation) {
            "use strict";
            $cb9ce7a7602b77d1$export$9099ad97b570f7c(_class, Aggregation);
            function _class(params) {
                $1d4692efe908bac5$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c(_class).call(this, params));
                _this.field = params.field || false;
                _this.size = params.size || 10;
                // set the ordering for the first time
                _this.orderBy = "_count";
                if (params.orderBy) {
                    _this.orderBy = params.orderBy;
                    if (_this.orderBy[0] !== "_") _this.orderBy = "_" + _this.orderBy;
                }
                _this.orderDir = params.orderDir || "desc";
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $6b21f555626aa41c$export$9099ad97b570f7c(_class, [
                {
                    // provide a method to set and normalise the ordering in future
                    key: "setOrdering",
                    value: function setOrdering(orderBy, orderDir) {
                        this.orderBy = orderBy;
                        if (this.orderBy[0] !== "_") this.orderBy = "_" + this.orderBy;
                        this.orderDir = orderDir;
                    }
                },
                {
                    key: "objectify",
                    value: function objectify() {
                        var body = {
                            field: this.field,
                            size: this.size,
                            order: {
                            }
                        };
                        body.order[this.orderBy] = this.orderDir;
                        return this._make_aggregation($1f5712c12abeeb70$export$8b446892c82de644.TermsAggregation.type, body);
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        var body = this._parse_wrapper(obj, $1f5712c12abeeb70$export$8b446892c82de644.TermsAggregation.type);
                        this.field = body.field;
                        if (body.size) this.size = body.size;
                        if (body.order) {
                            this.orderBy = Object.keys(body.order)[0];
                            this.orderDir = body.order[this.orderBy];
                        }
                    }
                }
            ]);
            return _class;
        }($1f5712c12abeeb70$var$Aggregation);
        $0726ab3728f86779$export$9099ad97b570f7c(_class, "type", "terms");
        return _class;
    }(),
    CardinalityAggregation: function() {
        var _class = /*#__PURE__*/ function(Aggregation) {
            "use strict";
            $cb9ce7a7602b77d1$export$9099ad97b570f7c(_class, Aggregation);
            function _class(params) {
                $1d4692efe908bac5$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c(_class).call(this, params));
                _this.field = $1f5712c12abeeb70$export$8b446892c82de644.getParam(params.field, false);
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $6b21f555626aa41c$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        var body = {
                            field: this.field
                        };
                        return this._make_aggregation($1f5712c12abeeb70$export$8b446892c82de644.CardinalityAggregation.type, body);
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        var body = this._parse_wrapper(obj, $1f5712c12abeeb70$export$8b446892c82de644.CardinalityAggregation.type);
                        this.field = body.field;
                    }
                }
            ]);
            return _class;
        }($1f5712c12abeeb70$var$Aggregation);
        $0726ab3728f86779$export$9099ad97b570f7c(_class, "type", "cardinality");
        return _class;
    }(),
    RangeAggregation: function() {
        var _class = /*#__PURE__*/ function(Aggregation) {
            "use strict";
            $cb9ce7a7602b77d1$export$9099ad97b570f7c(_class, Aggregation);
            function _class(params) {
                $1d4692efe908bac5$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c(_class).call(this, params));
                _this.field = params.field || false;
                _this.ranges = params.ranges || [];
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $6b21f555626aa41c$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        var body = {
                            field: this.field,
                            ranges: this.ranges
                        };
                        return this._make_aggregation($1f5712c12abeeb70$export$8b446892c82de644.RangeAggregation.type, body);
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        var body = this._parse_wrapper(obj, $1f5712c12abeeb70$export$8b446892c82de644.RangeAggregation.type);
                        this.field = body.field;
                        this.ranges = body.ranges;
                    }
                }
            ]);
            return _class;
        }($1f5712c12abeeb70$var$Aggregation);
        $0726ab3728f86779$export$9099ad97b570f7c(_class, "type", "range");
        return _class;
    }(),
    GeoDistanceAggregation: function() {
        var _class = /*#__PURE__*/ function(Aggregation) {
            "use strict";
            $cb9ce7a7602b77d1$export$9099ad97b570f7c(_class, Aggregation);
            function _class(params) {
                $1d4692efe908bac5$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c(_class).call(this, params));
                _this.field = params.field || false;
                _this.lat = params.lat || false;
                _this.lon = params.lon || false;
                _this.unit = params.unit || "m";
                _this.distance_type = params.distance_type || "sloppy_arc";
                _this.ranges = params.ranges || [];
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $6b21f555626aa41c$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        var body = {
                            field: this.field,
                            origin: {
                                lat: this.lat,
                                lon: this.lon
                            },
                            unit: this.unit,
                            distance_type: this.distance_type,
                            ranges: this.ranges
                        };
                        return this._make_aggregation($1f5712c12abeeb70$export$8b446892c82de644.GeoDistanceAggregation.type, body);
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        var body = this._parse_wrapper(obj, $1f5712c12abeeb70$export$8b446892c82de644.GeoDistanceAggregation.type);
                        this.field = body.field;
                        // FIXME: only handles the lat/lon object - but there are several forms
                        // this origin could take
                        var origin = body.origin;
                        if (origin.lat) this.lat = origin.lat;
                        if (origin.lon) this.lon = origin.lon;
                        if (body.unit) this.unit = body.unit;
                        if (body.distance_type) this.distance_type = body.distance_type;
                        this.ranges = body.ranges;
                    }
                }
            ]);
            return _class;
        }($1f5712c12abeeb70$var$Aggregation);
        $0726ab3728f86779$export$9099ad97b570f7c(_class, "type", "geo_distance");
        return _class;
    }(),
    GeohashGridAggregation: function() {
        var _class = /*#__PURE__*/ function(Aggregation) {
            "use strict";
            $cb9ce7a7602b77d1$export$9099ad97b570f7c(_class, Aggregation);
            function _class(params) {
                $1d4692efe908bac5$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c(_class).call(this, params));
                _this.field = params.field || false;
                _this.precision = params.precision || 3;
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $6b21f555626aa41c$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        var body = {
                            field: this.field,
                            precision: this.precision
                        };
                        return this._make_aggregation($1f5712c12abeeb70$export$8b446892c82de644.GeohashGridAggregation.type, body);
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        var body = this._parse_wrapper(obj, $1f5712c12abeeb70$export$8b446892c82de644.GeohashGridAggregation.type);
                        this.field = body.field;
                        this.precision = body.precision;
                    }
                }
            ]);
            return _class;
        }($1f5712c12abeeb70$var$Aggregation);
        $0726ab3728f86779$export$9099ad97b570f7c(_class, "type", "geohash_grid");
        return _class;
    }(),
    StatsAggregation: function() {
        var _class = /*#__PURE__*/ function(Aggregation) {
            "use strict";
            $cb9ce7a7602b77d1$export$9099ad97b570f7c(_class, Aggregation);
            function _class(params) {
                $1d4692efe908bac5$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c(_class).call(this, params));
                _this.field = params.field || false;
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $6b21f555626aa41c$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        var body = {
                            field: this.field
                        };
                        return this._make_aggregation($1f5712c12abeeb70$export$8b446892c82de644.StatsAggregation.type, body);
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        var body = this._parse_wrapper(obj, $1f5712c12abeeb70$export$8b446892c82de644.StatsAggregation.type);
                        this.field = body.field;
                    }
                }
            ]);
            return _class;
        }($1f5712c12abeeb70$var$Aggregation);
        $0726ab3728f86779$export$9099ad97b570f7c(_class, "type", "stats");
        return _class;
    }(),
    SumAggregation: function() {
        var _class = /*#__PURE__*/ function(Aggregation) {
            "use strict";
            $cb9ce7a7602b77d1$export$9099ad97b570f7c(_class, Aggregation);
            function _class(params) {
                $1d4692efe908bac5$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c(_class).call(this, params));
                _this.field = params.field || false;
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $6b21f555626aa41c$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        var body = {
                            field: this.field
                        };
                        return this._make_aggregation($1f5712c12abeeb70$export$8b446892c82de644.SumAggregation.type, body);
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        var body = this._parse_wrapper(obj, $1f5712c12abeeb70$export$8b446892c82de644.SumAggregation.type);
                        this.field = body.field;
                    }
                }
            ]);
            return _class;
        }($1f5712c12abeeb70$var$Aggregation);
        $0726ab3728f86779$export$9099ad97b570f7c(_class, "type", "sum");
        return _class;
    }(),
    DateHistogramAggregation: function() {
        var _class = /*#__PURE__*/ function(Aggregation) {
            "use strict";
            $cb9ce7a7602b77d1$export$9099ad97b570f7c(_class, Aggregation);
            function _class(params) {
                $1d4692efe908bac5$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c(_class).call(this, params));
                _this.field = params.field || false;
                _this.interval = params.interval || "month";
                _this.format = params.format || false;
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $6b21f555626aa41c$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        var body = {
                            field: this.field,
                            interval: this.interval
                        };
                        if (this.format) body["format"] = this.format;
                        return this._make_aggregation($1f5712c12abeeb70$export$8b446892c82de644.DateHistogramAggregation.type, body);
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        var body = this._parse_wrapper(obj, $1f5712c12abeeb70$export$8b446892c82de644.DateHistogramAggregation.type);
                        this.field = body.field;
                        if (body.interval) this.interval = body.interval;
                        if (body.format) this.format = body.format;
                    }
                }
            ]);
            return _class;
        }($1f5712c12abeeb70$var$Aggregation);
        $0726ab3728f86779$export$9099ad97b570f7c(_class, "type", "date_histogram");
        return _class;
    }(),
    FiltersAggregation: function() {
        var _class = /*#__PURE__*/ function(Aggregation) {
            "use strict";
            $cb9ce7a7602b77d1$export$9099ad97b570f7c(_class, Aggregation);
            function _class(params) {
                $1d4692efe908bac5$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c(_class).call(this, params));
                _this.filters = params.filters || {
                };
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $6b21f555626aa41c$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        var body = {
                            filters: this.filters
                        };
                        return this._make_aggregation($1f5712c12abeeb70$export$8b446892c82de644.FiltersAggregation.type, body);
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        var body = this._parse_wrapper(obj, $1f5712c12abeeb70$export$8b446892c82de644.FiltersAggregation.type);
                        this.filters = body.filters;
                    }
                }
            ]);
            return _class;
        }($1f5712c12abeeb70$var$Aggregation);
        $0726ab3728f86779$export$9099ad97b570f7c(_class, "type", "filters");
        return _class;
    }(),
    ///////////////////////////////////////////////////
    // Filters
    TermFilter: function() {
        var _class = /*#__PURE__*/ function(Filter) {
            "use strict";
            $cb9ce7a7602b77d1$export$9099ad97b570f7c(_class, Filter);
            function _class(params) {
                $1d4692efe908bac5$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c(_class).call(this, params));
                // this.filter handled by superclass
                _this.value = params.value || false;
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $6b21f555626aa41c$export$9099ad97b570f7c(_class, [
                {
                    key: "matches",
                    value: function matches(other) {
                        // ask the parent object first
                        var pm = this._baseMatch(other);
                        if (!pm) return false;
                        // value (if set) must match
                        if (other.value && other.value !== this.value) return false;
                        return true;
                    }
                },
                {
                    key: "objectify",
                    value: function objectify() {
                        var obj = {
                            term: {
                            }
                        };
                        obj.term[this.field] = this.value;
                        return obj;
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        if (obj.term) obj = obj.term;
                        this.field = Object.keys(obj)[0];
                        this.value = obj[this.field];
                    }
                }
            ]);
            return _class;
        }($1f5712c12abeeb70$var$Filter);
        $0726ab3728f86779$export$9099ad97b570f7c(_class, "type", "term");
        return _class;
    }(),
    ExistsFilter: function() {
        var _class = /*#__PURE__*/ function(Filter) {
            "use strict";
            $cb9ce7a7602b77d1$export$9099ad97b570f7c(_class, Filter);
            function _class(params) {
                $1d4692efe908bac5$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c(_class).call(this, params));
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $6b21f555626aa41c$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        return {
                            exists: {
                                field: this.field
                            }
                        };
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        if (obj.exists) obj = obj.exists;
                        this.field = obj.field;
                    }
                }
            ]);
            return _class;
        }($1f5712c12abeeb70$var$Filter);
        $0726ab3728f86779$export$9099ad97b570f7c(_class, "type", "exists");
        return _class;
    }(),
    TermsFilter: function() {
        var _class = /*#__PURE__*/ function(Filter) {
            "use strict";
            $cb9ce7a7602b77d1$export$9099ad97b570f7c(_class, Filter);
            function _class(params) {
                $1d4692efe908bac5$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c(_class).call(this, params));
                // this.field handled by superclass
                _this.values = params.values || false;
                _this.execution = params.execution || false;
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $6b21f555626aa41c$export$9099ad97b570f7c(_class, [
                {
                    key: "matches",
                    value: function matches(other) {
                        // ask the parent object first
                        var pm = this._baseMatch(other);
                        if (!pm) return false;
                        // values (if set) must be the same list
                        if (other.values) {
                            if (other.values.length !== this.values.length) return false;
                            for(var i = 0; i < other.values.length; i++){
                                if ($aa95204b620a0ef2$export$4048ae5fe51d81b7.inArray(other.values[i], this.values) === -1) return false;
                            }
                        }
                        return true;
                    }
                },
                {
                    key: "objectify",
                    value: function objectify() {
                        var val = this.values || [];
                        var obj = {
                            terms: {
                            }
                        };
                        obj.terms[this.field] = val;
                        if (this.execution) obj.terms["execution"] = this.execution;
                        return obj;
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        if (obj.terms) obj = obj.terms;
                        this.field = Object.keys(obj)[0];
                        this.values = obj[this.field];
                        if (obj.execution) this.execution = obj.execution;
                    }
                },
                {
                    key: "add_term",
                    value: function add_term(term) {
                        if (!this.values) this.values = [];
                        if ($aa95204b620a0ef2$export$4048ae5fe51d81b7.inArray(term, this.values) === -1) this.values.push(term);
                    }
                },
                {
                    key: "has_term",
                    value: function has_term(term) {
                        if (!this.values) return false;
                        return $aa95204b620a0ef2$export$4048ae5fe51d81b7.inArray(term, this.values) >= 0;
                    }
                },
                {
                    key: "remove_term",
                    value: function remove_term(term) {
                        if (!this.values) return;
                        var idx = $aa95204b620a0ef2$export$4048ae5fe51d81b7.inArray(term, this.values);
                        if (idx >= 0) this.values.splice(idx, 1);
                    }
                },
                {
                    key: "has_terms",
                    value: function has_terms() {
                        return this.values !== false && this.values.length > 0;
                    }
                },
                {
                    key: "term_count",
                    value: function term_count() {
                        return this.values === false ? 0 : this.values.length;
                    }
                },
                {
                    key: "clear_terms",
                    value: function clear_terms() {
                        this.values = false;
                    }
                }
            ]);
            return _class;
        }($1f5712c12abeeb70$var$Filter);
        $0726ab3728f86779$export$9099ad97b570f7c(_class, "type", "terms");
        return _class;
    }(),
    RangeFilter: function() {
        var _class = /*#__PURE__*/ function(Filter) {
            "use strict";
            $cb9ce7a7602b77d1$export$9099ad97b570f7c(_class, Filter);
            function _class(params) {
                $1d4692efe908bac5$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c(_class).call(this, params));
                // this.field handled by superclass
                _this.lt = $1f5712c12abeeb70$export$8b446892c82de644.getParam(params.lt, false);
                _this.lte = $1f5712c12abeeb70$export$8b446892c82de644.getParam(params.lte, false);
                _this.gte = $1f5712c12abeeb70$export$8b446892c82de644.getParam(params.gte, false);
                _this.format = $1f5712c12abeeb70$export$8b446892c82de644.getParam(params.format, false);
                // normalise the values to strings
                if (_this.lt) _this.lt = _this.lt.toString();
                if (_this.lte) _this.lte = _this.lte.toString();
                if (_this.gte) _this.gte = _this.gte.toString();
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $6b21f555626aa41c$export$9099ad97b570f7c(_class, [
                {
                    key: "matches",
                    value: function matches(other) {
                        // ask the parent object first
                        var pm = $59ef20e355e8922b$export$9099ad97b570f7c($6f1885a119f0af4a$export$9099ad97b570f7c(_class.prototype), "matches", this).call(this, other);
                        if (!pm) return false;
                        // ranges (if set) must match
                        if (other.lt) {
                            if (other.lt !== this.lt) return false;
                        }
                        if (other.lte) {
                            if (other.lte !== this.lte) return false;
                        }
                        if (other.gte) {
                            if (other.gte !== this.gte) return false;
                        }
                        if (other.format) {
                            if (other.format !== this.format) return false;
                        }
                        return true;
                    }
                },
                {
                    key: "objectify",
                    value: function objectify() {
                        var obj = {
                            range: {
                            }
                        };
                        obj.range[this.field] = {
                        };
                        if (this.lte !== false) obj.range[this.field]["lte"] = this.lte;
                        if (this.lt !== false && this.lte === false) obj.range[this.field]["lt"] = this.lt;
                        if (this.gte !== false) obj.range[this.field]["gte"] = this.gte;
                        if (this.format !== false) obj.range[this.field]["format"] = this.format;
                        return obj;
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        if (obj.range) obj = obj.range;
                        this.field = Object.keys(obj)[0];
                        if (obj[this.field].lte !== undefined && obj[this.field].lte !== false) this.lte = obj[this.field].lte;
                        if (obj[this.field].lt !== undefined && obj[this.field].lt !== false) this.lt = obj[this.field].lt;
                        if (obj[this.field].gte !== undefined && obj[this.field].gte !== false) this.gte = obj[this.field].gte;
                        if (obj[this.field].format !== undefined && obj[this.field].format !== false) this.format = obj[this.field].format;
                    }
                }
            ]);
            return _class;
        }($1f5712c12abeeb70$var$Filter);
        $0726ab3728f86779$export$9099ad97b570f7c(_class, "type", "range");
        return _class;
    }(),
    GeoDistanceRangeFilter: function() {
        var _class = /*#__PURE__*/ function(Filter) {
            "use strict";
            $cb9ce7a7602b77d1$export$9099ad97b570f7c(_class, Filter);
            function _class(params) {
                $1d4692efe908bac5$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c(_class).call(this, params));
                // this.field is handled by superclass
                _this.lt = params.lt || false;
                _this.gte = params.gte || false;
                _this.lat = params.lat || false;
                _this.lon = params.lon || false;
                _this.unit = params.unit || "m";
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $6b21f555626aa41c$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        var obj = {
                            geo_distance_range: {
                            }
                        };
                        obj.geo_distance_range[this.field] = {
                            lat: this.lat,
                            lon: this.lon
                        };
                        if (this.lt) obj.geo_distance_range["lt"] = this.lt + this.unit;
                        if (this.gte) obj.geo_distance_range["gte"] = this.gte + this.unit;
                        return obj;
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        function endsWith(str, suffix) {
                            return str.indexOf(suffix, str.length - suffix.length) !== -1;
                        }
                        function splitUnits(str) {
                            var unit = false;
                            for(var i = 0; i < $1f5712c12abeeb70$export$8b446892c82de644.distanceUnits.length; i++){
                                var cu = $1f5712c12abeeb70$export$8b446892c82de644.distanceUnits[i];
                                if (endsWith(str, cu)) {
                                    str = str.substring(0, str.length - cu.length);
                                    unit = str.substring(str.length - cu.length);
                                }
                            }
                            return [
                                str,
                                unit
                            ];
                        }
                        if (obj.geo_distance_range) obj = obj.geo_distance_range;
                        this.field = Object.keys(obj)[0];
                        this.lat = obj[this.field].lat;
                        this.lon = obj[this.field].lon;
                        var lt = obj[this.field].lt;
                        var gte = obj[this.field].gte;
                        if (lt) {
                            lt = lt.trim();
                            var parts = splitUnits(lt);
                            this.lt = parts[0];
                            this.unit = parts[1];
                        }
                        if (gte) {
                            gte = gte.trim();
                            var parts = splitUnits(gte);
                            this.gte = parts[0];
                            this.unit = parts[1];
                        }
                    }
                }
            ]);
            return _class;
        }($1f5712c12abeeb70$var$Filter);
        $0726ab3728f86779$export$9099ad97b570f7c(_class, "type", "geo_distance_range");
        return _class;
    }(),
    GeoBoundingBoxFilter: function() {
        var _class = /*#__PURE__*/ function(Filter) {
            "use strict";
            $cb9ce7a7602b77d1$export$9099ad97b570f7c(_class, Filter);
            function _class(params) {
                $1d4692efe908bac5$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c(_class).call(this, params));
                _this.top_left = params.top_left || false;
                _this.bottom_right = params.bottom_right || false;
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $6b21f555626aa41c$export$9099ad97b570f7c(_class, [
                {
                    key: "matches",
                    value: function matches(other) {
                        // ask the parent object first
                        var pm = $59ef20e355e8922b$export$9099ad97b570f7c($6f1885a119f0af4a$export$9099ad97b570f7c(_class.prototype), "matches", this).call(this, other);
                        if (!pm) return false;
                        if (other.top_left && other.top_left !== this.top_left) return false;
                        if (other.bottom_right && other.bottom_right !== this.bottom_right) return false;
                        return true;
                    }
                },
                {
                    key: "objectify",
                    value: function objectify() {
                        var obj = {
                            geo_bounding_box: {
                            }
                        };
                        obj.geo_bounding_box[this.field] = {
                            top_left: this.top_left,
                            bottom_right: this.bottom_right
                        };
                        return obj;
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        if (obj.geo_bounding_box) obj = obj.geo_bounding_box;
                        this.field = Object.keys(obj)[0];
                        this.top_left = obj[this.field].top_left;
                        this.bottom_right = obj[this.field].bottom_right;
                    }
                }
            ]);
            return _class;
        }($1f5712c12abeeb70$var$Filter);
        $0726ab3728f86779$export$9099ad97b570f7c(_class, "type", "geo_bounding_box");
        return _class;
    }(),
    ////////////////////////////////////////////////////
    // The result object
    Result: /*#__PURE__*/ function() {
        "use strict";
        function _class(params) {
            $1d4692efe908bac5$export$9099ad97b570f7c(this, _class);
            this.data = params.raw;
        }
        $6b21f555626aa41c$export$9099ad97b570f7c(_class, [
            {
                key: "buckets",
                value: function buckets(agg_name) {
                    return this.data.aggregations[agg_name].buckets;
                }
            },
            {
                key: "aggregation",
                value: function aggregation(agg_name) {
                    return this.data.aggregations[agg_name];
                }
            },
            {
                key: "results",
                value: function results() {
                    var res = [];
                    if (this.data.hits && this.data.hits.hits) for(var i = 0; i < this.data.hits.hits.length; i++){
                        var source = this.data.hits.hits[i];
                        if ("_source" in source) res.push(source._source);
                        else if ("_fields" in source) res.push(source._fields);
                        else res.push(source);
                    }
                    return res;
                }
            },
            {
                key: "total",
                value: function total() {
                    if (this.data.hits && this.data.hits.total && this.data.hits.total.value) return parseInt(this.data.hits.total.value);
                    return false;
                }
            }
        ]);
        return _class;
    }(),
    ////////////////////////////////////////////////////
    // Primary functions for interacting with elasticsearch
    doQuery: function doQuery(params) {
        // extract the parameters of the request
        var success = params.success;
        var error = params.error;
        var complete = params.complete;
        var search_url = params.search_url;
        var queryobj = params.queryobj;
        var datatype = params.datatype;
        // serialise the query
        var querystring = JSON.stringify(queryobj);
        // prep the callbacks (they are connected)
        var error_callback = $1f5712c12abeeb70$export$8b446892c82de644.queryError(error);
        var success_callback = $1f5712c12abeeb70$export$8b446892c82de644.querySuccess(success, error_callback);
        var ajax = {
            url: search_url,
            headers: $1f5712c12abeeb70$export$8b446892c82de644.requestHeaders,
            dataType: datatype,
            success: success_callback,
            error: error_callback,
            complete: complete
        };
        if (datatype !== "jsonp") ajax.jsonp = false;
        // make the call to the elasticsearch web service
        if ($1f5712c12abeeb70$export$8b446892c82de644.requestMethod === "get") {
            ajax.type = "get";
            ajax.data = {
                source: querystring,
                source_content_type: "application/json"
            };
            $aa95204b620a0ef2$export$4048ae5fe51d81b7.ajax(ajax);
        } else if ($1f5712c12abeeb70$export$8b446892c82de644.requestMethod === "post") {
            ajax.type = "post";
            ajax.data = querystring;
            $aa95204b620a0ef2$export$4048ae5fe51d81b7.ajax(ajax);
        } else throw "es.requestMethod must be either 'get' or 'post";
    },
    querySuccess: function querySuccess(callback, error_callback) {
        return function(data) {
            if (data.hasOwnProperty("error")) {
                error_callback(data);
                return;
            }
            var result = new $1f5712c12abeeb70$export$8b446892c82de644.Result({
                raw: data
            });
            callback(result);
        };
    },
    queryError: function queryError(callback) {
        return function(data) {
            if (callback) callback(data);
            else throw new Error(data);
        };
    },
    /////////////////////////////////////////////////////
    getParam: function getParam(value, def) {
        return value !== undefined ? value : def;
    }
};




var $5d52b179cd0026b5$export$137cea99ac96085 = window.moment;






function $988cca1a6a01f734$export$f628537ca2c78f9d(params, key, def) {
    function _getDefault() {
        if (typeof def === 'function') return def();
        return def;
    }
    if (!params) return _getDefault();
    if (!params.hasOwnProperty(key)) return _getDefault();
    return params[key];
}
function $988cca1a6a01f734$export$6e23017c375e3c2b() {
    var params = {
    };
    var url = window.location.href;
    var fragment = false;
    // break the anchor off the url
    if (url.indexOf("#") > -1) {
        fragment = url.slice(url.indexOf('#'));
        url = url.substring(0, url.indexOf('#'));
    }
    // extract and split the query args
    var args = url.slice(url.indexOf('?') + 1).split('&');
    for(var i = 0; i < args.length; i++){
        var kv = args[i].split('=');
        if (kv.length === 2) {
            var key = kv[0].replace(/\+/g, "%20");
            key = decodeURIComponent(key);
            var val = kv[1].replace(/\+/g, "%20");
            val = decodeURIComponent(val);
            if (val[0] === "[" || val[0] === "{") {
                // if it looks like a JSON object in string form...
                // remove " (double quotes) at beginning and end of string to make it a valid
                // representation of a JSON object, or the parser will complain
                val = val.replace(/^"/, "").replace(/"$/, "");
                val = JSON.parse(val);
            }
            params[key] = val;
        }
    }
    // record the fragment identifier if required
    if (fragment) params['#'] = fragment;
    return params;
}
function $988cca1a6a01f734$export$16a194923490d008(obj) {
    for(var key in obj){
        if (obj.hasOwnProperty(key)) return false;
    }
    return true;
}
function $988cca1a6a01f734$export$367047a567f2342b(obj, fn, args, context_params) {
    return function() {
        if (args) {
            var params = {
            };
            for(var i = 0; i < args.length; i++)if (arguments.length > i) params[args[i]] = arguments[i];
            if (context_params) params = $aa95204b620a0ef2$export$4048ae5fe51d81b7.extend(params, context_params);
            obj[fn](params);
        } else {
            var slice = Array.prototype.slice;
            var theArgs = slice.apply(arguments);
            if (context_params) theArgs.push(context_params);
            obj[fn].apply(obj, theArgs);
        }
    };
}
function $988cca1a6a01f734$export$866a93d0ccff8292(obj, fn, conditional, preventDefault) {
    if (preventDefault === undefined) preventDefault = true;
    return function(event) {
        if (conditional) {
            if (!conditional(event)) return;
        }
        if (preventDefault) event.preventDefault();
        obj[fn](this, event);
    };
}
var $988cca1a6a01f734$export$a25557390a09e78a = /*#__PURE__*/ function() {
    "use strict";
    function $988cca1a6a01f734$export$a25557390a09e78a(params) {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $988cca1a6a01f734$export$a25557390a09e78a);
        var _this = this;
        $0726ab3728f86779$export$9099ad97b570f7c(this, "_finalise", function() {
            if (_this.finished) return;
            _this.finished = true;
            _this.functions.carryOn();
        });
        this.list = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "list");
        this.successCallbackArgs = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "successCallbackArgs");
        this.errorCallbackArgs = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "errorCallbackArgs");
        this.functions = {
            action: $988cca1a6a01f734$export$f628537ca2c78f9d(params, "action"),
            success: $988cca1a6a01f734$export$f628537ca2c78f9d(params, "success"),
            carryOn: $988cca1a6a01f734$export$f628537ca2c78f9d(params, "carryOn"),
            error: $988cca1a6a01f734$export$f628537ca2c78f9d(params, "error")
        };
        this.checkList = [];
        this.finished = false;
        for(var i = 0; i < this.list.length; i++)this.checkList.push(0);
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($988cca1a6a01f734$export$a25557390a09e78a, [
        {
            key: "process",
            value: function process(params) {
                if (this.list.length === 0) this.functions.carryOn();
                for(var i = 0; i < this.list.length; i++){
                    var context = {
                        index: i
                    };
                    var success_callback = $988cca1a6a01f734$export$367047a567f2342b(this, "_actionSuccess", this.successCallbackArgs, context);
                    var error_callback = $988cca1a6a01f734$export$367047a567f2342b(this, "_actionError", this.successCallbackArgs, context);
                    var complete_callback = false;
                    this.functions.action({
                        entry: this.list[i],
                        success_callback: success_callback,
                        error_callback: error_callback,
                        complete_callback: complete_callback
                    });
                }
            }
        },
        {
            key: "_actionSuccess",
            value: function _actionSuccess(params) {
                var index = params.index;
                delete params.index;
                params["entry"] = this.list[index];
                this.functions.success(params);
                this.checkList[index] = 1;
                if (this._isComplete()) this._finalise();
            }
        },
        {
            key: "_actionError",
            value: function _actionError(params) {
                var index = params.index;
                delete params.index;
                params["entry"] = this.list[index];
                this.functions.error(params);
                this.checkList[index] = -1;
                if (this._isComplete()) this._finalise();
            }
        },
        {
            key: "_actionComplete",
            value: function _actionComplete(params) {
            }
        },
        {
            key: "_isComplete",
            value: function _isComplete() {
                return $aa95204b620a0ef2$export$4048ae5fe51d81b7.inArray(0, this.checkList) === -1;
            }
        }
    ]);
    return $988cca1a6a01f734$export$a25557390a09e78a;
}();
function $988cca1a6a01f734$export$60c5182d88d767f8(block, element, modifier) {
    var bemClass = block;
    if (element) bemClass += "__" + element;
    if (modifier) bemClass += "--" + modifier;
    return bemClass;
}
function $988cca1a6a01f734$export$8820e1fbe507f6aa(namespace, field, instance_name) {
    instance_name = $988cca1a6a01f734$var$_normaliseInstanceName(instance_name);
    var cl = namespace;
    if (field) cl += "_" + field;
    if (instance_name) {
        var second = namespace + "_" + instance_name;
        if (field) second += "_" + field;
        cl += " " + second;
    }
    return cl;
}
function $988cca1a6a01f734$export$5be7444ab39fbaa3(namespace, field, instance_name) {
    instance_name = $988cca1a6a01f734$var$_normaliseInstanceName(instance_name);
    var styles = $988cca1a6a01f734$export$8820e1fbe507f6aa(namespace, field, instance_name);
    var jsClasses = "";
    var bits = styles.split(" ");
    for(var i = 0; i < bits.length; i++){
        var bit = bits[i];
        jsClasses += " js-" + bit;
    }
    return jsClasses;
}
function $988cca1a6a01f734$export$e516ebba864be69d(namespace, field, instance_name) {
    instance_name = $988cca1a6a01f734$var$_normaliseInstanceName(instance_name);
    var styles = $988cca1a6a01f734$export$8820e1fbe507f6aa(namespace, field, instance_name);
    var js = $988cca1a6a01f734$export$5be7444ab39fbaa3(namespace, field, instance_name);
    return styles + " " + js;
}
function $988cca1a6a01f734$export$b1157bd4df096bce(namespace, field, instance_name) {
    instance_name = $988cca1a6a01f734$var$_normaliseInstanceName(instance_name);
    var sel = ".js-" + namespace;
    if (instance_name) sel += "_" + instance_name;
    if (field) sel += "_" + field;
    return sel;
}
function $988cca1a6a01f734$export$bf52b203d82ff901(namespace, field, instance_name) {
    instance_name = $988cca1a6a01f734$var$_normaliseInstanceName(instance_name);
    var id = namespace;
    if (instance_name) id += "_" + instance_name;
    if (field) id += "_" + field;
    return id;
}
function $988cca1a6a01f734$export$5d5492dec79280f1(namespace, field, instance_name) {
    instance_name = $988cca1a6a01f734$var$_normaliseInstanceName(instance_name);
    return "#" + $988cca1a6a01f734$export$bf52b203d82ff901(namespace, field, instance_name);
}
function $988cca1a6a01f734$var$_normaliseInstanceName(instance_name) {
    if (typeof instance_name === "string") return instance_name;
    // FIXME: check this doesn't cause a circular import issue
    if (instance_name instanceof $97ca9eea36c86bb4$export$ea71c44d9cb0d048) return instance_name.id;
    if (instance_name instanceof $97ca9eea36c86bb4$export$a695173e2ecfa9b) return instance_name.component.id;
}
function $988cca1a6a01f734$export$5e20d0a3120d6c07(unsafe, def) {
    if (def === undefined) def = "";
    if (unsafe === undefined || unsafe == null) return def;
    try {
        if (typeof unsafe.replace !== "function") return unsafe;
        return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    } catch (err) {
        return def;
    }
}
function $988cca1a6a01f734$export$63ba8ea1e92c906(unsafe) {
    return unsafe.replace(/&/g, "_").replace(/</g, "_").replace(/>/g, "_").replace(/"/g, "_").replace(/'/g, "_").replace(/\./gi, '_').replace(/\:/gi, '_').replace(/\s/gi, "_");
}
function $988cca1a6a01f734$export$48334dba1de70fbe(params) {
    var reflectNonNumbers = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "reflectNonNumbers", false);
    var prefix = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "prefix", "");
    var zeroPadding = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "zeroPadding", false);
    var decimalPlaces = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "decimalPlaces", false);
    var thousandsSeparator = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "thousandsSeparator", false);
    var decimalSeparator = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "decimalSeparator", ".");
    var suffix = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "suffix", "");
    return function(number) {
        // ensure this is really a number
        var num = parseFloat(number);
        if (isNaN(num)) {
            if (reflectNonNumbers) return number;
            else return num;
        }
        // first off we need to convert the number to a string, which we can do directly, or using toFixed if that
        // is suitable here
        if (decimalPlaces !== false) num = num.toFixed(decimalPlaces);
        else num = num.toString();
        // now "num" is a string containing the formatted number that we can work on
        var bits = num.split(".");
        if (zeroPadding !== false) {
            var zeros = zeroPadding - bits[0].length;
            var pad = "";
            for(var i = 0; i < zeros; i++)pad += "0";
            bits[0] = pad + bits[0];
        }
        if (thousandsSeparator !== false) bits[0] = bits[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
        if (bits.length === 1) return prefix + bits[0] + suffix;
        else return prefix + bits[0] + decimalSeparator + bits[1] + suffix;
    };
}
function $988cca1a6a01f734$export$bf454bbe620fa941(params) {
    var commaRx = new RegExp(",", "g");
    return function(num) {
        num = num.trim();
        num = num.replace(commaRx, "");
        if (num === "") return 0;
        return parseFloat(num);
    };
}
function $988cca1a6a01f734$export$b4cd8de5710bc55c(selector, event, caller, targetFunction, delay, conditional, preventDefault) {
    if (preventDefault === undefined) preventDefault = true;
    // if the caller has an inner component (i.e. it is a Renderer), use the component's id
    // otherwise, if it has a namespace (which is true of Renderers or Templates) use that
    if (caller.component && caller.component.id) event = event + "." + caller.component.id;
    else if (caller.namespace) event = event + "." + caller.namespace;
    // create the closure to be called on the event
    var clos = $988cca1a6a01f734$export$866a93d0ccff8292(caller, targetFunction, conditional, preventDefault);
    // now bind the closure directly or with delay
    // if the caller has an inner component (i.e. it is a Renderer) use the components jQuery selector
    // otherwise, if it has an inner, use the selector on that.
    if (delay) {
        if (caller.component) caller.component.jq(selector).bindWithDelay(event, clos, delay);
        else if (caller.edge) caller.edge.jq(selector).bindWithDelay(event, clos, delay);
        else $aa95204b620a0ef2$export$4048ae5fe51d81b7(selector).bindWithDelay(event, clos, delay);
    } else {
        if (caller.component) {
            var element = caller.component.jq(selector);
            element.off(event);
            element.on(event, clos);
        } else if (caller.edge) {
            var element = caller.edge.jq(selector);
            element.off(event);
            element.on(event, clos);
        } else {
            var element = $aa95204b620a0ef2$export$4048ae5fe51d81b7(selector);
            element.off(event);
            element.on(event, clos);
        }
    }
}
function $988cca1a6a01f734$export$27450a6de0750f89(selector, event, caller) {
    // if the caller has an inner component (i.e. it is a Renderer), use the component's id
    // otherwise, if it has a namespace (which is true of Renderers or Templates) use that
    if (caller.component && caller.component.id) event = event + "." + caller.component.id;
    else if (caller.namespace) event = event + "." + caller.namespace;
    if (caller.component) {
        var element = caller.component.jq(selector);
        element.off(event);
    } else if (caller.edge) {
        var element = caller.edge.jq(selector);
        element.off(event);
    } else {
        var element = $aa95204b620a0ef2$export$4048ae5fe51d81b7(selector);
        element.off(event);
    }
}




var $e2d80b3b87810ca2$export$15b4933e9118d714 = /*#__PURE__*/ function() {
    "use strict";
    function $e2d80b3b87810ca2$export$15b4933e9118d714() {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $e2d80b3b87810ca2$export$15b4933e9118d714);
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($e2d80b3b87810ca2$export$15b4933e9118d714, [
        {
            key: "doQuery",
            value: function doQuery(params) {
            }
        }
    ]);
    return $e2d80b3b87810ca2$export$15b4933e9118d714;
}();



var $2f87dfa78e983121$export$4ddc7050cc680aeb = /*#__PURE__*/ function(QueryAdapter) {
    "use strict";
    $cb9ce7a7602b77d1$export$9099ad97b570f7c($2f87dfa78e983121$export$4ddc7050cc680aeb, QueryAdapter);
    function $2f87dfa78e983121$export$4ddc7050cc680aeb() {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $2f87dfa78e983121$export$4ddc7050cc680aeb);
        return $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c($2f87dfa78e983121$export$4ddc7050cc680aeb).apply(this, arguments));
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($2f87dfa78e983121$export$4ddc7050cc680aeb, [
        {
            key: "doQuery",
            value: function doQuery(params) {
                var edge = params.edge;
                var query = params.query;
                var success = params.success;
                var error = params.error;
                if (!query) query = edge.currentQuery;
                $1f5712c12abeeb70$export$8b446892c82de644.doQuery({
                    search_url: edge.searchUrl,
                    queryobj: query.objectify(),
                    datatype: edge.datatype,
                    success: success,
                    error: error
                });
            }
        }
    ]);
    return $2f87dfa78e983121$export$4ddc7050cc680aeb;
}($e2d80b3b87810ca2$export$15b4933e9118d714);




var $97ca9eea36c86bb4$export$22ad9a5707a07e9c = /*#__PURE__*/ function() {
    "use strict";
    function $97ca9eea36c86bb4$export$22ad9a5707a07e9c(params) {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $97ca9eea36c86bb4$export$22ad9a5707a07e9c);
        /////////////////////////////////////////////
        // parameters that can be set via params arg
        // the jquery selector for the element where the edge will be deployed
        this.selector = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "selector", "body");
        // the base search url which will respond to elasticsearch queries.  Generally ends with _search
        this.searchUrl = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "searchUrl", false);
        // datatype for ajax requests to use - overall recommend using jsonp and proxying ES requests
        // through a back end that can provide that
        this.datatype = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "datatype", "jsonp");
        // dictionary of queries to be run before the primary query is executed
        // {"<preflight id>" : new es.Query(....)}
        // results will appear with the same ids in this.preflightResults
        // preflight queries are /not/ subject to the base query
        this.preflightQueries = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "preflightQueries", false);
        // query that forms the basis of all queries that are assembled and run
        // Note that baseQuery is inviolable - it's requirements will always be enforced
        this.baseQuery = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "baseQuery", false);
        // query to use to initialise the search.  Use this to set your opening
        // values for things like page size, initial search terms, etc.  Any request to
        // reset the interface will return to this query
        this.openingQuery = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "openingQuery", function() {
            return typeof $1f5712c12abeeb70$export$8b446892c82de644 !== 'undefined' ? new $1f5712c12abeeb70$export$8b446892c82de644.Query() : false;
        });
        // dictionary of functions that will generate secondary queries which also need to be
        // run at the point that cycle() is called.  These functions and their resulting
        // queries will be run /after/ the primary query (so can take advantage of the
        // results).  Their results will be stored in this.secondaryResults.
        // secondary queries are not subject the base query, although the functions
        // may of course apply the base query too if they wish
        // {"<secondary id>" : function() }
        this.secondaryQueries = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "secondaryQueries", false);
        // dictionary mapping keys to urls that will be used for search.  These should be
        // the same keys as used in secondaryQueries, if those secondary queries should be
        // issued against different urls than the primary search_url.
        this.secondaryUrls = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "secondaryUrls", false);
        // should the init process do a search
        this.initialSearch = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "initialSearch", true);
        // list of static files (e.g. data files) to be loaded at startup, and made available
        // on the object for use by components
        // {"id" : "<internal id to give the file>", "url" : "<file url>", "processor" : edges.csv.newObjectByRow, "datatype" : "text", "opening" : <function to be run after processing for initial state>}
        this.staticFiles = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "staticFiles", []);
        // should the search url be synchronised with the browser's url bar after search
        // and should queries be retrieved from the url on init
        this.manageUrl = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "manageUrl", false);
        // query parameter in which the query for this edge instance will be stored
        this.urlQuerySource = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "urlQuerySource", "source");
        // options to be passed to es.Query.objectify when prepping the query to be placed in the URL
        this.urlQueryOptions = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "urlQueryOptions", false);
        // template object that will be used to draw the frame for the edge.  May be left
        // blank, in which case the edge will assume that the elements are already rendered
        // on the page by the caller
        this.template = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "template", false);
        // list of all the components that are involved in this edge
        this.components = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "components", []);
        // the query adapter
        this.queryAdapter = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "queryAdapter", function() {
            return new $2f87dfa78e983121$export$4ddc7050cc680aeb();
        });
        // list of callbacks to be run synchronously with the edge instance as the argument
        // (these bind at the same points as all the events are triggered, and are keyed the same way)
        this.callbacks = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "callbacks", {
        });
        /////////////////////////////////////////////
        // operational properties
        // the query most recently read from the url
        this.urlQuery = false;
        // original url parameters
        this.urlParams = {
        };
        // the short url for this page
        this.shortUrl = false;
        // the last primary ES query object that was executed
        this.currentQuery = false;
        // the last result object from the ES layer
        this.result = false;
        // the results of the preflight queries, keyed by their id
        this.preflightResults = {
        };
        // the actual secondary queries derived from the functions in this.secondaryQueries;
        this.realisedSecondaryQueries = {
        };
        // results of the secondary queries, keyed by their id
        this.secondaryResults = {
        };
        // if the search is currently executing
        this.searching = false;
        // jquery object that represents the selected element
        this.context = false;
        // raw access to this.staticFiles loaded resources, keyed by id
        this.static = {
        };
        // access to processed static files, keyed by id
        this.resources = {
        };
        // list of static resources where errors were encountered
        this.errorLoadingStatic = [];
        //////////////////////////////////////////
        // now kick off the edge
        this.startup();
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($97ca9eea36c86bb4$export$22ad9a5707a07e9c, [
        {
            //////////////////////////////////////////////////
            // Startup
            key: "startup",
            value: function startup() {
                // obtain the jquery context for all our operations
                this.context = $aa95204b620a0ef2$export$4048ae5fe51d81b7(this.selector);
                // trigger the edges:init event
                this.trigger("edges:pre-init");
                // if we are to manage the URL, attempt to pull a query from it
                if (this.manageUrl) {
                    var urlParams = $988cca1a6a01f734$export$6e23017c375e3c2b();
                    if (this.urlQuerySource in urlParams) {
                        this.urlQuery = new $1f5712c12abeeb70$export$8b446892c82de644.Query({
                            raw: urlParams[this.urlQuerySource]
                        });
                        delete urlParams[this.urlQuerySource];
                    }
                    this.urlParams = urlParams;
                }
                // render the template if necessary
                if (this.template) this.template.draw(this);
                // call each of the components to initialise themselves
                for(var i = 0; i < this.components.length; i++){
                    var component = this.components[i];
                    component.init(this);
                }
                // now call each component to render itself (pre-search)
                this.draw();
                // load any static files - this will happen asynchronously, so afterwards
                // we call finaliseStartup to finish the process
                // var onward = edges.objClosure(this, "startupPart2");
                var onward = (function() {
                    return this.startupPart2();
                }).bind(this);
                this.loadStaticsAsync(onward);
            }
        },
        {
            key: "startupPart2",
            value: function startupPart2() {
                // FIXME: at this point we should check whether the statics all loaded correctly
                // var onward = edges.objClosure(this, "startupPart3");
                var onward = (function() {
                    return this.startupPart3();
                }).bind(this);
                this.runPreflightQueries(onward);
            }
        },
        {
            key: "startupPart3",
            value: function startupPart3() {
                // determine whether to initialise with either the openingQuery or the urlQuery
                var requestedQuery = this.openingQuery;
                if (this.urlQuery) {
                    // if there is a URL query, then we open with that, and then forget it
                    requestedQuery = this.urlQuery;
                    this.urlQuery = false;
                }
                // request the components to contribute to the query
                for(var i = 0; i < this.components.length; i++){
                    var component = this.components[i];
                    component.contrib(requestedQuery);
                }
                // finally push the query, which will reconcile it with the baseQuery
                this.pushQuery(requestedQuery);
                // trigger the edges:post-init event
                this.trigger("edges:post-init");
                // now issue a query
                this.cycle();
            }
        },
        {
            ////////////////////////////////////////////////////
            // Cycle
            key: "cycle",
            value: function cycle() {
                // if a search is currently executing, don't do anything, else turn it on
                // FIXME: should we queue them up? - see the d3 map for an example of how to do this
                if (this.searching) return;
                this.searching = true;
                // invalidate the short url
                this.shortUrl = false;
                // pre query event
                this.trigger("edges:pre-query");
                // if we are managing the url space, use pushState to set it
                if (this.manageUrl) this.updateUrl();
                // if there's a search url, do a query, otherwise call synchronise and draw directly
                if (this.searchUrl) {
                    // var onward = edges.objClosure(this, "cyclePart2");
                    var onward = (function() {
                        return this.cyclePart2();
                    }).bind(this);
                    this.doPrimaryQuery(onward);
                } else this.cyclePart2();
            }
        },
        {
            key: "cyclePart2",
            value: function cyclePart2() {
                // var onward = edges.objClosure(this, "cyclePart3");
                var onward = (function() {
                    return this.cyclePart3();
                }).bind(this);
                this.runSecondaryQueries(onward);
            }
        },
        {
            key: "cyclePart3",
            value: function cyclePart3() {
                this.synchronise();
                // pre-render trigger
                this.trigger("edges:pre-render");
                // render
                this.draw();
                // post render trigger
                this.trigger("edges:post-render");
                // searching has completed, so flip the switch back
                this.searching = false;
            }
        },
        {
            ////////////////////////////////////////////////////
            // utilities required during startup
            key: "loadStaticsAsync",
            value: function loadStaticsAsync(callback) {
                if (!this.staticFiles || this.staticFiles.length === 0) {
                    this.trigger("edges:post-load-static");
                    callback();
                    return;
                }
                var that = this;
                var pg = new $988cca1a6a01f734$export$a25557390a09e78a({
                    list: this.staticFiles,
                    action: function action(params) {
                        var entry = params.entry;
                        var success = params.success_callback;
                        var error = params.error_callback;
                        var id = entry.id;
                        var url = entry.url;
                        var datatype = edges.getParam(entry.datatype, "text");
                        $aa95204b620a0ef2$export$4048ae5fe51d81b7.ajax({
                            type: "get",
                            url: url,
                            dataType: datatype,
                            success: success,
                            error: error
                        });
                    },
                    successCallbackArgs: [
                        "data"
                    ],
                    success: function success(params) {
                        var data = params.data;
                        var entry = params.entry;
                        if (entry.processor) {
                            var processed = entry.processor({
                                data: data
                            });
                            that.resources[entry.id] = processed;
                            if (entry.opening) entry.opening({
                                resource: processed,
                                edge: that
                            });
                        }
                        that.static[entry.id] = data;
                    },
                    errorCallbackArgs: [
                        "data"
                    ],
                    error: function error(params) {
                        that.errorLoadingStatic.push(params.entry.id);
                        that.trigger("edges:error-load-static");
                    },
                    carryOn: function carryOn() {
                        that.trigger("edges:post-load-static");
                        callback();
                    }
                });
                pg.process();
            }
        },
        {
            key: "runPreflightQueries",
            value: function runPreflightQueries(callback) {
                if (!this.preflightQueries || Object.keys(this.preflightQueries).length === 0) {
                    callback();
                    return;
                }
                this.trigger("edges:pre-preflight");
                var entries = [];
                var ids = Object.keys(this.preflightQueries);
                for(var i = 0; i < ids.length; i++){
                    var id = ids[i];
                    entries.push({
                        id: id,
                        query: this.preflightQueries[id]
                    });
                }
                var that = this;
                var pg = new $988cca1a6a01f734$export$a25557390a09e78a({
                    list: entries,
                    action: function action(params) {
                        var entry = params.entry;
                        var success = params.success_callback;
                        var error = params.error_callback;
                        $1f5712c12abeeb70$export$8b446892c82de644.doQuery({
                            search_url: that.searchUrl,
                            queryobj: entry.query.objectify(),
                            datatype: that.datatype,
                            success: success,
                            error: error
                        });
                    },
                    successCallbackArgs: [
                        "result"
                    ],
                    success: function success(params) {
                        var result = params.result;
                        var entry = params.entry;
                        that.preflightResults[entry.id] = result;
                    },
                    errorCallbackArgs: [
                        "result"
                    ],
                    error: function error(params) {
                        that.trigger("edges:error-preflight");
                    },
                    carryOn: function carryOn() {
                        that.trigger("edges:post-preflight");
                        callback();
                    }
                });
                pg.process();
            }
        },
        {
            ///////////////////////////////////////////////////
            // Utilities required during cycle
            key: "doPrimaryQuery",
            value: function doPrimaryQuery(callback) {
                var context = {
                    "callback": callback
                };
                this.queryAdapter.doQuery({
                    edge: this,
                    success: $988cca1a6a01f734$export$367047a567f2342b(this, "querySuccess", [
                        "result"
                    ], context),
                    error: $988cca1a6a01f734$export$367047a567f2342b(this, "queryFail", [
                        "response"
                    ], context)
                });
            }
        },
        {
            key: "runSecondaryQueries",
            value: function runSecondaryQueries(callback) {
                this.realisedSecondaryQueries = {
                };
                if (!this.secondaryQueries || Object.keys(this.secondaryQueries).length === 0) {
                    callback();
                    return;
                }
                // generate the query objects to be executed
                var entries = [];
                for(var key in this.secondaryQueries){
                    var entry = {
                    };
                    entry["query"] = this.secondaryQueries[key](this);
                    entry["id"] = key;
                    entry["searchUrl"] = this.searchUrl;
                    if (this.secondaryUrls !== false && this.secondaryUrls.hasOwnProperty(key)) entry["searchUrl"] = this.secondaryUrls[key];
                    entries.push(entry);
                    this.realisedSecondaryQueries[key] = entry.query;
                }
                var that = this;
                var pg = new $988cca1a6a01f734$export$a25557390a09e78a({
                    list: entries,
                    action: function action(params) {
                        var entry = params.entry;
                        var success = params.success_callback;
                        var error = params.error_callback;
                        $1f5712c12abeeb70$export$8b446892c82de644.doQuery({
                            search_url: entry.searchUrl,
                            queryobj: entry.query.objectify(),
                            datatype: that.datatype,
                            success: success,
                            complete: false
                        });
                    },
                    successCallbackArgs: [
                        "result"
                    ],
                    success: function success(params) {
                        var result = params.result;
                        var entry = params.entry;
                        that.secondaryResults[entry.id] = result;
                    },
                    errorCallbackArgs: [
                        "result"
                    ],
                    error: function error(params) {
                    // FIXME: not really sure what to do about this
                    },
                    carryOn: function carryOn() {
                        callback();
                    }
                });
                pg.process();
            }
        },
        {
            ////////////////////////////////////////////////////
            //  functions for working with the queries
            key: "cloneQuery",
            value: function cloneQuery() {
                if (this.currentQuery) return this.currentQuery.clone();
                return false;
            }
        },
        {
            key: "pushQuery",
            value: function pushQuery(query) {
                if (this.baseQuery) query.merge(this.baseQuery);
                this.currentQuery = query;
            }
        },
        {
            key: "cloneBaseQuery",
            value: function cloneBaseQuery() {
                if (this.baseQuery) return this.baseQuery.clone();
                return new $1f5712c12abeeb70$export$8b446892c82de644.Query();
            }
        },
        {
            key: "cloneOpeningQuery",
            value: function cloneOpeningQuery() {
                if (this.openingQuery) return this.openingQuery.clone();
                return new $1f5712c12abeeb70$export$8b446892c82de644.Query();
            }
        },
        {
            key: "queryFail",
            value: function queryFail(params) {
                var callback = params.callback;
                var response = params.response;
                this.trigger("edges:query-fail");
                if (response.hasOwnProperty("responseText")) console.log("ERROR: query fail: " + response.responseText);
                if (response.hasOwnProperty("error")) console.log("ERROR: search execution fail: " + response.error);
                callback();
            }
        },
        {
            key: "querySuccess",
            value: function querySuccess(params) {
                this.result = params.result;
                var callback = params.callback;
                // success trigger
                this.trigger("edges:query-success");
                callback();
            }
        },
        {
            //////////////////////////////////////////////////
            // URL Management
            key: "updateUrl",
            value: function updateUrl() {
                var currentQs = window.location.search;
                var qs = "?" + this.fullUrlQueryString();
                if (currentQs === qs) return; // no need to push the state
                var url = new URL(window.location.href);
                url.search = qs;
                if (currentQs === "") window.history.replaceState("", "", url.toString());
                else window.history.pushState("", "", url.toString());
            }
        },
        {
            key: "fullUrl",
            value: function fullUrl() {
                var args = this.fullQueryArgs();
                var fragment = "";
                if (args["#"]) {
                    fragment = "#" + args["#"];
                    delete args["#"];
                }
                var wloc = window.location.toString();
                var bits = wloc.split("?");
                var url = bits[0] + "?" + this._makeUrlQuery(args) + fragment;
                return url;
            }
        },
        {
            key: "fullUrlQueryString",
            value: function fullUrlQueryString() {
                return this._makeUrlQuery(this.fullQueryArgs());
            }
        },
        {
            key: "fullQueryArgs",
            value: function fullQueryArgs() {
                var args = $aa95204b620a0ef2$export$4048ae5fe51d81b7.extend(true, {
                }, this.urlParams);
                $aa95204b620a0ef2$export$4048ae5fe51d81b7.extend(args, this.urlQueryArg());
                return args;
            }
        },
        {
            key: "urlQueryArg",
            value: function urlQueryArg(objectify_options) {
                if (!objectify_options) {
                    if (this.urlQueryOptions) objectify_options = this.urlQueryOptions;
                    else objectify_options = {
                        include_query_string: true,
                        include_filters: true,
                        include_paging: true,
                        include_sort: true,
                        include_fields: false,
                        include_aggregations: false
                    };
                }
                var q = JSON.stringify(this.currentQuery.objectify(objectify_options));
                var obj = {
                };
                obj[this.urlQuerySource] = encodeURIComponent(q);
                return obj;
            }
        },
        {
            key: "_makeUrlQuery",
            value: function _makeUrlQuery(args) {
                var keys = Object.keys(args);
                var entries = [];
                for(var i = 0; i < keys.length; i++){
                    var key = keys[i];
                    var val = args[key];
                    entries.push(key + "=" + val); // NOTE we do not escape - this should already be done
                }
                return entries.join("&");
            }
        },
        {
            /////////////////////////////////////////////////
            // lifecycle functions
            key: "synchronise",
            value: function synchronise() {
                // ask the components to synchronise themselves with the latest state
                for(var i = 0; i < this.components.length; i++){
                    var component = this.components[i];
                    component.synchronise();
                }
            }
        },
        {
            key: "draw",
            value: function draw() {
                for(var i = 0; i < this.components.length; i++){
                    var component = this.components[i];
                    component.draw(this);
                }
            }
        },
        {
            key: "reset",
            value: function reset() {
                // tell the world we're about to reset
                this.trigger("edges:pre-reset");
                // clone from the opening query
                var requestedQuery = this.cloneOpeningQuery();
                // request the components to contribute to the query
                for(var i = 0; i < this.components.length; i++){
                    var component = this.components[i];
                    component.contrib(requestedQuery);
                }
                // push the query, which will reconcile it with the baseQuery
                this.pushQuery(requestedQuery);
                // tell the world that we've done the reset
                this.trigger("edges:post-reset");
                // now execute the query
                // this.doQuery();
                this.cycle();
            }
        },
        {
            key: "sleep",
            value: function sleep() {
                for(var i = 0; i < this.components.length; i++){
                    var component = this.components[i];
                    component.sleep();
                }
            }
        },
        {
            key: "wake",
            value: function wake() {
                for(var i = 0; i < this.components.length; i++){
                    var component = this.components[i];
                    component.wake();
                }
            }
        },
        {
            key: "trigger",
            value: function trigger(event_name) {
                if (event_name in this.callbacks) this.callbacks[event_name](this);
                this.context.trigger(event_name);
            }
        },
        {
            ////////////////////////////////////////////
            // accessors
            key: "getComponent",
            value: function getComponent(params) {
                var id = params.id;
                for(var i = 0; i < this.components.length; i++){
                    var component = this.components[i];
                    if (component.id === id) return component;
                }
                return false;
            }
        },
        {
            // return components in the requested category
            key: "category",
            value: function category(cat) {
                var comps = [];
                for(var i = 0; i < this.components.length; i++){
                    var component = this.components[i];
                    if (component.category === cat) comps.push(component);
                }
                return comps;
            }
        },
        {
            key: "jq",
            value: function jq(selector) {
                return $aa95204b620a0ef2$export$4048ae5fe51d81b7(selector, this.context);
            }
        }
    ]);
    return $97ca9eea36c86bb4$export$22ad9a5707a07e9c;
}();
var $97ca9eea36c86bb4$export$93af88fe68eea917 = /*#__PURE__*/ function() {
    "use strict";
    function $97ca9eea36c86bb4$export$93af88fe68eea917() {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $97ca9eea36c86bb4$export$93af88fe68eea917);
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($97ca9eea36c86bb4$export$93af88fe68eea917, [
        {
            key: "draw",
            value: function draw(edge) {
            }
        }
    ]);
    return $97ca9eea36c86bb4$export$93af88fe68eea917;
}();
var $97ca9eea36c86bb4$export$ea71c44d9cb0d048 = /*#__PURE__*/ function() {
    "use strict";
    function $97ca9eea36c86bb4$export$ea71c44d9cb0d048(params) {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $97ca9eea36c86bb4$export$ea71c44d9cb0d048);
        this.id = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "id");
        this.renderer = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "renderer");
        this.category = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "category", false);
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($97ca9eea36c86bb4$export$ea71c44d9cb0d048, [
        {
            key: "init",
            value: function init(edge) {
                this.edge = edge;
                this.context = this.edge.jq("#" + this.id);
                if (this.renderer) this.renderer.init(this);
            }
        },
        {
            key: "draw",
            value: function draw() {
                if (this.renderer) this.renderer.draw();
            }
        },
        {
            key: "sleep",
            value: function sleep() {
                if (this.renderer) this.renderer.sleep();
            }
        },
        {
            key: "wake",
            value: function wake() {
                if (this.renderer) this.renderer.wake();
            }
        },
        {
            // convenience method for any renderer rendering a component
            key: "jq",
            value: function jq(selector) {
                return this.edge.jq(selector);
            }
        },
        {
            // methods to be implemented by subclasses
            key: "contrib",
            value: function contrib(query) {
            }
        },
        {
            key: "synchronise",
            value: function synchronise() {
            }
        }
    ]);
    return $97ca9eea36c86bb4$export$ea71c44d9cb0d048;
}();
var $97ca9eea36c86bb4$export$a695173e2ecfa9b = /*#__PURE__*/ function() {
    "use strict";
    function $97ca9eea36c86bb4$export$a695173e2ecfa9b() {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $97ca9eea36c86bb4$export$a695173e2ecfa9b);
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($97ca9eea36c86bb4$export$a695173e2ecfa9b, [
        {
            key: "init",
            value: function init(component) {
                this.component = component;
            }
        },
        {
            key: "draw",
            value: function draw() {
            }
        },
        {
            key: "sleep",
            value: function sleep() {
            }
        },
        {
            key: "wake",
            value: function wake() {
            }
        }
    ]);
    return $97ca9eea36c86bb4$export$a695173e2ecfa9b;
}();





var _finalBuckets;
var $9cbb252f768bd5d6$export$7decb792461ef5a9 = /*#__PURE__*/ function(Component) {
    "use strict";
    $cb9ce7a7602b77d1$export$9099ad97b570f7c($9cbb252f768bd5d6$export$7decb792461ef5a9, Component);
    function $9cbb252f768bd5d6$export$7decb792461ef5a9(params) {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $9cbb252f768bd5d6$export$7decb792461ef5a9);
        var _this;
        _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c($9cbb252f768bd5d6$export$7decb792461ef5a9).call(this, params));
        // actual data series that the renderer will render
        // data series is of the form
        // [
        //      {
        //          key: "<name of series>",
        //          values: [
        //              {label: "<name of this value>", value: "<the value itself>"}
        //          ]
        //      }
        // ]
        //
        // For example
        // [{ key: "power output", values: [{label: 1980, value: 100}, {label: 1981, value: 200}]
        _this.dataSeries = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "dataSeries", false);
        // function which will generate the data series, which will be
        // written to this.dataSeries if that is not provided
        _this.dataFunction = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "dataFunction", false);
        // should we enforce a rectangular shape on the data series for when there is
        // more than one series to be displayed?
        _this.rectangulate = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "rectangulate", false);
        // function which will sort the values of a series, used when rectangulate is
        // set to true
        _this.seriesSort = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "seriesSort", false);
        return _this;
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($9cbb252f768bd5d6$export$7decb792461ef5a9, [
        {
            key: "synchronise",
            value: function synchronise() {
                if (this.dataFunction) this.dataSeries = this.dataFunction(this);
                if (this.rectangulate) this._rectangulate();
            }
        },
        {
            key: "_rectangulate",
            value: function _rectangulate() {
                if (this.dataSeries.length === 1) // if there's only one series, it is rectangular by definition
                return;
                // first index all the keys in the data series values for all
                // data series
                var allLabels = [];
                for(var i = 0; i < this.dataSeries.length; i++){
                    var series = this.dataSeries[i];
                    for(var j = 0; j < series.values.length; j++){
                        var point = series.values[j];
                        if (!allLabels.includes(point.label)) allLabels.push(point.label);
                    }
                }
                // now we have a full list of labels, check they are all present
                // in each series, and if not set a default value of 0
                for(var i1 = 0; i1 < this.dataSeries.length; i1++){
                    var series = this.dataSeries[i1];
                    var currentLabels = series.values.map(function(x) {
                        return x.label;
                    });
                    for(var j = 0; j < allLabels.length; j++){
                        var considerLabel = allLabels[j];
                        if (!currentLabels.includes(considerLabel)) series.values.push({
                            label: considerLabel,
                            value: 0
                        }); // NOTE: there is no sorting here, have to see what impact that has
                    }
                    if (this.seriesSort) series.values = this.seriesSort(series.values);
                }
            }
        }
    ]);
    return $9cbb252f768bd5d6$export$7decb792461ef5a9;
}($97ca9eea36c86bb4$export$ea71c44d9cb0d048);
function $9cbb252f768bd5d6$export$8c0eec9b15d1897d(params) {
    var agg = params.agg;
    var seriesName = params.seriesName;
    return function(component) {
        var values = [];
        if (!component.edge.result) return [];
        var aggregation = component.edge.result.aggregation(agg);
        for(var i = 0; i < aggregation.buckets.length; i++){
            var bucket = aggregation.buckets[i];
            values.push({
                label: bucket.key,
                value: bucket.doc_count
            });
        }
        return [
            {
                key: seriesName,
                values: values
            }
        ];
    };
}
function $9cbb252f768bd5d6$export$d99c821b0fb86668(params) {
    var histogramAgg = params.histogramAgg;
    var termsAgg = params.termsAgg;
    return function(component) {
        var series = {
        };
        if (!component.edge.result) return [];
        var aggregation = component.edge.result.aggregation(histogramAgg);
        for(var i = 0; i < aggregation.buckets.length; i++){
            var bucket = aggregation.buckets[i];
            var terms = bucket[termsAgg];
            for(var j = 0; j < terms.buckets.length; j++){
                var term = terms.buckets[j];
                if (!(term.key in series)) series[term.key] = [];
                series[term.key].push({
                    label: bucket.key,
                    value: term.doc_count
                });
            }
        }
        var dataSeries = [];
        var seriesNames = Object.keys(series);
        for(var i1 = 0; i1 < seriesNames.length; i1++){
            var seriesName = seriesNames[i1];
            dataSeries.push({
                key: seriesName,
                values: series[seriesName]
            });
        }
        return dataSeries;
    };
}
function $9cbb252f768bd5d6$export$4c2a251a86bb620b(params) {
    var aggs = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "aggs", []);
    var seriesName = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "seriesName", "series");
    return function(component) {
        // for each aggregation, get the results and add them to the data series
        var data_series = [];
        if (!component.edge.result) return data_series;
        var context = component.edge.result.data.aggregations;
        function recurse(aggs1, context1) {
            var finalBuckets = [];
            for(var i = 0; i < aggs1.length; i++){
                var agg = aggs1[i];
                if (typeof agg === "string") return context1[agg].buckets;
                else {
                    var key = Object.keys(agg)[0];
                    var nested = context1[key].buckets;
                    if (agg[key].keys) nested = nested.filter(function(b) {
                        return agg[key].keys.includes(b.key);
                    });
                    for(var j = 0; j < nested.length; j++){
                        var nest = nested[j];
                        var bs = recurse(agg[key].aggs, nest);
                        (_finalBuckets = finalBuckets).push.apply(_finalBuckets, $631c5afe36f33b96$export$9099ad97b570f7c(bs));
                    }
                }
            }
            return finalBuckets;
        }
        var bs = recurse(aggs, context);
        var series = {
        };
        series["key"] = seriesName;
        series["values"] = [];
        for(var j = 0; j < bs.length; j++){
            var doccount = bs[j].doc_count;
            var key = bs[j].key;
            series.values.push({
                label: key,
                value: doccount
            });
        }
        return [
            series
        ];
    };
}



var $3bc6b949b00e2a58$export$8698b599d6b7d9a0 = window.nv;


var $e4a0ccd89c102736$export$6343839093e1c21d = window.d3;





function $530e6b01b500d249$export$af206d707775bac7(data_series) {
    var new_series = [];
    for(var i = 0; i < data_series.length; i++){
        var os = data_series[i];
        var ns = {
        };
        ns["key"] = os["key"];
        ns["values"] = [];
        for(var j = 0; j < os.values.length; j++){
            var vector = os.values[j];
            ns["values"].push({
                x: vector.label,
                y: vector.value
            });
        }
        new_series.push(ns);
    }
    return new_series;
}
function $530e6b01b500d249$export$e89b2486fe14568(dataSeries) {
    if (!dataSeries) return false;
    if (dataSeries.length === 0) return false;
    var emptyCount = 0;
    for(var i = 0; i < dataSeries.length; i++){
        var series = dataSeries[i];
        if (series.values.length === 0) emptyCount++;
    }
    if (emptyCount === dataSeries.length) return false;
    return true;
}
function $530e6b01b500d249$export$e85e6981b6330071(params) {
    var axisSelector = params.axisSelector;
    var maxWidth = params.maxWidth;
    var maxHeight = params.maxHeight;
    var lineHeight = params.lineHeight || 1.2;
    var wordBreaks = params.wordBreaks || [
        " ",
        "\t"
    ];
    var minChunkSize = params.minHyphenSize || 3;
    function _isMidWord(currentLine, remainder) {
        var leftChar = $aa95204b620a0ef2$export$4048ae5fe51d81b7.inArray(currentLine[currentLine.length - 1], wordBreaks) === -1;
        var rightChar = $aa95204b620a0ef2$export$4048ae5fe51d81b7.inArray(remainder[0], wordBreaks) === -1;
        return leftChar && rightChar;
    }
    function _toPrevSpace(currentLine) {
        for(var i = currentLine.length - 1; i >= 0; i--){
            var char = currentLine[i];
            if ($aa95204b620a0ef2$export$4048ae5fe51d81b7.inArray(char, wordBreaks) !== -1) return currentLine.length - i;
        }
        return -1;
    }
    function _toNextSpace(remainder) {
        for(var i = 0; i < remainder.length; i++){
            var char = remainder[i];
            if ($aa95204b620a0ef2$export$4048ae5fe51d81b7.inArray(char, wordBreaks) !== -1) return i + 1;
        }
        return -1;
    }
    function _backtrack(count, currentLine, remainder) {
        for(var i = 0; i < count; i++)remainder.unshift(currentLine.pop());
    }
    function _isTooLong(tspan) {
        return tspan.node().getComputedTextLength() >= maxWidth;
    }
    function separate(text) {
        // get the current content then clear the text element
        var chars = text.text().trim().split("");
        text.text(null);
        // set up registries for the text lines that they will create
        var lines = [];
        // create a tspan for working in - we need it to calculate line widths dynamically
        var x = text.attr("x");
        var tspan = text.append("tspan").attr("x", x).attr("y", 0);
        // record the current line
        var currentLine = [];
        // for each character in the text, push to the current line, assign to the tspan, and then
        // check if we have exceeded the allowed max width
        while(chars.length > 0){
            var char = chars.shift();
            currentLine.push(char);
            tspan.text(currentLine.join(""));
            var maxed = false;
            var hyphenated = false;
            while(_isTooLong(tspan)){
                // record that we pushed the tspan to the limit
                maxed = true;
                // if we already added a hyphen, remove it
                if (hyphenated) {
                    currentLine.splice(currentLine.length - 1);
                    hyphenated = false;
                }
                // if we have exceeded the max width back-track 1
                _backtrack(1, currentLine, chars);
                if (_isMidWord(currentLine, chars)) {
                    var toPrevSpace = _toPrevSpace(currentLine);
                    if (toPrevSpace === -1 || toPrevSpace - 1 > minChunkSize) {
                        _backtrack(1, currentLine, chars);
                        currentLine.push("-");
                        hyphenated = true;
                    } else _backtrack(toPrevSpace, currentLine, chars);
                }
                currentLine = currentLine.join("").trim().split("");
                tspan.text(currentLine.join(""));
            }
            // if we didn't yet fill the tspan, continue adding characters
            if (!maxed && chars.length > 0) continue;
            // otherwise, move on to the next line
            if (maxed || chars.length === 0) {
                lines.push(currentLine);
                currentLine = [];
            }
        }
        // create all the tspans
        tspan.remove();
        var tspans = [];
        for(var i = 0; i < lines.length; i++){
            tspan = text.append("tspan").attr("x", x).attr("y", 0);
            tspan.text(lines[i].join(""));
            tspans.push(tspan);
        }
        return tspans;
    }
    function distribute(text, tspans) {
        var imax = tspans.length;
        var pmax = lineHeight * (imax - 1);
        var dy = parseFloat(text.attr("dy"));
        for(var j = 0; j < tspans.length; j++){
            var pos = lineHeight * j - pmax / 2 + dy;
            var tspan = tspans[j];
            tspan.attr("dy", pos + "em");
        }
    }
    function reduce(text, tspans) {
        var reduced = false;
        var box = text.node().getBBox();
        if (box.height > maxHeight && tspans.length > 1) {
            tspans[tspans.length - 1].remove();
            tspans.pop();
            var line = tspans[tspans.length - 1].text();
            if (line.length > 3) line = line.substring(0, line.length - 3) + "...";
            tspans[tspans.length - 1].text(line);
            reduced = true;
        }
        return reduced;
    }
    d3.selectAll(axisSelector + " .tick text").each(function(i, e) {
        var text = d3.select(this);
        var tspans = separate(text);
        do distribute(text, tspans);
        while (reduce(text, tspans))
    });
}


var $5ff819424c6735fc$export$1b75c0a6cacf635c = /*#__PURE__*/ function(Renderer) {
    "use strict";
    $cb9ce7a7602b77d1$export$9099ad97b570f7c($5ff819424c6735fc$export$1b75c0a6cacf635c, Renderer);
    function $5ff819424c6735fc$export$1b75c0a6cacf635c(params) {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $5ff819424c6735fc$export$1b75c0a6cacf635c);
        var _this;
        _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c($5ff819424c6735fc$export$1b75c0a6cacf635c).call(this, params));
        _this.xTickFormat = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "xTickFormat", ",.2f");
        _this.yTickFormat = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "yTickFormat", ",.2f");
        _this.stacked = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "stacked", false);
        _this.groupSpacing = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "groupSpacing", 0.1);
        _this.transitionDuration = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "transitionDuration", 500);
        _this.controls = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "controls", false);
        _this.barColor = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "barColor", false);
        _this.color = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "color", false);
        _this.showLegend = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "showLegend", true);
        _this.xAxisLabel = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "xAxisLabel", "");
        _this.yAxisLabel = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "yAxisLabel", "");
        _this.yAxisLabelDistance = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "yAxisLabelDistance", 0);
        _this.marginTop = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "marginTop", 30);
        _this.marginRight = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "marginRight", 20);
        _this.marginBottom = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "marginBottom", 50);
        _this.marginLeft = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "marginLeft", 60);
        _this.hideIfNoData = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "hideIfNoData", false);
        _this.onHide = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "onHide", false);
        _this.onShow = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "onShow", false);
        _this.namespace = "edges-nvd3-multibar";
        return _this;
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($5ff819424c6735fc$export$1b75c0a6cacf635c, [
        {
            key: "draw",
            value: function draw() {
                // first sort out the data series
                var data_series = this.component.dataSeries;
                if (!data_series) data_series = [];
                data_series = $530e6b01b500d249$export$af206d707775bac7(this.component.dataSeries);
                // now decide if we are going to continue
                if (this.hideIfNoData) {
                    if (!$530e6b01b500d249$export$e89b2486fe14568(data_series)) {
                        this.component.context.html("");
                        this.component.context.hide();
                        if (this.onHide) this.onHide();
                        return;
                    }
                    this.component.context.show();
                    if (this.onShow) this.onShow();
                }
                var svgId = $988cca1a6a01f734$export$bf52b203d82ff901(this.namespace, "svg", this);
                var svgSelector = $988cca1a6a01f734$export$5d5492dec79280f1(this.namespace, "svg", this);
                this.component.context.html('<svg id="' + svgId + '"></svg>');
                var that = this;
                $3bc6b949b00e2a58$export$8698b599d6b7d9a0.addGraph(function() {
                    var chart = $3bc6b949b00e2a58$export$8698b599d6b7d9a0.models.multiBarChart().showControls(that.controls).margin({
                        top: that.marginTop,
                        right: that.marginRight,
                        bottom: that.marginBottom,
                        left: that.marginLeft
                    }).stacked(that.stacked).groupSpacing(that.groupSpacing);
                    chart.xAxis.axisLabel(that.xAxisLabel);
                    if (that.xTickFormat) {
                        var fn = that.xTickFormat;
                        if (typeof that.xTickFormat === "string") fn = $e4a0ccd89c102736$export$6343839093e1c21d.format(that.xTickFormat);
                        chart.xAxis.tickFormat(fn);
                    }
                    chart.yAxis.axisLabel(that.yAxisLabel).axisLabelDistance(that.yAxisLabelDistance);
                    if (that.yTickFormat) {
                        var fn = that.yTickFormat;
                        if (typeof that.yTickFormat === "string") fn = $e4a0ccd89c102736$export$6343839093e1c21d.format(that.yTickFormat);
                        chart.yAxis.tickFormat(fn);
                    }
                    if (that.barColor) chart.barColor(that.barColor);
                    if (that.color) chart.color(that.color);
                    chart.showLegend(that.showLegend);
                    $e4a0ccd89c102736$export$6343839093e1c21d.select(svgSelector).datum(data_series).transition().duration(that.transitionDuration).call(chart);
                    $3bc6b949b00e2a58$export$8698b599d6b7d9a0.utils.windowResize(chart.update);
                    return chart;
                });
            }
        }
    ]);
    return $5ff819424c6735fc$export$1b75c0a6cacf635c;
}($97ca9eea36c86bb4$export$a695173e2ecfa9b);







function $d9a3a55214484321$export$9b1f0f098143fb9(locations) {
    return {
        lat: locations[0].lat,
        lon: locations[0].lon
    };
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */ /* Geohash encoding/decoding and associated functions   (c) Chris Veness 2014-2019 / MIT Licence  */ /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */ const $90ee7c08a8dfb756$var$base32 = '0123456789bcdefghjkmnpqrstuvwxyz'; // (geohash-specific) Base32 map
/**
 * Geohash: Gustavo Niemeyer’s geocoding system.
 */ class $90ee7c08a8dfb756$var$Geohash {
    /**
     * Encodes latitude/longitude to geohash, either to specified precision or to automatically
     * evaluated precision.
     *
     * @param   {number} lat - Latitude in degrees.
     * @param   {number} lon - Longitude in degrees.
     * @param   {number} [precision] - Number of characters in resulting geohash.
     * @returns {string} Geohash of supplied latitude/longitude.
     * @throws  Invalid geohash.
     *
     * @example
     *     const geohash = Geohash.encode(52.205, 0.119, 7); // => 'u120fxw'
     */ static encode(lat, lon, precision) {
        // infer precision?
        if (typeof precision == 'undefined') {
            // refine geohash until it matches precision of supplied lat/lon
            for(let p = 1; p <= 12; p++){
                const hash = $90ee7c08a8dfb756$var$Geohash.encode(lat, lon, p);
                const posn = $90ee7c08a8dfb756$var$Geohash.decode(hash);
                if (posn.lat == lat && posn.lon == lon) return hash;
            }
            precision = 12; // set to maximum
        }
        lat = Number(lat);
        lon = Number(lon);
        precision = Number(precision);
        if (isNaN(lat) || isNaN(lon) || isNaN(precision)) throw new Error('Invalid geohash');
        let idx = 0; // index into base32 map
        let bit = 0; // each char holds 5 bits
        let evenBit = true;
        let geohash = '';
        let latMin = -90, latMax = 90;
        let lonMin = -180, lonMax = 180;
        while(geohash.length < precision){
            if (evenBit) {
                // bisect E-W longitude
                const lonMid = (lonMin + lonMax) / 2;
                if (lon >= lonMid) {
                    idx = idx * 2 + 1;
                    lonMin = lonMid;
                } else {
                    idx = idx * 2;
                    lonMax = lonMid;
                }
            } else {
                // bisect N-S latitude
                const latMid = (latMin + latMax) / 2;
                if (lat >= latMid) {
                    idx = idx * 2 + 1;
                    latMin = latMid;
                } else {
                    idx = idx * 2;
                    latMax = latMid;
                }
            }
            evenBit = !evenBit;
            if ((++bit) == 5) {
                // 5 bits gives us a character: append it and start over
                geohash += $90ee7c08a8dfb756$var$base32.charAt(idx);
                bit = 0;
                idx = 0;
            }
        }
        return geohash;
    }
    /**
     * Decode geohash to latitude/longitude (location is approximate centre of geohash cell,
     *     to reasonable precision).
     *
     * @param   {string} geohash - Geohash string to be converted to latitude/longitude.
     * @returns {{lat:number, lon:number}} (Center of) geohashed location.
     * @throws  Invalid geohash.
     *
     * @example
     *     const latlon = Geohash.decode('u120fxw'); // => { lat: 52.205, lon: 0.1188 }
     */ static decode(geohash) {
        const bounds = $90ee7c08a8dfb756$var$Geohash.bounds(geohash); // <-- the hard work
        // now just determine the centre of the cell...
        const latMin = bounds.sw.lat, lonMin = bounds.sw.lon;
        const latMax = bounds.ne.lat, lonMax = bounds.ne.lon;
        // cell centre
        let lat = (latMin + latMax) / 2;
        let lon = (lonMin + lonMax) / 2;
        // round to close to centre without excessive precision: ⌊2-log10(Δ°)⌋ decimal places
        lat = lat.toFixed(Math.floor(2 - Math.log(latMax - latMin) / Math.LN10));
        lon = lon.toFixed(Math.floor(2 - Math.log(lonMax - lonMin) / Math.LN10));
        return {
            lat: Number(lat),
            lon: Number(lon)
        };
    }
    /**
     * Returns SW/NE latitude/longitude bounds of specified geohash.
     *
     * @param   {string} geohash - Cell that bounds are required of.
     * @returns {{sw: {lat: number, lon: number}, ne: {lat: number, lon: number}}}
     * @throws  Invalid geohash.
     */ static bounds(geohash) {
        if (geohash.length == 0) throw new Error('Invalid geohash');
        geohash = geohash.toLowerCase();
        let evenBit = true;
        let latMin = -90, latMax = 90;
        let lonMin = -180, lonMax = 180;
        for(let i = 0; i < geohash.length; i++){
            const chr = geohash.charAt(i);
            const idx = $90ee7c08a8dfb756$var$base32.indexOf(chr);
            if (idx == -1) throw new Error('Invalid geohash');
            for(let n = 4; n >= 0; n--){
                const bitN = idx >> n & 1;
                if (evenBit) {
                    // longitude
                    const lonMid = (lonMin + lonMax) / 2;
                    if (bitN == 1) lonMin = lonMid;
                    else lonMax = lonMid;
                } else {
                    // latitude
                    const latMid = (latMin + latMax) / 2;
                    if (bitN == 1) latMin = latMid;
                    else latMax = latMid;
                }
                evenBit = !evenBit;
            }
        }
        const bounds = {
            sw: {
                lat: latMin,
                lon: lonMin
            },
            ne: {
                lat: latMax,
                lon: lonMax
            }
        };
        return bounds;
    }
    /**
     * Determines adjacent cell in given direction.
     *
     * @param   geohash - Cell to which adjacent cell is required.
     * @param   direction - Direction from geohash (N/S/E/W).
     * @returns {string} Geocode of adjacent cell.
     * @throws  Invalid geohash.
     */ static adjacent(geohash, direction) {
        // based on github.com/davetroy/geohash-js
        geohash = geohash.toLowerCase();
        direction = direction.toLowerCase();
        if (geohash.length == 0) throw new Error('Invalid geohash');
        if ('nsew'.indexOf(direction) == -1) throw new Error('Invalid direction');
        const neighbour = {
            n: [
                'p0r21436x8zb9dcf5h7kjnmqesgutwvy',
                'bc01fg45238967deuvhjyznpkmstqrwx'
            ],
            s: [
                '14365h7k9dcfesgujnmqp0r2twvyx8zb',
                '238967debc01fg45kmstqrwxuvhjyznp'
            ],
            e: [
                'bc01fg45238967deuvhjyznpkmstqrwx',
                'p0r21436x8zb9dcf5h7kjnmqesgutwvy'
            ],
            w: [
                '238967debc01fg45kmstqrwxuvhjyznp',
                '14365h7k9dcfesgujnmqp0r2twvyx8zb'
            ]
        };
        const border = {
            n: [
                'prxz',
                'bcfguvyz'
            ],
            s: [
                '028b',
                '0145hjnp'
            ],
            e: [
                'bcfguvyz',
                'prxz'
            ],
            w: [
                '0145hjnp',
                '028b'
            ]
        };
        const lastCh = geohash.slice(-1); // last character of hash
        let parent = geohash.slice(0, -1); // hash without last character
        const type = geohash.length % 2;
        // check for edge-cases which don't share common prefix
        if (border[direction][type].indexOf(lastCh) != -1 && parent != '') parent = $90ee7c08a8dfb756$var$Geohash.adjacent(parent, direction);
        // append letter for direction to parent
        return parent + $90ee7c08a8dfb756$var$base32.charAt(neighbour[direction][type].indexOf(lastCh));
    }
    /**
     * Returns all 8 adjacent cells to specified geohash.
     *
     * @param   {string} geohash - Geohash neighbours are required of.
     * @returns {{n,ne,e,se,s,sw,w,nw: string}}
     * @throws  Invalid geohash.
     */ static neighbours(geohash) {
        return {
            'n': $90ee7c08a8dfb756$var$Geohash.adjacent(geohash, 'n'),
            'ne': $90ee7c08a8dfb756$var$Geohash.adjacent($90ee7c08a8dfb756$var$Geohash.adjacent(geohash, 'n'), 'e'),
            'e': $90ee7c08a8dfb756$var$Geohash.adjacent(geohash, 'e'),
            'se': $90ee7c08a8dfb756$var$Geohash.adjacent($90ee7c08a8dfb756$var$Geohash.adjacent(geohash, 's'), 'e'),
            's': $90ee7c08a8dfb756$var$Geohash.adjacent(geohash, 's'),
            'sw': $90ee7c08a8dfb756$var$Geohash.adjacent($90ee7c08a8dfb756$var$Geohash.adjacent(geohash, 's'), 'w'),
            'w': $90ee7c08a8dfb756$var$Geohash.adjacent(geohash, 'w'),
            'nw': $90ee7c08a8dfb756$var$Geohash.adjacent($90ee7c08a8dfb756$var$Geohash.adjacent(geohash, 'n'), 'w')
        };
    }
}
var /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */ $90ee7c08a8dfb756$export$9099ad97b570f7c = $90ee7c08a8dfb756$var$Geohash;


var $6ca84bc2e35e6866$export$c57445924c23547b = /*#__PURE__*/ function(Component) {
    "use strict";
    $cb9ce7a7602b77d1$export$9099ad97b570f7c($6ca84bc2e35e6866$export$c57445924c23547b, Component);
    function $6ca84bc2e35e6866$export$c57445924c23547b(params) {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $6ca84bc2e35e6866$export$c57445924c23547b);
        var _this;
        _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c($6ca84bc2e35e6866$export$c57445924c23547b).call(this, params));
        //////////////////////////////////
        // parameters that can be passed in
        // field in the data which is the geo_point type
        _this.geoHashAggregation = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "geoHashAggregation", "geohash");
        _this.calculateCentre = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "calculateCentre", function() {
            return $d9a3a55214484321$export$9b1f0f098143fb9;
        });
        _this.geoBoundingBoxFilterField = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "geoBoundingBoxFilterField", "location");
        _this.zoomToPrecisionMap = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "zoomToPrecisionMap", {
            0: 1,
            3: 2,
            5: 3,
            7: 4,
            10: 5,
            13: 6,
            15: 7
        });
        //////////////////////////////////
        // internal state
        // list of locations and the related object at those locations
        // of the form
        // {lat: <lat>, lon: <lon>, obj: {object}}
        _this.locations = [];
        // lat/lon object which defines the centre point of the map
        // this default is somewhere in Mali, and is a decent default for the globe
        _this.centre = {
            lat: 17,
            lon: 0
        };
        _this.currentPrecision = 0;
        _this.currentTopLeft = false;
        _this.currentBottomRight = false;
        return _this;
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($6ca84bc2e35e6866$export$c57445924c23547b, [
        {
            key: "synchronise",
            value: function synchronise() {
                this.locations = [];
                this.centre = {
                    lat: 17,
                    lon: 0
                };
                // read the locations out of the geohash aggregation
                if (this.edge.result) {
                    var agg = this.edge.result.aggregation(this.geoHashAggregation);
                    for(var i = 0; i < agg.buckets.length; i++){
                        var bucket = agg.buckets[i];
                        var latlon = $90ee7c08a8dfb756$export$9099ad97b570f7c.decode(bucket.key);
                        latlon["count"] = bucket.doc_count;
                        this.locations.push(latlon);
                    }
                }
                // set the centre point
                if (this.locations.length > 0) this.centre = this.calculateCentre(this.locations);
            }
        },
        {
            key: "boundsChanged",
            value: function boundsChanged(params) {
                var top_left = params.top_left;
                var bottom_right = params.bottom_right;
                var zoom = params.zoom;
                var precision = this._getPrecisionForZoom(zoom);
                // if the precision isn't going to change, and the view is just a closer view than
                // the existing one, don't run the cycle
                if (precision === this.currentPrecision && this._currentBoxContains({
                    top_left: top_left,
                    bottom_right: bottom_right
                })) return;
                var nq = this.edge.cloneQuery();
                nq.removeMust(new $1f5712c12abeeb70$export$8b446892c82de644.GeoBoundingBoxFilter({
                    field: this.geoBoundingBoxFilterField
                }));
                nq.addMust(new $1f5712c12abeeb70$export$8b446892c82de644.GeoBoundingBoxFilter({
                    field: this.geoBoundingBoxFilterField,
                    top_left: top_left,
                    bottom_right: bottom_right
                }));
                var agg = nq.getAggregation({
                    name: this.geoHashAggregation
                });
                agg.precision = precision;
                this.currentPrecision = precision;
                this.currentBottomRight = bottom_right;
                this.currentTopLeft = top_left;
                this.edge.pushQuery(nq);
                this.edge.cycle();
            }
        },
        {
            key: "_getPrecisionForZoom",
            value: function _getPrecisionForZoom(zoom) {
                for(var i = zoom; i >= 0; i--){
                    if (i in this.zoomToPrecisionMap) return this.zoomToPrecisionMap[i];
                }
                return 1;
            }
        },
        {
            key: "_currentBoxContains",
            value: function _currentBoxContains(params) {
                var top_left = params.top_left;
                var bottom_right = params.bottom_right;
                // if we don't know the current box, then assume false, as we can't tell
                if (!this.currentTopLeft || !this.currentBottomRight) return false;
                function getCorners(top_left1, bottom_right1) {
                    var a = {
                        lon: top_left1.lon,
                        lat: top_left1.lat
                    };
                    var b = {
                        lon: top_left1.lon,
                        lat: bottom_right1.lat
                    };
                    var c = {
                        lon: bottom_right1.lon,
                        lat: bottom_right1.lat
                    };
                    var d = {
                        lon: bottom_right1.lon,
                        lat: top_left1.lat
                    };
                    return [
                        a,
                        b,
                        c,
                        d
                    ];
                }
                var current = getCorners(this.currentTopLeft, this.currentBottomRight);
                var updated = getCorners(top_left, bottom_right);
                var tl = current[0].lon > updated[0].lon && current[0].lat < updated[0].lat;
                var tr = current[1].lon > updated[1].lon && current[1].lat > updated[1].lat;
                var br = current[2].lon < updated[2].lon && current[2].lat > updated[2].lat;
                var bl = current[3].lon < updated[3].lon && current[3].lat > updated[3].lat;
                return tl && tr && br && bl;
            }
        }
    ]);
    return $6ca84bc2e35e6866$export$c57445924c23547b;
}($97ca9eea36c86bb4$export$ea71c44d9cb0d048);





var $f1c53da3377f3130$export$3b99b33fd41e6e1b = 6371008.8;
var $f1c53da3377f3130$export$6090225ba4bd5c27 = {
    centimeters: $f1c53da3377f3130$export$3b99b33fd41e6e1b * 100,
    centimetres: $f1c53da3377f3130$export$3b99b33fd41e6e1b * 100,
    degrees: $f1c53da3377f3130$export$3b99b33fd41e6e1b / 111325,
    feet: $f1c53da3377f3130$export$3b99b33fd41e6e1b * 3.28084,
    inches: $f1c53da3377f3130$export$3b99b33fd41e6e1b * 39.37,
    kilometers: $f1c53da3377f3130$export$3b99b33fd41e6e1b / 1000,
    kilometres: $f1c53da3377f3130$export$3b99b33fd41e6e1b / 1000,
    meters: $f1c53da3377f3130$export$3b99b33fd41e6e1b,
    metres: $f1c53da3377f3130$export$3b99b33fd41e6e1b,
    miles: $f1c53da3377f3130$export$3b99b33fd41e6e1b / 1609.344,
    millimeters: $f1c53da3377f3130$export$3b99b33fd41e6e1b * 1000,
    millimetres: $f1c53da3377f3130$export$3b99b33fd41e6e1b * 1000,
    nauticalmiles: $f1c53da3377f3130$export$3b99b33fd41e6e1b / 1852,
    radians: 1,
    yards: $f1c53da3377f3130$export$3b99b33fd41e6e1b * 1.0936
};
var $f1c53da3377f3130$export$da3eb65231fe0ad8 = {
    centimeters: 100,
    centimetres: 100,
    degrees: 1 / 111325,
    feet: 3.28084,
    inches: 39.37,
    kilometers: 0.001,
    kilometres: 0.001,
    meters: 1,
    metres: 1,
    miles: 1 / 1609.344,
    millimeters: 1000,
    millimetres: 1000,
    nauticalmiles: 1 / 1852,
    radians: 1 / $f1c53da3377f3130$export$3b99b33fd41e6e1b,
    yards: 1.0936133
};
var $f1c53da3377f3130$export$fb8fc03e58e95277 = {
    acres: 0.000247105,
    centimeters: 10000,
    centimetres: 10000,
    feet: 10.763910417,
    hectares: 0.0001,
    inches: 1550.003100006,
    kilometers: 0.000001,
    kilometres: 0.000001,
    meters: 1,
    metres: 1,
    miles: 0.000000386,
    millimeters: 1000000,
    millimetres: 1000000,
    yards: 1.195990046
};
function $f1c53da3377f3130$export$afb26b2da2b9ec90(geom, properties, options) {
    if (options === void 0) options = {
    };
    var feat = {
        type: "Feature"
    };
    if (options.id === 0 || options.id) feat.id = options.id;
    if (options.bbox) feat.bbox = options.bbox;
    feat.properties = properties || {
    };
    feat.geometry = geom;
    return feat;
}
function $f1c53da3377f3130$export$6927473f28f5208a(type, coordinates, _options) {
    if (_options === void 0) _options = {
    };
    switch(type){
        case "Point":
            return $f1c53da3377f3130$export$8502864bca7c3201(coordinates).geometry;
        case "LineString":
            return $f1c53da3377f3130$export$aca513e25ac14bc1(coordinates).geometry;
        case "Polygon":
            return $f1c53da3377f3130$export$c9f721cf0a01d8ec(coordinates).geometry;
        case "MultiPoint":
            return $f1c53da3377f3130$export$309bf52fb89f3663(coordinates).geometry;
        case "MultiLineString":
            return $f1c53da3377f3130$export$e599217661506027(coordinates).geometry;
        case "MultiPolygon":
            return $f1c53da3377f3130$export$4ecb90d6abcf292a(coordinates).geometry;
        default:
            throw new Error(type + " is invalid");
    }
}
function $f1c53da3377f3130$export$8502864bca7c3201(coordinates, properties, options) {
    if (options === void 0) options = {
    };
    if (!coordinates) throw new Error("coordinates is required");
    if (!Array.isArray(coordinates)) throw new Error("coordinates must be an Array");
    if (coordinates.length < 2) throw new Error("coordinates must be at least 2 numbers long");
    if (!$f1c53da3377f3130$export$1b423f7fa395bc1f(coordinates[0]) || !$f1c53da3377f3130$export$1b423f7fa395bc1f(coordinates[1])) throw new Error("coordinates must contain numbers");
    var geom = {
        type: "Point",
        coordinates: coordinates
    };
    return $f1c53da3377f3130$export$afb26b2da2b9ec90(geom, properties, options);
}
function $f1c53da3377f3130$export$176cb2c78829af0(coordinates, properties, options) {
    if (options === void 0) options = {
    };
    return $f1c53da3377f3130$export$7c422acbc10e74d2(coordinates.map(function(coords) {
        return $f1c53da3377f3130$export$8502864bca7c3201(coords, properties);
    }), options);
}
function $f1c53da3377f3130$export$c9f721cf0a01d8ec(coordinates, properties, options) {
    if (options === void 0) options = {
    };
    for(var _i = 0, coordinates_1 = coordinates; _i < coordinates_1.length; _i++){
        var ring = coordinates_1[_i];
        if (ring.length < 4) throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
        for(var j = 0; j < ring[ring.length - 1].length; j++){
            // Check if first point of Polygon contains two numbers
            if (ring[ring.length - 1][j] !== ring[0][j]) throw new Error("First and last Position are not equivalent.");
        }
    }
    var geom = {
        type: "Polygon",
        coordinates: coordinates
    };
    return $f1c53da3377f3130$export$afb26b2da2b9ec90(geom, properties, options);
}
function $f1c53da3377f3130$export$38859cbb8a8596d1(coordinates, properties, options) {
    if (options === void 0) options = {
    };
    return $f1c53da3377f3130$export$7c422acbc10e74d2(coordinates.map(function(coords) {
        return $f1c53da3377f3130$export$c9f721cf0a01d8ec(coords, properties);
    }), options);
}
function $f1c53da3377f3130$export$aca513e25ac14bc1(coordinates, properties, options) {
    if (options === void 0) options = {
    };
    if (coordinates.length < 2) throw new Error("coordinates must be an array of two or more positions");
    var geom = {
        type: "LineString",
        coordinates: coordinates
    };
    return $f1c53da3377f3130$export$afb26b2da2b9ec90(geom, properties, options);
}
function $f1c53da3377f3130$export$b73fd69eb064be2e(coordinates, properties, options) {
    if (options === void 0) options = {
    };
    return $f1c53da3377f3130$export$7c422acbc10e74d2(coordinates.map(function(coords) {
        return $f1c53da3377f3130$export$aca513e25ac14bc1(coords, properties);
    }), options);
}
function $f1c53da3377f3130$export$7c422acbc10e74d2(features, options) {
    if (options === void 0) options = {
    };
    var fc = {
        type: "FeatureCollection"
    };
    if (options.id) fc.id = options.id;
    if (options.bbox) fc.bbox = options.bbox;
    fc.features = features;
    return fc;
}
function $f1c53da3377f3130$export$e599217661506027(coordinates, properties, options) {
    if (options === void 0) options = {
    };
    var geom = {
        type: "MultiLineString",
        coordinates: coordinates
    };
    return $f1c53da3377f3130$export$afb26b2da2b9ec90(geom, properties, options);
}
function $f1c53da3377f3130$export$309bf52fb89f3663(coordinates, properties, options) {
    if (options === void 0) options = {
    };
    var geom = {
        type: "MultiPoint",
        coordinates: coordinates
    };
    return $f1c53da3377f3130$export$afb26b2da2b9ec90(geom, properties, options);
}
function $f1c53da3377f3130$export$4ecb90d6abcf292a(coordinates, properties, options) {
    if (options === void 0) options = {
    };
    var geom = {
        type: "MultiPolygon",
        coordinates: coordinates
    };
    return $f1c53da3377f3130$export$afb26b2da2b9ec90(geom, properties, options);
}
function $f1c53da3377f3130$export$9666a975c039faf3(geometries, properties, options) {
    if (options === void 0) options = {
    };
    var geom = {
        type: "GeometryCollection",
        geometries: geometries
    };
    return $f1c53da3377f3130$export$afb26b2da2b9ec90(geom, properties, options);
}
function $f1c53da3377f3130$export$f9488fbfb886385d(num, precision) {
    if (precision === void 0) precision = 0;
    if (precision && !(precision >= 0)) throw new Error("precision must be a positive number");
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(num * multiplier) / multiplier;
}
function $f1c53da3377f3130$export$a7371587dd3e0f79(radians, units) {
    if (units === void 0) units = "kilometers";
    var factor = $f1c53da3377f3130$export$6090225ba4bd5c27[units];
    if (!factor) throw new Error(units + " units is invalid");
    return radians * factor;
}
function $f1c53da3377f3130$export$6c073b3d621feb4b(distance, units) {
    if (units === void 0) units = "kilometers";
    var factor = $f1c53da3377f3130$export$6090225ba4bd5c27[units];
    if (!factor) throw new Error(units + " units is invalid");
    return distance / factor;
}
function $f1c53da3377f3130$export$4945b7cf3cb41899(distance, units) {
    return $f1c53da3377f3130$export$2bc59cfe0926807d($f1c53da3377f3130$export$6c073b3d621feb4b(distance, units));
}
function $f1c53da3377f3130$export$7ad1874be920d57b(bearing) {
    var angle = bearing % 360;
    if (angle < 0) angle += 360;
    return angle;
}
function $f1c53da3377f3130$export$2bc59cfe0926807d(radians) {
    var degrees = radians % (2 * Math.PI);
    return degrees * 180 / Math.PI;
}
function $f1c53da3377f3130$export$3df9f87a6fcd617d(degrees) {
    var radians = degrees % 360;
    return radians * Math.PI / 180;
}
function $f1c53da3377f3130$export$89c2cc3b6c94cff3(length, originalUnit, finalUnit) {
    if (originalUnit === void 0) originalUnit = "kilometers";
    if (finalUnit === void 0) finalUnit = "kilometers";
    if (!(length >= 0)) throw new Error("length must be a positive number");
    return $f1c53da3377f3130$export$a7371587dd3e0f79($f1c53da3377f3130$export$6c073b3d621feb4b(length, originalUnit), finalUnit);
}
function $f1c53da3377f3130$export$a6884fee1809ec64(area, originalUnit, finalUnit) {
    if (originalUnit === void 0) originalUnit = "meters";
    if (finalUnit === void 0) finalUnit = "kilometers";
    if (!(area >= 0)) throw new Error("area must be a positive number");
    var startFactor = $f1c53da3377f3130$export$fb8fc03e58e95277[originalUnit];
    if (!startFactor) throw new Error("invalid original units");
    var finalFactor = $f1c53da3377f3130$export$fb8fc03e58e95277[finalUnit];
    if (!finalFactor) throw new Error("invalid final units");
    return area / startFactor * finalFactor;
}
function $f1c53da3377f3130$export$1b423f7fa395bc1f(num) {
    return !isNaN(num) && num !== null && !Array.isArray(num);
}
function $f1c53da3377f3130$export$9ee30c9ec6e8e509(input) {
    return !!input && input.constructor === Object;
}
function $f1c53da3377f3130$export$62aae204e048857f(bbox) {
    if (!bbox) throw new Error("bbox is required");
    if (!Array.isArray(bbox)) throw new Error("bbox must be an Array");
    if (bbox.length !== 4 && bbox.length !== 6) throw new Error("bbox must be an Array of 4 or 6 numbers");
    bbox.forEach(function(num) {
        if (!$f1c53da3377f3130$export$1b423f7fa395bc1f(num)) throw new Error("bbox must only contain numbers");
    });
}
function $f1c53da3377f3130$export$f4624eca17ac14c9(id) {
    if (!id) throw new Error("id is required");
    if ([
        "string",
        "number"
    ].indexOf(typeof id) === -1) throw new Error("id must be a number or a string");
}


/**
 * Returns a cloned copy of the passed GeoJSON Object, including possible 'Foreign Members'.
 * ~3-5x faster than the common JSON.parse + JSON.stringify combo method.
 *
 * @name clone
 * @param {GeoJSON} geojson GeoJSON Object
 * @returns {GeoJSON} cloned GeoJSON Object
 * @example
 * var line = turf.lineString([[-74, 40], [-78, 42], [-82, 35]], {color: 'red'});
 *
 * var lineCloned = turf.clone(line);
 */ function $de1dbe698a1ef99a$var$clone(geojson) {
    if (!geojson) throw new Error("geojson is required");
    switch(geojson.type){
        case "Feature":
            return $de1dbe698a1ef99a$var$cloneFeature(geojson);
        case "FeatureCollection":
            return $de1dbe698a1ef99a$var$cloneFeatureCollection(geojson);
        case "Point":
        case "LineString":
        case "Polygon":
        case "MultiPoint":
        case "MultiLineString":
        case "MultiPolygon":
        case "GeometryCollection":
            return $de1dbe698a1ef99a$var$cloneGeometry(geojson);
        default:
            throw new Error("unknown GeoJSON type");
    }
}
/**
 * Clone Feature
 *
 * @private
 * @param {Feature<any>} geojson GeoJSON Feature
 * @returns {Feature<any>} cloned Feature
 */ function $de1dbe698a1ef99a$var$cloneFeature(geojson) {
    var cloned = {
        type: "Feature"
    };
    // Preserve Foreign Members
    Object.keys(geojson).forEach(function(key) {
        switch(key){
            case "type":
            case "properties":
            case "geometry":
                return;
            default:
                cloned[key] = geojson[key];
        }
    });
    // Add properties & geometry last
    cloned.properties = $de1dbe698a1ef99a$var$cloneProperties(geojson.properties);
    cloned.geometry = $de1dbe698a1ef99a$var$cloneGeometry(geojson.geometry);
    return cloned;
}
/**
 * Clone Properties
 *
 * @private
 * @param {Object} properties GeoJSON Properties
 * @returns {Object} cloned Properties
 */ function $de1dbe698a1ef99a$var$cloneProperties(properties) {
    var cloned = {
    };
    if (!properties) return cloned;
    Object.keys(properties).forEach(function(key) {
        var value = properties[key];
        if (typeof value === "object") {
            if (value === null) // handle null
            cloned[key] = null;
            else if (Array.isArray(value)) // handle Array
            cloned[key] = value.map(function(item) {
                return item;
            });
            else // handle generic Object
            cloned[key] = $de1dbe698a1ef99a$var$cloneProperties(value);
        } else cloned[key] = value;
    });
    return cloned;
}
/**
 * Clone Feature Collection
 *
 * @private
 * @param {FeatureCollection<any>} geojson GeoJSON Feature Collection
 * @returns {FeatureCollection<any>} cloned Feature Collection
 */ function $de1dbe698a1ef99a$var$cloneFeatureCollection(geojson) {
    var cloned = {
        type: "FeatureCollection"
    };
    // Preserve Foreign Members
    Object.keys(geojson).forEach(function(key) {
        switch(key){
            case "type":
            case "features":
                return;
            default:
                cloned[key] = geojson[key];
        }
    });
    // Add features
    cloned.features = geojson.features.map(function(feature) {
        return $de1dbe698a1ef99a$var$cloneFeature(feature);
    });
    return cloned;
}
/**
 * Clone Geometry
 *
 * @private
 * @param {Geometry<any>} geometry GeoJSON Geometry
 * @returns {Geometry<any>} cloned Geometry
 */ function $de1dbe698a1ef99a$var$cloneGeometry(geometry) {
    var geom = {
        type: geometry.type
    };
    if (geometry.bbox) geom.bbox = geometry.bbox;
    if (geometry.type === "GeometryCollection") {
        geom.geometries = geometry.geometries.map(function(g) {
            return $de1dbe698a1ef99a$var$cloneGeometry(g);
        });
        return geom;
    }
    geom.coordinates = $de1dbe698a1ef99a$var$deepSlice(geometry.coordinates);
    return geom;
}
/**
 * Deep Slice coordinates
 *
 * @private
 * @param {Coordinates} coords Coordinates
 * @returns {Coordinates} all coordinates sliced
 */ function $de1dbe698a1ef99a$var$deepSlice(coords) {
    var cloned = coords;
    if (typeof cloned[0] !== "object") return cloned.slice();
    return cloned.map(function(coord) {
        return $de1dbe698a1ef99a$var$deepSlice(coord);
    });
}
var $de1dbe698a1ef99a$export$9099ad97b570f7c = $de1dbe698a1ef99a$var$clone;



/**
 * Callback for coordEach
 *
 * @callback coordEachCallback
 * @param {Array<number>} currentCoord The current coordinate being processed.
 * @param {number} coordIndex The current index of the coordinate being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 */ /**
 * Iterate over coordinates in any GeoJSON object, similar to Array.forEach()
 *
 * @name coordEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentCoord, coordIndex, featureIndex, multiFeatureIndex)
 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.coordEach(features, function (currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=currentCoord
 *   //=coordIndex
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 * });
 */ function $555ced313e66658a$export$cccf52902b81b0d9(geojson, callback, excludeWrapCoord) {
    // Handles null Geometry -- Skips this GeoJSON
    if (geojson === null) return;
    var j, k, l, geometry, stopG, coords, geometryMaybeCollection, wrapShrink = 0, coordIndex = 0, isGeometryCollection, type = geojson.type, isFeatureCollection = type === "FeatureCollection", isFeature = type === "Feature", stop = isFeatureCollection ? geojson.features.length : 1;
    // This logic may look a little weird. The reason why it is that way
    // is because it's trying to be fast. GeoJSON supports multiple kinds
    // of objects at its root: FeatureCollection, Features, Geometries.
    // This function has the responsibility of handling all of them, and that
    // means that some of the `for` loops you see below actually just don't apply
    // to certain inputs. For instance, if you give this just a
    // Point geometry, then both loops are short-circuited and all we do
    // is gradually rename the input until it's called 'geometry'.
    //
    // This also aims to allocate as few resources as possible: just a
    // few numbers and booleans, rather than any temporary arrays as would
    // be required with the normalization approach.
    for(var featureIndex = 0; featureIndex < stop; featureIndex++){
        geometryMaybeCollection = isFeatureCollection ? geojson.features[featureIndex].geometry : isFeature ? geojson.geometry : geojson;
        isGeometryCollection = geometryMaybeCollection ? geometryMaybeCollection.type === "GeometryCollection" : false;
        stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;
        for(var geomIndex = 0; geomIndex < stopG; geomIndex++){
            var multiFeatureIndex = 0;
            var geometryIndex = 0;
            geometry = isGeometryCollection ? geometryMaybeCollection.geometries[geomIndex] : geometryMaybeCollection;
            // Handles null Geometry -- Skips this geometry
            if (geometry === null) continue;
            coords = geometry.coordinates;
            var geomType = geometry.type;
            wrapShrink = excludeWrapCoord && (geomType === "Polygon" || geomType === "MultiPolygon") ? 1 : 0;
            switch(geomType){
                case null:
                    break;
                case "Point":
                    if (callback(coords, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                    coordIndex++;
                    multiFeatureIndex++;
                    break;
                case "LineString":
                case "MultiPoint":
                    for(j = 0; j < coords.length; j++){
                        if (callback(coords[j], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                        coordIndex++;
                        if (geomType === "MultiPoint") multiFeatureIndex++;
                    }
                    if (geomType === "LineString") multiFeatureIndex++;
                    break;
                case "Polygon":
                case "MultiLineString":
                    for(j = 0; j < coords.length; j++){
                        for(k = 0; k < coords[j].length - wrapShrink; k++){
                            if (callback(coords[j][k], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                            coordIndex++;
                        }
                        if (geomType === "MultiLineString") multiFeatureIndex++;
                        if (geomType === "Polygon") geometryIndex++;
                    }
                    if (geomType === "Polygon") multiFeatureIndex++;
                    break;
                case "MultiPolygon":
                    for(j = 0; j < coords.length; j++){
                        geometryIndex = 0;
                        for(k = 0; k < coords[j].length; k++){
                            for(l = 0; l < coords[j][k].length - wrapShrink; l++){
                                if (callback(coords[j][k][l], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                                coordIndex++;
                            }
                            geometryIndex++;
                        }
                        multiFeatureIndex++;
                    }
                    break;
                case "GeometryCollection":
                    for(j = 0; j < geometry.geometries.length; j++)if ($555ced313e66658a$export$cccf52902b81b0d9(geometry.geometries[j], callback, excludeWrapCoord) === false) return false;
                    break;
                default:
                    throw new Error("Unknown Geometry Type");
            }
        }
    }
}
/**
 * Callback for coordReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback coordReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Array<number>} currentCoord The current coordinate being processed.
 * @param {number} coordIndex The current index of the coordinate being processed.
 * Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 */ /**
 * Reduce coordinates in any GeoJSON object, similar to Array.reduce()
 *
 * @name coordReduce
 * @param {FeatureCollection|Geometry|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentCoord, coordIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.coordReduce(features, function (previousValue, currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=previousValue
 *   //=currentCoord
 *   //=coordIndex
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   return currentCoord;
 * });
 */ function $555ced313e66658a$export$89a62b3a9bc53ead(geojson, callback, initialValue, excludeWrapCoord) {
    var previousValue = initialValue;
    $555ced313e66658a$export$cccf52902b81b0d9(geojson, function(currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
        if (coordIndex === 0 && initialValue === undefined) previousValue = currentCoord;
        else previousValue = callback(previousValue, currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex);
    }, excludeWrapCoord);
    return previousValue;
}
/**
 * Callback for propEach
 *
 * @callback propEachCallback
 * @param {Object} currentProperties The current Properties being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */ /**
 * Iterate over properties in any GeoJSON object, similar to Array.forEach()
 *
 * @name propEach
 * @param {FeatureCollection|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentProperties, featureIndex)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.propEach(features, function (currentProperties, featureIndex) {
 *   //=currentProperties
 *   //=featureIndex
 * });
 */ function $555ced313e66658a$export$7e1319df03985d3a(geojson, callback) {
    var i;
    switch(geojson.type){
        case "FeatureCollection":
            for(i = 0; i < geojson.features.length; i++){
                if (callback(geojson.features[i].properties, i) === false) break;
            }
            break;
        case "Feature":
            callback(geojson.properties, 0);
            break;
    }
}
/**
 * Callback for propReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback propReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {*} currentProperties The current Properties being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */ /**
 * Reduce properties in any GeoJSON object into a single value,
 * similar to how Array.reduce works. However, in this case we lazily run
 * the reduction, so an array of all properties is unnecessary.
 *
 * @name propReduce
 * @param {FeatureCollection|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentProperties, featureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.propReduce(features, function (previousValue, currentProperties, featureIndex) {
 *   //=previousValue
 *   //=currentProperties
 *   //=featureIndex
 *   return currentProperties
 * });
 */ function $555ced313e66658a$export$6ea47a08cbf96668(geojson, callback, initialValue) {
    var previousValue = initialValue;
    $555ced313e66658a$export$7e1319df03985d3a(geojson, function(currentProperties, featureIndex) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentProperties;
        else previousValue = callback(previousValue, currentProperties, featureIndex);
    });
    return previousValue;
}
/**
 * Callback for featureEach
 *
 * @callback featureEachCallback
 * @param {Feature<any>} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */ /**
 * Iterate over features in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @name featureEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentFeature, featureIndex)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {foo: 'bar'}),
 *   turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.featureEach(features, function (currentFeature, featureIndex) {
 *   //=currentFeature
 *   //=featureIndex
 * });
 */ function $555ced313e66658a$export$4ec429a16a391dd0(geojson, callback) {
    if (geojson.type === "Feature") callback(geojson, 0);
    else if (geojson.type === "FeatureCollection") for(var i = 0; i < geojson.features.length; i++){
        if (callback(geojson.features[i], i) === false) break;
    }
}
/**
 * Callback for featureReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback featureReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */ /**
 * Reduce features in any GeoJSON object, similar to Array.reduce().
 *
 * @name featureReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.featureReduce(features, function (previousValue, currentFeature, featureIndex) {
 *   //=previousValue
 *   //=currentFeature
 *   //=featureIndex
 *   return currentFeature
 * });
 */ function $555ced313e66658a$export$aedc0a2449029016(geojson, callback, initialValue) {
    var previousValue = initialValue;
    $555ced313e66658a$export$4ec429a16a391dd0(geojson, function(currentFeature, featureIndex) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentFeature;
        else previousValue = callback(previousValue, currentFeature, featureIndex);
    });
    return previousValue;
}
/**
 * Get all coordinates from any GeoJSON object.
 *
 * @name coordAll
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @returns {Array<Array<number>>} coordinate position array
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {foo: 'bar'}),
 *   turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * var coords = turf.coordAll(features);
 * //= [[26, 37], [36, 53]]
 */ function $555ced313e66658a$export$5a9cfbedf736c6fa(geojson) {
    var coords = [];
    $555ced313e66658a$export$cccf52902b81b0d9(geojson, function(coord) {
        coords.push(coord);
    });
    return coords;
}
/**
 * Callback for geomEach
 *
 * @callback geomEachCallback
 * @param {Geometry} currentGeometry The current Geometry being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {Object} featureProperties The current Feature Properties being processed.
 * @param {Array<number>} featureBBox The current Feature BBox being processed.
 * @param {number|string} featureId The current Feature Id being processed.
 */ /**
 * Iterate over each geometry in any GeoJSON object, similar to Array.forEach()
 *
 * @name geomEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.geomEach(features, function (currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
 *   //=currentGeometry
 *   //=featureIndex
 *   //=featureProperties
 *   //=featureBBox
 *   //=featureId
 * });
 */ function $555ced313e66658a$export$110a902f786846fe(geojson, callback) {
    var i, j, g, geometry, stopG, geometryMaybeCollection, isGeometryCollection, featureProperties, featureBBox, featureId, featureIndex = 0, isFeatureCollection = geojson.type === "FeatureCollection", isFeature = geojson.type === "Feature", stop = isFeatureCollection ? geojson.features.length : 1;
    // This logic may look a little weird. The reason why it is that way
    // is because it's trying to be fast. GeoJSON supports multiple kinds
    // of objects at its root: FeatureCollection, Features, Geometries.
    // This function has the responsibility of handling all of them, and that
    // means that some of the `for` loops you see below actually just don't apply
    // to certain inputs. For instance, if you give this just a
    // Point geometry, then both loops are short-circuited and all we do
    // is gradually rename the input until it's called 'geometry'.
    //
    // This also aims to allocate as few resources as possible: just a
    // few numbers and booleans, rather than any temporary arrays as would
    // be required with the normalization approach.
    for(i = 0; i < stop; i++){
        geometryMaybeCollection = isFeatureCollection ? geojson.features[i].geometry : isFeature ? geojson.geometry : geojson;
        featureProperties = isFeatureCollection ? geojson.features[i].properties : isFeature ? geojson.properties : {
        };
        featureBBox = isFeatureCollection ? geojson.features[i].bbox : isFeature ? geojson.bbox : undefined;
        featureId = isFeatureCollection ? geojson.features[i].id : isFeature ? geojson.id : undefined;
        isGeometryCollection = geometryMaybeCollection ? geometryMaybeCollection.type === "GeometryCollection" : false;
        stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;
        for(g = 0; g < stopG; g++){
            geometry = isGeometryCollection ? geometryMaybeCollection.geometries[g] : geometryMaybeCollection;
            // Handle null Geometry
            if (geometry === null) {
                if (callback(null, featureIndex, featureProperties, featureBBox, featureId) === false) return false;
                continue;
            }
            switch(geometry.type){
                case "Point":
                case "LineString":
                case "MultiPoint":
                case "Polygon":
                case "MultiLineString":
                case "MultiPolygon":
                    if (callback(geometry, featureIndex, featureProperties, featureBBox, featureId) === false) return false;
                    break;
                case "GeometryCollection":
                    for(j = 0; j < geometry.geometries.length; j++){
                        if (callback(geometry.geometries[j], featureIndex, featureProperties, featureBBox, featureId) === false) return false;
                    }
                    break;
                default:
                    throw new Error("Unknown Geometry Type");
            }
        }
        // Only increase `featureIndex` per each feature
        featureIndex++;
    }
}
/**
 * Callback for geomReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback geomReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Geometry} currentGeometry The current Geometry being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {Object} featureProperties The current Feature Properties being processed.
 * @param {Array<number>} featureBBox The current Feature BBox being processed.
 * @param {number|string} featureId The current Feature Id being processed.
 */ /**
 * Reduce geometry in any GeoJSON object, similar to Array.reduce().
 *
 * @name geomReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.geomReduce(features, function (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
 *   //=previousValue
 *   //=currentGeometry
 *   //=featureIndex
 *   //=featureProperties
 *   //=featureBBox
 *   //=featureId
 *   return currentGeometry
 * });
 */ function $555ced313e66658a$export$f844129661727632(geojson, callback, initialValue) {
    var previousValue = initialValue;
    $555ced313e66658a$export$110a902f786846fe(geojson, function(currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentGeometry;
        else previousValue = callback(previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId);
    });
    return previousValue;
}
/**
 * Callback for flattenEach
 *
 * @callback flattenEachCallback
 * @param {Feature} currentFeature The current flattened feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 */ /**
 * Iterate over flattened features in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @name flattenEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentFeature, featureIndex, multiFeatureIndex)
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
 * ]);
 *
 * turf.flattenEach(features, function (currentFeature, featureIndex, multiFeatureIndex) {
 *   //=currentFeature
 *   //=featureIndex
 *   //=multiFeatureIndex
 * });
 */ function $555ced313e66658a$export$72bcd18d498276a5(geojson, callback) {
    $555ced313e66658a$export$110a902f786846fe(geojson, function(geometry, featureIndex, properties, bbox, id) {
        // Callback for single geometry
        var type = geometry === null ? null : geometry.type;
        switch(type){
            case null:
            case "Point":
            case "LineString":
            case "Polygon":
                if (callback($f1c53da3377f3130$export$afb26b2da2b9ec90(geometry, properties, {
                    bbox: bbox,
                    id: id
                }), featureIndex, 0) === false) return false;
                return;
        }
        var geomType;
        // Callback for multi-geometry
        switch(type){
            case "MultiPoint":
                geomType = "Point";
                break;
            case "MultiLineString":
                geomType = "LineString";
                break;
            case "MultiPolygon":
                geomType = "Polygon";
                break;
        }
        for(var multiFeatureIndex = 0; multiFeatureIndex < geometry.coordinates.length; multiFeatureIndex++){
            var coordinate = geometry.coordinates[multiFeatureIndex];
            var geom = {
                type: geomType,
                coordinates: coordinate
            };
            if (callback($f1c53da3377f3130$export$afb26b2da2b9ec90(geom, properties), featureIndex, multiFeatureIndex) === false) return false;
        }
    });
}
/**
 * Callback for flattenReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback flattenReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 */ /**
 * Reduce flattened features in any GeoJSON object, similar to Array.reduce().
 *
 * @name flattenReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex, multiFeatureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
 * ]);
 *
 * turf.flattenReduce(features, function (previousValue, currentFeature, featureIndex, multiFeatureIndex) {
 *   //=previousValue
 *   //=currentFeature
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   return currentFeature
 * });
 */ function $555ced313e66658a$export$ae6c13ef556a8a6d(geojson, callback, initialValue) {
    var previousValue = initialValue;
    $555ced313e66658a$export$72bcd18d498276a5(geojson, function(currentFeature, featureIndex, multiFeatureIndex) {
        if (featureIndex === 0 && multiFeatureIndex === 0 && initialValue === undefined) previousValue = currentFeature;
        else previousValue = callback(previousValue, currentFeature, featureIndex, multiFeatureIndex);
    });
    return previousValue;
}
/**
 * Callback for segmentEach
 *
 * @callback segmentEachCallback
 * @param {Feature<LineString>} currentSegment The current Segment being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 * @param {number} segmentIndex The current index of the Segment being processed.
 * @returns {void}
 */ /**
 * Iterate over 2-vertex line segment in any GeoJSON object, similar to Array.forEach()
 * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
 * @param {Function} callback a method that takes (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex)
 * @returns {void}
 * @example
 * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
 *
 * // Iterate over GeoJSON by 2-vertex segments
 * turf.segmentEach(polygon, function (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
 *   //=currentSegment
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   //=segmentIndex
 * });
 *
 * // Calculate the total number of segments
 * var total = 0;
 * turf.segmentEach(polygon, function () {
 *     total++;
 * });
 */ function $555ced313e66658a$export$3116792cf8372e55(geojson, callback) {
    $555ced313e66658a$export$72bcd18d498276a5(geojson, function(feature, featureIndex, multiFeatureIndex) {
        var segmentIndex = 0;
        // Exclude null Geometries
        if (!feature.geometry) return;
        // (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
        var type = feature.geometry.type;
        if (type === "Point" || type === "MultiPoint") return;
        // Generate 2-vertex line segments
        var previousCoords;
        var previousFeatureIndex = 0;
        var previousMultiIndex = 0;
        var prevGeomIndex = 0;
        if ($555ced313e66658a$export$cccf52902b81b0d9(feature, function(currentCoord, coordIndex, featureIndexCoord, multiPartIndexCoord, geometryIndex) {
            // Simulating a meta.coordReduce() since `reduce` operations cannot be stopped by returning `false`
            if (previousCoords === undefined || featureIndex > previousFeatureIndex || multiPartIndexCoord > previousMultiIndex || geometryIndex > prevGeomIndex) {
                previousCoords = currentCoord;
                previousFeatureIndex = featureIndex;
                previousMultiIndex = multiPartIndexCoord;
                prevGeomIndex = geometryIndex;
                segmentIndex = 0;
                return;
            }
            var currentSegment = $f1c53da3377f3130$export$aca513e25ac14bc1([
                previousCoords,
                currentCoord
            ], feature.properties);
            if (callback(currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) === false) return false;
            segmentIndex++;
            previousCoords = currentCoord;
        }) === false) return false;
    });
}
/**
 * Callback for segmentReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback segmentReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature<LineString>} currentSegment The current Segment being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 * @param {number} segmentIndex The current index of the Segment being processed.
 */ /**
 * Reduce 2-vertex line segment in any GeoJSON object, similar to Array.reduce()
 * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
 * @param {Function} callback a method that takes (previousValue, currentSegment, currentIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {void}
 * @example
 * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
 *
 * // Iterate over GeoJSON by 2-vertex segments
 * turf.segmentReduce(polygon, function (previousSegment, currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
 *   //= previousSegment
 *   //= currentSegment
 *   //= featureIndex
 *   //= multiFeatureIndex
 *   //= geometryIndex
 *   //= segmentIndex
 *   return currentSegment
 * });
 *
 * // Calculate the total number of segments
 * var initialValue = 0
 * var total = turf.segmentReduce(polygon, function (previousValue) {
 *     previousValue++;
 *     return previousValue;
 * }, initialValue);
 */ function $555ced313e66658a$export$6811769a60e09409(geojson, callback, initialValue) {
    var previousValue = initialValue;
    var started = false;
    $555ced313e66658a$export$3116792cf8372e55(geojson, function(currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
        if (started === false && initialValue === undefined) previousValue = currentSegment;
        else previousValue = callback(previousValue, currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex);
        started = true;
    });
    return previousValue;
}
/**
 * Callback for lineEach
 *
 * @callback lineEachCallback
 * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed
 * @param {number} featureIndex The current index of the Feature being processed
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
 * @param {number} geometryIndex The current index of the Geometry being processed
 */ /**
 * Iterate over line or ring coordinates in LineString, Polygon, MultiLineString, MultiPolygon Features or Geometries,
 * similar to Array.forEach.
 *
 * @name lineEach
 * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
 * @param {Function} callback a method that takes (currentLine, featureIndex, multiFeatureIndex, geometryIndex)
 * @example
 * var multiLine = turf.multiLineString([
 *   [[26, 37], [35, 45]],
 *   [[36, 53], [38, 50], [41, 55]]
 * ]);
 *
 * turf.lineEach(multiLine, function (currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=currentLine
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 * });
 */ function $555ced313e66658a$export$52c668f16718d7ce(geojson, callback) {
    // validation
    if (!geojson) throw new Error("geojson is required");
    $555ced313e66658a$export$72bcd18d498276a5(geojson, function(feature, featureIndex, multiFeatureIndex) {
        if (feature.geometry === null) return;
        var type = feature.geometry.type;
        var coords = feature.geometry.coordinates;
        switch(type){
            case "LineString":
                if (callback(feature, featureIndex, multiFeatureIndex, 0, 0) === false) return false;
                break;
            case "Polygon":
                for(var geometryIndex = 0; geometryIndex < coords.length; geometryIndex++){
                    if (callback($f1c53da3377f3130$export$aca513e25ac14bc1(coords[geometryIndex], feature.properties), featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                }
                break;
        }
    });
}
/**
 * Callback for lineReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback lineReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed.
 * @param {number} featureIndex The current index of the Feature being processed
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
 * @param {number} geometryIndex The current index of the Geometry being processed
 */ /**
 * Reduce features in any GeoJSON object, similar to Array.reduce().
 *
 * @name lineReduce
 * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
 * @param {Function} callback a method that takes (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var multiPoly = turf.multiPolygon([
 *   turf.polygon([[[12,48],[2,41],[24,38],[12,48]], [[9,44],[13,41],[13,45],[9,44]]]),
 *   turf.polygon([[[5, 5], [0, 0], [2, 2], [4, 4], [5, 5]]])
 * ]);
 *
 * turf.lineReduce(multiPoly, function (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=previousValue
 *   //=currentLine
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   return currentLine
 * });
 */ function $555ced313e66658a$export$319a340e9b60833a(geojson, callback, initialValue) {
    var previousValue = initialValue;
    $555ced313e66658a$export$52c668f16718d7ce(geojson, function(currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentLine;
        else previousValue = callback(previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex);
    });
    return previousValue;
}
/**
 * Finds a particular 2-vertex LineString Segment from a GeoJSON using `@turf/meta` indexes.
 *
 * Negative indexes are permitted.
 * Point & MultiPoint will always return null.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson Any GeoJSON Feature or Geometry
 * @param {Object} [options={}] Optional parameters
 * @param {number} [options.featureIndex=0] Feature Index
 * @param {number} [options.multiFeatureIndex=0] Multi-Feature Index
 * @param {number} [options.geometryIndex=0] Geometry Index
 * @param {number} [options.segmentIndex=0] Segment Index
 * @param {Object} [options.properties={}] Translate Properties to output LineString
 * @param {BBox} [options.bbox={}] Translate BBox to output LineString
 * @param {number|string} [options.id={}] Translate Id to output LineString
 * @returns {Feature<LineString>} 2-vertex GeoJSON Feature LineString
 * @example
 * var multiLine = turf.multiLineString([
 *     [[10, 10], [50, 30], [30, 40]],
 *     [[-10, -10], [-50, -30], [-30, -40]]
 * ]);
 *
 * // First Segment (defaults are 0)
 * turf.findSegment(multiLine);
 * // => Feature<LineString<[[10, 10], [50, 30]]>>
 *
 * // First Segment of 2nd Multi Feature
 * turf.findSegment(multiLine, {multiFeatureIndex: 1});
 * // => Feature<LineString<[[-10, -10], [-50, -30]]>>
 *
 * // Last Segment of Last Multi Feature
 * turf.findSegment(multiLine, {multiFeatureIndex: -1, segmentIndex: -1});
 * // => Feature<LineString<[[-50, -30], [-30, -40]]>>
 */ function $555ced313e66658a$export$fbd55df10107631a(geojson, options) {
    // Optional Parameters
    options = options || {
    };
    if (!$f1c53da3377f3130$export$9ee30c9ec6e8e509(options)) throw new Error("options is invalid");
    var featureIndex = options.featureIndex || 0;
    var multiFeatureIndex = options.multiFeatureIndex || 0;
    var geometryIndex = options.geometryIndex || 0;
    var segmentIndex = options.segmentIndex || 0;
    // Find FeatureIndex
    var properties = options.properties;
    var geometry;
    switch(geojson.type){
        case "FeatureCollection":
            if (featureIndex < 0) featureIndex = geojson.features.length + featureIndex;
            properties = properties || geojson.features[featureIndex].properties;
            geometry = geojson.features[featureIndex].geometry;
            break;
        case "Feature":
            properties = properties || geojson.properties;
            geometry = geojson.geometry;
            break;
        case "Point":
        case "MultiPoint":
            return null;
        case "LineString":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon":
            geometry = geojson;
            break;
        default:
            throw new Error("geojson is invalid");
    }
    // Find SegmentIndex
    if (geometry === null) return null;
    var coords = geometry.coordinates;
    switch(geometry.type){
        case "Point":
        case "MultiPoint":
            return null;
        case "LineString":
            if (segmentIndex < 0) segmentIndex = coords.length + segmentIndex - 1;
            return $f1c53da3377f3130$export$aca513e25ac14bc1([
                coords[segmentIndex],
                coords[segmentIndex + 1]
            ], properties, options);
        case "Polygon":
            if (geometryIndex < 0) geometryIndex = coords.length + geometryIndex;
            if (segmentIndex < 0) segmentIndex = coords[geometryIndex].length + segmentIndex - 1;
            return $f1c53da3377f3130$export$aca513e25ac14bc1([
                coords[geometryIndex][segmentIndex],
                coords[geometryIndex][segmentIndex + 1], 
            ], properties, options);
        case "MultiLineString":
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            if (segmentIndex < 0) segmentIndex = coords[multiFeatureIndex].length + segmentIndex - 1;
            return $f1c53da3377f3130$export$aca513e25ac14bc1([
                coords[multiFeatureIndex][segmentIndex],
                coords[multiFeatureIndex][segmentIndex + 1], 
            ], properties, options);
        case "MultiPolygon":
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            if (geometryIndex < 0) geometryIndex = coords[multiFeatureIndex].length + geometryIndex;
            if (segmentIndex < 0) segmentIndex = coords[multiFeatureIndex][geometryIndex].length - segmentIndex - 1;
            return $f1c53da3377f3130$export$aca513e25ac14bc1([
                coords[multiFeatureIndex][geometryIndex][segmentIndex],
                coords[multiFeatureIndex][geometryIndex][segmentIndex + 1], 
            ], properties, options);
    }
    throw new Error("geojson is invalid");
}
/**
 * Finds a particular Point from a GeoJSON using `@turf/meta` indexes.
 *
 * Negative indexes are permitted.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson Any GeoJSON Feature or Geometry
 * @param {Object} [options={}] Optional parameters
 * @param {number} [options.featureIndex=0] Feature Index
 * @param {number} [options.multiFeatureIndex=0] Multi-Feature Index
 * @param {number} [options.geometryIndex=0] Geometry Index
 * @param {number} [options.coordIndex=0] Coord Index
 * @param {Object} [options.properties={}] Translate Properties to output Point
 * @param {BBox} [options.bbox={}] Translate BBox to output Point
 * @param {number|string} [options.id={}] Translate Id to output Point
 * @returns {Feature<Point>} 2-vertex GeoJSON Feature Point
 * @example
 * var multiLine = turf.multiLineString([
 *     [[10, 10], [50, 30], [30, 40]],
 *     [[-10, -10], [-50, -30], [-30, -40]]
 * ]);
 *
 * // First Segment (defaults are 0)
 * turf.findPoint(multiLine);
 * // => Feature<Point<[10, 10]>>
 *
 * // First Segment of the 2nd Multi-Feature
 * turf.findPoint(multiLine, {multiFeatureIndex: 1});
 * // => Feature<Point<[-10, -10]>>
 *
 * // Last Segment of last Multi-Feature
 * turf.findPoint(multiLine, {multiFeatureIndex: -1, coordIndex: -1});
 * // => Feature<Point<[-30, -40]>>
 */ function $555ced313e66658a$export$6416d7a33c28eb60(geojson, options) {
    // Optional Parameters
    options = options || {
    };
    if (!$f1c53da3377f3130$export$9ee30c9ec6e8e509(options)) throw new Error("options is invalid");
    var featureIndex = options.featureIndex || 0;
    var multiFeatureIndex = options.multiFeatureIndex || 0;
    var geometryIndex = options.geometryIndex || 0;
    var coordIndex = options.coordIndex || 0;
    // Find FeatureIndex
    var properties = options.properties;
    var geometry;
    switch(geojson.type){
        case "FeatureCollection":
            if (featureIndex < 0) featureIndex = geojson.features.length + featureIndex;
            properties = properties || geojson.features[featureIndex].properties;
            geometry = geojson.features[featureIndex].geometry;
            break;
        case "Feature":
            properties = properties || geojson.properties;
            geometry = geojson.geometry;
            break;
        case "Point":
        case "MultiPoint":
            return null;
        case "LineString":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon":
            geometry = geojson;
            break;
        default:
            throw new Error("geojson is invalid");
    }
    // Find Coord Index
    if (geometry === null) return null;
    var coords = geometry.coordinates;
    switch(geometry.type){
        case "Point":
            return $f1c53da3377f3130$export$8502864bca7c3201(coords, properties, options);
        case "MultiPoint":
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            return $f1c53da3377f3130$export$8502864bca7c3201(coords[multiFeatureIndex], properties, options);
        case "LineString":
            if (coordIndex < 0) coordIndex = coords.length + coordIndex;
            return $f1c53da3377f3130$export$8502864bca7c3201(coords[coordIndex], properties, options);
        case "Polygon":
            if (geometryIndex < 0) geometryIndex = coords.length + geometryIndex;
            if (coordIndex < 0) coordIndex = coords[geometryIndex].length + coordIndex;
            return $f1c53da3377f3130$export$8502864bca7c3201(coords[geometryIndex][coordIndex], properties, options);
        case "MultiLineString":
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            if (coordIndex < 0) coordIndex = coords[multiFeatureIndex].length + coordIndex;
            return $f1c53da3377f3130$export$8502864bca7c3201(coords[multiFeatureIndex][coordIndex], properties, options);
        case "MultiPolygon":
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            if (geometryIndex < 0) geometryIndex = coords[multiFeatureIndex].length + geometryIndex;
            if (coordIndex < 0) coordIndex = coords[multiFeatureIndex][geometryIndex].length - coordIndex;
            return $f1c53da3377f3130$export$8502864bca7c3201(coords[multiFeatureIndex][geometryIndex][coordIndex], properties, options);
    }
    throw new Error("geojson is invalid");
}


var $4573a17051f4ecd4$exports = {};
"use strict";
var $7a62b681c6829044$exports = {};
"use strict";
$7a62b681c6829044$exports = {
    /**
  * Euclidean distance
  */ eudist: function eudist(v1, v2, sqrt) {
        var len = v1.length;
        var sum = 0;
        for(var i = 0; i < len; i++){
            var d = (v1[i] || 0) - (v2[i] || 0);
            sum += d * d;
        }
        // Square root not really needed
        return sqrt ? Math.sqrt(sum) : sum;
    },
    mandist: function mandist(v1, v2, sqrt) {
        var len = v1.length;
        var sum = 0;
        for(var i = 0; i < len; i++)sum += Math.abs((v1[i] || 0) - (v2[i] || 0));
        // Square root not really needed
        return sqrt ? Math.sqrt(sum) : sum;
    },
    /**
  * Unidimensional distance
  */ dist: function dist(v1, v2, sqrt) {
        var d = Math.abs(v1 - v2);
        return sqrt ? d : d * d;
    }
};


var $6fbf1da1bf5d3020$exports = {};
"use strict";

var $6fbf1da1bf5d3020$var$eudist = $7a62b681c6829044$exports.eudist, $6fbf1da1bf5d3020$var$dist = $7a62b681c6829044$exports.dist;
$6fbf1da1bf5d3020$exports = {
    kmrand: function kmrand(data, k) {
        var map = {
        }, ks = [], t = k << 2;
        var len = data.length;
        var multi = data[0].length > 0;
        while(ks.length < k && (t--) > 0){
            var d = data[Math.floor(Math.random() * len)];
            var key = multi ? d.join("_") : "" + d;
            if (!map[key]) {
                map[key] = true;
                ks.push(d);
            }
        }
        if (ks.length < k) throw new Error("Error initializating clusters");
        else return ks;
    },
    /**
  * K-means++ initial centroid selection
  */ kmpp: function kmpp(data, k) {
        var distance = data[0].length ? $6fbf1da1bf5d3020$var$eudist : $6fbf1da1bf5d3020$var$dist;
        var ks = [], len = data.length;
        var multi = data[0].length > 0;
        var map = {
        };
        // First random centroid
        var c = data[Math.floor(Math.random() * len)];
        var key = multi ? c.join("_") : "" + c;
        ks.push(c);
        map[key] = true;
        // Retrieve next centroids
        while(ks.length < k){
            // Min Distances between current centroids and data points
            var dists = [], lk = ks.length;
            var dsum = 0, prs = [];
            for(var i = 0; i < len; i++){
                var min = Infinity;
                for(var j = 0; j < lk; j++){
                    var _dist = distance(data[i], ks[j]);
                    if (_dist <= min) min = _dist;
                }
                dists[i] = min;
            }
            // Sum all min distances
            for(var _i = 0; _i < len; _i++)dsum += dists[_i];
            // Probabilities and cummulative prob (cumsum)
            for(var _i2 = 0; _i2 < len; _i2++)prs[_i2] = {
                i: _i2,
                v: data[_i2],
                pr: dists[_i2] / dsum,
                cs: 0
            };
            // Sort Probabilities
            prs.sort(function(a, b) {
                return a.pr - b.pr;
            });
            // Cummulative Probabilities
            prs[0].cs = prs[0].pr;
            for(var _i3 = 1; _i3 < len; _i3++)prs[_i3].cs = prs[_i3 - 1].cs + prs[_i3].pr;
            // Randomize
            var rnd = Math.random();
            // Gets only the items whose cumsum >= rnd
            var idx = 0;
            while(idx < len - 1 && prs[idx++].cs < rnd);
            ks.push(prs[idx - 1].v);
        /*
   let done = false;
   while(!done) {
   	// this is our new centroid
   	c = prs[idx-1].v
   	key = multi? c.join("_") : `${c}`;
   	if(!map[key]) {
   		map[key] = true;
   		ks.push(c);
   		done = true;
   	}
   	else {
   		idx++;
   	}
   }
   */ }
        return ks;
    }
};


/*jshint esversion: 6 */ var $4573a17051f4ecd4$var$eudist = $7a62b681c6829044$exports.eudist, $4573a17051f4ecd4$var$mandist = $7a62b681c6829044$exports.mandist, $4573a17051f4ecd4$var$dist = $7a62b681c6829044$exports.dist, $4573a17051f4ecd4$var$kmrand = $6fbf1da1bf5d3020$exports.kmrand, $4573a17051f4ecd4$var$kmpp = $6fbf1da1bf5d3020$exports.kmpp;
var $4573a17051f4ecd4$var$MAX = 10000;
/**
 * Inits an array with values
 */ function $4573a17051f4ecd4$var$init(len, val, v) {
    v = v || [];
    for(var i = 0; i < len; i++)v[i] = val;
    return v;
}
function $4573a17051f4ecd4$var$skmeans(data, k, initial, maxit) {
    var ks = [], old = [], idxs = [], dist = [];
    var conv = false, it = maxit || $4573a17051f4ecd4$var$MAX;
    var len = data.length, vlen = data[0].length, multi = vlen > 0;
    var count = [];
    if (!initial) {
        var _idxs = {
        };
        while(ks.length < k){
            var idx = Math.floor(Math.random() * len);
            if (!_idxs[idx]) {
                _idxs[idx] = true;
                ks.push(data[idx]);
            }
        }
    } else if (initial == "kmrand") ks = $4573a17051f4ecd4$var$kmrand(data, k);
    else if (initial == "kmpp") ks = $4573a17051f4ecd4$var$kmpp(data, k);
    else ks = initial;
    do {
        // Reset k count
        $4573a17051f4ecd4$var$init(k, 0, count);
        // For each value in data, find the nearest centroid
        for(var i = 0; i < len; i++){
            var min = Infinity, _idx = 0;
            for(var j = 0; j < k; j++){
                // Multidimensional or unidimensional
                var dist = multi ? $4573a17051f4ecd4$var$eudist(data[i], ks[j]) : Math.abs(data[i] - ks[j]);
                if (dist <= min) {
                    min = dist;
                    _idx = j;
                }
            }
            idxs[i] = _idx; // Index of the selected centroid for that value
            count[_idx]++; // Number of values for this centroid
        }
        // Recalculate centroids
        var sum = [], old = [], dif = 0;
        for(var _j = 0; _j < k; _j++){
            // Multidimensional or unidimensional
            sum[_j] = multi ? $4573a17051f4ecd4$var$init(vlen, 0, sum[_j]) : 0;
            old[_j] = ks[_j];
        }
        // If multidimensional
        if (multi) {
            for(var _j2 = 0; _j2 < k; _j2++)ks[_j2] = [];
             // Sum values and count for each centroid
            for(var _i = 0; _i < len; _i++){
                var _idx2 = idxs[_i], // Centroid for that item
                vsum = sum[_idx2], // Sum values for this centroid
                vect = data[_i]; // Current vector
                // Accumulate value on the centroid for current vector
                for(var h = 0; h < vlen; h++)vsum[h] += vect[h];
            }
            // Calculate the average for each centroid
            conv = true;
            for(var _j3 = 0; _j3 < k; _j3++){
                var ksj = ks[_j3], // Current centroid
                sumj = sum[_j3], // Accumulated centroid values
                oldj = old[_j3], // Old centroid value
                cj = count[_j3]; // Number of elements for this centroid
                // New average
                for(var _h = 0; _h < vlen; _h++)ksj[_h] = sumj[_h] / cj || 0; // New centroid
                // Find if centroids have moved
                if (conv) {
                    for(var _h2 = 0; _h2 < vlen; _h2++)if (oldj[_h2] != ksj[_h2]) {
                        conv = false;
                        break;
                    }
                }
            }
        } else {
            // Sum values and count for each centroid
            for(var _i2 = 0; _i2 < len; _i2++){
                var _idx3 = idxs[_i2];
                sum[_idx3] += data[_i2];
            }
            // Calculate the average for each centroid
            for(var _j4 = 0; _j4 < k; _j4++)ks[_j4] = sum[_j4] / count[_j4] || 0; // New centroid
            // Find if centroids have moved
            conv = true;
            for(var _j5 = 0; _j5 < k; _j5++)if (old[_j5] != ks[_j5]) {
                conv = false;
                break;
            }
        }
        conv = conv || (--it) <= 0;
    }while (!conv)
    return {
        it: $4573a17051f4ecd4$var$MAX - it,
        k: k,
        idxs: idxs,
        centroids: ks
    };
}
$4573a17051f4ecd4$exports = $4573a17051f4ecd4$var$skmeans;


/**
 * Takes a set of {@link Point|points} and partition them into clusters using the k-mean .
 * It uses the [k-means algorithm](https://en.wikipedia.org/wiki/K-means_clustering)
 *
 * @name clustersKmeans
 * @param {FeatureCollection<Point>} points to be clustered
 * @param {Object} [options={}] Optional parameters
 * @param {number} [options.numberOfClusters=Math.sqrt(numberOfPoints/2)] numberOfClusters that will be generated
 * @param {boolean} [options.mutate=false] allows GeoJSON input to be mutated (significant performance increase if true)
 * @returns {FeatureCollection<Point>} Clustered Points with an additional two properties associated to each Feature:
 * - {number} cluster - the associated clusterId
 * - {[number, number]} centroid - Centroid of the cluster [Longitude, Latitude]
 * @example
 * // create random points with random z-values in their properties
 * var points = turf.randomPoint(100, {bbox: [0, 30, 20, 50]});
 * var options = {numberOfClusters: 7};
 * var clustered = turf.clustersKmeans(points, options);
 *
 * //addToMap
 * var addToMap = [clustered];
 */ function $e771df19e4bdc08f$var$clustersKmeans(points, options) {
    if (options === void 0) options = {
    };
    // Default Params
    var count = points.features.length;
    options.numberOfClusters = options.numberOfClusters || Math.round(Math.sqrt(count / 2));
    // numberOfClusters can't be greater than the number of points
    // fallbacks to count
    if (options.numberOfClusters > count) options.numberOfClusters = count;
    // Clone points to prevent any mutations (enabled by default)
    if (options.mutate !== true) points = $de1dbe698a1ef99a$export$9099ad97b570f7c(points);
    // collect points coordinates
    var data = $555ced313e66658a$export$5a9cfbedf736c6fa(points);
    // create seed to avoid skmeans to drift
    var initialCentroids = data.slice(0, options.numberOfClusters);
    // create skmeans clusters
    var skmeansResult = (/*@__PURE__*/$parcel$interopDefault($4573a17051f4ecd4$exports))(data, options.numberOfClusters, initialCentroids);
    // store centroids {clusterId: [number, number]}
    var centroids = {
    };
    skmeansResult.centroids.forEach(function(coord, idx) {
        centroids[idx] = coord;
    });
    // add associated cluster number
    $555ced313e66658a$export$4ec429a16a391dd0(points, function(point, index) {
        var clusterId = skmeansResult.idxs[index];
        point.properties.cluster = clusterId;
        point.properties.centroid = centroids[clusterId];
    });
    return points;
}
var $e771df19e4bdc08f$export$9099ad97b570f7c = $e771df19e4bdc08f$var$clustersKmeans;




function $31e74cd211a38f3d$export$f838ef719c965add(coord) {
    if (!coord) throw new Error("coord is required");
    if (!Array.isArray(coord)) {
        if (coord.type === "Feature" && coord.geometry !== null && coord.geometry.type === "Point") return coord.geometry.coordinates;
        if (coord.type === "Point") return coord.coordinates;
    }
    if (Array.isArray(coord) && coord.length >= 2 && !Array.isArray(coord[0]) && !Array.isArray(coord[1])) return coord;
    throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
function $31e74cd211a38f3d$export$46fc27be15a5ee5(coords) {
    if (Array.isArray(coords)) return coords;
    // Feature
    if (coords.type === "Feature") {
        if (coords.geometry !== null) return coords.geometry.coordinates;
    } else {
        // Geometry
        if (coords.coordinates) return coords.coordinates;
    }
    throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array");
}
function $31e74cd211a38f3d$export$3aa59f2d5d9a200d(coordinates) {
    if (coordinates.length > 1 && $f1c53da3377f3130$export$1b423f7fa395bc1f(coordinates[0]) && $f1c53da3377f3130$export$1b423f7fa395bc1f(coordinates[1])) return true;
    if (Array.isArray(coordinates[0]) && coordinates[0].length) return $31e74cd211a38f3d$export$3aa59f2d5d9a200d(coordinates[0]);
    throw new Error("coordinates must only contain numbers");
}
function $31e74cd211a38f3d$export$4ed88b37a51256dc(value, type, name) {
    if (!type || !name) throw new Error("type and name required");
    if (!value || value.type !== type) throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + value.type);
}
function $31e74cd211a38f3d$export$febdaeaf68aa8370(feature, type, name) {
    if (!feature) throw new Error("No feature passed");
    if (!name) throw new Error(".featureOf() requires a name");
    if (!feature || feature.type !== "Feature" || !feature.geometry) throw new Error("Invalid input to " + name + ", Feature with geometry required");
    if (!feature.geometry || feature.geometry.type !== type) throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + feature.geometry.type);
}
function $31e74cd211a38f3d$export$66d9083292e6f231(featureCollection, type, name) {
    if (!featureCollection) throw new Error("No featureCollection passed");
    if (!name) throw new Error(".collectionOf() requires a name");
    if (!featureCollection || featureCollection.type !== "FeatureCollection") throw new Error("Invalid input to " + name + ", FeatureCollection required");
    for(var _i = 0, _a = featureCollection.features; _i < _a.length; _i++){
        var feature = _a[_i];
        if (!feature || feature.type !== "Feature" || !feature.geometry) throw new Error("Invalid input to " + name + ", Feature with geometry required");
        if (!feature.geometry || feature.geometry.type !== type) throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + feature.geometry.type);
    }
}
function $31e74cd211a38f3d$export$85c1ed911ae13e35(geojson) {
    if (geojson.type === "Feature") return geojson.geometry;
    return geojson;
}
function $31e74cd211a38f3d$export$7b6695599253d7ba(geojson, _name) {
    if (geojson.type === "FeatureCollection") return "FeatureCollection";
    if (geojson.type === "GeometryCollection") return "GeometryCollection";
    if (geojson.type === "Feature" && geojson.geometry !== null) return geojson.geometry.type;
    return geojson.type;
}



//http://en.wikipedia.org/wiki/Haversine_formula
//http://www.movable-type.co.uk/scripts/latlong.html
/**
 * Calculates the distance between two {@link Point|points} in degrees, radians, miles, or kilometers.
 * This uses the [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula) to account for global curvature.
 *
 * @name distance
 * @param {Coord | Point} from origin point or coordinate
 * @param {Coord | Point} to destination point or coordinate
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units='kilometers'] can be degrees, radians, miles, or kilometers
 * @returns {number} distance between the two points
 * @example
 * var from = turf.point([-75.343, 39.984]);
 * var to = turf.point([-75.534, 39.123]);
 * var options = {units: 'miles'};
 *
 * var distance = turf.distance(from, to, options);
 *
 * //addToMap
 * var addToMap = [from, to];
 * from.properties.distance = distance;
 * to.properties.distance = distance;
 */ function $f49c16511da44782$var$distance(from, to, options) {
    if (options === void 0) options = {
    };
    var coordinates1 = $31e74cd211a38f3d$export$f838ef719c965add(from);
    var coordinates2 = $31e74cd211a38f3d$export$f838ef719c965add(to);
    var dLat = $f1c53da3377f3130$export$3df9f87a6fcd617d(coordinates2[1] - coordinates1[1]);
    var dLon = $f1c53da3377f3130$export$3df9f87a6fcd617d(coordinates2[0] - coordinates1[0]);
    var lat1 = $f1c53da3377f3130$export$3df9f87a6fcd617d(coordinates1[1]);
    var lat2 = $f1c53da3377f3130$export$3df9f87a6fcd617d(coordinates2[1]);
    var a = Math.pow(Math.sin(dLat / 2), 2) + Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
    return $f1c53da3377f3130$export$a7371587dd3e0f79(2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)), options.units);
}
var $f49c16511da44782$export$9099ad97b570f7c = $f49c16511da44782$var$distance;




var $3984f99d987a05e7$exports = {};
parcelRequire.register("jfp1c", function(module, exports) {
/**
 * DBSCAN - Density based clustering
 *
 * @author Lukasz Krawczyk <contact@lukaszkrawczyk.eu>
 * @copyright MIT
 */ /**
 * DBSCAN class construcotr
 * @constructor
 *
 * @param {Array} dataset
 * @param {number} epsilon
 * @param {number} minPts
 * @param {function} distanceFunction
 * @returns {DBSCAN}
 */ function $e032d327103da5ea$var$DBSCAN(dataset, epsilon, minPts, distanceFunction) {
    /** @type {Array} */ this.dataset = [];
    /** @type {number} */ this.epsilon = 1;
    /** @type {number} */ this.minPts = 2;
    /** @type {function} */ this.distance = this._euclideanDistance;
    /** @type {Array} */ this.clusters = [];
    /** @type {Array} */ this.noise = [];
    // temporary variables used during computation
    /** @type {Array} */ this._visited = [];
    /** @type {Array} */ this._assigned = [];
    /** @type {number} */ this._datasetLength = 0;
    this._init(dataset, epsilon, minPts, distanceFunction);
}
/******************************************************************************/ // public functions
/**
 * Start clustering
 *
 * @param {Array} dataset
 * @param {number} epsilon
 * @param {number} minPts
 * @param {function} distanceFunction
 * @returns {undefined}
 * @access public
 */ $e032d327103da5ea$var$DBSCAN.prototype.run = function(dataset, epsilon, minPts, distanceFunction) {
    this._init(dataset, epsilon, minPts, distanceFunction);
    for(var pointId = 0; pointId < this._datasetLength; pointId++)// if point is not visited, check if it forms a cluster
    if (this._visited[pointId] !== 1) {
        this._visited[pointId] = 1;
        // if closest neighborhood is too small to form a cluster, mark as noise
        var neighbors = this._regionQuery(pointId);
        if (neighbors.length < this.minPts) this.noise.push(pointId);
        else {
            // create new cluster and add point
            var clusterId = this.clusters.length;
            this.clusters.push([]);
            this._addToCluster(pointId, clusterId);
            this._expandCluster(clusterId, neighbors);
        }
    }
    return this.clusters;
};
/******************************************************************************/ // protected functions
/**
 * Set object properties
 *
 * @param {Array} dataset
 * @param {number} epsilon
 * @param {number} minPts
 * @param {function} distance
 * @returns {undefined}
 * @access protected
 */ $e032d327103da5ea$var$DBSCAN.prototype._init = function(dataset, epsilon, minPts, distance) {
    if (dataset) {
        if (!(dataset instanceof Array)) throw Error('Dataset must be of type array, ' + typeof dataset + ' given');
        this.dataset = dataset;
        this.clusters = [];
        this.noise = [];
        this._datasetLength = dataset.length;
        this._visited = new Array(this._datasetLength);
        this._assigned = new Array(this._datasetLength);
    }
    if (epsilon) this.epsilon = epsilon;
    if (minPts) this.minPts = minPts;
    if (distance) this.distance = distance;
};
/**
 * Expand cluster to closest points of given neighborhood
 *
 * @param {number} clusterId
 * @param {Array} neighbors
 * @returns {undefined}
 * @access protected
 */ $e032d327103da5ea$var$DBSCAN.prototype._expandCluster = function(clusterId, neighbors) {
    /**
   * It's very important to calculate length of neighbors array each time,
   * as the number of elements changes over time
   */ for(var i = 0; i < neighbors.length; i++){
        var pointId2 = neighbors[i];
        if (this._visited[pointId2] !== 1) {
            this._visited[pointId2] = 1;
            var neighbors2 = this._regionQuery(pointId2);
            if (neighbors2.length >= this.minPts) neighbors = this._mergeArrays(neighbors, neighbors2);
        }
        // add to cluster
        if (this._assigned[pointId2] !== 1) this._addToCluster(pointId2, clusterId);
    }
};
/**
 * Add new point to cluster
 *
 * @param {number} pointId
 * @param {number} clusterId
 */ $e032d327103da5ea$var$DBSCAN.prototype._addToCluster = function(pointId, clusterId) {
    this.clusters[clusterId].push(pointId);
    this._assigned[pointId] = 1;
};
/**
 * Find all neighbors around given point
 *
 * @param {number} pointId,
 * @param {number} epsilon
 * @returns {Array}
 * @access protected
 */ $e032d327103da5ea$var$DBSCAN.prototype._regionQuery = function(pointId) {
    var neighbors = [];
    for(var id = 0; id < this._datasetLength; id++){
        var dist = this.distance(this.dataset[pointId], this.dataset[id]);
        if (dist < this.epsilon) neighbors.push(id);
    }
    return neighbors;
};
/******************************************************************************/ // helpers
/**
 * @param {Array} a
 * @param {Array} b
 * @returns {Array}
 * @access protected
 */ $e032d327103da5ea$var$DBSCAN.prototype._mergeArrays = function(a, b) {
    var len = b.length;
    for(var i = 0; i < len; i++){
        var P = b[i];
        if (a.indexOf(P) < 0) a.push(P);
    }
    return a;
};
/**
 * Calculate euclidean distance in multidimensional space
 *
 * @param {Array} p
 * @param {Array} q
 * @returns {number}
 * @access protected
 */ $e032d327103da5ea$var$DBSCAN.prototype._euclideanDistance = function(p, q) {
    var sum = 0;
    var i = Math.min(p.length, q.length);
    while(i--)sum += (p[i] - q[i]) * (p[i] - q[i]);
    return Math.sqrt(sum);
};
if ("object" !== 'undefined' && module.exports) module.exports = $e032d327103da5ea$var$DBSCAN;

});


parcelRequire.register("leUy4", function(module, exports) {
/**
 * KMEANS clustering
 *
 * @author Lukasz Krawczyk <contact@lukaszkrawczyk.eu>
 * @copyright MIT
 */ /**
 * KMEANS class constructor
 * @constructor
 *
 * @param {Array} dataset
 * @param {number} k - number of clusters
 * @param {function} distance - distance function
 * @returns {KMEANS}
 */ function $f766c52588d566ea$var$KMEANS(dataset, k, distance) {
    this.k = 3; // number of clusters
    this.dataset = []; // set of feature vectors
    this.assignments = []; // set of associated clusters for each feature vector
    this.centroids = []; // vectors for our clusters
    this.init(dataset, k, distance);
}
/**
 * @returns {undefined}
 */ $f766c52588d566ea$var$KMEANS.prototype.init = function(dataset, k, distance) {
    this.assignments = [];
    this.centroids = [];
    if (typeof dataset !== 'undefined') this.dataset = dataset;
    if (typeof k !== 'undefined') this.k = k;
    if (typeof distance !== 'undefined') this.distance = distance;
};
/**
 * @returns {undefined}
 */ $f766c52588d566ea$var$KMEANS.prototype.run = function(dataset, k) {
    this.init(dataset, k);
    var len = this.dataset.length;
    // initialize centroids
    for(var i = 0; i < this.k; i++)this.centroids[i] = this.randomCentroid();
    var change = true;
    while(change){
        // assign feature vectors to clusters
        change = this.assign();
        // adjust location of centroids
        for(var centroidId = 0; centroidId < this.k; centroidId++){
            var mean = new Array(maxDim);
            var count = 0;
            // init mean vector
            for(var dim = 0; dim < maxDim; dim++)mean[dim] = 0;
            for(var j = 0; j < len; j++){
                var maxDim = this.dataset[j].length;
                // if current cluster id is assigned to point
                if (centroidId === this.assignments[j]) {
                    for(var dim = 0; dim < maxDim; dim++)mean[dim] += this.dataset[j][dim];
                    count++;
                }
            }
            if (count > 0) {
                // if cluster contain points, adjust centroid position
                for(var dim = 0; dim < maxDim; dim++)mean[dim] /= count;
                this.centroids[centroidId] = mean;
            } else {
                // if cluster is empty, generate new random centroid
                this.centroids[centroidId] = this.randomCentroid();
                change = true;
            }
        }
    }
    return this.getClusters();
};
/**
 * Generate random centroid
 *
 * @returns {Array}
 */ $f766c52588d566ea$var$KMEANS.prototype.randomCentroid = function() {
    var maxId = this.dataset.length - 1;
    var centroid;
    var id;
    do {
        id = Math.round(Math.random() * maxId);
        centroid = this.dataset[id];
    }while (this.centroids.indexOf(centroid) >= 0)
    return centroid;
};
/**
 * Assign points to clusters
 *
 * @returns {boolean}
 */ $f766c52588d566ea$var$KMEANS.prototype.assign = function() {
    var change = false;
    var len = this.dataset.length;
    var closestCentroid;
    for(var i = 0; i < len; i++){
        closestCentroid = this.argmin(this.dataset[i], this.centroids, this.distance);
        if (closestCentroid != this.assignments[i]) {
            this.assignments[i] = closestCentroid;
            change = true;
        }
    }
    return change;
};
/**
 * Extract information about clusters
 *
 * @returns {undefined}
 */ $f766c52588d566ea$var$KMEANS.prototype.getClusters = function() {
    var clusters = new Array(this.k);
    var centroidId;
    for(var pointId = 0; pointId < this.assignments.length; pointId++){
        centroidId = this.assignments[pointId];
        // init empty cluster
        if (typeof clusters[centroidId] === 'undefined') clusters[centroidId] = [];
        clusters[centroidId].push(pointId);
    }
    return clusters;
};
// utils
/**
 * @params {Array} point
 * @params {Array.<Array>} set
 * @params {Function} f
 * @returns {number}
 */ $f766c52588d566ea$var$KMEANS.prototype.argmin = function(point, set, f) {
    var min = Number.MAX_VALUE;
    var arg = 0;
    var len = set.length;
    var d;
    for(var i = 0; i < len; i++){
        d = f(point, set[i]);
        if (d < min) {
            min = d;
            arg = i;
        }
    }
    return arg;
};
/**
 * Euclidean distance
 *
 * @params {number} p
 * @params {number} q
 * @returns {number}
 */ $f766c52588d566ea$var$KMEANS.prototype.distance = function(p, q) {
    var sum = 0;
    var i = Math.min(p.length, q.length);
    while(i--){
        var diff = p[i] - q[i];
        sum += diff * diff;
    }
    return Math.sqrt(sum);
};
if ("object" !== 'undefined' && module.exports) module.exports = $f766c52588d566ea$var$KMEANS;

});


parcelRequire.register("27le5", function(module, exports) {

/**
 * @requires ./PriorityQueue.js
 */ if ("object" !== 'undefined' && module.exports) var $18acb34d1e5847ae$var$PriorityQueue = (parcelRequire("lxrz4"));
/**
 * OPTICS - Ordering points to identify the clustering structure
 *
 * @author Lukasz Krawczyk <contact@lukaszkrawczyk.eu>
 * @copyright MIT
 */ /**
 * OPTICS class constructor
 * @constructor
 *
 * @param {Array} dataset
 * @param {number} epsilon
 * @param {number} minPts
 * @param {function} distanceFunction
 * @returns {OPTICS}
 */ function $18acb34d1e5847ae$var$OPTICS(dataset, epsilon, minPts, distanceFunction) {
    /** @type {number} */ this.epsilon = 1;
    /** @type {number} */ this.minPts = 1;
    /** @type {function} */ this.distance = this._euclideanDistance;
    // temporary variables used during computation
    /** @type {Array} */ this._reachability = [];
    /** @type {Array} */ this._processed = [];
    /** @type {number} */ this._coreDistance = 0;
    /** @type {Array} */ this._orderedList = [];
    this._init(dataset, epsilon, minPts, distanceFunction);
}
/******************************************************************************/ // pulic functions
/**
 * Start clustering
 *
 * @param {Array} dataset
 * @returns {undefined}
 * @access public
 */ $18acb34d1e5847ae$var$OPTICS.prototype.run = function(dataset, epsilon, minPts, distanceFunction) {
    this._init(dataset, epsilon, minPts, distanceFunction);
    for(var pointId = 0, l = this.dataset.length; pointId < l; pointId++)if (this._processed[pointId] !== 1) {
        this._processed[pointId] = 1;
        this.clusters.push([
            pointId
        ]);
        var clusterId = this.clusters.length - 1;
        this._orderedList.push(pointId);
        var priorityQueue = new $18acb34d1e5847ae$var$PriorityQueue(null, null, 'asc');
        var neighbors = this._regionQuery(pointId);
        // using priority queue assign elements to new cluster
        if (this._distanceToCore(pointId) !== undefined) {
            this._updateQueue(pointId, neighbors, priorityQueue);
            this._expandCluster(clusterId, priorityQueue);
        }
    }
    return this.clusters;
};
/**
 * Generate reachability plot for all points
 *
 * @returns {array}
 * @access public
 */ $18acb34d1e5847ae$var$OPTICS.prototype.getReachabilityPlot = function() {
    var reachabilityPlot = [];
    for(var i = 0, l = this._orderedList.length; i < l; i++){
        var pointId = this._orderedList[i];
        var distance = this._reachability[pointId];
        reachabilityPlot.push([
            pointId,
            distance
        ]);
    }
    return reachabilityPlot;
};
/******************************************************************************/ // protected functions
/**
 * Set object properties
 *
 * @param {Array} dataset
 * @param {number} epsilon
 * @param {number} minPts
 * @param {function} distance
 * @returns {undefined}
 * @access protected
 */ $18acb34d1e5847ae$var$OPTICS.prototype._init = function(dataset, epsilon, minPts, distance) {
    if (dataset) {
        if (!(dataset instanceof Array)) throw Error('Dataset must be of type array, ' + typeof dataset + ' given');
        this.dataset = dataset;
        this.clusters = [];
        this._reachability = new Array(this.dataset.length);
        this._processed = new Array(this.dataset.length);
        this._coreDistance = 0;
        this._orderedList = [];
    }
    if (epsilon) this.epsilon = epsilon;
    if (minPts) this.minPts = minPts;
    if (distance) this.distance = distance;
};
/**
 * Update information in queue
 *
 * @param {number} pointId
 * @param {Array} neighbors
 * @param {PriorityQueue} queue
 * @returns {undefined}
 * @access protected
 */ $18acb34d1e5847ae$var$OPTICS.prototype._updateQueue = function(pointId, neighbors, queue) {
    var self = this;
    this._coreDistance = this._distanceToCore(pointId);
    neighbors.forEach(function(pointId2) {
        if (self._processed[pointId2] === undefined) {
            var dist = self.distance(self.dataset[pointId], self.dataset[pointId2]);
            var newReachableDistance = Math.max(self._coreDistance, dist);
            if (self._reachability[pointId2] === undefined) {
                self._reachability[pointId2] = newReachableDistance;
                queue.insert(pointId2, newReachableDistance);
            } else if (newReachableDistance < self._reachability[pointId2]) {
                self._reachability[pointId2] = newReachableDistance;
                queue.remove(pointId2);
                queue.insert(pointId2, newReachableDistance);
            }
        }
    });
};
/**
 * Expand cluster
 *
 * @param {number} clusterId
 * @param {PriorityQueue} queue
 * @returns {undefined}
 * @access protected
 */ $18acb34d1e5847ae$var$OPTICS.prototype._expandCluster = function(clusterId, queue) {
    var queueElements = queue.getElements();
    for(var p = 0, l = queueElements.length; p < l; p++){
        var pointId = queueElements[p];
        if (this._processed[pointId] === undefined) {
            var neighbors = this._regionQuery(pointId);
            this._processed[pointId] = 1;
            this.clusters[clusterId].push(pointId);
            this._orderedList.push(pointId);
            if (this._distanceToCore(pointId) !== undefined) {
                this._updateQueue(pointId, neighbors, queue);
                this._expandCluster(clusterId, queue);
            }
        }
    }
};
/**
 * Calculating distance to cluster core
 *
 * @param {number} pointId
 * @returns {number}
 * @access protected
 */ $18acb34d1e5847ae$var$OPTICS.prototype._distanceToCore = function(pointId) {
    var l = this.epsilon;
    for(var coreDistCand = 0; coreDistCand < l; coreDistCand++){
        var neighbors = this._regionQuery(pointId, coreDistCand);
        if (neighbors.length >= this.minPts) return coreDistCand;
    }
    return;
};
/**
 * Find all neighbors around given point
 *
 * @param {number} pointId
 * @param {number} epsilon
 * @returns {Array}
 * @access protected
 */ $18acb34d1e5847ae$var$OPTICS.prototype._regionQuery = function(pointId, epsilon) {
    epsilon = epsilon || this.epsilon;
    var neighbors = [];
    for(var id = 0, l = this.dataset.length; id < l; id++)if (this.distance(this.dataset[pointId], this.dataset[id]) < epsilon) neighbors.push(id);
    return neighbors;
};
/******************************************************************************/ // helpers
/**
 * Calculate euclidean distance in multidimensional space
 *
 * @param {Array} p
 * @param {Array} q
 * @returns {number}
 * @access protected
 */ $18acb34d1e5847ae$var$OPTICS.prototype._euclideanDistance = function(p, q) {
    var sum = 0;
    var i = Math.min(p.length, q.length);
    while(i--)sum += (p[i] - q[i]) * (p[i] - q[i]);
    return Math.sqrt(sum);
};
if ("object" !== 'undefined' && module.exports) module.exports = $18acb34d1e5847ae$var$OPTICS;

});
parcelRequire.register("lxrz4", function(module, exports) {
/**
 * PriorityQueue
 * Elements in this queue are sorted according to their value
 *
 * @author Lukasz Krawczyk <contact@lukaszkrawczyk.eu>
 * @copyright MIT
 */ /**
 * PriorityQueue class construcotr
 * @constructor
 *
 * @example
 * queue: [1,2,3,4]
 * priorities: [4,1,2,3]
 * > result = [1,4,2,3]
 *
 * @param {Array} elements
 * @param {Array} priorities
 * @param {string} sorting - asc / desc
 * @returns {PriorityQueue}
 */ function $fae20fd123411556$var$PriorityQueue(elements, priorities, sorting) {
    /** @type {Array} */ this._queue = [];
    /** @type {Array} */ this._priorities = [];
    /** @type {string} */ this._sorting = 'desc';
    this._init(elements, priorities, sorting);
}
/**
 * Insert element
 *
 * @param {Object} ele
 * @param {Object} priority
 * @returns {undefined}
 * @access public
 */ $fae20fd123411556$var$PriorityQueue.prototype.insert = function(ele, priority) {
    var indexToInsert = this._queue.length;
    var index = indexToInsert;
    while(index--){
        var priority2 = this._priorities[index];
        if (this._sorting === 'desc') {
            if (priority > priority2) indexToInsert = index;
        } else if (priority < priority2) indexToInsert = index;
    }
    this._insertAt(ele, priority, indexToInsert);
};
/**
 * Remove element
 *
 * @param {Object} ele
 * @returns {undefined}
 * @access public
 */ $fae20fd123411556$var$PriorityQueue.prototype.remove = function(ele) {
    var index = this._queue.length;
    while(index--){
        var ele2 = this._queue[index];
        if (ele === ele2) {
            this._queue.splice(index, 1);
            this._priorities.splice(index, 1);
            break;
        }
    }
};
/**
 * For each loop wrapper
 *
 * @param {function} func
 * @returs {undefined}
 * @access public
 */ $fae20fd123411556$var$PriorityQueue.prototype.forEach = function(func) {
    this._queue.forEach(func);
};
/**
 * @returns {Array}
 * @access public
 */ $fae20fd123411556$var$PriorityQueue.prototype.getElements = function() {
    return this._queue;
};
/**
 * @param {number} index
 * @returns {Object}
 * @access public
 */ $fae20fd123411556$var$PriorityQueue.prototype.getElementPriority = function(index) {
    return this._priorities[index];
};
/**
 * @returns {Array}
 * @access public
 */ $fae20fd123411556$var$PriorityQueue.prototype.getPriorities = function() {
    return this._priorities;
};
/**
 * @returns {Array}
 * @access public
 */ $fae20fd123411556$var$PriorityQueue.prototype.getElementsWithPriorities = function() {
    var result = [];
    for(var i = 0, l = this._queue.length; i < l; i++)result.push([
        this._queue[i],
        this._priorities[i]
    ]);
    return result;
};
/**
 * Set object properties
 *
 * @param {Array} elements
 * @param {Array} priorities
 * @returns {undefined}
 * @access protected
 */ $fae20fd123411556$var$PriorityQueue.prototype._init = function(elements, priorities, sorting) {
    if (elements && priorities) {
        this._queue = [];
        this._priorities = [];
        if (elements.length !== priorities.length) throw new Error('Arrays must have the same length');
        for(var i = 0; i < elements.length; i++)this.insert(elements[i], priorities[i]);
    }
    if (sorting) this._sorting = sorting;
};
/**
 * Insert element at given position
 *
 * @param {Object} ele
 * @param {number} index
 * @returns {undefined}
 * @access protected
 */ $fae20fd123411556$var$PriorityQueue.prototype._insertAt = function(ele, priority, index) {
    if (this._queue.length === index) {
        this._queue.push(ele);
        this._priorities.push(priority);
    } else {
        this._queue.splice(index, 0, ele);
        this._priorities.splice(index, 0, priority);
    }
};
if ("object" !== 'undefined' && module.exports) module.exports = $fae20fd123411556$var$PriorityQueue;

});




if ("object" !== 'undefined' && $3984f99d987a05e7$exports) $3984f99d987a05e7$exports = {
    DBSCAN: (parcelRequire("jfp1c")),
    KMEANS: (parcelRequire("leUy4")),
    OPTICS: (parcelRequire("27le5")),
    PriorityQueue: (parcelRequire("lxrz4"))
};


/**
 * Takes a set of {@link Point|points} and partition them into clusters according to {@link DBSCAN's|https://en.wikipedia.org/wiki/DBSCAN} data clustering algorithm.
 *
 * @name clustersDbscan
 * @param {FeatureCollection<Point>} points to be clustered
 * @param {number} maxDistance Maximum Distance between any point of the cluster to generate the clusters (kilometers only)
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units="kilometers"] in which `maxDistance` is expressed, can be degrees, radians, miles, or kilometers
 * @param {boolean} [options.mutate=false] Allows GeoJSON input to be mutated
 * @param {number} [options.minPoints=3] Minimum number of points to generate a single cluster,
 * points which do not meet this requirement will be classified as an 'edge' or 'noise'.
 * @returns {FeatureCollection<Point>} Clustered Points with an additional two properties associated to each Feature:
 * - {number} cluster - the associated clusterId
 * - {string} dbscan - type of point it has been classified as ('core'|'edge'|'noise')
 * @example
 * // create random points with random z-values in their properties
 * var points = turf.randomPoint(100, {bbox: [0, 30, 20, 50]});
 * var maxDistance = 100;
 * var clustered = turf.clustersDbscan(points, maxDistance);
 *
 * //addToMap
 * var addToMap = [clustered];
 */ function $5d992c419bc57c89$var$clustersDbscan(points, maxDistance, options) {
    // Input validation being handled by Typescript
    // collectionOf(points, 'Point', 'points must consist of a FeatureCollection of only Points');
    // if (maxDistance === null || maxDistance === undefined) throw new Error('maxDistance is required');
    // if (!(Math.sign(maxDistance) > 0)) throw new Error('maxDistance is invalid');
    // if (!(minPoints === undefined || minPoints === null || Math.sign(minPoints) > 0)) throw new Error('options.minPoints is invalid');
    if (options === void 0) options = {
    };
    // Clone points to prevent any mutations
    if (options.mutate !== true) points = $de1dbe698a1ef99a$export$9099ad97b570f7c(points);
    // Defaults
    options.minPoints = options.minPoints || 3;
    // create clustered ids
    var dbscan = new (/*@__PURE__*/$parcel$interopDefault($3984f99d987a05e7$exports)).DBSCAN();
    var clusteredIds = dbscan.run($555ced313e66658a$export$5a9cfbedf736c6fa(points), $f1c53da3377f3130$export$89c2cc3b6c94cff3(maxDistance, options.units), options.minPoints, $f49c16511da44782$export$9099ad97b570f7c);
    // Tag points to Clusters ID
    var clusterId = -1;
    clusteredIds.forEach(function(clusterIds) {
        clusterId++;
        // assign cluster ids to input points
        clusterIds.forEach(function(idx) {
            var clusterPoint = points.features[idx];
            if (!clusterPoint.properties) clusterPoint.properties = {
            };
            clusterPoint.properties.cluster = clusterId;
            clusterPoint.properties.dbscan = "core";
        });
    });
    // handle noise points, if any
    // edges points are tagged by DBSCAN as both 'noise' and 'cluster' as they can "reach" less than 'minPoints' number of points
    dbscan.noise.forEach(function(noiseId) {
        var noisePoint = points.features[noiseId];
        if (!noisePoint.properties) noisePoint.properties = {
        };
        if (noisePoint.properties.cluster) noisePoint.properties.dbscan = "edge";
        else noisePoint.properties.dbscan = "noise";
    });
    return points;
}
var $5d992c419bc57c89$export$9099ad97b570f7c = $5d992c419bc57c89$var$clustersDbscan;


function $f420cfbc1c627151$export$9099ad97b570f7c(ids, coords, nodeSize, left, right, depth) {
    if (right - left <= nodeSize) return;
    const m = left + right >> 1;
    $f420cfbc1c627151$var$select(ids, coords, m, left, right, depth % 2);
    $f420cfbc1c627151$export$9099ad97b570f7c(ids, coords, nodeSize, left, m - 1, depth + 1);
    $f420cfbc1c627151$export$9099ad97b570f7c(ids, coords, nodeSize, m + 1, right, depth + 1);
}
function $f420cfbc1c627151$var$select(ids, coords, k, left, right, inc) {
    while(right > left){
        if (right - left > 600) {
            const n = right - left + 1;
            const m = k - left + 1;
            const z = Math.log(n);
            const s = 0.5 * Math.exp(2 * z / 3);
            const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            $f420cfbc1c627151$var$select(ids, coords, k, newLeft, newRight, inc);
        }
        const t = coords[2 * k + inc];
        let i = left;
        let j = right;
        $f420cfbc1c627151$var$swapItem(ids, coords, left, k);
        if (coords[2 * right + inc] > t) $f420cfbc1c627151$var$swapItem(ids, coords, left, right);
        while(i < j){
            $f420cfbc1c627151$var$swapItem(ids, coords, i, j);
            i++;
            j--;
            while(coords[2 * i + inc] < t)i++;
            while(coords[2 * j + inc] > t)j--;
        }
        if (coords[2 * left + inc] === t) $f420cfbc1c627151$var$swapItem(ids, coords, left, j);
        else {
            j++;
            $f420cfbc1c627151$var$swapItem(ids, coords, j, right);
        }
        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}
function $f420cfbc1c627151$var$swapItem(ids, coords, i, j) {
    $f420cfbc1c627151$var$swap(ids, i, j);
    $f420cfbc1c627151$var$swap(coords, 2 * i, 2 * j);
    $f420cfbc1c627151$var$swap(coords, 2 * i + 1, 2 * j + 1);
}
function $f420cfbc1c627151$var$swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


function $b68e3096992e5950$export$9099ad97b570f7c(ids, coords, minX, minY, maxX, maxY, nodeSize) {
    const stack = [
        0,
        ids.length - 1,
        0
    ];
    const result = [];
    let x, y;
    while(stack.length){
        const axis = stack.pop();
        const right = stack.pop();
        const left = stack.pop();
        if (right - left <= nodeSize) {
            for(let i = left; i <= right; i++){
                x = coords[2 * i];
                y = coords[2 * i + 1];
                if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[i]);
            }
            continue;
        }
        const m = Math.floor((left + right) / 2);
        x = coords[2 * m];
        y = coords[2 * m + 1];
        if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[m]);
        const nextAxis = (axis + 1) % 2;
        if (axis === 0 ? minX <= x : minY <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? maxX >= x : maxY >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }
    return result;
}


function $23571878b1f57164$export$9099ad97b570f7c(ids, coords, qx, qy, r, nodeSize) {
    const stack = [
        0,
        ids.length - 1,
        0
    ];
    const result = [];
    const r2 = r * r;
    while(stack.length){
        const axis = stack.pop();
        const right = stack.pop();
        const left = stack.pop();
        if (right - left <= nodeSize) {
            for(let i = left; i <= right; i++)if ($23571878b1f57164$var$sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) result.push(ids[i]);
            continue;
        }
        const m = Math.floor((left + right) / 2);
        const x = coords[2 * m];
        const y = coords[2 * m + 1];
        if ($23571878b1f57164$var$sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);
        const nextAxis = (axis + 1) % 2;
        if (axis === 0 ? qx - r <= x : qy - r <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? qx + r >= x : qy + r >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }
    return result;
}
function $23571878b1f57164$var$sqDist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
}


const $0c110fb774b514cc$var$defaultGetX = (p)=>p[0]
;
const $0c110fb774b514cc$var$defaultGetY = (p)=>p[1]
;
class $0c110fb774b514cc$export$9099ad97b570f7c {
    constructor(points, getX = $0c110fb774b514cc$var$defaultGetX, getY = $0c110fb774b514cc$var$defaultGetY, nodeSize = 64, ArrayType = Float64Array){
        this.nodeSize = nodeSize;
        this.points = points;
        const IndexArrayType = points.length < 65536 ? Uint16Array : Uint32Array;
        const ids = this.ids = new IndexArrayType(points.length);
        const coords = this.coords = new ArrayType(points.length * 2);
        for(let i = 0; i < points.length; i++){
            ids[i] = i;
            coords[2 * i] = getX(points[i]);
            coords[2 * i + 1] = getY(points[i]);
        }
        $f420cfbc1c627151$export$9099ad97b570f7c(ids, coords, nodeSize, 0, ids.length - 1, 0);
    }
    range(minX, minY, maxX, maxY) {
        return $b68e3096992e5950$export$9099ad97b570f7c(this.ids, this.coords, minX, minY, maxX, maxY, this.nodeSize);
    }
    within(x, y, r) {
        return $23571878b1f57164$export$9099ad97b570f7c(this.ids, this.coords, x, y, r, this.nodeSize);
    }
}


const $260425be1d20237d$var$defaultOptions = {
    minZoom: 0,
    maxZoom: 16,
    minPoints: 2,
    radius: 40,
    extent: 512,
    nodeSize: 64,
    log: false,
    // whether to generate numeric ids for input features (in vector tiles)
    generateId: false,
    // a reduce function for calculating custom cluster properties
    reduce: null,
    // properties to use for individual points when running the reducer
    map: (props)=>props // props => ({sum: props.my_value})
};
const $260425be1d20237d$var$fround = Math.fround || ((tmp)=>(x)=>{
        tmp[0] = +x;
        return tmp[0];
    }
)(new Float32Array(1));
class $260425be1d20237d$export$9099ad97b570f7c {
    constructor(options){
        this.options = $260425be1d20237d$var$extend(Object.create($260425be1d20237d$var$defaultOptions), options);
        this.trees = new Array(this.options.maxZoom + 1);
    }
    load(points) {
        const { log: log , minZoom: minZoom , maxZoom: maxZoom , nodeSize: nodeSize  } = this.options;
        if (log) console.time('total time');
        const timerId = `prepare ${points.length} points`;
        if (log) console.time(timerId);
        this.points = points;
        // generate a cluster object for each point and index input points into a KD-tree
        let clusters = [];
        for(let i = 0; i < points.length; i++){
            if (!points[i].geometry) continue;
            clusters.push($260425be1d20237d$var$createPointCluster(points[i], i));
        }
        this.trees[maxZoom + 1] = new $0c110fb774b514cc$export$9099ad97b570f7c(clusters, $260425be1d20237d$var$getX, $260425be1d20237d$var$getY, nodeSize, Float32Array);
        if (log) console.timeEnd(timerId);
        // cluster points on max zoom, then cluster the results on previous zoom, etc.;
        // results in a cluster hierarchy across zoom levels
        for(let z = maxZoom; z >= minZoom; z--){
            const now = +Date.now();
            // create a new set of clusters for the zoom and index them with a KD-tree
            clusters = this._cluster(clusters, z);
            this.trees[z] = new $0c110fb774b514cc$export$9099ad97b570f7c(clusters, $260425be1d20237d$var$getX, $260425be1d20237d$var$getY, nodeSize, Float32Array);
            if (log) console.log('z%d: %d clusters in %dms', z, clusters.length, +Date.now() - now);
        }
        if (log) console.timeEnd('total time');
        return this;
    }
    getClusters(bbox, zoom) {
        let minLng = ((bbox[0] + 180) % 360 + 360) % 360 - 180;
        const minLat = Math.max(-90, Math.min(90, bbox[1]));
        let maxLng = bbox[2] === 180 ? 180 : ((bbox[2] + 180) % 360 + 360) % 360 - 180;
        const maxLat = Math.max(-90, Math.min(90, bbox[3]));
        if (bbox[2] - bbox[0] >= 360) {
            minLng = -180;
            maxLng = 180;
        } else if (minLng > maxLng) {
            const easternHem = this.getClusters([
                minLng,
                minLat,
                180,
                maxLat
            ], zoom);
            const westernHem = this.getClusters([
                -180,
                minLat,
                maxLng,
                maxLat
            ], zoom);
            return easternHem.concat(westernHem);
        }
        const tree = this.trees[this._limitZoom(zoom)];
        const ids = tree.range($260425be1d20237d$var$lngX(minLng), $260425be1d20237d$var$latY(maxLat), $260425be1d20237d$var$lngX(maxLng), $260425be1d20237d$var$latY(minLat));
        const clusters = [];
        for (const id of ids){
            const c = tree.points[id];
            clusters.push(c.numPoints ? $260425be1d20237d$var$getClusterJSON(c) : this.points[c.index]);
        }
        return clusters;
    }
    getChildren(clusterId) {
        const originId = this._getOriginId(clusterId);
        const originZoom = this._getOriginZoom(clusterId);
        const errorMsg = 'No cluster with the specified id.';
        const index = this.trees[originZoom];
        if (!index) throw new Error(errorMsg);
        const origin = index.points[originId];
        if (!origin) throw new Error(errorMsg);
        const r = this.options.radius / (this.options.extent * Math.pow(2, originZoom - 1));
        const ids = index.within(origin.x, origin.y, r);
        const children = [];
        for (const id of ids){
            const c = index.points[id];
            if (c.parentId === clusterId) children.push(c.numPoints ? $260425be1d20237d$var$getClusterJSON(c) : this.points[c.index]);
        }
        if (children.length === 0) throw new Error(errorMsg);
        return children;
    }
    getLeaves(clusterId, limit, offset) {
        limit = limit || 10;
        offset = offset || 0;
        const leaves = [];
        this._appendLeaves(leaves, clusterId, limit, offset, 0);
        return leaves;
    }
    getTile(z, x, y) {
        const tree = this.trees[this._limitZoom(z)];
        const z2 = Math.pow(2, z);
        const { extent: extent , radius: radius  } = this.options;
        const p = radius / extent;
        const top = (y - p) / z2;
        const bottom = (y + 1 + p) / z2;
        const tile = {
            features: []
        };
        this._addTileFeatures(tree.range((x - p) / z2, top, (x + 1 + p) / z2, bottom), tree.points, x, y, z2, tile);
        if (x === 0) this._addTileFeatures(tree.range(1 - p / z2, top, 1, bottom), tree.points, z2, y, z2, tile);
        if (x === z2 - 1) this._addTileFeatures(tree.range(0, top, p / z2, bottom), tree.points, -1, y, z2, tile);
        return tile.features.length ? tile : null;
    }
    getClusterExpansionZoom(clusterId) {
        let expansionZoom = this._getOriginZoom(clusterId) - 1;
        while(expansionZoom <= this.options.maxZoom){
            const children = this.getChildren(clusterId);
            expansionZoom++;
            if (children.length !== 1) break;
            clusterId = children[0].properties.cluster_id;
        }
        return expansionZoom;
    }
    _appendLeaves(result, clusterId, limit, offset, skipped) {
        const children = this.getChildren(clusterId);
        for (const child of children){
            const props = child.properties;
            if (props && props.cluster) {
                if (skipped + props.point_count <= offset) // skip the whole cluster
                skipped += props.point_count;
                else // enter the cluster
                skipped = this._appendLeaves(result, props.cluster_id, limit, offset, skipped);
            } else if (skipped < offset) // skip a single point
            skipped++;
            else // add a single point
            result.push(child);
            if (result.length === limit) break;
        }
        return skipped;
    }
    _addTileFeatures(ids, points, x, y, z2, tile) {
        for (const i of ids){
            const c = points[i];
            const isCluster = c.numPoints;
            let tags, px, py;
            if (isCluster) {
                tags = $260425be1d20237d$var$getClusterProperties(c);
                px = c.x;
                py = c.y;
            } else {
                const p = this.points[c.index];
                tags = p.properties;
                px = $260425be1d20237d$var$lngX(p.geometry.coordinates[0]);
                py = $260425be1d20237d$var$latY(p.geometry.coordinates[1]);
            }
            const f = {
                type: 1,
                geometry: [
                    [
                        Math.round(this.options.extent * (px * z2 - x)),
                        Math.round(this.options.extent * (py * z2 - y))
                    ]
                ],
                tags: tags
            };
            // assign id
            let id;
            if (isCluster) id = c.id;
            else if (this.options.generateId) // optionally generate id
            id = c.index;
            else if (this.points[c.index].id) // keep id if already assigned
            id = this.points[c.index].id;
            if (id !== undefined) f.id = id;
            tile.features.push(f);
        }
    }
    _limitZoom(z) {
        return Math.max(this.options.minZoom, Math.min(+z, this.options.maxZoom + 1));
    }
    _cluster(points, zoom) {
        const clusters = [];
        const { radius: radius , extent: extent , reduce: reduce , minPoints: minPoints  } = this.options;
        const r = radius / (extent * Math.pow(2, zoom));
        // loop through each point
        for(let i = 0; i < points.length; i++){
            const p = points[i];
            // if we've already visited the point at this zoom level, skip it
            if (p.zoom <= zoom) continue;
            p.zoom = zoom;
            // find all nearby points
            const tree = this.trees[zoom + 1];
            const neighborIds = tree.within(p.x, p.y, r);
            const numPointsOrigin = p.numPoints || 1;
            let numPoints = numPointsOrigin;
            // count the number of points in a potential cluster
            for (const neighborId of neighborIds){
                const b = tree.points[neighborId];
                // filter out neighbors that are already processed
                if (b.zoom > zoom) numPoints += b.numPoints || 1;
            }
            // if there were neighbors to merge, and there are enough points to form a cluster
            if (numPoints > numPointsOrigin && numPoints >= minPoints) {
                let wx = p.x * numPointsOrigin;
                let wy = p.y * numPointsOrigin;
                let clusterProperties = reduce && numPointsOrigin > 1 ? this._map(p, true) : null;
                // encode both zoom and point index on which the cluster originated -- offset by total length of features
                const id = (i << 5) + (zoom + 1) + this.points.length;
                for (const neighborId1 of neighborIds){
                    const b = tree.points[neighborId1];
                    if (b.zoom <= zoom) continue;
                    b.zoom = zoom; // save the zoom (so it doesn't get processed twice)
                    const numPoints2 = b.numPoints || 1;
                    wx += b.x * numPoints2; // accumulate coordinates for calculating weighted center
                    wy += b.y * numPoints2;
                    b.parentId = id;
                    if (reduce) {
                        if (!clusterProperties) clusterProperties = this._map(p, true);
                        reduce(clusterProperties, this._map(b));
                    }
                }
                p.parentId = id;
                clusters.push($260425be1d20237d$var$createCluster(wx / numPoints, wy / numPoints, id, numPoints, clusterProperties));
            } else {
                clusters.push(p);
                if (numPoints > 1) for (const neighborId1 of neighborIds){
                    const b = tree.points[neighborId1];
                    if (b.zoom <= zoom) continue;
                    b.zoom = zoom;
                    clusters.push(b);
                }
            }
        }
        return clusters;
    }
    // get index of the point from which the cluster originated
    _getOriginId(clusterId) {
        return clusterId - this.points.length >> 5;
    }
    // get zoom of the point from which the cluster originated
    _getOriginZoom(clusterId) {
        return (clusterId - this.points.length) % 32;
    }
    _map(point, clone) {
        if (point.numPoints) return clone ? $260425be1d20237d$var$extend({
        }, point.properties) : point.properties;
        const original = this.points[point.index].properties;
        const result = this.options.map(original);
        return clone && result === original ? $260425be1d20237d$var$extend({
        }, result) : result;
    }
}
function $260425be1d20237d$var$createCluster(x, y, id, numPoints, properties) {
    return {
        x: $260425be1d20237d$var$fround(x),
        y: $260425be1d20237d$var$fround(y),
        zoom: Infinity,
        id: id,
        parentId: -1,
        numPoints: numPoints,
        properties: properties
    };
}
function $260425be1d20237d$var$createPointCluster(p, id) {
    const [x, y] = p.geometry.coordinates;
    return {
        x: $260425be1d20237d$var$fround($260425be1d20237d$var$lngX(x)),
        y: $260425be1d20237d$var$fround($260425be1d20237d$var$latY(y)),
        zoom: Infinity,
        index: id,
        parentId: -1 // parent cluster id
    };
}
function $260425be1d20237d$var$getClusterJSON(cluster) {
    return {
        type: 'Feature',
        id: cluster.id,
        properties: $260425be1d20237d$var$getClusterProperties(cluster),
        geometry: {
            type: 'Point',
            coordinates: [
                $260425be1d20237d$var$xLng(cluster.x),
                $260425be1d20237d$var$yLat(cluster.y)
            ]
        }
    };
}
function $260425be1d20237d$var$getClusterProperties(cluster) {
    const count = cluster.numPoints;
    const abbrev = count >= 10000 ? `${Math.round(count / 1000)}k` : count >= 1000 ? `${Math.round(count / 100) / 10}k` : count;
    return $260425be1d20237d$var$extend($260425be1d20237d$var$extend({
    }, cluster.properties), {
        cluster: true,
        cluster_id: cluster.id,
        point_count: count,
        point_count_abbreviated: abbrev
    });
}
// longitude/latitude to spherical mercator in [0..1] range
function $260425be1d20237d$var$lngX(lng) {
    return lng / 360 + 0.5;
}
function $260425be1d20237d$var$latY(lat) {
    const sin = Math.sin(lat * Math.PI / 180);
    const y = 0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI;
    return y < 0 ? 0 : y > 1 ? 1 : y;
}
// spherical mercator to longitude/latitude
function $260425be1d20237d$var$xLng(x) {
    return (x - 0.5) * 360;
}
function $260425be1d20237d$var$yLat(y) {
    const y2 = (180 - y * 360) * Math.PI / 180;
    return 360 * Math.atan(Math.exp(y2)) / Math.PI - 90;
}
function $260425be1d20237d$var$extend(dest, src) {
    for(const id in src)dest[id] = src[id];
    return dest;
}
function $260425be1d20237d$var$getX(p) {
    return p.x;
}
function $260425be1d20237d$var$getY(p) {
    return p.y;
}


var $75317cff1a6fcfba$exports = {};
'use strict';
// do not edit .js files directly - edit src/index.jst
var $75317cff1a6fcfba$var$envHasBigInt64Array = typeof BigInt64Array !== 'undefined';
$75317cff1a6fcfba$exports = function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; (i--) !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        if (a instanceof Map && b instanceof Map) {
            if (a.size !== b.size) return false;
            for (i of a.entries())if (!b.has(i[0])) return false;
            for (i of a.entries())if (!equal(i[1], b.get(i[0]))) return false;
            return true;
        }
        if (a instanceof Set && b instanceof Set) {
            if (a.size !== b.size) return false;
            for (i of a.entries())if (!b.has(i[0])) return false;
            return true;
        }
        if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; (i--) !== 0;)if (a[i] !== b[i]) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; (i--) !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = length; (i--) !== 0;){
            var key = keys[i];
            if (!equal(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    return a !== a && b !== b;
};


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function $3e67a706eb58e4f4$var$__rest(s, e) {
    var t = {
    };
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    return t;
}
/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $3e67a706eb58e4f4$export$4b200d2f979b5b40 {
    constructor({ markers: markers1 , position: position1  }){
        this.markers = markers1;
        if (position1) {
            if (position1 instanceof google.maps.LatLng) this._position = position1;
            else this._position = new google.maps.LatLng(position1);
        }
    }
    get bounds() {
        if (this.markers.length === 0 && !this._position) return undefined;
        return this.markers.reduce((bounds, marker)=>{
            return bounds.extend(marker.getPosition());
        }, new google.maps.LatLngBounds(this._position, this._position));
    }
    get position() {
        return this._position || this.bounds.getCenter();
    }
    /**
     * Get the count of **visible** markers.
     */ get count() {
        return this.markers.filter((m)=>m.getVisible()
        ).length;
    }
    /**
     * Add a marker to the cluster.
     */ push(marker) {
        this.markers.push(marker);
    }
    /**
     * Cleanup references and remove marker from map.
     */ delete() {
        if (this.marker) {
            this.marker.setMap(null);
            delete this.marker;
        }
        this.markers.length = 0;
    }
}
/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $3e67a706eb58e4f4$export$9b4c6f0182d220fc = (map, mapCanvasProjection, markers1, viewportPadding)=>{
    const extendedMapBounds = $3e67a706eb58e4f4$export$34b9e5c7ac7df7bb(map.getBounds(), mapCanvasProjection, viewportPadding);
    return markers1.filter((marker)=>extendedMapBounds.contains(marker.getPosition())
    );
};
/**
 * Extends a bounds by a number of pixels in each direction.
 */ const $3e67a706eb58e4f4$export$34b9e5c7ac7df7bb = (bounds, projection, pixels)=>{
    const { northEast: northEast , southWest: southWest  } = $3e67a706eb58e4f4$var$latLngBoundsToPixelBounds(bounds, projection);
    const extendedPixelBounds = $3e67a706eb58e4f4$export$13fae14bb855bb55({
        northEast: northEast,
        southWest: southWest
    }, pixels);
    return $3e67a706eb58e4f4$export$933460cf3ebd15f3(extendedPixelBounds, projection);
};
/**
 * @hidden
 */ const $3e67a706eb58e4f4$export$780307dfca60319a = (p1, p2)=>{
    const R = 6371; // Radius of the Earth in km
    const dLat = (p2.lat - p1.lat) * Math.PI / 180;
    const dLon = (p2.lng - p1.lng) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(p1.lat * Math.PI / 180) * Math.cos(p2.lat * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};
/**
 * @hidden
 */ const $3e67a706eb58e4f4$var$latLngBoundsToPixelBounds = (bounds, projection)=>{
    return {
        northEast: projection.fromLatLngToDivPixel(bounds.getNorthEast()),
        southWest: projection.fromLatLngToDivPixel(bounds.getSouthWest())
    };
};
/**
 * @hidden
 */ const $3e67a706eb58e4f4$export$13fae14bb855bb55 = ({ northEast: northEast , southWest: southWest  }, pixels)=>{
    northEast.x += pixels;
    northEast.y -= pixels;
    southWest.x -= pixels;
    southWest.y += pixels;
    return {
        northEast: northEast,
        southWest: southWest
    };
};
/**
 * @hidden
 */ const $3e67a706eb58e4f4$export$933460cf3ebd15f3 = ({ northEast: northEast , southWest: southWest  }, projection)=>{
    const bounds = new google.maps.LatLngBounds();
    bounds.extend(projection.fromDivPixelToLatLng(northEast));
    bounds.extend(projection.fromDivPixelToLatLng(southWest));
    return bounds;
};
/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @hidden
 */ class $3e67a706eb58e4f4$export$cc72e4132fdd891 {
    constructor({ maxZoom: maxZoom = 16  }){
        this.maxZoom = maxZoom;
    }
    /**
     * Helper function to bypass clustering based upon some map state such as
     * zoom, number of markers, etc.
     *
     * ```typescript
     *  cluster({markers, map}: AlgorithmInput): Cluster[] {
     *    if (shouldBypassClustering(map)) {
     *      return this.noop({markers, map})
     *    }
     * }
     * ```
     */ noop({ markers: markers  }) {
        return $3e67a706eb58e4f4$export$5f8ba94b9c81aa67(markers);
    }
}
/**
 * Abstract viewport algorithm proves a class to filter markers by a padded
 * viewport. This is a common optimization.
 *
 * @hidden
 */ class $3e67a706eb58e4f4$export$9c53a56baa246b22 extends $3e67a706eb58e4f4$export$cc72e4132fdd891 {
    constructor(_a){
        var { viewportPadding: $3e67a706eb58e4f4$var$viewportPadding = 60  } = _a, options = $3e67a706eb58e4f4$var$__rest(_a, [
            "viewportPadding"
        ]);
        super(options);
        this.viewportPadding = 60;
        this.viewportPadding = $3e67a706eb58e4f4$var$viewportPadding;
    }
    calculate({ markers: markers , map: map , mapCanvasProjection: mapCanvasProjection ,  }) {
        if (map.getZoom() >= this.maxZoom) return {
            clusters: this.noop({
                markers: markers,
                map: map,
                mapCanvasProjection: mapCanvasProjection
            }),
            changed: false
        };
        return {
            clusters: this.cluster({
                markers: $3e67a706eb58e4f4$export$9b4c6f0182d220fc(map, mapCanvasProjection, markers, this.viewportPadding),
                map: map,
                mapCanvasProjection: mapCanvasProjection
            })
        };
    }
}
/**
 * @hidden
 */ const $3e67a706eb58e4f4$export$5f8ba94b9c81aa67 = (markers2)=>{
    const clusters = markers2.map((marker)=>new $3e67a706eb58e4f4$export$4b200d2f979b5b40({
            position: marker.getPosition(),
            markers: [
                marker
            ]
        })
    );
    return clusters;
};
/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The default Grid algorithm historically used in Google Maps marker
 * clustering.
 *
 * The Grid algorithm does not implement caching and markers may flash as the
 * viewport changes. Instead use {@link SuperClusterAlgorithm}.
 */ class $3e67a706eb58e4f4$export$d823936fa88b8fbf extends $3e67a706eb58e4f4$export$9c53a56baa246b22 {
    constructor(_a1){
        var { maxDistance: $3e67a706eb58e4f4$var$maxDistance = 40000 , gridSize: $3e67a706eb58e4f4$var$gridSize = 40  } = _a1, options1 = $3e67a706eb58e4f4$var$__rest(_a1, [
            "maxDistance",
            "gridSize"
        ]);
        super(options1);
        this.clusters = [];
        this.maxDistance = $3e67a706eb58e4f4$var$maxDistance;
        this.gridSize = $3e67a706eb58e4f4$var$gridSize;
    }
    cluster({ markers: markers , map: map , mapCanvasProjection: mapCanvasProjection ,  }) {
        this.clusters = [];
        markers.forEach((marker)=>{
            this.addToClosestCluster(marker, map, mapCanvasProjection);
        });
        return this.clusters;
    }
    addToClosestCluster(marker, map, projection) {
        let maxDistance = this.maxDistance; // Some large number
        let cluster = null;
        for(let i = 0; i < this.clusters.length; i++){
            const candidate = this.clusters[i];
            const distance = $3e67a706eb58e4f4$export$780307dfca60319a(candidate.bounds.getCenter().toJSON(), marker.getPosition().toJSON());
            if (distance < maxDistance) {
                maxDistance = distance;
                cluster = candidate;
            }
        }
        if (cluster && $3e67a706eb58e4f4$export$34b9e5c7ac7df7bb(cluster.bounds, projection, this.gridSize).contains(marker.getPosition())) cluster.push(marker);
        else {
            const cluster1 = new $3e67a706eb58e4f4$export$4b200d2f979b5b40({
                markers: [
                    marker
                ]
            });
            this.clusters.push(cluster1);
        }
    }
}
/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Noop algorithm does not generate any clusters or filter markers by the an extended viewport.
 */ class $3e67a706eb58e4f4$export$364ff8cea68ab62f extends $3e67a706eb58e4f4$export$cc72e4132fdd891 {
    constructor(_a2){
        var options2 = $3e67a706eb58e4f4$var$__rest(_a2, []);
        super(options2);
    }
    calculate({ markers: markers , map: map , mapCanvasProjection: mapCanvasProjection ,  }) {
        return {
            clusters: this.cluster({
                markers: markers,
                map: map,
                mapCanvasProjection: mapCanvasProjection
            }),
            changed: false
        };
    }
    cluster(input) {
        return this.noop(input);
    }
}
/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Experimental algorithm using Kmeans.
 *
 * The Grid algorithm does not implement caching and markers may flash as the
 * viewport changes. Instead use {@link SuperClusterAlgorithm}.
 *
 * @see https://www.npmjs.com/package/@turf/clusters-kmeans
 */ class $3e67a706eb58e4f4$export$b708ab62db44cc4 extends $3e67a706eb58e4f4$export$9c53a56baa246b22 {
    constructor(_a3){
        var { numberOfClusters: $3e67a706eb58e4f4$var$numberOfClusters  } = _a3, options3 = $3e67a706eb58e4f4$var$__rest(_a3, [
            "numberOfClusters"
        ]);
        super(options3);
        this.numberOfClusters = $3e67a706eb58e4f4$var$numberOfClusters;
    }
    cluster({ markers: markers , map: map  }) {
        const clusters = [];
        if (markers.length === 0) return clusters;
        const points = $f1c53da3377f3130$export$7c422acbc10e74d2(markers.map((marker)=>{
            return $f1c53da3377f3130$export$8502864bca7c3201([
                marker.getPosition().lng(),
                marker.getPosition().lat()
            ]);
        }));
        let numberOfClusters;
        if (this.numberOfClusters instanceof Function) numberOfClusters = this.numberOfClusters(markers.length, map.getZoom());
        else numberOfClusters = this.numberOfClusters;
        $e771df19e4bdc08f$export$9099ad97b570f7c(points, {
            numberOfClusters: numberOfClusters
        }).features.forEach((point, i)=>{
            if (!clusters[point.properties.cluster]) clusters[point.properties.cluster] = new $3e67a706eb58e4f4$export$4b200d2f979b5b40({
                position: {
                    lng: point.properties.centroid[0],
                    lat: point.properties.centroid[1]
                },
                markers: []
            });
            clusters[point.properties.cluster].push(markers[i]);
        });
        return clusters;
    }
}
/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $3e67a706eb58e4f4$var$DEFAULT_INTERNAL_DBSCAN_OPTION = {
    units: "kilometers",
    mutate: false,
    minPoints: 1
};
/**
 *
 * **This algorithm is not yet ready for use!**
 *
 * Experimental algorithm using DBScan.
 *
 * The Grid algorithm does not implement caching and markers may flash as the
 * viewport changes. Instead use {@link SuperClusterAlgorithm}.
 *
 * @see https://www.npmjs.com/package/@turf/clusters-dbscan
 */ class $3e67a706eb58e4f4$export$ad8e4ddb40f55457 extends $3e67a706eb58e4f4$export$9c53a56baa246b22 {
    constructor(_a4){
        var { maxDistance: $3e67a706eb58e4f4$var$maxDistance = 200 , minPoints: $3e67a706eb58e4f4$var$minPoints = $3e67a706eb58e4f4$var$DEFAULT_INTERNAL_DBSCAN_OPTION.minPoints  } = _a4, options4 = $3e67a706eb58e4f4$var$__rest(_a4, [
            "maxDistance",
            "minPoints"
        ]);
        super(options4);
        this.maxDistance = $3e67a706eb58e4f4$var$maxDistance;
        this.options = Object.assign(Object.assign({
        }, $3e67a706eb58e4f4$var$DEFAULT_INTERNAL_DBSCAN_OPTION), {
            minPoints: $3e67a706eb58e4f4$var$minPoints
        });
    }
    cluster({ markers: markers , mapCanvasProjection: mapCanvasProjection ,  }) {
        const points = $f1c53da3377f3130$export$7c422acbc10e74d2(markers.map((marker)=>{
            const projectedPoint = mapCanvasProjection.fromLatLngToContainerPixel(marker.getPosition());
            return $f1c53da3377f3130$export$8502864bca7c3201([
                projectedPoint.x,
                projectedPoint.y
            ]);
        }));
        const grouped = [];
        $5d992c419bc57c89$export$9099ad97b570f7c(points, this.maxDistance, this.options).features.forEach((point, i)=>{
            if (!grouped[point.properties.cluster]) grouped[point.properties.cluster] = [];
            grouped[point.properties.cluster].push(markers[i]);
        });
        return grouped.map((markers2)=>new $3e67a706eb58e4f4$export$4b200d2f979b5b40({
                markers: markers2
            })
        );
    }
}
/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A very fast JavaScript algorithm for geospatial point clustering using KD trees.
 *
 * @see https://www.npmjs.com/package/supercluster for more information on options.
 */ class $3e67a706eb58e4f4$export$8a0a8f828f6f237c extends $3e67a706eb58e4f4$export$cc72e4132fdd891 {
    constructor(_a5){
        var { maxZoom: $3e67a706eb58e4f4$var$maxZoom , radius: $3e67a706eb58e4f4$var$radius = 60  } = _a5, options5 = $3e67a706eb58e4f4$var$__rest(_a5, [
            "maxZoom",
            "radius"
        ]);
        super({
            maxZoom: $3e67a706eb58e4f4$var$maxZoom
        });
        this.superCluster = new $260425be1d20237d$export$9099ad97b570f7c(Object.assign({
            maxZoom: this.maxZoom,
            radius: $3e67a706eb58e4f4$var$radius
        }, options5));
        this.state = {
            zoom: null
        };
    }
    calculate(input) {
        let changed = false;
        if (!(/*@__PURE__*/$parcel$interopDefault($75317cff1a6fcfba$exports))(input.markers, this.markers)) {
            changed = true;
            // TODO use proxy to avoid copy?
            this.markers = [
                ...input.markers
            ];
            const points = this.markers.map((marker)=>{
                return {
                    type: "Feature",
                    geometry: {
                        type: "Point",
                        coordinates: [
                            marker.getPosition().lng(),
                            marker.getPosition().lat(), 
                        ]
                    },
                    properties: {
                        marker: marker
                    }
                };
            });
            this.superCluster.load(points);
        }
        const state = {
            zoom: input.map.getZoom()
        };
        if (!changed) {
            if (this.state.zoom > this.maxZoom && state.zoom > this.maxZoom) ;
            else changed = changed || !(/*@__PURE__*/$parcel$interopDefault($75317cff1a6fcfba$exports))(this.state, state);
        }
        this.state = state;
        if (changed) this.clusters = this.cluster(input);
        return {
            clusters: this.clusters,
            changed: changed
        };
    }
    cluster({ map: map  }) {
        return this.superCluster.getClusters([
            -180,
            -90,
            180,
            90
        ], Math.round(map.getZoom())).map(this.transformCluster.bind(this));
    }
    transformCluster({ geometry: { coordinates: [lng, lat] ,  } , properties: properties ,  }) {
        if (properties.cluster) return new $3e67a706eb58e4f4$export$4b200d2f979b5b40({
            markers: this.superCluster.getLeaves(properties.cluster_id, Infinity).map((leaf)=>leaf.properties.marker
            ),
            position: new google.maps.LatLng({
                lat: lat,
                lng: lng
            })
        });
        else {
            const marker = properties.marker;
            return new $3e67a706eb58e4f4$export$4b200d2f979b5b40({
                markers: [
                    marker
                ],
                position: marker.getPosition()
            });
        }
    }
}
/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides statistics on all clusters in the current render cycle for use in {@link Renderer.render}.
 */ class $3e67a706eb58e4f4$export$4a881b7a0aba36e2 {
    constructor(markers2, clusters){
        this.markers = {
            sum: markers2.length
        };
        const clusterMarkerCounts = clusters.map((a)=>a.count
        );
        const clusterMarkerSum = clusterMarkerCounts.reduce((a, b)=>a + b
        , 0);
        this.clusters = {
            count: clusters.length,
            markers: {
                mean: clusterMarkerSum / clusters.length,
                sum: clusterMarkerSum,
                min: Math.min(...clusterMarkerCounts),
                max: Math.max(...clusterMarkerCounts)
            }
        };
    }
}
class $3e67a706eb58e4f4$export$ee0e2b10e0cbe53 {
    /**
     * The default render function for the library used by {@link MarkerClusterer}.
     *
     * Currently set to use the following:
     *
     * ```typescript
     * // change color if this cluster has more markers than the mean cluster
     * const color =
     *   count > Math.max(10, stats.clusters.markers.mean)
     *     ? "#ff0000"
     *     : "#0000ff";
     *
     * // create svg url with fill color
     * const svg = window.btoa(`
     * <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
     *   <circle cx="120" cy="120" opacity=".6" r="70" />
     *   <circle cx="120" cy="120" opacity=".3" r="90" />
     *   <circle cx="120" cy="120" opacity=".2" r="110" />
     *   <circle cx="120" cy="120" opacity=".1" r="130" />
     * </svg>`);
     *
     * // create marker using svg icon
     * return new google.maps.Marker({
     *   position,
     *   icon: {
     *     url: `data:image/svg+xml;base64,${svg}`,
     *     scaledSize: new google.maps.Size(45, 45),
     *   },
     *   label: {
     *     text: String(count),
     *     color: "rgba(255,255,255,0.9)",
     *     fontSize: "12px",
     *   },
     *   // adjust zIndex to be above other markers
     *   zIndex: 1000 + count,
     * });
     * ```
     */ render({ count: count , position: position  }, stats) {
        // change color if this cluster has more markers than the mean cluster
        const color = count > Math.max(10, stats.clusters.markers.mean) ? "#ff0000" : "#0000ff";
        // create svg url with fill color
        const svg = window.btoa(`\n  <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">\n    <circle cx="120" cy="120" opacity=".6" r="70" />\n    <circle cx="120" cy="120" opacity=".3" r="90" />\n    <circle cx="120" cy="120" opacity=".2" r="110" />\n  </svg>`);
        // create marker using svg icon
        return new google.maps.Marker({
            position: position,
            icon: {
                url: `data:image/svg+xml;base64,${svg}`,
                scaledSize: new google.maps.Size(45, 45)
            },
            label: {
                text: String(count),
                color: "rgba(255,255,255,0.9)",
                fontSize: "12px"
            },
            // adjust zIndex to be above other markers
            zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count
        });
    }
}
/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Extends an object's prototype by another's.
 *
 * @param type1 The Type to be extended.
 * @param type2 The Type to extend with.
 * @ignore
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $3e67a706eb58e4f4$var$extend(type1, type2) {
    /* istanbul ignore next */ // eslint-disable-next-line prefer-const
    for(let property in type2.prototype)type1.prototype[property] = type2.prototype[property];
}
/**
 * @ignore
 */ class $3e67a706eb58e4f4$var$OverlayViewSafe {
    constructor(){
        // MarkerClusterer implements google.maps.OverlayView interface. We use the
        // extend function to extend MarkerClusterer with google.maps.OverlayView
        // because it might not always be available when the code is defined so we
        // look for it at the last possible moment. If it doesn't exist now then
        // there is no point going ahead :)
        $3e67a706eb58e4f4$var$extend($3e67a706eb58e4f4$var$OverlayViewSafe, google.maps.OverlayView);
    }
}
/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var $3e67a706eb58e4f4$export$f0bbe6a8e683fb51;
(function(MarkerClustererEvents) {
    MarkerClustererEvents["CLUSTERING_BEGIN"] = "clusteringbegin";
    MarkerClustererEvents["CLUSTERING_END"] = "clusteringend";
    MarkerClustererEvents["CLUSTER_CLICK"] = "click";
})($3e67a706eb58e4f4$export$f0bbe6a8e683fb51 || ($3e67a706eb58e4f4$export$f0bbe6a8e683fb51 = {
}));
const $3e67a706eb58e4f4$export$f9d00dffdebb53c = (_, cluster, map)=>{
    map.fitBounds(cluster.bounds);
};
/**
 * MarkerClusterer creates and manages per-zoom-level clusters for large amounts
 * of markers. See {@link MarkerClustererOptions} for more details.
 *
 * <iframe src="https://googlemaps.github.io/js-three/public/anchor/index.html"></iframe>
 */ class $3e67a706eb58e4f4$export$ecdea5c1dab96b8d extends $3e67a706eb58e4f4$var$OverlayViewSafe {
    constructor({ map: map , markers: markers3 = [] , algorithm: algorithm = new $3e67a706eb58e4f4$export$8a0a8f828f6f237c({
    }) , renderer: renderer = new $3e67a706eb58e4f4$export$ee0e2b10e0cbe53() , onClusterClick: onClusterClick = $3e67a706eb58e4f4$export$f9d00dffdebb53c ,  }){
        super();
        this.markers = [
            ...markers3
        ];
        this.clusters = [];
        this.algorithm = algorithm;
        this.renderer = renderer;
        this.onClusterClick = onClusterClick;
        if (map) this.setMap(map);
    }
    addMarker(marker, noDraw) {
        if (this.markers.includes(marker)) return;
        this.markers.push(marker);
        if (!noDraw) this.render();
    }
    addMarkers(markers, noDraw) {
        markers.forEach((marker)=>{
            this.addMarker(marker, true);
        });
        if (!noDraw) this.render();
    }
    removeMarker(marker, noDraw) {
        const index = this.markers.indexOf(marker);
        if (index === -1) // Marker is not in our list of markers, so do nothing:
        return false;
        marker.setMap(null);
        this.markers.splice(index, 1); // Remove the marker from the list of managed markers
        if (!noDraw) this.render();
        return true;
    }
    removeMarkers(markers, noDraw) {
        let removed = false;
        markers.forEach((marker)=>{
            removed = this.removeMarker(marker, true) || removed;
        });
        if (removed && !noDraw) this.render();
        return removed;
    }
    clearMarkers(noDraw) {
        this.markers.length = 0;
        if (!noDraw) this.render();
    }
    /**
     * Recalculates and draws all the marker clusters.
     */ render() {
        const map1 = this.getMap();
        if (map1 instanceof google.maps.Map && this.getProjection()) {
            google.maps.event.trigger(this, $3e67a706eb58e4f4$export$f0bbe6a8e683fb51.CLUSTERING_BEGIN, this);
            const { clusters: clusters1 , changed: changed  } = this.algorithm.calculate({
                markers: this.markers,
                map: map1,
                mapCanvasProjection: this.getProjection()
            });
            // allow algorithms to return flag on whether the clusters/markers have changed
            if (changed || changed == undefined) {
                // reset visibility of markers and clusters
                this.reset();
                // store new clusters
                this.clusters = clusters1;
                this.renderClusters();
            }
            google.maps.event.trigger(this, $3e67a706eb58e4f4$export$f0bbe6a8e683fb51.CLUSTERING_END, this);
        }
    }
    onAdd() {
        this.idleListener = this.getMap().addListener("idle", this.render.bind(this));
        this.render();
    }
    onRemove() {
        google.maps.event.removeListener(this.idleListener);
        this.reset();
    }
    reset() {
        this.markers.forEach((marker)=>marker.setMap(null)
        );
        this.clusters.forEach((cluster)=>cluster.delete()
        );
        this.clusters = [];
    }
    renderClusters() {
        // generate stats to pass to renderers
        const stats = new $3e67a706eb58e4f4$export$4a881b7a0aba36e2(this.markers, this.clusters);
        const map1 = this.getMap();
        this.clusters.forEach((cluster)=>{
            if (cluster.markers.length === 1) cluster.marker = cluster.markers[0];
            else {
                cluster.marker = this.renderer.render(cluster, stats);
                if (this.onClusterClick) cluster.marker.addListener("click", /* istanbul ignore next */ (event)=>{
                    google.maps.event.trigger(this, $3e67a706eb58e4f4$export$f0bbe6a8e683fb51.CLUSTER_CLICK, cluster);
                    this.onClusterClick(event, cluster, map1);
                });
            }
            cluster.marker.setMap(map1);
        });
    }
}


var $07f55cd4ae490028$export$b2f13e228c542ebb = window.google;


var $a6afb27f79910c9a$export$a0bd1dffd4b583c = /*#__PURE__*/ function(Renderer) {
    "use strict";
    $cb9ce7a7602b77d1$export$9099ad97b570f7c($a6afb27f79910c9a$export$a0bd1dffd4b583c, Renderer);
    function $a6afb27f79910c9a$export$a0bd1dffd4b583c(params) {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $a6afb27f79910c9a$export$a0bd1dffd4b583c);
        var _this;
        _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c($a6afb27f79910c9a$export$a0bd1dffd4b583c).call(this, params));
        /////////////////////////////////////////////
        // parameters that can be passed in
        // what should the renderer do if there are no geopoints
        // can be one of:
        // render - render the map anyway, with no geopoints on it
        // hide - hide the map and display the mapHiddenText
        _this.onNoGeoPoints = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "onNoGeoPoints", "render");
        // text to render if the map has no geo points and the behaviour is "hide"
        _this.mapHiddenText = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "mapHiddenText", "No map data available");
        // initial zoom level
        _this.initialZoom = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "initialZoom", 2);
        // initial map type
        _this.mapType = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "mapType", "hybrid");
        _this.labelFunction = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "labelFunction", false);
        // should we be using the google maps clustering features
        _this.cluster = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "cluster", false);
        _this.reQueryOnBoundsChange = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "reQueryOnBoundsChange", false);
        _this.clusterIcons = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "clusterIcons", {
            0: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png"
        });
        _this.renderCluster = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "renderCluster", false);
        /////////////////////////////////////////////
        // internal state
        _this.namespace = "edges-google-map-view";
        _this.map = false;
        _this.markers = [];
        _this.markerCluster = false;
        _this.currentZoom = false;
        _this.currentBounds = false;
        // for reasons unknown, on draw the map generates 2 idle events in rapid succession.  This allows us
        // to squash responding to them
        _this.skipIdleEvent = 2;
        return _this;
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($a6afb27f79910c9a$export$a0bd1dffd4b583c, [
        {
            key: "draw",
            value: function draw() {
                // now check if there are any geo points, and if there's anything we should do about it
                if (this.component.locations.length === 0) {
                    if (this.onNoGeoPoints === "hide") {
                        this.component.context.html(this.mapHiddenText);
                        return;
                    }
                }
                this.skipIdleEvent = 2;
                var centre = new $07f55cd4ae490028$export$b2f13e228c542ebb.maps.LatLng(this.component.centre.lat, this.component.centre.lon);
                if (!this.map) {
                    var canvasClass = $988cca1a6a01f734$export$e516ebba864be69d(this.namespace, "canvas", this);
                    var canvasSelector = $988cca1a6a01f734$export$b1157bd4df096bce(this.namespace, "canvas", this);
                    this.component.context.html('<div class="' + canvasClass + '"></div>');
                    var element = this.component.jq(canvasSelector)[0];
                    var mapTypeId = this.mapType;
                    if (this.mapType === "hybrid") mapTypeId = $07f55cd4ae490028$export$b2f13e228c542ebb.maps.MapTypeId.HYBRID;
                    var mapOptions = {
                        zoom: this.initialZoom,
                        center: centre,
                        mapTypeId: mapTypeId
                    };
                    this.map = new $07f55cd4ae490028$export$b2f13e228c542ebb.maps.Map(element, mapOptions);
                    // make sure we set the centre right
                    this.map.setCenter(centre);
                }
                // clear any existing markers
                for(i = 0; i < this.markers.length; i++)this.markers[i].setMap(null);
                this.markers = [];
                for(var i = 0; i < this.component.locations.length; i++){
                    var loc = this.component.locations[i];
                    var myLatlng = new $07f55cd4ae490028$export$b2f13e228c542ebb.maps.LatLng(loc.lat, loc.lon);
                    var properties = {
                        position: myLatlng
                    };
                    if (!this.cluster) // otherwise the mapping clusterer will deal with it
                    properties["map"] = this.map;
                    if (this.cluster) {
                        var icon = this._getClusterIcon(loc.count);
                        if (icon) properties["icon"] = icon;
                    }
                    if (this.labelFunction) properties["label"] = {
                        text: this.labelFunction(loc)
                    } // e.g. loc.count.toString()
                    ;
                    var marker = new $07f55cd4ae490028$export$b2f13e228c542ebb.maps.Marker(properties);
                    this.markers.push(marker);
                }
                if (this.cluster) {
                    var props = {
                        map: this.map,
                        markers: this.markers
                    };
                    if (this.renderCluster) props["renderer"] = this.renderCluster;
                    this.markerCluster = new $3e67a706eb58e4f4$export$ecdea5c1dab96b8d(props);
                }
                if (this.reQueryOnBoundsChange) {
                    var onBoundsChanged = $988cca1a6a01f734$export$367047a567f2342b(this, "boundsChanged");
                    this.map.addListener("idle", onBoundsChanged);
                }
            }
        },
        {
            key: "boundsChanged",
            value: function boundsChanged() {
                // prevent the idle event from triggering a re-query the first time, as it does
                // this on load
                if (this.skipIdleEvent > 0) {
                    this.skipIdleEvent--;
                    return;
                }
                var bounds = this.map.getBounds();
                var zoom = this.map.getZoom();
                var ne = bounds.getNorthEast();
                var sw = bounds.getSouthWest();
                var top_left = {
                    lat: ne.lat(),
                    lon: sw.lng()
                };
                var bottom_right = {
                    lat: sw.lat(),
                    lon: ne.lng()
                };
                this.component.boundsChanged({
                    top_left: top_left,
                    bottom_right: bottom_right,
                    zoom: zoom
                });
            }
        },
        {
            key: "_getClusterIcon",
            value: function _getClusterIcon(count) {
                var icon = false;
                var highest = -1;
                for(var limit in this.clusterIcons)if (limit <= count && limit > highest) {
                    icon = this.clusterIcons[limit];
                    highest = limit;
                }
                return icon;
            }
        }
    ]);
    return $a6afb27f79910c9a$export$a0bd1dffd4b583c;
}($97ca9eea36c86bb4$export$a695173e2ecfa9b);






var $eb9467bf48f108cb$export$845e14b82c9a4f95 = /*#__PURE__*/ function(Component) {
    "use strict";
    $cb9ce7a7602b77d1$export$9099ad97b570f7c($eb9467bf48f108cb$export$845e14b82c9a4f95, Component);
    function $eb9467bf48f108cb$export$845e14b82c9a4f95(params) {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $eb9467bf48f108cb$export$845e14b82c9a4f95);
        var _this;
        _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c($eb9467bf48f108cb$export$845e14b82c9a4f95).call(this, params));
        $0726ab3728f86779$export$9099ad97b570f7c($0ace6cd118fdb36a$export$9099ad97b570f7c(_this), /////////////////////////////////////////////////
        // query handlers for getting the full list of terms to display
        "listAll", function() {
            // to list all possible terms, build off the base query
            var bq = _this.edge.cloneBaseQuery();
            bq.clearAggregations();
            bq.size = 0;
            // now add the aggregation that we want
            var params1 = {
                name: _this.id,
                field: _this.field,
                orderBy: _this.orderBy,
                orderDir: _this.orderDir,
                size: _this.size
            };
            bq.addAggregation(new $1f5712c12abeeb70$export$8b446892c82de644.TermsAggregation(params1));
            _this.latestQuery = bq;
            // issue the query to elasticsearch
            _this.edge.queryAdapter.doQuery({
                edge: _this.edge,
                query: bq,
                success: $988cca1a6a01f734$export$367047a567f2342b($0ace6cd118fdb36a$export$9099ad97b570f7c(_this), "listAllQuerySuccess", [
                    "result"
                ]),
                error: $988cca1a6a01f734$export$367047a567f2342b($0ace6cd118fdb36a$export$9099ad97b570f7c(_this), "listAllQueryFail")
            });
        });
        $0726ab3728f86779$export$9099ad97b570f7c($0ace6cd118fdb36a$export$9099ad97b570f7c(_this), "doUpdate", function() {
            // is an update already happening?
            if (_this.updating) return;
            _this.udpating = true;
            // to list all current terms, build off the current query
            var bq = _this.edge.cloneQuery();
            // remove any constraint on this field, and clear the aggregations and set size to 0 for performance
            bq.removeMust(new $1f5712c12abeeb70$export$8b446892c82de644.TermsFilter({
                field: _this.field
            }));
            bq.clearAggregations();
            bq.size = 0;
            // now add the aggregation that we want
            var params1 = {
                name: _this.id,
                field: _this.field,
                orderBy: _this.orderBy,
                orderDir: _this.orderDir,
                size: _this.size
            };
            bq.addAggregation(new $1f5712c12abeeb70$export$8b446892c82de644.TermsAggregation(params1));
            _this.latestQuery = bq;
            // issue the query to elasticsearch
            _this.edge.queryAdapter.doQuery({
                edge: _this.edge,
                query: bq,
                success: $988cca1a6a01f734$export$367047a567f2342b($0ace6cd118fdb36a$export$9099ad97b570f7c(_this), "doUpdateQuerySuccess", [
                    "result"
                ]),
                error: $988cca1a6a01f734$export$367047a567f2342b($0ace6cd118fdb36a$export$9099ad97b570f7c(_this), "doUpdateQueryFail")
            });
        });
        $0726ab3728f86779$export$9099ad97b570f7c($0ace6cd118fdb36a$export$9099ad97b570f7c(_this), //////////////////////////////////////////
        // "private" functions for internal use
        "_translate", function(term) {
            if (_this.valueMap) {
                if (term in _this.valueMap) return _this.valueMap[term];
            } else if (_this.valueFunction) return _this.valueFunction(term);
            return term;
        });
        // field upon which to build the selector
        _this.field = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "field");
        // whether the facet should be displayed at all (e.g. you may just want the data for a callback)
        _this.active = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "active", true);
        // whether this component updates itself on every request, or whether it is static
        // throughout its lifecycle.  One of "update" or "static"
        _this.lifecycle = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "lifecycle", "static");
        // if the update type is "update", then how should this component update the facet values
        // * mergeInitial - always keep the initial list in the original order, and merge the bucket counts onto the correct terms
        // * fresh - just use the values in the most recent aggregation, ignoring the initial values
        _this.updateType = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "updateType", "mergeInitial");
        // which ordering to use term/count and asc/desc
        _this.orderBy = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "orderBy", "term");
        _this.orderDir = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "orderDir", "asc");
        // number of results that we should display - remember that this will only
        // be used once, so should be large enough to gather all the values that might
        // be in the index
        _this.size = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "size", 10);
        // provide a map of values for terms to displayable terms, or a function
        // which can be used to translate terms to displyable values
        _this.valueMap = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "valueMap", false);
        _this.valueFunction = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "valueFunction", false);
        // should we try to synchronise the term counts from an equivalent aggregation on the
        // primary query?  You can turn this off if you aren't displaying counts or otherwise
        // modifying the display based on the counts
        _this.syncCounts = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "syncCounts", true);
        //////////////////////////////////////////
        // properties used to store internal state
        // a place to store the raw result from the last query made for data
        _this.latestQuery = false;
        _this.latestResult = false;
        // an explicit list of terms to be displayed.  If this is not passed in, then a query
        // will be issues which will populate this with the values
        // of the form
        // [{term: "<value>", display: "<display value>", count: <number of records>}]
        _this.terms = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "terms", false);
        // values of terms that have been selected from this.terms
        // this is just a plain list of the values
        _this.selected = [];
        // is the object currently updating itself
        _this.updating = false;
        _this.reQueryAfterListAll = false;
        return _this;
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($eb9467bf48f108cb$export$845e14b82c9a4f95, [
        {
            key: "init",
            value: function init(edge) {
                // first kick the request up to the superclass
                $59ef20e355e8922b$export$9099ad97b570f7c($6f1885a119f0af4a$export$9099ad97b570f7c($eb9467bf48f108cb$export$845e14b82c9a4f95.prototype), "init", this).call(this, edge);
                // now trigger a request for the terms to present, if not explicitly provided
                if (!this.terms) {
                    if (this.edge.openingQuery || this.edge.urlQuery) this.reQueryAfterListAll = true;
                    this.listAll();
                }
            }
        },
        {
            key: "synchronise",
            value: function synchronise() {
                // reset the internal properties
                this.selected = [];
                // extract all the filter values that pertain to this selector
                if (this.edge.currentQuery) {
                    var filters = this.edge.currentQuery.listMust(new $1f5712c12abeeb70$export$8b446892c82de644.TermsFilter({
                        field: this.field
                    }));
                    for(var i = 0; i < filters.length; i++)for(var j = 0; j < filters[i].values.length; j++){
                        var val = filters[i].values[j];
                        this.selected.push(val);
                    }
                }
                if (this.syncCounts && this.edge.result && this.terms) this._synchroniseTerms({
                    result: this.edge.result
                });
            }
        },
        {
            key: "_synchroniseTermsMergeInitial",
            value: function _synchroniseTermsMergeInitial(params) {
                var result = params.result;
                // mesh the terms in the aggregation with the terms in the terms list
                var buckets = result.buckets(this.id);
                for(var i = 0; i < this.terms.length; i++){
                    var t = this.terms[i];
                    var found = false;
                    for(var j = 0; j < buckets.length; j++){
                        var b = buckets[j];
                        if (t.term === b.key) {
                            t.count = b.doc_count;
                            found = true;
                            break;
                        }
                    }
                    if (!found) t.count = 0;
                }
            }
        },
        {
            key: "_synchroniseTerms",
            value: function _synchroniseTerms(params) {
                if (this.updateType === "mergeInitial") this._synchroniseTermsMergeInitial(params);
                else this._synchroniseTermsFresh(params);
            }
        },
        {
            key: "_synchroniseTermsFresh",
            value: function _synchroniseTermsFresh(params) {
                var result = params.result;
                this.terms = [];
                var buckets = result.buckets(this.id);
                for(var i = 0; i < buckets.length; i++){
                    var bucket = buckets[i];
                    this.terms.push({
                        term: bucket.key,
                        display: this._translate(bucket.key),
                        count: bucket.doc_count
                    });
                }
            }
        },
        {
            key: "listAllQuerySuccess",
            value: function listAllQuerySuccess(params) {
                var result = params.result;
                this.latestResult = result;
                // get the terms out of the aggregation
                this.terms = [];
                var buckets = result.buckets(this.id);
                for(var i = 0; i < buckets.length; i++){
                    var bucket = buckets[i];
                    this.terms.push({
                        term: bucket.key,
                        display: this._translate(bucket.key),
                        count: bucket.doc_count
                    });
                }
                // allow the event handler to be set up
                this.setupEvent();
                // in case there's a race between this and another update operation, subsequently synchronise
                this.synchronise();
                if (this.reQueryAfterListAll) this.doUpdate();
                else // since this happens asynchronously, we may want to draw
                this.draw();
            }
        },
        {
            key: "listAllQueryFail",
            value: function listAllQueryFail() {
                this.terms = [];
            }
        },
        {
            key: "setupEvent",
            value: function setupEvent() {
                if (this.lifecycle === "update") this.edge.context.on("edges:pre-query", $988cca1a6a01f734$export$866a93d0ccff8292(this, "doUpdate"));
            }
        },
        {
            key: "doUpdateQuerySuccess",
            value: function doUpdateQuerySuccess(params) {
                var result = params.result;
                this.latestResult = result;
                this._synchroniseTerms({
                    result: result
                });
                // turn off the update flag
                this.updating = false;
                // since this happens asynchronously, we may want to draw
                this.draw();
            }
        },
        {
            key: "doUpdateQueryFail",
            value: function doUpdateQueryFail() {
                // just do nothing, hopefully the next request will be successful
                this.updating = false;
            }
        },
        {
            ///////////////////////////////////////////
            // state change functions
            key: "selectTerms",
            value: function selectTerms(params) {
                var terms = params.terms;
                var clearOthers = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "clearOthers", false);
                var nq = this.edge.cloneQuery();
                // first find out if there was a terms filter already in place
                var filters = nq.listMust(new $1f5712c12abeeb70$export$8b446892c82de644.TermsFilter({
                    field: this.field
                }));
                // if there is, just add the term to it
                if (filters.length > 0) {
                    var filter = filters[0];
                    if (clearOthers) filter.clear_terms();
                    var hadTermAlready = 0;
                    for(var i = 0; i < terms.length; i++){
                        var term = terms[i];
                        if (filter.has_term(term)) hadTermAlready++;
                        else filter.add_term(term);
                    }
                    // if all we did was remove terms that we're then going to re-add, just do nothing
                    if (filter.has_terms() && hadTermAlready === terms.length) return false;
                    else if (!filter.has_terms()) nq.removeMust(new $1f5712c12abeeb70$export$8b446892c82de644.TermsFilter({
                        field: this.field
                    }));
                } else // otherwise, set the Terms Filter
                nq.addMust(new $1f5712c12abeeb70$export$8b446892c82de644.TermsFilter({
                    field: this.field,
                    values: terms
                }));
                // reset the search page to the start and then trigger the next query
                nq.from = 0;
                this.edge.pushQuery(nq);
                this.edge.cycle();
                return true;
            }
        },
        {
            key: "selectTerm",
            value: function selectTerm(term) {
                return this.selectTerms({
                    terms: [
                        term
                    ]
                });
            }
        },
        {
            key: "removeFilter",
            value: function removeFilter(term) {
                var nq = this.edge.cloneQuery();
                // first find out if there was a terms filter already in place
                var filters = nq.listMust(new $1f5712c12abeeb70$export$8b446892c82de644.TermsFilter({
                    field: this.field
                }));
                if (filters.length > 0) {
                    var filter = filters[0];
                    if (filter.has_term(term)) filter.remove_term(term);
                    if (!filter.has_terms()) nq.removeMust(new $1f5712c12abeeb70$export$8b446892c82de644.TermsFilter({
                        field: this.field
                    }));
                }
                // reset the search page to the start and then trigger the next query
                nq.from = 0;
                this.edge.pushQuery(nq);
                this.edge.cycle();
            }
        },
        {
            key: "clearFilters",
            value: function clearFilters(params) {
                var triggerQuery = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "triggerQuery", true);
                if (this.selected.length > 0) {
                    var nq = this.edge.cloneQuery();
                    nq.removeMust(new $1f5712c12abeeb70$export$8b446892c82de644.TermsFilter({
                        field: this.field
                    }));
                    this.edge.pushQuery(nq);
                }
                if (triggerQuery) this.edge.cycle();
            }
        }
    ]);
    return $eb9467bf48f108cb$export$845e14b82c9a4f95;
}($97ca9eea36c86bb4$export$ea71c44d9cb0d048);





var $908df9636949411c$export$4b392426dd40333d = /*#__PURE__*/ function(Renderer) {
    "use strict";
    $cb9ce7a7602b77d1$export$9099ad97b570f7c($908df9636949411c$export$4b392426dd40333d, Renderer);
    function $908df9636949411c$export$4b392426dd40333d(params) {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $908df9636949411c$export$4b392426dd40333d);
        var _this;
        _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c($908df9636949411c$export$4b392426dd40333d).call(this));
        _this.title = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "title", "Select");
        // whether the facet should be open or closed
        // can be initialised and is then used to track internal state
        _this.open = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "open", false);
        _this.togglable = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "togglable", true);
        // whether the count should be displayed along with the term
        // defaults to false because count may be confusing to the user in an OR selector
        _this.showCount = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "showCount", false);
        _this.countFormat = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "countFormat", false);
        // whether counts of 0 should prevent the value being rendered
        _this.hideEmpty = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "hideEmpty", false);
        _this.openIcon = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "openIcon", "glyphicon glyphicon-plus");
        _this.closeIcon = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "closeIcon", "glyphicon glyphicon-minus");
        // don't display the facet at all if there is no data to display
        _this.hideIfNoData = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "hideIfNoData", true);
        _this.layout = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "layout", "left");
        // namespace to use in the page
        _this.namespace = "edges-bs3-checkboxortermselector";
        return _this;
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($908df9636949411c$export$4b392426dd40333d, [
        {
            key: "draw",
            value: function draw() {
                // for convenient short references ...
                var ts = this.component;
                var namespace = this.namespace;
                if (this.hideIfNoData && ts.edge.result && ts.terms.length === 0) {
                    this.component.context.html("");
                    return;
                }
                // sort out all the classes that we're going to be using
                var countClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(namespace, "count", this);
                var checkboxClass = $988cca1a6a01f734$export$e516ebba864be69d(namespace, "selector", this);
                var facetClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(namespace, "facet", this);
                var headerClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(namespace, "header", this);
                var bodyClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(namespace, "body", this);
                var listClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(namespace, "list", this);
                var labelClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(namespace, "label", this);
                var toggleId = $988cca1a6a01f734$export$bf52b203d82ff901(namespace, "toggle", this);
                var resultsId = $988cca1a6a01f734$export$bf52b203d82ff901(namespace, "results", this);
                // this is what's displayed in the body if there are no results or the page is loading
                var results = "<li class='loading'>Loading choices...</li>";
                if (ts.edge.result) results = "<li>No data to show</li>";
                // if we want the active filters, render them
                var filterFrag = "";
                if (ts.selected.length > 0) {
                    var resultClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(namespace, "result", this);
                    for(var i = 0; i < ts.selected.length; i++){
                        var filt = ts.selected[i];
                        var def = this._getFilterDef(filt);
                        if (def) {
                            var display = this.component._translate(filt);
                            var id = $988cca1a6a01f734$export$63ba8ea1e92c906(filt);
                            var count = "";
                            if (this.showCount) {
                                var cv = def.count;
                                if (this.countFormat) cv = this.countFormat(cv);
                                count = ' <span class="' + countClass + '">(' + cv + ')</span>';
                            }
                            filterFrag += '<li>\
                        <input class="' + checkboxClass + '" data-key="' + $988cca1a6a01f734$export$5e20d0a3120d6c07(filt) + '" id="' + id + '" type="checkbox" name="' + id + '" checked="checked">\
                        <label for="' + id + '" class="' + labelClass + '">' + $988cca1a6a01f734$export$5e20d0a3120d6c07(display) + count + '</label>\
                    </li>';
                        }
                    }
                }
                // render a list of the values
                if (ts.terms.length > 0) {
                    results = "";
                    for(var i = 0; i < ts.terms.length; i++){
                        var val = ts.terms[i];
                        if (val.count === 0 && this.hideEmpty) continue;
                        var active = $.inArray(val.term.toString(), ts.selected) > -1;
                        var checked = "";
                        if (active) continue;
                        var count = "";
                        if (this.showCount) count = ' <span class="' + countClass + '">(' + val.count + ')</span>';
                        var id = $988cca1a6a01f734$export$63ba8ea1e92c906(val.term);
                        results += '<li>\
                    <input class="' + checkboxClass + '" data-key="' + $988cca1a6a01f734$export$5e20d0a3120d6c07(val.term) + '" id="' + id + '" type="checkbox" name="' + id + '"' + checked + '>\
                    <label for="' + id + '" class="' + labelClass + '">' + $988cca1a6a01f734$export$5e20d0a3120d6c07(val.display) + count + '</label>\
                </li>';
                    }
                }
                var header = this.headerLayout({
                    toggleId: toggleId
                });
                // render the overall facet
                var frag = "<div class=\"".concat(facetClass, "\">\n                <div class=\"").concat(headerClass, "\"><div class=\"row\">\n                    <div class=\"col-md-12\">\n                        ").concat(header, "\n                    </div>\n                </div></div>\n                <div class=\"").concat(bodyClass, "\">\n                    <div class=\"row\" style=\"display:none\" id=\"").concat(resultsId, "\">\n                        <div class=\"col-md-12\">\n                            <ul class=\"").concat(listClass, "\">{{FILTERS}}</ul>\n                        </div>\
                    </div>\
                </div>\
                </div></div>");
                // substitute in the component parts
                frag = frag.replace(/{{FILTERS}}/g, filterFrag + results);
                // now render it into the page
                ts.context.html(frag);
                // trigger all the post-render set-up functions
                this.setUIOpen();
                var checkboxSelector = $988cca1a6a01f734$export$b1157bd4df096bce(namespace, "selector", this);
                $988cca1a6a01f734$export$b4cd8de5710bc55c(checkboxSelector, "change", this, "filterToggle");
                var toggleSelector = $988cca1a6a01f734$export$5d5492dec79280f1(namespace, "toggle", this);
                $988cca1a6a01f734$export$b4cd8de5710bc55c(toggleSelector, "click", this, "toggleOpen");
            }
        },
        {
            key: "headerLayout",
            value: function headerLayout(params) {
                var toggleId = params.toggleId;
                var iconClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(this.namespace, "icon", this);
                if (this.layout === "left") {
                    var tog = this.title;
                    if (this.togglable) tog = '<a href="#" id="' + toggleId + '"><i class="' + this.openIcon + '"></i>&nbsp;' + tog + "</a>";
                    return tog;
                } else if (this.layout === "right") {
                    var tog = "";
                    if (this.togglable) tog = '<a href="#" id="' + toggleId + '">' + this.title + '&nbsp;<i class="' + this.openIcon + ' ' + iconClass + '"></i></a>';
                    else tog = this.title;
                    return tog;
                }
            }
        },
        {
            key: "setUIOpen",
            value: function setUIOpen() {
                // the selectors that we're going to use
                var resultsSelector = $988cca1a6a01f734$export$5d5492dec79280f1(this.namespace, "results", this);
                var toggleSelector = $988cca1a6a01f734$export$5d5492dec79280f1(this.namespace, "toggle", this);
                var results = this.component.jq(resultsSelector);
                var toggle = this.component.jq(toggleSelector);
                var openBits = this.openIcon.split(" ");
                var closeBits = this.closeIcon.split(" ");
                if (this.open) {
                    var i = toggle.find("i");
                    for(var j = 0; j < openBits.length; j++)i.removeClass(openBits[j]);
                    for(var j = 0; j < closeBits.length; j++)i.addClass(closeBits[j]);
                    results.show();
                } else {
                    var i = toggle.find("i");
                    for(var j = 0; j < closeBits.length; j++)i.removeClass(closeBits[j]);
                    for(var j = 0; j < openBits.length; j++)i.addClass(openBits[j]);
                    results.hide();
                }
            }
        },
        {
            key: "filterToggle",
            value: function filterToggle(element) {
                var term = this.component.jq(element).attr("data-key");
                var checked = this.component.jq(element).is(":checked");
                if (checked) this.component.selectTerm(term);
                else this.component.removeFilter(term);
            }
        },
        {
            key: "toggleOpen",
            value: function toggleOpen(element) {
                this.open = !this.open;
                this.setUIOpen();
            }
        },
        {
            key: "_getFilterDef",
            value: function _getFilterDef(term) {
                for(var i = 0; i < this.component.terms.length; i++){
                    var t = this.component.terms[i];
                    if (term === t.term) return t;
                }
                return false;
            }
        }
    ]);
    return $908df9636949411c$export$4b392426dd40333d;
}($97ca9eea36c86bb4$export$a695173e2ecfa9b);





var $29578ea610930bce$export$d3ad1026b19abbfd = /*#__PURE__*/ function(Renderer) {
    "use strict";
    $cb9ce7a7602b77d1$export$9099ad97b570f7c($29578ea610930bce$export$d3ad1026b19abbfd, Renderer);
    function $29578ea610930bce$export$d3ad1026b19abbfd(params) {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $29578ea610930bce$export$d3ad1026b19abbfd);
        var _this;
        _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c($29578ea610930bce$export$d3ad1026b19abbfd).call(this));
        _this.title = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "title", "Select");
        // whether the facet should be open or closed
        // can be initialised and is then used to track internal state
        _this.open = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "open", false);
        _this.togglable = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "togglable", true);
        // whether the count should be displayed along with the term
        // defaults to false because count may be confusing to the user in an OR selector
        _this.showCount = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "showCount", false);
        _this.countFormat = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "countFormat", false);
        _this.fixedTerms = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "fixedTerms", []);
        _this.openIcon = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "openIcon", "glyphicon glyphicon-plus");
        _this.closeIcon = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "closeIcon", "glyphicon glyphicon-minus");
        // don't display the facet at all if there is no data to display
        _this.hideIfNoData = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "hideIfNoData", true);
        _this.layout = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "layout", "left");
        // namespace to use in the page
        _this.namespace = "edges-bs3-fixedselectioncheckboxortermselector";
        return _this;
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($29578ea610930bce$export$d3ad1026b19abbfd, [
        {
            key: "draw",
            value: function draw() {
                // for convenient short references ...
                var ts = this.component;
                var namespace = this.namespace;
                if (this.hideIfNoData && ts.edge.result && ts.terms.length === 0) {
                    this.component.context.html("");
                    return;
                }
                // sort out all the classes that we're going to be using
                var countClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(namespace, "count", this);
                var checkboxClass = $988cca1a6a01f734$export$e516ebba864be69d(namespace, "selector", this);
                var facetClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(namespace, "facet", this);
                var headerClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(namespace, "header", this);
                var bodyClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(namespace, "body", this);
                var listClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(namespace, "list", this);
                var labelClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(namespace, "label", this);
                var toggleId = $988cca1a6a01f734$export$bf52b203d82ff901(namespace, "toggle", this);
                var resultsId = $988cca1a6a01f734$export$bf52b203d82ff901(namespace, "results", this);
                var results = "";
                for(var i = 0; i < this.fixedTerms.length; i++){
                    var ft = this.fixedTerms[i];
                    for(var j = 0; j < ts.terms.length; j++){
                        var val = ts.terms[j];
                        if (val.term === ft) {
                            var active = $.inArray(val.term.toString(), ts.selected) > -1;
                            var checked = "";
                            if (active) checked = " checked=\"checked\" ";
                            var count = "";
                            if (this.showCount) count = ' <span class="' + countClass + '">(' + this._formatCount(val.count) + ')</span>';
                            var id = $988cca1a6a01f734$export$63ba8ea1e92c906(val.term);
                            results += '<li>\
                        <input class="' + checkboxClass + '" data-key="' + $988cca1a6a01f734$export$5e20d0a3120d6c07(val.term) + '" id="' + id + '" type="checkbox" name="' + id + '"' + checked + '>\
                        <label for="' + id + '" class="' + labelClass + '">' + $988cca1a6a01f734$export$5e20d0a3120d6c07(val.display) + count + '</label>\
                    </li>';
                        }
                    }
                }
                // this is what's displayed in the body if there are no results or the page is loading
                if (results === "") {
                    if (ts.edge.result) results = "<li>No data to show</li>";
                    else results = "<li class='loading'>Loading choices...</li>";
                }
                var header = this.headerLayout({
                    toggleId: toggleId
                });
                // render the overall facet
                var frag = "<div class=\"".concat(facetClass, "\">\n                <div class=\"").concat(headerClass, "\"><div class=\"row\">\n                    <div class=\"col-md-12\">\n                        ").concat(header, "\n                    </div>\n                </div></div>\n                <div class=\"").concat(bodyClass, "\">\n                    <div class=\"row\" style=\"display:none\" id=\"").concat(resultsId, "\">\n                        <div class=\"col-md-12\">\n                            <ul class=\"").concat(listClass, "\">{{FILTERS}}</ul>\n                        </div>\
                    </div>\
                </div>\
                </div></div>");
                // substitute in the component parts
                frag = frag.replace(/{{FILTERS}}/g, results);
                // now render it into the page
                ts.context.html(frag);
                // trigger all the post-render set-up functions
                this.setUIOpen();
                var checkboxSelector = $988cca1a6a01f734$export$b1157bd4df096bce(namespace, "selector", this);
                $988cca1a6a01f734$export$b4cd8de5710bc55c(checkboxSelector, "change", this, "filterToggle");
                var toggleSelector = $988cca1a6a01f734$export$5d5492dec79280f1(namespace, "toggle", this);
                $988cca1a6a01f734$export$b4cd8de5710bc55c(toggleSelector, "click", this, "toggleOpen");
            }
        },
        {
            key: "_formatCount",
            value: function _formatCount(count) {
                if (this.countFormat) return this.countFormat(count);
                return count;
            }
        },
        {
            key: "headerLayout",
            value: function headerLayout(params) {
                var toggleId = params.toggleId;
                var iconClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(this.namespace, "icon", this);
                if (this.layout === "left") {
                    var tog = this.title;
                    if (this.togglable) tog = '<a href="#" id="' + toggleId + '"><i class="' + this.openIcon + '"></i>&nbsp;' + tog + "</a>";
                    return tog;
                } else if (this.layout === "right") {
                    var tog = "";
                    if (this.togglable) tog = '<a href="#" id="' + toggleId + '">' + this.title + '&nbsp;<i class="' + this.openIcon + ' ' + iconClass + '"></i></a>';
                    else tog = this.title;
                    return tog;
                }
            }
        },
        {
            key: "setUIOpen",
            value: function setUIOpen() {
                // the selectors that we're going to use
                var resultsSelector = $988cca1a6a01f734$export$5d5492dec79280f1(this.namespace, "results", this);
                var toggleSelector = $988cca1a6a01f734$export$5d5492dec79280f1(this.namespace, "toggle", this);
                var results = this.component.jq(resultsSelector);
                var toggle = this.component.jq(toggleSelector);
                var openBits = this.openIcon.split(" ");
                var closeBits = this.closeIcon.split(" ");
                if (this.open) {
                    var i = toggle.find("i");
                    for(var j = 0; j < openBits.length; j++)i.removeClass(openBits[j]);
                    for(var j = 0; j < closeBits.length; j++)i.addClass(closeBits[j]);
                    results.show();
                } else {
                    var i = toggle.find("i");
                    for(var j = 0; j < closeBits.length; j++)i.removeClass(closeBits[j]);
                    for(var j = 0; j < openBits.length; j++)i.addClass(openBits[j]);
                    results.hide();
                }
            }
        },
        {
            key: "filterToggle",
            value: function filterToggle(element) {
                var term = this.component.jq(element).attr("data-key");
                var checked = this.component.jq(element).is(":checked");
                if (checked) this.component.selectTerm(term);
                else this.component.removeFilter(term);
            }
        },
        {
            key: "toggleOpen",
            value: function toggleOpen(element) {
                this.open = !this.open;
                this.setUIOpen();
            }
        }
    ]);
    return $29578ea610930bce$export$d3ad1026b19abbfd;
}($97ca9eea36c86bb4$export$a695173e2ecfa9b);








var $bd1d5a355545d6ff$export$6d5fb309d07d7299 = /*#__PURE__*/ function(Renderer) {
    "use strict";
    $cb9ce7a7602b77d1$export$9099ad97b570f7c($bd1d5a355545d6ff$export$6d5fb309d07d7299, Renderer);
    function $bd1d5a355545d6ff$export$6d5fb309d07d7299(params) {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $bd1d5a355545d6ff$export$6d5fb309d07d7299);
        var _this;
        _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c($bd1d5a355545d6ff$export$6d5fb309d07d7299).call(this, params));
        _this.title = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "title", false);
        _this.showValues = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "showValues", true);
        _this.toolTips = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "toolTips", true);
        _this.controls = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "controls", false);
        _this.stacked = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "stacked", false);
        _this.legend = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "legend", true);
        _this.color = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "color", false);
        _this.barColor = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "barColor", false);
        _this.noDataMessage = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "noDataMessage", false);
        _this.transitionDuration = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "transitionDuration", 500);
        _this.marginTop = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "marginTop", 30);
        _this.marginRight = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "marginRight", 50);
        _this.marginBottom = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "marginBottom", 50);
        _this.marginLeft = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "marginLeft", 200);
        _this.yTickFormat = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "yTickFormat", ",.0f");
        _this.xTickFormat = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "xTickFormat", false);
        _this.valueFormat = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "valueFormat", false);
        _this.showXAxis = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "showXAxis", true);
        _this.showYAxis, $988cca1a6a01f734$export$f628537ca2c78f9d(params, "showYAxes", true);
        _this.xAxisLabel = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "xAxisLabel", false);
        _this.yAxisLabel = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "yAxisLabel", false);
        _this.xAxisLabelWrap = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "xAxisLabelWrap", false);
        _this.tooltipGenerator = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "tooltipGenerator", false);
        _this.dynamicHeight = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "dynamicHeight", false);
        _this.barHeight = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "barHeight", 0);
        _this.reserveAbove = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "reserveAbove", 0);
        _this.reserveBelow = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "reserveBelow", 0);
        _this.groupSpacing = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "groupSpacing", false);
        _this.hideIfNoData = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "hideIfNoData", false);
        _this.onHide = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "onHide", false);
        _this.onShow = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "onShow", false);
        _this.onUpdate = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "onUpdate", false);
        _this.namespace = "edges-nvd3-horizontal-multibar";
        _this.draw = function() {
            // no need for data conversion on this graph type
            // nvd3 tooltips appear outside the div where the actual edge is focussed, and it's possible for those
            // tooltips to be left behind when the page is redrawn, so we have to hack around that
            $(".nvtooltip").remove();
            var data_series = _this.component.dataSeries;
            if (!data_series) data_series = [];
            // now decide if we are going to continue
            if (_this.hideIfNoData) {
                if (!$530e6b01b500d249$export$e89b2486fe14568(data_series)) {
                    _this.component.context.html("");
                    _this.component.context.hide();
                    if (_this.onHide) _this.onHide();
                    return;
                }
            }
            _this.component.context.show();
            if (_this.onShow) _this.onShow();
            var customAttributes = "";
            if (_this.dynamicHeight) {
                var seriesCount = 0;
                for(var i = 0; i < data_series.length; i++){
                    var series = data_series[i];
                    if (series.values.length > seriesCount) seriesCount = series.values.length;
                }
                var height = _this.reserveAbove + _this.reserveBelow + seriesCount * _this.barHeight;
                customAttributes = 'style="height:' + height + 'px"';
            }
            var title = "";
            if (_this.title !== false) {
                var titleClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(_this.namespace, "title", $0ace6cd118fdb36a$export$9099ad97b570f7c(_this));
                title = "<h4 class=\"".concat(titleClass, "\">").concat(_this.title, "</h4>");
            }
            var svgId = $988cca1a6a01f734$export$bf52b203d82ff901(_this.namespace, "svg", $0ace6cd118fdb36a$export$9099ad97b570f7c(_this));
            var svgSelector = $988cca1a6a01f734$export$5d5492dec79280f1(_this.namespace, "svg", $0ace6cd118fdb36a$export$9099ad97b570f7c(_this));
            _this.component.context.html(title + '<div ' + customAttributes + '><svg id="' + svgId + '"></svg></div>');
            var that = $0ace6cd118fdb36a$export$9099ad97b570f7c(_this);
            $3bc6b949b00e2a58$export$8698b599d6b7d9a0.addGraph(function() {
                var chart = $3bc6b949b00e2a58$export$8698b599d6b7d9a0.models.multiBarHorizontalChart().x(function(d) {
                    return d.label;
                }).y(function(d) {
                    return d.value;
                }).margin({
                    top: that.marginTop,
                    right: that.marginRight,
                    bottom: that.marginBottom,
                    left: that.marginLeft
                }).showValues(that.showValues).tooltips(that.toolTips).showControls(that.controls).showLegend(that.legend).showXAxis(that.showXAxis).showYAxis(that.showYAxis);
                if (that.stacked) chart.multibar.stacked(that.stacked);
                if (that.yTickFormat) {
                    var fn = that.yTickFormat;
                    if (typeof that.yTickFormat === "string") fn = $e4a0ccd89c102736$export$6343839093e1c21d.format(that.yTickFormat);
                    chart.yAxis.tickFormat(fn);
                }
                if (that.yAxisLabel) chart.yAxis.axisLabel(that.yAxisLabel);
                if (that.xTickFormat) {
                    var fn = that.xTickFormat;
                    if (typeof that.xTickFormat === "string") fn = $e4a0ccd89c102736$export$6343839093e1c21d.format(that.xTickFormat);
                    chart.xAxis.tickFormat(fn);
                }
                if (that.xAxisLabel) chart.xAxis.axisLabel(that.xAxisLabel);
                if (that.valueFormat) {
                    // set it on the chart
                    var fn = that.valueFormat;
                    if (typeof that.valueFormat === "string") fn = $e4a0ccd89c102736$export$6343839093e1c21d.format(that.valueFormat);
                    chart.valueFormat(fn);
                    // set it on the tooltip
                    chart.tooltip.valueFormatter(fn);
                }
                if (that.noDataMessage) chart.noData(that.noDataMessage);
                if (that.color) chart.color(that.color);
                if (that.tooltipGenerator) chart.tooltip.contentGenerator(that.tooltipGenerator);
                if (that.groupSpacing) chart.groupSpacing(that.groupSpacing);
                $e4a0ccd89c102736$export$6343839093e1c21d.select(svgSelector).datum(data_series).transition().duration(that.transitionDuration).call(chart);
                if (that.xAxisLabelWrap) $530e6b01b500d249$export$e85e6981b6330071({
                    axisSelector: svgSelector + " .nv-x.nv-axis",
                    maxWidth: that.marginLeft - 5,
                    maxHeight: that.barHeight
                });
                if (that.onUpdate) that.onUpdate();
                function updateChart() {
                    chart.update();
                    if (that.xAxisLabelWrap) $530e6b01b500d249$export$e85e6981b6330071({
                        axisSelector: svgSelector + " .nv-x.nv-axis",
                        maxWidth: that.marginLeft - 5,
                        maxHeight: that.barHeight
                    });
                    if (that.onUpdate) that.onUpdate();
                }
                $3bc6b949b00e2a58$export$8698b599d6b7d9a0.utils.windowResize(updateChart);
                return chart;
            });
        };
        return _this;
    }
    return $bd1d5a355545d6ff$export$6d5fb309d07d7299;
}($97ca9eea36c86bb4$export$a695173e2ecfa9b);





var $e78f2dafe7eed7ae$export$dda19d2613327857 = /*#__PURE__*/ function(Renderer) {
    "use strict";
    $cb9ce7a7602b77d1$export$9099ad97b570f7c($e78f2dafe7eed7ae$export$dda19d2613327857, Renderer);
    function $e78f2dafe7eed7ae$export$dda19d2613327857(params) {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $e78f2dafe7eed7ae$export$dda19d2613327857);
        var _this;
        _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c($e78f2dafe7eed7ae$export$dda19d2613327857).call(this));
        _this.includeHeaderRow = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "includeHeaderRow", true);
        _this.valueFormat = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "valueFormat", false);
        _this.labelFormat = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "labelFormat", false);
        _this.headerFormat = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "headerFormat", false);
        _this.seriesOrderFunction = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "seriesOrderFunction", false);
        _this.namespace = "edges-bs3-chartdatatable";
        return _this;
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($e78f2dafe7eed7ae$export$dda19d2613327857, [
        {
            key: "draw",
            value: function draw() {
                if (!this.component.dataSeries) {
                    this.component.context.html("Loading...");
                    return;
                }
                var tableData = this._dataSeriesToTable();
                var headFrag = "";
                if (this.includeHeaderRow) {
                    for(var i = 0; i < tableData.head.length; i++){
                        var header = tableData.head[i];
                        headFrag += "<tr><td>" + header.join("</td><td>") + "</td></tr>";
                    }
                    headFrag = "<thead>".concat(headFrag, "</thead>");
                }
                var bodyFrag = "";
                for(var i = 0; i < tableData.body.length; i++){
                    var row = tableData.body[i];
                    bodyFrag += "<tr><td>" + row.join("</td><td>") + "</td></tr>";
                }
                var tableClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(this.namespace, "table", this);
                var frag = "\n            <table class=\"".concat(tableClass, "\">\n                ").concat(headFrag, "\n                <tbody>").concat(bodyFrag, "</tbody>\n            </table>\n        ");
                this.component.context.html(frag);
            }
        },
        {
            key: "_dataSeriesToTable",
            value: function _dataSeriesToTable() {
                var ds = this.component.dataSeries;
                var table = {
                    head: [],
                    body: []
                };
                if (!ds || ds.length === 0) return table;
                if (this.seriesOrderFunction) ds = this.seriesOrderFunction(ds);
                var headers = [
                    ""
                ];
                for(var i = 0; i < ds.length; i++)headers.push(this._headerFormat(ds[i].key));
                table.head.push(headers);
                var ref = ds[0].values;
                for(var i1 = 0; i1 < ref.length; i1++){
                    var refEntry = ref[i1];
                    var row = [
                        this._labelFormat(refEntry.label)
                    ];
                    for(var j = 0; j < ds.length; j++)row.push(this._valueFormat(ds[j].values[i1].value));
                    table.body.push(row);
                }
                return table;
            }
        },
        {
            key: "_headerFormat",
            value: function _headerFormat(val) {
                if (!this.headerFormat) return val;
                return this.headerFormat(val);
            }
        },
        {
            key: "_labelFormat",
            value: function _labelFormat(val) {
                if (!this.labelFormat) return val;
                return this.labelFormat(val);
            }
        },
        {
            key: "_valueFormat",
            value: function _valueFormat(val) {
                if (!this.valueFormat) return val;
                return this.valueFormat(val);
            }
        }
    ]);
    return $e78f2dafe7eed7ae$export$dda19d2613327857;
}($97ca9eea36c86bb4$export$a695173e2ecfa9b);


function $3102f9a7574bfd6e$export$8e8129eda99077(sheetName) {
    var palette = {
        investigation: false,
        export: false,
        request: false
    };
    for(var i = 0; i < document.styleSheets.length; i++){
        var sheet = document.styleSheets[i];
        if (sheet.href && sheet.href.includes(sheetName)) for(var j = 0; j < sheet.rules.length; j++){
            var rule = sheet.rules[j];
            if (rule.selectorText === "#palette #investigations") palette.investigation = rule.style.background;
            else if (rule.selectorText === "#palette #exports") palette.export = rule.style.background;
            else if (rule.selectorText === "#palette #requests") palette.request = rule.style.background;
        }
    }
    return palette;
}





var $34b4e253a08af533$export$2a05ec748c9cb22d = /*#__PURE__*/ function(Renderer) {
    "use strict";
    $cb9ce7a7602b77d1$export$9099ad97b570f7c($34b4e253a08af533$export$2a05ec748c9cb22d, Renderer);
    function $34b4e253a08af533$export$2a05ec748c9cb22d(params) {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $34b4e253a08af533$export$2a05ec748c9cb22d);
        var _this;
        _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c($34b4e253a08af533$export$2a05ec748c9cb22d).call(this, params));
        _this.title = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "title", false);
        _this.countFormat = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "countFormat", false);
        _this.noResultsText = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "noResultsText", "No data to display");
        _this.namespace = "edges-html-relativesizebars";
        return _this;
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($34b4e253a08af533$export$2a05ec748c9cb22d, [
        {
            key: "draw",
            value: function draw() {
                var title = "";
                if (this.title !== false) {
                    var titleClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(this.namespace, "title", this);
                    title = "<h4 class=\"".concat(titleClass, "\">").concat(this.title, "</h4>");
                }
                var data_series = this.component.dataSeries;
                if (!data_series || data_series.length === 0) {
                    this.component.context.html(title + this.noResultsText);
                    return;
                }
                // this renderer will only work on a single data series
                var ds = data_series[0];
                if (ds.values.length === 0) {
                    this.component.context.html(title + this.noResultsText);
                    return;
                }
                // first we need to find the largest value
                var max = 0;
                for(var i = 0; i < ds.values.length; i++){
                    var value = ds.values[i];
                    if (value.value > max) max = value.value;
                }
                var rows = "";
                for(var i1 = 0; i1 < ds.values.length; i1++){
                    var value = ds.values[i1];
                    var prog = this._calculateProgress(value.value, max);
                    var count = value.value;
                    if (this.countFormat) count = this.countFormat(count);
                    var label = "".concat(value.label, " (").concat(count, ")");
                    rows += "<tr><td>\n                <progress value=\"".concat(prog, "\" max=\"100\">").concat(prog, "</progress><br>\n                ").concat(label, "\n            </td></tr>");
                }
                var tableClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(this.namespace, "table", this);
                var frag = "".concat(title, "<br><table class=\"").concat(tableClass, "\">").concat(rows, "</table>");
                this.component.context.html(frag);
            }
        },
        {
            key: "_calculateProgress",
            value: function _calculateProgress(value, max) {
                if (max === 0) return 100;
                if (value < 0) return 0;
                return Math.floor(value / max * 100);
            }
        }
    ]);
    return $34b4e253a08af533$export$2a05ec748c9cb22d;
}($97ca9eea36c86bb4$export$a695173e2ecfa9b);






var $cae255fdf19eeff1$export$eac301b83a14e1b7 = /*#__PURE__*/ function(Component) {
    "use strict";
    $cb9ce7a7602b77d1$export$9099ad97b570f7c($cae255fdf19eeff1$export$eac301b83a14e1b7, Component);
    function $cae255fdf19eeff1$export$eac301b83a14e1b7(params) {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $cae255fdf19eeff1$export$eac301b83a14e1b7);
        var _this;
        _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c($cae255fdf19eeff1$export$eac301b83a14e1b7).call(this, params));
        ///////////////////////////////////////////////
        // fields that can be passed in, and their defaults
        // free text to prefix entry boxes with
        // this.display = getParam(params, "display", false);
        // list of field objects, which provide the field itself, and the display name.  e.g.
        // [{field : "monitor.rioxxterms:publication_date", display: "Publication Date"}]
        _this.fields = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "fields", []);
        // map from field name (as in this.field[n].field) to a function which will provide
        // the earliest allowed date for that field.  e.g.
        // {"monitor.rioxxterms:publication_date" : earliestDate}
        _this.earliest = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "earliest", {
        });
        // map from field name (as in this.field[n].field) to a function which will provide
        // the latest allowed date for that field.  e.g.
        // {"monitor.rioxxterms:publication_date" : latestDate}
        _this.latest = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "latest", {
        });
        _this.autoLookupRange = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "autoLookupRange", false);
        // category for this component, defaults to "selector"
        _this.category = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "category", "selector");
        // default earliest date to use in all cases (defaults to start of the unix epoch)
        _this.defaultEarliest = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "defaultEarliest", new Date(0));
        // default latest date to use in all cases (defaults to now)
        _this.defaultLatest = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "defaultLatest", new Date());
        ///////////////////////////////////////////////
        // fields used to track internal state
        _this.currentField = false;
        _this.fromDate = false;
        _this.toDate = false;
        _this.touched = false;
        _this.dateOptions = {
        };
        return _this;
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($cae255fdf19eeff1$export$eac301b83a14e1b7, [
        {
            key: "init",
            value: function init(edge) {
                $59ef20e355e8922b$export$9099ad97b570f7c($6f1885a119f0af4a$export$9099ad97b570f7c($cae255fdf19eeff1$export$eac301b83a14e1b7.prototype), "init", this).call(this, edge);
                // set the initial field
                this.currentField = this.fields[0].field;
                // track the last field, for query building purposes
                this.lastField = false;
                // if required, load the dates once at init
                if (!this.autoLookupRange) this.loadDates();
                else {
                    if (edge.secondaryQueries === false) edge.secondaryQueries = {
                    };
                    edge.secondaryQueries["multidaterange_" + this.id] = this.getSecondaryQueryFunction();
                }
            }
        },
        {
            key: "synchronise",
            value: function synchronise() {
                this.currentField = false;
                this.fromDate = false;
                this.toDate = false;
                if (this.autoLookupRange) for(var i = 0; i < this.fields.length; i++){
                    var field = this.fields[i].field;
                    var agg = this.edge.secondaryResults["multidaterange_" + this.id].aggregation(field);
                    var min = this.defaultEarliest;
                    var max = this.defaultLatest;
                    if (agg.min !== null) min = new Date(agg.min);
                    if (agg.max !== null) max = new Date(agg.max);
                    this.dateOptions[field] = {
                        earliest: min,
                        latest: max
                    };
                }
                for(var i = 0; i < this.fields.length; i++){
                    var field = this.fields[i].field;
                    var filters = this.edge.currentQuery.listMust(new $1f5712c12abeeb70$export$8b446892c82de644.RangeFilter({
                        field: field
                    }));
                    if (filters.length > 0) {
                        this.currentField = field;
                        var filter = filters[0];
                        this.fromDate = filter.gte;
                        this.toDate = filter.lt;
                    }
                }
                if (!this.currentField && this.fields.length > 0) this.currentField = this.fields[0].field;
            }
        },
        {
            //////////////////////////////////////////////
            // functions that can be used to trigger state change
            key: "currentEarliest",
            value: function currentEarliest() {
                if (!this.currentField) return false;
                if (this.dateOptions[this.currentField]) return this.dateOptions[this.currentField].earliest;
            }
        },
        {
            key: "currentLatest",
            value: function currentLatest() {
                if (!this.currentField) return false;
                if (this.dateOptions[this.currentField]) return this.dateOptions[this.currentField].latest;
            }
        },
        {
            key: "changeField",
            value: function changeField(newField) {
                this.lastField = this.currentField;
                if (newField !== this.currentField) {
                    this.touched = true;
                    this.currentField = newField;
                }
            }
        },
        {
            key: "setFrom",
            value: function setFrom(from) {
                if (from !== this.fromDate) {
                    this.touched = true;
                    this.fromDate = from;
                }
            }
        },
        {
            key: "setTo",
            value: function setTo(to) {
                if (to !== this.toDate) {
                    this.touched = true;
                    this.toDate = to;
                }
            }
        },
        {
            key: "triggerSearch",
            value: function triggerSearch() {
                if (this.touched) {
                    this.touched = false;
                    var nq = this.edge.cloneQuery();
                    // remove any old filters managed by this component
                    var removeCount = 0;
                    for(var i = 0; i < this.fields.length; i++){
                        var fieldName = this.fields[i].field;
                        removeCount += nq.removeMust(new $1f5712c12abeeb70$export$8b446892c82de644.RangeFilter({
                            field: fieldName
                        }));
                    }
                    // in order to avoid unnecessary searching, check the state of the data and determine
                    // if we need to.
                    // - we need to add a new filter to the query if there is a current field and one/both of from and to dates
                    // - we need to do a search if we removed filters before, or are about to add one
                    var addFilter = this.currentField && (this.toDate || this.fromDate);
                    var doSearch = removeCount > 0 || addFilter;
                    // if we're not going to do a search, return
                    if (!doSearch) return false;
                    // if there's a filter to be added, do that here
                    if (addFilter) {
                        var range = {
                            field: this.currentField
                        };
                        if (this.toDate) range["lte"] = this.formatDateForQuery(this.toDate);
                        if (this.fromDate) range["gte"] = this.formatDateForQuery(this.fromDate);
                        nq.addMust(new $1f5712c12abeeb70$export$8b446892c82de644.RangeFilter(range));
                    }
                    // push the new query and trigger the search
                    this.edge.pushQuery(nq);
                    this.edge.cycle();
                    return true;
                }
            }
        },
        {
            key: "formatDateForQuery",
            value: function formatDateForQuery(date) {
                var zeroPadder = $988cca1a6a01f734$export$48334dba1de70fbe({
                    zeroPadding: 2
                });
                return date.getUTCFullYear() + "-" + zeroPadder(date.getUTCMonth() + 1) + "-" + zeroPadder(date.getUTCDate());
            }
        },
        {
            key: "loadDates",
            value: function loadDates() {
                for(var i = 0; i < this.fields.length; i++){
                    var field = this.fields[i].field;
                    // start with the default earliest and latest
                    var early = this.defaultEarliest;
                    var late = this.defaultLatest;
                    // if specific functions are provided for getting the dates, run them
                    var earlyFn = this.earliest[field];
                    var lateFn = this.latest[field];
                    if (earlyFn) early = earlyFn();
                    if (lateFn) late = lateFn();
                    this.dateOptions[field] = {
                        earliest: early,
                        latest: late
                    };
                }
            }
        },
        {
            key: "getSecondaryQueryFunction",
            value: function getSecondaryQueryFunction() {
                var that = this;
                return function(edge) {
                    // clone the current query, which will be the basis for the averages query
                    var query = edge.cloneQuery();
                    // remove any range constraints
                    for(var i = 0; i < that.fields.length; i++){
                        var field = that.fields[i];
                        query.removeMust(new $1f5712c12abeeb70$export$8b446892c82de644.RangeFilter({
                            field: field.field
                        }));
                    }
                    // remove any existing aggregations, we don't need them
                    query.clearAggregations();
                    // add the new aggregation(s) which will actually get the data
                    for(var i = 0; i < that.fields.length; i++){
                        var field = that.fields[i].field;
                        query.addAggregation(new $1f5712c12abeeb70$export$8b446892c82de644.StatsAggregation({
                            name: field,
                            field: field
                        }));
                    }
                    // finally set the size and from parameters
                    query.size = 0;
                    query.from = 0;
                    // return the secondary query
                    return query;
                };
            }
        }
    ]);
    return $cae255fdf19eeff1$export$eac301b83a14e1b7;
}($97ca9eea36c86bb4$export$ea71c44d9cb0d048);






var $0fdc25b451091025$export$4d567bc36d967c12 = /*#__PURE__*/ function(Renderer) {
    "use strict";
    $cb9ce7a7602b77d1$export$9099ad97b570f7c($0fdc25b451091025$export$4d567bc36d967c12, Renderer);
    function $0fdc25b451091025$export$4d567bc36d967c12(params) {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $0fdc25b451091025$export$4d567bc36d967c12);
        var _this;
        _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c($0fdc25b451091025$export$4d567bc36d967c12).call(this, params));
        ///////////////////////////////////////////////////
        // parameters that can be passed in
        _this.dateFormat = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "dateFormat", "MMMM D, YYYY");
        _this.useSelect2 = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "useSelect2", false);
        _this.ranges = $988cca1a6a01f734$export$f628537ca2c78f9d(params, "ranges", false);
        ///////////////////////////////////////////////////
        // parameters for tracking internal state
        _this.dre = false;
        _this.selectId = false;
        _this.rangeId = false;
        _this.selectJq = false;
        _this.rangeJq = false;
        _this.drp = false;
        _this.namespace = "edges-bs3-multidaterangecombineselector";
        return _this;
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($0fdc25b451091025$export$4d567bc36d967c12, [
        {
            key: "draw",
            value: function draw() {
                var dre = this.component;
                var labelClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(this.namespace, "label", this);
                var inputClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(this.namespace, "input", this);
                var prefixClass = $988cca1a6a01f734$export$8820e1fbe507f6aa(this.namespace, "prefix", this);
                this.labelId = $988cca1a6a01f734$export$bf52b203d82ff901(this.namespace, dre.id + "_date-type", this);
                this.rangeId = $988cca1a6a01f734$export$bf52b203d82ff901(this.namespace, dre.id + "_range", this);
                var pluginId = $988cca1a6a01f734$export$bf52b203d82ff901(this.namespace, dre.id + "_plugin", this);
                var options = "";
                for(var i = 0; i < dre.fields.length; i++){
                    var field = dre.fields[i];
                    var selected = dre.currentField === field.field ? ' selected="selected" ' : "";
                    options += '<option value="' + field.field + '"' + selected + '>' + field.display + '</option>';
                }
                var frag = '<div class="form-inline">';
                if (dre.display) frag += '<span class="' + prefixClass + '">' + dre.display + '</span>';
                frag += '<div><span class="' + labelClass + '" name="' + this.labelId + '" id="' + this.labelId + '">' + field.display + '</span></div>';
                frag += '<div id="' + this.rangeId + '" class="' + inputClass + ' form-control">\
            <i class="far fa-calendar"></i>&nbsp;\
            <span></span>\
        </div>';
                frag += "</div>";
                dre.context.html(frag);
                var selectIdSelector = $988cca1a6a01f734$export$5d5492dec79280f1(this.namespace, dre.id + "_date-type", this);
                var rangeIdSelector = $988cca1a6a01f734$export$5d5492dec79280f1(this.namespace, dre.id + "_range", this);
                this.selectJq = dre.jq(selectIdSelector);
                this.rangeJq = dre.jq(rangeIdSelector);
                var cb = $988cca1a6a01f734$export$367047a567f2342b(this, "updateDateRange", [
                    "start",
                    "end"
                ]);
                var props = {
                    locale: {
                        format: 'DD/MM/YYYY'
                    },
                    showDropdowns: true,
                    opens: "right"
                };
                if (this.ranges) props["ranges"] = this.ranges;
                // clear out any old version of the plugin, as these are appended to the document
                // and not kept within the div controlled by this renderer
                var pluginSelector = $988cca1a6a01f734$export$5d5492dec79280f1(this.namespace, dre.id + "_plugin", this);
                $(pluginSelector).remove();
                this.rangeJq.daterangepicker(props, cb);
                this.drp = this.rangeJq.data("daterangepicker");
                this.drp.container.attr("id", pluginId).addClass("show-calendar");
                this.prepDates();
                if (this.useSelect2) this.selectJq.select2();
                $988cca1a6a01f734$export$b4cd8de5710bc55c(selectIdSelector, "change", this, "typeChanged");
            }
        },
        {
            key: "dateRangeDisplay",
            value: function dateRangeDisplay(params) {
                var start = params.start;
                var end = params.end;
                this.rangeJq.find("span").html(start.utc().format(this.dateFormat) + ' - ' + end.utc().format(this.dateFormat));
            }
        },
        {
            key: "updateDateRange",
            value: function updateDateRange(params) {
                var start = params.start;
                var end = params.end;
                // a date or type has been changed, so set up the parent object
                // ensure that the correct field is set (it may initially be not set)
                var date_type = null;
                if (this.useSelect2) date_type = this.selectJq.select2("val");
                else date_type = this.selectJq.val();
                this.component.changeField(date_type);
                this.component.setFrom(start.toDate());
                this.component.setTo(end.toDate());
                this.dateRangeDisplay(params);
                // this action should trigger a search (the parent object will
                // decide if that's required)
                var triggered = this.component.triggerSearch();
                // if a search didn't get triggered, we still may need to modify the min/max specified dates
                if (!triggered) this.prepDates();
            }
        },
        {
            key: "typeChanged",
            value: function typeChanged(element) {
                // ensure that the correct field is set (it may initially be not set)
                var date_type = null;
                if (this.useSelect2) date_type = this.selectJq.select2("val");
                else date_type = this.selectJq.val();
                this.component.changeField(date_type);
                // unset the range
                this.component.setFrom(false);
                this.component.setTo(false);
                // this action should trigger a search (the parent object will
                // decide if that's required)
                var triggered = this.component.triggerSearch();
                // if a search didn't get triggered, we still may need to modify the min/max specified dates
                if (!triggered) this.prepDates();
            }
        },
        {
            key: "prepDates",
            value: function prepDates() {
                var min = this.component.currentEarliest();
                var max = this.component.currentLatest();
                var fr = this.component.fromDate;
                var to = this.component.toDate;
                if (min) {
                    this.drp.minDate = $5d52b179cd0026b5$export$137cea99ac96085(min);
                    this.drp.setStartDate($5d52b179cd0026b5$export$137cea99ac96085(min));
                } else {
                    this.drp.minDate = $5d52b179cd0026b5$export$137cea99ac96085(this.component.defaultEarliest);
                    this.drp.setStartDate($5d52b179cd0026b5$export$137cea99ac96085(this.component.defaultEarliest));
                }
                if (max) {
                    this.drp.maxDate = $5d52b179cd0026b5$export$137cea99ac96085(max);
                    this.drp.setEndDate($5d52b179cd0026b5$export$137cea99ac96085(max));
                } else {
                    this.drp.maxDate = $5d52b179cd0026b5$export$137cea99ac96085(this.component.defaultLatest);
                    this.drp.setEndDate($5d52b179cd0026b5$export$137cea99ac96085(this.component.defaultLatest));
                }
                if (fr) {
                    // if from lies before the min date, extend the min range
                    if (fr < this.drp.minDate) this.drp.minDate = $5d52b179cd0026b5$export$137cea99ac96085(fr);
                    // if from lies after the max date, extend the max range
                    if (fr > this.drp.maxDate) this.drp.maxDate = $5d52b179cd0026b5$export$137cea99ac96085(fr);
                    this.drp.setStartDate($5d52b179cd0026b5$export$137cea99ac96085(fr));
                }
                if (to) {
                    // if to lies before the min date, extend the min range
                    if (to < this.drp.minDate) this.drp.minDate = $5d52b179cd0026b5$export$137cea99ac96085(to);
                    // if to lies after the max date, extend the max range
                    if (to > this.drp.maxDate) this.drp.maxDate = $5d52b179cd0026b5$export$137cea99ac96085(to);
                    this.drp.setEndDate($5d52b179cd0026b5$export$137cea99ac96085(to));
                }
                this.dateRangeDisplay({
                    start: this.drp.startDate,
                    end: this.drp.endDate
                });
            }
        }
    ]);
    return $0fdc25b451091025$export$4d567bc36d967c12;
}($97ca9eea36c86bb4$export$a695173e2ecfa9b);


$parcel$global.nglp = {
};
nglp.g001 = {
    active: {
    }
};
nglp.g001.init = function(params) {
    if (!params) params = {
    };
    var selector = params.selector || "#g001";
    var search_url = params.searchUrl;
    var countFormat = $988cca1a6a01f734$export$48334dba1de70fbe({
        thousandsSeparator: ","
    });
    var palette = $3102f9a7574bfd6e$export$8e8129eda99077("g001.css");
    var interactionValueMap = {
        "investigation": "VIEWS",
        "export": "EXPORTS",
        "request": "DOWNLOADS"
    };
    var presentationOrder = [
        "investigation",
        "export",
        "request"
    ];
    var initialDateRange = $ad933a42022349ce$var$getInitialDateRange();
    nglp.g001.active[selector] = new $97ca9eea36c86bb4$export$22ad9a5707a07e9c({
        selector: selector,
        template: new nglp.g001.G001Template(),
        searchUrl: search_url,
        manageUrl: false,
        openingQuery: new $1f5712c12abeeb70$export$8b446892c82de644.Query({
            must: [
                new $1f5712c12abeeb70$export$8b446892c82de644.TermsFilter({
                    field: "event.exact",
                    values: [
                        "request",
                        "investigation",
                        "export"
                    ]
                }),
                new $1f5712c12abeeb70$export$8b446892c82de644.TermsFilter({
                    field: "object_type.exact",
                    values: [
                        "article",
                        "file"
                    ]
                }),
                new $1f5712c12abeeb70$export$8b446892c82de644.RangeFilter({
                    field: "occurred_at",
                    gte: initialDateRange.gte,
                    lte: initialDateRange.lte
                }),
                new $1f5712c12abeeb70$export$8b446892c82de644.GeoBoundingBoxFilter({
                    field: "location",
                    top_left: {
                        "lat": 90,
                        "lon": -180
                    },
                    bottom_right: {
                        "lat": -90,
                        "lon": 180
                    }
                })
            ],
            size: 0,
            aggs: [
                new $1f5712c12abeeb70$export$8b446892c82de644.DateHistogramAggregation({
                    name: "occurred_at",
                    field: "occurred_at",
                    interval: "1M",
                    aggs: [
                        new $1f5712c12abeeb70$export$8b446892c82de644.TermsAggregation({
                            name: "events",
                            field: "event.exact"
                        })
                    ]
                }),
                new $1f5712c12abeeb70$export$8b446892c82de644.GeohashGridAggregation({
                    name: "geo",
                    field: "location",
                    precision: 5 // NOTE: this needs to tie up with the zoomToPrecisionMap in the component
                }),
                new $1f5712c12abeeb70$export$8b446892c82de644.TermsAggregation({
                    name: "events",
                    field: "event.exact",
                    aggs: [
                        new $1f5712c12abeeb70$export$8b446892c82de644.TermsAggregation({
                            name: "formats",
                            field: "format.exact",
                            size: 3
                        })
                    ]
                })
            ]
        }),
        components: [
            new $cae255fdf19eeff1$export$eac301b83a14e1b7({
                id: "g001-date-range",
                display: "REPORT PERIOD:<br>",
                fields: [
                    {
                        field: "occurred_at",
                        display: "Event Date"
                    }
                ],
                autoLookupRange: true,
                renderer: new $0fdc25b451091025$export$4d567bc36d967c12({
                })
            }),
            new $9cbb252f768bd5d6$export$7decb792461ef5a9({
                id: "g001-interactions-chart",
                dataFunction: $9cbb252f768bd5d6$export$d99c821b0fb86668({
                    histogramAgg: "occurred_at",
                    termsAgg: "events"
                }),
                rectangulate: true,
                seriesSort: function seriesSort(values) {
                    return values.sort(function(a, b) {
                        if (a.label < b.label) return -1;
                        if (a.label > b.label) return 1;
                        return 0;
                    });
                },
                renderer: new $5ff819424c6735fc$export$1b75c0a6cacf635c({
                    xTickFormat: function xTickFormat(d) {
                        return d3.time.format('%b %y')(new Date(d));
                    },
                    color: function color(d, i) {
                        return palette[d.key];
                    },
                    yTickFormat: ",.0f",
                    showLegend: false,
                    xAxisLabel: "Occurred At",
                    yAxisLabel: "Article Interactions",
                    marginLeft: 80,
                    stacked: true,
                    groupSpacing: 0.7
                })
            }),
            new $9cbb252f768bd5d6$export$7decb792461ef5a9({
                id: "g001-interactions-table",
                dataFunction: $9cbb252f768bd5d6$export$d99c821b0fb86668({
                    histogramAgg: "occurred_at",
                    termsAgg: "events"
                }),
                rectangulate: true,
                seriesSort: function seriesSort(values) {
                    return values.sort(function(a, b) {
                        if (a.label < b.label) return -1;
                        if (a.label > b.label) return 1;
                        return 0;
                    });
                },
                renderer: new $e78f2dafe7eed7ae$export$dda19d2613327857({
                    labelFormat: function labelFormat(d) {
                        return d3.time.format('%b %y')(new Date(d));
                    },
                    valueFormat: countFormat,
                    headerFormat: function headerFormat(d) {
                        return interactionValueMap[d] || d;
                    },
                    seriesOrderFunction: function seriesOrderFunction(dataSeries) {
                        var ordered = [];
                        for(var j = 0; j < presentationOrder.length; j++)for(var i = 0; i < dataSeries.length; i++){
                            var series = dataSeries[i];
                            if (series.key === presentationOrder[j]) ordered.push(series);
                        }
                        return ordered;
                    }
                })
            }),
            new $6ca84bc2e35e6866$export$c57445924c23547b({
                id: "g001-interactions-map",
                geoHashAggregation: "geo",
                zoomToPrecisionMap: {
                    0: 5,
                    3: 7,
                    5: 9
                },
                renderer: new $a6afb27f79910c9a$export$a0bd1dffd4b583c({
                    cluster: true,
                    labelFunction: function(loc) {
                        // be very careful changing this, the MapPointRenderer relies on this as the way
                        // to find out what the count of the nested cluster is
                        return loc.count.toString();
                    },
                    renderCluster: new $ad933a42022349ce$var$MapPointRenderer(),
                    reQueryOnBoundsChange: true,
                    clusterIcons: {
                        0: "/static/img/m1.png"
                    }
                })
            }),
            new $eb9467bf48f108cb$export$845e14b82c9a4f95({
                id: "g001-interactions",
                field: "event.exact",
                syncCounts: false,
                lifecycle: "update",
                updateType: "fresh",
                orderBy: "term",
                orderDir: "asc",
                valueMap: interactionValueMap,
                renderer: new $29578ea610930bce$export$d3ad1026b19abbfd({
                    title: "Interactions",
                    open: true,
                    togglable: false,
                    showCount: true,
                    countFormat: countFormat,
                    fixedTerms: presentationOrder
                })
            }),
            new $eb9467bf48f108cb$export$845e14b82c9a4f95({
                id: "g001-format",
                field: "format.exact",
                size: 10,
                syncCounts: false,
                lifecycle: "static",
                orderBy: "count",
                orderDir: "desc",
                valueFunction: function(v) {
                    return v.toUpperCase();
                },
                renderer: new $908df9636949411c$export$4b392426dd40333d({
                    title: "Format",
                    open: true,
                    togglable: false,
                    showCount: true,
                    countFormat: countFormat
                })
            }),
            new $9cbb252f768bd5d6$export$7decb792461ef5a9({
                id: "g001-top-downloads",
                dataFunction: $9cbb252f768bd5d6$export$4c2a251a86bb620b({
                    aggs: [
                        {
                            events: {
                                keys: [
                                    "request"
                                ],
                                aggs: [
                                    "formats"
                                ]
                            }
                        }
                    ],
                    seriesName: "request"
                }),
                // renderer: new HorizontalMultibarRenderer({
                //     title: "Downloads",
                //     legend: false,
                //     valueFormat: countFormat,
                //     color: function(d, i) {
                //         return palette[d.key]
                //     },
                //     showXAxis: true,
                //     showYAxis: false,
                //     marginLeft: 0,
                //     marginRight: 0,
                //     marginTop: 0,
                //     marginBottom: 0,
                //     groupSpacing: 0.7,
                //     onUpdate: () => {
                //         let ticks = $("#g001-top-downloads .tick text");
                //         for (let i = 0; i < ticks.length; i++) {
                //             let tick = $(ticks[i]);
                //             tick.attr("x", 0);
                //             tick.attr("y", 20);
                //             tick.css("text-anchor", "start");
                //         }
                //     }
                // })
                renderer: new $34b4e253a08af533$export$2a05ec748c9cb22d({
                    title: "Downloads",
                    countFormat: countFormat
                })
            }),
            new $9cbb252f768bd5d6$export$7decb792461ef5a9({
                id: "g001-top-exports",
                dataFunction: $9cbb252f768bd5d6$export$4c2a251a86bb620b({
                    aggs: [
                        {
                            events: {
                                keys: [
                                    "export"
                                ],
                                aggs: [
                                    "formats"
                                ]
                            }
                        }
                    ],
                    seriesName: "export"
                }),
                renderer: new $34b4e253a08af533$export$2a05ec748c9cb22d({
                    title: "Exports",
                    countFormat: countFormat
                })
            })
        ]
    });
};
nglp.g001.G001Template = /*#__PURE__*/ (function(Template) {
    "use strict";
    $cb9ce7a7602b77d1$export$9099ad97b570f7c(_class, Template);
    function _class() {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, _class);
        var _this;
        _this = $968cbe9a7612a00d$export$9099ad97b570f7c(this, $6f1885a119f0af4a$export$9099ad97b570f7c(_class).call(this));
        _this.edge = false;
        _this.showing = "chart";
        _this.hidden = {
        };
        _this.namespace = "g001-template";
        return _this;
    }
    $6b21f555626aa41c$export$9099ad97b570f7c(_class, [
        {
            key: "draw",
            value: function draw(edge) {
                this.edge = edge;
                var checkboxId = $988cca1a6a01f734$export$bf52b203d82ff901(this.namespace, "show-as-table");
                var frame = "\n<div class=\"header header--main\">\n    <div class=\"container\">   \n        <div class=\"row\">\n            <h1>G001: Article  Downloads for  Unit Administrators</h1>\n            <h2>Article downloads by format, including landing page and metadata exports in aggregate</h2>\n        </div>\n    </div>\n</div>\n<div class=\"header header--secondary\">\n    <div class=\"container\">\n        <nav class=\"navbar navbar-expand-md\">\n            <div class=\"navbar\">\n                <ul class=\"navbar-nav me-auto\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">Go back to Dashboard</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">Print this view to PDF</a>\n                    </li>\n                </ul>\n                <form class=\"form-inline ms-2\">\n                    <div id=\"g001-date-range\"></div>\n                </form>\n            </div>\n        </nav>\n    </div>\n</div>\n\n<div class=\"container\">\n        <div class=\"row report-area justify-content-between\">\n            <div class=\"col-md-auto\">\n                <div class=\"facet\" id=\"g001-interactions\"></div>\n                <div class=\"facet\" id=\"g001-format\"></div>\n            </div>\n            <div class=\"col\">\n                <p class=\"showtable\"><input type=\"checkbox\" name=\"".concat(checkboxId, "\" id=\"").concat(checkboxId, "\"><label for=\"").concat(checkboxId, "\">Show as table</label></p>\n                <div class=\"data-area\" id=\"g001-interactions-chart\"></div>\n                <div class=\"data-area\" id=\"g001-interactions-table\" style=\"display:none\">TABLE HERE</div>\n                <div class=\"data-area\" id=\"g001-interactions-map\"></div>\n                <div class=\"data-area\" class=\"row formats-header\">\n                    <h1>Top 3 Formats</h1>\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <div id=\"g001-top-downloads\"></div>\n                        </div>\n                        <div class=\"col-md-4 offset-md-1\">\n                            <div id=\"g001-top-exports\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n</div>");
                edge.context.html(frame);
                var checkboxSelector = $988cca1a6a01f734$export$5d5492dec79280f1(this.namespace, "show-as-table");
                $988cca1a6a01f734$export$b4cd8de5710bc55c(checkboxSelector, "change", this, "toggleTable");
            }
        },
        {
            key: "toggleTable",
            value: function toggleTable() {
                var chart = this.edge.jq("#g001-interactions-chart");
                var table = this.edge.jq("#g001-interactions-table");
                if (this.showing === "chart") {
                    chart.hide();
                    table.show();
                    this.showing = "table";
                } else {
                    table.hide();
                    chart.show();
                    this.showing = "chart";
                    this.edge.getComponent({
                        id: "g001-interactions-chart"
                    }).draw();
                }
            }
        }
    ]);
    return _class;
})($97ca9eea36c86bb4$export$93af88fe68eea917);
var $ad933a42022349ce$var$MapPointRenderer = /*#__PURE__*/ function() {
    "use strict";
    function $ad933a42022349ce$var$MapPointRenderer(params) {
        $1d4692efe908bac5$export$9099ad97b570f7c(this, $ad933a42022349ce$var$MapPointRenderer);
    }
    $6b21f555626aa41c$export$9099ad97b570f7c($ad933a42022349ce$var$MapPointRenderer, [
        {
            key: "render",
            value: function render(cluster, stats) {
                var sum = 0;
                for(var i = 0; i < cluster.markers.length; i++){
                    var marker = cluster.markers[i];
                    sum += parseInt(marker.label.text);
                }
                return new google.maps.Marker({
                    position: cluster.position,
                    icon: "/static/img/m1.png",
                    label: {
                        text: String(sum)
                    }
                });
            }
        }
    ]);
    return $ad933a42022349ce$var$MapPointRenderer;
}();
function $ad933a42022349ce$var$getInitialDateRange() {
    var now = $5d52b179cd0026b5$export$137cea99ac96085();
    var lte = now.format("YYYY-MM-DD");
    var gte = now.subtract(1, "years").format("YYYY-MM-DD");
    return {
        gte: gte,
        lte: lte
    };
}
var $ad933a42022349ce$export$9099ad97b570f7c = nglp;

})();
//# sourceMappingURL=g001.js.map
