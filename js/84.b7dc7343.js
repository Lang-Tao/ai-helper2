"use strict";(self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[]).push([[84],{7084:function(t,e,i){i.r(e),i.d(e,{default:function(){return r}});var a=function(){var t=this,e=t._self._c;return e("div",[e("el-aside",{staticStyle:{height:"100vh",position:"fixed"},attrs:{width:"200px"}},[e("el-menu",{staticStyle:{height:"100vh"},attrs:{"default-active":t.activePath,router:""}},[e("el-menu-item",{attrs:{index:t.getDynamicPath("home")}},[e("i",{staticClass:"iconfont icon-xiangmugailan",staticStyle:{margin:"0 10px 0 0px","font-size":"18px","line-height":"18px"}}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("项目概览")])]),e("el-menu-item",{attrs:{index:t.getDynamicPath("QnA")}},[e("i",{staticClass:"iconfont icon-zhinengwenda",staticStyle:{margin:"0 10px 0 0px","font-size":"18px","line-height":"18px"}}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("智能问答")])]),e("el-menu-item",{attrs:{index:t.getDynamicPath("Repository")}},[e("i",{staticClass:"iconfont icon-daimacangku",staticStyle:{margin:"0 10px 0 0px","font-size":"18px","line-height":"18px"}}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("代码仓库")])]),e("el-menu-item",{attrs:{index:t.getDynamicPath("Collaboration")}},[e("i",{staticClass:"iconfont icon-xiangmuxietong",staticStyle:{margin:"0 10px 0 0px","font-size":"18px","line-height":"18px"}}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("项目协同")])]),e("el-menu-item",{attrs:{index:t.getDynamicPath("Summary")}},[e("i",{staticClass:"iconfont icon-xiangmuzongjie",staticStyle:{margin:"0 10px 0 0px","font-size":"18px","line-height":"18px"}}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("项目总结")])]),e("el-menu-item",{attrs:{index:t.getDynamicPath("Setting")}},[e("i",{staticClass:"iconfont icon-shezhi",staticStyle:{margin:"0 10px 0 0px","font-size":"18px","line-height":"18px"}}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("项目设置")])])],1)],1),e("el-main",{staticStyle:{padding:"0","margin-left":"200px"}},[e("router-view")],1)],1)},s=[],n={name:"ProjectDetails",props:["address"],data(){return{project:{},activePath:`${this.$route.path.split("/").slice(0,4).join("/")}`}},created(){this.fetchProjectData()},computed:{getDynamicPath(){return t=>`/project-details/${this.$route.params.address}/${t}`}},watch:{"$route.params.address":"fetchProjectData"},methods:{fetchProjectData(){const t=this.$route.params.address,e={1:{name:"项目1",description:"项目1的描述"}};this.project=e[t]||{name:"未知项目",description:"未找到项目详情"}}}},l=n,o=i(1656),c=(0,o.A)(l,a,s,!1,null,"1ea99cca",null),r=c.exports}}]);
//# sourceMappingURL=84.b7dc7343.js.map