define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

this["Templates"] = this["Templates"] || {};

this["Templates"]["group/item.jade"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<li class="group-item">');
var __val__ = name
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
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