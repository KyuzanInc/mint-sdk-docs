"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2055],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=o(n),k=i,u=m["".concat(s,".").concat(k)]||m[k]||c[k]||r;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,l[1]=d;for(var o=2;o<r;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3804:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return p},default:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),l=["components"],d={id:"strategies.FortmaticStrategy",title:"Class: FortmaticStrategy",sidebar_label:"strategies.FortmaticStrategy",custom_edit_url:null},s=void 0,o={unversionedId:"api/classes/strategies.FortmaticStrategy",id:"version-2.0/api/classes/strategies.FortmaticStrategy",title:"Class: FortmaticStrategy",description:"strategies.FortmaticStrategy",source:"@site/versioned_docs/version-2.0/api/classes/strategies.FortmaticStrategy.md",sourceDirName:"api/classes",slug:"/api/classes/strategies.FortmaticStrategy",permalink:"/mint-sdk-docs/docs/api/classes/strategies.FortmaticStrategy",editUrl:null,tags:[],version:"2.0",frontMatter:{id:"strategies.FortmaticStrategy",title:"Class: FortmaticStrategy",sidebar_label:"strategies.FortmaticStrategy",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"index.WrongNetworkError",permalink:"/mint-sdk-docs/docs/api/classes/index.WrongNetworkError"},next:{title:"strategies.MetamaskStrategy",permalink:"/mint-sdk-docs/docs/api/classes/strategies.MetamaskStrategy"}},p=[{value:"Implements",id:"implements",children:[],level:2},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"eventAccountsChangeCallbacks",id:"eventaccountschangecallbacks",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"eventConnectCallbacks",id:"eventconnectcallbacks",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"eventDisconnectCallbacks",id:"eventdisconnectcallbacks",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"fortmatic",id:"fortmatic",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"connectWallet",id:"connectwallet",children:[{value:"Returns",id:"returns",children:[],level:4},{value:"Implementation of",id:"implementation-of",children:[],level:4},{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"disconnectWallet",id:"disconnectwallet",children:[{value:"Returns",id:"returns-1",children:[],level:4},{value:"Implementation of",id:"implementation-of-1",children:[],level:4},{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3},{value:"emitAccountChange",id:"emitaccountchange",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-7",children:[],level:4}],level:3},{value:"emitConnect",id:"emitconnect",children:[{value:"Returns",id:"returns-3",children:[],level:4},{value:"Defined in",id:"defined-in-8",children:[],level:4}],level:3},{value:"emitDisconnect",id:"emitdisconnect",children:[{value:"Returns",id:"returns-4",children:[],level:4},{value:"Defined in",id:"defined-in-9",children:[],level:4}],level:3},{value:"getConnectedNetworkId",id:"getconnectednetworkid",children:[{value:"Returns",id:"returns-5",children:[],level:4},{value:"Implementation of",id:"implementation-of-2",children:[],level:4},{value:"Defined in",id:"defined-in-10",children:[],level:4}],level:3},{value:"getProvider",id:"getprovider",children:[{value:"Returns",id:"returns-6",children:[],level:4},{value:"Implementation of",id:"implementation-of-3",children:[],level:4},{value:"Defined in",id:"defined-in-11",children:[],level:4}],level:3},{value:"getWalletInfo",id:"getwalletinfo",children:[{value:"Returns",id:"returns-7",children:[],level:4},{value:"Implementation of",id:"implementation-of-4",children:[],level:4},{value:"Defined in",id:"defined-in-12",children:[],level:4}],level:3},{value:"isWalletConnect",id:"iswalletconnect",children:[{value:"Returns",id:"returns-8",children:[],level:4},{value:"Implementation of",id:"implementation-of-5",children:[],level:4},{value:"Defined in",id:"defined-in-13",children:[],level:4}],level:3},{value:"offAccountsChange",id:"offaccountschange",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-9",children:[],level:4},{value:"Implementation of",id:"implementation-of-6",children:[],level:4},{value:"Defined in",id:"defined-in-14",children:[],level:4}],level:3},{value:"offConnect",id:"offconnect",children:[{value:"Parameters",id:"parameters-3",children:[],level:4},{value:"Returns",id:"returns-10",children:[],level:4},{value:"Implementation of",id:"implementation-of-7",children:[],level:4},{value:"Defined in",id:"defined-in-15",children:[],level:4}],level:3},{value:"offDisconnect",id:"offdisconnect",children:[{value:"Parameters",id:"parameters-4",children:[],level:4},{value:"Returns",id:"returns-11",children:[],level:4},{value:"Implementation of",id:"implementation-of-8",children:[],level:4},{value:"Defined in",id:"defined-in-16",children:[],level:4}],level:3},{value:"onAccountsChange",id:"onaccountschange",children:[{value:"Parameters",id:"parameters-5",children:[],level:4},{value:"Returns",id:"returns-12",children:[],level:4},{value:"Implementation of",id:"implementation-of-9",children:[],level:4},{value:"Defined in",id:"defined-in-17",children:[],level:4}],level:3},{value:"onConnect",id:"onconnect",children:[{value:"Parameters",id:"parameters-6",children:[],level:4},{value:"Returns",id:"returns-13",children:[],level:4},{value:"Implementation of",id:"implementation-of-10",children:[],level:4},{value:"Defined in",id:"defined-in-18",children:[],level:4}],level:3},{value:"onDisconnect",id:"ondisconnect",children:[{value:"Parameters",id:"parameters-7",children:[],level:4},{value:"Returns",id:"returns-14",children:[],level:4},{value:"Implementation of",id:"implementation-of-11",children:[],level:4},{value:"Defined in",id:"defined-in-19",children:[],level:4}],level:3}],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../modules/strategies"},"strategies"),".FortmaticStrategy"),(0,r.kt)("h2",{id:"implements"},"Implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../interfaces/strategies.WalletStrategy"},(0,r.kt)("inlineCode",{parentName:"a"},"WalletStrategy")))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new FortmaticStrategy"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"walletSetting"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"devOption?"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"walletSetting")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../modules/#walletsetting"},(0,r.kt)("inlineCode",{parentName:"a"},"WalletSetting")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"devOption?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"devOption.backendUrl?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"devOption.jsonRPCUrl?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L13"},"mint-sdk-js/src/strategies/FortmaticStrategy.ts:13")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"eventaccountschangecallbacks"},"eventAccountsChangeCallbacks"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"eventAccountsChangeCallbacks"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"accounts"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),"[] = ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L11"},"mint-sdk-js/src/strategies/FortmaticStrategy.ts:11")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"eventconnectcallbacks"},"eventConnectCallbacks"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"eventConnectCallbacks"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),"[] = ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L9"},"mint-sdk-js/src/strategies/FortmaticStrategy.ts:9")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"eventdisconnectcallbacks"},"eventDisconnectCallbacks"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"eventDisconnectCallbacks"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),"[] = ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L10"},"mint-sdk-js/src/strategies/FortmaticStrategy.ts:10")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fortmatic"},"fortmatic"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"fortmatic"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"WidgetMode")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L8"},"mint-sdk-js/src/strategies/FortmaticStrategy.ts:8")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"connectwallet"},"connectWallet"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"connectWallet"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy"},"WalletStrategy"),".",(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy#connectwallet"},"connectWallet")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L53"},"mint-sdk-js/src/strategies/FortmaticStrategy.ts:53")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"disconnectwallet"},"disconnectWallet"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"disconnectWallet"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy"},"WalletStrategy"),".",(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy#disconnectwallet"},"disconnectWallet")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L82"},"mint-sdk-js/src/strategies/FortmaticStrategy.ts:82")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"emitaccountchange"},"emitAccountChange"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"emitAccountChange"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"accounts"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"accounts")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"),"[]")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L119"},"mint-sdk-js/src/strategies/FortmaticStrategy.ts:119")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"emitconnect"},"emitConnect"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"emitConnect"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L123"},"mint-sdk-js/src/strategies/FortmaticStrategy.ts:123")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"emitdisconnect"},"emitDisconnect"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"emitDisconnect"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L127"},"mint-sdk-js/src/strategies/FortmaticStrategy.ts:127")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getconnectednetworkid"},"getConnectedNetworkId"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getConnectedNetworkId"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,r.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy"},"WalletStrategy"),".",(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy#getconnectednetworkid"},"getConnectedNetworkId")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L58"},"mint-sdk-js/src/strategies/FortmaticStrategy.ts:58")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getprovider"},"getProvider"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getProvider"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Web3Provider")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Web3Provider")),(0,r.kt)("h4",{id:"implementation-of-3"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy"},"WalletStrategy"),".",(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy#getprovider"},"getProvider")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L48"},"mint-sdk-js/src/strategies/FortmaticStrategy.ts:48")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getwalletinfo"},"getWalletInfo"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getWalletInfo"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"address"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"balance"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"unit"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"MATIC"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"ETH"'),"  }",">"),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"address"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"balance"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"unit"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"MATIC"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"ETH"'),"  }",">"),(0,r.kt)("h4",{id:"implementation-of-4"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy"},"WalletStrategy"),".",(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy#getwalletinfo"},"getWalletInfo")),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L31"},"mint-sdk-js/src/strategies/FortmaticStrategy.ts:31")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"iswalletconnect"},"isWalletConnect"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isWalletConnect"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"implementation-of-5"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy"},"WalletStrategy"),".",(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy#iswalletconnect"},"isWalletConnect")),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L27"},"mint-sdk-js/src/strategies/FortmaticStrategy.ts:27")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"offaccountschange"},"offAccountsChange"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"offAccountsChange"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"callback?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"callback?")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"accounts"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"implementation-of-6"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy"},"WalletStrategy"),".",(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy#offaccountschange"},"offAccountsChange")),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L91"},"mint-sdk-js/src/strategies/FortmaticStrategy.ts:91")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"offconnect"},"offConnect"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"offConnect"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"callback?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"callback?")),(0,r.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"implementation-of-7"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy"},"WalletStrategy"),".",(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy#offconnect"},"offConnect")),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L70"},"mint-sdk-js/src/strategies/FortmaticStrategy.ts:70")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"offdisconnect"},"offDisconnect"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"offDisconnect"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"callback?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"callback?")),(0,r.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"implementation-of-8"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy"},"WalletStrategy"),".",(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy#offdisconnect"},"offDisconnect")),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L107"},"mint-sdk-js/src/strategies/FortmaticStrategy.ts:107")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onaccountschange"},"onAccountsChange"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"onAccountsChange"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"accounts"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-12"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"implementation-of-9"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy"},"WalletStrategy"),".",(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy#onaccountschange"},"onAccountsChange")),(0,r.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L87"},"mint-sdk-js/src/strategies/FortmaticStrategy.ts:87")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onconnect"},"onConnect"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"onConnect"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-13"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"implementation-of-10"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy"},"WalletStrategy"),".",(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy#onconnect"},"onConnect")),(0,r.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L66"},"mint-sdk-js/src/strategies/FortmaticStrategy.ts:66")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ondisconnect"},"onDisconnect"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"onDisconnect"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-14"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"implementation-of-11"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy"},"WalletStrategy"),".",(0,r.kt)("a",{parentName:"p",href:"../interfaces/strategies.WalletStrategy#ondisconnect"},"onDisconnect")),(0,r.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L103"},"mint-sdk-js/src/strategies/FortmaticStrategy.ts:103")))}m.isMDXComponent=!0}}]);