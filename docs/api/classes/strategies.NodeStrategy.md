---
id: "strategies.NodeStrategy"
title: "Class: NodeStrategy"
sidebar_label: "NodeStrategy"
custom_edit_url: null
---

[strategies](../modules/strategies.md).NodeStrategy

## Implements

- [`WalletStrategy`](../interfaces/strategies.WalletStrategy.md)

## Constructors

### constructor

• **new NodeStrategy**()

#### Defined in

[mint-sdk-js/src/strategies/NodeStrategy.ts:4](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/NodeStrategy.ts#L4)

## Methods

### connectWallet

▸ **connectWallet**(): `Promise`<`never`\>

#### Returns

`Promise`<`never`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[connectWallet](../interfaces/strategies.WalletStrategy.md#connectwallet)

#### Defined in

[mint-sdk-js/src/strategies/NodeStrategy.ts:23](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/NodeStrategy.ts#L23)

___

### disconnectWallet

▸ **disconnectWallet**(): `Promise`<`never`\>

#### Returns

`Promise`<`never`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[disconnectWallet](../interfaces/strategies.WalletStrategy.md#disconnectwallet)

#### Defined in

[mint-sdk-js/src/strategies/NodeStrategy.ts:33](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/NodeStrategy.ts#L33)

___

### getConnectedNetworkId

▸ **getConnectedNetworkId**(): `Promise`<`never`\>

#### Returns

`Promise`<`never`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[getConnectedNetworkId](../interfaces/strategies.WalletStrategy.md#getconnectednetworkid)

#### Defined in

[mint-sdk-js/src/strategies/NodeStrategy.ts:28](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/NodeStrategy.ts#L28)

___

### getProvider

▸ **getProvider**(): `never`

#### Returns

`never`

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[getProvider](../interfaces/strategies.WalletStrategy.md#getprovider)

#### Defined in

[mint-sdk-js/src/strategies/NodeStrategy.ts:18](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/NodeStrategy.ts#L18)

___

### getWalletInfo

▸ **getWalletInfo**(): `Promise`<`never`\>

#### Returns

`Promise`<`never`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[getWalletInfo](../interfaces/strategies.WalletStrategy.md#getwalletinfo)

#### Defined in

[mint-sdk-js/src/strategies/NodeStrategy.ts:13](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/NodeStrategy.ts#L13)

___

### isWalletConnect

▸ **isWalletConnect**(): `Promise`<`never`\>

#### Returns

`Promise`<`never`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[isWalletConnect](../interfaces/strategies.WalletStrategy.md#iswalletconnect)

#### Defined in

[mint-sdk-js/src/strategies/NodeStrategy.ts:8](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/NodeStrategy.ts#L8)

___

### offAccountsChange

▸ **offAccountsChange**(`_callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_callback?` | (`accounts`: `string`[]) => `any` |

#### Returns

`void`

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[offAccountsChange](../interfaces/strategies.WalletStrategy.md#offaccountschange)

#### Defined in

[mint-sdk-js/src/strategies/NodeStrategy.ts:50](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/NodeStrategy.ts#L50)

___

### offConnect

▸ **offConnect**(`_callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_callback?` | () => `any` |

#### Returns

`void`

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[offConnect](../interfaces/strategies.WalletStrategy.md#offconnect)

#### Defined in

[mint-sdk-js/src/strategies/NodeStrategy.ts:42](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/NodeStrategy.ts#L42)

___

### offDisconnect

▸ **offDisconnect**(`_callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_callback?` | () => `any` |

#### Returns

`void`

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[offDisconnect](../interfaces/strategies.WalletStrategy.md#offdisconnect)

#### Defined in

[mint-sdk-js/src/strategies/NodeStrategy.ts:58](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/NodeStrategy.ts#L58)

___

### onAccountsChange

▸ **onAccountsChange**(`_callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_callback` | (`accounts`: `string`[]) => `any` |

#### Returns

`void`

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[onAccountsChange](../interfaces/strategies.WalletStrategy.md#onaccountschange)

#### Defined in

[mint-sdk-js/src/strategies/NodeStrategy.ts:46](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/NodeStrategy.ts#L46)

___

### onConnect

▸ **onConnect**(`_callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_callback` | () => `any` |

#### Returns

`void`

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[onConnect](../interfaces/strategies.WalletStrategy.md#onconnect)

#### Defined in

[mint-sdk-js/src/strategies/NodeStrategy.ts:38](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/NodeStrategy.ts#L38)

___

### onDisconnect

▸ **onDisconnect**(`_callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_callback` | () => `any` |

#### Returns

`void`

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[onDisconnect](../interfaces/strategies.WalletStrategy.md#ondisconnect)

#### Defined in

[mint-sdk-js/src/strategies/NodeStrategy.ts:54](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/NodeStrategy.ts#L54)
