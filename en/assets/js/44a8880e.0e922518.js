"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[264],{7567:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return g},default:function(){return m}});var i=n(7462),a=n(3366),r=(n(7294),n(4137)),l=(n(5944),n(9524)),s=["components"],o={title:"NFT, from generation to selling."},d=void 0,c={unversionedId:"gettingStarted/Tutorial",id:"gettingStarted/Tutorial",title:"NFT, from generation to selling.",description:"Through this tutorial, you will be able to go through a basic transaction of using an NFT on the Rinkeby network.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/gettingStarted/Tutorial.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/Tutorial",permalink:"/mint-sdk-docs/en/docs/next/gettingStarted/Tutorial",tags:[],version:"current",frontMatter:{title:"NFT, from generation to selling."},sidebar:"defaultSidebar",previous:{title:"Selling and sending a NFT with an associated physical item.",permalink:"/mint-sdk-docs/en/docs/next/gettingStarted/PhysicalItem"},next:{title:"From generating an NFT to selling at a fixed price.",permalink:"/mint-sdk-docs/en/docs/next/gettingStarted/TutorialFixedPrice"}},g=[{value:"0.Prerequistes",id:"0prerequistes",children:[],level:2},{value:"1.Installation",id:"1installation",children:[],level:2},{value:"2. Initializing the SDK",id:"2-initializing-the-sdk",children:[],level:2},{value:"3. Acquiring the item list",id:"3-acquiring-the-item-list",children:[],level:2},{value:"3. Getting each item information and past transaction data individually",id:"3-getting-each-item-information-and-past-transaction-data-individually",children:[{value:"Getting past transaction history data",id:"getting-past-transaction-history-data",children:[],level:3}],level:2},{value:"4. Bidding on an Item",id:"4-bidding-on-an-item",children:[{value:"Wallet connection",id:"wallet-connection",children:[],level:3},{value:"Bidding",id:"bidding",children:[],level:3}],level:2},{value:"5. Ending an auction",id:"5-ending-an-auction",children:[{value:"Getting the current bidding item",id:"getting-the-current-bidding-item",children:[],level:3},{value:"Identifying the winner of the auction",id:"identifying-the-winner-of-the-auction",children:[],level:3},{value:"Recieving item using Mint",id:"recieving-item-using-mint",children:[],level:3}],level:2}],u={toc:g};function m(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Through this tutorial, you will be able to go through a basic transaction of using an NFT on the Rinkeby network."),(0,r.kt)("h2",{id:"0prerequistes"},"0.Prerequistes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"An access token is needed, which is provided by contacting Kyuzan Inc."),(0,r.kt)("li",{parentName:"ol"},"An access token to the Rinkeby network is needed using ",(0,r.kt)("a",{parentName:"li",href:"https://fortmatic.com/"},"Fortmatic")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/api#how-to-get-eth-for-rinkebytest-env"},"#how-to-get-eth-for-rinkebytest-env"),"\u3092\u53c2\u8003\u306b Rinkeby \u306e ETH \u3092\u53d6\u5f97\u3059\u308b")),(0,r.kt)("h2",{id:"1installation"},"1.Installation"),(0,r.kt)("p",null,"The SDK is publicly available through npm."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"% npm i @kyuzan/mint-sdk-js\n")),(0,r.kt)("h2",{id:"2-initializing-the-sdk"},"2. Initializing the SDK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MintSDK } from '@kyuzan/mint-sdk-js'\nconst sdk = new MintSDK({\n  'YOUR_ACCESS_KEY',\n  [4],\n  {\n    fortmatic: {\n      key: 'YOUR_FORTMATIC_KEY',\n    },\n  }\n})\n")),(0,r.kt)("h2",{id:"3-acquiring-the-item-list"},"3. Acquiring the item list"),(0,r.kt)("img",{alt:"Item List",src:(0,l.Z)("/img/tutorial/items.png")}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const items = sdk.getItems();\n")),(0,r.kt)("h2",{id:"3-getting-each-item-information-and-past-transaction-data-individually"},"3. Getting each item information and past transaction data individually"),(0,r.kt)("img",{alt:"Item List",src:(0,l.Z)("/img/tutorial/item_detail.png")}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const item = sdk.getItemById("hoo");\n')),(0,r.kt)("h3",{id:"getting-past-transaction-history-data"},"Getting past transaction history data"),(0,r.kt)("img",{alt:"Item List",src:(0,l.Z)("/img/tutorial/history.png")}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const itemLogs = sdk.getItemLogs("hoo");\n')),(0,r.kt)("h2",{id:"4-bidding-on-an-item"},"4. Bidding on an Item"),(0,r.kt)("p",null,"To bit on an item, it is necessary for the User to connect their wallet."),(0,r.kt)("h3",{id:"wallet-connection"},"Wallet connection"),(0,r.kt)("img",{alt:"Item List",src:(0,l.Z)("/img/tutorial/connect_wallet.png")}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"await sdk.isWalletConnect(); // false\nawait sdk.connectWallet();\nawait sdk.isWalletConnect(); // true\n")),(0,r.kt)("h3",{id:"bidding"},"Bidding"),(0,r.kt)("img",{alt:"Item List",src:(0,l.Z)("/img/tutorial/bid_modal.png")}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'await sdk.sendTxBid("itemId", 2);\n')),(0,r.kt)("h2",{id:"5-ending-an-auction"},"5. Ending an auction"),(0,r.kt)("p",null,"For an auction, it is necessary to validate the winner of the auction."),(0,r.kt)("h3",{id:"getting-the-current-bidding-item"},"Getting the current bidding item"),(0,r.kt)("img",{alt:"Item List",src:(0,l.Z)("/img/tutorial/items_bidding.png")}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const items = await sdk.getItemsByBidderAddress("0x1111......");\n')),(0,r.kt)("h3",{id:"identifying-the-winner-of-the-auction"},"Identifying the winner of the auction"),(0,r.kt)("p",null,"We can verify if the current User is the winner by comparing the Users wallet with ",(0,r.kt)("inlineCode",{parentName:"p"},"Item.currentBidderAddress"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"await sdk.connectWallet(); // required\nconst { address } = await sdk.getWalletInfo();\n\naddress === item.currentBidderAddress; // if true, the current User is the winner\n")),(0,r.kt)("p",null,"To deliver the auction item to the winner, the below method can be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'await sdk.sendTxMakeSuccessfulBid("itemId", "jp");\n')),(0,r.kt)("p",null,"The second parameter must be the User's current country of residence, which is necessary for consumption tax procedures.\nAsking the users country of residence can be done through UI provided in the frontend."),(0,r.kt)("h3",{id:"recieving-item-using-mint"},"Recieving item using Mint"),(0,r.kt)("img",{alt:"Item List",src:(0,l.Z)("/img/tutorial/items_collection.png")}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const tokens = await sdk.getTokensByAddress("0x11111...");\n')))}m.isMDXComponent=!0}}]);