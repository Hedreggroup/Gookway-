(()=>{var e={id:639,ids:[639]};e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},1825:()=>{},3265:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});t(1355),t(1506),t(5866);var r=t(3191),a=t(8716),l=t(7922),i=t.n(l),n=t(5231),o={};for(const p in n)["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(p)<0&&(o[p]=()=>n[p]);t.d(s,o);const c=["",{children:["user",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,1355)),"/Users/arinzehills/Gookway-/app/user/login/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,1506)),"/Users/arinzehills/Gookway-/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/arinzehills/Gookway-/app/user/login/page.tsx"],u="/user/login/page",x={require:t,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/user/login/page",pathname:"/user/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7806:(e,s,t)=>{Promise.resolve().then(t.bind(t,6393))},3160:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},5309:(e,s,t)=>{Promise.resolve().then(t.bind(t,9394))},6393:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>x});var r=t(326),a=t(4174),l=t(7167),i=t(1204),n=t(4099),o=t(434),c=t(7577),d=t(4046),u=t(7773);const x=()=>{const[e,s]=(0,c.useState)(!1),[t,x]=(0,c.useState)(!0),[m,p]=(0,c.useState)(!0),[h,g]=(0,c.useState)("bg-red-500"),[f,j]=(0,c.useState)(0),[v,w]=(0,c.useState)(!1),[b,y]=(0,c.useState)(),[N,C]=(0,c.useState)("success"),[k,P]=(0,c.useState)(!1),[E,q]=(0,c.useState)({email:"",password:""}),[S,z]=(0,c.useState)({length5:!1,length8:!1,uppercase:!1,number:!1,specialChar:!1});return(0,r.jsxs)(r.Fragment,{children:[r.jsx(a.default,{}),t&&(0,r.jsxs)("div",{className:"mt-52 w-[90%] m-auto flex flex-col justify-center items-center gap-5",children:[r.jsx("h1",{className:"text-4xl font-black",children:"Login"}),r.jsx("div",{className:"card w-[50%] h-auto bg-[#F6F6F6] p-5 my-5",children:(0,r.jsxs)("form",{action:"",className:"w-full flex flex-col justify-start items-start gap-5",children:[(0,r.jsxs)("div",{className:"formgroup w-full",children:[r.jsx("label",{htmlFor:"firstname",className:"text-xl font-black",children:"Email"}),r.jsx("input",{type:"email",placeholder:"enter email",value:E.email,className:"w-full py-3 px-2 outline-none mt-2",required:!0,onChange:e=>q((s=>({...s,email:e.target.value})))})]}),(0,r.jsxs)("div",{className:"w-full",children:[r.jsx("label",{htmlFor:"firstname",className:"text-xl font-black",children:"Password"}),(0,r.jsxs)("div",{className:"w-full flex justify-center items-center relative",children:[r.jsx("input",{type:m?"password":"text",className:"w-full p-2 lg:p-3 border-2 border-gray-200  mt-2 text-gray-400 outline-none",placeholder:"password",value:E.password,onChange:e=>{e.target.value;q((s=>({...s,password:e.target.value})))}}),r.jsx("p",{className:"text-gray-400 absolute right-0 pr-5 cursor-pointer border-l border-l-gray-400 pl-2",onClick:()=>p(!m),children:m?r.jsx(d.tjB,{size:20}):r.jsx(u.z5B,{size:20})})]})]}),(0,r.jsxs)("div",{className:"formgroup w-full flex justify-start items-center gap-3",children:[r.jsx("input",{type:"checkbox",style:{height:"1.5rem",width:"1.5rem",color:"red"}}),r.jsx("div",{className:"w-full flex flex-col",children:r.jsx("label",{htmlFor:"letter",className:"text-red-600 font-bold",children:"Remember me"})})]}),r.jsx("div",{className:"w-full flex justify-center items-center",children:r.jsx("button",{type:"button",className:"bg-[#FF4D4D] w-[90%] text-white py-3",onClick:async()=>{try{if(""===E.email)return;P(!0);const e=await n.Z.post("https://gookway-project.onrender.com/api/users/login",E);console.log(e),y(e?.data?.data.message),w(!0),C("success"),P(!1)}catch(e){console.log(e),401===e?.response?.data.statusCode?y(e?.response?.data?.msg):y(e?.response?.data?.data[0]?.message),w(!0),C("error"),P(!1)}},children:k?r.jsx(l.Z,{size:25,color:"#000000"}):"Login"})}),r.jsx("div",{className:"w-full flex justify-center items-center",children:(0,r.jsxs)("p",{className:"text-[#191919]",children:["Dont have an account?"," ",r.jsx(o.default,{href:"/user/register",className:"font-black cursor-pointer text-red-600",children:"Register"})]})}),(0,r.jsxs)("div",{className:"divide w-full flex justify-center items-center gap-2",children:[r.jsx("div",{className:"w-[50%] border-2 border-b-[#CECECE]"}),r.jsx("p",{className:"text-lg text-[#75757A]",children:"OR"}),r.jsx("div",{className:"w-[50%] border-2 border-b-[#CECECE]"})]}),(0,r.jsxs)("div",{className:"socials w-full grid grid-cols-3 gap-3",children:[r.jsx("div",{className:"h-[100px] border border-[#CECECE]"}),r.jsx("div",{className:"h-[100px] border border-[#CECECE]"}),r.jsx("div",{className:"h-[100px] border border-[#CECECE]"})]})]})})]}),v&&r.jsx(i.Z,{message:b,type:N})]})}},4174:(e,s,t)=>{"use strict";t.d(s,{default:()=>x});var r=t(326),a=t(7577),l=t(5399),i=t(4046),n=t(8492),o=t(9632),c=t(434),d=t(2955),u=t(6226);const x=()=>{const{cart:e}=(0,d.s)(),[s,t]=(0,a.useState)("hidden"),[x,m]=(0,a.useState)([]);return(0,a.useEffect)((()=>{e&&m(e)}),[e]),(0,r.jsxs)("div",{className:" fixed top-0 w-full  h-[max] bg-[#ff0000] bg-opacity-80 flex justify-between flex-col items-center gap-5 p-5",style:{zIndex:"1000"},children:[(0,r.jsxs)("div",{className:"w-full flex flex-col-reverse  lg:flex-row justify-center items-center",children:[(0,r.jsxs)("div",{className:"left w-full flex flex-col justify-start items-center gap-0 lg:gap-10 lg:w-[70%] lg:flex-row",children:[r.jsx("h1",{className:"text-xl text-white font-bold lg:text-2xl",children:(0,r.jsxs)(c.default,{href:"/",className:"flex items-center justify-center gap-0",children:[r.jsx(u.default,{src:"/assets/white-logo.png",alt:"Center Image",className:"-mr-2 inset-0 m-auto animate-zoom",width:50,height:50}),"Gookway."]})}),(0,r.jsxs)("div",{className:"search w-full flex justify-center items-center gap-3 my-3 lg:my-0",children:[r.jsx("input",{type:"text",placeholder:"Search products, brands, categories",className:"w-full py-3 outline-none px-2 text-gray-600 text-sm"}),r.jsx(l.w75,{size:34,color:"white"})]})]}),(0,r.jsxs)("div",{className:"rigth w-full lg:w-[30%] gap-3 flex justify-end lg:justify-center items-center gap-2 text-white relative",children:[r.jsx(i.BKo,{size:25,color:"white"}),r.jsx(c.default,{href:"/cart",children:(0,r.jsxs)("div",{className:"relative",children:[r.jsx(n.qk2,{size:25,color:"white"}),x&&r.jsx("span",{className:"absolute -top-2 -right-2 bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs",children:x.length})]})})]}),(0,r.jsxs)("div",{className:"rigth w-full lg:w-[30%] flex justify-end lg:justify-center items-center gap-2 text-white relative",children:[r.jsx(c.default,{href:"/user/login",children:r.jsx(i.BKo,{size:30,color:"white"})}),r.jsx(c.default,{href:"/cart",children:(0,r.jsxs)("div",{className:"relative",children:[r.jsx(n.qk2,{size:30,color:"white"}),x&&r.jsx("span",{className:"absolute -top-2 -right-2 bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs",children:x.length})]})})]})]}),r.jsx("div",{className:"lg:hidden w-full flex justify-start items-center",children:r.jsx("p",{className:"text-xl cursor-pointer text-white",onClick:()=>{t("hidden"===s?"flex":"hidden")},children:r.jsx(o.vHB,{size:34})})}),(0,r.jsxs)("div",{className:`bottomNav ${s}  w-full lg:flex gap-5 flex-col lg:flex-row justify-start items-start text-white`,children:[r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-lg lg:text-sm cursor-pointer",children:"All Categories"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"Phone & Tablets"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"Consumer Electronics"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"Clothing"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"Home Furnishings"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"Beauty Health"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"Sport & Entertainment"})}),r.jsx("div",{className:"navs",children:r.jsx("p",{className:"text-sm cursor-pointer",children:"More"})})]})]})}},2955:(e,s,t)=>{"use strict";t.d(s,{s:()=>i});var r=t(551);let a=(e,s)=>{localStorage.setItem(e,JSON.stringify(s))},l=e=>{try{return null}catch(s){return console.error("Error parsing JSON from localStorage",s),null}};const i=(0,r.Ue)((e=>({token:l()||"",setToken:s=>e((e=>(a("token",s),{token:s}))),cart:l()||[],setCart:s=>{a("cart",s),e({cart:s})},addToCart:s=>e((e=>{const t=[...e.cart,s];return a("cart",t),{cart:t}}))})))},7167:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var r=t(326),a=(t(7577),t(4120)),l=t.n(a);const i={display:"block",margin:"0 auto",borderColor:"white"},n=({color:e="white",loading:s=!0,size:t})=>r.jsx(l(),{color:"white",loading:s,cssOverride:i,size:t,"aria-label":"Loading Spinner","data-testid":"loader"})},1204:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var r=t(326),a=t(7577),l=t.n(a),i=t(9394);t(5996);const n=({message:e,type:s})=>(l().useEffect((()=>{(()=>{const t={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0};switch(s){case"success":i.Am.success(e,t);break;case"error":i.Am.error(e,t);break;case"info":i.Am.info(e,t);break;case"warning":i.Am.warning(e,t);break;default:(0,i.Am)(e,t)}})()}),[e,s]),r.jsx(i.ToastContainer,{}))},1506:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o,metadata:()=>n});var r=t(9510),a=t(5384),l=t.n(a),i=(t(7120),t(6557));const n={title:"Gookway",description:"Generated by create next app"};function o({children:e}){return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{className:l().className,children:[e,r.jsx(i.Ix,{})]})})}},1355:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>i,__esModule:()=>l,default:()=>n});var r=t(8570);const a=(0,r.createProxy)(String.raw`/Users/arinzehills/Gookway-/app/user/login/page.tsx`),{__esModule:l,$$typeof:i}=a,n=(a.default,(0,r.createProxy)(String.raw`/Users/arinzehills/Gookway-/app/user/login/page.tsx#default`))},7481:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var r=t(6621);const a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7120:()=>{}};var s=require("../../../webpack-runtime.js");s.C(e);var t=s.X(0,[948,54,621,481,285,441,99,431],(()=>{return e=3265,s(s.s=e);var e}));module.exports=t})();