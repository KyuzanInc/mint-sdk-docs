"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[541],{4137:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8473:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=t(7462),i=t(3366),o=(t(7294),t(4137)),a=["components"],l={title:"Design regulations for tokenId"},s=void 0,c={unversionedId:"TokenIdDesign",id:"version-1.0/TokenIdDesign",title:"Design regulations for tokenId",description:"tokenId is an unique identifier for the NFT.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/TokenIdDesign.mdx",sourceDirName:".",slug:"/TokenIdDesign",permalink:"/mint-sdk-docs/en/docs/TokenIdDesign",editUrl:"https://github.com/KyuzanInc/mint-sdk-js/versioned_docs/version-1.0/TokenIdDesign.mdx",tags:[],version:"1.0",frontMatter:{title:"Design regulations for tokenId"},sidebar:"main",previous:{title:"Generating a BlockchainExplorer URL",permalink:"/mint-sdk-docs/en/docs/tokenRelatedURL/blockchainExplorer"},next:{title:"SDK\u306b\u304a\u3051\u308b\u901a\u8ca8\u306b\u3064\u3044\u3066",permalink:"/mint-sdk-docs/en/docs/EthInSdk"}},u=[{value:"Design proposals",id:"design-proposals",children:[{value:"Basic",id:"basic",children:[],level:3},{value:"Advanced",id:"advanced",children:[{value:"Example",id:"example",children:[],level:4}],level:3}],level:2},{value:"Test item tokenId on the main net",id:"test-item-tokenid-on-the-main-net",children:[],level:2}],d={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"tokenId is an unique identifier for the NFT.\nIt is possible to generate and assign a identifier to an NFT.\nThe following are restrictions upon creating an unique identifier."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Must be an integer"),(0,o.kt)("li",{parentName:"ul"},"Must be unique against the contract"),(0,o.kt)("li",{parentName:"ul"},"While using Mint, the max value cannot exceed ",(0,o.kt)("inlineCode",{parentName:"li"},"9007199254740990"))),(0,o.kt)("h2",{id:"design-proposals"},"Design proposals"),(0,o.kt)("p",null,"Though there are no strict best practices, here are some examples of generating the tokenId."),(0,o.kt)("h3",{id:"basic"},"Basic"),(0,o.kt)("p",null,"The very basic method is to incrementally increase the ID, ",(0,o.kt)("inlineCode",{parentName:"p"},"1,2,3")," etc."),(0,o.kt)("h3",{id:"advanced"},"Advanced"),(0,o.kt)("p",null,"The advanced method is to split the id in to two or more parts to present further information about the item.\nFor example, we can create a number in which the first 6 numbers present the edition of the item, and the numbers following are the unique idenitifer of the item.\nThis is the method Kyuzan Inc. uses for EGGRYPTO."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"1000001")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"2000001")),(0,o.kt)("p",null,"...."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"21000001")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"22000001")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"1000002")," <-  Illustrates edition 2 of ",(0,o.kt)("inlineCode",{parentName:"p"},"1000001")," "),(0,o.kt)("h2",{id:"test-item-tokenid-on-the-main-net"},"Test item tokenId on the main net"),(0,o.kt)("p",null,"The main net was tested by creating items with an itemId decrementing from ",(0,o.kt)("inlineCode",{parentName:"p"},"9007199254740990"),"."))}p.isMDXComponent=!0}}]);