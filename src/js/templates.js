define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

this["Templates"] = this["Templates"] || {};

this["Templates"]["group/detail.jade"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<ul>');
// iterate model
;(function(){
  if ('number' == typeof model.length) {

    for (var key = 0, $$l = model.length; key < $$l; key++) {
      var val = model[key];

buf.push('<li>     ');
 if ( key == 'parties' )
{
buf.push('<strong>' + escape((interp = key) == null ? '' : interp) + ' (' + escape((interp = val.length) == null ? '' : interp) + ') :</strong><ul>');
// iterate val
;(function(){
  if ('number' == typeof val.length) {

    for (var $index = 0, $$l = val.length; $index < $$l; $index++) {
      var party = val[$index];

// iterate party
;(function(){
  if ('number' == typeof party.length) {

    for (var key = 0, $$l = party.length; key < $$l; key++) {
      var party_val = party[key];

 if ( key == 'party' )
{
buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong><ul>');
// iterate party_val
;(function(){
  if ('number' == typeof party_val.length) {

    for (var key = 0, $$l = party_val.length; key < $$l; key++) {
      var party_detail = party_val[key];

buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong>');
 if ( key == 'logo' )
{
if (party_detail)
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (base_url) + "" + (party_detail) + "") }, {"src":true}));
buf.push('/>');
}
 else
{
buf.push('<span>Sin logo</span>');
}
}
 else if ( key == 'members' )
{
buf.push('<ul>');
// iterate party_detail
;(function(){
  if ('number' == typeof party_detail.length) {

    for (var $index = 0, $$l = party_detail.length; $index < $$l; $index++) {
      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var $index in party_detail) {
      $$l++;      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul>');
}
 else                        
{
var __val__ = party_detail
buf.push(null == __val__ ? "" : __val__);
}
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var key in party_val) {
      $$l++;      var party_detail = party_val[key];

buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong>');
 if ( key == 'logo' )
{
if (party_detail)
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (base_url) + "" + (party_detail) + "") }, {"src":true}));
buf.push('/>');
}
 else
{
buf.push('<span>Sin logo</span>');
}
}
 else if ( key == 'members' )
{
buf.push('<ul>');
// iterate party_detail
;(function(){
  if ('number' == typeof party_detail.length) {

    for (var $index = 0, $$l = party_detail.length; $index < $$l; $index++) {
      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var $index in party_detail) {
      $$l++;      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul>');
}
 else                        
{
var __val__ = party_detail
buf.push(null == __val__ ? "" : __val__);
}
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul></li>');
}
    }

  } else {
    var $$l = 0;
    for (var key in party) {
      $$l++;      var party_val = party[key];

 if ( key == 'party' )
{
buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong><ul>');
// iterate party_val
;(function(){
  if ('number' == typeof party_val.length) {

    for (var key = 0, $$l = party_val.length; key < $$l; key++) {
      var party_detail = party_val[key];

buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong>');
 if ( key == 'logo' )
{
if (party_detail)
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (base_url) + "" + (party_detail) + "") }, {"src":true}));
buf.push('/>');
}
 else
{
buf.push('<span>Sin logo</span>');
}
}
 else if ( key == 'members' )
{
buf.push('<ul>');
// iterate party_detail
;(function(){
  if ('number' == typeof party_detail.length) {

    for (var $index = 0, $$l = party_detail.length; $index < $$l; $index++) {
      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var $index in party_detail) {
      $$l++;      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul>');
}
 else                        
{
var __val__ = party_detail
buf.push(null == __val__ ? "" : __val__);
}
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var key in party_val) {
      $$l++;      var party_detail = party_val[key];

buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong>');
 if ( key == 'logo' )
{
if (party_detail)
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (base_url) + "" + (party_detail) + "") }, {"src":true}));
buf.push('/>');
}
 else
{
buf.push('<span>Sin logo</span>');
}
}
 else if ( key == 'members' )
{
buf.push('<ul>');
// iterate party_detail
;(function(){
  if ('number' == typeof party_detail.length) {

    for (var $index = 0, $$l = party_detail.length; $index < $$l; $index++) {
      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var $index in party_detail) {
      $$l++;      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul>');
}
 else                        
{
var __val__ = party_detail
buf.push(null == __val__ ? "" : __val__);
}
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul></li>');
}
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var $index in val) {
      $$l++;      var party = val[$index];

// iterate party
;(function(){
  if ('number' == typeof party.length) {

    for (var key = 0, $$l = party.length; key < $$l; key++) {
      var party_val = party[key];

 if ( key == 'party' )
{
buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong><ul>');
// iterate party_val
;(function(){
  if ('number' == typeof party_val.length) {

    for (var key = 0, $$l = party_val.length; key < $$l; key++) {
      var party_detail = party_val[key];

buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong>');
 if ( key == 'logo' )
{
if (party_detail)
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (base_url) + "" + (party_detail) + "") }, {"src":true}));
buf.push('/>');
}
 else
{
buf.push('<span>Sin logo</span>');
}
}
 else if ( key == 'members' )
{
buf.push('<ul>');
// iterate party_detail
;(function(){
  if ('number' == typeof party_detail.length) {

    for (var $index = 0, $$l = party_detail.length; $index < $$l; $index++) {
      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var $index in party_detail) {
      $$l++;      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul>');
}
 else                        
{
var __val__ = party_detail
buf.push(null == __val__ ? "" : __val__);
}
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var key in party_val) {
      $$l++;      var party_detail = party_val[key];

buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong>');
 if ( key == 'logo' )
{
if (party_detail)
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (base_url) + "" + (party_detail) + "") }, {"src":true}));
buf.push('/>');
}
 else
{
buf.push('<span>Sin logo</span>');
}
}
 else if ( key == 'members' )
{
buf.push('<ul>');
// iterate party_detail
;(function(){
  if ('number' == typeof party_detail.length) {

    for (var $index = 0, $$l = party_detail.length; $index < $$l; $index++) {
      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var $index in party_detail) {
      $$l++;      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul>');
}
 else                        
{
var __val__ = party_detail
buf.push(null == __val__ ? "" : __val__);
}
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul></li>');
}
    }

  } else {
    var $$l = 0;
    for (var key in party) {
      $$l++;      var party_val = party[key];

 if ( key == 'party' )
{
buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong><ul>');
// iterate party_val
;(function(){
  if ('number' == typeof party_val.length) {

    for (var key = 0, $$l = party_val.length; key < $$l; key++) {
      var party_detail = party_val[key];

buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong>');
 if ( key == 'logo' )
{
if (party_detail)
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (base_url) + "" + (party_detail) + "") }, {"src":true}));
buf.push('/>');
}
 else
{
buf.push('<span>Sin logo</span>');
}
}
 else if ( key == 'members' )
{
buf.push('<ul>');
// iterate party_detail
;(function(){
  if ('number' == typeof party_detail.length) {

    for (var $index = 0, $$l = party_detail.length; $index < $$l; $index++) {
      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var $index in party_detail) {
      $$l++;      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul>');
}
 else                        
{
var __val__ = party_detail
buf.push(null == __val__ ? "" : __val__);
}
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var key in party_val) {
      $$l++;      var party_detail = party_val[key];

buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong>');
 if ( key == 'logo' )
{
if (party_detail)
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (base_url) + "" + (party_detail) + "") }, {"src":true}));
buf.push('/>');
}
 else
{
buf.push('<span>Sin logo</span>');
}
}
 else if ( key == 'members' )
{
buf.push('<ul>');
// iterate party_detail
;(function(){
  if ('number' == typeof party_detail.length) {

    for (var $index = 0, $$l = party_detail.length; $index < $$l; $index++) {
      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var $index in party_detail) {
      $$l++;      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul>');
}
 else                        
{
var __val__ = party_detail
buf.push(null == __val__ ? "" : __val__);
}
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul></li>');
}
    }

  }
}).call(this);

    }

  }
}).call(this);

buf.push('</ul>');
}
 else
{
buf.push('<strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong>');
var __val__ = val        
buf.push(null == __val__ ? "" : __val__);
}
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var key in model) {
      $$l++;      var val = model[key];

buf.push('<li>     ');
 if ( key == 'parties' )
{
buf.push('<strong>' + escape((interp = key) == null ? '' : interp) + ' (' + escape((interp = val.length) == null ? '' : interp) + ') :</strong><ul>');
// iterate val
;(function(){
  if ('number' == typeof val.length) {

    for (var $index = 0, $$l = val.length; $index < $$l; $index++) {
      var party = val[$index];

// iterate party
;(function(){
  if ('number' == typeof party.length) {

    for (var key = 0, $$l = party.length; key < $$l; key++) {
      var party_val = party[key];

 if ( key == 'party' )
{
buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong><ul>');
// iterate party_val
;(function(){
  if ('number' == typeof party_val.length) {

    for (var key = 0, $$l = party_val.length; key < $$l; key++) {
      var party_detail = party_val[key];

buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong>');
 if ( key == 'logo' )
{
if (party_detail)
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (base_url) + "" + (party_detail) + "") }, {"src":true}));
buf.push('/>');
}
 else
{
buf.push('<span>Sin logo</span>');
}
}
 else if ( key == 'members' )
{
buf.push('<ul>');
// iterate party_detail
;(function(){
  if ('number' == typeof party_detail.length) {

    for (var $index = 0, $$l = party_detail.length; $index < $$l; $index++) {
      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var $index in party_detail) {
      $$l++;      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul>');
}
 else                        
{
var __val__ = party_detail
buf.push(null == __val__ ? "" : __val__);
}
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var key in party_val) {
      $$l++;      var party_detail = party_val[key];

buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong>');
 if ( key == 'logo' )
{
if (party_detail)
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (base_url) + "" + (party_detail) + "") }, {"src":true}));
buf.push('/>');
}
 else
{
buf.push('<span>Sin logo</span>');
}
}
 else if ( key == 'members' )
{
buf.push('<ul>');
// iterate party_detail
;(function(){
  if ('number' == typeof party_detail.length) {

    for (var $index = 0, $$l = party_detail.length; $index < $$l; $index++) {
      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var $index in party_detail) {
      $$l++;      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul>');
}
 else                        
{
var __val__ = party_detail
buf.push(null == __val__ ? "" : __val__);
}
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul></li>');
}
    }

  } else {
    var $$l = 0;
    for (var key in party) {
      $$l++;      var party_val = party[key];

 if ( key == 'party' )
{
buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong><ul>');
// iterate party_val
;(function(){
  if ('number' == typeof party_val.length) {

    for (var key = 0, $$l = party_val.length; key < $$l; key++) {
      var party_detail = party_val[key];

buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong>');
 if ( key == 'logo' )
{
if (party_detail)
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (base_url) + "" + (party_detail) + "") }, {"src":true}));
buf.push('/>');
}
 else
{
buf.push('<span>Sin logo</span>');
}
}
 else if ( key == 'members' )
{
buf.push('<ul>');
// iterate party_detail
;(function(){
  if ('number' == typeof party_detail.length) {

    for (var $index = 0, $$l = party_detail.length; $index < $$l; $index++) {
      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var $index in party_detail) {
      $$l++;      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul>');
}
 else                        
{
var __val__ = party_detail
buf.push(null == __val__ ? "" : __val__);
}
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var key in party_val) {
      $$l++;      var party_detail = party_val[key];

buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong>');
 if ( key == 'logo' )
{
if (party_detail)
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (base_url) + "" + (party_detail) + "") }, {"src":true}));
buf.push('/>');
}
 else
{
buf.push('<span>Sin logo</span>');
}
}
 else if ( key == 'members' )
{
buf.push('<ul>');
// iterate party_detail
;(function(){
  if ('number' == typeof party_detail.length) {

    for (var $index = 0, $$l = party_detail.length; $index < $$l; $index++) {
      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var $index in party_detail) {
      $$l++;      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul>');
}
 else                        
{
var __val__ = party_detail
buf.push(null == __val__ ? "" : __val__);
}
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul></li>');
}
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var $index in val) {
      $$l++;      var party = val[$index];

// iterate party
;(function(){
  if ('number' == typeof party.length) {

    for (var key = 0, $$l = party.length; key < $$l; key++) {
      var party_val = party[key];

 if ( key == 'party' )
{
buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong><ul>');
// iterate party_val
;(function(){
  if ('number' == typeof party_val.length) {

    for (var key = 0, $$l = party_val.length; key < $$l; key++) {
      var party_detail = party_val[key];

buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong>');
 if ( key == 'logo' )
{
if (party_detail)
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (base_url) + "" + (party_detail) + "") }, {"src":true}));
buf.push('/>');
}
 else
{
buf.push('<span>Sin logo</span>');
}
}
 else if ( key == 'members' )
{
buf.push('<ul>');
// iterate party_detail
;(function(){
  if ('number' == typeof party_detail.length) {

    for (var $index = 0, $$l = party_detail.length; $index < $$l; $index++) {
      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var $index in party_detail) {
      $$l++;      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul>');
}
 else                        
{
var __val__ = party_detail
buf.push(null == __val__ ? "" : __val__);
}
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var key in party_val) {
      $$l++;      var party_detail = party_val[key];

buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong>');
 if ( key == 'logo' )
{
if (party_detail)
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (base_url) + "" + (party_detail) + "") }, {"src":true}));
buf.push('/>');
}
 else
{
buf.push('<span>Sin logo</span>');
}
}
 else if ( key == 'members' )
{
buf.push('<ul>');
// iterate party_detail
;(function(){
  if ('number' == typeof party_detail.length) {

    for (var $index = 0, $$l = party_detail.length; $index < $$l; $index++) {
      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var $index in party_detail) {
      $$l++;      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul>');
}
 else                        
{
var __val__ = party_detail
buf.push(null == __val__ ? "" : __val__);
}
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul></li>');
}
    }

  } else {
    var $$l = 0;
    for (var key in party) {
      $$l++;      var party_val = party[key];

 if ( key == 'party' )
{
buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong><ul>');
// iterate party_val
;(function(){
  if ('number' == typeof party_val.length) {

    for (var key = 0, $$l = party_val.length; key < $$l; key++) {
      var party_detail = party_val[key];

buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong>');
 if ( key == 'logo' )
{
if (party_detail)
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (base_url) + "" + (party_detail) + "") }, {"src":true}));
buf.push('/>');
}
 else
{
buf.push('<span>Sin logo</span>');
}
}
 else if ( key == 'members' )
{
buf.push('<ul>');
// iterate party_detail
;(function(){
  if ('number' == typeof party_detail.length) {

    for (var $index = 0, $$l = party_detail.length; $index < $$l; $index++) {
      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var $index in party_detail) {
      $$l++;      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul>');
}
 else                        
{
var __val__ = party_detail
buf.push(null == __val__ ? "" : __val__);
}
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var key in party_val) {
      $$l++;      var party_detail = party_val[key];

buf.push('<li><strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong>');
 if ( key == 'logo' )
{
if (party_detail)
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (base_url) + "" + (party_detail) + "") }, {"src":true}));
buf.push('/>');
}
 else
{
buf.push('<span>Sin logo</span>');
}
}
 else if ( key == 'members' )
{
buf.push('<ul>');
// iterate party_detail
;(function(){
  if ('number' == typeof party_detail.length) {

    for (var $index = 0, $$l = party_detail.length; $index < $$l; $index++) {
      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  } else {
    var $$l = 0;
    for (var $index in party_detail) {
      $$l++;      var member_url = party_detail[$index];

buf.push('<li><strong>url: </strong>');
var __val__ = member_url
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul>');
}
 else                        
{
var __val__ = party_detail
buf.push(null == __val__ ? "" : __val__);
}
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul></li>');
}
    }

  }
}).call(this);

    }

  }
}).call(this);

buf.push('</ul>');
}
 else
{
buf.push('<strong>' + escape((interp = key) == null ? '' : interp) + ' : </strong>');
var __val__ = val        
buf.push(null == __val__ ? "" : __val__);
}
buf.push('</li>');
    }

  }
}).call(this);

buf.push('</ul>');
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