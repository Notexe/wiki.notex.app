(self.webpackChunkwiki_notex_app=self.webpackChunkwiki_notex_app||[]).push([[910],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return k},kt:function(){return o}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),m=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=m(t.components);return n.createElement(u.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),d=m(a),o=r,s=d["".concat(u,".").concat(o)]||d[o]||h[o]||l;return a?n.createElement(s,i(i({ref:e},k),{},{components:a})):n.createElement(s,i({ref:e},k))}));function o(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7967:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return k},default:function(){return d}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i=["components"],p={sidebar_position:2},u="RPKG",m={unversionedId:"glacier2/rpkg",id:"glacier2/rpkg",isDocsHomePage:!1,title:"RPKG",description:"RPKGs (Retail/Runtime Packages) are the archive format Glacier 2 Engine games use.",source:"@site/docs/glacier2/rpkg.md",sourceDirName:"glacier2",slug:"/glacier2/rpkg",permalink:"/glacier2/rpkg",editUrl:"https://github.com/glacier-modding/wiki.notex.app/blob/main/docs/glacier2/rpkg.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"File Formats",permalink:"/glacier2/fileformats"},next:{title:"Information",permalink:"/rpkg/information"}},k=[{value:"HITMAN 3",id:"hitman-3",children:[]},{value:"HITMAN 2",id:"hitman-2",children:[]},{value:"HITMAN 1",id:"hitman-1",children:[]}],h={toc:k};function d(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rpkg"},"RPKG"),(0,l.kt)("p",null,"RPKGs (Retail/Runtime Packages) are the archive format Glacier 2 Engine games use."),(0,l.kt)("h3",{id:"hitman-3"},"HITMAN 3"),(0,l.kt)("h4",{id:"base-archive-structure"},"Base archive structure"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"2KPR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"unknown (always seems to be 0x1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"chunk number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"unknown (always seems to be 0x0)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"chunk patch number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"unknown (always seems to be 0x78)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"unknown (always seems to be 0x78)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file data table size")))),(0,l.kt)("h5",{id:"hash-file-data-table-per-entry"},"hash file data table, per entry:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint64_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file hash value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint64_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file data offset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file data size")))),(0,l.kt)("h5",{id:"hash-file-meta-data-table-per-entry"},"hash file meta data table, per entry:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file hash reference table size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"unknown (always seems to be 0x0)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash size final")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash size in memory")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash size in video memory")))),(0,l.kt)("h5",{id:"if-the-hash-file-hash-reference-table-size-is--0-and-there-are-hash-references"},"if the hash file hash reference table size is > 0 and there are hash references"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash reference file count")))),(0,l.kt)("h5",{id:"hash-reference-file-typesflags-per-entry"},"hash reference file types/flags, per entry:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash reference file type/flag")))),(0,l.kt)("h5",{id:"hash-reference-file-hash-values-per-entry"},"hash reference file hash values, per entry:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint64_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file hash value")))),(0,l.kt)("h4",{id:"patch-archive-structure"},"Patch archive structure"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"2KPR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"unknown (always seems to be 0x1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"chunk number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"unknown (always seems to be 0x0)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"chunk patch number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"unknown (always seems to be 0x78)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"unknown (always seems to be 0x78)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file data table size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"patch deletion entry count")))),(0,l.kt)("h5",{id:"patch-entries-if-patch-deletion-entry-count--0"},"patch entries (if patch deletion entry count > 0):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint64_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file hash value")))),(0,l.kt)("h5",{id:"hash-file-data-table-per-entry-1"},"hash file data table, per entry:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint64_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file hash value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint64_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file data offset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file data size")))),(0,l.kt)("h5",{id:"hash-file-meta-data-table-per-entry-1"},"hash file meta data table, per entry:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file hash reference table size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"unknown (always seems to be 0x0)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash size final")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash size in memory")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash size in video memory")))),(0,l.kt)("h5",{id:"if-the-hash-file-hash-reference-table-size-is--0-and-there-are-hash-references-1"},"if the hash file hash reference table size is > 0 and there are hash references"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash reference file count")))),(0,l.kt)("h5",{id:"hash-reference-file-typesflags-per-entry-1"},"hash reference file types/flags, per entry:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash reference file type/flag")))),(0,l.kt)("h5",{id:"hash-reference-file-hash-values-per-entry-1"},"hash reference file hash values, per entry:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint64_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file hash value")))),(0,l.kt)("h3",{id:"hitman-2"},"HITMAN 2"),(0,l.kt)("h3",{id:"hitman-1"},"HITMAN 1"))}d.isMDXComponent=!0}}]);