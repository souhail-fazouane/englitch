(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){e.exports=a.p+"static/media/ENGLITCH.e54181f1.png"},15:function(e){e.exports=JSON.parse('"smart-clever important-essential good-excellent stupid-dumb irrelevant-Useless complete-perfect bad-inferior interesting-fascinating"')},16:function(e,t,a){e.exports=a(23)},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),i=(a(21),a(1)),s=a(4),l=a(3),m=a(2),u=a(6),d=a(7),f=a(14),p=a.n(f),v=a(10);function g(e){var t=e.valeur,a=e.isDisplayed,n=e.onSelected,c=a?t:null,o=Object(v.b)({opacity:a?0:1,transform:"perspective(600px) rotateX(".concat(a?0:180,"deg)"),config:{mass:5,tension:500,friction:80}}),i=o.transform,s=o.opacity;return r.a.createElement("div",{className:"memory-card",onClick:n},r.a.createElement(v.a.div,{className:"back-face",style:{opacity:s.interpolate((function(e){return 1-e})),transform:i,backgroundColor:"white",borderRadius:"15px"}},r.a.createElement("div",{className:"card-value",style:{display:"grid"}},r.a.createElement("div",{style:{margin:"auto"}},c))),r.a.createElement(v.a.div,{className:"front-face",style:{opacity:s,transform:i.interpolate((function(e){return"".concat(e," rotateX(180deg)")})),borderRadius:"25px"}},r.a.createElement("img",{className:"front-face",style:{borderRadius:"15px"},src:p.a,alt:"logoEnglitch"})))}function y(e,t){var a=t-e;return Math.floor(Math.random()*a)+e}function b(e){for(var t=Array.from(e),a=0;a<e.length-1;a++){var n=y(a,e.length),r=t[a];t[a]=t[n],t[n]=r}return t}var h=a(15),E=(a(12),h.split(" "));function j(e,t){return Array.from(Array(t-e).keys()).map((function(t){return e+t}))}function O(){var e=b(E).slice(0,6);return{randomWords:b(e.flatMap((function(e){return e.split("-")}))),areSynonyms:function(t,a){return e.includes("".concat(t,"-").concat(a))||e.includes("".concat(a,"-").concat(t))}}}function N(){var e=function(){var e=Object(n.useState)(O),t=Object(d.a)(e,2),a=t[0],r=a.randomWords,c=a.areSynonyms,o=t[1],i=Object(n.useState)([]),s=Object(d.a)(i,2),l=s[0],m=s[1],f=Object(n.useState)([]),p=Object(d.a)(f,2),v=p[0],g=p[1],y=Object(n.useState)(0),b=Object(d.a)(y,2),h=b[0],E=b[1],j=Object(n.useState)(0),N=Object(d.a)(j,2),k=N[0],S=N[1];return Object(n.useEffect)((function(){2===l.length&&setTimeout((function(){return m([])}),1e3)}),[l]),{randomWords:r,choisirMot:function(e){if(2!==l.length){S(k+1);var t=[].concat(Object(u.a)(l),[e]);if(2===t.length){var a=Object(d.a)(t,2),n=a[0],r=a[1];c(n,r)&&(g([].concat(Object(u.a)(v),[[n,r]])),E(h+1))}m(t)}},couplechoisi:l,score:h,clicks:k,completedWords:v,restartGame:function(){S(0),m([]),g([]),o(O)}}}(),t=e.randomWords,a=e.choisirMot,c=e.couplechoisi,o=e.score,i=(e.clicks,e.completedWords),s=(e.restartGame,function(){return r.a.createElement("div",{style:{backgroundColor:"#424C55",maxHeight:"10vh",padding:"10px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:15}},r.a.createElement("p",{style:{margin:0}},"Score : ",o))});return r.a.createElement("div",{className:"memory-game",style:{display:"flex",alignContent:"center",justifyContent:"center",height:"100%",width:"100%"}},r.a.createElement("div",{className:"memory-game",style:{display:"flex",alignContent:"center",justifyContent:"center",height:"100%",width:"100%"}},j(0,3).map((function(e){return r.a.createElement("div",{key:String(e),className:"border-row"},j(0,4).map((function(n){var o=4*e+n,s=t[o],l=c.includes(s)||i.some((function(e){return e.includes(s)}));return r.a.createElement(g,{className:"memory-card",key:String(o),valeur:s,isDisplayed:l,onSelected:function(){return a(s)}})})))})),r.a.createElement(s,null)))}var k=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(N,{className:"memory-game"})}}]),a}(n.Component);a(22);var S=function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark",style:{height:"40%"}},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Englitch"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"}))},x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null),r.a.createElement(k,{id:"game",className:"memory-game",style:{position:"absolute"}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.5947c43d.chunk.js.map