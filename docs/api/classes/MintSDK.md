---
id: "MintSDK"
title: "Class: MintSDK"
sidebar_label: "MintSDK"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new MintSDK**(`accessToken`, `walletSetting`, `devOption?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | `string` |
| `walletSetting` | [`WalletSetting`](../modules.md#walletsetting) |
| `devOption?` | `Object` |
| `devOption.backendUrl?` | `string` |
| `devOption.jsonRPCUrl?` | `string` |

#### Defined in

[mint-sdk-js/src/index.ts:113](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L113)

## Properties

### getWalletInfo

• **getWalletInfo**: () => `Promise`<[`WalletInfo`](../modules.md#walletinfo)\>

#### Type declaration

▸ (): `Promise`<[`WalletInfo`](../modules.md#walletinfo)\>

ウォレットのアカウントと残高情報などの情報が取得できる
Can get the transactional history and other account information.

**Required**
- ウォレットに接続していること
- Requires the wallet to be connected.

##### Returns

`Promise`<[`WalletInfo`](../modules.md#walletinfo)\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)
await sdk.connectWallet()  // required
await sdk.getWalletInfo()
```

#### Defined in

[mint-sdk-js/src/index.ts:211](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L211)

___

### walletStrategy

• `Private` **walletStrategy**: `WalletStrategy`

#### Defined in

[mint-sdk-js/src/index.ts:105](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L105)

## Methods

### addEthereumChain

▸ **addEthereumChain**(`networkId`): `Promise`<`void`\>

指定したネットワークをウォレットに追加する
137 => Polygon本番ネットワーク
80001 => Polygonテストネットワーク

Adds a specified network to the wallet.
137 => Polygon production network
80001 => Polygon development / test network

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

[mint-sdk-js/src/index.ts:1011](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L1011)

___

### connectWallet

▸ **connectWallet**(): `Promise`<`void`\>

ウォレットに接続
MetamaskがインストールされているブラウザではMetamaskが、されていない場合はFortmaticに接続を行う
ウォレットが接続されるとResolveされる
ウォレット接続をキャンセルした場合は、Rejectされる

Connects to a wallet.
If Metamask is installed in the default browser, it will utilize Metamask, otherwise will use Fortmatic.
If a wallet is connected, it will return Resolve, otherwise will return Reject.

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

[mint-sdk-js/src/index.ts:170](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L170)

___

### disconnectWallet

▸ **disconnectWallet**(): `Promise`<`void`\>

ウォレットから切断
Fortmaticの場合、切断される
**MetaMaskが接続されている場合は何も実行されない**

Disconnects the wallet.
When utilizing Fortmatic, it disconnects from the service.
When utilizing Metamask, **nothing will happen**.

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'

const sdk = await MintSDK.initialize(...)
await sdk.disconnectWallet()
```

#### Returns

`Promise`<`void`\>

#### Defined in

[mint-sdk-js/src/index.ts:190](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L190)

___

### getAccountInfo

▸ **getAccountInfo**(`arg`): `Promise`<``null`` \| { `avatarImageUrl`: `string` = response.data.data.avatarImageUrl; `profile`: [`WalletAddressProfile`](../interfaces/WalletAddressProfile.md) = response.data.data.profile }\>

Returns the account information pertaining to the wallet such as display name or profile picture.
If there is nothing set, will return a blank string.

#### Parameters:
| Name                | Type     |
| :------------------ | :------- |
| `arg`               | _object_ |
| `arg.walletAddress` | _string_ |

Returns {@link AccountInfo}

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'

const sdk = MintSDK.initialize(...)
await sdk.connectWallet()
const accountInfo = await sdk.getAccountInfo({ walletAddress: '0xxxxxxxx' })
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Object` |
| `arg.walletAddress` | `string` |

#### Returns

`Promise`<``null`` \| { `avatarImageUrl`: `string` = response.data.data.avatarImageUrl; `profile`: [`WalletAddressProfile`](../interfaces/WalletAddressProfile.md) = response.data.data.profile }\>

#### Defined in

[mint-sdk-js/src/index.ts:1146](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L1146)

___

### getBoughtItemStocksByWalletAddress

▸ **getBoughtItemStocksByWalletAddress**(`arg`): `Promise`<[`ItemStock`](../modules.md#itemstock)[]\>

指定したwalletAddressで購入または落札したItemStockを取得する
Returns the ItemStock that was sold to a certain wallet address

#### 制限事項  / Restrictions

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

`Promise`<[`ItemStock`](../modules.md#itemstock)[]\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)

const items = await sdk.getBoughtItemStocksByWalletAddress(...)
```

#### Defined in

[mint-sdk-js/src/index.ts:343](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L343)

___

### getConnectedNetworkId

▸ **getConnectedNetworkId**(): `Promise`<`number`\>

接続中のネットワークIDを返す
Returns the connected network id.

#### Returns

`Promise`<`number`\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'

const sdk = MintSDK.initialize(...)
await sdk.connectWallet()
await sdk.getConnectedNetworkId()
```

#### Defined in

[mint-sdk-js/src/index.ts:856](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L856)

___

### getContractERC721ById

▸ **getContractERC721ById**(`arg`): `Promise`<`ContractERC721`\>

ContractERC721を取得する
Get the ContractERC721

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

[mint-sdk-js/src/index.ts:485](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L485)

___

### getItemById

▸ **getItemById**(`itemId`): `Promise`<[`Item`](../modules.md#item)\>

商品をid指定でアイテムを取得
Returns the Item from the specified itemId.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `itemId` | `string` | {@link ResponseItem}の`id` |

#### Returns

`Promise`<[`Item`](../modules.md#item)\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)
const item = await sdk.getItemById('item.id')
```

#### Defined in

[mint-sdk-js/src/index.ts:416](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L416)

___

### getItemStockById

▸ **getItemStockById**(`arg`): `Promise`<[`ItemStock`](../modules.md#itemstock)\>

ItemStockを取得する
Returns the ItemStock

#### 制限事項 / Restrictions
- Itemが公開されていない場合は400
- If the Item is not public, it returns as 400

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Object` |
| `arg.itemStockId` | `string` |

#### Returns

`Promise`<[`ItemStock`](../modules.md#itemstock)\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)

const items = await sdk.getItemStockById(...)
```

#### Defined in

[mint-sdk-js/src/index.ts:320](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L320)

___

### getItemStocksByBidderAddress

▸ **getItemStocksByBidderAddress**(`arg`): `Promise`<[`ItemStock`](../modules.md#itemstock)[]\>

指定したアドレスがBidしたItemの一覧を取得
Returns all the bidded items ( as ItemStock ) that a certain address has done

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

`Promise`<[`ItemStock`](../modules.md#itemstock)[]\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)
const item = await sdk.getItemsByBidderAddress('0x1111......')
```

#### Defined in

[mint-sdk-js/src/index.ts:376](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L376)

___

### getItems

▸ **getItems**(`__namedParameters`): `Promise`<[`Item`](../modules.md#item)[]\>

公開中の商品を取得
ステータスの変更は管理画面から行えます。
Returns the Items with the flag `Items.openStatus === 'open'`
The status of the items can be changed from the admin panel

#### 制限事項 / Restrictions

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

`Promise`<[`Item`](../modules.md#item)[]\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)

const items = await sdk.getItems(...)
```

#### Defined in

[mint-sdk-js/src/index.ts:265](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L265)

___

### getProductERC721ById

▸ **getProductERC721ById**(`id`): `Promise`<`ProductERC721`\>

id指定で製品を取得
Returns the ProductERC721 by the ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`ProductERC721`\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...)
const item = await sdk.getProductERC721ById('id')
```

#### Defined in

[mint-sdk-js/src/index.ts:437](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L437)

___

### getTokensByAddress

▸ **getTokensByAddress**(`arg`): `Promise`<[`TokenERC721`](../interfaces/TokenERC721.md)[]\>

指定したアドレスが所持しているMINT経由で獲得したトークンを取得
Returns the Tokens (NFT) that a certain address is holding through MINT

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Object` |
| `arg.page` | `number` |
| `arg.perPage` | `number` |
| `arg.walletAddress` | `string` |

#### Returns

`Promise`<[`TokenERC721`](../interfaces/TokenERC721.md)[]\>

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'
const sdk = await MintSDK.initialize(...
const tokens = await sdk.getTokensByAddress('0x11111...')
```

#### Defined in

[mint-sdk-js/src/index.ts:458](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L458)

___

### isInjectedWallet

▸ **isInjectedWallet**(): `boolean`

MetaMaskかどうかを判定
Validates if utilizing MetaMask.

#### Returns

`boolean`

trueならばMetaMask / Returns true if utilizing MetaMask.

```typescript
import { MintSDK } from '@kyuzan/mint-sdk-js'

const sdk = MintSDK.initialize(...)
await sdk.isInjectedWallet() // true
```

#### Defined in

[mint-sdk-js/src/index.ts:838](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L838)

___

### isWalletConnect

▸ **isWalletConnect**(): `Promise`<`boolean`\>

有効なアカウントがあるの状態を返す
Returns if an account is valid.

#### Returns

`Promise`<`boolean`\>

ウォレットが接続されていればtrue

#### Defined in

[mint-sdk-js/src/index.ts:148](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L148)

___

### onAccountsChange

▸ **onAccountsChange**(`callback`): `void`

アカウントが変更された際に呼び出される関数を設定できる
Set a callback when the account has been changed.

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

[mint-sdk-js/src/index.ts:744](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L744)

___

### onConnect

▸ **onConnect**(`callback`): `void`

ウォレットに接続した際に呼び出される関数を設定できる
Set a callback when the wallet is connected.

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

[mint-sdk-js/src/index.ts:770](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L770)

___

### onDisconnect

▸ **onDisconnect**(`callback`): `void`

ウォレットから切断した際に呼び出される関数を設定できる
Set a callback when the wallet is disconnected.

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

[mint-sdk-js/src/index.ts:796](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L796)

___

### sendTxBid

▸ **sendTxBid**(`itemId`, `bidPrice`): `Promise`<`undefined` \| `TransactionResponse`\>

指定した金額でBidするトランザクションを発行
Bidする謹賀具の総額を`bidPrice`に指定する
Creates a transaction from the specified bid price.
The total amount of the bid is passed through the `bidPrice` argument.

**Required**
- ウォレットに接続していること
- Requires the wallet to be connected

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `itemId` | `string` | [Item](../modules.md#item)のitemId |
| `bidPrice` | `number` | 単位はether / Unit is in ether |

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

[mint-sdk-js/src/index.ts:521](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L521)

___

### sendTxBuyItem

▸ **sendTxBuyItem**(`itemId`, `residence?`): `Promise`<`TransactionResponse`\>

FixedPriceのアイテムを購入するトランザクションを発行
ユーザーの居住地を問うUIを合わせて実装必要
消費税に関する会計処理などがスムーズに行えます
Creates a transaction for buying an Item at a fixed price.
Requires a UI that asks for the users residence for accommodating for consumption tax purposes.

**Required**
- ウォレットに接続していること
- Requires a wallet to be connected.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `itemId` | `string` | `undefined` | [Item](../modules.md#item)のitemId |
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

[mint-sdk-js/src/index.ts:676](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L676)

___

### sendTxMakeSuccessfulBid

▸ **sendTxMakeSuccessfulBid**(`itemId`, `residence?`): `Promise`<`undefined` \| `TransactionResponse`\>

オークションで勝利したアイテムを引き出すトランザクションを発行
ユーザーの居住地を問うUIを合わせて実装必要です。居住地を設定することで消費税に関する会計処理などがスムーズに行えます
Transaction to get the winnning item after a successful auction
Requires a UI that asks for the users residence for accommodating for consumption tax purposes.

**Required**
- ウォレットに接続していること
- Requires a wallet to be connected.
- **自動延長オークションは、`withdrawableAt`以降に引き出し可能です**
- **If automatic extension for the auction is enabled, withdrawing is only avaliable after `withdrawableAt`.**

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `itemId` | `string` | `undefined` | [Item](../modules.md#item)のitemId |
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

[mint-sdk-js/src/index.ts:605](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L605)

___

### signTypedData

▸ **signTypedData**(`arg`): `Promise`<{ `data`: `string` = signData; `sig`: `string` = signature }\>

EIP-712仕様で与えられたデータを署名します。
Sign the data, formatted as EIP-712

**Required**
- ウォレットに接続していること
- Requires a wallet to be connected.

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

[mint-sdk-js/src/index.ts:916](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L916)

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

[mint-sdk-js/src/index.ts:1075](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L1075)

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

[mint-sdk-js/src/index.ts:1108](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L1108)

___

### waitForTransaction

▸ **waitForTransaction**(`txHash`): `Promise`<`void`\>

Transactionが成功するとResolveするPromiseを返します
When the transaction is successful, it returns a Resolve.

**Required**
- Requires a wallet to be connected.
- ウォレットに接続していること

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txHash` | `string` | {@link ethers.providers.TransactionResponse}のhashプロパティ The hash property of @param txHash {@link ethers.providers.TransactionResponse}  ```typescript import { MintSDK } from '@kyuzan/mint-sdk-js' const sdk = await MintSDK.initialize(...) await sdk.connectWallet() // required try {  const tx = await sdk.sendTxBuyItem('item.itemId')  await tx.wait()  // success transaction } catch (err) {  // display error message } ``` |

#### Returns

`Promise`<`void`\>

#### Defined in

[mint-sdk-js/src/index.ts:239](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L239)

___

### formatEther

▸ `Static` **formatEther**(`bg`): `string`

BigNumberをether(通常のETHと表示される価格)にフォーマットして返す
Returns an BigNumber that is formatted as an ether.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bg` | `BigNumber` |

#### Returns

`string`

Ether単位でパースされたstring

#### Defined in

[mint-sdk-js/src/index.ts:96](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L96)

___

### parseEther

▸ `Static` **parseEther**(`ether`): `BigNumber`

ether(通常のETHと表示される価格)をBigNumberとして返す
Returns the ether price as a BigNumber.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ether` | `string` | 通常のETHと表示されるもの |

#### Returns

`BigNumber`

etherをBigNumberとしてparseしたもの

#### Defined in

[mint-sdk-js/src/index.ts:75](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L75)

___

### recoverySignData

▸ `Static` **recoverySignData**(`arg`): `string`

署名されたデータを復号してウォレットアドレスを返します。
返される文字列は小文字で返ってきます。
Decrypts the signed data and returns the wallet address.
The string returned will be in lowercase.

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

[mint-sdk-js/src/index.ts:967](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/index.ts#L967)
