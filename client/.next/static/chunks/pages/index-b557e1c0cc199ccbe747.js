_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{RNiq:function(e,t,s){"use strict";s.r(t),s.d(t,"__N_SSG",(function(){return z}));var a=s("o0o1"),i=s.n(a);function r(e,t,s,a,i,r,n){try{var o=e[r](n),l=o.value}catch(m){return void s(m)}o.done?t(l):Promise.resolve(l).then(a,i)}var n=s("a3WO");var o=s("BsWD");function l(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=s("ODXe"),c=s("MX0m"),d=s.n(c),x=s("q1tI"),p=s.n(x),u=s("5Yp1"),f=s("vcXL"),b=s.n(f),w=p.a.createElement,j=function(e){var t=e.id,s=e.name,a=(e.description,e.price,e.category,e.image);e.createdAt;return w("div",{key:s,className:"jsx-3342006471 blockSmall"},w("p",{className:"jsx-3342006471 titleSmall"},s),w("a",{href:"#!",onClick:function(){return fetch("http://localhost:3000/api/popularity/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"}})},className:"jsx-3342006471"},w("img",{src:a,className:"jsx-3342006471 image"})),w(d.a,{id:"3342006471"},[".blockSmall.jsx-3342006471{position:relative;cursor:pointer;min-height:10rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".blockSmall.jsx-3342006471 a.jsx-3342006471{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".blockSmall.jsx-3342006471 a.jsx-3342006471 .image.jsx-3342006471{max-width:100%;-webkit-transition:0.2s;transition:0.2s;border-radius:0.2rem;}",".blockSmall.jsx-3342006471:hover .image.jsx-3342006471{-webkit-transform:translate(-0.5rem,-0.5rem) rotate(-3deg);-ms-transform:translate(-0.5rem,-0.5rem) rotate(-3deg);transform:translate(-0.5rem,-0.5rem) rotate(-3deg);}",".titleSmall.jsx-3342006471{-webkit-transition:0.2s;transition:0.2s;position:absolute;bottom:1rem;right:12%;font-weight:600;min-width:8rem;z-index:-1;}",".blockSmall.jsx-3342006471:hover .titleSmall.jsx-3342006471{bottom:-1.1rem;right:0;color:black;}"]))},g=p.a.createElement,h=function(e){var t=e.data,s=e.latest;return g("div",{className:"jsx-3914662851 latestNews_container"},g("div",{className:"jsx-3914662851 latestNews_title"},g("p",{className:"jsx-3914662851 latestNews_title-left"},"Najnowsze"),g("a",{href:"#allImages",onClick:function(){return s()},className:"jsx-3914662851 latestNews_title-right"},g("p",{className:"jsx-3914662851"},"Zobacz"))),t?g("div",{className:"jsx-3914662851 latestNews"},t.map((function(e){return g(j,{id:e._id,name:e.name,description:e.description,price:e.price,category:e.category,image:e.image,createdAt:e.createdAt,key:e.name})}))):g("p",{className:"jsx-3914662851"},"loading"),g(d.a,{id:"3914662851"},[".latestNews_container.jsx-3914662851{width:95%;margin:3rem auto 0 auto;}",".latestNews_title.jsx-3914662851{font-size:1.3rem;color:#000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}",".latestNews_title-left.jsx-3914662851{font-size:1.8rem;}",".latestNews_title-right.jsx-3914662851{cursor:pointer;}",".latestNews_title-right.jsx-3914662851:hover{opacity:0.75;}",".latestNews.jsx-3914662851{display:grid;grid-template-columns:repeat(auto-fit,minmax(15.9rem,33.03rem));grid-auto-rows:26.14rem;grid-gap:1.3rem;margin-top:1rem;}","@media only screen and (max-width:768px){.latestNews_title-right.jsx-3914662851{text-align:center;}}","@media only screen and (max-width:425px){.latestNews_container.jsx-3914662851{margin:3rem auto 0 auto;}}"]))},N=s("3Mv1"),y=p.a.createElement,k=function(e){var t=e.data,s=e.latest,a=e.popular,i=e.under,r=e.random;return y("div",{id:"allImages",className:"jsx-3437942587 homeNews_container"},y("div",{className:"jsx-3437942587 homeNews_title"},y("p",{className:"jsx-3437942587 homeNews_title-left"},"Wejdz na wyzszy poziom zakupow")),t?y("div",{className:"jsx-3437942587 homeNews"},y("div",{className:"jsx-3437942587 homeNews_buttons"},y("p",{onClick:function(){return s()},className:"jsx-3437942587 btn"},"Najnowsze"),y("p",{onClick:function(){return a()},className:"jsx-3437942587 btn"},"Popularne"),y("p",{onClick:function(){return i()},className:"jsx-3437942587 btn"},"- 10PLN"),y("p",{onClick:function(){return r()},className:"jsx-3437942587 btn"},"Random")),y("div",{className:"jsx-3437942587 homeNews_box"},t.map((function(e){return y(N.a,{id:e._id,name:e.name,description:e.description,price:e.price,category:e.category,image:e.image,createdAt:e.createdAt,key:e.name})})))):y("p",{className:"jsx-3437942587"},"loading"),y(d.a,{id:"3437942587"},[".homeNews_container.jsx-3437942587{width:95%;margin:0rem auto;padding-top:7rem;}",".homeNews_title.jsx-3437942587{font-size:1.3rem;color:#000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".homeNews_title-left.jsx-3437942587{font-size:1.8rem;}",".homeNews.jsx-3437942587{margin-top:1rem;}",".homeNews_buttons.jsx-3437942587{white-space:nowrap;grid-template-columns:repeat(4,minmax(6.9rem,14rem));display:grid;font-size:1.3rem;margin-bottom:4rem;}",".homeNews_buttons.jsx-3437942587 p.jsx-3437942587{margin-right:1rem;position:relative;text-align:center;}",".homeNews_buttons.jsx-3437942587 p.jsx-3437942587::before{content:'';position:absolute;bottom:0;left:0;height:2px;width:0%;-webkit-transition:0.2s;transition:0.2s;background-color:#484848;}",".homeNews_buttons.jsx-3437942587 p.jsx-3437942587:hover{color:#484848;}",".homeNews_buttons.jsx-3437942587 p.jsx-3437942587:hover.jsx-3437942587::before{margin-right:1rem;width:100%;}",".homeNews_buttons.jsx-3437942587 p.jsx-3437942587:active{-webkit-transform:translateY(0.3rem);-ms-transform:translateY(0.3rem);transform:translateY(0.3rem);}",".homeNews_box.jsx-3437942587{display:grid;grid-template-columns:repeat(auto-fit,minmax(15.9rem,24.4rem));grid-auto-rows:25.14rem;grid-gap:1.3rem;grid-row-gap:4rem;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:2rem;}","@media only screen and (max-width:768px){.homeNews_buttons.jsx-3437942587{white-space:nowrap;grid-template-columns:repeat(2,minmax(6.9rem,1fr));row-gap:1rem;-webkit-column-gap:1rem;column-gap:1rem;}.homeNews_buttons.jsx-3437942587 p.jsx-3437942587{margin-right:0rem;}}"]))},v=(p.a.createElement,p.a.createElement,p.a.createElement),_=function(){return v(p.a.Fragment,null,v("div",{id:"newsletter",className:"jsx-3416093678 empty_padding_newsletter"}),v("div",{className:"jsx-3416093678 newsletter_container"},v("div",{className:"jsx-3416093678 newsletter_wrapper"},v("p",{className:"jsx-3416093678 newsletter_component"},"Zostaw suba! ",v("br",{className:"jsx-3416093678"})," badz na biezaco z nowosciami"),v("div",{className:"jsx-3416093678 newsletter_signinbox"},v("input",{type:"text",className:"jsx-3416093678"}),v("p",{className:"jsx-3416093678 btn newsletter_btn"},"Zapisz sie")))),v(d.a,{id:"3416093678"},[".empty_padding_newsletter.jsx-3416093678{height:8rem;}",".newsletter_container.jsx-3416093678{background-color:#ffc500;height:12rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".newsletter_wrapper.jsx-3416093678{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:66%;margin:0 auto;}",".newsletter_component.jsx-3416093678{font-size:3rem;width:36rem;line-height:2.3rem;color:#000;font-variant-caps:all-petite-caps;}",".newsletter_signinbox.jsx-3416093678{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".newsletter_signinbox.jsx-3416093678 input.jsx-3416093678{height:3rem;margin-right:1rem;font-size:1.6rem;width:12rem;}",".newsletter_btn.jsx-3416093678{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;font-size:1.6rem;padding:0.7rem 1.4rem;white-space:nowrap;}",".newsletter_btn.jsx-3416093678:hover{color:#fff;background-color:#000;}","@media only screen and (max-width:1024px){.newsletter_wrapper.jsx-3416093678{width:90%;}}","@media only screen and (max-width:768px){.newsletter_container.jsx-3416093678{height:auto;padding:1rem 0;}.newsletter_component.jsx-3416093678{text-align:center;margin-bottom:1rem;width:auto;font-size:2rem;line-height:1.8rem;}.newsletter_wrapper.jsx-3416093678{width:90%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}"]))},E=s("iWaP"),S=p.a.createElement,z=!0;t.default=function(e){var t=Object(x.useState)([]),s=t[0],a=t[1],n=Object(x.useState)([]),o=n[0],c=n[1],f=Object(x.useState)(""),w=f[0],j=f[1],g=Object(x.useState)(8),N=g[0],y=g[1],v=Object(x.useState)(!0),z=v[0],O=v[1],A=p.a.useState(!1),D=Object(m.a)(A,2),P=D[0],C=D[1],I=p.a.useRef(),R=Object(E.useKeenSlider)({loop:!0,duration:2e3,dragStart:function(){C(!0)},dragEnd:function(){C(!1)}}),W=Object(m.a)(R,2),Z=W[0],Y=W[1];p.a.useEffect((function(){Z.current.addEventListener("mouseover",(function(){C(!0)})),Z.current.addEventListener("mouseout",(function(){C(!1)}))}),[Z]),p.a.useEffect((function(){return I.current=setInterval((function(){!P&&Y&&Y.next()}),3500),function(){clearInterval(I.current)}}),[P,Y]),Object(x.useEffect)((function(){a(e.homeNewsData)}),[]);var B=function(){var e=l(s),t=new Date(Date.now()-432e6).toISOString(),a=e.filter((function(e){return e.createdAt>t}));c(a),j("latest")},L=function(){var e=l(s).filter((function(e){return e.popularity>=2}));c(e),j("popular")},M=function(){var e=l(s).filter((function(e){return e.price<=10}));c(e),j("under")},T=function(){var e=function(e){for(var t,s,a=e.length;0!==a;)s=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[s],e[s]=t;return e}(l(s));c(e),j("random")},X=function(){var e,t=(e=i.a.mark((function e(){var t,s,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("http://localhost:3000/api/items/".concat(N));case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,r=s.data,y((function(e){return e+4})),a(r),"latest"===w&&B(),"popular"===w&&L(),"under"===w&&M(),"random"===w&&T(),c([]);case 14:case"end":return e.stop()}}),e)})),function(){var t=this,s=arguments;return new Promise((function(a,i){var n=e.apply(t,s);function o(e){r(n,a,i,o,l,"next",e)}function l(e){r(n,a,i,o,l,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();return S(u.a,{mainPage:z,setMainPage:O},S("div",{className:"jsx-931979104 container"},S("div",{ref:Z,className:"jsx-931979104 keen-slider"},S("div",{className:"jsx-931979104 keen-slider__slide number-slide1 slider-configuration"},S("div",{className:"jsx-931979104 slider-box"},S("img",{src:"./slider/1.jpg",className:"jsx-931979104"}),S("p",{className:"jsx-931979104 slider-text slider-text-1"},"PONAD 100 SKLEPOW"))),S("div",{className:"jsx-931979104 keen-slider__slide number-slide2 slider-configuration"},S("div",{className:"jsx-931979104 slider-box"},S("img",{src:"./slider/2.jpg",className:"jsx-931979104"}),S("p",{className:"jsx-931979104 slider-text slider-text-2"},"ZAWSZE POD REKA"))),S("div",{className:"jsx-931979104 keen-slider__slide number-slide3 slider-configuration"},S("div",{className:"jsx-931979104 slider-box"},S("img",{src:"./slider/1.jpg",className:"jsx-931979104"}),S("p",{className:"jsx-931979104 slider-text slider-text-3"},"NA KAZDA OKAZJE"))),S("div",{className:"jsx-931979104 keen-slider__slide number-slide4 slider-configuration"},S("div",{className:"jsx-931979104 slider-box"},S("img",{src:"./slider/4.jpg",className:"jsx-931979104"}),S("p",{className:"jsx-931979104 slider-text slider-text-4"},"WASZE CENTRUM")))),S(h,{data:e.latestNewsData,latest:B}),S(_,null),S(k,{data:0===o.length?s:o,latest:B,popular:L,under:M,random:T})),S("div",{className:"jsx-931979104 moreBtnDiv"},S("button",{onClick:function(){return X()},className:"jsx-931979104 btn"},"WIECEJ")),S(d.a,{id:"931979104"},[".slider-configuration.jsx-931979104{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:2rem 0;}",".slider-box.jsx-931979104{position:relative;}",".slider-text.jsx-931979104{position:absolute;font-size:3rem;width:34rem;line-height:3rem;text-shadow:1px 1px 0px rgba(0,0,0,0.2);padding:1rem 2rem;background-color:#ffc500;color:#fff;}",".slider-text-1.jsx-931979104{bottom:30rem;left:-5rem;white-space:nowrap;}",".slider-text-2.jsx-931979104{bottom:29rem;right:-1rem;}",".slider-text-3.jsx-931979104{bottom:3rem;left:-10rem;}",".slider-text-4.jsx-931979104{bottom:2rem;right:-3rem;}",".star.jsx-931979104{position:absolute;top:-54px;left:-57px;width:9%;-webkit-transform:rotate(-3deg);-ms-transform:rotate(-3deg);transform:rotate(-3deg);}",".moreBtnDiv.jsx-931979104{text-align:center;margin:3rem 0;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104{padding:1rem 3rem;border:none;outline:none;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104:hover{background-color:#ff2a2a;color:#fff;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104:active{-webkit-transform:translateY(0.3rem);-ms-transform:translateY(0.3rem);transform:translateY(0.3rem);}","@media only screen and (max-width:1024px){.slider-text-1.jsx-931979104{left:-1rem;}.slider-text-2.jsx-931979104{right:-3rem;}.slider-text-3.jsx-931979104{left:-1rem;}}","@media only screen and (max-width:768px){.slider-box.jsx-931979104{position:relative;width:95%;margin:0 auto;}.slider-box.jsx-931979104 img.jsx-931979104{width:100%;}.slider-box.jsx-931979104 p.jsx-931979104{font-size:1.8rem;width:100%;padding:0.4rem 0;text-align:center;bottom:0;left:0;}}","@media only screen and (max-width:510px){.slider-box.jsx-931979104 p.jsx-931979104{font-size:1.3rem;padding:.2rem 0;line-height:inherit;}}"]))}},vcXL:function(e,t,s){"use strict";var a=self.fetch.bind(self);e.exports=a,e.exports.default=e.exports},vlRD:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s("RNiq")}])}},[["vlRD",0,2,1,3]]]);