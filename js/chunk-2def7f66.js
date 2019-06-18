(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2def7f66"],{"57b1":function(t,e,s){"use strict";var r=s("f99d"),n=s.n(r);n.a},6371:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wz-page"},[s("articleheader"),s("h2",[t._v("概述")]),s("p",[t._v("2018年时想做一个使用C# razor语法写html页面工具.当时研究了asp.net的razor后没找到生成静态页面的办法,后来使用了三方的RazorEngine开源库,得以实现.")]),s("p",[t._v("原理是使用RazorEngine提供的方法,将Razor页面编译成静态html.为了方便使用,做成了vs插件.支持在vs2017上使用")]),s("h2",[t._v("插件使用")]),s("p",[t._v("在vs2017安装这个插件,安装方法是找到插件项目的编译目录,运行WebFilePublishVSIX.vsix这个文件.按提示安装,过程中会要求关闭vs.")]),s("p",[t._v('打开或者新建一个项目,添加几个web文件,如home.js,home.css,home.cshtml"')]),s("h4",[t._v("发布文件 / 发布目录 / 发布项目")]),s("p",[t._v("插件的三个功能,分别针对文件,目录,整个项目.可以发布项目中选中的单个或多个文件,目录.发布项目则是编译项目后,发布所有文件.")]),s("p",[t._v('在项目管理窗口中,右击一个(或多个)文件,点击菜单项 "发布文件 Alt+1 Alt+1" 可以发布该文件.')]),s("p",[t._v("当前正在编辑的文件可以按Alt+AA发布.为了便于修改文件后马上发布.")]),s("p",[t._v("同理,右击文件夹时,会发布文件夹中的所有文件.")]),s("p",[t._v('右击项目时,点击菜单项"发布web",这时会先编译该项目,然后发布项目中所有文件.')]),s("p",[t._v("发布时会判断文件类型,如果是js,css,jpg等web静态文件,则会直接复制到发布目录.cshtml文件会编译成html输出,这是插件的主要功能.")]),s("h2",[t._v("配置文件")]),s("p",[t._v('发布功能由配置文件设定,文件位于项目根目录下,默认名"publish.json",每次发布动作时,会读取这个文件.插件项目有个默认模板在 "/JsonCfg/publish.json".')]),s("p",[t._v("配置文件可以设定发布到哪个目录,允许发布文件,不允许发布文件,发布前是否清空发布目录.没有配置文件时,会使用默认配置.")]),s("h2",[t._v("RazorEngine")]),s("p",[t._v("编译生成razor页面时,RazorEngine要使用RoslynCompiler工具编译.否则会出现编译卡死.在控制台程序中,默认的编译工具不会有问题,但做到插件中后出现卡死.")]),s("h2",[t._v("vs平台的前端打包工具")]),s("p",[t._v("相比于node平台的webpack等前端打包工具的热度,vs平台就比较冷清,虽然功能上并不缺少,但在前后端分离之后,几乎很少有用vs平台做前端的了吧.")]),s("p",[t._v("这个插件解决html生成问题,css,js的话,可以安装这几个插件,打包js成一个文件,编译less,scss,stylus等,非常好用.这样看来,vs工具做前端工程也较便利了.")]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4)],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("js插件: BundlerMinifier "),s("a",{attrs:{href:"https://github.com/madskristensen/BundlerMinifier",target:"_blank"}},[t._v("https://github.com/madskristensen/BundlerMinifier")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("css插件: WebCompiler "),s("a",{attrs:{href:"https://github.com/madskristensen/WebCompiler",target:"_blank"}},[t._v("https://github.com/madskristensen/WebCompiler")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("雪碧图: ImageSprites "),s("a",{attrs:{href:"https://github.com/madskristensen/ImageSprites",target:"_blank"}},[t._v("https://github.com/madskristensen/ImageSprites")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("压缩图片: ImageOptimizer "),s("a",{attrs:{href:"https://github.com/madskristensen/ImageOptimizer",target:"_blank"}},[t._v("https://github.com/madskristensen/ImageOptimizer")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("插件项目git: "),s("a",{attrs:{href:"https://github.com/mirrortom/WebFilePublishVSIX",target:"_blank"}},[t._v("https://github.com/mirrortom/WebFilePublishVSIX")])])}],a=s("d225"),i=s("308d"),c=s("6bb5"),h=s("4e2b"),l=s("9ab4"),o=s("60a3"),u=s("dedd"),_=function(t){function e(){return Object(a["a"])(this,e),Object(i["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(h["a"])(e,t),e}(o["b"]);_=l["a"]([Object(o["a"])({components:{articleheader:u["a"]}})],_);var b=_,v=b,p=s("2877"),m=Object(p["a"])(v,r,n,!1,null,"507dff79",null);e["default"]=m.exports},dedd:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"text-center"},[t._v(t._s(this.$route.query.title))]),s("h5",[t._v("\n        作者: \n        "),s("span",[t._v(t._s(this.$route.query.author))])]),s("h5",[t._v("\n        日期: \n        "),s("span",[t._v(t._s(this.$route.query.date))])]),s("a",{staticClass:"btn link backbtn",on:{click:function(e){return t.goback()}}},[t._v("返回上页")]),s("hr",{staticClass:"line"})])},n=[],a=s("d225"),i=s("b0b4"),c=s("308d"),h=s("6bb5"),l=s("4e2b"),o=s("9ab4"),u=s("60a3"),_=function(t){function e(){return Object(a["a"])(this,e),Object(c["a"])(this,Object(h["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(i["a"])(e,[{key:"goback",value:function(){this.$router.go(-1)}}]),e}(u["b"]);_=o["a"]([u["a"]],_);var b=_,v=b,p=(s("57b1"),s("2877")),m=Object(p["a"])(v,r,n,!1,null,"cad40f34",null);e["a"]=m.exports},f99d:function(t,e,s){}}]);