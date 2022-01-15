"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[138],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1655:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],l={title:"Generating a OpenSea NFT Page URL"},c=void 0,p={unversionedId:"tokenRelatedURL/openSea",id:"tokenRelatedURL/openSea",title:"Generating a OpenSea NFT Page URL",description:"By creating an OpenSea page for the generated NFT, it allows for more secondary market distribution, and show the certification of the NFT more publicly.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/tokenRelatedURL/openSea.mdx",sourceDirName:"tokenRelatedURL",slug:"/tokenRelatedURL/openSea",permalink:"/mint-sdk-docs/en/docs/next/tokenRelatedURL/openSea",editUrl:"https://github.com/KyuzanInc/mint-sdk-js/docs/tokenRelatedURL/openSea.mdx",tags:[],version:"current",frontMatter:{title:"Generating a OpenSea NFT Page URL"},sidebar:"sidebar",previous:{title:"Generating a BlockchainExplorer URL",permalink:"/mint-sdk-docs/en/docs/next/tokenRelatedURL/blockchainExplorer"}},d=[{value:"Creating an OpenSea NFT Page URL",id:"creating-an-opensea-nft-page-url",children:[{value:"Mainnet(NetworkId=1)",id:"mainnetnetworkid1",children:[],level:3},{value:"Rinkeby(NetworkId=4)",id:"rinkebynetworkid4",children:[],level:3},{value:"Mainnet(NetworkId=137)",id:"mainnetnetworkid137",children:[],level:3},{value:"Mumbai(NetworkId=80001)",id:"mumbainetworkid80001",children:[],level:3},{value:"Mainnet(NetworkId=137)",id:"mainnetnetworkid137-1",children:[],level:3}],level:2}],s={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By creating an OpenSea page for the generated NFT, it allows for more secondary market distribution, and show the certification of the NFT more publicly."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The contract address is ",(0,o.kt)("inlineCode",{parentName:"li"},"Item.mintContractAddress")),(0,o.kt)("li",{parentName:"ul"},"The token ID  is ",(0,o.kt)("inlineCode",{parentName:"li"},"Item.tokenId"))),(0,o.kt)("p",null,"For both ",(0,o.kt)("inlineCode",{parentName:"p"},"tradeType=fixedPrice")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tradeType=auction"),", the NFT is not published until it is bought or successfully auctioned.\nTo check whether the Item has been bought or auctioned, please refer to ",(0,o.kt)("inlineCode",{parentName:"p"},"Item.buyerAddress")," for a value."),(0,o.kt)("h2",{id:"creating-an-opensea-nft-page-url"},"Creating an OpenSea NFT Page URL"),(0,o.kt)("h3",{id:"mainnetnetworkid1"},"Mainnet(NetworkId=1)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"https://opensea.io/assets/[ContractAddress]/[tokenId]\n")),(0,o.kt)("h3",{id:"rinkebynetworkid4"},"Rinkeby(NetworkId=4)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"https://testnets.opensea.io/assets/[ContractAddress]/[tokenId]\n")),(0,o.kt)("h3",{id:"mainnetnetworkid137"},"Mainnet(NetworkId=137)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"https://matic.opensea.io/[ContractAddress]/[tokenId]\n")),(0,o.kt)("h3",{id:"mumbainetworkid80001"},"Mumbai(NetworkId=80001)"),(0,o.kt)("p",null,"Notice that ",(0,o.kt)("inlineCode",{parentName:"p"},"/matic")," is prepended. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"https://testnets.opensea.io/assets/matic/[ContractAddress]/[tokenId]\n")),(0,o.kt)("h3",{id:"mainnetnetworkid137-1"},"Mainnet(NetworkId=137)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"https://matic.opensea.io/matic/[ContractAddress]/[tokenId]\n")))}u.isMDXComponent=!0}}]);