_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{IB8S:function(e,t,n){e.exports={inbetweenOne_container:"InbetweenOne_inbetweenOne_container__1IGtT",inbetweenOne_wrapper:"InbetweenOne_inbetweenOne_wrapper__3VZ3h"}},NzbH:function(e,t,n){e.exports={empty_padding_newsletter:"Newsletter_empty_padding_newsletter__1cz-s",newsletter_container:"Newsletter_newsletter_container__gIHk5",newsletter_wrapper:"Newsletter_newsletter_wrapper__3sEMR",newsletter_component:"Newsletter_newsletter_component__2fGrr",newsletter_signinbox:"Newsletter_newsletter_signinbox__PXMdH",newsletter_btn:"Newsletter_newsletter_btn__3XlFu"}},OREE:function(e,t,n){e.exports={homeNews_container:"HomeNews_homeNews_container__gOpIK",homeNews_title:"HomeNews_homeNews_title__3zxOD",homeNews_title_left:"HomeNews_homeNews_title_left__Lcqn_",homeNews_wrapper:"HomeNews_homeNews_wrapper__3lYjM",homeNews_buttons:"HomeNews_homeNews_buttons__2c1ec",homeNews_box:"HomeNews_homeNews_box__1WTYs"}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return de}));var r=n("o0o1"),a=n.n(r);function i(e,t,n,r,a,i,s){try{var o=e[i](s),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(r,a)}var s=n("a3WO");var o=n("BsWD");function c(e){return function(e){if(Array.isArray(e))return Object(s.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n("ODXe"),u=n("MX0m"),f=n.n(u),d=n("q1tI"),m=n.n(d),p=n("80PL"),_=n("vcXL"),h=n.n(_),v=n("z9a/"),w=n.n(v),x=m.a.createElement,b=function(e){var t=e.id,n=e.name,r=(e.description,e.price,e.category,e.image);e.createdAt;return x("div",{key:n,className:"jsx-2170358054 "+(w.a.blockSmall_container||"")},x("p",{className:"jsx-2170358054 "+(w.a.titleSmall||"")},n),x("a",{href:"#!",onClick:function(){return fetch("http://localhost:3000/api/popularity/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"}})},className:"jsx-2170358054"},x("img",{src:r,className:"jsx-2170358054 "+(w.a.imageSmall||"")})),x(f.a,{id:"2170358054"},[]))},g=n("eva/"),y=n.n(g),j=m.a.createElement,N=function(e){var t=e.data,n=e.latest;return j("div",{className:"jsx-2085888330 "+(y.a.latestNews_container||"")},j("div",{className:"jsx-2085888330 "+(y.a.latestNews_title||"")},j("p",{className:"jsx-2085888330 "+(y.a.latestNews_title_left||"")},"Najnowsze"),j("a",{href:"#allImages",onClick:function(){return n()},className:"jsx-2085888330 "+(y.a.latestNews_title_right||"")},j("p",{className:"jsx-2085888330"},"Zobacz"))),t?j("div",{className:"jsx-2085888330 "+(y.a.latestNews_wrapper||"")},t.map((function(e){return j(b,{id:e._id,name:e.name,description:e.description,price:e.price,category:e.category,image:e.image,createdAt:e.createdAt,key:e.name})}))):j("p",{className:"jsx-2085888330"},"loading"),j(f.a,{id:"2085888330"},[]))},O=n("OREE"),E=n.n(O),S=n("IObC"),k=m.a.createElement,I=function(e){var t=e.data,n=e.latest,r=e.popular,a=e.under,i=e.random;return k("div",{id:"allImages",className:"jsx-2085888330 "+(E.a.homeNews_container||"")},k("div",{className:"jsx-2085888330 "+(E.a.homeNews_title||"")},k("p",{className:"jsx-2085888330 "+(E.a.homeNews_title_left||"")},"Wejdz na wyzszy poziom zakupow")),t?k("div",{className:"jsx-2085888330 "+(E.a.homeNews_wrapper||"")},k("div",{className:"jsx-2085888330 "+(E.a.homeNews_buttons||"")},k("p",{onClick:function(){return n()},className:"jsx-2085888330 btn"},"Najnowsze"),k("p",{onClick:function(){return r()},className:"jsx-2085888330 btn"},"Popularne"),k("p",{onClick:function(){return a()},className:"jsx-2085888330 btn"},"- 10PLN"),k("p",{onClick:function(){return i()},className:"jsx-2085888330 btn"},"Random")),k("div",{className:"jsx-2085888330 "+(E.a.homeNews_box||"")},t.map((function(e){return k(S.a,{id:e._id,name:e.name,description:e.description,price:e.price,category:e.category,image:e.image,createdAt:e.createdAt,key:e.name})})))):k("p",{className:"jsx-2085888330"},"loading"),k(f.a,{id:"2085888330"},[]))},z=(m.a.createElement,n("IB8S"),m.a.createElement,n("NzbH")),C=n.n(z),R=m.a.createElement,D=function(){return R(m.a.Fragment,null,R("div",{id:"newsletter",className:"jsx-2085888330 "+(C.a.empty_padding_newsletter||"")}),R("div",{className:"jsx-2085888330 "+(C.a.newsletter_container||"")},R("div",{className:"jsx-2085888330 "+(C.a.newsletter_wrapper||"")},R("p",{className:"jsx-2085888330 "+(C.a.newsletter_component||"")},"Zostaw suba! ",R("br",{className:"jsx-2085888330"})," badz na biezaco z nowosciami"),R("div",{className:"jsx-2085888330 "+(C.a.newsletter_signinbox||"")},R("input",{type:"text",className:"jsx-2085888330"}),R("p",{className:"jsx-2085888330 "+(C.a.newsletter_btn||"")},"Zapisz sie")))),R(f.a,{id:"2085888330"},[]))},T=n("iWaP"),P=n("miPH"),L=n.n(P);function A(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState}var W=new WeakMap,M=0;var H=new(function(){function e(e){void 0===e&&(e={}),this.__cache=new Map(Object.entries(e)),this.__listeners=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.__cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.__cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.__cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.__cache.has(t)},e.prototype.clear=function(){this.__cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.__cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n){var r=void 0;null===e[n]||"object"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):W.has(e[n])?r=W.get(e[n]):(r=M,W.set(e[n],M++)),t+="@"+r}return t}(e)):e=String(e||""),[e,t,e?"err@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.__listeners.push(e),function(){if(n){n=!1;var r=t.__listeners.indexOf(e);r>-1&&(t.__listeners[r]=t.__listeners[t.__listeners.length-1],t.__listeners.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.__listeners;e<t.length;e++){(0,t[e])()}},e}());var K="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),V={onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,a){if(A()&&!("number"===typeof n.errorRetryCount&&a.retryCount>n.errorRetryCount)){var i=Math.min(a.retryCount||0,8),s=~~((Math.random()+.5)*(1<<i))*n.errorRetryInterval;setTimeout(r,s,a)}},errorRetryInterval:1e3*(K?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(K?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:L.a};function X(){return"undefined"===typeof navigator.onLine||navigator.onLine}var Z=Object(d.createContext)({});Z.displayName="SWRConfigContext";var B=Z,Y=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function s(e){try{c(r.next(e))}catch(t){i(t)}}function o(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}c((r=r.apply(e,t||[])).next())}))},q=function(e,t){var n,r,a,i,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(a=(a=s.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){s.label=a[1],a=i;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(i);break}a[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(o){i=[6,o],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},G="undefined"===typeof window,F=G?null:window.requestIdleCallback||function(e){return setTimeout(e,1)},J=G?d.useEffect:d.useLayoutEffect,U={},Q={},$={},ee={},te={},ne={},re={};if(!G&&window.addEventListener){var ae=function(e){if(A()&&X())for(var t in e)e[t][0]&&e[t][0]()};window.addEventListener("visibilitychange",(function(){return ae($)}),!1),window.addEventListener("focus",(function(){return ae($)}),!1),window.addEventListener("online",(function(){return ae(ee)}),!1)}var ie=function(e,t){void 0===t&&(t=!0);var n=H.serializeKey(e),r=n[0],a=n[2];if(!r)return Promise.resolve();var i=te[r];if(r&&i){for(var s=H.get(r),o=H.get(a),c=[],l=0;l<i.length;++l)c.push(i[l](t,s,o,l>0));return Promise.all(c).then((function(){return H.get(r)}))}return Promise.resolve(H.get(r))},se=function(e,t,n){var r=te[e];if(e&&r)for(var a=0;a<r.length;++a)r[a](!1,t,n)},oe=function(e,t,n){return void 0===n&&(n=!0),Y(void 0,void 0,void 0,(function(){var r,a,i,s,o,c,l,u,f,d,m,p;return q(this,(function(_){switch(_.label){case 0:if(r=H.serializeKey(e),a=r[0],i=r[2],!a)return[2];if("undefined"===typeof t)return[2,ie(e,n)];if(ne[a]=Date.now()-1,re[a]=0,s=ne[a],o=Q[a],!t||"function"!==typeof t)return[3,5];_.label=1;case 1:return _.trys.push([1,3,,4]),[4,t(H.get(a))];case 2:return c=_.sent(),[3,4];case 3:return u=_.sent(),l=u,[3,4];case 4:return[3,11];case 5:if(!t||"function"!==typeof t.then)return[3,10];_.label=6;case 6:return _.trys.push([6,8,,9]),[4,t];case 7:return c=_.sent(),[3,9];case 8:return f=_.sent(),l=f,[3,9];case 9:return[3,11];case 10:c=t,_.label=11;case 11:if(s!==ne[a]||o!==Q[a]){if(l)throw l;return[2,c]}if("undefined"!==typeof c&&H.set(a,c),H.set(i,l),re[a]=Date.now()-1,d=te[a]){for(m=[],p=0;p<d.length;++p)m.push(d[p](!!n,c,l,p>0));return[2,Promise.all(m).then((function(){if(l)throw l;return H.get(a)}))]}if(l)throw l;return[2,c]}}))}))};B.Provider;var ce=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r,a,i={};t.length>=1&&(r=t[0]),t.length>2?(a=t[1],i=t[2]):"function"===typeof t[1]?a=t[1]:"object"===typeof t[1]&&(i=t[1]);var s=H.serializeKey(r),o=s[0],c=s[1],l=s[2];i=Object.assign({},V,Object(d.useContext)(B),i),"undefined"===typeof a&&(a=i.fetcher);var u=H.get(o)||i.initialData,f=H.get(l),m=Object(d.useRef)({data:!1,error:!1,isValidating:!1}),p=Object(d.useRef)({data:u,error:f,isValidating:!1}),_=Object(d.useState)(null)[1],h=Object(d.useCallback)((function(e){var t=!1;for(var n in e)p.current[n]=e[n],m.current[n]&&(t=!0);if(t||i.suspense){if(v.current)return;_({})}}),[]),v=Object(d.useRef)(!1),w=Object(d.useRef)(o),x=Object(d.useRef)({emit:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];v.current||i[e].apply(i,t)}}),b=Object(d.useCallback)((function(e,t){return oe(o,e,t)}),[o]),g=function(e,t){t&&(e[o]?e[o].push(t):e[o]=[t])},y=function(e,t){if(e[o]){var n=e[o],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},j=Object(d.useCallback)((function(t){return void 0===t&&(t={}),Y(e,void 0,void 0,(function(){var e,n,r,s,u,f,d;return q(this,(function(m){switch(m.label){case 0:if(!o||!a)return[2,!1];if(v.current)return[2,!1];t=Object.assign({dedupe:!1},t),e=!0,n="undefined"!==typeof U[o]&&t.dedupe,m.label=1;case 1:return m.trys.push([1,6,,7]),h({isValidating:!0}),r=void 0,s=void 0,n?(s=Q[o],[4,U[o]]):[3,3];case 2:return r=m.sent(),[3,5];case 3:return i.loadingTimeout&&!H.get(o)&&setTimeout((function(){e&&x.current.emit("onLoadingSlow",o,i)}),i.loadingTimeout),U[o]=null!==c?a.apply(void 0,c):a(o),Q[o]=s=Date.now(),[4,U[o]];case 4:r=m.sent(),setTimeout((function(){delete U[o],delete Q[o]}),i.dedupingInterval),x.current.emit("onSuccess",r,o,i),m.label=5;case 5:return Q[o]>s||ne[o]&&(s<=ne[o]||s<=re[o]||0===re[o])?(h({isValidating:!1}),[2,!1]):(H.set(o,r),H.set(l,void 0),u={isValidating:!1},"undefined"!==typeof p.current.error&&(u.error=void 0),i.compare(p.current.data,r)||(u.data=r),h(u),n||se(o,r,void 0),[3,7]);case 6:return f=m.sent(),delete U[o],delete Q[o],H.set(l,f),p.current.error!==f&&(h({isValidating:!1,error:f}),n||se(o,void 0,f)),x.current.emit("onError",f,o,i),i.shouldRetryOnError&&(d=(t.retryCount||0)+1,x.current.emit("onErrorRetry",f,o,i,j,Object.assign({dedupe:!0},t,{retryCount:d}))),[3,7];case 7:return e=!1,[2,!0]}}))}))}),[o]);if(J((function(){if(o){v.current=!1;var e=p.current.data,t=H.get(o)||i.initialData;w.current===o&&i.compare(e,t)||(h({data:t}),w.current=o);var n,r,a=function(){return j({dedupe:!0})};(i.revalidateOnMount||!i.initialData&&void 0===i.revalidateOnMount)&&("undefined"!==typeof t?F(a):a()),i.revalidateOnFocus&&(n=function(e,t){var n=!1;return function(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];n||(n=!0,e.apply(void 0,r),setTimeout((function(){return n=!1}),t))}}(a,i.focusThrottleInterval)),i.revalidateOnReconnect&&(r=a);var s=function(e,t,n,r){void 0===e&&(e=!0),void 0===r&&(r=!0);var s={},o=!1;return"undefined"===typeof t||i.compare(p.current.data,t)||(s.data=t,o=!0),p.current.error!==n&&(s.error=n,o=!0),o&&h(s),!!e&&(r?a():j())};return g($,n),g(ee,r),g(te,s),function(){h=function(){return null},v.current=!0,y($,n),y(ee,r),y(te,s)}}}),[o,j]),J((function(){var t=null,n=function(){return Y(e,void 0,void 0,(function(){return q(this,(function(e){switch(e.label){case 0:return p.current.error||!i.refreshWhenHidden&&!A()||!i.refreshWhenOffline&&!X()?[3,2]:[4,j({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return i.refreshInterval&&(t=setTimeout(n,i.refreshInterval)),[2]}}))}))};return i.refreshInterval&&(t=setTimeout(n,i.refreshInterval)),function(){t&&clearTimeout(t)}}),[i.refreshInterval,i.refreshWhenHidden,i.refreshWhenOffline,j]),i.suspense){var N=H.get(o)||u,O=H.get(l)||f;if("undefined"===typeof N&&"undefined"===typeof O){if(U[o]||j(),U[o]&&"function"===typeof U[o].then)throw U[o];N=U[o]}if("undefined"===typeof N&&O)throw O;return{error:O,data:N,revalidate:j,mutate:b,isValidating:p.current.isValidating}}return Object(d.useMemo)((function(){var e={revalidate:j,mutate:b};return Object.defineProperties(e,{error:{get:function(){return m.current.error=!0,w.current===o?p.current.error:f},enumerable:!0},data:{get:function(){return m.current.data=!0,w.current===o?p.current.data:u},enumerable:!0},isValidating:{get:function(){return m.current.isValidating=!0,p.current.isValidating},enumerable:!0}}),e}),[j])};var le=ce,ue=m.a.createElement,fe=function(){return h.a.apply(void 0,arguments).then((function(e){return e.json()}))},de=!0;t.default=function(e){var t=Object(d.useState)([]),n=t[0],r=t[1],s=Object(d.useState)([]),o=s[0],u=s[1],_=Object(d.useState)(""),v=_[0],w=_[1],x=Object(d.useState)(8),b=x[0],g=x[1],y=Object(d.useState)(!0),j=y[0],O=y[1],E=le("http://localhost:3000/api/items/".concat(b),fe,{initialData:{data:e.homeNewsData}}),S=E.data;E.error;console.log(S,"homeNewsDataCache",b);var k=m.a.useState(!1),z=Object(l.a)(k,2),C=z[0],R=z[1],P=m.a.useRef(),L=Object(T.useKeenSlider)({loop:!0,duration:2e3,dragStart:function(){R(!0)},dragEnd:function(){R(!1)}}),A=Object(l.a)(L,2),W=A[0],M=A[1];m.a.useEffect((function(){W.current.addEventListener("mouseover",(function(){R(!0)})),W.current.addEventListener("mouseout",(function(){R(!1)}))}),[W]),m.a.useEffect((function(){return P.current=setInterval((function(){!C&&M&&M.next()}),3500),function(){clearInterval(P.current)}}),[C,M]),Object(d.useEffect)((function(){r(S.data||e.homeNewsData)}),[]);var H=function(){var e=c(n),t=new Date(Date.now()-432e6).toISOString(),r=e.filter((function(e){return e.createdAt>t}));u(r),w("latest")},K=function(){var e=c(n).filter((function(e){return e.popularity>=10}));u(e),w("popular")},V=function(){var e=c(n).filter((function(e){return e.price<=10}));u(e),w("under")},X=function(){var e,t=(e=a.a.mark((function e(){var t,n,i,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()("http://localhost:3000/api/items/".concat(b));case 2:return n=e.sent,e.next=5,n.json();case 5:i=e.sent,s=i.data,oe("http://localhost:3000/api/items/".concat(b),[].concat(c(S),[s])),t=s,g((function(e){return e+4})),u([]),r(t),"latest"===v&&H(),"popular"===v&&K(),"under"===v&&V();case 15:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function o(e){i(s,r,a,o,c,"next",e)}function c(e){i(s,r,a,o,c,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();return ue(p.a,{mainPage:j,setMainPage:O},ue("div",{className:"jsx-931979104 container"},ue("div",{ref:W,className:"jsx-931979104 keen-slider"},ue("div",{className:"jsx-931979104 keen-slider__slide number-slide1 slider-configuration"},ue("div",{className:"jsx-931979104 slider-box"},ue("img",{src:"./slider/1.jpg",className:"jsx-931979104"}),ue("p",{className:"jsx-931979104 slider-text slider-text-1"},"PONAD 100 SKLEPOW"))),ue("div",{className:"jsx-931979104 keen-slider__slide number-slide2 slider-configuration"},ue("div",{className:"jsx-931979104 slider-box"},ue("img",{src:"./slider/2.jpg",className:"jsx-931979104"}),ue("p",{className:"jsx-931979104 slider-text slider-text-2"},"ZAWSZE POD REKA"))),ue("div",{className:"jsx-931979104 keen-slider__slide number-slide3 slider-configuration"},ue("div",{className:"jsx-931979104 slider-box"},ue("img",{src:"./slider/1.jpg",className:"jsx-931979104"}),ue("p",{className:"jsx-931979104 slider-text slider-text-3"},"NA KAZDA OKAZJE"))),ue("div",{className:"jsx-931979104 keen-slider__slide number-slide4 slider-configuration"},ue("div",{className:"jsx-931979104 slider-box"},ue("img",{src:"./slider/4.jpg",className:"jsx-931979104"}),ue("p",{className:"jsx-931979104 slider-text slider-text-4"},"WASZE CENTRUM")))),ue(N,{data:e.latestNewsData,latest:H}),ue(D,null),ue(I,{data:0===o.length?n:o,latest:H,popular:K,under:V,random:function(){var e=function(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e}(c(n));u(e),w("random")}})),ue("div",{className:"jsx-931979104 moreBtnDiv"},ue("button",{onClick:function(){return X()},className:"jsx-931979104 btn"},"WIECEJ")),ue(f.a,{id:"931979104"},[".slider-configuration.jsx-931979104{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:2rem 0;}",".slider-box.jsx-931979104{position:relative;}",".slider-text.jsx-931979104{position:absolute;font-size:3rem;width:34rem;line-height:3rem;text-shadow:1px 1px 0px rgba(0,0,0,0.2);padding:1rem 2rem;background-color:#ffc500;color:#fff;}",".slider-text-1.jsx-931979104{bottom:30rem;left:-5rem;white-space:nowrap;}",".slider-text-2.jsx-931979104{bottom:29rem;right:-1rem;}",".slider-text-3.jsx-931979104{bottom:3rem;left:-10rem;}",".slider-text-4.jsx-931979104{bottom:2rem;right:-3rem;}",".star.jsx-931979104{position:absolute;top:-54px;left:-57px;width:9%;-webkit-transform:rotate(-3deg);-ms-transform:rotate(-3deg);transform:rotate(-3deg);}",".moreBtnDiv.jsx-931979104{text-align:center;margin:3rem 0;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104{padding:1rem 3rem;border:none;outline:none;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104:hover{background-color:#ff2a2a;color:#fff;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104:active{-webkit-transform:translateY(0.3rem);-ms-transform:translateY(0.3rem);transform:translateY(0.3rem);}","@media only screen and (max-width:1024px){.slider-text-1.jsx-931979104{left:-1rem;}.slider-text-2.jsx-931979104{right:-3rem;}.slider-text-3.jsx-931979104{left:-1rem;}}","@media only screen and (max-width:768px){.slider-box.jsx-931979104{position:relative;width:95%;margin:0 auto;}.slider-box.jsx-931979104 img.jsx-931979104{width:100%;}.slider-box.jsx-931979104 p.jsx-931979104{font-size:1.8rem;width:100%;padding:0.4rem 0;text-align:center;bottom:0;left:0;}}","@media only screen and (max-width:510px){.slider-box.jsx-931979104 p.jsx-931979104{font-size:1.3rem;padding:.2rem 0;line-height:inherit;}}"]))}},"eva/":function(e,t,n){e.exports={latestNews_container:"LatestNews_latestNews_container__3OCKx",latestNews_title:"LatestNews_latestNews_title__2Xtcj",latestNews_title_left:"LatestNews_latestNews_title_left__2yE_2",latestNews_title_right:"LatestNews_latestNews_title_right__1MlzG",latestNews_wrapper:"LatestNews_latestNews_wrapper__2QLUj","latestNews_title-right":"LatestNews_latestNews_title-right__3OV02"}},miPH:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty;e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var s,o,c,l=r(t),u=r(n);if(l&&u){if((o=t.length)!=n.length)return!1;for(s=o;0!==s--;)if(!e(t[s],n[s]))return!1;return!0}if(l!=u)return!1;var f=t instanceof Date,d=n instanceof Date;if(f!=d)return!1;if(f&&d)return t.getTime()==n.getTime();var m=t instanceof RegExp,p=n instanceof RegExp;if(m!=p)return!1;if(m&&p)return t.toString()==n.toString();var _=a(t);if((o=_.length)!==a(n).length)return!1;for(s=o;0!==s--;)if(!i.call(n,_[s]))return!1;for(s=o;0!==s--;)if(!e(t[c=_[s]],n[c]))return!1;return!0}return t!==t&&n!==n}},vcXL:function(e,t,n){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},"z9a/":function(e,t,n){e.exports={blockSmall_container:"SmallCard_blockSmall_container__ouW6-",titleSmall:"SmallCard_titleSmall__2YMVT",imageSmall:"SmallCard_imageSmall__1IHKn"}}},[["vlRD",0,2,1,3]]]);