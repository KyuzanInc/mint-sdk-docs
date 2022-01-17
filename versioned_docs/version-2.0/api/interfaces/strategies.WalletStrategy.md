---
id: "strategies.WalletStrategy"
title: "Interface: WalletStrategy"
sidebar_label: "strategies.WalletStrategy"
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

[mint-sdk-js/src/strategies/interface.ts:6](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/interface.ts#L6)

___

### disconnectWallet

▸ **disconnectWallet**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[mint-sdk-js/src/strategies/interface.ts:10](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/interface.ts#L10)

___

### getConnectedNetworkId

▸ **getConnectedNetworkId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[mint-sdk-js/src/strategies/interface.ts:7](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/interface.ts#L7)

___

### getProvider

▸ **getProvider**(): `Web3Provider`

#### Returns

`Web3Provider`

#### Defined in

[mint-sdk-js/src/strategies/interface.ts:9](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/interface.ts#L9)

___

### getWalletInfo

▸ **getWalletInfo**(): `Promise`<[`WalletInfo`](../modules/#walletinfo)\>

#### Returns

`Promise`<[`WalletInfo`](../modules/#walletinfo)\>

#### Defined in

[mint-sdk-js/src/strategies/interface.ts:8](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/interface.ts#L8)

___

### isWalletConnect

▸ **isWalletConnect**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[mint-sdk-js/src/strategies/interface.ts:5](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/interface.ts#L5)

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

[mint-sdk-js/src/strategies/interface.ts:12](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/interface.ts#L12)

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

[mint-sdk-js/src/strategies/interface.ts:14](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/interface.ts#L14)

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

[mint-sdk-js/src/strategies/interface.ts:16](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/interface.ts#L16)

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

[mint-sdk-js/src/strategies/interface.ts:11](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/interface.ts#L11)

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

[mint-sdk-js/src/strategies/interface.ts:13](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/interface.ts#L13)

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

[mint-sdk-js/src/strategies/interface.ts:15](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/interface.ts#L15)
