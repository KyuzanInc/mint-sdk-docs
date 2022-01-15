---
id: "index.MintSDK"
title: "Class: MintSDK"
sidebar_label: "index.MintSDK"
custom_edit_url: null
---

[index](../modules/).MintSDK

## Constructors

### constructor

• **new MintSDK**(`accessToken`, `walletSetting`, `devOption?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | `string` |
| `walletSetting` | [`WalletSetting`](../modules/#walletsetting) |
| `devOption?` | `Object` |
| `devOption.backendUrl?` | `string` |
| `devOption.jsonRPCUrl?` | `string` |

#### Defined in

[mint-sdk-js/src/index.ts:110](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L110)

## Properties

### getWalletInfo

• **getWalletInfo**: () => `Promise`<[`WalletInfo`](../modules/#walletinfo)\>

#### Type declaration

▸ (): `Promise`<[`WalletInfo`](../modules/#walletinfo)\>

ウォレットのアカウントと残高情報などの情報が取得できる

**Required**
- ウォレットに接続していること

##### Returns

`Promise`<[`WalletInfo`](../modules/#walletinfo)\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)
await sdk.connectWallet()  // required
await sdk.getWalletInfo()
```

#### Defined in

[mint-sdk-js/src/index.ts:196](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L196)

___

### walletStrategy

• `Private` **walletStrategy**: [`WalletStrategy`](../interfaces/strategies.WalletStrategy)

#### Defined in

[mint-sdk-js/src/index.ts:102](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L102)

## Methods

### addEthereumChain

▸ **addEthereumChain**(`networkId`): `Promise`<`void`\>

指定したネットワークをウォレットに追加する
137 => Polygon本番ネットワーク
80001 => Polygonテストネットワーク

**Required**
sdk.isInjectedWallet() => trueの場合のみ（MetaMaskのみ使える）

#### Parameters

| Name | Type |
| :------ | :------ |
| `networkId` | ``137`` \| ``80001`` |

#### Returns

`Promise`<`void`\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'

const sdk = MintSDK.initialize(...)
await sdk.connectWallet()
await sdk.addEthereumChain(137)
```

#### Defined in

[mint-sdk-js/src/index.ts:955](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L955)

___

### connectWallet

▸ **connectWallet**(): `Promise`<`void`\>

ウォレットに接続
MetamaskがインストールされているブラウザではMetamaskが、されていない場合はFortmaticに接続を行う
ウォレットが接続されるとResolveされる
ウォレット接続をキャンセルした場合は、Rejectされる

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)
await sdk.isWalletConnect() // false
await sdk.connectWallet()
await sdk.isWalletConnect()  // true
```

#### Returns

`Promise`<`void`\>

#### Defined in

[mint-sdk-js/src/index.ts:161](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L161)

___

### disconnectWallet

▸ **disconnectWallet**(): `Promise`<`void`\>

ウォレットから切断
Fortmaticの場合、切断される
**MetaMaskが接続されている場合は何も実行されない**

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'

const sdk = await MintSDK.initialize(...)
await sdk.disconnectWallet()
```

#### Returns

`Promise`<`void`\>

#### Defined in

[mint-sdk-js/src/index.ts:177](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L177)

___

### getAccountInfo

▸ **getAccountInfo**(`arg`): `Promise`<``null`` \| { `avatarImageUrl`: `string` = response.data.data.avatarImageUrl; `profile`: [`WalletAddressProfile`](../interfaces/.WalletAddressProfile) = response.data.data.profile }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Object` |
| `arg.walletAddress` | `string` |

#### Returns

`Promise`<``null`` \| { `avatarImageUrl`: `string` = response.data.data.avatarImageUrl; `profile`: [`WalletAddressProfile`](../interfaces/.WalletAddressProfile) = response.data.data.profile }\>

#### Defined in

[mint-sdk-js/src/index.ts:1071](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L1071)

___

### getBoughtItemStocksByWalletAddress

▸ **getBoughtItemStocksByWalletAddress**(`arg`): `Promise`<[`ItemStock`](../modules/#itemstock)[]\>

指定したwalletAddressで購入または落札したItemStockを取得する

#### 制限事項

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Object` |
| `arg.page` | `number` |
| `arg.perPage` | `number` |
| `arg.sort?` | `Object` |
| `arg.sort.sortBy` | ``"price"`` \| ``"createAt"`` |
| `arg.sort.sortDirection` | ``"asc"`` \| ``"desc"`` |
| `arg.walletAddress` | `string` |

#### Returns

`Promise`<[`ItemStock`](../modules/#itemstock)[]\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)

const items = await sdk.getBoughtItemStocksByWalletAddress(...)
```

#### Defined in

[mint-sdk-js/src/index.ts:320](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L320)

___

### getConnectedNetworkId

▸ **getConnectedNetworkId**(): `Promise`<`number`\>

接続中のネットワークIDを返す

#### Returns

`Promise`<`number`\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'

const sdk = MintSDK.initialize(...)
await sdk.connectWallet()
await sdk.getConnectedNetworkId()
```

#### Defined in

[mint-sdk-js/src/index.ts:813](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L813)

___

### getContractERC721ById

▸ **getContractERC721ById**(`arg`): `Promise`<`ContractERC721`\>

ContractERC721を取得する

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Object` |
| `arg.contractId` | `string` |

#### Returns

`Promise`<`ContractERC721`\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)

const items = await sdk.getContractERC721ById(...)
```

#### Defined in

[mint-sdk-js/src/index.ts:457](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L457)

___

### getItemById

▸ **getItemById**(`itemId`): `Promise`<[`Item`](../modules/#item)\>

商品をid指定でアイテムを取得

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `itemId` | `string` | {@link ResponseItem}の`id` |

#### Returns

`Promise`<[`Item`](../modules/#item)\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)
const item = await sdk.getItemById('item.id')
```

#### Defined in

[mint-sdk-js/src/index.ts:391](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L391)

___

### getItemStockById

▸ **getItemStockById**(`arg`): `Promise`<[`ItemStock`](../modules/#itemstock)\>

ItemStockを取得する

#### 制限事項
- Itemが公開されていない場合は400

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Object` |
| `arg.itemStockId` | `string` |

#### Returns

`Promise`<[`ItemStock`](../modules/#itemstock)\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)

const items = await sdk.getItemStockById(...)
```

#### Defined in

[mint-sdk-js/src/index.ts:298](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L298)

___

### getItemStocksByBidderAddress

▸ **getItemStocksByBidderAddress**(`arg`): `Promise`<[`ItemStock`](../modules/#itemstock)[]\>

指定したアドレスがBidしたItemの一覧を取得

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Object` |
| `arg.onlyBeforeEnd?` | `boolean` |
| `arg.page` | `number` |
| `arg.perPage` | `number` |
| `arg.sort?` | `Object` |
| `arg.sort.sortBy` | ``"price"`` \| ``"endAt"`` |
| `arg.sort.sortDirection` | ``"asc"`` \| ``"desc"`` |
| `arg.walletAddress` | `string` |

#### Returns

`Promise`<[`ItemStock`](../modules/#itemstock)[]\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)
const item = await sdk.getItemsByBidderAddress('0x1111......')
```

#### Defined in

[mint-sdk-js/src/index.ts:352](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L352)

___

### getItems

▸ **getItems**(`__namedParameters`): `Promise`<[`Item`](../modules/#item)[]\>

公開中の商品を取得
ステータスの変更は管理画面から行えます。

#### 制限事項

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.onlyAvailableStock?` | `boolean` |
| `__namedParameters.page` | `number` |
| `__namedParameters.paymentMethod?` | ``"ethereum-contract-erc721-shop-fixed-price"`` \| ``"ethereum-contract-erc721-shop-auction"`` \| ``"credit-card-stripe-fixed-price"`` |
| `__namedParameters.perPage` | `number` |
| `__namedParameters.saleStatus?` | ``"beforeStart"`` \| ``"beforeEnd"`` \| ``"afterEnd"`` |
| `__namedParameters.sort?` | `Object` |
| `__namedParameters.sort.sortBy` | ``"price"`` |
| `__namedParameters.sort.sortDirection` | ``"asc"`` \| ``"desc"`` |
| `__namedParameters.tags?` | `string` |

#### Returns

`Promise`<[`Item`](../modules/#item)[]\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)

const items = await sdk.getItems(...)
```

#### Defined in

[mint-sdk-js/src/index.ts:245](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L245)

___

### getProductERC721ById

▸ **getProductERC721ById**(`id`): `Promise`<[`ProductERC721`](../interfaces/apiClientV2.ProductERC721)\>

id指定で製品を取得

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`ProductERC721`](../interfaces/apiClientV2.ProductERC721)\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)
const item = await sdk.getProductERC721ById('id')
```

#### Defined in

[mint-sdk-js/src/index.ts:411](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L411)

___

### getTokensByAddress

▸ **getTokensByAddress**(`arg`): `Promise`<[`TokenERC721`](../interfaces/.TokenERC721)[]\>

指定したアドレスが所持しているMINT経由で獲得したトークンを取得

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Object` |
| `arg.page` | `number` |
| `arg.perPage` | `number` |
| `arg.walletAddress` | `string` |

#### Returns

`Promise`<[`TokenERC721`](../interfaces/.TokenERC721)[]\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...
const tokens = await sdk.getTokensByAddress('0x11111...')
```

#### Defined in

[mint-sdk-js/src/index.ts:431](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L431)

___

### isInjectedWallet

▸ **isInjectedWallet**(): `boolean`

MetaMaskかどうかを判定

#### Returns

`boolean`

trueならばMetaMask

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'

const sdk = MintSDK.initialize(...)
await sdk.isInjectedWallet() // true
```

#### Defined in

[mint-sdk-js/src/index.ts:796](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L796)

___

### isWalletConnect

▸ **isWalletConnect**(): `Promise`<`boolean`\>

有効なアカウントがあるの状態を返す

#### Returns

`Promise`<`boolean`\>

ウォレットが接続されていればtrue

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'

const sdk = await MintSDK.initialize(...)
await sdk.isWalletConnect()
```

#### Defined in

[mint-sdk-js/src/index.ts:143](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L143)

___

### onAccountsChange

▸ **onAccountsChange**(`callback`): `void`

アカウントが変更された際に呼び出される関数を設定できる

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`accounts`: `string`[]) => `any` |

#### Returns

`void`

void

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)
sdk.onAccountsChange((accounts: string[]) => {
   // some thing
})
```

#### Defined in

[mint-sdk-js/src/index.ts:705](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L705)

___

### onConnect

▸ **onConnect**(`callback`): `void`

ウォレットに接続した際に呼び出される関数を設定できる

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `any` |

#### Returns

`void`

void

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)
sdk.onConnect(() => {
   // some thing
})
```

#### Defined in

[mint-sdk-js/src/index.ts:730](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L730)

___

### onDisconnect

▸ **onDisconnect**(`callback`): `void`

ウォレットから切断した際に呼び出される関数を設定できる

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `any` |

#### Returns

`void`

void

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)
sdk.onDisconnect(() => {
   // some thing
})
```

#### Defined in

[mint-sdk-js/src/index.ts:755](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L755)

___

### sendTxBid

▸ **sendTxBid**(`itemId`, `bidPrice`): `Promise`<`undefined` \| `TransactionResponse`\>

指定した金額でBidするトランザクションを発行
Bidする謹賀具の総額を`bidPrice`に指定する

**Required**
- ウォレットに接続していること

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `itemId` | `string` | [Item](../modules/#item)のitemId |
| `bidPrice` | `number` | 単位はether |

#### Returns

`Promise`<`undefined` \| `TransactionResponse`\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)
await sdk.connectWallet() // required
try {
 const tx = await sdk.sendTxBid('item.itemId', 2)
 // show loading
 await tx.wait()
 // success transaction
} catch (err) {
 // display error message
}
```

#### Defined in

[mint-sdk-js/src/index.ts:490](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L490)

___

### sendTxBuyItem

▸ **sendTxBuyItem**(`itemId`, `residence?`): `Promise`<`TransactionResponse`\>

FixedPriceのアイテムを購入するトランザクションを発行
ユーザーの居住地を問うUIを合わせて実装必要
消費税に関する会計処理などがスムーズに行えます

**Required**
- ウォレットに接続していること

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `itemId` | `string` | `undefined` | [Item](../modules/#item)のitemId |
| `residence` | ``"jp"`` \| ``"unknown"`` | `'unknown'` | - |

#### Returns

`Promise`<`TransactionResponse`\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)
await sdk.connectWallet() // required
try {
 const tx = await sdk.sendTxBuyItem('item.itemId', 'jp')
 // show loading
 await tx.wait()
 // success transaction
} catch (err) {
 // display error message
}
```

#### Defined in

[mint-sdk-js/src/index.ts:638](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L638)

___

### sendTxMakeSuccessfulBid

▸ **sendTxMakeSuccessfulBid**(`itemId`, `residence?`): `Promise`<`undefined` \| `TransactionResponse`\>

オークションで勝利したアイテムを引き出すトランザクションを発行
ユーザーの居住地を問うUIを合わせて実装必要です。居住地を設定することで消費税に関する会計処理などがスムーズに行えます

**Required**
- ウォレットに接続していること
- **自動延長オークションは、`withdrawableAt`以降に引き出し可能です**

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `itemId` | `string` | `undefined` | [Item](../modules/#item)のitemId |
| `residence` | ``"jp"`` \| ``"unknown"`` | `'unknown'` | - |

#### Returns

`Promise`<`undefined` \| `TransactionResponse`\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)
await sdk.connectWallet() // required
try {
 const tx = await sdk.sendTxMakeSuccessfulBid('item.itemId', 'jp')
 // show loading
 await tx.wait()
 // success transaction
} catch (err) {
 // display error message
}
```

#### Defined in

[mint-sdk-js/src/index.ts:570](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L570)

___

### signTypedData

▸ **signTypedData**(`arg`): `Promise`<{ `data`: `string` = signData; `sig`: `string` = signature }\>

EIP-712仕様で与えられたデータを署名します。

**Required**
- ウォレットに接続していること

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Object` |
| `arg.domain` | `TypedDataDomain` |
| `arg.types` | `Record`<`string`, `TypedDataField`[]\> |
| `arg.value` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<{ `data`: `string` = signData; `sig`: `string` = signature }\>

``` typesctipt
import { MintSDK } from '@kyuzan/mint-sdk-js'

const sdk = MintSDK.initialize(...)
const arg = {
 domain: {name: "Member"},
 types: {Person: [ { name: 'name', type: 'string'}]},
 value: { Man: { name: 'Tom'}}
}
const { data, sig } = await sdk.signTypedData(arg)
```

#### Defined in

[mint-sdk-js/src/index.ts:871](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L871)

___

### updateAccountInfo

▸ **updateAccountInfo**(`arg`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Object` |
| `arg.avatarImageId` | `string` |
| `arg.bio` | `string` |
| `arg.displayName` | `string` |
| `arg.homepageUrl` | `string` |
| `arg.instagramAccountName` | `string` |
| `arg.twitterAccountName` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[mint-sdk-js/src/index.ts:1019](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L1019)

___

### uploadAccountInfoAvatar

▸ **uploadAccountInfoAvatar**(`arg`): `Promise`<`undefined` \| { `imgId`: `string` = response.data.data.imageId; `uploadedImgUrl`: `string` = response.data.data.readSignedUrl }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Object` |
| `arg.file` | `File` |

#### Returns

`Promise`<`undefined` \| { `imgId`: `string` = response.data.data.imageId; `uploadedImgUrl`: `string` = response.data.data.readSignedUrl }\>

#### Defined in

[mint-sdk-js/src/index.ts:1052](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L1052)

___

### waitForTransaction

▸ **waitForTransaction**(`txHash`): `Promise`<`void`\>

Transactionが成功するとResolveするPromiseを返します

**Required**
- ウォレットに接続していること

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txHash` | `string` | {@link ethers.providers.TransactionResponse}のhashプロパティ  ```typescript import { MintSDK } from '@kyuzan/mint-sdk-js' const sdk = await MintSDK.initialize(...) await sdk.connectWallet() // required try {  const tx = await sdk.sendTxBuyItem('item.itemId')  await tx.wait()  // success transaction } catch (err) {  // display error message } ``` |

#### Returns

`Promise`<`void`\>

#### Defined in

[mint-sdk-js/src/index.ts:221](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L221)

___

### formatEther

▸ `Static` **formatEther**(`bg`): `string`

BigNumberをether(通常のETHと表示される価格)にフォーマットして返す

#### Parameters

| Name | Type |
| :------ | :------ |
| `bg` | `BigNumber` |

#### Returns

`string`

Ether単位でパースされたstring

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'

const sdk = await MintSDK.initialize(...)
await sdk.connectWallet()  // required
const walletInfo = await sdk.getWalletInfo()
MintSDK.formatEther(walletInfo.balance) // 3.2
```

#### Defined in

[mint-sdk-js/src/index.ts:93](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L93)

___

### parseEther

▸ `Static` **parseEther**(`ether`): `BigNumber`

ether(通常のETHと表示される価格)をBigNumberとして返す

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ether` | `string` | 通常のETHと表示されるもの |

#### Returns

`BigNumber`

etherをBigNumberとしてparseしたもの

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'

MintSDK.parseEther('3.2') // BigNumber
```

#### Defined in

[mint-sdk-js/src/index.ts:74](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L74)

___

### recoverySignData

▸ `Static` **recoverySignData**(`arg`): `string`

署名されたデータを復号してウォレットアドレスを返します。
返される文字列は小文字で返ってきます。

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Object` |
| `arg.data` | `string` |
| `arg.sig` | `string` |

#### Returns

`string`

``` typesctipt
import { MintSDK } from '@kyuzan/mint-sdk-js'

const sdk = MintSDK.initialize(...)
const { address } = await this.getWalletInfo()
const { data, sig } = await sdk.signTypedData(arg)
const recoverdAddress = MintSDK.recoverdSignData({data, sig})

if(address.toLowerCase() === recoverdAddress){
 console.log("success")
}
```

#### Defined in

[mint-sdk-js/src/index.ts:918](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/index.ts#L918)
