"use strict";(self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[]).push([[976],{8976:function(e,r,t){t.r(r),t.d(r,{default:function(){return c}});var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticStyle:{height:"100vh",display:"flex","align-items":"center","justify-content":"center","background-color":"#669fef"}},[t("div",{staticStyle:{display:"flex","background-color":"white",width:"50%","border-radius":"5px",overflow:"hidden"}},[e._m(0),t("div",{staticStyle:{flex:"1",display:"flex","align-items":"center","justify-content":"center"}},[t("el-form",{ref:"registerRef",staticStyle:{width:"80%"},attrs:{model:e.user,rules:e.rules}},[t("div",{staticStyle:{"font-size":"20px","font-weight":"bold","text-align":"center","margin-bottom":"20px"}},[e._v("欢迎注册智能工程助手")]),t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-user",size:"medium",placeholder:"请输入账号"},model:{value:e.user.username,callback:function(r){e.$set(e.user,"username",r)},expression:"user.username"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-lock",size:"medium","show-password":"",placeholder:"请输入密码"},model:{value:e.user.password,callback:function(r){e.$set(e.user,"password",r)},expression:"user.password"}})],1),t("el-form-item",{attrs:{prop:"confirmPass"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-lock",size:"medium","show-password":"",placeholder:"请确认密码"},model:{value:e.user.confirmPass,callback:function(r){e.$set(e.user,"confirmPass",r)},expression:"user.confirmPass"}})],1),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:e.Register}},[e._v("注 册")])],1),t("div",{staticStyle:{display:"flex"}},[t("div",{staticStyle:{flex:"1"}},[e._v("已经有账号了？请 "),t("span",{staticStyle:{color:"#6e77f2",cursor:"pointer"},on:{click:function(r){return e.$router.push("/login")}}},[e._v("登录")])])])],1)],1)])])},i=[function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticStyle:{flex:"1"}},[s("img",{staticStyle:{width:"100%"},attrs:{src:t(427),alt:""}})])}],n=(t(4114),{name:"register",data(){const e=(e,r,t)=>{""===r?t(new Error("请确认密码")):r!==this.user.password?t(new Error("两次输入的密码不一致")):t()};return{user:{username:"",password:"",confirmPass:""},rules:{username:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],confirmPass:[{validator:e,trigger:"blur"}]}}},created(){},methods:{Register(){this.$refs["registerRef"].validate((e=>{e&&(this.$router.push("/login"),this.$message.success("注册成功"))}))}}}),o=n,a=t(1656),l=(0,a.A)(o,s,i,!1,null,"dbc7bff2",null),c=l.exports},427:function(e,r,t){e.exports=t.p+"img/register.ceee6f2b.png"},4527:function(e,r,t){var s=t(3724),i=t(4376),n=TypeError,o=Object.getOwnPropertyDescriptor,a=s&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,r){if(i(e)&&!o(e,"length").writable)throw new n("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}},6837:function(e){var r=TypeError,t=9007199254740991;e.exports=function(e){if(e>t)throw r("Maximum allowed index exceeded");return e}},4376:function(e,r,t){var s=t(4576);e.exports=Array.isArray||function(e){return"Array"===s(e)}},4114:function(e,r,t){var s=t(6518),i=t(8981),n=t(6198),o=t(4527),a=t(6837),l=t(9039),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},f=c||!u();s({target:"Array",proto:!0,arity:1,forced:f},{push:function(e){var r=i(this),t=n(r),s=arguments.length;a(t+s);for(var l=0;l<s;l++)r[t]=arguments[l],t++;return o(r,t),t}})}}]);
//# sourceMappingURL=976.dae15fde.js.map