"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[736],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2851:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],c={title:"Generating a BlockchainExplorer URL"},l=void 0,p={unversionedId:"tokenRelatedURL/blockchainExplorer",id:"tokenRelatedURL/blockchainExplorer",title:"Generating a BlockchainExplorer URL",description:"By presenting an Etherscan URL, we can get the transaction history of an item and show it to the user.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/tokenRelatedURL/blockchainExplorer.mdx",sourceDirName:"tokenRelatedURL",slug:"/tokenRelatedURL/blockchainExplorer",permalink:"/mint-sdk-docs/en/docs/next/tokenRelatedURL/blockchainExplorer",tags:[],version:"current",frontMatter:{title:"Generating a BlockchainExplorer URL"},sidebar:"defaultSidebar",previous:{title:"Setting up and acquiring user profile information",permalink:"/mint-sdk-docs/en/docs/next/gettingStarted/UserAccountInfo"},next:{title:"Generating a OpenSea NFT Page URL",permalink:"/mint-sdk-docs/en/docs/next/tokenRelatedURL/openSea"}},s=[{value:"Etherscan",id:"etherscan",children:[{value:"Creating a URL to track the transaction for Etherscan",id:"creating-a-url-to-track-the-transaction-for-etherscan",children:[],level:3}],level:2},{value:"Matic Explorer",id:"matic-explorer",children:[{value:"Creating a URL to track the transaction for matic",id:"creating-a-url-to-track-the-transaction-for-matic",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By presenting an Etherscan URL, we can get the transaction history of an item and show it to the user."),(0,o.kt)("p",null,"You can get the transaction history of an item, including the ",(0,o.kt)("inlineCode",{parentName:"p"},"TxHash")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"SDK.getItemLogs()"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkId")," for each item can be referenced by ",(0,o.kt)("inlineCode",{parentName:"p"},"Item.networkId"),"."),(0,o.kt)("h2",{id:"etherscan"},"Etherscan"),(0,o.kt)("p",null,"For those with the ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkId")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"4"),", the below URL can be used."),(0,o.kt)("h3",{id:"creating-a-url-to-track-the-transaction-for-etherscan"},"Creating a URL to track the transaction for Etherscan"),(0,o.kt)("p",null,"Mainnet(NetworkId=1)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"https://etherscan.io/tx/[TxHash]\n")),(0,o.kt)("p",null,"Rinkeby(NetworkId=4)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"https://rinkeby.etherscan.io/tx/[TxHash]\n")),(0,o.kt)("h2",{id:"matic-explorer"},"Matic Explorer"),(0,o.kt)("p",null,"For those with the ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkId")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"137")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"80001"),", the below URL can be used."),(0,o.kt)("h3",{id:"creating-a-url-to-track-the-transaction-for-matic"},"Creating a URL to track the transaction for matic"),(0,o.kt)("p",null,"Mainnet(NetworkId=137)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"https://explorer-mainnet.maticvigil.com/tx/[Tx\u30cf\u30c3\u30b7\u30e5]\n")),(0,o.kt)("p",null,"Mumbai(NetworkId=80001)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"https://explorer-mumbai.maticvigil.com/tx/[Tx\u30cf\u30c3\u30b7\u30e5]\n")))}d.isMDXComponent=!0}}]);