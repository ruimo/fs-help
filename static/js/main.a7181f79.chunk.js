(this["webpackJsonpfs-help"]=this["webpackJsonpfs-help"]||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/ingress00.d378a7ea.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/ingress01.6c18522f.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/ingress02.774137c9.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/ingress03.1945381e.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/ingress04.148fa4a4.jpg"},39:function(e){e.exports=JSON.parse('{"howto.title":"\u4f7f\u3044\u65b9","howto.ingress0":"\u30b2\u30fc\u30e0\u753b\u9762\u306e\u5de6\u4e0a\u3092\u30bf\u30c3\u30d7\u3057\u307e\u3059\u3002","howto.ingress1":"\u53f3\u4e0a\u306e\u30a2\u30a4\u30b3\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u3066\u30af\u30ea\u30c3\u30d7\u30fb\u30dc\u30fc\u30c9\u306b\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30fb\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002","howto.ingress2":"\u5229\u7528\u6761\u4ef6\u3092\u78ba\u8a8d\u3057\u554f\u984c\u304c\u7121\u3051\u308c\u3070\u78ba\u8a8d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002","howto.ingress3":"\u30c4\u30fc\u30eb\u306e\u3053\u306e\u90e8\u5206\u3067\u9577\u62bc\u3057\u3092\u3057\u3066\u8cbc\u308a\u4ed8\u3051\u3092\u9078\u3073\u307e\u3059\u3002","howto.ingress4":"\u767b\u9332\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u958b\u59cb\u30ec\u30b3\u30fc\u30c9\u3092\u8a18\u9332\u3057\u307e\u3059\u3002\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u304c\u7d42\u4e86\u3057\u305f\u3089\u540c\u3058\u64cd\u4f5c\u3092\u7e70\u308a\u8fd4\u3057\u3066\u7d42\u4e86\u30ec\u30b3\u30fc\u30c9\u3092\u8a18\u9332\u3057\u3066\u304f\u3060\u3055\u3044\u3002","next":"\u6b21\u3078","prev":"\u623b\u308b","close":"\u9589\u3058\u308b"}')},40:function(e){e.exports=JSON.parse('{"howto.title":"How to","howto.ingress0":"Tab the upper left area of the screen.","howto.ingress1":"Tab the upper right icon and copy your agent status into clip board.","howto.ingress2":"Read the term of use and click confirm if you agree.","howto.ingress3":"Long tap here in the tool and select paste.","howto.ingress4":"Click the register button to submit your start record. Once you complete the activity, you need to repeat the same operation to record your end record.","next":"Next","prev":"Previous","close":"Close"}')},41:function(e,t,a){e.exports=a(57)},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(32),s=a.n(r),i=a(59),c=(a(46),a(6)),l=a(7),u=a(9),h=a(8),m=a(10),p=a(21),d=a(11),g=(a(47),a(18)),f=(a(48),a(19)),b=a.n(f),w=a(33),E=a.n(w),v=a(34),j=a.n(v),k=a(35),y=a.n(k),O=a(36),x=a.n(O),N=a(37),C=a.n(N),J=a(58),S=a(23),B=a(12),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={phase:0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=[E.a,j.a,y.a,x.a,C.a];return o.a.createElement("div",null,Object(g.a)(Array(t.length).keys()).map((function(a){return n=a,o.a.createElement("div",{key:n,className:b()("card",{"is-hidden":e.state.phase!==n})},o.a.createElement("div",{className:"card-image"},o.a.createElement("figure",{className:"image"},o.a.createElement("img",{className:"helpImage",src:t[n],alt:"image"+n}))),o.a.createElement("div",{className:"card-content"},o.a.createElement("div",{className:"content"},o.a.createElement(J.a,{id:"howto.ingress"+n})),o.a.createElement("button",{className:b()("button is-link nav",{"is-hidden":0===e.state.phase}),onClick:function(){return e.setState({phase:e.state.phase-1})}},o.a.createElement(J.a,{id:"prev"}),"\xa0",o.a.createElement(S.a,{icon:B.a})),o.a.createElement("button",{className:b()("button is-link nav",{"is-hidden":e.state.phase===t.length-1}),onClick:function(){return e.setState({phase:e.state.phase+1})}},o.a.createElement(J.a,{id:"next"}),"\xa0",o.a.createElement(S.a,{icon:B.b})),o.a.createElement("button",{className:b()("button is-link nav",{"is-hidden":e.state.phase!==t.length-1}),onClick:function(){return window.close()}},o.a.createElement(J.a,{id:"close"}),"\xa0",o.a.createElement(S.a,{icon:B.c}))));var n})))}}]),t}(n.Component),T=Object(d.e)(I),W=(a(55),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p.a,null,o.a.createElement(d.a,{exact:!0,path:"/",render:function(){return o.a.createElement(p.b,{to:"/howto"},o.a.createElement(J.a,{id:"howto.title"}))}}),o.a.createElement(d.a,{exact:!0,path:"/howto",render:function(){return o.a.createElement(T,null)}})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(39),H=a(40),L=(a(56),{ja:A,en:H}),P=navigator.language.split(/[-_]/)[0],R="ja"===P?P:"en";s.a.render(o.a.createElement(i.a,{locale:R,messages:L[R]},o.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.a7181f79.chunk.js.map