"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[337],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9318:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],l={title:"OpenSea\u306eNFT\u30da\u30fc\u30b8URL\u751f\u6210\u65b9\u6cd5"},p=void 0,c={unversionedId:"tokenRelatedURL/openSea",id:"tokenRelatedURL/openSea",title:"OpenSea\u306eNFT\u30da\u30fc\u30b8URL\u751f\u6210\u65b9\u6cd5",description:"\u767a\u884c\u3057\u305f NFT \u306e OpenSea \u30da\u30fc\u30b8\u3092\u63d0\u793a\u3057\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u306b NFT \u306e\uff12\u6b21\u6d41\u901a\u3092\u3057\u3084\u3059\u304f\u3055\u305b\u305f\u308a\u3001NFT \u306e\u767a\u884c\u8a3c\u660e\u3092\u63d0\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/docs/tokenRelatedURL/openSea.mdx",sourceDirName:"tokenRelatedURL",slug:"/tokenRelatedURL/openSea",permalink:"/mint-sdk-docs/docs/next/tokenRelatedURL/openSea",editUrl:"https://github.com/KyuzanInc/mint-sdk-js/docs/tokenRelatedURL/openSea.mdx",tags:[],version:"current",frontMatter:{title:"OpenSea\u306eNFT\u30da\u30fc\u30b8URL\u751f\u6210\u65b9\u6cd5"},sidebar:"main",previous:{title:"\u30e6\u30fc\u30b6\u30fc\u306e\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u60c5\u5831\u306e\u8a2d\u5b9a\u30fb\u53d6\u5f97",permalink:"/mint-sdk-docs/docs/next/gettingStarted/UserAccountInfo"},next:{title:"BlockchainExplorer\u306eURL\u751f\u6210\u65b9\u6cd5",permalink:"/mint-sdk-docs/docs/next/tokenRelatedURL/blockchainExplorer"}},d=[{value:"OpenSea \u306e NFT \u30da\u30fc\u30b8 URL \u751f\u6210\u65b9\u6cd5",id:"opensea-\u306e-nft-\u30da\u30fc\u30b8-url-\u751f\u6210\u65b9\u6cd5",children:[{value:"Mainnet(NetworkId=1)",id:"mainnetnetworkid1",children:[],level:3},{value:"Rinkeby(NetworkId=4)",id:"rinkebynetworkid4",children:[],level:3},{value:"Mainnet(NetworkId=137)",id:"mainnetnetworkid137",children:[],level:3},{value:"Mumbai(NetworkId=80001)",id:"mumbainetworkid80001",children:[],level:3},{value:"Mainnet(NetworkId=137)",id:"mainnetnetworkid137-1",children:[],level:3}],level:2}],u={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u767a\u884c\u3057\u305f NFT \u306e OpenSea \u30da\u30fc\u30b8\u3092\u63d0\u793a\u3057\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u306b NFT \u306e\uff12\u6b21\u6d41\u901a\u3092\u3057\u3084\u3059\u304f\u3055\u305b\u305f\u308a\u3001NFT \u306e\u767a\u884c\u8a3c\u660e\u3092\u63d0\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u30a2\u30c9\u30ec\u30b9"),"\u306f\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"Item.mintContractAddress"),"\u3067\u3059"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tokenId"),"\u306f\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"Item.tokenId"),"\u3067\u3059")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tradeType=fixedPrice"),"\u307e\u305f\u306f",(0,o.kt)("inlineCode",{parentName:"p"},"tradeType=auction"),"\u306e",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),"\u306f\u3001\u8cb7\u308f\u308c\u308b\u304b\u5f15\u51fa\u3055\u308c\u308b\u307e\u3067 NFT \u306f\u767a\u884c\u3055\u308c\u307e\u305b\u3093\u3002\n",(0,o.kt)("inlineCode",{parentName:"p"},"Item.buyerAddress"),"\u306e\u5024\u3092\u898b\u308b\u3053\u3068\u3067\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),'\u304c"\u8cb7\u308f\u308c\u305f"\u307e\u305f\u306f"\u5f15\u51fa\u3055\u308c\u305f"\u3092\u5224\u65ad\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002'),(0,o.kt)("h2",{id:"opensea-\u306e-nft-\u30da\u30fc\u30b8-url-\u751f\u6210\u65b9\u6cd5"},"OpenSea \u306e NFT \u30da\u30fc\u30b8 URL \u751f\u6210\u65b9\u6cd5"),(0,o.kt)("h3",{id:"mainnetnetworkid1"},"Mainnet(NetworkId=1)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"https://opensea.io/assets/[\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u30a2\u30c9\u30ec\u30b9]/[tokenId]\n")),(0,o.kt)("h3",{id:"rinkebynetworkid4"},"Rinkeby(NetworkId=4)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"https://testnets.opensea.io/assets/[\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u30a2\u30c9\u30ec\u30b9]/[tokenId]\n")),(0,o.kt)("h3",{id:"mainnetnetworkid137"},"Mainnet(NetworkId=137)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"https://matic.opensea.io/[\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u30a2\u30c9\u30ec\u30b9]/[tokenId]\n")),(0,o.kt)("h3",{id:"mumbainetworkid80001"},"Mumbai(NetworkId=80001)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/matic"),"\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"https://testnets.opensea.io/assets/matic/[\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u30a2\u30c9\u30ec\u30b9]/[tokenId]\n")),(0,o.kt)("h3",{id:"mainnetnetworkid137-1"},"Mainnet(NetworkId=137)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"https://matic.opensea.io/matic/[\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u30a2\u30c9\u30ec\u30b9]/[tokenId]\n")))}s.isMDXComponent=!0}}]);