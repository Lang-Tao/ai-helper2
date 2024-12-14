"use strict";(self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[]).push([[943],{31943:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"chatgpt-container"},[r("div",{staticClass:"chat-window"},t._l(t.messages,(function(e,s){return r("div",{key:s,staticClass:"message-container",class:e.type},["bot"===e.type?r("div",{staticClass:"avatar"},[r("img",{staticClass:"avatar-image",attrs:{src:n(99835),alt:"bot-avatar"}})]):t._e(),r("div",{staticClass:"message"},[r("vue-markdown",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{source:e.content}})],1)])})),0),r("div",{staticClass:"input-container"},[r("el-input",{ref:"userInputRef",staticClass:"input-box",attrs:{placeholder:"在此输入问题",disabled:t.isProcessing},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage.apply(null,arguments)}},model:{value:t.userInput,callback:function(e){t.userInput=e},expression:"userInput"}}),r("el-button",{staticClass:"send-button",attrs:{type:"primary",disabled:t.isProcessing},on:{click:t.sendMessage}},[t._v(" 发送 ")])],1)])},s=[],a=(n(44114),n(89297)),i={data(){return{userInput:"",messages:[{type:"bot",content:"你好！有什么我可以帮你的吗?"}],isProcessing:!1}},mounted(){document.querySelector("input").focus()},methods:{async sendMessage(){if(""===this.userInput.trim()||this.isProcessing)return;this.messages.push({type:"user",content:this.userInput});const t=this.userInput;this.userInput="",this.isProcessing=!0;try{const e=await(0,a.ZD)(t);console.log(e),this.messages.push({type:"bot",content:e.choices[0].message.content})}catch(e){console.error("Error occurred:",e),this.messages.push({type:"bot",content:"抱歉，我暂时无法处理您的请求。"})}finally{this.isProcessing=!1,this.$refs.userInputRef.$el.querySelector("input").focus()}}}},o=i,u=n(81656),c=(0,u.A)(o,r,s,!1,null,null,null),l=c.exports},89297:function(t,e,n){n.d(e,{VA:function(){return i},ZD:function(){return s},vD:function(){return a}});n(14603),n(47566),n(98721);var r=n(35720);function s(t){const e=new URLSearchParams({question:t}).toString();return(0,r.A)({url:`/ask-kimi?${e}`,method:"GET",headers:{Authorization:localStorage.getItem("token")}})}function a(t){return(0,r.A)({url:"/dmsc?"+("repo="+t),method:"get"})}function i(t){return(0,r.A)({url:"/ask-zjxm?"+("repo="+t),method:"get"})}},99835:function(t,e,n){t.exports=n.p+"img/AIlogo.55395316.png"},36955:function(t,e,n){var r=n(92140),s=n(94901),a=n(44576),i=n(78227),o=i("toStringTag"),u=Object,c="Arguments"===a(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?a:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=u(t),o))?n:c?a(e):"Object"===(r=a(e))&&s(e.callee)?"Arguments":r}},62106:function(t,e,n){var r=n(50283),s=n(24913);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),s.f(t,e,n)}},92140:function(t,e,n){var r=n(78227),s=r("toStringTag"),a={};a[s]="z",t.exports="[object z]"===String(a)},655:function(t,e,n){var r=n(36955),s=String;t.exports=function(t){if("Symbol"===r(t))throw new TypeError("Cannot convert a Symbol value to a string");return s(t)}},22812:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw new e("Not enough arguments");return t}},14603:function(t,e,n){var r=n(36840),s=n(79504),a=n(655),i=n(22812),o=URLSearchParams,u=o.prototype,c=s(u.append),l=s(u["delete"]),h=s(u.forEach),p=s([].push),f=new o("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&r(u,"delete",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=[];h(this,(function(t,e){p(r,{key:e,value:t})})),i(e,1);var s,o=a(t),u=a(n),f=0,g=0,d=!1,v=r.length;while(f<v)s=r[f++],d||s.key===o?(d=!0,l(this,s.key)):g++;while(g<v)s=r[g++],s.key===o&&s.value===u||c(this,s.key,s.value)}),{enumerable:!0,unsafe:!0})},47566:function(t,e,n){var r=n(36840),s=n(79504),a=n(655),i=n(22812),o=URLSearchParams,u=o.prototype,c=s(u.getAll),l=s(u.has),h=new o("a=1");!h.has("a",2)&&h.has("a",void 0)||r(u,"has",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=c(this,t);i(e,1);var s=a(n),o=0;while(o<r.length)if(r[o++]===s)return!0;return!1}),{enumerable:!0,unsafe:!0})},98721:function(t,e,n){var r=n(43724),s=n(79504),a=n(62106),i=URLSearchParams.prototype,o=s(i.forEach);r&&!("size"in i)&&a(i,"size",{get:function(){var t=0;return o(this,(function(){t++})),t},configurable:!0,enumerable:!0})}}]);
//# sourceMappingURL=943.3439c836.js.map