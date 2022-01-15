"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5680],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,k=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7675:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(4137)),o=["components"],l={title:"Currency in the SDK"},u=void 0,c={unversionedId:"EthInSdk",id:"EthInSdk",title:"Currency in the SDK",description:"About ETH \u3068 MATIC",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/EthInSdk.mdx",sourceDirName:".",slug:"/EthInSdk",permalink:"/mint-sdk-docs/en/docs/next/EthInSdk",tags:[],version:"current",frontMatter:{title:"Currency in the SDK"},sidebar:"defaultSidebar",previous:{title:"WalletStrategy",permalink:"/mint-sdk-docs/en/docs/next/api/interfaces/strategies.WalletStrategy"},next:{title:"Design regulations for tokenId",permalink:"/mint-sdk-docs/en/docs/next/TokenIdDesign"}},p=[{value:"About ETH \u3068 MATIC",id:"about-eth-\u3068-matic",children:[{value:"ETH in SDK",id:"eth-in-sdk",children:[],level:3}],level:2},{value:"Rinkeby \u7528\u306e ETH \u306e\u5165\u624b\u65b9\u6cd5",id:"rinkeby-\u7528\u306e-eth-\u306e\u5165\u624b\u65b9\u6cd5",children:[],level:2},{value:"Mumbai \u7528\u306e MATIC \u306e\u5165\u624b\u65b9\u6cd5",id:"mumbai-\u7528\u306e-matic-\u306e\u5165\u624b\u65b9\u6cd5",children:[],level:2}],s={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"about-eth-\u3068-matic"},"About ETH \u3068 MATIC"),(0,a.kt)("p",null,"Regular shops do transactional process through currency such as ETH, which is processed in units of ",(0,a.kt)("inlineCode",{parentName:"p"},"ether"),". (Just like a dollar)\nFor ETH, wei is the smallest amount of ETH that is calculatable."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"1ether === 1000000000000000000wei")),(0,a.kt)("h3",{id:"eth-in-sdk"},"ETH in SDK"),(0,a.kt)("p",null,"In the SDK, the ether unit is assigned to the ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," type."),(0,a.kt)("p",null,"In some parts, it is assigned as a ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumber")," as wei causes overflow in some environments when assigned as ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),".\nAs a utility, the SDK provides ways to interchangably go from ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumber")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"ether"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SDK.formatEther")," formats a ",(0,a.kt)("inlineCode",{parentName:"li"},"BigNumber")," to an ether unit, which is returned as a ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SDK.parseEther")," formats a ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," as an ether unit, which is returned as a wei in the ",(0,a.kt)("inlineCode",{parentName:"li"},"BigNumber")," format.")),(0,a.kt)("h2",{id:"rinkeby-\u7528\u306e-eth-\u306e\u5165\u624b\u65b9\u6cd5"},"Rinkeby \u7528\u306e ETH \u306e\u5165\u624b\u65b9\u6cd5"),(0,a.kt)("p",null,"\u30c6\u30b9\u30c8\u74b0\u5883\u3067\u4f7f\u3048\u308b ETH \u306e\u5165\u624b\u65b9\u6cd5\u306f\u4ee5\u4e0b\u306e\u901a\u308a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Take note of the wallet address"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://faucet.rinkeby.io/"},"https://faucet.rinkeby.io/")," \u306e\u30b5\u30a4\u30c8\u306b\u30a2\u30af\u30bb\u30b9"),(0,a.kt)("li",{parentName:"ol"},"Tweet \u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30af"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"0x0000....."),"\u90e8\u5206\u3092 1 \u3067\u30e1\u30e2\u3057\u305f\u30a2\u30c9\u30ec\u30b9\u306b\u7f6e\u63db\u3059\u308b"),(0,a.kt)("li",{parentName:"ol"},"Tweet"),(0,a.kt)("li",{parentName:"ol"},"Add the Tweet URL to the input . Tweet \u306e URL \u3092\u30b3\u30d4\u30fc\u3057\u30b5\u30a4\u30c8\u306e Input \u306b\u8cbc\u308a\u4ed8\u3051\u308b"),(0,a.kt)("li",{parentName:"ol"},'Press on the "Give me Ether" button.'),(0,a.kt)("li",{parentName:"ol"},"In due time, the amount will be deposited")),(0,a.kt)("h2",{id:"mumbai-\u7528\u306e-matic-\u306e\u5165\u624b\u65b9\u6cd5"},"Mumbai \u7528\u306e MATIC \u306e\u5165\u624b\u65b9\u6cd5"),(0,a.kt)("p",null,"\u30c6\u30b9\u30c8\u74b0\u5883\u3067\u4f7f\u3048\u308b MATIC \u306e\u5165\u624b\u65b9\u6cd5\u306f\u4ee5\u4e0b\u306e\u901a\u308a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Take note of the wallet address"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://faucet.matic.network/"},"https://faucet.matic.network/")," \u306e\u30b5\u30a4\u30c8\u306b\u30a2\u30af\u30bb\u30b9"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Mumbai"),"\u3092\u9078\u629e"),(0,a.kt)("li",{parentName:"ol"},"\u30a6\u30a9\u30ec\u30c3\u30c8\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057 Submit \u30dc\u30bf\u30f3\u3092\u62bc\u3059"),(0,a.kt)("li",{parentName:"ol"},"In due time, the amount will be deposited")))}m.isMDXComponent=!0}}]);