---
id: "apiClientV2.DefaultApi"
title: "Class: DefaultApi"
sidebar_label: "DefaultApi"
custom_edit_url: null
---

[apiClientV2](../modules/apiClientV2).DefaultApi

DefaultApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`DefaultApi`**

## Constructors

### constructor

• **new DefaultApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](apiClientV2.Configuration) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

mint-sdk-js/src/apiClientV2/base.ts:52

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](apiClientV2.Configuration)

#### Inherited from

BaseAPI.configuration

#### Defined in

mint-sdk-js/src/apiClientV2/base.ts:50

## Methods

### getAvatar

▸ **getAvatar**(`mintAccessToken`, `options?`): `Promise`<`AxiosResponse`<[`InlineResponse20011`](../interfaces/apiClientV2.InlineResponse20011)\>\>

**`summary`** アバター画像の署名付きURLの取得

**`throws`** {RequiredError}

**`memberof`** DefaultApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `mintAccessToken` | `string` |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`InlineResponse20011`](../interfaces/apiClientV2.InlineResponse20011)\>\>

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:2273

___

### getBiddedItemStocksByWalletAddress

▸ **getBiddedItemStocksByWalletAddress**(`mintAccessToken`, `walletAddress`, `page`, `perPage`, `onlyBeforeEnd?`, `sortBy?`, `sortDirection?`, `options?`): `Promise`<`AxiosResponse`<[`InlineResponse2005`](../interfaces/apiClientV2.InlineResponse2005)\>\>

**`summary`** 指定したwalletAddressでBidしたItemStockを取得する

**`throws`** {RequiredError}

**`memberof`** DefaultApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `mintAccessToken` | `string` |
| `walletAddress` | `string` |
| `page` | `string` |
| `perPage` | `string` |
| `onlyBeforeEnd?` | `string` |
| `sortBy?` | ``"price"`` \| ``"endAt"`` |
| `sortDirection?` | ``"asc"`` \| ``"desc"`` |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`InlineResponse2005`](../interfaces/apiClientV2.InlineResponse2005)\>\>

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:2291

___

### getBoughtItemStocksByWalletAddress

▸ **getBoughtItemStocksByWalletAddress**(`mintAccessToken`, `walletAddress`, `page`, `perPage`, `sortBy?`, `sortDirection?`, `options?`): `Promise`<`AxiosResponse`<[`InlineResponse2006`](../interfaces/apiClientV2.InlineResponse2006)\>\>

**`summary`** 指定したwalletAddressで購入または落札したItemStockを取得する

**`throws`** {RequiredError}

**`memberof`** DefaultApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `mintAccessToken` | `string` |
| `walletAddress` | `string` |
| `page` | `string` |
| `perPage` | `string` |
| `sortBy?` | ``"price"`` \| ``"createAt"`` |
| `sortDirection?` | ``"asc"`` \| ``"desc"`` |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`InlineResponse2006`](../interfaces/apiClientV2.InlineResponse2006)\>\>

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:2308

___

### getContractERC721ById

▸ **getContractERC721ById**(`mintAccessToken`, `contractId`, `options?`): `Promise`<`AxiosResponse`<[`InlineResponse20012`](../interfaces/apiClientV2.InlineResponse20012)\>\>

**`summary`** ContractERC721をId指定で取得する

**`throws`** {RequiredError}

**`memberof`** DefaultApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `mintAccessToken` | `string` |
| `contractId` | `string` |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`InlineResponse20012`](../interfaces/apiClientV2.InlineResponse20012)\>\>

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:2321

___

### getItemById

▸ **getItemById**(`mintAccessToken`, `itemId`, `options?`): `Promise`<`AxiosResponse`<[`InlineResponse2001`](../interfaces/apiClientV2.InlineResponse2001)\>\>

**`summary`** プロジェクトのItemをId指定で取得する

**`throws`** {RequiredError}

**`memberof`** DefaultApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `mintAccessToken` | `string` |
| `itemId` | `string` |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`InlineResponse2001`](../interfaces/apiClientV2.InlineResponse2001)\>\>

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:2334

___

### getItemStockById

▸ **getItemStockById**(`mintAccessToken`, `itemStockId`, `options?`): `Promise`<`AxiosResponse`<[`InlineResponse2004`](../interfaces/apiClientV2.InlineResponse2004)\>\>

**`summary`** ItemStockをId指定で取得する

**`throws`** {RequiredError}

**`memberof`** DefaultApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `mintAccessToken` | `string` |
| `itemStockId` | `string` |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`InlineResponse2004`](../interfaces/apiClientV2.InlineResponse2004)\>\>

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:2347

___

### getItems

▸ **getItems**(`mintAccessToken`, `page`, `perPage`, `saleStatus?`, `onlyAvailableStock?`, `paymentMethod?`, `tags?`, `sortBy?`, `sortDirection?`, `options?`): `Promise`<`AxiosResponse`<[`InlineResponse200`](../interfaces/apiClientV2.InlineResponse200)\>\>

