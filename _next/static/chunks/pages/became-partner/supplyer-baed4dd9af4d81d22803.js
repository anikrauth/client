(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5421],{6071:function(e,c,t){"use strict";var r=t(3848),l=t(9448);c.default=void 0;var s=l(t(7294)),n=t(1689),a=t(2441),o=t(5749),i={};function u(e,c,t,r){if(e&&(0,n.isLocalURL)(c)){e.prefetch(c,t,r).catch((function(e){0}));var l=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[c+"%"+t+(l?"%"+l:"")]=!0}}var f=function(e){var c=!1!==e.prefetch,t=(0,a.useRouter)(),l=t&&t.asPath||"/",f=s.default.useMemo((function(){var c=(0,n.resolveHref)(l,e.href,!0),t=r(c,2),s=t[0],a=t[1];return{href:s,as:e.as?(0,n.resolveHref)(l,e.as):a||s}}),[l,e.href,e.as]),d=f.href,h=f.as,p=e.children,m=e.replace,x=e.shallow,k=e.scroll,v=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var j=s.Children.only(p),b=j&&"object"===typeof j&&j.ref,_=(0,o.useIntersection)({rootMargin:"200px"}),y=r(_,2),N=y[0],C=y[1],w=s.default.useCallback((function(e){N(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,N]);(0,s.useEffect)((function(){var e=C&&c&&(0,n.isLocalURL)(d),r="undefined"!==typeof v?v:t&&t.locale,l=i[d+"%"+h+(r?"%"+r:"")];e&&!l&&u(t,d,h,{locale:r})}),[h,d,C,v,c,t]);var g={ref:w,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,c,t,r,l,s,a,o){("A"!==e.currentTarget.nodeName||!function(e){var c=e.currentTarget.target;return c&&"_self"!==c||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,n.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),c[l?"replace":"push"](t,r,{shallow:s,locale:o,scroll:a}))}(e,t,d,h,m,x,k,v)},onMouseEnter:function(e){(0,n.isLocalURL)(d)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),u(t,d,h,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var E="undefined"!==typeof v?v:t&&t.locale,L=t&&t.isLocaleDomain&&(0,n.getDomainLocale)(h,E,t&&t.locales,t&&t.domainLocales);g.href=L||(0,n.addBasePath)((0,n.addLocale)(h,E,t&&t.defaultLocale))}return s.default.cloneElement(j,g)};c.default=f},5749:function(e,c,t){"use strict";var r=t(3848);c.__esModule=!0,c.useIntersection=function(e){var c=e.rootMargin,t=e.disabled||!n,o=(0,l.useRef)(),i=(0,l.useState)(!1),u=r(i,2),f=u[0],d=u[1],h=(0,l.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,c,t){var r=function(e){var c=e.rootMargin||"",t=a.get(c);if(t)return t;var r=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var c=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;c&&t&&c(t)}))}),e);return a.set(c,t={id:c,observer:l,elements:r}),t}(t),l=r.id,s=r.observer,n=r.elements;return n.set(e,c),s.observe(e),function(){n.delete(e),s.unobserve(e),0===n.size&&(s.disconnect(),a.delete(l))}}(e,(function(e){return e&&d(e)}),{rootMargin:c}))}),[t,c,f]);return(0,l.useEffect)((function(){if(!n&&!f){var e=(0,s.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,s.cancelIdleCallback)(e)}}}),[f]),[h,f]};var l=t(7294),s=t(8391),n="undefined"!==typeof IntersectionObserver;var a=new Map},4253:function(e,c,t){"use strict";t.r(c);var r=t(5893);t(1664);c.default=function(){return(0,r.jsx)("div",{className:"form-block",children:(0,r.jsxs)("form",{className:"form",children:[(0,r.jsx)("div",{className:"form__input-row",children:(0,r.jsx)("input",{className:"form__input",placeholder:"Supplier Name",type:"text"})}),(0,r.jsx)("div",{className:"form__input-row",children:(0,r.jsx)("input",{className:"form__input",placeholder:"Phone Number",type:"text"})}),(0,r.jsx)("div",{className:"form__input-row",children:(0,r.jsx)("input",{className:"form__input",placeholder:"Email",type:"text"})}),(0,r.jsx)("div",{className:"form__input-row",children:(0,r.jsx)("input",{className:"form__input",placeholder:"Address",type:"text"})}),(0,r.jsx)("div",{className:"form__input-row",children:(0,r.jsxs)("select",{class:"form-control",children:[(0,r.jsx)("option",{value:"",children:"Select Payment Method "}),(0,r.jsx)("option",{value:"Mobile Banking",children:" Mobile banking"}),(0,r.jsx)("option",{value:"Bank",children:" Bank "})]})}),(0,r.jsx)("div",{className:"form__input-row",children:(0,r.jsx)("input",{className:"form__input",placeholder:"Account number",type:"text"})}),(0,r.jsx)("div",{className:"form__input-row",children:(0,r.jsx)("input",{className:"form__input",placeholder:"Organization Name",type:"text"})}),(0,r.jsx)("div",{className:"form__input-row",children:(0,r.jsx)("input",{className:"form__input",placeholder:"Product Name",type:"text"})}),(0,r.jsxs)("div",{class:"form-group",children:[(0,r.jsx)("label",{children:"Product Category"}),(0,r.jsxs)("div",{class:"form-check",children:[(0,r.jsx)("input",{class:"form-check-input",type:"checkbox",value:"",id:"defaultCheck1"}),(0,r.jsx)("label",{class:"form-check-label",for:"defaultCheck1",children:"Grocery item"})]}),(0,r.jsxs)("div",{class:"form-check",children:[(0,r.jsx)("input",{class:"form-check-input",type:"checkbox",value:"",id:"defaultCheck2"}),(0,r.jsx)("label",{class:"form-check-label",for:"defaultCheck2",children:"Garments & Leather item"})]}),(0,r.jsxs)("div",{class:"form-check",children:[(0,r.jsx)("input",{class:"form-check-input",type:"checkbox",value:"",id:"defaultCheck3"}),(0,r.jsx)("label",{class:"form-check-label",for:"defaultCheck3",children:"Electronics item"})]}),(0,r.jsxs)("div",{class:"form-check",children:[(0,r.jsx)("input",{class:"form-check-input",type:"checkbox",value:"",id:"defaultCheck4"}),(0,r.jsx)("label",{class:"form-check-label",for:"defaultCheck4",children:"Homemade Ready meals"})]}),(0,r.jsxs)("div",{class:"form-check",children:[(0,r.jsx)("input",{class:"form-check-input",type:"checkbox",value:"",id:"defaultCheck5"}),(0,r.jsx)("label",{class:"form-check-label",for:"defaultCheck5",children:"Agricultural item"})]}),(0,r.jsxs)("div",{class:"form-check",children:[(0,r.jsx)("input",{class:"form-check-input",type:"checkbox",value:"",id:"defaultCheck6"}),(0,r.jsx)("label",{class:"form-check-label",for:"defaultCheck6",children:"Accessorise & parts"})]}),(0,r.jsxs)("div",{class:"form-check",children:[(0,r.jsx)("input",{class:"form-check-input",type:"checkbox",value:"",id:"defaultCheck7"}),(0,r.jsx)("label",{class:"form-check-label",for:"defaultCheck7",children:"Ready to cook products"})]}),(0,r.jsxs)("div",{class:"form-check",children:[(0,r.jsx)("input",{class:"form-check-input",type:"checkbox",value:"",id:"defaultCheck8"}),(0,r.jsx)("label",{class:"form-check-label",for:"defaultCheck8",children:"Cosmetic item"})]}),(0,r.jsxs)("div",{class:"form-check",children:[(0,r.jsx)("input",{class:"form-check-input",type:"checkbox",value:"",id:"defaultCheck9"}),(0,r.jsx)("label",{class:"form-check-label",for:"defaultCheck9",children:"Book & stationary items"})]})]}),(0,r.jsxs)("div",{className:"form__input-row",children:[(0,r.jsx)("label",{children:"Photo"}),(0,r.jsx)("input",{className:"form__input",type:"file"})]}),(0,r.jsxs)("div",{className:"form__input-row",children:[(0,r.jsx)("label",{children:"NID Front Side"}),(0,r.jsx)("input",{className:"form__input",type:"file"})]}),(0,r.jsxs)("div",{className:"form__input-row",children:[(0,r.jsx)("label",{children:"NID Back Side"}),(0,r.jsx)("input",{className:"form__input",type:"file"})]}),(0,r.jsx)("button",{type:"button",className:"btn btn--rounded btn--yellow btn-submit",children:"Submit"})]})})}},7771:function(e,c,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/became-partner/supplyer",function(){return t(4253)}])},1664:function(e,c,t){e.exports=t(6071)}},function(e){e.O(0,[9774,2888,179],(function(){return c=7771,e(e.s=c);var c}));var c=e.O();_N_E=c}]);