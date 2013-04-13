define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

this["Templates"] = this["Templates"] || {};

this["Templates"]["group/detail.jade"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
}
return buf.join("");
};

this["Templates"]["group/item.jade"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<a');
buf.push(attrs({ 'href':(model.getPermalink()) }, {"href":true}));
buf.push('>');
var __val__ = attributes.name
buf.push(null == __val__ ? "" : __val__);
buf.push('</a>');
}
return buf.join("");
};

this["Templates"]["group/list.jade"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<ul class="groups"></ul>');
}
return buf.join("");
};

this["Templates"]["home/home.jade"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="home"></div>');
}
return buf.join("");
};

return this["Templates"];

});