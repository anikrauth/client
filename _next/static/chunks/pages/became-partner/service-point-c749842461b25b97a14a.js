(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6290],{6071:function(e,n,t){"use strict";var r=t(3848),o=t(9448);n.default=void 0;var a=o(t(7294)),i=t(1689),s=t(2441),l=t(5749),c={};function u(e,n,t,r){if(e&&(0,i.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,s.useRouter)(),o=t&&t.asPath||"/",f=a.default.useMemo((function(){var n=(0,i.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],s=t[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):s||a}}),[o,e.href,e.as]),p=f.href,d=f.as,m=e.children,_=e.replace,v=e.shallow,h=e.scroll,x=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var N=a.Children.only(m),b=N&&"object"===typeof N&&N.ref,j=(0,l.useIntersection)({rootMargin:"200px"}),y=r(j,2),w=y[0],g=y[1],k=a.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);(0,a.useEffect)((function(){var e=g&&n&&(0,i.isLocalURL)(p),r="undefined"!==typeof x?x:t&&t.locale,o=c[p+"%"+d+(r?"%"+r:"")];e&&!o&&u(t,p,d,{locale:r})}),[d,p,g,x,n,t]);var E={ref:k,onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,s,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:l,scroll:s}))}(e,t,p,d,_,v,h,x)},onMouseEnter:function(e){(0,i.isLocalURL)(p)&&(N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),u(t,p,d,{priority:!0}))}};if(e.passHref||"a"===N.type&&!("href"in N.props)){var M="undefined"!==typeof x?x:t&&t.locale,L=t&&t.isLocaleDomain&&(0,i.getDomainLocale)(d,M,t&&t.locales,t&&t.domainLocales);E.href=L||(0,i.addBasePath)((0,i.addLocale)(d,M,t&&t.defaultLocale))}return a.default.cloneElement(N,E)};n.default=f},5749:function(e,n,t){"use strict";var r=t(3848);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,l=(0,o.useRef)(),c=(0,o.useState)(!1),u=r(c,2),f=u[0],p=u[1],d=(0,o.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,a.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[d,f]};var o=t(7294),a=t(8391),i="undefined"!==typeof IntersectionObserver;var s=new Map},981:function(e,n,t){"use strict";t.r(n);var r=t(5893);t(1664);n.default=function(){return(0,r.jsx)("div",{className:"form-block",children:(0,r.jsxs)("form",{className:"form",children:[(0,r.jsx)("div",{className:"form__input-row",children:(0,r.jsx)("input",{className:"form__input",placeholder:"Service Point Manager Name",type:"text"})}),(0,r.jsx)("div",{className:"form__input-row",children:(0,r.jsx)("input",{className:"form__input",placeholder:"Phone Number",type:"text"})}),(0,r.jsx)("div",{className:"form__input-row",children:(0,r.jsx)("input",{className:"form__input",placeholder:"Email",type:"text"})}),(0,r.jsx)("div",{className:"form__input-row",children:(0,r.jsx)("input",{className:"form__input",placeholder:"Address",type:"text"})}),(0,r.jsx)("div",{className:"form__input-row",children:(0,r.jsxs)("select",{class:"form-control",children:[(0,r.jsx)("option",{value:"",children:"Select Payment Method "}),(0,r.jsx)("option",{value:"Mobile Banking",children:" Mobile banking"}),(0,r.jsx)("option",{value:"Bank",children:" Bank "})]})}),(0,r.jsx)("div",{className:"form__input-row",children:(0,r.jsx)("input",{className:"form__input",placeholder:"Account number",type:"text"})}),(0,r.jsx)("div",{className:"form__input-row",children:(0,r.jsx)("input",{className:"form__input",placeholder:"Organization Name",type:"text"})}),(0,r.jsx)("div",{className:"form__input-row",children:(0,r.jsx)("input",{className:"form__input",placeholder:"Product Name",type:"text"})}),(0,r.jsxs)("div",{className:"form__input-row",children:[(0,r.jsx)("label",{children:"Photo"}),(0,r.jsx)("input",{className:"form__input",type:"file"})]}),(0,r.jsxs)("div",{className:"form__input-row",children:[(0,r.jsx)("label",{children:"NID Front Side"}),(0,r.jsx)("input",{className:"form__input",type:"file"})]}),(0,r.jsxs)("div",{className:"form__input-row",children:[(0,r.jsx)("label",{children:"NID Back Side"}),(0,r.jsx)("input",{className:"form__input",type:"file"})]}),(0,r.jsx)("button",{type:"button",className:"btn btn--rounded btn--yellow btn-submit",children:"Submit"})]})})}},235:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/became-partner/service-point",function(){return t(981)}])},1664:function(e,n,t){e.exports=t(6071)}},function(e){e.O(0,[9774,2888,179],(function(){return n=235,e(e.s=n);var n}));var n=e.O();_N_E=n}]);