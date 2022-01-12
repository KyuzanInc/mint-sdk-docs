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

mint-sdk-js/src/apiClientV2/api.ts:733

___

### bids

• **bids**: [`Bid`](.Bid)[]

オークションItem以外は空配列が入る

**`memberof`** Item

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:745

___

### createAt

• **createAt**: `string`

**`memberof`** Item

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:649

___

### cryptoCurrencyRate

• **cryptoCurrencyRate**: [`CryptoCurrencyRate`](apiClientV2.CryptoCurrencyRate)

**`memberof`** Item

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:703

___

### description

• **description**: `string`

**`memberof`** Item

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:667

___

### endAt

• **endAt**: `string`

**`memberof`** Item

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:691

___

### feeRatePermill

• **feeRatePermill**: `number`

Mintに支払われる取引手数料

**`memberof`** Item

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:709

___

### id

• **id**: `string`

**`memberof`** Item

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:643

___

### itemStockIds

• **itemStockIds**: `string`[]

**`memberof`** Item

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:727

___

### metadata

• **metadata**: ``null`` \| `object`

**`memberof`** Item

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:751

___

### name

• **name**: `string`

**`memberof`** Item

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:661

___

### paymentMethodData

• **paymentMethodData**: [`ItemPaymentMethodDataEthereumContractERC721ShopFixedPrice`](apiClientV2.ItemPaymentMethodDataEthereumContractERC721ShopFixedPrice) \| [`ItemPaymentMethodDataEthereumContractERC721ShopAuction`](apiClientV2.ItemPaymentMethodDataEthereumContractERC721ShopAuction) \| [`ItemPaymentMethodDataCreditCardStripeFixedPrice`](apiClientV2.ItemPaymentMethodDataCreditCardStripeFixedPrice)

paymentMethodによって異なるデータ

**`memberof`** Item

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:721

___

### previews

• **previews**: [`PreviewMedia`](apiClientV2.PreviewMedia)[]

Itemのプレビュー用URL

**`memberof`** Item

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:673

___

### price

• **price**: `number`

**`memberof`** Item

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:697

___

### productERC721Ids

• **productERC721Ids**: `string`[]

**`memberof`** Item

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:739

___

### startAt

• **startAt**: `string`

**`memberof`** Item

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:685

___

### tags

• **tags**: `string`[]

任意のTag

**`memberof`** Item

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:715

___

### type

• **type**: [`ItemType`](../enums/apiClientV2.ItemType)

**`memberof`** Item

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:679

___

### updateAt

• **updateAt**: `string`

**`memberof`** Item

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:655
