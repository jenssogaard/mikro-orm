"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53959],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},m=Object.keys(e);for(r=0;r<m.length;r++)a=m[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(r=0;r<m.length;r++)a=m[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),o=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,m=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=o(a),c=n,N=g["".concat(p,".").concat(c)]||g[c]||k[c]||m;return a?r.createElement(N,l(l({ref:t},s),{},{components:a})):r.createElement(N,l({ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var m=a.length,l=new Array(m);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<m;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},76940:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return s},default:function(){return g}});var r=a(83117),n=a(80102),m=(a(67294),a(3905)),l=["components"],i={id:"core.namingstrategy",title:"Interface: NamingStrategy",sidebar_label:"NamingStrategy",custom_edit_url:null,hide_title:!0},p="Interface: NamingStrategy",o={unversionedId:"api/interfaces/core.namingstrategy",id:"version-4.5/api/interfaces/core.namingstrategy",title:"Interface: NamingStrategy",description:"core.NamingStrategy",source:"@site/versioned_docs/version-4.5/api/interfaces/core.namingstrategy.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.namingstrategy",permalink:"/docs/api/interfaces/core.namingstrategy",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1641174688,formattedLastUpdatedAt:"1/3/2022",frontMatter:{id:"core.namingstrategy",title:"Interface: NamingStrategy",sidebar_label:"NamingStrategy",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"MikroORMOptions",permalink:"/docs/api/interfaces/core.mikroormoptions"},next:{title:"Node",permalink:"/docs/api/interfaces/core.node"}},s=[{value:"Implemented by",id:"implemented-by",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"classToMigrationName",id:"classtomigrationname",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3},{value:"classToTableName",id:"classtotablename",children:[{value:"Parameters:",id:"parameters-1",children:[],level:4}],level:3},{value:"getClassName",id:"getclassname",children:[{value:"Parameters:",id:"parameters-2",children:[],level:4}],level:3},{value:"joinColumnName",id:"joincolumnname",children:[{value:"Parameters:",id:"parameters-3",children:[],level:4}],level:3},{value:"joinKeyColumnName",id:"joinkeycolumnname",children:[{value:"Parameters:",id:"parameters-4",children:[],level:4}],level:3},{value:"joinTableName",id:"jointablename",children:[{value:"Parameters:",id:"parameters-5",children:[],level:4}],level:3},{value:"propertyToColumnName",id:"propertytocolumnname",children:[{value:"Parameters:",id:"parameters-6",children:[],level:4}],level:3},{value:"referenceColumnName",id:"referencecolumnname",children:[],level:3}],level:2}],k={toc:s};function g(e){var t=e.components,a=(0,n.Z)(e,l);return(0,m.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"interface-namingstrategy"},"Interface: NamingStrategy"),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".NamingStrategy"),(0,m.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"/docs/api/classes/core.abstractnamingstrategy"},(0,m.kt)("em",{parentName:"a"},"AbstractNamingStrategy")))),(0,m.kt)("h2",{id:"methods"},"Methods"),(0,m.kt)("h3",{id:"classtomigrationname"},"classToMigrationName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"classToMigrationName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"timestamp"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Return a migration name. This name should allow ordering."),(0,m.kt)("h4",{id:"parameters"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/NamingStrategy.ts#L16"},"packages/core/src/naming-strategy/NamingStrategy.ts:16")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"classtotablename"},"classToTableName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"classToTableName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"entityName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Return a table name for an entity class"),(0,m.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"entityName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/NamingStrategy.ts#L11"},"packages/core/src/naming-strategy/NamingStrategy.ts:11")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"getclassname"},"getClassName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"getClassName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"file"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"separator?"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Return a name of the class based on its file name"),(0,m.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"file")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"separator?")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/NamingStrategy.ts#L6"},"packages/core/src/naming-strategy/NamingStrategy.ts:6")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"joincolumnname"},"joinColumnName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"joinColumnName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"propertyName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Return a join column name for a property"),(0,m.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"propertyName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/NamingStrategy.ts#L31"},"packages/core/src/naming-strategy/NamingStrategy.ts:31")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"joinkeycolumnname"},"joinKeyColumnName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"joinKeyColumnName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"entityName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"referencedColumnName?"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"composite?"),": ",(0,m.kt)("em",{parentName:"p"},"boolean"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Return the foreign key column name for the given parameters"),(0,m.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"entityName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"referencedColumnName?")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"composite?")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"boolean"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/NamingStrategy.ts#L41"},"packages/core/src/naming-strategy/NamingStrategy.ts:41")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"jointablename"},"joinTableName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"joinTableName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"sourceEntity"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"targetEntity"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"propertyName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Return a join table name"),(0,m.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"sourceEntity")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"targetEntity")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"propertyName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/NamingStrategy.ts#L36"},"packages/core/src/naming-strategy/NamingStrategy.ts:36")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"propertytocolumnname"},"propertyToColumnName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"propertyToColumnName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"propertyName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Return a column name for a property"),(0,m.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"propertyName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/NamingStrategy.ts#L21"},"packages/core/src/naming-strategy/NamingStrategy.ts:21")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"referencecolumnname"},"referenceColumnName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"referenceColumnName"),"(): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Return the default reference column name"),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/NamingStrategy.ts#L26"},"packages/core/src/naming-strategy/NamingStrategy.ts:26")))}g.isMDXComponent=!0}}]);