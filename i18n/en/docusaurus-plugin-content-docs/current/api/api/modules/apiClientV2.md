---
id: "apiClientV2"
title: "Module: apiClientV2"
sidebar_label: "apiClientV2"
sidebar_position: 0
custom_edit_url: null
---

## Enumerations

- [ChainType](../enums/apiClientV2.ChainType)
- [CryptoCurrencyType](../enums/apiClientV2.CryptoCurrencyType)
- [ItemPaymentMethodDataCreditCardStripeFixedPricePaymentMethodEnum](../enums/apiClientV2.ItemPaymentMethodDataCreditCardStripeFixedPricePaymentMethodEnum)
- [ItemPaymentMethodDataEthereumContractERC721ShopAuctionPaymentMethodEnum](../enums/apiClientV2.ItemPaymentMethodDataEthereumContractERC721ShopAuctionPaymentMethodEnum)
- [ItemPaymentMethodDataEthereumContractERC721ShopFixedPricePaymentMethodEnum](../enums/apiClientV2.ItemPaymentMethodDataEthereumContractERC721ShopFixedPricePaymentMethodEnum)
- [ItemStockStatus](../enums/apiClientV2.ItemStockStatus)
- [ItemType](../enums/apiClientV2.ItemType)
- [NetworkId](../enums/apiClientV2.NetworkId)
- [ProductERC721StatusEnum](../enums/apiClientV2.ProductERC721StatusEnum)
- [SignatureType](../enums/apiClientV2.SignatureType)
- [TokenStandardType](../enums/apiClientV2.TokenStandardType)

## Classes

- [Configuration](../classes/apiClientV2.Configuration)
- [DefaultApi](../classes/apiClientV2.DefaultApi)

## Interfaces

- [ConfigurationParameters](../interfaces/apiClientV2.ConfigurationParameters)
- [ContractDataERC721Shop](../interfaces/apiClientV2.ContractDataERC721Shop)
- [ContractERC721](../interfaces/apiClientV2.ContractERC721)
- [CryptoCurrencyRate](../interfaces/apiClientV2.CryptoCurrencyRate)
- [InlineObject](../interfaces/apiClientV2.InlineObject)
- [InlineResponse200](../interfaces/apiClientV2.InlineResponse200)
- [InlineResponse2001](../interfaces/apiClientV2.InlineResponse2001)
- [InlineResponse20010](../interfaces/apiClientV2.InlineResponse20010)
- [InlineResponse20010Data](../interfaces/apiClientV2.InlineResponse20010Data)
- [InlineResponse20011](../interfaces/apiClientV2.InlineResponse20011)
- [InlineResponse20011Data](../interfaces/apiClientV2.InlineResponse20011Data)
- [InlineResponse20012](../interfaces/apiClientV2.InlineResponse20012)
- [InlineResponse2002](../interfaces/apiClientV2.InlineResponse2002)
- [InlineResponse2002Data](../interfaces/apiClientV2.InlineResponse2002Data)
- [InlineResponse2003](../interfaces/apiClientV2.InlineResponse2003)
- [InlineResponse2003Data](../interfaces/apiClientV2.InlineResponse2003Data)
- [InlineResponse2004](../interfaces/apiClientV2.InlineResponse2004)
- [InlineResponse2005](../interfaces/apiClientV2.InlineResponse2005)
- [InlineResponse2006](../interfaces/apiClientV2.InlineResponse2006)
- [InlineResponse2006Data](../interfaces/apiClientV2.InlineResponse2006Data)
- [InlineResponse2007](../interfaces/apiClientV2.InlineResponse2007)
- [InlineResponse2008](../interfaces/apiClientV2.InlineResponse2008)
- [InlineResponse2009](../interfaces/apiClientV2.InlineResponse2009)
- [InlineResponse2009Data](../interfaces/apiClientV2.InlineResponse2009Data)
- [InlineResponse400](../interfaces/apiClientV2.InlineResponse400)
- [Item](../interfaces/apiClientV2.Item)
- [ItemPaymentMethodDataCreditCardStripeFixedPrice](../interfaces/apiClientV2.ItemPaymentMethodDataCreditCardStripeFixedPrice)
- [ItemPaymentMethodDataEthereumContractERC721ShopAuction](../interfaces/apiClientV2.ItemPaymentMethodDataEthereumContractERC721ShopAuction)
- [ItemPaymentMethodDataEthereumContractERC721ShopFixedPrice](../interfaces/apiClientV2.ItemPaymentMethodDataEthereumContractERC721ShopFixedPrice)
- [ItemStock](../interfaces/apiClientV2.ItemStock)
- [PreviewMedia](../interfaces/apiClientV2.PreviewMedia)
- [ProductERC721](../interfaces/apiClientV2.ProductERC721)
- [TransferData](../interfaces/apiClientV2.TransferData)

