(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(26)},16:function(e,t,n){},18:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),s=n.n(o),c=(n(16),n(1)),i=n(2),l=n(4),u=n(3),d=n(5),p=n(8),h=n.n(p),w=(n(18),n(9)),m=n(10),f=n.n(m),g={inputContainer:{margin:"10px"},button:{backgroundColor:"green",borderRadius:30,cursor:"pointer"}},v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={password:"",repassword:"",email:"",forgotPasswordToken:""},n.resendPassword=function(){var e=n.state,t=e.password,a=e.repassword;return""===t?alert("Please enter password"):t!==a?alert("Password did not match"):void fetch("http://54.169.122.165/forget",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n.state)}).then().catch(alert("Sorry, please try later"))},n.onChange=function(e,t){return n.setState(Object(w.a)({},e,t))},n.handleFocus=function(e){return e.target.select()},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=f.a.parseUrl(window.location.href);e.query&&this.setState({email:e.query.e.replace("%40","@"),forgotPasswordToken:e.query.k})}},{key:"render",value:function(){var e=this,t=this.state,n=t.password,a=t.repassword;return r.a.createElement("div",null,r.a.createElement("div",{style:g.inputContainer},"Password : ",r.a.createElement("input",{type:"password",onFocus:this.handleFocus,onChange:function(t){return e.onChange("password",t.target.value)},value:n})),r.a.createElement("div",{style:g.inputContainer},"Retype Password : ",r.a.createElement("input",{type:"password",onFocus:this.handleFocus,onChange:function(t){return e.onChange("repassword",t.target.value)},value:a})),r.a.createElement("div",{style:g.button,onClick:this.resendPassword},"Proceed"))}}]),t}(r.a.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),r.a.createElement(v,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[11,2,1]]]);
//# sourceMappingURL=main.d908a97b.chunk.js.map