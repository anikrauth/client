(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4726],{5645:function(s,e,n){"use strict";var r=n(5893);e.Z=function(){return(0,r.jsx)("section",{className:"breadcrumb",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("ul",{className:"breadcrumb-list",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)("i",{className:"icon-home"})})}),(0,r.jsx)("li",{children:"Search Result"})]})})})}},1878:function(s,e,n){"use strict";n.d(e,{Z:function(){return d}});var r=n(5893),c=n(7294),t=n(1378),i=n(4972),l=n(1471),a=function(){return(0,r.jsxs)("section",{className:"products-list",children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)(l.Z,{}),(0,r.jsx)(l.Z,{}),(0,r.jsx)(l.Z,{}),(0,r.jsx)(l.Z,{}),(0,r.jsx)(l.Z,{})]})},o=function(){var s=(0,t.ZP)("/api/products",(function(s){return fetch(s).then((function(s){return s.json()}))})),e=s.data;return s.error?(0,r.jsx)("div",{children:"Failed to load users"}):(0,r.jsxs)(r.Fragment,{children:[!e&&(0,r.jsx)(a,{}),e&&(0,r.jsx)("section",{className:"products-list",children:e.map((function(s){return(0,r.jsx)(i.Z,{discount:s.discount,id:s.id,price:s.price,currentPrice:s.currentPrice,productImage:s.images[0],name:s.name},s.id)}))})]})},d=function(){var s=(0,c.useState)(!1),e=s[0],n=s[1];return(0,r.jsxs)("section",{className:"products-content",children:[(0,r.jsxs)("div",{className:"products-content__intro",children:[(0,r.jsxs)("h2",{children:["Men's Tops ",(0,r.jsx)("span",{children:"(133)"})]}),(0,r.jsx)("button",{type:"button",onClick:function(){return n(!e)},className:"products-filter-btn",children:(0,r.jsx)("i",{className:"icon-filters"})}),(0,r.jsxs)("form",{className:"products-content__filter ".concat(e?"products-order-open":""),children:[(0,r.jsxs)("div",{className:"products__filter__select",children:[(0,r.jsx)("h4",{children:"Show products: "}),(0,r.jsx)("div",{className:"select-wrapper",children:(0,r.jsx)("select",{children:(0,r.jsx)("option",{children:"Popular"})})})]}),(0,r.jsxs)("div",{className:"products__filter__select",children:[(0,r.jsx)("h4",{children:"Sort by: "}),(0,r.jsx)("div",{className:"select-wrapper",children:(0,r.jsx)("select",{children:(0,r.jsx)("option",{children:"Popular"})})})]})]})]}),(0,r.jsx)(o,{})]})}},9895:function(s,e,n){"use strict";n.r(e);var r=n(5893),c=n(3765),t=n(5077),i=n(5645),l=n(8213),a=n(1878);e.default=function(){return(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)("section",{className:"products-page",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)(a.Z,{})]})}),(0,r.jsx)(t.Z,{})]})}},6490:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search-result",function(){return n(9895)}])}},function(s){s.O(0,[2937,6317,2283,6486,76,176,9774,2888,179],(function(){return e=6490,s(s.s=e);var e}));var e=s.O();_N_E=e}]);