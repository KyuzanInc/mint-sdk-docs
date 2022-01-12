---
id: "strategies.NodeStrategy"
title: "Class: NodeStrategy"
sidebar_label: "NodeStrategy"
custom_edit_url: null
---

[strategies](../modules/strategies).NodeStrategy

## Implements

- [`WalletStrategy`](../interfaces/strategies.WalletStrategy)

## Constructors

### constructor

• **new NodeStrategy**()

#### Defined in

mint-sdk-js/src/strategies/NodeStrategy.ts:4

## Methods

### connectWallet

▸ **connectWallet**(): `Promise`<`never`\>

#### Returns

`Promise`<`never`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[connectWallet](../interfaces/strategies.WalletStrategy#connectwallet)

#### Defined in

mint-sdk-js/src/strategies/NodeStrategy.ts:23

___

### disconnectWallet

▸ **disconnectWallet**(): `Promise`<`never`\>

#### Returns

`Promise`<`never`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[disconnectWallet](../interfaces/strategies.WalletStrategy#disconnectwallet)

#### Defined in

mint-sdk-js/src/strategies/NodeStrategy.ts:33

___

### getConnectedNetworkId

▸ **getConnectedNetworkId**(): `Promise`<`never`\>

#### Returns

`Promise`<`never`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[getConnectedNetworkId](../interfaces/strategies.WalletStrategy#getconnectednetworkid)

#### Defined in

mint-sdk-js/src/strategies/NodeStrategy.ts:28

___

### getProvider

▸ **getProvider**(): `never`

#### Returns

`never`

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[getProvider](../interfaces/strategies.WalletStrategy#getprovider)

#### Defined in

mint-sdk-js/src/strategies/NodeStrategy.ts:18

___

### getWalletInfo

▸ **getWalletInfo**(): `Promise`<`never`\>

#### Returns

`Promise`<`never`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[getWalletInfo](../interfaces/strategies.WalletStrategy#getwalletinfo)

#### Defined in

mint-sdk-js/src/strategies/NodeStrategy.ts:13

___

### isWalletConnect

▸ **isWalletConnect**(): `Promise`<`never`\>

#### Returns

`Promise`<`never`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[isWalletConnect](../interfaces/strategies.WalletStrategy#iswalletconnect)

#### Defined in

mint-sdk-js/src/strategies/NodeStrategy.ts:8

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

[WalletStrategy](../interfaces/strategies.WalletStrategy).[offAccountsChange](../interfaces/strategies.WalletStrategy#offaccountschange)

#### Defined in

mint-sdk-js/src/strategies/NodeStrategy.ts:50

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

[WalletStrategy](../interfaces/strategies.WalletStrategy).[offConnect](../interfaces/strategies.WalletStrategy#offconnect)

#### Defined in

mint-sdk-js/src/strategies/NodeStrategy.ts:42

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

[WalletStrategy](../interfaces/strategies.WalletStrategy).[offDisconnect](../interfaces/strategies.WalletStrategy#offdisconnect)

#### Defined in

mint-sdk-js/src/strategies/NodeStrategy.ts:58

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

[WalletStrategy](../interfaces/strategies.WalletStrategy).[onAccountsChange](../interfaces/strategies.WalletStrategy#onaccountschange)

#### Defined in

mint-sdk-js/src/strategies/NodeStrategy.ts:46

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

[WalletStrategy](../interfaces/strategies.WalletStrategy).[onConnect](../interfaces/strategies.WalletStrategy#onconnect)

#### Defined in

mint-sdk-js/src/strategies/NodeStrategy.ts:38

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

[WalletStrategy](../interfaces/strategies.WalletStrategy).[onDisconnect](../interfaces/strategies.WalletStrategy#ondisconnect)

#### Defined in

mint-sdk-js/src/strategies/NodeStrategy.ts:54
