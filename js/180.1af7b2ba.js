"use strict";(self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[]).push([[180],{73180:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{padding:"28px 25px"}},[a("div",[a("div",{staticClass:"receiver"},[a("span",[e._v("接收人：")]),a("el-cascader",{attrs:{options:e.options,"show-all-levels":!1,props:e.cascaderProps}}),a("span",{staticStyle:{margin:"0 30px 0 210px"}},[e._v("截止日期:")]),a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.deadline,callback:function(t){e.deadline=t},expression:"deadline"}})],1),a("div",{staticClass:"title-box"},[a("span",[e._v("事项标题：")]),a("el-input",{staticClass:"title-input",attrs:{placeholder:"请输入标题"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),a("div",{staticClass:"content-box"},[a("span",[e._v("事项内容：")]),a("el-input",{staticClass:"content-input",attrs:{type:"textarea",rows:25,resize:"none",placeholder:"请输入内容"},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),a("el-button",{staticClass:"submit-btn",on:{click:e.sendTask}},[e._v("发送")])],1)])},n=[],l={data(){return{title:"",content:"",deadline:"",options:[{name:"项目1",member:[{name:"张三",id:"1"},{name:"李四",id:"2"},{name:"王五",id:"3"}]}],cascaderProps:{value:"id",label:"name",children:"member"}}},methods:{sendTask(){console.log(this.deadline),this.$message({message:"发送成功",type:"success"}),this.title="",this.content=""}}},i=l,c=a(81656),o=(0,c.A)(i,s,n,!1,null,"50bb79fe",null),d=o.exports}}]);
//# sourceMappingURL=180.1af7b2ba.js.map