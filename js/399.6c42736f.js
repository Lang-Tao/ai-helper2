"use strict";(self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[]).push([[399],{6399:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center"}},[a("el-card",{staticStyle:{width:"50%","margin-top":"50px"}},[a("el-form",{staticStyle:{"padding-right":"20px"},attrs:{model:e.user,"label-width":"80px"}},[a("div",{staticStyle:{margin:"15px","text-align":"center"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://localhost:9090/file/upload",headers:{token:e.user.token},"show-file-list":!1,"on-success":e.handleAvatarSuccess}},[e.user.avatar?a("img",{staticClass:"avatar",attrs:{src:e.user.avatar}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{attrs:{placeholder:"用户名"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{placeholder:"姓名"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),a("el-form-item",{attrs:{label:"电话",prop:"phone"}},[a("el-input",{attrs:{placeholder:"电话"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{placeholder:"邮箱"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),a("el-form-item",{attrs:{label:"地址",prop:"address"}},[a("el-input",{attrs:{type:"textarea",placeholder:"地址"},model:{value:e.user.address,callback:function(t){e.$set(e.user,"address",t)},expression:"user.address"}})],1),a("div",{staticStyle:{"text-align":"center","margin-bottom":"20px"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.update}},[e._v("保 存")])],1)],1)],1)],1)},r=[],l={name:"Person",data(){return{user:JSON.parse(localStorage.getItem("honey-user")||"{}")}},created(){},methods:{update(){this.$request.put("/user/update",this.user).then((e=>{"200"===e.code?(this.$message.success("保存成功"),localStorage.setItem("honey-user",JSON.stringify(this.user)),this.$emit("update:user",this.user)):this.$message.error(e.msg)}))},handleAvatarSuccess(e,t,a){this.user.avatar=e.data}}},u=l,n=a(1656),i=(0,n.A)(u,s,r,!1,null,"ea9cf114",null),o=i.exports}}]);
//# sourceMappingURL=399.6c42736f.js.map