## References

### Bid

Re-exports [Bid](../interfaces/.Bid)

___

### TokenERC721

Re-exports [TokenERC721](../interfaces/.TokenERC721)

___

### WalletAddressProfile

Re-exports [WalletAddressProfile](../interfaces/.WalletAddressProfile)

## Functions

### DefaultApiAxiosParamCreator

▸ `Const` **DefaultApiAxiosParamCreator**(`configuration?`): `Object`

DefaultApi - axios parameter creator

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/apiClientV2.Configuration) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getAvatar` | (`mintAccessToken`: `string`, `options`: `any`) => `Promise`<`RequestArgs`\> |
| `getBiddedItemStocksByWalletAddress` | (`mintAccessToken`: `string`, `walletAddress`: `string`, `page`: `string`, `perPage`: `string`, `onlyBeforeEnd?`: `string`, `sortBy?`: ``"price"`` \| ``"endAt"``, `sortDirection?`: ``"asc"`` \| ``"desc"``, `options`: `any`) => `Promise`<`RequestArgs`\> |
| `getBoughtItemStocksByWalletAddress` | (`mintAccessToken`: `string`, `walletAddress`: `string`, `page`: `string`, `perPage`: `string`, `sortBy?`: ``"price"`` \| ``"createAt"``, `sortDirection?`: ``"asc"`` \| ``"desc"``, `options`: `any`) => `Promise`<`RequestArgs`\> |
| `getContractERC721ById` | (`mintAccessToken`: `string`, `contractId`: `string`, `options`: `any`) => `Promise`<`RequestArgs`\> |
| `getItemById` | (`mintAccessToken`: `string`, `itemId`: `string`, `options`: `any`) => `Promise`<`RequestArgs`\> |
| `getItemStockById` | (`mintAccessToken`: `string`, `itemStockId`: `string`, `options`: `any`) => `Promise`<`RequestArgs`\> |
| `getItems` | (`mintAccessToken`: `string`, `page`: `string`, `perPage`: `string`, `saleStatus?`: ``"beforeStart"`` \| ``"beforeEnd"`` \| ``"afterEnd"``, `onlyAvailableStock?`: ``"true"`` \| ``"false"``, `paymentMethod?`: ``"ethereum-contract-erc721-shop-fixed-price"`` \| ``"ethereum-contract-erc721-shop-auction"`` \| ``"credit-card-stripe-fixed-price"``, `tags?`: `string`, `sortBy?`: ``"price"``, `sortDirection?`: ``"asc"`` \| ``"desc"``, `options`: `any`) => `Promise`<`RequestArgs`\> |
| `getProductERC721ById` | (`mintAccessToken`: `string`, `id`: `string`, `options`: `any`) => `Promise`<`RequestArgs`\> |
| `getProfile` | (`mintAccessToken`: `string`, `walletAddress`: `string`, `options`: `any`) => `Promise`<`RequestArgs`\> |
| `getSellableItemStockERC721Id` | (`mintAccessToken`: `string`, `itemId`: `string`, `options`: `any`) => `Promise`<`RequestArgs`\> |
| `getSignByItemStockId` | (`mintAccessToken`: `string`, `itemStockId`: `string`, `signatureType`: [`SignatureType`](../enums/apiClientV2.SignatureType), `walletAddress?`: `string`, `residence?`: ``"jp"`` \| ``"unknown"``, `options`: `any`) => `Promise`<`RequestArgs`\> |
| `getTokenERC721sByWalletAddress` | (`mintAccessToken`: `string`, `walletAddress`: `string`, `page`: `string`, `perPage`: `string`, `options`: `any`) => `Promise`<`RequestArgs`\> |
| `updateProfile` | (`mintAccessToken`: `string`, `inlineObject?`: [`InlineObject`](../interfaces/apiClientV2.InlineObject), `options`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:1214](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/apiClientV2/api.ts#L1214)

___

### DefaultApiFactory

▸ `Const` **DefaultApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

DefaultApi - factory interface

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/apiClientV2.Configuration) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getAvatar` | (`mintAccessToken`: `string`, `options?`: `any`) => `AxiosPromise`<[`InlineResponse20011`](../interfaces/apiClientV2.InlineResponse20011)\> |
| `getBiddedItemStocksByWalletAddress` | (`mintAccessToken`: `string`, `walletAddress`: `string`, `page`: `string`, `perPage`: `string`, `onlyBeforeEnd?`: `string`, `sortBy?`: ``"price"`` \| ``"endAt"``, `sortDirection?`: ``"asc"`` \| ``"desc"``, `options?`: `any`) => `AxiosPromise`<[`InlineResponse2005`](../interfaces/apiClientV2.InlineResponse2005)\> |
| `getBoughtItemStocksByWalletAddress` | (`mintAccessToken`: `string`, `walletAddress`: `string`, `page`: `string`, `perPage`: `string`, `sortBy?`: ``"price"`` \| ``"createAt"``, `sortDirection?`: ``"asc"`` \| ``"desc"``, `options?`: `any`) => `AxiosPromise`<[`InlineResponse2006`](../interfaces/apiClientV2.InlineResponse2006)\> |
| `getContractERC721ById` | (`mintAccessToken`: `string`, `contractId`: `string`, `options?`: `any`) => `AxiosPromise`<[`InlineResponse20012`](../interfaces/apiClientV2.InlineResponse20012)\> |
| `getItemById` | (`mintAccessToken`: `string`, `itemId`: `string`, `options?`: `any`) => `AxiosPromise`<[`InlineResponse2001`](../interfaces/apiClientV2.InlineResponse2001)\> |
| `getItemStockById` | (`mintAccessToken`: `string`, `itemStockId`: `string`, `options?`: `any`) => `AxiosPromise`<[`InlineResponse2004`](../interfaces/apiClientV2.InlineResponse2004)\> |
| `getItems` | (`mintAccessToken`: `string`, `page`: `string`, `perPage`: `string`, `saleStatus?`: ``"beforeStart"`` \| ``"beforeEnd"`` \| ``"afterEnd"``, `onlyAvailableStock?`: ``"true"`` \| ``"false"``, `paymentMethod?`: ``"ethereum-contract-erc721-shop-fixed-price"`` \| ``"ethereum-contract-erc721-shop-auction"`` \| ``"credit-card-stripe-fixed-price"``, `tags?`: `string`, `sortBy?`: ``"price"``, `sortDirection?`: ``"asc"`` \| ``"desc"``, `options?`: `any`) => `AxiosPromise`<[`InlineResponse200`](../interfaces/apiClientV2.InlineResponse200)\> |
| `getProductERC721ById` | (`mintAccessToken`: `string`, `id`: `string`, `options?`: `any`) => `AxiosPromise`<[`InlineResponse2007`](../interfaces/apiClientV2.InlineResponse2007)\> |
| `getProfile` | (`mintAccessToken`: `string`, `walletAddress`: `string`, `options?`: `any`) => `AxiosPromise`<[`InlineResponse2009`](../interfaces/apiClientV2.InlineResponse2009)\> |
| `getSellableItemStockERC721Id` | (`mintAccessToken`: `string`, `itemId`: `string`, `options?`: `any`) => `AxiosPromise`<[`InlineResponse2002`](../interfaces/apiClientV2.InlineResponse2002)\> |
| `getSignByItemStockId` | (`mintAccessToken`: `string`, `itemStockId`: `string`, `signatureType`: [`SignatureType`](../enums/apiClientV2.SignatureType), `walletAddress?`: `string`, `residence?`: ``"jp"`` \| ``"unknown"``, `options?`: `any`) => `AxiosPromise`<[`InlineResponse2003`](../interfaces/apiClientV2.InlineResponse2003)\> |
| `getTokenERC721sByWalletAddress` | (`mintAccessToken`: `string`, `walletAddress`: `string`, `page`: `string`, `perPage`: `string`, `options?`: `any`) => `AxiosPromise`<[`InlineResponse2008`](../interfaces/apiClientV2.InlineResponse2008)\> |
| `updateProfile` | (`mintAccessToken`: `string`, `inlineObject?`: [`InlineObject`](../interfaces/apiClientV2.InlineObject), `options?`: `any`) => `AxiosPromise`<[`InlineResponse20010`](../interfaces/apiClientV2.InlineResponse20010)\> |

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:2089](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/apiClientV2/api.ts#L2089)

___

### DefaultApiFp

▸ `Const` **DefaultApiFp**(`configuration?`): `Object`

DefaultApi - functional programming interface

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/apiClientV2.Configuration) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getAvatar` | (`mintAccessToken`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`InlineResponse20011`](../interfaces/apiClientV2.InlineResponse20011)\>\> |
| `getBiddedItemStocksByWalletAddress` | (`mintAccessToken`: `string`, `walletAddress`: `string`, `page`: `string`, `perPage`: `string`, `onlyBeforeEnd?`: `string`, `sortBy?`: ``"price"`` \| ``"endAt"``, `sortDirection?`: ``"asc"`` \| ``"desc"``, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`InlineResponse2005`](../interfaces/apiClientV2.InlineResponse2005)\>\> |
| `getBoughtItemStocksByWalletAddress` | (`mintAccessToken`: `string`, `walletAddress`: `string`, `page`: `string`, `perPage`: `string`, `sortBy?`: ``"price"`` \| ``"createAt"``, `sortDirection?`: ``"asc"`` \| ``"desc"``, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`InlineResponse2006`](../interfaces/apiClientV2.InlineResponse2006)\>\> |
| `getContractERC721ById` | (`mintAccessToken`: `string`, `contractId`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`InlineResponse20012`](../interfaces/apiClientV2.InlineResponse20012)\>\> |
| `getItemById` | (`mintAccessToken`: `string`, `itemId`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`InlineResponse2001`](../interfaces/apiClientV2.InlineResponse2001)\>\> |
| `getItemStockById` | (`mintAccessToken`: `string`, `itemStockId`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`InlineResponse2004`](../interfaces/apiClientV2.InlineResponse2004)\>\> |
| `getItems` | (`mintAccessToken`: `string`, `page`: `string`, `perPage`: `string`, `saleStatus?`: ``"beforeStart"`` \| ``"beforeEnd"`` \| ``"afterEnd"``, `onlyAvailableStock?`: ``"true"`` \| ``"false"``, `paymentMethod?`: ``"ethereum-contract-erc721-shop-fixed-price"`` \| ``"ethereum-contract-erc721-shop-auction"`` \| ``"credit-card-stripe-fixed-price"``, `tags?`: `string`, `sortBy?`: ``"price"``, `sortDirection?`: ``"asc"`` \| ``"desc"``, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`InlineResponse200`](../interfaces/apiClientV2.InlineResponse200)\>\> |
| `getProductERC721ById` | (`mintAccessToken`: `string`, `id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`InlineResponse2007`](../interfaces/apiClientV2.InlineResponse2007)\>\> |
| `getProfile` | (`mintAccessToken`: `string`, `walletAddress`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`InlineResponse2009`](../interfaces/apiClientV2.InlineResponse2009)\>\> |
| `getSellableItemStockERC721Id` | (`mintAccessToken`: `string`, `itemId`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`InlineResponse2002`](../interfaces/apiClientV2.InlineResponse2002)\>\> |
| `getSignByItemStockId` | (`mintAccessToken`: `string`, `itemStockId`: `string`, `signatureType`: [`SignatureType`](../enums/apiClientV2.SignatureType), `walletAddress?`: `string`, `residence?`: ``"jp"`` \| ``"unknown"``, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`InlineResponse2003`](../interfaces/apiClientV2.InlineResponse2003)\>\> |
| `getTokenERC721sByWalletAddress` | (`mintAccessToken`: `string`, `walletAddress`: `string`, `page`: `string`, `perPage`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`InlineResponse2008`](../interfaces/apiClientV2.InlineResponse2008)\>\> |
| `updateProfile` | (`mintAccessToken`: `string`, `inlineObject?`: [`InlineObject`](../interfaces/apiClientV2.InlineObject), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`InlineResponse20010`](../interfaces/apiClientV2.InlineResponse20010)\>\> |

#### Defined in

[mint-sdk-js/src/apiClientV2/api.ts:1903](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/apiClientV2/api.ts#L1903)
