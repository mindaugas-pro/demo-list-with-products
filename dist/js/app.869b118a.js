(function(e){function t(t){for(var a,r,o=t[0],u=t[1],i=t[2],s=0,d=[];s<o.length;s++)r=o[s],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);b&&b(t);while(d.length)d.shift()();return l.push.apply(l,i||[]),c()}function c(){for(var e,t=0;t<l.length;t++){for(var c=l[t],a=!0,o=1;o<c.length;o++){var u=c[o];0!==n[u]&&(a=!1)}a&&(l.splice(t--,1),e=r(r.s=c[0]))}return e}var a={},n={app:0},l=[];function r(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=a,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(c,a,function(t){return e[t]}.bind(null,a));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/demo-list-with-products/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var b=u;l.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var a=c("7a23"),n={id:"app"};function l(e,t,c,l,r,o){var u=Object(a["A"])("router-view");return Object(a["u"])(),Object(a["e"])("div",n,[Object(a["h"])(u)])}var r={name:"App"},o=(c("ba93"),c("6b0d")),u=c.n(o);const i=u()(r,[["render",l]]);var b=i,s=(c("92c6"),c("6c02")),d=(c("b0c0"),{class:"hero is-fullheight"}),O={class:"hero-head"},f={class:"hero-body"},j={class:"table container"},p={class:"table is-fullwidth"},v=Object(a["f"])("thead",null,[Object(a["f"])("tr",null,[Object(a["f"])("th",null,[Object(a["f"])("abbr",{title:"Code"},"Code")]),Object(a["f"])("th",null,"Name"),Object(a["f"])("th",null,[Object(a["f"])("abbr",{title:"Base Price"},"Base Price")]),Object(a["f"])("th",null,[Object(a["f"])("abbr",{title:"Total Price"},"Total Price")])])],-1),m=Object(a["f"])("td",null,"Subtotal:",-1),g=Object(a["f"])("td",null,null,-1),h=Object(a["f"])("td",null,null,-1),P=Object(a["f"])("div",{class:"hero-foot"},"Created by Mindaugas Januška",-1);function y(e,t,c,n,l,r){var o=Object(a["A"])("NavBar");return Object(a["u"])(),Object(a["e"])("section",d,[Object(a["f"])("div",O,[Object(a["h"])(o)]),Object(a["f"])("div",f,[Object(a["f"])("div",j,[Object(a["f"])("table",p,[v,Object(a["f"])("tbody",null,[(Object(a["u"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(l.products,(function(e){return Object(a["u"])(),Object(a["e"])("tr",{key:e.index},[Object(a["f"])("td",null,Object(a["D"])(e.code),1),Object(a["f"])("td",null,Object(a["D"])(e.name),1),Object(a["f"])("td",null,Object(a["D"])(e.basePrice),1),Object(a["f"])("td",null,Object(a["D"])(e.totalPrice),1)])})),128)),Object(a["f"])("tr",null,[m,g,Object(a["f"])("td",null,Object(a["D"])(r.subtotalBasePrice),1),Object(a["f"])("td",null,Object(a["D"])(r.subtotalTotalPrice),1),h])])]),Object(a["f"])("button",{class:"button is-success",onClick:t[0]||(t[0]=function(e){return r.back()})},"Back")])]),P])}var S={class:"navbar",role:"navigation","aria-label":"main navigation"},E=Object(a["f"])("div",{class:"navbar-brand"},[Object(a["f"])("a",{class:"navbar-item",href:"https://bulma.io"},[Object(a["f"])("img",{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"})]),Object(a["f"])("a",{role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},[Object(a["f"])("span",{"aria-hidden":"true"}),Object(a["f"])("span",{"aria-hidden":"true"}),Object(a["f"])("span",{"aria-hidden":"true"})])],-1),k=Object(a["g"])('<div id="navbarBasicExample" class="navbar-menu"><div class="navbar-end"><div class="navbar-item"><div class="buttons"><a class="button is-primary"><strong>Sign up</strong></a><a class="button is-light"> Log in </a></div></div></div></div>',1),N=[E,k];function T(e,t){return Object(a["u"])(),Object(a["e"])("nav",S,N)}const I={},B=u()(I,[["render",T]]);var x=B,w={components:{NavBar:x},computed:{subtotalBasePrice:function(){return this.$store.getters.getSubtotalBasePrice},subtotalTotalPrice:function(){return this.$store.getters.getSubtotalTotalPrice}},data:function(){return{products:null,taxValue:.21}},created:function(){this.products=JSON.parse(localStorage.getItem("products"))},methods:{back:function(){this.$router.push("/")}}};const C=u()(w,[["render",y]]);var M=C,L={class:"hero is-fullheight"},_={class:"hero-head"},A={class:"hero-body"},D={class:"container"},J={class:"table container"},U={class:"table is-fullwidth"},V=Object(a["f"])("thead",null,[Object(a["f"])("tr",null,[Object(a["f"])("th",null,[Object(a["f"])("abbr",{title:"Code"},"Code")]),Object(a["f"])("th",null,"Name"),Object(a["f"])("th",null,[Object(a["f"])("abbr",{title:"Base Price"},"Base Price")]),Object(a["f"])("th",null,[Object(a["f"])("abbr",{title:"Total Price"},"Total Price")]),Object(a["f"])("th",null,"Action")])],-1),G=["onUpdate:modelValue"],K={key:1},R=["onUpdate:modelValue"],q={key:1},F=["onUpdate:modelValue"],$={key:1},z=["onClick"],H=["onClick"],Q=["onClick"],W=["onClick"],X=Object(a["f"])("td",null,"Subtotal:",-1),Y=Object(a["f"])("td",null,null,-1),Z=Object(a["f"])("td",null,null,-1),ee=Object(a["f"])("td",null,null,-1),te=Object(a["f"])("td",null,null,-1),ce=Object(a["f"])("td",null,null,-1),ae=Object(a["f"])("td",null,null,-1),ne={key:0},le={class:"table container"},re={class:"table is-fullwidth"},oe={class:"field"},ue={class:"control"},ie=["error"],be={class:"help is-danger"},se={class:"field"},de={class:"control"},Oe=["error"],fe={class:"help is-danger"},je={class:"field"},pe={class:"control"},ve=["error"],me={class:"help is-danger"},ge={class:"field is-grouped"},he=Object(a["f"])("div",{class:"control"},[Object(a["f"])("button",{class:"button is-link"},"Submit")],-1),Pe={class:"control"},ye={key:1,class:"section"},Se=Object(a["f"])("div",{class:"hero-foot"},"Created by Mindaugas Januška",-1);function Ee(e,t,c,n,l,r){var o=Object(a["A"])("NavBar");return Object(a["u"])(),Object(a["e"])("section",L,[Object(a["f"])("div",_,[Object(a["h"])(o)]),Object(a["f"])("div",A,[Object(a["f"])("div",D,[Object(a["f"])("div",J,[Object(a["f"])("table",U,[V,Object(a["f"])("tbody",null,[(Object(a["u"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(n.products,(function(e,t){return Object(a["u"])(),Object(a["e"])("tr",{key:t},[Object(a["f"])("td",null,[e.isEditMode?Object(a["K"])((Object(a["u"])(),Object(a["e"])("input",{key:0,type:"text",class:"input","onUpdate:modelValue":function(t){return e.code=t}},null,8,G)),[[a["G"],e.code]]):(Object(a["u"])(),Object(a["e"])("span",K,Object(a["D"])(e.code),1))]),Object(a["f"])("td",null,[e.isEditMode?Object(a["K"])((Object(a["u"])(),Object(a["e"])("input",{key:0,type:"text",class:"input","onUpdate:modelValue":function(t){return e.name=t}},null,8,R)),[[a["G"],e.name]]):(Object(a["u"])(),Object(a["e"])("span",q,Object(a["D"])(e.name),1))]),Object(a["f"])("td",null,[e.isEditMode?Object(a["K"])((Object(a["u"])(),Object(a["e"])("input",{key:0,type:"text",class:"input","onUpdate:modelValue":function(t){return e.basePrice=t}},null,8,F)),[[a["G"],e.basePrice]]):(Object(a["u"])(),Object(a["e"])("span",$,Object(a["D"])(e.basePrice),1))]),Object(a["f"])("td",null,Object(a["D"])(e.totalPrice),1),Object(a["f"])("td",null,[e.isEditMode?(Object(a["u"])(),Object(a["e"])("button",{key:0,class:"button mr-1 my-1 is-small",onClick:function(c){return n.save(e,t)}},"save",8,z)):Object(a["d"])("",!0),e.isEditMode?(Object(a["u"])(),Object(a["e"])("button",{key:1,class:"button mr-1 my-1 is-small",onClick:function(c){return n.cancel(e,t)}},"cancel",8,H)):Object(a["d"])("",!0),e.isEditMode?(Object(a["u"])(),Object(a["e"])("button",{key:2,class:"button mr-1 my-1 is-small",onClick:function(c){return n.remove(e,t)}},"delete",8,Q)):Object(a["d"])("",!0),e.isEditMode?Object(a["d"])("",!0):(Object(a["u"])(),Object(a["e"])("button",{key:3,class:"button",onClick:function(c){return n.edit(e,t)}},"edit",8,W))])])})),128)),Object(a["f"])("tr",null,[X,Y,Object(a["f"])("td",null,Object(a["D"])(n.subtotalBasePrice),1),Object(a["f"])("td",null,Object(a["D"])(n.subtotalTotalPrice),1),Z]),Object(a["f"])("tr",null,[ee,te,ce,ae,n.isNewLine?Object(a["d"])("",!0):(Object(a["u"])(),Object(a["e"])("td",ne,[Object(a["f"])("button",{class:"button is-success",onClick:t[0]||(t[0]=function(e){return n.addNewLine()})},"Add New")]))])])])]),n.isNewLine?(Object(a["u"])(),Object(a["e"])("form",{key:0,onSubmit:t[5]||(t[5]=function(){return n.submit&&n.submit.apply(n,arguments)})},[Object(a["f"])("div",le,[Object(a["f"])("table",re,[Object(a["f"])("tbody",null,[Object(a["f"])("tr",null,[Object(a["f"])("td",null,[Object(a["f"])("div",oe,[Object(a["f"])("div",ue,[Object(a["K"])(Object(a["f"])("input",{type:"text",class:"input",placeholder:"code","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.code=e}),error:n.codeError},null,8,ie),[[a["G"],n.code]]),Object(a["f"])("p",be,Object(a["D"])(n.codeError),1)])])]),Object(a["f"])("td",null,[Object(a["f"])("div",se,[Object(a["f"])("div",de,[Object(a["K"])(Object(a["f"])("input",{type:"text",class:"input",placeholder:"name","onUpdate:modelValue":t[2]||(t[2]=function(e){return n.name=e}),error:n.nameError},null,8,Oe),[[a["G"],n.name]]),Object(a["f"])("p",fe,Object(a["D"])(n.nameError),1)])])]),Object(a["f"])("td",null,[Object(a["f"])("div",je,[Object(a["f"])("div",pe,[Object(a["K"])(Object(a["f"])("input",{type:"text",class:"input",placeholder:"price","onUpdate:modelValue":t[3]||(t[3]=function(e){return n.basePrice=e}),error:n.basePriceError},null,8,ve),[[a["G"],n.basePrice]]),Object(a["f"])("p",me,Object(a["D"])(n.basePriceError),1)])])]),Object(a["f"])("td",null,[Object(a["f"])("div",ge,[he,Object(a["f"])("div",Pe,[Object(a["f"])("button",{class:"button is-danger",onClick:t[4]||(t[4]=function(e){return n.cancelAddNewLine()})},"cancel")])])])])])])])],32)):Object(a["d"])("",!0),n.isNewLine?Object(a["d"])("",!0):(Object(a["u"])(),Object(a["e"])("section",ye,[Object(a["f"])("button",{class:"button is-link",onClick:t[6]||(t[6]=function(e){return n.next()})},"Next")]))])]),Se])}c("ac1f"),c("5319"),c("e9c4"),c("b64b"),c("d3b7"),c("159b"),c("a9e3"),c("35b3"),c("a434");var ke=c("5502"),Ne=c("7bb1"),Te=c("506a"),Ie={components:{NavBar:x},setup:function(){var e=Object(a["y"])([]),t=Object(a["y"])(!1),c=Object(a["y"])(.21),n=Object(ke["b"])(),l=Object(s["c"])(),r=Object(a["b"])({get:function(){return n.getters.getSubtotalBasePrice},set:function(e){n.commit("SET_SUBTOTAL_BASE_PRICE",e)}}),o=Object(a["b"])({get:function(){return n.getters.getSubtotalTotalPrice},set:function(e){n.commit("SET_SUBTOTAL_TOTAL_PRICE",e)}}),u={code:Object(Te["a"])().required().min(3),name:Object(Te["b"])().required().min(3),basePrice:Object(Te["a"])().required()},i=Object(Ne["b"])({validationSchema:u}),b=i.handleSubmit,d=b((function(c,a){var n=a.resetForm;h.value=parseFloat(h.value.replace(",",".").replace(" ",""));var l=B(h.value),r={code:f.value,name:v.value,basePrice:h.value,totalPrice:l};e.value.push(r),localStorage.setItem("products",JSON.stringify(e.value)),t.value=!1,f.value="",v.value="",h.value="",n()})),O=Object(Ne["a"])("code"),f=O.value,j=O.errorMessage,p=Object(Ne["a"])("name"),v=p.value,m=p.errorMessage,g=Object(Ne["a"])("basePrice"),h=g.value,P=g.errorMessage,y=Object(Ne["c"])();function S(){y(),t.value=!1}function E(){var e=[{code:"12345",name:"T-shirt",basePrice:"14.78"},{code:"54321",name:"Cardigan",basePrice:"34.56"}];localStorage.setItem("products",JSON.stringify(e)),localStorage.setItem("productEditIndex",null)}function k(){var e=localStorage.getItem("products"),t=JSON.parse(localStorage.getItem("products"));e||t?0===Object.keys(t).length&&E():E()}function N(){e.value=JSON.parse(localStorage.getItem("products"))}function T(){e.value.forEach((function(e){var t=B(e.basePrice);e.totalPrice=t}))}function I(){var t=0,c=0;e.value.forEach((function(e){var a=Number(e.basePrice),n=Number(e.totalPrice);t+=a,c+=n})),r.value=Math.round(100*(t+Number.EPSILON))/100,o.value=Math.round(100*(c+Number.EPSILON))/100}function B(e){var t=Number(e),a=t*c.value;return Math.round(100*(t+a+Number.EPSILON))/100}function x(e,t){localStorage.setItem("productEditIndex",t),e["isEditMode"]=!0}function w(t){t.isEditMode=!1,e.value=JSON.parse(localStorage.getItem("products")),localStorage.setItem("productEditIndex",null)}function C(t){("string"===typeof t.basePrice||t.basePrice instanceof String)&&(t.basePrice=parseFloat(t.basePrice.replace(",",".").replace(" ",""))),t.isEditMode=!1,localStorage.setItem("products",JSON.stringify(this.products)),localStorage.setItem("productEditIndex",null),e.value=JSON.parse(localStorage.getItem("products"))}function M(t,c){e.value.splice(c,1),localStorage.setItem("products",JSON.stringify(e.value)),localStorage.setItem("productEditIndex",null)}function L(){t.value=!0}function _(){localStorage.setItem("products",JSON.stringify(e.value)),l.push("/billPage")}return k(),N(),T(),I(),Object(a["I"])(e,(function(){T(),I()}),{deep:!0}),{products:e,isNewLine:t,name:v,nameError:m,basePrice:h,basePriceError:P,taxValue:c,subtotalBasePrice:r,subtotalTotalPrice:o,codeError:j,code:f,createLocalStorage:k,setProducts:N,countTotalPrice:T,countSubtotal:I,countTax:B,edit:x,cancel:w,save:C,remove:M,addNewLine:L,submit:d,cancelAddNewLine:S,next:_}}};const Be=u()(Ie,[["render",Ee]]);var xe=Be,we=[{path:"/",name:"products",component:xe},{path:"/billPage",name:"BillPage",component:M}],Ce=Object(s["a"])({history:Object(s["b"])(),routes:we}),Me=Ce,Le=Object(ke["a"])({state:{subtotalBasePrice:null,subtotalTotalPrice:null},mutations:{SET_SUBTOTAL_BASE_PRICE:function(e,t){e.subtotalBasePrice=t},SET_SUBTOTAL_TOTAL_PRICE:function(e,t){e.subtotalTotalPrice=t}},getters:{getSubtotalBasePrice:function(e){return e.subtotalBasePrice},getSubtotalTotalPrice:function(e){return e.subtotalTotalPrice}},actions:{},modules:{}});Object(a["c"])(b).use(Me).use(Le).mount("#app")},ba93:function(e,t,c){"use strict";c("d7c6")},d7c6:function(e,t,c){}});
//# sourceMappingURL=app.869b118a.js.map