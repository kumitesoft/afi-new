_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{IB8S:function(e,t,n){e.exports={inbetweenOne_container:"InbetweenOne_inbetweenOne_container__1IGtT",inbetweenOne_wrapper:"InbetweenOne_inbetweenOne_wrapper__3VZ3h"}},NzbH:function(e,t,n){e.exports={empty_padding_newsletter:"Newsletter_empty_padding_newsletter__1cz-s",newsletter_container:"Newsletter_newsletter_container__gIHk5",newsletter_wrapper:"Newsletter_newsletter_wrapper__3sEMR",newsletter_component:"Newsletter_newsletter_component__2fGrr",newsletter_signinbox:"Newsletter_newsletter_signinbox__PXMdH",newsletter_btn:"Newsletter_newsletter_btn__3XlFu"}},OREE:function(e,t,n){e.exports={homeNews_container:"HomeNews_homeNews_container__gOpIK",homeNews_title:"HomeNews_homeNews_title__3zxOD",homeNews_title_left:"HomeNews_homeNews_title_left__Lcqn_",homeNews_wrapper:"HomeNews_homeNews_wrapper__3lYjM",homeNews_buttons:"HomeNews_homeNews_buttons__2c1ec",homeNews_box:"HomeNews_homeNews_box__1WTYs"}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return ae}));var r=n("o0o1"),a=n.n(r);function s(e,t,n,r,a,s,i){try{var o=e[s](i),l=o.value}catch(c){return void n(c)}o.done?t(l):Promise.resolve(l).then(r,a)}var i=n("a3WO");var o=n("BsWD");function l(e){return function(e){if(Array.isArray(e))return Object(i.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=n("ODXe"),u=n("MX0m"),f=n.n(u),d=n("q1tI"),m=n.n(d),p=n("80PL"),_=n("vcXL"),w=n.n(_),x=n("z9a/"),h=n.n(x),v=m.a.createElement,g=function(e){var t=e.id,n=e.name,r=(e.description,e.price,e.category,e.image);e.createdAt;return v("div",{key:n,className:"jsx-2170358054 "+(h.a.blockSmall_container||"")},v("p",{className:"jsx-2170358054 "+(h.a.titleSmall||"")},n),v("a",{href:"#!",onClick:function(){return fetch("http://localhost:3000/api/popularity/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"}})},className:"jsx-2170358054"},v("img",{src:r,className:"jsx-2170358054 "+(h.a.imageSmall||"")})),v(f.a,{id:"2170358054"},[]))},N=n("eva/"),b=n.n(N),j=m.a.createElement,y=function(e){var t=e.data,n=e.latest;return j("div",{className:"jsx-2085888330 "+(b.a.latestNews_container||"")},j("div",{className:"jsx-2085888330 "+(b.a.latestNews_title||"")},j("p",{className:"jsx-2085888330 "+(b.a.latestNews_title_left||"")},"Najnowsze"),j("a",{href:"#allImages",onClick:function(){return n()},className:"jsx-2085888330 "+(b.a.latestNews_title_right||"")},j("p",{className:"jsx-2085888330"},"Zobacz"))),t?j("div",{className:"jsx-2085888330 "+(b.a.latestNews_wrapper||"")},t.map((function(e){return j(g,{id:e._id,name:e.name,description:e.description,price:e.price,category:e.category,image:e.image,createdAt:e.createdAt,key:e.name})}))):j("p",{className:"jsx-2085888330"},"loading"),j(f.a,{id:"2085888330"},[]))},S=n("OREE"),E=n.n(S),O=n("IObC"),k=m.a.createElement,z=function(e){var t=e.data,n=e.latest,r=e.popular,a=e.under,s=e.random;return k("div",{id:"allImages",className:"jsx-2085888330 "+(E.a.homeNews_container||"")},k("div",{className:"jsx-2085888330 "+(E.a.homeNews_title||"")},k("p",{className:"jsx-2085888330 "+(E.a.homeNews_title_left||"")},"Wejdz na wyzszy poziom zakupow")),t?k("div",{className:"jsx-2085888330 "+(E.a.homeNews_wrapper||"")},k("div",{className:"jsx-2085888330 "+(E.a.homeNews_buttons||"")},k("p",{onClick:function(){return n()},className:"jsx-2085888330 btn"},"Najnowsze"),k("p",{onClick:function(){return r()},className:"jsx-2085888330 btn"},"Popularne"),k("p",{onClick:function(){return a()},className:"jsx-2085888330 btn"},"- 10PLN"),k("p",{onClick:function(){return s()},className:"jsx-2085888330 btn"},"Random")),k("div",{className:"jsx-2085888330 "+(E.a.homeNews_box||"")},t.map((function(e){return k(O.a,{id:e._id,name:e.name,description:e.description,price:e.price,category:e.category,image:e.image,createdAt:e.createdAt,key:e.name})})))):k("p",{className:"jsx-2085888330"},"loading"),k(f.a,{id:"2085888330"},[]))},P=(m.a.createElement,n("IB8S"),m.a.createElement,n("NzbH")),D=n.n(P),I=m.a.createElement,L=function(){return I(m.a.Fragment,null,I("div",{id:"newsletter",className:"jsx-2085888330 "+(D.a.empty_padding_newsletter||"")}),I("div",{className:"jsx-2085888330 "+(D.a.newsletter_container||"")},I("div",{className:"jsx-2085888330 "+(D.a.newsletter_wrapper||"")},I("p",{className:"jsx-2085888330 "+(D.a.newsletter_component||"")},"Zostaw suba! ",I("br",{className:"jsx-2085888330"})," badz na biezaco z nowosciami"),I("div",{className:"jsx-2085888330 "+(D.a.newsletter_signinbox||"")},I("input",{type:"text",className:"jsx-2085888330"}),I("p",{className:"jsx-2085888330 "+(D.a.newsletter_btn||"")},"Zapisz sie")))),I(f.a,{id:"2085888330"},[]))},A=n("iWaP"),C=n("miPH"),K=n.n(C);function R(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState}var H=new WeakMap,T=0;var M=new(function(){function e(e){void 0===e&&(e={}),this.__cache=new Map(Object.entries(e)),this.__listeners=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.__cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.__cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.__cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.__cache.has(t)},e.prototype.clear=function(){this.__cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.__cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n){var r=void 0;null===e[n]||"object"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):H.has(e[n])?r=H.get(e[n]):(r=T,H.set(e[n],T++)),t+="@"+r}return t}(e)):e=String(e||""),[e,t,e?"err@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.__listeners.push(e),function(){if(n){n=!1;var r=t.__listeners.indexOf(e);r>-1&&(t.__listeners[r]=t.__listeners[t.__listeners.length-1],t.__listeners.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.__listeners;e<t.length;e++){(0,t[e])()}},e}());var W="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType);K.a;function X(){return"undefined"===typeof navigator.onLine||navigator.onLine}var Z=Object(d.createContext)({});Z.displayName="SWRConfigContext";var B=Z,J=function(e,t,n,r){return new(n||(n=Promise))((function(a,s){function i(e){try{l(r.next(e))}catch(t){s(t)}}function o(e){try{l(r.throw(e))}catch(t){s(t)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}l((r=r.apply(e,t||[])).next())}))},Y=function(e,t){var n,r,a,s,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1],a=s;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(s);break}a[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(o){s=[6,o],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}},q="undefined"===typeof window,G=(q||window.requestIdleCallback,q?d.useEffect:d.useLayoutEffect,{}),U={},V={},F={},Q={},$={};if(!q&&window.addEventListener){var ee=function(e){if(R()&&X())for(var t in e)e[t][0]&&e[t][0]()};window.addEventListener("visibilitychange",(function(){return ee(U)}),!1),window.addEventListener("focus",(function(){return ee(U)}),!1),window.addEventListener("online",(function(){return ee(V)}),!1)}var te=function(e,t){void 0===t&&(t=!0);var n=M.serializeKey(e),r=n[0],a=n[2];if(!r)return Promise.resolve();var s=F[r];if(r&&s){for(var i=M.get(r),o=M.get(a),l=[],c=0;c<s.length;++c)l.push(s[c](t,i,o,c>0));return Promise.all(l).then((function(){return M.get(r)}))}return Promise.resolve(M.get(r))},ne=function(e,t,n){return void 0===n&&(n=!0),J(void 0,void 0,void 0,(function(){var r,a,s,i,o,l,c,u,f,d,m,p;return Y(this,(function(_){switch(_.label){case 0:if(r=M.serializeKey(e),a=r[0],s=r[2],!a)return[2];if("undefined"===typeof t)return[2,te(e,n)];if(Q[a]=Date.now()-1,$[a]=0,i=Q[a],o=G[a],!t||"function"!==typeof t)return[3,5];_.label=1;case 1:return _.trys.push([1,3,,4]),[4,t(M.get(a))];case 2:return l=_.sent(),[3,4];case 3:return u=_.sent(),c=u,[3,4];case 4:return[3,11];case 5:if(!t||"function"!==typeof t.then)return[3,10];_.label=6;case 6:return _.trys.push([6,8,,9]),[4,t];case 7:return l=_.sent(),[3,9];case 8:return f=_.sent(),c=f,[3,9];case 9:return[3,11];case 10:l=t,_.label=11;case 11:if(i!==Q[a]||o!==G[a]){if(c)throw c;return[2,l]}if("undefined"!==typeof l&&M.set(a,l),M.set(s,c),$[a]=Date.now()-1,d=F[a]){for(m=[],p=0;p<d.length;++p)m.push(d[p](!!n,l,c,p>0));return[2,Promise.all(m).then((function(){if(c)throw c;return M.get(a)}))]}if(c)throw c;return[2,l]}}))}))};B.Provider;var re=m.a.createElement,ae=!0;t.default=function(e){var t=Object(d.useState)([]),n=t[0],r=t[1],i=Object(d.useState)([]),o=i[0],u=i[1],_=Object(d.useState)(""),x=_[0],h=_[1],v=Object(d.useState)(8),g=v[0],N=v[1],b=Object(d.useState)(!0),j=b[0],S=b[1],E=m.a.useState(!1),O=Object(c.a)(E,2),k=O[0],P=O[1],D=m.a.useRef(),I=Object(A.useKeenSlider)({loop:!0,duration:2e3,dragStart:function(){P(!0)},dragEnd:function(){P(!1)}}),C=Object(c.a)(I,2),K=C[0],R=C[1];m.a.useEffect((function(){K.current.addEventListener("mouseover",(function(){P(!0)})),K.current.addEventListener("mouseout",(function(){P(!1)}))}),[K]),m.a.useEffect((function(){return D.current=setInterval((function(){!k&&R&&R.next()}),3500),function(){clearInterval(D.current)}}),[k,R]),Object(d.useEffect)((function(){JSON.parse(localStorage.getItem("localData"))&&JSON.parse(localStorage.getItem("localPage"))?(r(localData),N(localPage),console.log("local")):r(e.homeNewsData),console.log("ELO")}),[]);var H=function(){var e=l(n),t=new Date(Date.now()-432e6).toISOString(),r=e.filter((function(e){return e.createdAt>t}));u(r),h("latest")},T=function(){var e=l(n).filter((function(e){return e.popularity>=10}));u(e),h("popular")},M=function(){var e=l(n).filter((function(e){return e.price<=10}));u(e),h("under")},W=function(){var e,t=(e=a.a.mark((function e(){var t,n,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()("http://localhost:3000/api/items/".concat(g));case 2:return n=e.sent,e.next=5,n.json();case 5:s=e.sent,i=s.data,ne("http://localhost:3000/api/items/".concat(g),i,!1),t=i,localStorage.setItem("localData",JSON.stringify(i)),localStorage.setItem("localPage",JSON.stringify(g)),N((function(e){return e+4})),u([]),r(t),"latest"===x&&H(),"popular"===x&&T(),"under"===x&&M();case 17:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){s(i,r,a,o,l,"next",e)}function l(e){s(i,r,a,o,l,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();return re(p.a,{mainPage:j,setMainPage:S},re("div",{className:"jsx-931979104 container"},re("div",{ref:K,className:"jsx-931979104 keen-slider"},re("div",{className:"jsx-931979104 keen-slider__slide number-slide1 slider-configuration"},re("div",{className:"jsx-931979104 slider-box"},re("img",{src:"./slider/1.jpg",className:"jsx-931979104"}),re("p",{className:"jsx-931979104 slider-text slider-text-1"},"PONAD 100 SKLEPOW"))),re("div",{className:"jsx-931979104 keen-slider__slide number-slide2 slider-configuration"},re("div",{className:"jsx-931979104 slider-box"},re("img",{src:"./slider/2.jpg",className:"jsx-931979104"}),re("p",{className:"jsx-931979104 slider-text slider-text-2"},"ZAWSZE POD REKA"))),re("div",{className:"jsx-931979104 keen-slider__slide number-slide3 slider-configuration"},re("div",{className:"jsx-931979104 slider-box"},re("img",{src:"./slider/1.jpg",className:"jsx-931979104"}),re("p",{className:"jsx-931979104 slider-text slider-text-3"},"NA KAZDA OKAZJE"))),re("div",{className:"jsx-931979104 keen-slider__slide number-slide4 slider-configuration"},re("div",{className:"jsx-931979104 slider-box"},re("img",{src:"./slider/4.jpg",className:"jsx-931979104"}),re("p",{className:"jsx-931979104 slider-text slider-text-4"},"WASZE CENTRUM")))),re(y,{data:e.latestNewsData,latest:H}),re(L,null),re(z,{data:0===o.length?n:o,latest:H,popular:T,under:M,random:function(){var e=function(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e}(l(n));u(e),h("random")}})),re("div",{className:"jsx-931979104 moreBtnDiv"},re("button",{onClick:function(){return W()},className:"jsx-931979104 btn"},"WIECEJ")),re(f.a,{id:"931979104"},[".slider-configuration.jsx-931979104{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:2rem 0;}",".slider-box.jsx-931979104{position:relative;}",".slider-text.jsx-931979104{position:absolute;font-size:3rem;width:34rem;line-height:3rem;text-shadow:1px 1px 0px rgba(0,0,0,0.2);padding:1rem 2rem;background-color:#ffc500;color:#fff;}",".slider-text-1.jsx-931979104{bottom:30rem;left:-5rem;white-space:nowrap;}",".slider-text-2.jsx-931979104{bottom:29rem;right:-1rem;}",".slider-text-3.jsx-931979104{bottom:3rem;left:-10rem;}",".slider-text-4.jsx-931979104{bottom:2rem;right:-3rem;}",".star.jsx-931979104{position:absolute;top:-54px;left:-57px;width:9%;-webkit-transform:rotate(-3deg);-ms-transform:rotate(-3deg);transform:rotate(-3deg);}",".moreBtnDiv.jsx-931979104{text-align:center;margin:3rem 0;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104{padding:1rem 3rem;border:none;outline:none;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104:hover{background-color:#ff2a2a;color:#fff;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104:active{-webkit-transform:translateY(0.3rem);-ms-transform:translateY(0.3rem);transform:translateY(0.3rem);}","@media only screen and (max-width:1024px){.slider-text-1.jsx-931979104{left:-1rem;}.slider-text-2.jsx-931979104{right:-3rem;}.slider-text-3.jsx-931979104{left:-1rem;}}","@media only screen and (max-width:768px){.slider-box.jsx-931979104{position:relative;width:95%;margin:0 auto;}.slider-box.jsx-931979104 img.jsx-931979104{width:100%;}.slider-box.jsx-931979104 p.jsx-931979104{font-size:1.8rem;width:100%;padding:0.4rem 0;text-align:center;bottom:0;left:0;}}","@media only screen and (max-width:510px){.slider-box.jsx-931979104 p.jsx-931979104{font-size:1.3rem;padding:.2rem 0;line-height:inherit;}}"]))}},"eva/":function(e,t,n){e.exports={latestNews_container:"LatestNews_latestNews_container__3OCKx",latestNews_title:"LatestNews_latestNews_title__2Xtcj",latestNews_title_left:"LatestNews_latestNews_title_left__2yE_2",latestNews_title_right:"LatestNews_latestNews_title_right__1MlzG",latestNews_wrapper:"LatestNews_latestNews_wrapper__2QLUj","latestNews_title-right":"LatestNews_latestNews_title-right__3OV02"}},miPH:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,s=Object.prototype.hasOwnProperty;e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var i,o,l,c=r(t),u=r(n);if(c&&u){if((o=t.length)!=n.length)return!1;for(i=o;0!==i--;)if(!e(t[i],n[i]))return!1;return!0}if(c!=u)return!1;var f=t instanceof Date,d=n instanceof Date;if(f!=d)return!1;if(f&&d)return t.getTime()==n.getTime();var m=t instanceof RegExp,p=n instanceof RegExp;if(m!=p)return!1;if(m&&p)return t.toString()==n.toString();var _=a(t);if((o=_.length)!==a(n).length)return!1;for(i=o;0!==i--;)if(!s.call(n,_[i]))return!1;for(i=o;0!==i--;)if(!e(t[l=_[i]],n[l]))return!1;return!0}return t!==t&&n!==n}},vcXL:function(e,t,n){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},"z9a/":function(e,t,n){e.exports={blockSmall_container:"SmallCard_blockSmall_container__ouW6-",titleSmall:"SmallCard_titleSmall__2YMVT",imageSmall:"SmallCard_imageSmall__1IHKn"}}},[["vlRD",0,2,1,3]]]);