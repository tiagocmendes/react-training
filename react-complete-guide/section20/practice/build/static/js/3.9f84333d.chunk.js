(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{36:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,c=[],a=!0,i=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);a=!0);}catch(s){i=!0,o=s}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return o}))},39:function(t,e,n){t.exports={quote:"HighlightedQuote_quote__nE9T6"}},40:function(t,e,n){t.exports={comments:"Comments_comments__iZX-v"}},41:function(t,e,n){t.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},47:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(9),c=n(39),a=n.n(c),i=n(3),s=function(t){return Object(i.jsxs)("figure",{className:a.a.quote,children:[Object(i.jsx)("p",{children:t.text}),Object(i.jsx)("figcaption",{children:t.author})]})},u=n(36),l=n(0),m=n(40),d=n.n(m),j=n(41),b=n.n(j),f=function(t){var e=Object(l.useRef)(),n=function(t){t.preventDefault()};return Object(i.jsxs)("form",{className:b.a.form,onSubmit:n,children:[Object(i.jsxs)("div",{className:b.a.control,onSubmit:n,children:[Object(i.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(i.jsx)("textarea",{id:"comment",rows:"5",ref:e})]}),Object(i.jsx)("div",{className:b.a.actions,children:Object(i.jsx)("button",{className:"btn",children:"Add Comment"})})]})},h=function(){var t=Object(l.useState)(!1),e=Object(u.a)(t,2),n=e[0],r=e[1];return Object(i.jsxs)("section",{className:d.a.comments,children:[Object(i.jsx)("h2",{children:"User Comments"}),!n&&Object(i.jsx)("button",{className:"btn",onClick:function(){r(!0)},children:"Add a Comment"}),n&&Object(i.jsx)(f,{}),Object(i.jsx)("p",{children:"Comments..."})]})},x=[{id:"q1",author:"Ronaldo",text:"Sou lindo"},{id:"q2",author:"Messi",text:"Eu sou mais lindo"}];e.default=function(){var t=Object(r.k)(),e=Object(r.j)(),n=x.find((function(t){return t.id===e.quoteId}));return n?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(s,{text:n.text,author:n.author}),Object(i.jsx)(r.c,{path:t.path,exact:!0,children:Object(i.jsx)("div",{className:"centered",children:Object(i.jsx)(o.b,{className:"btn--flat",to:"".concat(t.url,"/comments"),children:"Load comments"})})}),Object(i.jsx)(r.c,{path:"".concat(t.path,"/comments"),component:h})]}):Object(i.jsx)("h1",{children:"No quote found!"})}}}]);
//# sourceMappingURL=3.9f84333d.chunk.js.map