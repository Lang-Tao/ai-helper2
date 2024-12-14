"use strict";(self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[]).push([[290],{290:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"intelligence-check"},[r("div",{staticClass:"select-box"},[r("el-select",{attrs:{placeholder:"请选择项目"},model:{value:e.selectedProjectName,callback:function(t){e.selectedProjectName=t},expression:"selectedProjectName"}},e._l(e.projectList,(function(e){return r("el-option",{key:e.address,attrs:{value:e.name}})})),1),r("el-button",{attrs:{type:"primary"},on:{click:e.AIcheck}},[e._v("智能审查")])],1),r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"overview"},[r("span",{staticClass:"title"},[e._v("审查结果")]),e.AIcomment.length>0?r("div",{staticClass:"result"},[r("vue-markdown",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{source:e.AIcomment}})],1):r("div",{staticClass:"empty-box"},[r("span",{staticClass:"empty-text"},[e._v("请在上方选择审查项目")])])])])},o=[],a=r(27673),i=r(89297),s={name:"Intelligence",data(){return{projectList:[],selectedProjectName:"",AIcomment:"",loading:!1}},mounted(){this.getProjectList()},computed:{selectedProject(){return this.projectList.find((e=>e.name===this.selectedProjectName))||{}}},methods:{getProjectList(){(0,a.wD)().then((e=>{0===e.code?(this.projectList=e.data,this.selectedProjectName=this.projectList.length>0?this.projectList[0].name:""):console.error(e.message||"获取列表失败")})).catch((e=>{console.error("Error:",e)}))},AIcheck(){this.selectedProjectName?(console.log("审查项目仓库地址："+this.selectedProject.repositoryId),this.loading=!0,(0,i.vD)(this.selectedProject.repositoryId).then((e=>{console.log(e),this.loading=!1,0===e.code?this.AIcomment=e.data:this.$message.error(e.message||"审查失败")})).catch((e=>{console.error("Error:",e)}))):this.$message.error("请选择一个项目进行审查")}}},c=s,u=r(81656),l=(0,u.A)(c,n,o,!1,null,"18218440",null),h=l.exports},89297:function(e,t,r){r.d(t,{VA:function(){return i},ZD:function(){return o},vD:function(){return a}});r(14603),r(47566),r(98721);var n=r(35720);function o(e){const t=new URLSearchParams({question:e}).toString();return(0,n.A)({url:`/ask-kimi?${t}`,method:"GET",headers:{Authorization:localStorage.getItem("token")}})}function a(e){return(0,n.A)({url:"/dmsc?"+("repo="+e),method:"get"})}function i(e){return(0,n.A)({url:"/ask-zjxm?"+("repo="+e),method:"get"})}},27673:function(e,t,r){r.d(t,{An:function(){return i},RX:function(){return u},WV:function(){return c},gA:function(){return a},vr:function(){return s},wD:function(){return o},xx:function(){return l}});var n=r(35720);function o(){return(0,n.A)({url:"/project",method:"GET",headers:{Authorization:localStorage.getItem("token")}})}function a(e){return(0,n.A)({url:"/project",method:"POST",data:e,headers:{Authorization:localStorage.getItem("token")}})}function i(e){return(0,n.A)({url:`/project/address?address=${e}`,method:"GET",headers:{Authorization:localStorage.getItem("token")}})}function s(e){return(0,n.A)({url:"/project",method:"PUT",data:e,headers:{Authorization:localStorage.getItem("token")}})}function c(e){return(0,n.A)({url:`/gitea/listpath?repo=${e}`,method:"GET",headers:{Authorization:localStorage.getItem("token")}})}function u(e,t){return(0,n.A)({url:`/gitea/getfile?path=${e}&address=${t}`,method:"GET",headers:{Authorization:localStorage.getItem("token")}})}function l(e){return(0,n.A)({url:`/project?address=${e}`,method:"DELETE",headers:{Authorization:localStorage.getItem("token")}})}},36955:function(e,t,r){var n=r(92140),o=r(94901),a=r(44576),i=r(78227),s=i("toStringTag"),c=Object,u="Arguments"===a(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(r){}};e.exports=n?a:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=l(t=c(e),s))?r:u?a(t):"Object"===(n=a(t))&&o(t.callee)?"Arguments":n}},62106:function(e,t,r){var n=r(50283),o=r(24913);e.exports=function(e,t,r){return r.get&&n(r.get,t,{getter:!0}),r.set&&n(r.set,t,{setter:!0}),o.f(e,t,r)}},92140:function(e,t,r){var n=r(78227),o=n("toStringTag"),a={};a[o]="z",e.exports="[object z]"===String(a)},655:function(e,t,r){var n=r(36955),o=String;e.exports=function(e){if("Symbol"===n(e))throw new TypeError("Cannot convert a Symbol value to a string");return o(e)}},22812:function(e){var t=TypeError;e.exports=function(e,r){if(e<r)throw new t("Not enough arguments");return e}},14603:function(e,t,r){var n=r(36840),o=r(79504),a=r(655),i=r(22812),s=URLSearchParams,c=s.prototype,u=o(c.append),l=o(c["delete"]),h=o(c.forEach),d=o([].push),m=new s("a=1&a=2&b=3");m["delete"]("a",1),m["delete"]("b",void 0),m+""!=="a=2"&&n(c,"delete",(function(e){var t=arguments.length,r=t<2?void 0:arguments[1];if(t&&void 0===r)return l(this,e);var n=[];h(this,(function(e,t){d(n,{key:t,value:e})})),i(t,1);var o,s=a(e),c=a(r),m=0,g=0,f=!1,p=n.length;while(m<p)o=n[m++],f||o.key===s?(f=!0,l(this,o.key)):g++;while(g<p)o=n[g++],o.key===s&&o.value===c||u(this,o.key,o.value)}),{enumerable:!0,unsafe:!0})},47566:function(e,t,r){var n=r(36840),o=r(79504),a=r(655),i=r(22812),s=URLSearchParams,c=s.prototype,u=o(c.getAll),l=o(c.has),h=new s("a=1");!h.has("a",2)&&h.has("a",void 0)||n(c,"has",(function(e){var t=arguments.length,r=t<2?void 0:arguments[1];if(t&&void 0===r)return l(this,e);var n=u(this,e);i(t,1);var o=a(r),s=0;while(s<n.length)if(n[s++]===o)return!0;return!1}),{enumerable:!0,unsafe:!0})},98721:function(e,t,r){var n=r(43724),o=r(79504),a=r(62106),i=URLSearchParams.prototype,s=o(i.forEach);n&&!("size"in i)&&a(i,"size",{get:function(){var e=0;return s(this,(function(){e++})),e},configurable:!0,enumerable:!0})}}]);
//# sourceMappingURL=290.04cfcce7.js.map