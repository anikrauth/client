(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8063],{3019:function(e,s,r){"use strict";r.r(s);var t=r(5893),n=r(7294),c=r(5459);s.default=function(){var e=(0,n.useState)(!1);e[0],e[1];return(0,t.jsx)("section",{className:"products-content",children:(0,t.jsx)(c.default,{})})}},5459:function(e,s,r){"use strict";r.r(s);var t=r(5893),n=r(1378),c=r(4972),a=r(9538);s.default=function(){var e=(0,n.ZP)("/api/products",(function(e){return fetch(e).then((function(e){return e.json()}))})),s=e.data;return e.error?(0,t.jsx)("div",{children:"Failed to load users"}):(0,t.jsxs)(t.Fragment,{children:[!s&&(0,t.jsx)(a.default,{}),s&&(0,t.jsx)("section",{className:"products-list",children:s.map((function(e){return(0,t.jsx)(c.Z,{discount:e.discount,id:e.id,price:e.price,currentPrice:e.currentPrice,productImage:e.images[0],name:e.name},e.id)}))})]})}},9538:function(e,s,r){"use strict";r.r(s);var t=r(5893),n=r(1471);s.default=function(){return(0,t.jsxs)("section",{className:"products-list",children:[(0,t.jsx)(n.Z,{}),(0,t.jsx)(n.Z,{}),(0,t.jsx)(n.Z,{}),(0,t.jsx)(n.Z,{}),(0,t.jsx)(n.Z,{}),(0,t.jsx)(n.Z,{})]})}},1845:function(e,s,r){"use strict";r.r(s);var t=r(5893),n=r(3765),c=r(5077),a=r(8213),i=r(3019),u={backgroundImage:"url('https://static-01.daraz.com.bd/skyline/i8/ce6623d0887748a5a75d6b578ee3d44c-1188-300.jpg_desktop.jpg')"};s.default=function(){return(0,t.jsxs)(n.Z,{children:[(0,t.jsx)("div",{className:"product-market-banner",style:u}),(0,t.jsx)("section",{className:"container",children:(0,t.jsxs)("div",{className:"product-market-page section section-products-featured",children:[(0,t.jsx)("header",{className:"section-products-featured__header",children:(0,t.jsx)("h3",{children:"New Arrivals Product's"})}),(0,t.jsx)("div",{className:"product-market-body products-page",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(a.Z,{}),(0,t.jsx)(i.default,{})]})})]})}),(0,t.jsx)(c.Z,{})]})}},7815:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/view-more/wholesale",function(){return r(1845)}])}},function(e){e.O(0,[2937,6317,2283,6486,76,176,9774,2888,179],(function(){return s=7815,e(e.s=s);var s}));var s=e.O();_N_E=s}]);