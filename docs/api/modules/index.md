---
id: "index"
title: "Module: index"
sidebar_label: "index"
sidebar_position: 0
custom_edit_url: null
---

## Classes

- [MintSDK](../classes/.MintSDK)

## Interfaces

- [Bid](../interfaces/.Bid)
- [TokenERC721](../interfaces/.TokenERC721)
- [WalletAddressProfile](../interfaces/.WalletAddressProfile)

## References

### WrongNetworkError

Re-exports [WrongNetworkError](../classes/Errors.WrongNetworkError)

## Type aliases

### BigNumber

Ƭ **BigNumber**: `ethers.BigNumber`

#### Defined in

[mint-sdk-js/src/types/BigNumber.ts:3](https://github.com/KyuzanInc/mint-sdk-js/blob/7cbd1d1/src/types/BigNumber.ts#L3)

___

### CurrencyUnit

Ƭ **CurrencyUnit**: typeof `currencys`[`number`]

#### Defined in

[mint-sdk-js/src/types/CurrencyUnit.ts:3](https://github.com/KyuzanInc/mint-sdk-js/blob/7cbd1d1/src/types/CurrencyUnit.ts#L3)

___

### Item

Ƭ **Item**: `Omit`<`APIItem`, ``"paymentMethodData"`` \| ``"type"`` \| ``"cryptoCurrency"``\> & { `cryptoCurrency`: `CryptoCurrencyRate` ; `paymentMethodData`: [`PaymentMethodData`](#paymentmethoddata) ; `type`: [`ItemType`](#itemtype)  }

#### Defined in

[mint-sdk-js/src/types/v2/Item.ts:6](https://github.com/KyuzanInc/mint-sdk-js/blob/7cbd1d1/src/types/v2/Item.ts#L6)

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

[mint-sdk-js/src/types/ItemLog.ts:1](https://github.com/KyuzanInc/mint-sdk-js/blob/7cbd1d1/src/types/ItemLog.ts#L1)

___

### ItemStock

Ƭ **ItemStock**: `Omit`<`APIItemStock`, ``"status"`` \| ``"item"``\> & { `item`: [`Item`](#item) ; `status`: `ItemStockStatus`  }

#### Defined in

[mint-sdk-js/src/types/v2/ItemStock.ts:5](https://github.com/KyuzanInc/mint-sdk-js/blob/7cbd1d1/src/types/v2/ItemStock.ts#L5)

___

### ItemTradeType

Ƭ **ItemTradeType**: typeof `itemsTradeTypes`[`number`]

#### Defined in

[mint-sdk-js/src/types/ItemTradeType.ts:2](https://github.com/KyuzanInc/mint-sdk-js/blob/7cbd1d1/src/types/ItemTradeType.ts#L2)

___

### ItemType

Ƭ **ItemType**: \`${ItemTypeEnum}\`

#### Defined in

[mint-sdk-js/src/types/v2/ItemType.ts:3](https://github.com/KyuzanInc/mint-sdk-js/blob/7cbd1d1/src/types/v2/ItemType.ts#L3)

___

### ItemsType

Ƭ **ItemsType**: typeof `itemsTypes`[`number`]

#### Defined in

[mint-sdk-js/src/types/ItemsType.ts:13](https://github.com/KyuzanInc/mint-sdk-js/blob/7cbd1d1/src/types/ItemsType.ts#L13)

___

### NetworkId

Ƭ **NetworkId**: ``1`` \| ``4`` \| ``80001`` \| ``137`` \| ``31337``

#### Defined in

[mint-sdk-js/src/types/NetworkId.ts:1](https://github.com/KyuzanInc/mint-sdk-js/blob/7cbd1d1/src/types/NetworkId.ts#L1)

___

### PaymentMethod

Ƭ **PaymentMethod**: [`PaymentMethodData`](#paymentmethoddata)[``"paymentMethod"``]

#### Defined in

[mint-sdk-js/src/types/v2/PaymentMethods.ts:3](https://github.com/KyuzanInc/mint-sdk-js/blob/7cbd1d1/src/types/v2/PaymentMethods.ts#L3)

___

### PaymentMethodData

Ƭ **PaymentMethodData**: { `contractDataERC721Shop`: `ContractDataERC721Shop` ; `paymentMethod`: ``"ethereum-contract-erc721-shop-fixed-price"``  } & `Omit`<`ItemPaymentMethodDataEthereumContractERC721ShopFixedPrice`, ``"paymentMethod"``\> \| { `paymentMethod`: ``"ethereum-contract-erc721-shop-auction"``  } & `Omit`<`ItemPaymentMethodDataEthereumContractERC721ShopAuction`, ``"paymentMethod"``\> \| { `paymentMethod`: ``"credit-card-stripe-fixed-price"``  } & `Omit`<`ItemPaymentMethodDataCreditCardStripeFixedPrice`, ``"paymentMethod"``\>

#### Defined in

[mint-sdk-js/src/types/v2/PaymentMethodData.ts:8](https://github.com/KyuzanInc/mint-sdk-js/blob/7cbd1d1/src/types/v2/PaymentMethodData.ts#L8)

___

### Residence

Ƭ **Residence**: typeof `residenceList`[`number`]

#### Defined in

[mint-sdk-js/src/types/Residence.ts:2](https://github.com/KyuzanInc/mint-sdk-js/blob/7cbd1d1/src/types/Residence.ts#L2)

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

[mint-sdk-js/src/types/Token.ts:7](https://github.com/KyuzanInc/mint-sdk-js/blob/7cbd1d1/src/types/Token.ts#L7)

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

[mint-sdk-js/src/types/WalletInfo.ts:4](https://github.com/KyuzanInc/mint-sdk-js/blob/7cbd1d1/src/types/WalletInfo.ts#L4)

___

### WalletSetting

Ƭ **WalletSetting**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fortmatic` | `Object` |
| `fortmatic.key` | `string` |

#### Defined in

[mint-sdk-js/src/types/WalletSetting.ts:1](https://github.com/KyuzanInc/mint-sdk-js/blob/7cbd1d1/src/types/WalletSetting.ts#L1)
