(function(e){function t(t){for(var n,s,i=t[0],c=t[1],l=t[2],m=0,u=[];m<i.length;m++)s=i[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container app-container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 col-sm-12 mb-3"},[a("Card",{attrs:{user:e.user,components:e.components},on:{componentWasClicked:e.handleComponentWasClicked}})],1),a("div",{staticClass:"col-md-8 col-sm-12"},[a(e.currentComponent,{tag:"component",on:{componentWasClicked:e.handleComponentWasClicked}})],1)])])},o=[],s=(a("d81d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[a("img",{staticClass:"card-img-top",attrs:{src:e.user.avatar_url,alt:e.user.bio}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title",domProps:{textContent:e._s(e.user.name)}}),a("p",{staticClass:"card-text",domProps:{textContent:e._s(e.user.bio)}}),a("div",{staticClass:"list-group"},e._l(e.components,(function(t,n){return a("a",{key:n,staticClass:"list-group-item list-group-item-action",class:t.active?"active":"",attrs:{href:"#"},on:{click:function(t){return e.$emit("componentWasClicked",n)}}},[e._v(" "+e._s(t.title)+" ")])})),0)])])}),i=[],c={props:["user","components"]},l=c,p=(a("9a35"),a("2877")),m=Object(p["a"])(l,s,i,!1,null,"27f40900",null),u=m.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("hr"),a("h3",[e._v("Welcome")]),a("hr"),a("p",{staticClass:"welcome"},[e._v(" Welcome To My Website, if you are looking for a talented software developer that can take your application to the next level i might know some "),a("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("componentWasClicked",3)}}},[e._v("one")]),e._v(" who can help You. ")]),a("hr"),a("h3",{staticClass:"info-title"},[e._v("About Me")]),a("hr"),a("p",{staticClass:"info"},[e._v(" i'm abdelhammied elsayed senior full stack developer. "),a("br"),a("br"),e._v(" with high "),a("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("componentWasClicked",1)}}},[e._v(" skills ")]),e._v(" at writing scaleable projects and modules using "),a("a",{attrs:{href:"https://www.php.net"}},[e._v("php")]),e._v(", "),a("a",{attrs:{href:"https://www.laravel.com"}},[e._v("laravel")]),e._v(", "),a("a",{attrs:{href:"https://www.vuejs.org"}},[e._v("vuejs")]),e._v(". "),a("br"),a("br"),e._v(" With +5 Years of "),a("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("componentWasClicked",2)}}},[e._v(" experience ")]),e._v(" and more than 5 large scale live projects. you might git more confident to "),a("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("componentWasClicked",3)}}},[e._v(" hire me up ")])])])},f=[],v={},h=v,b=(a("8b79"),Object(p["a"])(h,d,f,!1,null,"2013aa73",null)),g=b.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.skills,(function(t,n){return a("div",{key:t+"-"+n,staticClass:"skill-group"},[a("h4",{staticClass:"skill-group-title",domProps:{textContent:e._s(Object.keys(t)[0])}}),a("ul",{staticClass:"list-group list-group-horizontal"},e._l(e.skills[n][Object.keys(t)[0]],(function(t,n){return a("li",{key:n,staticClass:"row list-group-item d-flex justify-content-between align-items-center"},[a("div",{staticClass:"col-md-4"},[a("p",{domProps:{textContent:e._s(t.name)}})]),a("div",{staticClass:"col-md-8"})])})),0)])})),0)},y=[],_=a("c1c4"),w={data:function(){return{skills:_}}},k=w,x=(a("bc76"),Object(p["a"])(k,C,y,!1,null,"3d9558a4",null)),j=x.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},e._l(e.experiences,(function(t,n){return a("div",{key:n,staticClass:"col-md-12"},[a("a",{attrs:{href:t.companyWebsite},domProps:{textContent:e._s(t.companyName)}}),e._v(" - "),a("span",{domProps:{textContent:e._s(t.period)}}),e._v(" - ( "),a("span",{domProps:{textContent:e._s(t.jobType)}}),e._v(" ) "),a("p",{domProps:{textContent:e._s(t.jobTitle)}})])})),0)},S=[],M=a("89cf"),O={data:function(){return{experiences:M}}},T=O,N=Object(p["a"])(T,P,S,!1,null,null,null),W=N.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("hr"),a("h3",[e._v("Send Me Message")]),a("hr"),e.showAlert?a("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[e._v(" I Recived Your Message Successfuly, and will get in touch with you ASAP. "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:function(t){e.showAlert=!1}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]):e._e(),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[e._v("Name / Nickname")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.visitor.name,expression:"visitor.name"}],staticClass:"form-control",attrs:{type:"text",required:"",name:"name",readonly:e.loading,id:"name",placeholder:"Enter Your Name"},domProps:{value:e.visitor.name},on:{input:function(t){t.target.composing||e.$set(e.visitor,"name",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[e._v("Email Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.visitor.email,expression:"visitor.email"}],staticClass:"form-control",attrs:{type:"email",readonly:e.loading,required:"",name:"email",id:"email",placeholder:"Enter Your Email Address"},domProps:{value:e.visitor.email},on:{input:function(t){t.target.composing||e.$set(e.visitor,"email",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"phone"}},[e._v("Phone Number")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.visitor.phone,expression:"visitor.phone"}],staticClass:"form-control",attrs:{type:"text",readonly:e.loading,name:"phone",id:"phone",placeholder:"Enter Your Phone Number"},domProps:{value:e.visitor.phone},on:{input:function(t){t.target.composing||e.$set(e.visitor,"phone",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"message"}},[e._v("Message")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.visitor.message,expression:"visitor.message"}],staticClass:"form-control",attrs:{placeholder:"Enter Your Message",readonly:e.loading,required:"",rows:"5"},domProps:{value:e.visitor.message},on:{input:function(t){t.target.composing||e.$set(e.visitor,"message",t.target.value)}}})]),a("div",{staticClass:"form-group text-right"},[a("button",{staticClass:"btn btn-primary form-control",class:[e.loading?"py-1":""],attrs:{disabled:e.loading},on:{click:e.sendMessage}},[e.loading?a("div",{staticClass:"spinner-border text-light p-1",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[e._v("Loading...")])]):a("span",[e._v("Send")])])]),a("hr"),a("h3",[e._v("Contact Me Directly")]),a("hr"),e._m(0)])},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("a",{staticClass:"ml-2 btn btn-primary btn-sm",attrs:{href:"mailto:abdelhammied@gmail.com",target:"_blank"}},[a("i",{staticClass:"fa fa-envelope"})]),a("a",{staticClass:"ml-2 btn btn-primary btn-sm",attrs:{href:"tel:+201006994920"}},[a("i",{staticClass:"fa fa-phone"})]),a("a",{staticClass:"ml-2 btn btn-primary btn-sm",attrs:{target:"_blank",href:"https://www.facebook.com/Abdelhammied1/"}},[a("i",{staticClass:"fa fa-facebook-f"})]),a("a",{staticClass:"ml-2 btn btn-primary btn-sm",attrs:{href:"https://www.linkedin.com/in/abdelhamed-elsayed-980159126/"}},[a("i",{staticClass:"fa fa-linkedin"})])])}],D=(a("b0c0"),a("96cf"),a("1da1")),$={data:function(){return{visitor:{name:"",email:"",phone:"",message:""},loading:!1,showAlert:!1}},methods:{sendMessage:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.visitor,!(a.name&&a.email&&a.message)){t.next=10;break}return e.loading=!0,n=Math.floor(1e4*Math.random()),a.date=(new Date).toLocaleString(),t.next=7,e.firebase.database().ref("message-".concat(n)).set(a);case 7:e.visitor={},e.loading=!1,e.showAlert=!0;case 10:case"end":return t.stop()}}),t)})))()}}},I=$,J=Object(p["a"])(I,E,A,!1,null,null,null),F=J.exports,B=a("bc3a"),Y=a.n(B),L={data:function(){return{user:{}}},methods:{fetchUserProfil:function(){var e=this;Y.a.get("https://api.github.com/users/Abdelhammied").then((function(t){return e.user=t.data})).catch((function(e){return console.log(e)}))}},mounted:function(){this.fetchUserProfil()}},R={mixins:[L],components:{Card:u,Info:g,Skills:j,Experience:W,Contact:F},data:function(){return{components:[{title:"Info",active:!0},{title:"Skills",active:!1},{title:"Experience",active:!1},{title:"Contact",active:!1}],currentComponent:"Info"}},methods:{handleComponentWasClicked:function(e){this.components.map((function(e){e.active=!1}));var t=this.components[e];t.active=!0,this.currentComponent=t.title}}},z=R,H=(a("70cc"),Object(p["a"])(z,r,o,!1,null,"50798b41",null)),Q=H.exports,q=a("59ca");a("66ce");n["a"].config.productionTip=!1;var U={apiKey:"AIzaSyDT-zb0EAhlC42NmWwDQBu0brbs2g067dQ",authDomain:"todo-list-30a87.firebaseapp.com",databaseURL:"https://todo-list-30a87.firebaseio.com",projectId:"todo-list-30a87",storageBucket:"todo-list-30a87.appspot.com",messagingSenderId:"1086977210421",appId:"1:1086977210421:web:9378b46b6d99eb0825197c"};q["initializeApp"](U),n["a"].mixin({data:function(){return{firebase:q}}}),new n["a"]({render:function(e){return e(Q)}}).$mount("#app")},"70cc":function(e,t,a){"use strict";var n=a("c72c"),r=a.n(n);r.a},"89cf":function(e){e.exports=JSON.parse('[{"companyName":"Crossworkers-Egypt","companyWebsite":"https://www.crossworkers-egypt.com/","period":"Aug 2020 - present","jobTitle":"Senior Full Stack Develeoper","jobType":"Full Time"},{"companyName":"Bispace","companyWebsite":"http://bispace.net/","period":"March 2020 - present","jobTitle":"Senior Full Stack Develeoper","jobType":"Part Time"},{"companyName":"Mesmak Egypt","companyWebsite":"https://www.facebook.com/mesmakcompany/","period":"Jan 2020 - Aug 2020","jobTitle":"Full Stack Instructor","jobType":"Freelancer"},{"companyName":"SmartappCO","companyWebsite":"https://smartappco.com/","period":"March 2019 - Aug 2020","jobTitle":"Senior Full Stack Develeoper","jobType":"Part Time"},{"companyName":"Corpy Core","companyWebsite":"https://corpy.net/","period":"Nov 2018 - March 2019","jobTitle":"Mid Senior Backend Develeoper","jobType":"Full Time"},{"companyName":"Im Holding","companyWebsite":"https://www.imholding.com/","period":"March 2017 - Nov 2018","jobTitle":"Junior PHP Developer","jobType":"Full Time"}]')},"8b79":function(e,t,a){"use strict";var n=a("afec"),r=a.n(n);r.a},"9a35":function(e,t,a){"use strict";var n=a("ff90"),r=a.n(n);r.a},afec:function(e,t,a){},bc76:function(e,t,a){"use strict";var n=a("d08e"),r=a.n(n);r.a},c1c4:function(e){e.exports=JSON.parse('[{"Frontend":[{"name":"HTML","percentage":90},{"name":"CSS","percentage":85},{"name":"Javascript","percentage":87},{"name":"jQuery","percentage":70},{"name":"Bootstrap","percentage":85},{"name":"Vue.Js","percentage":87},{"name":"React.Js","percentage":80}]},{"Backend":[{"name":"PHP","percentage":90},{"name":"Laravel","percentage":90},{"name":"Node.Js"},{"name":"Experss.Js"},{"name":"MySQl","percentage":85},{"name":"MongoDB"}]},{"Other":[{"name":"Git","percentage":86},{"name":"Server Management","percentage":80},{"name":"CICD-Process","percentage":90}]},{"Coding":[{"name":"OOP","percentage":90},{"name":"Design Patterns","percentage":89},{"name":"Clean Code","percentage":92}]}]')},c72c:function(e,t,a){},d08e:function(e,t,a){},ff90:function(e,t,a){}});
//# sourceMappingURL=app.f24f056f.js.map