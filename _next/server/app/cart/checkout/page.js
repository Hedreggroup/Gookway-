(()=>{var e={id:308,ids:[308]};e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},1208:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>x,pages:()=>o,routeModule:()=>u,tree:()=>d});t(4339),t(1506),t(5866);var r=t(3191),l=t(8716),a=t(7922),i=t.n(a),c=t(5231),n={};for(const p in c)["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(p)<0&&(n[p]=()=>c[p]);t.d(s,n);const d=["",{children:["cart",{children:["checkout",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,4339)),"/Users/arinzehills/Gookway-/app/cart/checkout/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,1506)),"/Users/arinzehills/Gookway-/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],o=["/Users/arinzehills/Gookway-/app/cart/checkout/page.tsx"],x="/cart/checkout/page",m={require:t,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/cart/checkout/page",pathname:"/cart/checkout",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2428:(e,s,t)=>{Promise.resolve().then(t.bind(t,9440))},3160:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},5309:(e,s,t)=>{Promise.resolve().then(t.bind(t,9394))},9440:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>x});var r=t(326),l=t(7577),a=t.n(l);const i=({items:e})=>r.jsx("ul",{className:"w-[90%] m-auto flex gap-2 mt-10",children:Object.entries(e).map((([s,t],l)=>(0,r.jsxs)(a().Fragment,{children:[r.jsx("li",{className:"text-gray-400 text-[16px]",children:t}),l!==Object.keys(e).length-1&&r.jsx("li",{className:"flex items-center",children:r.jsx("div",{className:"w-1 h-6 bg-gray-300 mx-1"})})]},s)))});var c=t(6226);const n={src:"/_next/static/media/success.05cad891.png",height:400,width:401,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEV41U3f6sx41Rp51Rl73gtu4AFs1xFw2hFr2wF41xVr2AT78fVm2AKP3Cph1gCI1i9m1wDC55ib4FDRQwlNAAAAEHRSTlMC/vwe+/39LPojsv64s/j58DQpJQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD1JREFUeJwVy0kSwCAMBLEGDGNDFsP/H5uK7gJCCoDbzPOCsJ51m1A9tZQh9K5Vhovws0fvgpmP+/xbkxp8O+8BqdytcaIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},d=()=>r.jsx("div",{className:"w-full h-screen bg-[#FAFAFA] fixed top-0 right-0 left-0 z-[100]",children:(0,r.jsxs)("div",{className:"w-[579px] h-[600px] m-auto xl:mt-[200px] bg-white drop-shadow-xl flex flex-col justify-start items-center gap-3 pt-36",children:[r.jsx(c.default,{src:n,width:150,height:150,alt:"success logo"}),r.jsx("p",{children:"Your order has been completed. Track Order"}),r.jsx("button",{type:"button",className:"w-[150px] h-[auto] bg-[#FF4D4D] rounded-[8px] text-white py-2 ",children:"Back to Home"})]})});var o=t(4174);const x=()=>{const[e,s]=(0,l.useState)(!0),[t,a]=(0,l.useState)(!1),[c,n]=(0,l.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[r.jsx(o.default,{}),(0,r.jsxs)("div",{className:"w-[90%] m-auto pt-32",children:[r.jsx(i,{items:{Home:"Home",Cart:"Cart",Checkout:"Checkout"}}),r.jsx("h1",{className:"w-full flex justify-center items-center font-black text-4xl",children:"Checkout"}),(0,r.jsxs)("div",{className:"submenu w-full flex justify-center items-center gap-10 pt-5",children:[r.jsx("p",{className:"text-lg font-bold border-b-2 border-[#FF4D4D] cursor-pointer",onClick:()=>{a(!1),s(!0)},children:"Information"}),r.jsx("p",{className:"text-lg font-bold text-[#9C9898] cursor-pointer",children:"Shipping"}),r.jsx("p",{className:"text-lg font-bold text-[#9C9898] cursor-pointer",onClick:()=>{s(!1),a(!0)},children:"Payment"})]}),r.jsx("h1",{className:"text-4xl font-black text-[#191919]",children:"Billing Details"}),(0,r.jsxs)("div",{className:"mains w-full grid grid-cols-2 gap-10",children:[e&&r.jsx("div",{className:"left w-[100%]",children:(0,r.jsxs)("form",{action:"",className:"w-full mt-5 flex flex-col justify-start items-start gap-5",children:[(0,r.jsxs)("div",{className:"group1 w-full flex justify-between items-start gap-5",children:[(0,r.jsxs)("div",{className:"formgroup w-[50%]",children:[r.jsx("label",{htmlFor:"firstname",children:"First Name"}),r.jsx("input",{type:"text",className:"w-full border border-black py-3 rounded-md px-2"})]}),(0,r.jsxs)("div",{className:"formgroup w-[50%]",children:[r.jsx("label",{htmlFor:"firstname",children:"Last Name"}),r.jsx("input",{type:"text",className:"w-full border border-black py-3 rounded-md px-2"})]})]}),(0,r.jsxs)("div",{className:"group2 w-full flex justify-between items-start gap-5 ",children:[(0,r.jsxs)("div",{className:"formgroup w-[50%]",children:[r.jsx("label",{htmlFor:"firstname",children:"Phone"}),r.jsx("input",{type:"text",className:"w-full border border-black py-3 rounded-md px-2"})]}),(0,r.jsxs)("div",{className:"formgroup w-[50%]",children:[r.jsx("label",{htmlFor:"firstname",children:"Email"}),r.jsx("input",{type:"email",className:"w-full border border-black py-3 rounded-md px-2"})]})]}),(0,r.jsxs)("div",{className:"formgroup w-full",children:[r.jsx("label",{htmlFor:"firstname",children:"Address"}),r.jsx("input",{type:"text",className:"w-full border border-black py-3 rounded-md px-2"})]}),(0,r.jsxs)("div",{className:"group3 flex w-full justify-start items-center gap-5",children:[(0,r.jsxs)("div",{className:"formgroup w-[50%]",children:[r.jsx("label",{htmlFor:"firstname",children:"Country"}),r.jsx("input",{type:"text",className:"w-full border border-black py-3 rounded-md px-2"})]}),(0,r.jsxs)("div",{className:"formgroup w-[50%]",children:[r.jsx("label",{htmlFor:"firstname",children:"State"}),r.jsx("input",{type:"text",className:"w-full border border-black py-3 rounded-md px-2"})]})]}),(0,r.jsxs)("div",{className:"group4 w-full flex justify-start items-center gap-5",children:[(0,r.jsxs)("div",{className:"formgroup w-[50%]",children:[r.jsx("label",{htmlFor:"firstname",children:"City"}),r.jsx("input",{type:"text",className:"w-full border border-black py-3 px-2 rounded-md"})]}),(0,r.jsxs)("div",{className:"formgroup w-[50%]",children:[r.jsx("label",{htmlFor:"firstname",children:"Postal Code"}),r.jsx("input",{type:"text",className:"w-full border border-black py-3 px-2 rounded-md"})]})]})]})}),t&&(0,r.jsxs)("form",{action:"",className:"w-full mt-5 flex flex-col justify-start items-start gap-5",children:[(0,r.jsxs)("div",{className:"group1 w-full flex justify-between items-start gap-5",children:[(0,r.jsxs)("div",{className:"formgroup w-[50%]",children:[r.jsx("label",{htmlFor:"firstname",children:"Card vNumber"}),r.jsx("input",{type:"text",className:"w-full border border-black py-3 rounded-md px-2",placeholder:"1234 5678 9101 1213"})]}),(0,r.jsxs)("div",{className:"formgroup w-[50%]",children:[r.jsx("label",{htmlFor:"firstname",children:"Expiry Date"}),r.jsx("input",{type:"text",className:"w-full border border-black py-3 rounded-md px-2",placeholder:"MM/YY"})]})]}),(0,r.jsxs)("div",{className:"group2 w-full flex justify-between items-start gap-5 ",children:[(0,r.jsxs)("div",{className:"formgroup w-[50%]",children:[r.jsx("label",{htmlFor:"firstname",children:"CVV"}),r.jsx("input",{type:"text",className:"w-full border border-black py-3 rounded-md px-2",placeholder:"123"})]}),(0,r.jsxs)("div",{className:"formgroup w-[50%]",children:[r.jsx("label",{htmlFor:"firstname",children:"Card Pin"}),r.jsx("input",{type:"email",className:"w-full border border-black py-3 rounded-md px-2",placeholder:"Enter Pin"})]})]})]}),(0,r.jsxs)("div",{className:"right w-[100%] min-h-[424px] bg-[#F9F9F9] p-5",children:[r.jsx("h1",{className:"text-xl font-black text-[#191919]",children:"Order Summary"}),(0,r.jsxs)("div",{className:"orders w-full mt-5 flex flex-col justify-start items-center gap-5",children:[(0,r.jsxs)("div",{className:"order w-full flex justify-between items-center border border-[#BFBFBF] p-2",children:[r.jsx("p",{className:"text-sm text-[#191919] w-[60%]",children:"XIAOMI Redmi A2+ 6.5 4G LTE 128 + 6GB AMOLED Screen..."}),r.jsx("p",{className:"text-sm text-[#191919]",children:"1"}),r.jsx("p",{className:"text-sm text-[#191919]",children:"\u20a699,000"})]}),(0,r.jsxs)("div",{className:"order w-full flex justify-between items-center border border-[#BFBFBF] p-2",children:[r.jsx("p",{className:"text-sm text-[#191919] w-[60%]",children:"XIAOMI Redmi A2+ 6.5 4G LTE 128 + 6GB AMOLED Screen..."}),r.jsx("p",{className:"text-sm text-[#191919]",children:"1"}),r.jsx("p",{className:"text-sm text-[#191919]",children:"\u20a699,000"})]}),(0,r.jsxs)("div",{className:"order w-full flex justify-between items-center border border-[#BFBFBF] p-2",children:[r.jsx("p",{className:"text-sm text-[#191919] w-[60%]",children:"XIAOMI Redmi A2+ 6.5 4G LTE 128 + 6GB AMOLED Screen..."}),r.jsx("p",{className:"text-sm text-[#191919]",children:"1"}),r.jsx("p",{className:"text-sm text-[#191919]",children:"\u20a699,000"})]}),(0,r.jsxs)("div",{className:"order w-full flex justify-between items-center border border-[#BFBFBF] p-2",children:[r.jsx("p",{className:"text-sm text-[#191919] w-[60%]",children:"XIAOMI Redmi A2+ 6.5 4G LTE 128 + 6GB AMOLED Screen..."}),r.jsx("p",{className:"text-sm text-[#191919]",children:"1"}),r.jsx("p",{className:"text-sm text-[#191919]",children:"\u20a699,000"})]}),(0,r.jsxs)("div",{className:"order w-full flex justify-between items-center border border-[#BFBFBF] p-2",children:[r.jsx("p",{className:"text-sm text-[#191919] w-[60%]",children:"XIAOMI Redmi A2+ 6.5 4G LTE 128 + 6GB AMOLED Screen..."}),r.jsx("p",{className:"text-sm text-[#191919]",children:"1"}),r.jsx("p",{className:"text-sm text-[#191919]",children:"\u20a699,000"})]}),(0,r.jsxs)("div",{className:"order w-full flex justify-between items-center border border-[#BFBFBF] p-2",children:[r.jsx("p",{className:"text-sm text-[#191919] w-[60%]",children:"XIAOMI Redmi A2+ 6.5 4G LTE 128 + 6GB AMOLED Screen..."}),r.jsx("p",{className:"text-sm text-[#191919]",children:"1"}),r.jsx("p",{className:"text-sm text-[#191919]",children:"\u20a699,000"})]})]}),r.jsx("div",{className:"button w-full flex justify-end items-center mt-5",children:r.jsx("button",{type:"button",className:"bg-[#FF4D4D] text-white w-[40%] rounded-md py-3",children:"Check out"})})]})]}),r.jsx("div",{className:"section w-full h-[200px] my-10 bg-[#F6F6F6]"})]}),c&&r.jsx(d,{})]})}},4174:(e,s,t)=>{"use strict";t.d(s,{default:()=>m});var r=t(326),l=t(7577),a=t(5399),i=t(4046),c=t(8492),n=t(9632),d=t(434),o=t(2955),x=t(6226);const m=()=>{const{cart:e}=(0,o.s)(),[s,t]=(0,l.useState)("hidden"),[m,u]=(0,l.useState)([]);return(0,l.useEffect)((()=>{e&&u(e)}),[e]),(0,r.jsxs)("div",{className:" fixed top-0 w-full  h-[max] bg-[#ff0000] bg-opacity-80 flex justify-between flex-col items-center gap-5 p-5",style:{zIndex:"1000"},children:[(0,r.jsxs)("div",{className:"w-full flex flex-col-reverse  lg:flex-row justify-center items-center",children:[(0,r.jsxs)("div",{className:"left w-full flex flex-col justify-start items-center gap-0 lg:gap-10 lg:w-[70%] lg:flex-row",children:[r.jsx("h1",{className:"text-xl text-white font-bold lg:text-2xl",children:(0,r.jsxs)(d.default,{href:"/",className:"flex items-center justify-center gap-0",children:[r.jsx(x.default,{src:"/assets/white-logo.png",alt:"Center Image",className:"-mr-2 inset-0 m-auto animate-zoom",width:50,height:50}),"Gookway."]})}),(0,r.jsxs)("div",{className:"search w-full flex justify-center items-center gap-3 my-3 lg:my-0",children:[r.jsx("input",{type:"text",placeholder:"Search products, brands, categories",className:"w-full py-3 outline-none px-2 text-gray-600 text-sm"}),r.jsx(a.w75,{size:34,color:"white"})]})]}),(0,r.jsxs)("div",{className:"rigth w-full lg:w-[30%] gap-3 flex justify-end lg:justify-center items-center gap-2 text-white relative",children:[r.jsx(i.BKo,{size:25,color:"white"}),r.jsx(d.default,{href:"/cart",children:(0,r.jsxs)("div",{className:"relative",children:[r.jsx(c.qk2,{size:25,color:"white"}),m&&r.jsx("span",{className:"absolute -top-2 -right-2 bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs",children:m.length})]})})]}),(0,r.jsxs)("div",{className:"rigth w-full lg:w-[30%] flex justify-end lg:justify-center items-center gap-2 text-white relative",children:[r.jsx(d.default,{href:"/user/login",children:r.jsx(i.BKo,{size:30,color:"white"})}),r.jsx(d.default,{href:"/cart",children:(0,r.jsxs)("div",{className:"relative",children:[r.jsx(c.qk2,{size:30,color:"white"}),m&&r.jsx("span",{className:"absolute -top-2 -right-2 bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs",children:m.length})]})})]})]}),r.jsx("div",{className:"lg:hidden w-full flex justify-start items-center",children:r.jsx("p",{className:"text-xl cursor-pointer text-white",onClick:()=>{t("hidden"===s?"flex":"hidden")},children:r.jsx(n.vHB,{size:34})})}),(0,r.jsxs)("div",{className:`bottomNav ${s}  w-full lg:flex gap-5 flex-col lg:flex-row justify-start items-start text-white`,children:[r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-lg lg:text-sm cursor-pointer",children:"All Categories"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"Phone & Tablets"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"Consumer Electronics"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"Clothing"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"Home Furnishings"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"Beauty Health"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"Sport & Entertainment"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"More"})})]})]})}},2955:(e,s,t)=>{"use strict";t.d(s,{s:()=>i});var r=t(551);let l=(e,s)=>{localStorage.setItem(e,JSON.stringify(s))},a=e=>{try{return null}catch(s){return console.error("Error parsing JSON from localStorage",s),null}};const i=(0,r.Ue)((e=>({token:a()||"",setToken:s=>e((e=>(l("token",s),{token:s}))),cart:a()||[],setCart:s=>{l("cart",s),e({cart:s})},addToCart:s=>e((e=>{const t=[...e.cart,s];return l("cart",t),{cart:t}}))})))},4339:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>i,__esModule:()=>a,default:()=>c});var r=t(8570);const l=(0,r.createProxy)(String.raw`/Users/arinzehills/Gookway-/app/cart/checkout/page.tsx`),{__esModule:a,$$typeof:i}=l,c=(l.default,(0,r.createProxy)(String.raw`/Users/arinzehills/Gookway-/app/cart/checkout/page.tsx#default`))},1506:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n,metadata:()=>c});var r=t(9510),l=t(5384),a=t.n(l),i=(t(7120),t(6557));const c={title:"Gookway",description:"Generated by create next app"};function n({children:e}){return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{className:a().className,children:[e,r.jsx(i.Ix,{})]})})}},7481:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var r=t(6621);const l=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7120:()=>{}};var s=require("../../../webpack-runtime.js");s.C(e);var t=s.X(0,[948,54,621,481,285,441],(()=>{return e=1208,s(s.s=e);var e}));module.exports=t})();