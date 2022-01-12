---
id: "strategies.FortmaticStrategy"
title: "Class: FortmaticStrategy"
sidebar_label: "FortmaticStrategy"
custom_edit_url: null
---

[strategies](../modules/strategies).FortmaticStrategy

## Implements

- [`WalletStrategy`](../interfaces/strategies.WalletStrategy)

## Constructors

### constructor

• **new FortmaticStrategy**(`walletSetting`, `devOption?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletSetting` | [`WalletSetting`](../modules/#walletsetting) |
| `devOption?` | `Object` |
| `devOption.backendUrl?` | `string` |
| `devOption.jsonRPCUrl?` | `string` |

#### Defined in

mint-sdk-js/src/strategies/FortmaticStrategy.ts:13

## Properties

### eventAccountsChangeCallbacks

• `Private` **eventAccountsChangeCallbacks**: (`accounts`: `string`[]) => `any`[] = `[]`

#### Defined in

mint-sdk-js/src/strategies/FortmaticStrategy.ts:11

___

### eventConnectCallbacks

• `Private` **eventConnectCallbacks**: () => `any`[] = `[]`

#### Defined in

mint-sdk-js/src/strategies/FortmaticStrategy.ts:9

___

### eventDisconnectCallbacks

• `Private` **eventDisconnectCallbacks**: () => `any`[] = `[]`

#### Defined in

mint-sdk-js/src/strategies/FortmaticStrategy.ts:10

___

### fortmatic

• `Private` **fortmatic**: `WidgetMode`

#### Defined in

mint-sdk-js/src/strategies/FortmaticStrategy.ts:8

## Methods

### connectWallet

▸ **connectWallet**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[connectWallet](../interfaces/strategies.WalletStrategy#connectwallet)

#### Defined in

mint-sdk-js/src/strategies/FortmaticStrategy.ts:53

___

### disconnectWallet

▸ **disconnectWallet**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[disconnectWallet](../interfaces/strategies.WalletStrategy#disconnectwallet)

#### Defined in

mint-sdk-js/src/strategies/FortmaticStrategy.ts:82

___

### emitAccountChange

▸ `Private` **emitAccountChange**(`accounts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accounts` | `string`[] |

#### Returns

`void`

#### Defined in

mint-sdk-js/src/strategies/FortmaticStrategy.ts:119

___

### emitConnect

▸ `Private` **emitConnect**(): `void`

#### Returns

`void`

#### Defined in

mint-sdk-js/src/strategies/FortmaticStrategy.ts:123

___

### emitDisconnect

▸ `Private` **emitDisconnect**(): `void`

#### Returns

`void`

#### Defined in

mint-sdk-js/src/strategies/FortmaticStrategy.ts:127

___

### getConnectedNetworkId

▸ **getConnectedNetworkId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[getConnectedNetworkId](../interfaces/strategies.WalletStrategy#getconnectednetworkid)

#### Defined in

mint-sdk-js/src/strategies/FortmaticStrategy.ts:58

___

### getProvider

▸ **getProvider**(): `Web3Provider`

#### Returns

`Web3Provider`

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[getProvider](../interfaces/strategies.WalletStrategy#getprovider)

#### Defined in

mint-sdk-js/src/strategies/FortmaticStrategy.ts:48

___

### getWalletInfo

▸ **getWalletInfo**(): `Promise`<{ `address`: `string` ; `balance`: `BigNumber` ; `unit`: ``"MATIC"`` \| ``"ETH"``  }\>

#### Returns

`Promise`<{ `address`: `string` ; `balance`: `BigNumber` ; `unit`: ``"MATIC"`` \| ``"ETH"``  }\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[getWalletInfo](../interfaces/strategies.WalletStrategy#getwalletinfo)

#### Defined in

mint-sdk-js/src/strategies/FortmaticStrategy.ts:31

___

### isWalletConnect

▸ **isWalletConnect**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[isWalletConnect](../interfaces/strategies.WalletStrategy#iswalletconnect)

#### Defined in

mint-sdk-js/src/strategies/FortmaticStrategy.ts:27

___

### offAccountsChange

▸ **offAccountsChange**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`accounts`: `string`[]) => `any` |

#### Returns

`void`

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[offAccountsChange](../interfaces/strategies.WalletStrategy#offaccountschange)

#### Defined in

mint-sdk-js/src/strategies/FortmaticStrategy.ts:91

___

### offConnect

▸ **offConnect**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `any` |

#### Returns

`void`

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[offConnect](../interfaces/strategies.WalletStrategy#offconnect)

#### Defined in

mint-sdk-js/src/strategies/FortmaticStrategy.ts:70

___

### offDisconnect

▸ **offDisconnect**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `any` |

#### Returns

`void`

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[offDisconnect](../interfaces/strategies.WalletStrategy#offdisconnect)

#### Defined in

mint-sdk-js/src/strategies/FortmaticStrategy.ts:107

___

### onAccountsChange

▸ **onAccountsChange**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`accounts`: `string`[]) => `any` |

#### Returns

`void`

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[onAccountsChange](../interfaces/strategies.WalletStrategy#onaccountschange)

#### Defined in

mint-sdk-js/src/strategies/FortmaticStrategy.ts:87

___

### onConnect

▸ **onConnect**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `any` |

#### Returns

`void`

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[onConnect](../interfaces/strategies.WalletStrategy#onconnect)

#### Defined in

mint-sdk-js/src/strategies/FortmaticStrategy.ts:66

___

### onDisconnect

▸ **onDisconnect**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `any` |

#### Returns

`void`

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[onDisconnect](../interfaces/strategies.WalletStrategy#ondisconnect)

#### Defined in

mint-sdk-js/src/strategies/FortmaticStrategy.ts:103
