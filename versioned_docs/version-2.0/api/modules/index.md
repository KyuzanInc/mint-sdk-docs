---
id: "index"
title: "Module: index"
sidebar_label: "index"
sidebar_position: 0
custom_edit_url: null
---

## Classes

- [MintSDK](../classes/.MintSDK)
- [WrongNetworkError](../classes/.WrongNetworkError)

## Interfaces

- [Bid](../interfaces/.Bid)
- [TokenERC721](../interfaces/.TokenERC721)
- [WalletAddressProfile](../interfaces/.WalletAddressProfile)

## Type aliases

### BigNumber

Ƭ **BigNumber**: `ethers.BigNumber`

#### Defined in

[mint-sdk-js/src/types/BigNumber.ts:3](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/types/BigNumber.ts#L3)

___

### CurrencyUnit

Ƭ **CurrencyUnit**: typeof `currencys`[`number`]

#### Defined in

[mint-sdk-js/src/types/CurrencyUnit.ts:3](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/types/CurrencyUnit.ts#L3)

___

### Item

Ƭ **Item**: `Omit`<[`Item`](../interfaces/apiClientV2.Item), ``"paymentMethodData"`` \| ``"type"`` \| ``"cryptoCurrency"``\> & { `cryptoCurrency`: `CryptoCurrencyRate` ; `paymentMethodData`: [`PaymentMethodData`](#paymentmethoddata) ; `type`: [`ItemType`](#itemtype)  }

#### Defined in

[mint-sdk-js/src/types/v2/Item.ts:6](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/types/v2/Item.ts#L6)

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

[mint-sdk-js/src/types/ItemLog.ts:1](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/types/ItemLog.ts#L1)

___

### ItemStock

Ƭ **ItemStock**: `Omit`<[`ItemStock`](../interfaces/apiClientV2.ItemStock), ``"status"`` \| ``"item"``\> & { `item`: [`Item`](#item) ; `status`: `ItemStockStatus`  }

#### Defined in

[mint-sdk-js/src/types/v2/ItemStock.ts:5](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/types/v2/ItemStock.ts#L5)

___

### ItemTradeType

Ƭ **ItemTradeType**: typeof `itemsTradeTypes`[`number`]

#### Defined in

[mint-sdk-js/src/types/ItemTradeType.ts:2](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/types/ItemTradeType.ts#L2)

___

### ItemType

Ƭ **ItemType**: \`${ItemType}\`

#### Defined in

[mint-sdk-js/src/types/v2/ItemType.ts:3](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/types/v2/ItemType.ts#L3)

___

### ItemsType

Ƭ **ItemsType**: typeof `itemsTypes`[`number`]

#### Defined in

[mint-sdk-js/src/types/ItemsType.ts:13](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/types/ItemsType.ts#L13)

___

### NetworkId

Ƭ **NetworkId**: ``1`` \| ``4`` \| ``80001`` \| ``137`` \| ``31337``

#### Defined in

[mint-sdk-js/src/types/NetworkId.ts:1](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/types/NetworkId.ts#L1)

___

### PaymentMethod

Ƭ **PaymentMethod**: [`PaymentMethodData`](#paymentmethoddata)[``"paymentMethod"``]

#### Defined in

[mint-sdk-js/src/types/v2/PaymentMethods.ts:3](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/types/v2/PaymentMethods.ts#L3)

___

### PaymentMethodData

Ƭ **PaymentMethodData**: { `contractDataERC721Shop`: [`ContractDataERC721Shop`](../interfaces/apiClientV2.ContractDataERC721Shop) ; `paymentMethod`: ``"ethereum-contract-erc721-shop-fixed-price"``  } & `Omit`<[`ItemPaymentMethodDataEthereumContractERC721ShopFixedPrice`](../interfaces/apiClientV2.ItemPaymentMethodDataEthereumContractERC721ShopFixedPrice), ``"paymentMethod"``\> \| { `paymentMethod`: ``"ethereum-contract-erc721-shop-auction"``  } & `Omit`<[`ItemPaymentMethodDataEthereumContractERC721ShopAuction`](../interfaces/apiClientV2.ItemPaymentMethodDataEthereumContractERC721ShopAuction), ``"paymentMethod"``\> \| { `paymentMethod`: ``"credit-card-stripe-fixed-price"``  } & `Omit`<[`ItemPaymentMethodDataCreditCardStripeFixedPrice`](../interfaces/apiClientV2.ItemPaymentMethodDataCreditCardStripeFixedPrice), ``"paymentMethod"``\>

#### Defined in

[mint-sdk-js/src/types/v2/PaymentMethodData.ts:8](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/types/v2/PaymentMethodData.ts#L8)

___

### Residence

Ƭ **Residence**: typeof `residenceList`[`number`]

#### Defined in

[mint-sdk-js/src/types/Residence.ts:2](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/types/Residence.ts#L2)

___

### Token

Ƭ **Token**: `Object`

Token is implemented as ERC721.
TokenはERC721を表現している
Item:Token = 1:1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `authorAddress` | `string` | https://ipfs.io/ipfs/xxxx |
| `contractAddress` | `string` | - |
| `description` | `string` | - |
| `imageURI` | `string` | ipfs:// |
| `imageURIHTTP` | `Object` | Preview url for imageURI imageURIのブラウザ閲覧用 https://xxxx |
| `imageURIHTTP.mimeType` | `string` | - |
| `imageURIHTTP.url` | `string` | - |
| `item` | `Item` | The original item associated with the Token Tokenの元になったItemが入る |
| `name` | `string` | - |
| `previews` | { `mimeType`: `string` ; `url`: `string`  }[] | Preview for URI Can insert image or video, defaults to empty array when nothing is set. プレビューのURI 動画・画像が入る プレビューが設定されていない場合は空配列になる |
| `tokenId` | `number` | - |
| `tokenURI` | `string` | ipfs://xxxx |
| `tokenURIHTTP` | `string` | Preview for tokenURI tokenURIのブラウザ閲覧用 https://xxxx |

#### Defined in

[mint-sdk-js/src/types/Token.ts:7](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/types/Token.ts#L7)

___

### WalletInfo

Ƭ **WalletInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `balance` | [`BigNumber`](#bignumber) |
| `unit` | [`CurrencyUnit`](#currencyunit) |

#### Defined in

[mint-sdk-js/src/types/WalletInfo.ts:4](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/types/WalletInfo.ts#L4)

___

### WalletSetting

Ƭ **WalletSetting**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fortmatic` | `Object` |
| `fortmatic.key` | `string` |

#### Defined in

[mint-sdk-js/src/types/WalletSetting.ts:1](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/types/WalletSetting.ts#L1)
