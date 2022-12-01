(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8190)}])},5622:function(e,t,r){"use strict";var n=r(5893);t.Z=function(e){e.className;var t=e.children,r=e.onClick,a=e.selectedState,s=void 0!==a&&a,o=e.width,l=void 0===o?"":o;return(0,n.jsx)("button",{onClick:r,title:"Button","aria-label":"Button",className:"".concat(s?"bg-slate-900":"bg-slate-700"," ").concat("max"==l?"w-max":" w-full","  cursor-pointer border-b border-gray-900 p-3 text-yellow-600   hover:bg-slate-900"),children:t})}},432:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(5893),a=function(e){return e[0]},s=function(e){return l(e[1],e[0])},o=function(e,t,r){var n=t.split("."),a=n.pop(),s=n.reduce((function(e,t){return e[t]=e[t]||{}}),e);s[a]=r},l=function(e,t){var r,n,a=Array.isArray(t)?t:"string"===typeof t?t.split("."):t;for(r=e,n=0;r&&n<a.length;++n)r=r[a[n]];return r},i=function(e){var t=e.form,r=e.bottomSpace,l=void 0===r||r,i=e.type,c=void 0===i?"text":i;return(0,n.jsx)("input",{className:"text-xs border border-slate-900 shadow-inner bg-slate-600 bg-opacity-50 w-full p-3 ".concat(l?"mb-3":""),id:a(t),onChange:function(e){return function(e,t){var r=Object.assign({},e[1]);o(r,e[0],t),e[2](r)}(t,e.target.value)},defaultValue:s(t),type:c})}},6078:function(e,t,r){"use strict";var n=r(5893);t.Z=function(e){var t=e.children;return(0,n.jsx)("div",{className:"bg-slate-700 bg-opacity-30 flex items-center border-b border-gray-900 p-3 text-slate-500 justify-between",children:t})}},6696:function(e,t,r){"use strict";var n=r(5893),a=r(7219),s=r(7246);t.Z=function(e){var t=e.showClose,r=void 0===t||t,o=(0,s.o)((function(e){return e.panel})),l=(0,s.o)((function(e){return e.setAttr}));return(0,n.jsxs)("div",{className:"absolute -ml-10 top-12",children:[(0,n.jsx)("div",{onClick:function(){"editor"===o.right?l({path:"panel.right",value:!1}):l({path:"panel.right",value:"editor"})},className:"".concat("editor"===o.right?"bg-slate-800":"bg-slate-700"," flex p-3  rounded-l hover:text-slate-200 cursor-pointer border-b border-slate-600"),children:(0,n.jsx)(a.xqv,{})}),(0,n.jsx)("div",{onClick:function(){"loadpage"===o.right?l({path:"panel.right",value:!1}):l({path:"panel.right",value:"loadpage"})},className:"".concat("loadpage"===o.right?"bg-slate-800":"bg-slate-700"," flex p-3  rounded-l hover:text-slate-200 cursor-pointer border-b border-slate-600"),children:(0,n.jsx)(a.tHe,{})}),(0,n.jsx)("div",{onClick:function(){"savepage"===o.right?l({path:"panel.right",value:!1}):l({path:"panel.right",value:"savepage"})},className:"".concat("savepage"===o.right?"bg-slate-800":"bg-slate-700"," flex p-3  rounded-l hover:text-slate-200 cursor-pointer border-b border-slate-600"),children:(0,n.jsx)(a.mW3,{})}),(0,n.jsx)("div",{onClick:function(){"componentslibrary"===o.right?l({path:"panel.right",value:!1}):l({path:"panel.right",value:"componentslibrary"})},className:"".concat("componentslibrary"===o.right?"bg-slate-800":"bg-slate-700"," flex p-3  rounded-l hover:text-slate-200 cursor-pointer border-b border-slate-600"),children:(0,n.jsx)(a.aCJ,{})}),(0,n.jsx)("div",{onClick:function(){"datalayer"===o.right?l({path:"panel.right",value:!1}):l({path:"panel.right",value:"datalayer"})},className:"".concat("datalayer"===o.right?"bg-slate-800":"bg-slate-700"," flex p-3  rounded-l hover:text-slate-200 cursor-pointer border-b border-slate-600"),children:(0,n.jsx)(a.bGz,{})}),r?(0,n.jsx)("div",{onClick:function(){return l({path:"panel.right",value:!1})},className:" p-3 bg-slate-700 rounded-l hover:text-slate-200 cursor-pointer border-b border-slate-600",children:(0,n.jsx)(a.Tfp,{})}):null]})}},2611:function(e,t,r){"use strict";r.d(t,{F7:function(){return s},HC:function(){return c},Ib:function(){return a},SG:function(){return l},dK:function(){return o},fz:function(){return i},q:function(){return n},tT:function(){return u}});var n={firstproject:{nicename:"First project",description:"TailBlaster starter project",pages:{homepage:{nicename:"Home page",thumbnail:null,blocks:{block_init:{content:'<div class="bg-gradient-to-tl from-stone-200 to-sky-200 p-9  h-screen">\n  <div class="container mx-auto my-9 flex flex-col gap-3">\n    \n    \x3c!-- *** Hero section *** --\x3e\n    <h1 class="font-bold text-8xl text-stone-700">\n      <span class="bg-stone-600 text-stone-100">H</span><span>ello</span> \n      <span class="bg-stone-700 text-stone-100 outline-dashed outline outline-stone-700 outline-8">Tail</span><span>Blaster</span>\n    </h1>\n    <p class="text-stone-600 mb-9">\n      $Rich TailWindEditor\n    </p>\n    <p class="text-stone-100 cursor-pointer w-max p-3 rounded bg-lime-800 hover:bg-stone-600">\n      Click me to edit\n    </p>\n\n    \x3c!-- *** ----------------------------------- *** --\x3e\n    \x3c!-- *** Try place your first component here *** --\x3e\n\n    <div class="text-sm text-stone-600 flex justify-end border border-dashed border-stone-500 py-6 gap-6">\n      <a href="#" class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">\n      <div class="py-12 bg-stone-600 w-full h-full text-stone-100 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg text-7xl flex items-center justify-center">\n        !!!\n      </div>\n      <div class="flex flex-col justify-between p-4 leading-normal">\n          <h5 class="mb-2 text-2xl font-bold tracking-tight text-stone-700 dark:text-white">\n            HTML editor with embeded components\n          </h5>\n          <p class="mb-3 font-normal text-stone-700 dark:text-stone-400">\n            With propperties, REST data layer, social experience and team work\n          </p>\n      </div>\n      </a>\n    </div>\n  </div>\n</div>',children:[],properties:{},values:{}}}}}}},a={content:'<p class="bg-green-300 rounded p-3 shadow border border-green-600">\nNew child component with green background\n</p>',children:[],properties:{},values:{}},s={content:'<p class="bg-violet-300 rounded p-3 shadow border border-violet-600">\nNew child component with violet background\n</p>',children:[],properties:{},values:{}},o={content:'<p class="bg-sky-300 rounded p-3 shadow border border-sky-600">\nNew child component with sky background\n</p>',children:[],properties:{},values:{}},l={content:'<p class="bg-stone-300 rounded p-3 shadow border border-stone-600">\nNew child component with stone background\n</p>',children:[],properties:{},values:{}},i={content:'<p class="bg-orange-300 rounded p-3 shadow border border-orange-600">\nNew child component with orange background\n</p>',children:[],properties:{},values:{}},c={content:'<p class="bg-amber-300 rounded p-3 shadow border border-amber-600">\nNew child component with amber background\n</p>',children:[],properties:{},values:{}},u={content:'<p class="bg-cyan-300 rounded p-3 shadow border border-cyan-600">\nNew child component with cyan background\n</p>',children:[],properties:{},values:{}}},1648:function(e,t,r){"use strict";r.d(t,{Bu:function(){return c},eV:function(){return u},rC:function(){return d}});var n=r(6042),a=r(9396),s=r(7913),o=r.n(s),l=r(1120),i=r.n(l),c=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=new(o())({length:e});return"".concat(t?"block_":"").concat(r())},u=function(e,t,r){setTimeout((function(){i()(document.getElementById("mainFrame"),{allowTaint:!0,imageTimeout:500,logging:!0}).then((function(s){var o=s.toDataURL("image/png",1),l=new Image;l.src=o;var i=document.getElementById("thumbnail");i&&(i.appendChild(l),e(!1),t((0,a.Z)((0,n.Z)({},r),{thumbnail:o})))}))}),500)},d=function(){var e=window.location.href.split("#")[1];if(e){if(e.includes("/")){var t=e.split("/");return{project:t[0],page:t[1]}}return window.location.href="#firstproject/homepage",{project:"firstproject",page:"homepage"}}return window.location.href="#firstproject/homepage",{project:"firstproject",page:"homepage"}}},7246:function(e,t,r){"use strict";r.d(t,{o:function(){return o}});var n=r(4671),a=r(8172),s=function(e,t){var r,n,a=Array.isArray(t)?t:"string"===typeof t?t.split("."):t;for(r=e,n=0;r&&n<a.length;++n)r=r[a[n]];return r},o=(0,n.Z)((function(e){return{editorRef:null,monaco:null,blocks:{},selectedId:"block_init",selectedIterator:1,selectedPage:"homepage",selectedDescription:"",selectedProject:"firstproject",panel:{right:!1,rescent:!1},setAttr:function(t){return e((0,a.ZP)((function(e){!function(e,t,r){var n=t.split("."),a=n.pop(),s=n.reduce((function(e,t){return e[t]=e[t]||{}}),e);s[a]=r}(e,t.path,t.value)})))},pushElement:function(t){return e((0,a.ZP)((function(e){s(e,t.path).push(t.element)})))},removeElement:function(t){return e((0,a.ZP)((function(e){s(e,t.path).splice(t.index,1)})))}}}))},8190:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return J}});var n=r(6042),a=r(5893),s=r(7294),o=r(7246),l=r(2611),i=r(5152),c=r.n(i),u=r(4111),d=r(1438),p=r(2951),h=r(4924),f=r(8029),g=r(9534),m=r(828),x=r(9815),v=r(460),b=r(3935),j=r(5697),y=r.n(j),w=1,N={},k={"'":"&#39",'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"};var A=function(e){(0,f.Z)(r,e);var t=(0,v.Z)(r);function r(){var e;return(0,d.Z)(this,r),e=t.apply(this,arguments),(0,h.Z)((0,u.Z)(e),"state",{hostNodes:N}),(0,h.Z)((0,u.Z)(e),"wrapperRef",s.createRef()),(0,h.Z)((0,u.Z)(e),"renderRef",s.createRef()),(0,h.Z)((0,u.Z)(e),"hostAttribute",""),e}return(0,p.Z)(r,[{key:"componentDidMount",value:function(){var e=(0,m.Z)(this.renderRef.current,2),t=e[0];e[1];this.wrapperRef.current.innerHTML=t,this.updateNodes()}},{key:"componentDidUpdate",value:function(){this.updateNodes()}},{key:"updateNodes",value:function(){var e=this.state.hostNodes,t=(0,m.Z)(this.renderRef.current,2),r=(t[0],t[1]),n={},a=!1;r.length&&this.wrapperRef.current.querySelectorAll("[".concat(this.hostAttribute,"]")).forEach((function(t){var r=t.dataset.templateKey,s=e[r];t!==s&&(s&&s.tagName===t.tagName?(t.parentNode.replaceChild(s,t),t=s):a=!0,n[r]=t)})),(a=a||Object.keys(e).length!==r.length)&&this.setState({hostNodes:n})}},{key:"renderTemplate",value:function(){var e=this,t=this.props,r=t.string,n=t.valuePattern,a=t.values,o=t.valueTags,l=t.defaultValueTag,i=t.escapeValues,c={},u=[],d="string"===typeof n?new RegExp(n,"g"):n;return[r.replace(d,(function(t,r,n){var d=a[n];if("string"!==typeof d){if(null==d)return"";if(Array.isArray(d)||s.isValidElement(d)){var p=o[n]||l,h=c[n]=(c[n]||0)+1,f="".concat(n,":").concat(h);return u.push([f,d]),e.hostAttribute||(e.hostAttribute='data-template-id="'.concat(w++,'"')),"<".concat(p," ").concat(e.hostAttribute,' data-template-key="').concat(f,'"></').concat(p,">")}d=d.toString()}return i?function(e){return e.replace(/['"&<>]/g,(function(e){return k[e]}))}(d):d})),u]}},{key:"render",value:function(){var e=!this.wrapperRef.current,t=this.props,r=t.as,o=(t.defaultValueTag,t.escapeValues,t.string,t.valuePattern,t.valueTags,t.values,(0,g.Z)(t,["as","defaultValueTag","escapeValues","string","valuePattern","valueTags","values"])),l=this.state.hostNodes,i=(0,m.Z)(this.renderTemplate(),2),c=i[0],u=i[1],d=e?[]:u.map((function(e){var t=(0,m.Z)(e,2),r=t[0],n=t[1],o=l[r];if(o)return(0,a.jsx)(s.Fragment,{children:b.createPortal(n,o)},r)}));this.renderRef.current=[c,u],o.ref=this.wrapperRef,o.key="template",o.suppressHydrationWarning=!0,o.dangerouslySetInnerHTML={__html:c};var p=(0,a.jsx)(r,(0,n.Z)({},o));return d.length?[p].concat((0,x.Z)(d)):p}}]),r}(s.PureComponent);(0,h.Z)(A,"displayName","Template"),(0,h.Z)(A,"propTypes",{string:y().string.isRequired,values:y().object,valueTags:y().objectOf(y().string),defaultValueTag:y().string,escapeValues:y().bool,valuePattern:y().oneOfType([y().string,y().object]),as:y().string}),(0,h.Z)(A,"reset",(function(){w=1})),(0,h.Z)(A,"defaultProps",{as:"div",defaultValueTag:"span",escapeValues:!0,valuePattern:/(\{([$\w]+)\})/g,valueTags:N,values:N});var Z=r(6078),C=r(432),S=r(5622),P=r(6696),T=r(1648),E=function(){var e=(0,o.o)((function(e){return e.blocks})),t=((0,o.o)((function(e){return e.selectedId})),(0,o.o)((function(e){return e.selectedPage}))),r=(0,o.o)((function(e){return e.selectedProject})),n=((0,o.o)((function(e){return e.setAttr})),(0,s.useState)(!0)),l=n[0],i=n[1],c=(0,s.useState)({name:t,description:"",thumbnail:""}),u=c[0],d=c[1];(0,s.useEffect)((function(){p(),(0,T.eV)(i,d,u)}),[]);var p=function(){var n=JSON.parse(sessionStorage.getItem("tailBlasterProjects"));u.name===t?(u.thumbnail&&(n[r].pages[t].thumbnail=u.thumbnail),n[r].pages[t].blocks=e):n[r].pages[u.name]={nicename:"",thumbnail:l||"",blocks:e,children:[]},sessionStorage.setItem("tailBlasterProjects",JSON.stringify(n))};return(0,a.jsxs)("div",{className:" text-slate-400 top-0 w-2/3 max-h-screen bg-gray-800 flex flex-col",children:[(0,a.jsx)(P.Z,{}),(0,a.jsxs)("div",{className:"flex-1 text-sm",children:[(0,a.jsx)(Z.Z,{children:(0,a.jsxs)("div",{children:["Save page | ",(0,a.jsx)("span",{className:"text-lime-600",children:t})]})}),(0,a.jsxs)("div",{className:"grid p-3 grid-cols-2 gap-3",children:[(0,a.jsx)("div",{className:"w-full flex flex-col gap-1 items-start",children:(0,a.jsxs)("form",{className:"flex flex-col gap-2 w-full",onSubmit:function(e){e.preventDefault(),p()},children:[(0,a.jsx)("label",{children:"Insert page title"}),(0,a.jsx)(C.Z,{form:["name",u,d]}),(0,a.jsx)("label",{children:"Description"}),(0,a.jsx)("textarea",{className:"border shadow-inner border-slate-900 bg-slate-700 w-full p-3 mb-3 scrollbar"}),(0,a.jsx)(S.Z,{children:"Save"})]})}),(0,a.jsxs)("div",{className:"shadow border border-slate-900 p-4 rounded-lg bg-slate-700",children:[(0,a.jsxs)("div",{className:"pb-1.5 flex",children:[(0,a.jsx)("div",{className:"mr-3",children:"Page previev"}),l?(0,a.jsxs)("svg",{className:"animate-spin h-5 w-5 mr-3 ...",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):null]}),(0,a.jsx)("div",{className:"relative border border-slate-900 max-h-[30vh] overflow-y-scroll scroll",id:"thumbnail"})]})]})]})]})},I=r(7219),R=function(){var e=(0,o.o)((function(e){return e.setAttr})),t=(0,o.o)((function(e){return e.selectedProject})),r=(0,o.o)((function(e){return e.selectedPage})),n=(0,s.useState)({}),l=n[0],i=n[1];return(0,s.useEffect)((function(){var e=JSON.parse(sessionStorage.getItem("tailBlasterProjects"));i(e[t].pages)}),[]),(0,a.jsxs)("div",{className:" text-slate-300 top-0 w-2/3 max-h-screen bg-gray-800 flex flex-col",children:[(0,a.jsx)(P.Z,{}),(0,a.jsxs)("div",{className:"text-sm",children:[(0,a.jsx)(Z.Z,{children:(0,a.jsxs)("div",{children:["Load page | ",(0,a.jsx)("span",{className:"text-lime-600",children:r})]})}),(0,a.jsx)("div",{className:"columns-3 xl:columns-5 p-3",children:Object.keys(l).map((function(t){return(0,a.jsxs)("div",{className:"".concat(r===t?"bg-lime-700 ":"bg-slate-700  hover:bg-slate-900 "," p-px mb-3 cursor-pointer rounded-lg overflow-hidden"),onClick:function(){window.location.href="#firstproject/".concat(t),e({path:"selectedPage",value:t})},children:[(0,a.jsx)("img",{className:"object-cover h-32 shadow w-full object-top opacity-50 hover:opacity-80",src:l[t].thumbnail}),(0,a.jsxs)("div",{className:"flex items-center gap-1 p-3",children:[(0,a.jsx)(I.tHe,{}),t]})]})}))})]})]})},O=function(){(0,o.o)((function(e){return e.blocks})),(0,o.o)((function(e){return e.selectedId})),(0,o.o)((function(e){return e.setAttr}));var e=(0,o.o)((function(e){return e.selectedPage}));return(0,a.jsxs)("div",{className:" text-slate-400 top-0 w-2/3 max-h-screen bg-gray-800 flex flex-col",children:[(0,a.jsx)(P.Z,{}),(0,a.jsxs)("div",{className:"flex-1 text-sm",children:[(0,a.jsx)(Z.Z,{children:(0,a.jsxs)("div",{children:["Components library | ",(0,a.jsx)("span",{className:"text-lime-600",children:e})]})}),(0,a.jsx)("p",{className:"p-3",children:" * Not avilable on this ver."}),(0,a.jsx)("p",{className:"p-3",children:"Upload components from file:"})]})]})},V=function(){(0,o.o)((function(e){return e.blocks})),(0,o.o)((function(e){return e.selectedId})),(0,o.o)((function(e){return e.setAttr}));var e=(0,o.o)((function(e){return e.selectedPage}));return(0,a.jsxs)("div",{className:" text-slate-400 top-0 w-2/3 max-h-screen bg-gray-800 flex flex-col",children:[(0,a.jsx)(P.Z,{}),(0,a.jsxs)("div",{className:"flex-1 text-sm",children:[(0,a.jsx)(Z.Z,{children:(0,a.jsxs)("div",{children:["Data layer | ",(0,a.jsx)("span",{className:"text-lime-600",children:e})]})}),(0,a.jsx)("p",{className:"p-3",children:" * Not avilable on this ver."}),(0,a.jsx)("p",{className:"p-3",children:"Configure REST endpoint to parse external data and display on your components"}),(0,a.jsx)("p",{className:"p-3",children:"Two default layer (Global project data and current page data)"})]})]})},F=function(){var e=(0,o.o)((function(e){return e.blocks})),t=(0,o.o)((function(e){return e.selectedId})),r=(0,o.o)((function(e){return e.setAttr})),n=(0,s.useState)(JSON.stringify(e[t].properties)),l=n[0],i=(n[1],(0,s.useState)(!0)),c=i[0],u=i[1];return(0,s.useEffect)((function(){u(function(e){try{return JSON.parse(e)&&!!e}catch(t){return!1}}(l))}),[l]),(0,a.jsxs)("div",{className:" text-slate-400 top-0 w-2/3 max-h-screen bg-gray-800 flex flex-col",children:[(0,a.jsx)(P.Z,{}),(0,a.jsxs)("div",{className:"flex-1 text-sm",children:[(0,a.jsxs)(Z.Z,{children:[" ",(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{onClick:function(){return r({path:"panel.right",value:"editor"})},className:"text-xl h-full cursor-pointer hover:text-gray-200 hover:bg-slate-900 border-r border-slate-900 -m-3 p-3",children:(0,a.jsx)(I.YFh,{})}),(0,a.jsx)("span",{className:"ml-6",children:"Component properties"})]})]}),(0,a.jsx)("h1",{className:"text-xl p-3",children:t}),(0,a.jsxs)(Z.Z,{children:["On this version, create only one level JSON, where key is prop name",(0,a.jsx)("br",{}),"and value is prop type (string or number)"]}),c?(0,a.jsx)(S.Z,{onClick:function(){r({path:"blocks.".concat(t,".properties"),value:JSON.parse(l)})},children:"Save properties"}):(0,a.jsx)("div",{className:"bg-stone-700 border-t border-yellow-800 text-slate-300 p-3",children:"Data format (JSON) is invalid"})]})]})},_=c()((function(){return Promise.all([r.e(776),r.e(131)]).then(r.bind(r,5131))}),{loadableGenerated:{webpack:function(){return[5131]}},ssr:!1}),B=function(){var e=(0,o.o)((function(e){return e.blocks})),t=(0,o.o)((function(e){return e.selectedId})),r=(0,o.o)((function(e){return e.selectedPage})),i=(0,o.o)((function(e){return e.setAttr})),c=(0,o.o)((function(e){return e.panel}));(0,s.useEffect)((function(){var e=!1;document.onkeyup=function(t){17==t.keyCode&&(e=!1)},document.onkeydown=function(t){return 17==t.keyCode&&(e=!0),83==t.keyCode&&1==e?(i({path:"panel.right",value:"savepage"}),!1):79==t.keyCode&&1==e?(i({path:"panel.right",value:"loadpage"}),!1):68==t.keyCode&&1==e?(i({path:"panel.right",value:"datalayer"}),!1):void 0};var t=(0,T.rC)();i({path:"selectedPage",value:t.page})})),(0,s.useEffect)((function(){var e=(0,T.rC)(),t=JSON.parse(sessionStorage.getItem("tailBlasterProjects"));t||(sessionStorage.setItem("tailBlasterProjects",JSON.stringify(l.q)),t=l.q),e.project&&e.page?i({path:"blocks",value:t[e.project].pages[e.page].blocks}):alert("load data error")}),[r]);var u=function(e){var r,s,o=e.data,l=e.name,d=e.iterator;d.push(!0);var p=d.length,h=(null===(r=o[l])||void 0===r?void 0:r.values)?(0,n.Z)({},o[l].values):{};return(null===(s=o[l])||void 0===s?void 0:s.children)&&o[l].children.map((function(e){h[e]=(0,a.jsx)(u,{data:o,name:e,iterator:d})})),o[l]?(0,a.jsxs)("div",{onClick:function(e){e.stopPropagation(),i({path:"selectedId",value:l}),i({path:"selectedIterator",value:p}),i({path:"panel.right",value:"editor"}),i({path:"panel.rescent",value:!1})},className:"".concat(t===l&&"editor"===c.right?"outline outline-dashed outline-yellow-700":"","  relative"),children:["editor"===c.right?(0,a.jsx)("div",{className:"text-xs text-white -top-1 -left-1 bg-opacity-50 absolute rounded-lg bg-black px-1 w-4 h-4 flex items-center",children:p}):null,(0,a.jsx)(A,{string:o[l].content,values:h,escapeValues:!1})]}):null},d=Object.keys(e)[0];return(0,a.jsxs)("div",{className:"relative flex h-screen overflow-hidden w-full",children:["componentproperties"===c.right?(0,a.jsx)("div",{style:{backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAACxJREFUKFNjZMAEUgwMDM/QhRmhAjBJEA0DIMVwcZhCZAPwmojFBahCI9NEAI1bCCXa5DkNAAAAAElFTkSuQmCC"},className:"flex-1 h-full grid",children:(0,a.jsx)("div",{className:"w-max h-max m-auto bg-white shadow border border-stone-300",children:(0,a.jsx)(A,{string:e[t].content,values:{}})})}):(0,a.jsx)("div",{id:"mainFrame",className:"flex-1 h-max",children:(0,a.jsx)(u,{data:e,name:d,iterator:[]})}),"editor"===c.right?(0,a.jsx)(_,{}):(0,a.jsx)(a.Fragment,{}),"savepage"===c.right?(0,a.jsx)(E,{}):(0,a.jsx)(a.Fragment,{}),"loadpage"===c.right?(0,a.jsx)(R,{}):(0,a.jsx)(a.Fragment,{}),"componentslibrary"===c.right?(0,a.jsx)(O,{}):(0,a.jsx)(a.Fragment,{}),"datalayer"===c.right?(0,a.jsx)(V,{}):(0,a.jsx)(a.Fragment,{}),"componentproperties"===c.right?(0,a.jsx)(F,{}):(0,a.jsx)(a.Fragment,{}),!1===c.right?(0,a.jsx)("div",{className:"text-gray-400",children:(0,a.jsx)(P.Z,{showClose:!1})}):(0,a.jsx)(a.Fragment,{})]})};B.getInitialProps=function(){return{}};var J=B}},function(e){e.O(0,[443,500,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);