**`summary`** プロジェクトのItemを全て取得する

**`throws`** {RequiredError}

**`memberof`** DefaultApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `mintAccessToken` | `string` |
| `page` | `string` |
| `perPage` | `string` |
| `saleStatus?` | ``"beforeStart"`` \| ``"beforeEnd"`` \| ``"afterEnd"`` |
| `onlyAvailableStock?` | ``"true"`` \| ``"false"`` |
| `paymentMethod?` | ``"ethereum-contract-erc721-shop-fixed-price"`` \| ``"ethereum-contract-erc721-shop-auction"`` \| ``"credit-card-stripe-fixed-price"`` |
| `tags?` | `string` |
| `sortBy?` | ``"price"`` |
| `sortDirection?` | ``"asc"`` \| ``"desc"`` |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`InlineResponse200`](../interfaces/apiClientV2.InlineResponse200)\>\>

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:2367

___

### getProductERC721ById

▸ **getProductERC721ById**(`mintAccessToken`, `id`, `options?`): `Promise`<`AxiosResponse`<[`InlineResponse2007`](../interfaces/apiClientV2.InlineResponse2007)\>\>

**`summary`** Itemにパックされていて、ItemのstatusがpublishなProductERC721を取得

**`throws`** {RequiredError}

**`memberof`** DefaultApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `mintAccessToken` | `string` |
| `id` | `string` |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`InlineResponse2007`](../interfaces/apiClientV2.InlineResponse2007)\>\>

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:2380

___

### getProfile

▸ **getProfile**(`mintAccessToken`, `walletAddress`, `options?`): `Promise`<`AxiosResponse`<[`InlineResponse2009`](../interfaces/apiClientV2.InlineResponse2009)\>\>

プロフィールがない場合はnullがdataの値に入る

**`summary`** ウォレットに紐づくプロフィールの取得

**`throws`** {RequiredError}

**`memberof`** DefaultApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `mintAccessToken` | `string` |
| `walletAddress` | `string` |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`InlineResponse2009`](../interfaces/apiClientV2.InlineResponse2009)\>\>

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:2393

___

### getSellableItemStockERC721Id

▸ **getSellableItemStockERC721Id**(`mintAccessToken`, `itemId`, `options?`): `Promise`<`AxiosResponse`<[`InlineResponse2002`](../interfaces/apiClientV2.InlineResponse2002)\>\>

**`summary`** スマコンで販売している`Item`の販売可能な(まだ売れていない)`ItemStockId`を取得する

**`throws`** {RequiredError}

**`memberof`** DefaultApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `mintAccessToken` | `string` |
| `itemId` | `string` |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`InlineResponse2002`](../interfaces/apiClientV2.InlineResponse2002)\>\>

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:2406

___

### getSignByItemStockId

▸ **getSignByItemStockId**(`mintAccessToken`, `itemStockId`, `signatureType`, `walletAddress?`, `residence?`, `options?`): `Promise`<`AxiosResponse`<[`InlineResponse2003`](../interfaces/apiClientV2.InlineResponse2003)\>\>

**`summary`** Item購入に関してスマコンの操作に必要なSignを返す

**`throws`** {RequiredError}

**`memberof`** DefaultApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `mintAccessToken` | `string` |
| `itemStockId` | `string` |
| `signatureType` | [`SignatureType`](../enums/apiClientV2.SignatureType) |
| `walletAddress?` | `string` |
| `residence?` | ``"jp"`` \| ``"unknown"`` |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`InlineResponse2003`](../interfaces/apiClientV2.InlineResponse2003)\>\>

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:2422

___

### getTokenERC721sByWalletAddress

▸ **getTokenERC721sByWalletAddress**(`mintAccessToken`, `walletAddress`, `page`, `perPage`, `options?`): `Promise`<`AxiosResponse`<[`InlineResponse2008`](../interfaces/apiClientV2.InlineResponse2008)\>\>

**`summary`** walletAddressに紐づくTokenERC721を全て取得する

**`throws`** {RequiredError}

**`memberof`** DefaultApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `mintAccessToken` | `string` |
| `walletAddress` | `string` |
| `page` | `string` |
| `perPage` | `string` |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`InlineResponse2008`](../interfaces/apiClientV2.InlineResponse2008)\>\>

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:2437

___

### updateProfile

▸ **updateProfile**(`mintAccessToken`, `inlineObject?`, `options?`): `Promise`<`AxiosResponse`<[`InlineResponse20010`](../interfaces/apiClientV2.InlineResponse20010)\>\>

**`summary`** ウォレットに紐づくプロフィールの作成

**`throws`** {RequiredError}

**`memberof`** DefaultApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `mintAccessToken` | `string` |
| `inlineObject?` | [`InlineObject`](../interfaces/apiClientV2.InlineObject) |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`InlineResponse20010`](../interfaces/apiClientV2.InlineResponse20010)\>\>

#### Defined in

mint-sdk-js/src/apiClientV2/api.ts:2450
