(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{37:function(t,e,s){t.exports={item:"QuoteItem_item__2dOvb"}},38:function(t,e,s){t.exports={list:"QuoteList_list__3pzcl",sorting:"QuoteList_sorting__rL6H1"}},48:function(t,e,s){"use strict";s.r(e);var i=s(0),c=s(1),n=s(9),o=s(37),r=s.n(o),u=s(3),a=function(t){return Object(u.jsxs)("li",{className:r.a.item,children:[Object(u.jsxs)("figure",{children:[Object(u.jsx)("blockquote",{children:Object(u.jsx)("p",{children:t.text})}),Object(u.jsx)("figcaption",{children:t.author})]}),Object(u.jsx)(n.b,{className:"btn",to:"/quotes/".concat(t.id),children:"View Fullscreen"})]})},d=s(38),l=s.n(d),j=function(t){var e,s,n=Object(c.h)(),o=Object(c.i)(),r="asc"===new URLSearchParams(o.search).get("sort");return Object(u.jsxs)(i.Fragment,{children:[Object(u.jsx)("div",{className:l.a.sorting,children:Object(u.jsxs)("button",{onClick:function(){n.push("/quotes?sort="+(r?"desc":"asc"))},children:["Sort ",r?"Descending":"Ascending"]})}),Object(u.jsx)("ul",{className:l.a.list,children:(e=t.quotes,s=r,e.sort((function(t,e){return s?t.id>e.id?1:-1:t.id<e.id?1:-1}))).map((function(t){return Object(u.jsx)(a,{id:t.id,author:t.author,text:t.text},t.id)}))})]})},h=[{id:"q1",author:"Ronaldo",text:"Sou lindo"},{id:"q2",author:"Messi",text:"Eu sou mais lindo"}];e.default=function(){return Object(u.jsx)(j,{quotes:h})}}}]);
//# sourceMappingURL=6.99806ec8.chunk.js.map