"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95800],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6657:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],p={id:"core.UpdateOptions",title:"Interface: UpdateOptions<T>",sidebar_label:"UpdateOptions",custom_edit_url:null},l=void 0,c={unversionedId:"api/interfaces/core.UpdateOptions",id:"api/interfaces/core.UpdateOptions",title:"Interface: UpdateOptions<T>",description:"core.UpdateOptions",source:"@site/docs/api/interfaces/core.UpdateOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.UpdateOptions",permalink:"/docs/next/api/interfaces/core.UpdateOptions",editUrl:null,tags:[],version:"current",frontMatter:{id:"core.UpdateOptions",title:"Interface: UpdateOptions<T>",sidebar_label:"UpdateOptions",custom_edit_url:null},sidebar:"API",previous:{title:"UniqueOptions",permalink:"/docs/next/api/interfaces/core.UniqueOptions"},next:{title:"Column",permalink:"/docs/next/api/interfaces/knex.Column"}},s=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"ctx",id:"ctx",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"filters",id:"filters",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"schema",id:"schema",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],d={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/core"},"core"),".UpdateOptions"),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"ctx"},"ctx"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"ctx"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/14c2fa9/packages/core/src/drivers/IDatabaseDriver.ts#L145"},"packages/core/src/drivers/IDatabaseDriver.ts:145")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"filters"},"filters"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"filters"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[] ","|"," ",(0,i.kt)("a",{parentName:"p",href:"../modules/core#dictionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"../modules/core#dictionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/14c2fa9/packages/core/src/drivers/IDatabaseDriver.ts#L143"},"packages/core/src/drivers/IDatabaseDriver.ts:143")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"schema"},"schema"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"schema"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/14c2fa9/packages/core/src/drivers/IDatabaseDriver.ts#L144"},"packages/core/src/drivers/IDatabaseDriver.ts:144")))}u.isMDXComponent=!0}}]);