(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3459],{3765:function(e,r,s){"use strict";var n=s(5893),i=s(9008),t=s(76),a=s(1163);r.Z=function(e){var r=e.children,s=e.title,c=void 0===s?"Tust Lite | We have all yours need.":s,o=(0,a.useRouter)().pathname;return(0,n.jsxs)("div",{className:"app-main",children:[(0,n.jsx)(i.default,{children:(0,n.jsx)("title",{children:c})}),(0,n.jsx)(t.Z,{}),(0,n.jsx)("main",{className:"/"!==o?"main-page":"",children:r})]})}},6133:function(e,r,s){"use strict";s.r(r);var n=s(5893),i=s(809),t=s.n(i),a=s(2447),c=s(3765),o=s(1664),l=s(2283),u=s(9300),d=s(2234);r.default=function(){var e=(0,l.cI)(),r=e.register,s=e.handleSubmit,i=e.errors,m=function(){var e=(0,a.Z)(t().mark((function e(r){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.q)("".concat(u.f,"/api/login"),{number:r.number,password:r.password});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,n.jsx)(c.Z,{children:(0,n.jsx)("section",{className:"form-page",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"back-button-section",children:(0,n.jsx)(o.default,{href:"/",children:(0,n.jsxs)("a",{children:[(0,n.jsx)("i",{className:"icon-left"})," Back to Home"]})})}),(0,n.jsxs)("div",{className:"form-block",children:[(0,n.jsx)("div",{className:"form-logo",children:(0,n.jsx)("img",{className:"rs-l",src:"/images/logo.png",alt:"logo"})}),(0,n.jsx)("h2",{className:"form-block__title",children:"Login as a"}),(0,n.jsxs)("div",{className:"reg-log-role",children:[(0,n.jsx)("button",{className:"cus",children:"Customer"}),(0,n.jsx)("button",{className:"or",children:"OR"}),(0,n.jsx)("button",{className:"ser",children:"Service point manager"})]}),(0,n.jsxs)("form",{className:"form",onSubmit:s(m),children:[(0,n.jsxs)("div",{className:"form__input-row",children:[(0,n.jsx)("input",{className:"form__input",placeholder:"Phone Number",type:"text",name:"number",ref:r({required:!0})}),i.number&&"required"===i.number.type&&(0,n.jsx)("p",{className:"message message--error",children:"This field is required"}),i.number&&"pattern"===i.number.type&&(0,n.jsx)("p",{className:"message message--error",children:"Please write a valid number"})]}),(0,n.jsxs)("div",{className:"form__input-row",children:[(0,n.jsx)("input",{className:"form__input",type:"password",placeholder:"Password",name:"password",ref:r({required:!0})}),i.password&&"required"===i.password.type&&(0,n.jsx)("p",{className:"message message--error",children:"This field is required"})]}),(0,n.jsxs)("div",{className:"form__info",children:[(0,n.jsx)("div",{className:"checkbox-wrapper",children:(0,n.jsxs)("label",{htmlFor:"check-signed-in",className:"checkbox checkbox--sm",children:[(0,n.jsx)("input",{type:"checkbox",name:"keepSigned",id:"check-signed-in",ref:r({required:!1})}),(0,n.jsx)("span",{className:"checkbox__check"}),(0,n.jsx)("p",{children:"Keep me signed in"})]})}),(0,n.jsx)("a",{href:"/forgot-password",className:"form__info__forgot-password",children:"Forgot password?"})]}),(0,n.jsx)("button",{type:"submit",className:"btn btn--rounded btn--yellow btn-submit",children:"Sign in"}),(0,n.jsxs)("p",{className:"form__signup-link",children:["Not a member yet? ",(0,n.jsx)("a",{href:"/register",children:"Sign up"})]})]})]})]})})})}},9300:function(e,r,s){"use strict";s.d(r,{f:function(){return n}});var n="https://anikrouth.xyz"},2234:function(e,r,s){"use strict";s.d(r,{q:function(){return a}});var n=s(809),i=s.n(n),t=s(2447);function a(){return c.apply(this,arguments)}function c(){return(c=(0,t.Z)(i().mark((function e(){var r,s,n,t=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:"",s=t.length>1&&void 0!==t[1]?t[1]:{},e.next=4,fetch(r,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(s)});case 4:return n=e.sent,e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},7156:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return s(6133)}])},2447:function(e,r,s){"use strict";function n(e,r,s,n,i,t,a){try{var c=e[t](a),o=c.value}catch(l){return void s(l)}c.done?r(o):Promise.resolve(o).then(n,i)}function i(e){return function(){var r=this,s=arguments;return new Promise((function(i,t){var a=e.apply(r,s);function c(e){n(a,i,t,c,o,"next",e)}function o(e){n(a,i,t,c,o,"throw",e)}c(void 0)}))}}s.d(r,{Z:function(){return i}})}},function(e){e.O(0,[2937,2283,76,9774,2888,179],(function(){return r=7156,e(e.s=r);var r}));var r=e.O();_N_E=r}]);