---
id: "apiClientV2.Item"
title: "Interface: Item"
sidebar_label: "Item"
custom_edit_url: null
---

[apiClientV2](../modules/apiClientV2).Item

**`export`**

**`interface`** Item

## Properties

### availableStockNum

• **availableStockNum**: `number`

**`memberof`** Item

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:733](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/apiClientV2/api.ts#L733)

___

### bids

• **bids**: [`Bid`](.Bid)[]

オークションItem以外は空配列が入る

**`memberof`** Item

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:745](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/apiClientV2/api.ts#L745)

___

### createAt

• **createAt**: `string`

**`memberof`** Item

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:649](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/apiClientV2/api.ts#L649)

___

### cryptoCurrencyRate

• **cryptoCurrencyRate**: [`CryptoCurrencyRate`](apiClientV2.CryptoCurrencyRate)

**`memberof`** Item

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:703](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/apiClientV2/api.ts#L703)

___

### description

• **description**: `string`

**`memberof`** Item

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:667](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/apiClientV2/api.ts#L667)

___

### endAt

• **endAt**: `string`

**`memberof`** Item

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:691](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/apiClientV2/api.ts#L691)

___

### feeRatePermill

• **feeRatePermill**: `number`

Mintに支払われる取引手数料

**`memberof`** Item

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:709](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/apiClientV2/api.ts#L709)

___

### id

• **id**: `string`

**`memberof`** Item

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:643](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/apiClientV2/api.ts#L643)

___

### itemStockIds

• **itemStockIds**: `string`[]

**`memberof`** Item

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:727](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/apiClientV2/api.ts#L727)

___

### metadata

• **metadata**: ``null`` \| `object`

**`memberof`** Item

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:751](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/apiClientV2/api.ts#L751)

___

### name

• **name**: `string`

**`memberof`** Item

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:661](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/apiClientV2/api.ts#L661)

___

### paymentMethodData

• **paymentMethodData**: [`ItemPaymentMethodDataEthereumContractERC721ShopFixedPrice`](apiClientV2.ItemPaymentMethodDataEthereumContractERC721ShopFixedPrice) \| [`ItemPaymentMethodDataEthereumContractERC721ShopAuction`](apiClientV2.ItemPaymentMethodDataEthereumContractERC721ShopAuction) \| [`ItemPaymentMethodDataCreditCardStripeFixedPrice`](apiClientV2.ItemPaymentMethodDataCreditCardStripeFixedPrice)

paymentMethodによって異なるデータ

**`memberof`** Item

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:721](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/apiClientV2/api.ts#L721)

___

### previews

• **previews**: [`PreviewMedia`](apiClientV2.PreviewMedia)[]

Itemのプレビュー用URL

**`memberof`** Item

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:673](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/apiClientV2/api.ts#L673)

___

### price

• **price**: `number`

**`memberof`** Item

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:697](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/apiClientV2/api.ts#L697)

___

### productERC721Ids

• **productERC721Ids**: `string`[]

**`memberof`** Item

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:739](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/apiClientV2/api.ts#L739)

___

### startAt

• **startAt**: `string`

**`memberof`** Item

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:685](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/apiClientV2/api.ts#L685)

___

### tags

• **tags**: `string`[]

任意のTag

**`memberof`** Item

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:715](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/apiClientV2/api.ts#L715)

___

### type

• **type**: [`ItemType`](../enums/apiClientV2.ItemType)

**`memberof`** Item

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:679](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/apiClientV2/api.ts#L679)

___

### updateAt

• **updateAt**: `string`

**`memberof`** Item

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:655](https://github.com/KyuzanInc/mint-sdk-js/blob/d2ac52e/src/apiClientV2/api.ts#L655)
