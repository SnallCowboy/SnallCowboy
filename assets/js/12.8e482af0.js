(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{423:function(t,e,r){t.exports=r.p+"assets/img/mvcLC.0b445b97.png"},424:function(t,e,r){t.exports=r.p+"assets/img/zj.a0a21153.png"},487:function(t,e,r){"use strict";r.r(e);var n=r(54),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"spring-mvc-原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc-原理"}},[t._v("#")]),t._v(" Spring MVC 原理")]),t._v(" "),n("p",[t._v("Spring 的模型-视图-控制器（MVC）框架是围绕一个 DispatcherServlet 来设计的，这个 Servlet\n会把请求分发给各个处理器，并支持可配置的处理器映射、视图渲染、本地化、时区与主题渲染\n等，甚至还能支持文件上传。")]),t._v(" "),n("h2",{attrs:{id:"mvc-流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mvc-流程"}},[t._v("#")]),t._v(" MVC 流程")]),t._v(" "),n("p",[n("img",{attrs:{src:r(423),alt:"MVC 流程"}})]),t._v(" "),n("p",[t._v("Http 请求到 DispatcherServlet\n(1) 客户端请求提交到 DispatcherServlet。\nHandlerMapping 寻找处理器\n(2) 由 DispatcherServlet 控制器查询一个或多个 HandlerMapping，找到处理请求的\nController。\n调用处理器 Controller\n(3) DispatcherServlet 将请求提交到 Controller。\nController 调用业务逻辑处理后，返回 ModelAndView\n(4)(5)调用业务处理和返回结果：Controller 调用业务逻辑处理后，返回 ModelAndView。\nDispatcherServlet 查询 ModelAndView\n(6)(7)处理视图映射并返回模型： DispatcherServlet 查询一个或多个 ViewResoler 视图解析器，\n找到 ModelAndView 指定的视图。\nModelAndView 反馈浏览器 HTTP\n(8) Http 响应：视图负责将结果显示到客户端。")]),t._v(" "),n("h2",{attrs:{id:"mvc-常用注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mvc-常用注解"}},[t._v("#")]),t._v(" MVC 常用注解")]),t._v(" "),n("p",[n("img",{attrs:{src:r(424),alt:"常用注解"}})])])}),[],!1,null,null,null);e.default=s.exports}}]);