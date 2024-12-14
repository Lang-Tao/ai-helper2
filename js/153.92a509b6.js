"use strict";(self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[]).push([[153],{81153:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"select-box"},[t.projectList.length>0?s("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.selectedProject,callback:function(e){t.selectedProject=e},expression:"selectedProject"}},t._l(t.projectList,(function(t){return s("el-option",{key:t.address,attrs:{label:t.name,value:t.name}})})),1):t._e(),s("el-select",{staticStyle:{"margin-left":"20px"},model:{value:t.selectedIssueType,callback:function(e){t.selectedIssueType=e},expression:"selectedIssueType"}},t._l(t.issueTypeList,(function(t){return s("el-option",{key:t.type,attrs:{label:t.type,value:t.type}})})),1),s("el-cascader",{staticStyle:{"margin-left":"20px"},attrs:{options:t.options,placeholder:"选择处理人","show-all-levels":!1,props:t.cascaderProps},model:{value:t.selectedAssignee,callback:function(e){t.selectedAssignee=e},expression:"selectedAssignee"}}),s("el-input",{staticStyle:{"margin-left":"20px",width:"200px"},attrs:{"prefix-icon":"el-icon-search",placeholder:"搜索事项"}})],1),s("div",{staticStyle:{width:"97%",height:"100%","margin-top":"20px",display:"flex","flex-direction":"row"}},[s("div",{staticClass:"box1"},[s("span",{staticClass:"box-title"},[s("i",{staticClass:"el-icon-document",staticStyle:{"margin-right":"10px"}}),t._v(" 待规划事项 Backlog "),s("el-tag",{staticStyle:{"border-radius":"10px","background-color":"#d54941",color:"white","margin-left":"10px"},attrs:{size:"mini"}},[t._v("10")])],1),s("div",{staticClass:"create-box"},[s("div",[t._m(0),s("el-select",{staticStyle:{"margin-left":"10px",width:"100px"},attrs:{size:"mini"}})],1),s("el-input",{staticClass:"borderless",staticStyle:{"margin-top":"20px"},attrs:{type:"textarea",autosize:"",rows:1,placeholder:"请输入内容"},model:{value:t.issueContent,callback:function(e){t.issueContent=e},expression:"issueContent"}})],1),s("div",{staticClass:"issue-box"},t._l(10,(function(e){return s("div",{key:e,staticClass:"issue-item"},[s("div",{staticClass:"issue-title"},[s("i",{staticClass:"el-icon-chat-square",staticStyle:{"margin-right":"10px"}}),t._v(" 待规划事项"+t._s(e)+" ")])])})),0)]),s("div",{staticClass:"box2"},[t._m(1),s("div",{staticClass:"iteration-box"},[s("span",{staticClass:"iteration-name",on:{click:t.showIteration}},[s("i",{class:t.arrowIcon,staticStyle:{"margin-right":"10px"}}),t._v("迭代名称example已规划事项 (4)")]),s("span",{staticClass:"iteration-time"},[t._v("2024/08/10 迭代结束")]),s("transition",{attrs:{name:"slide"}},[t.isIterationVisible?s("div",{staticClass:"issue-box"},[t._l(4,(function(e){return s("div",{key:e,staticClass:"issue-item"},[s("div",{staticClass:"issue-title"},[s("i",{staticClass:"el-icon-chat-square",staticStyle:{"margin-right":"10px"}}),t._v(" 待规划事项"+t._s(e)+" ")])])})),s("el-button",{staticStyle:{margin:"5px 0 0 -580px"},attrs:{type:"text"}},[t._v("+ 添加事项")])],2):t._e()])],1)])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("i",{staticClass:"el-icon-chat-square",staticStyle:{"margin-right":"10px"}}),t._v("创建")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"box-title"},[s("i",{staticClass:"el-icon-coordinate",staticStyle:{"margin-right":"10px"}}),t._v("迭代内已规划事项")])}],r=s(27673),n={name:"HomeTask",data(){return{arrowIcon:"el-icon-caret-bottom",issueContent:"",issueList:[{name:2321},{name:2213321},{name:232123231}],isIterationVisible:!0,projectList:[],selectedProject:"全部项目",issueTypeList:[{type:"全部事项"},{type:"用户故事"},{type:"任务"},{type:"缺陷"}],selectedIssueType:"全部事项",options:[{name:"项目1",member:[{name:"张三",id:"1"},{name:"李四",id:"2"},{name:"王五",id:"3"}]}],cascaderProps:{value:"id",label:"name",children:"member"},selectedAssignee:""}},mounted(){this.getProjectList()},methods:{showIteration(){this.isIterationVisible=!this.isIterationVisible,this.arrowIcon=this.isIterationVisible?"el-icon-caret-bottom":"el-icon-caret-right"},getProjectList(){(0,r.wD)().then((t=>{console.log(t),0===t.code?(this.projectList=[{name:"全部项目",address:"全部项目"}].concat(t.data),this.selectedProject=this.projectList.length>0?this.projectList[0].name:""):console.error(t.message||"获取列表失败")})).catch((t=>{console.error("Error:",t)}))}}},o=n,l=s(81656),c=(0,l.A)(o,i,a,!1,null,"1f5d1432",null),u=c.exports},27673:function(t,e,s){s.d(e,{An:function(){return n},RX:function(){return c},WV:function(){return l},gA:function(){return r},vr:function(){return o},wD:function(){return a},xx:function(){return u}});var i=s(35720);function a(){return(0,i.A)({url:"/project",method:"GET",headers:{Authorization:localStorage.getItem("token")}})}function r(t){return(0,i.A)({url:"/project",method:"POST",data:t,headers:{Authorization:localStorage.getItem("token")}})}function n(t){return(0,i.A)({url:`/project/address?address=${t}`,method:"GET",headers:{Authorization:localStorage.getItem("token")}})}function o(t){return(0,i.A)({url:"/project",method:"PUT",data:t,headers:{Authorization:localStorage.getItem("token")}})}function l(t){return(0,i.A)({url:`/gitea/listpath?repo=${t}`,method:"GET",headers:{Authorization:localStorage.getItem("token")}})}function c(t,e){return(0,i.A)({url:`/gitea/getfile?path=${t}&address=${e}`,method:"GET",headers:{Authorization:localStorage.getItem("token")}})}function u(t){return(0,i.A)({url:`/project?address=${t}`,method:"DELETE",headers:{Authorization:localStorage.getItem("token")}})}}}]);
//# sourceMappingURL=153.92a509b6.js.map