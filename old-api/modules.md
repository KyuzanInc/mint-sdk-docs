---
id: "modules"
title: "@kyuzan/mint-sdk-js"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [MintSDK](classes/MintSDK)
- [WrongNetworkError](classes/WrongNetworkError)

## Interfaces

- [Bid](interfaces/Bid)
- [TokenERC721](interfaces/TokenERC721)
- [WalletAddressProfile](interfaces/WalletAddressProfile)

## Type aliases

### BigNumber

Ƭ **BigNumber**: `ethers.BigNumber`

#### Defined in

[mint-sdk-js/src/types/BigNumber.ts:3](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/types/BigNumber.ts#L3)

___

### CurrencyUnit

Ƭ **CurrencyUnit**: typeof `currencys`[`number`]

#### Defined in

[mint-sdk-js/src/types/CurrencyUnit.ts:3](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/types/CurrencyUnit.ts#L3)

___

### Item

Ƭ **Item**: `Omit`<`APIItem`, ``"paymentMethodData"`` \| ``"type"`` \| ``"cryptoCurrency"``\> & { `cryptoCurrency`: `CryptoCurrencyRate` ; `paymentMethodData`: [`PaymentMethodData`](modules#paymentmethoddata) ; `type`: [`ItemType`](modules#itemtype)  }

#### Defined in

[mint-sdk-js/src/types/v2/Item.ts:6](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/types/v2/Item.ts#L6)

___

### ItemLog

Ƭ **ItemLog**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountAddress` | `string` |
| `createAt` | `Date` |
| `price` | `number` |
| `transactionHash` | `string` |
| `type` | ``"bought"`` \| ``"bid"`` |

#### Defined in

[mint-sdk-js/src/types/ItemLog.ts:1](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/types/ItemLog.ts#L1)

___

### ItemStock

Ƭ **ItemStock**: `Omit`<`APIItemStock`, ``"status"`` \| ``"item"``\> & { `item`: [`Item`](modules#item) ; `status`: `ItemStockStatus`  }

#### Defined in

[mint-sdk-js/src/types/v2/ItemStock.ts:5](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/types/v2/ItemStock.ts#L5)

___

### ItemTradeType

Ƭ **ItemTradeType**: typeof `itemsTradeTypes`[`number`]

#### Defined in

[mint-sdk-js/src/types/ItemTradeType.ts:2](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/types/ItemTradeType.ts#L2)

___

### ItemType

Ƭ **ItemType**: \`${ItemTypeEnum}\`

#### Defined in

[mint-sdk-js/src/types/v2/ItemType.ts:3](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/types/v2/ItemType.ts#L3)

___

### ItemsType

Ƭ **ItemsType**: typeof `itemsTypes`[`number`]

#### Defined in

[mint-sdk-js/src/types/ItemsType.ts:5](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/types/ItemsType.ts#L5)

___

### NetworkId

Ƭ **NetworkId**: ``1`` \| ``4`` \| ``80001`` \| ``137`` \| ``31337``

#### Defined in

[mint-sdk-js/src/types/NetworkId.ts:1](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/types/NetworkId.ts#L1)

___

### PaymentMethod

Ƭ **PaymentMethod**: [`PaymentMethodData`](modules#paymentmethoddata)[``"paymentMethod"``]

#### Defined in

[mint-sdk-js/src/types/v2/PaymentMethods.ts:3](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/types/v2/PaymentMethods.ts#L3)

___

### PaymentMethodData

Ƭ **PaymentMethodData**: { `contractDataERC721Shop`: `ContractDataERC721Shop` ; `paymentMethod`: ``"ethereum-contract-erc721-shop-fixed-price"``  } & `Omit`<`ItemPaymentMethodDataEthereumContractERC721ShopFixedPrice`, ``"paymentMethod"``\> \| { `paymentMethod`: ``"ethereum-contract-erc721-shop-auction"``  } & `Omit`<`ItemPaymentMethodDataEthereumContractERC721ShopAuction`, ``"paymentMethod"``\> \| { `paymentMethod`: ``"credit-card-stripe-fixed-price"``  } & `Omit`<`ItemPaymentMethodDataCreditCardStripeFixedPrice`, ``"paymentMethod"``\>

#### Defined in

[mint-sdk-js/src/types/v2/PaymentMethodData.ts:8](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/types/v2/PaymentMethodData.ts#L8)

___

### Residence

Ƭ **Residence**: typeof `residenceList`[`number`]

#### Defined in

[mint-sdk-js/src/types/Residence.ts:2](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/types/Residence.ts#L2)

___

### Token

Ƭ **Token**: `Object`

TokenはERC721を表現している
Item:Token = 1:1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `authorAddress` | `string` | https://ipfs.io/ipfs/xxxx |
| `contractAddress` | `string` | - |
| `description` | `string` | - |
| `imageURI` | `string` | ipfs:// |
| `imageURIHTTP` | `Object` | imageURIのブラウザ閲覧用 https://xxxx |
| `imageURIHTTP.mimeType` | `string` | - |
| `imageURIHTTP.url` | `string` | - |
| `item` | `Item` | Tokenの元になったItemが入る |
| `name` | `string` | - |
| `previews` | { `mimeType`: `string` ; `url`: `string`  }[] | プレビューのURI 動画・画像が入る プレビューが設定されていない場合は空配列になる |
| `tokenId` | `number` | - |
| `tokenURI` | `string` | ipfs://xxxx |
| `tokenURIHTTP` | `string` | tokenURIのブラウザ閲覧用 https://xxxx |

#### Defined in

[mint-sdk-js/src/types/Token.ts:6](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/types/Token.ts#L6)

___

### WalletInfo

Ƭ **WalletInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `balance` | [`BigNumber`](modules#bignumber) |
| `unit` | [`CurrencyUnit`](modules#currencyunit) |

#### Defined in

[mint-sdk-js/src/types/WalletInfo.ts:4](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/types/WalletInfo.ts#L4)

___

### WalletSetting

Ƭ **WalletSetting**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fortmatic` | `Object` |
| `fortmatic.key` | `string` |

#### Defined in

[mint-sdk-js/src/types/WalletSetting.ts:1](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/types/WalletSetting.ts#L1)
