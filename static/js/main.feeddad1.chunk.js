(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),i=n(3),o=n(6),r=(n(12),n(13),n(1)),a=n(0),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u=function(){var t=Object(r.useState)(l),e=Object(o.a)(t,2),n=e[0],s=e[1],c=Object(r.useState)(""),u=Object(o.a)(c,2),b=u[0],j=u[1];return Object(a.jsxs)("div",{className:"section content",children:[Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("button",{type:"button",className:b.includes("alphabet")?"button is-info":"button is-info is-light",onClick:function(){s(Object(i.a)(n).sort((function(t,e){return t.localeCompare(e)}))),j("alphabet")},children:"Sort alphabetically"}),Object(a.jsx)("button",{type:"button",className:b.includes("length")?"button is-success":"button is-success is-light",onClick:function(){s(Object(i.a)(n).sort((function(t,e){return t.length-e.length}))),j("length")},children:"Sort by length"}),Object(a.jsx)("button",{type:"button",className:b.includes("reverse")?"button is-warning":"button is-warning is-light",onClick:function(){b.includes("reverse")?(s(Object(i.a)(n).reverse()),j(b.split(" ")[0])):(s(Object(i.a)(n).reverse()),j("".concat(b," reverse")))},children:"Reverse"}),b.length>0&&Object(a.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(l),j("")},children:"Reset"})]}),Object(a.jsx)("ul",{children:n.map((function(t){return Object(a.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(a.jsx)(u,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.feeddad1.chunk.js.map