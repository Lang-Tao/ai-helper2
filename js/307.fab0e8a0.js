"use strict";(self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[]).push([[307],{3307:function(e,r,s){s.r(r),s.d(r,{default:function(){return c}});s(4114);var t=function(){var e=this,r=e._self._c;return r("div",{staticStyle:{height:"100vh",display:"flex","align-items":"center","justify-content":"center","background-color":"#669fef"}},[r("div",{staticStyle:{display:"flex","background-color":"white",width:"50%","border-radius":"5px",overflow:"hidden"}},[e._m(0),r("div",{staticStyle:{flex:"1",display:"flex","align-items":"center","justify-content":"center"}},[r("el-form",{ref:"registerRef",staticStyle:{width:"80%"},attrs:{model:e.user,rules:e.rules}},[r("div",{staticStyle:{"font-size":"20px","font-weight":"bold","text-align":"center","margin-bottom":"20px"}},[e._v("欢迎注册智能工程助手")]),r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-user",size:"medium",placeholder:"请输入账号"},model:{value:e.user.username,callback:function(r){e.$set(e.user,"username",r)},expression:"user.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-lock",size:"medium","show-password":"",placeholder:"请输入密码"},model:{value:e.user.password,callback:function(r){e.$set(e.user,"password",r)},expression:"user.password"}})],1),r("el-form-item",{attrs:{prop:"confirmPass"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-lock",size:"medium","show-password":"",placeholder:"请确认密码"},model:{value:e.user.confirmPass,callback:function(r){e.$set(e.user,"confirmPass",r)},expression:"user.confirmPass"}})],1),r("el-form-item",[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:e.Register}},[e._v("注 册")])],1),r("div",{staticStyle:{display:"flex"}},[r("div",{staticStyle:{flex:"1"}},[e._v("已经有账号了？请 "),r("span",{staticStyle:{color:"#6e77f2",cursor:"pointer"},on:{click:function(r){return e.$router.push("/login")}}},[e._v("登录")])])])],1)],1)])])},i=[function(){var e=this,r=e._self._c;return r("div",{staticStyle:{flex:"1"}},[r("img",{staticStyle:{width:"100%"},attrs:{src:s(427),alt:""}})])}],a={name:"register",data(){const e=(e,r,s)=>{""===r?s(new Error("请确认密码")):r!==this.user.password?s(new Error("两次输入的密码不一致")):s()};return{user:{username:"",password:"",confirmPass:""},rules:{username:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],confirmPass:[{validator:e,trigger:"blur"}]}}},created(){},methods:{Register(){this.$refs["registerRef"].validate((e=>{e&&(this.$router.push("/login"),this.$message.success("注册成功"))}))}}},o=a,l=s(1656),n=(0,l.A)(o,t,i,!1,null,"dbc7bff2",null),c=n.exports},427:function(e,r,s){e.exports=s.p+"img/register.ceee6f2b.png"}}]);
//# sourceMappingURL=307.fab0e8a0.js.map