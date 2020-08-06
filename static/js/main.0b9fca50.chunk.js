(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),c=n.n(a),i=n(5),s=n(7),u=n(14),l=n(15),h=(n(26),n(1)),d=n(2),f=n(4),b=n(3),p=function(e){var t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))},m=function(e){var t=e.robots,n=void 0===t?[]:t;return o.a.createElement("div",null,n.map((function(e,t){return o.a.createElement(p,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})})))},v=function(e){var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{"aria-label":"Search Robots",name:"searchBox",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},E=function(e){return o.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},g=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(d.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),n}(r.Component),O=(n(27),function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={count:1},r}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){var e=this;return o.a.createElement("button",{onClick:function(){return e.setState((function(e){return{count:e.count+1}}))}},"Count: ",this.state.count)}}]),n}(r.Component)),j=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(O,null))}}]),n}(r.Component),y=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).filterRobots=function(){return e.props.robots.filter((function(t){return t.name.toLowerCase().includes(e.props.searchField.toLowerCase())}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.onSearchChange,n=e.isPending;return o.a.createElement("div",{className:"tc"},o.a.createElement(j,null),o.a.createElement(v,{searchChange:t}),o.a.createElement(E,null,n?o.a.createElement("h1",null,"Loading"):o.a.createElement(g,null,o.a.createElement(m,{robots:this.filterRobots()}))))}}]),n}(r.Component),w=function(e){return fetch(e).then((function(e){return e.json()}))},R=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement(y,this.props)}}]),n}(r.Component),C=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.currentTarget.value})},onRequestRobots:function(){return e((t=w,function(e){return e({type:"REQUEST_ROBOTS_PENDING"}),t("https://jsonplaceholder.typicode.com/users").then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}));var t}}}))(R),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _={searchField:""},N={robots:[],isPending:!0,error:!1},T=(n(28),Object(l.createLogger)()),U=Object(i.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}}}),F=Object(i.d)(U,Object(i.a)(u.a,T));c.a.render(o.a.createElement(s.a,{store:F},o.a.createElement(C,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends-redux",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriends-redux","/service-worker.js");S?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):k(e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.0b9fca50.chunk.js.map