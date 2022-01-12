---
id: "strategies.WalletStrategy"
title: "Interface: WalletStrategy"
sidebar_label: "WalletStrategy"
custom_edit_url: null
---

[strategies](../modules/strategies).WalletStrategy

## Implemented by

- [`FortmaticStrategy`](../classes/strategies.FortmaticStrategy)
- [`MetamaskStrategy`](../classes/strategies.MetamaskStrategy)
- [`NodeStrategy`](../classes/strategies.NodeStrategy)

## Methods

### connectWallet

▸ **connectWallet**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

mint-sdk-js/src/strategies/interface.ts:6

___

### disconnectWallet

▸ **disconnectWallet**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

mint-sdk-js/src/strategies/interface.ts:10

___

### getConnectedNetworkId

▸ **getConnectedNetworkId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

mint-sdk-js/src/strategies/interface.ts:7

___

### getProvider

▸ **getProvider**(): `Web3Provider`

#### Returns

`Web3Provider`

#### Defined in

mint-sdk-js/src/strategies/interface.ts:9

___

### getWalletInfo

▸ **getWalletInfo**(): `Promise`<[`WalletInfo`](../modules/#walletinfo)\>

#### Returns

`Promise`<[`WalletInfo`](../modules/#walletinfo)\>

#### Defined in

mint-sdk-js/src/strategies/interface.ts:8

___

### isWalletConnect

▸ **isWalletConnect**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

mint-sdk-js/src/strategies/interface.ts:5

___

### offAccountsChange

▸ **offAccountsChange**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`accounts`: `string`[]) => `any` |

#### Returns

`void`

#### Defined in

mint-sdk-js/src/strategies/interface.ts:12

___

### offConnect

▸ **offConnect**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `any` |

#### Returns

`void`

#### Defined in

mint-sdk-js/src/strategies/interface.ts:14

___

### offDisconnect

▸ **offDisconnect**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `any` |

#### Returns

`void`

#### Defined in

mint-sdk-js/src/strategies/interface.ts:16

___

### onAccountsChange

▸ **onAccountsChange**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`accounts`: `string`[]) => `any` |

#### Returns

`void`

#### Defined in

mint-sdk-js/src/strategies/interface.ts:11

___

### onConnect

▸ **onConnect**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `any` |

#### Returns

`void`

#### Defined in

mint-sdk-js/src/strategies/interface.ts:13

___

### onDisconnect

▸ **onDisconnect**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `any` |

#### Returns

`void`

#### Defined in

mint-sdk-js/src/strategies/interface.ts:15
