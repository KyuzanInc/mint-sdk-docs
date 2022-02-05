---
id: "strategies.FortmaticStrategy"
title: "Class: FortmaticStrategy"
sidebar_label: "FortmaticStrategy"
custom_edit_url: null
---

[strategies](../modules/strategies.md).FortmaticStrategy

## Implements

- [`WalletStrategy`](../interfaces/strategies.WalletStrategy.md)

## Constructors

### constructor

• **new FortmaticStrategy**(`walletSetting`, `devOption?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletSetting` | [`WalletSetting`](../modules/.md#walletsetting) |
| `devOption?` | `Object` |
| `devOption.backendUrl?` | `string` |
| `devOption.jsonRPCUrl?` | `string` |

#### Defined in

[mint-sdk-js/src/strategies/FortmaticStrategy.ts:13](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L13)

## Properties

### eventAccountsChangeCallbacks

• `Private` **eventAccountsChangeCallbacks**: (`accounts`: `string`[]) => `any`[] = `[]`

#### Defined in

[mint-sdk-js/src/strategies/FortmaticStrategy.ts:11](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L11)

___

### eventConnectCallbacks

• `Private` **eventConnectCallbacks**: () => `any`[] = `[]`

#### Defined in

[mint-sdk-js/src/strategies/FortmaticStrategy.ts:9](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L9)

___

### eventDisconnectCallbacks

• `Private` **eventDisconnectCallbacks**: () => `any`[] = `[]`

#### Defined in

[mint-sdk-js/src/strategies/FortmaticStrategy.ts:10](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L10)

___

### fortmatic

• `Private` **fortmatic**: `WidgetMode`

#### Defined in

[mint-sdk-js/src/strategies/FortmaticStrategy.ts:8](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L8)

## Methods

### connectWallet

▸ **connectWallet**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[connectWallet](../interfaces/strategies.WalletStrategy.md#connectwallet)

#### Defined in

[mint-sdk-js/src/strategies/FortmaticStrategy.ts:53](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L53)

___

### disconnectWallet

▸ **disconnectWallet**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[disconnectWallet](../interfaces/strategies.WalletStrategy.md#disconnectwallet)

#### Defined in

[mint-sdk-js/src/strategies/FortmaticStrategy.ts:82](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L82)

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

[mint-sdk-js/src/strategies/FortmaticStrategy.ts:119](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L119)

___

### emitConnect

▸ `Private` **emitConnect**(): `void`

#### Returns

`void`

#### Defined in

[mint-sdk-js/src/strategies/FortmaticStrategy.ts:123](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L123)

___

### emitDisconnect

▸ `Private` **emitDisconnect**(): `void`

#### Returns

`void`

#### Defined in

[mint-sdk-js/src/strategies/FortmaticStrategy.ts:127](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L127)

___

### getConnectedNetworkId

▸ **getConnectedNetworkId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[getConnectedNetworkId](../interfaces/strategies.WalletStrategy.md#getconnectednetworkid)

#### Defined in

[mint-sdk-js/src/strategies/FortmaticStrategy.ts:58](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L58)

___

### getProvider

▸ **getProvider**(): `Web3Provider`

#### Returns

`Web3Provider`

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[getProvider](../interfaces/strategies.WalletStrategy.md#getprovider)

#### Defined in

[mint-sdk-js/src/strategies/FortmaticStrategy.ts:48](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L48)

___

### getWalletInfo

▸ **getWalletInfo**(): `Promise`<{ `address`: `string` ; `balance`: `BigNumber` ; `unit`: ``"MATIC"`` \| ``"ETH"``  }\>

#### Returns

`Promise`<{ `address`: `string` ; `balance`: `BigNumber` ; `unit`: ``"MATIC"`` \| ``"ETH"``  }\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[getWalletInfo](../interfaces/strategies.WalletStrategy.md#getwalletinfo)

#### Defined in

[mint-sdk-js/src/strategies/FortmaticStrategy.ts:31](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L31)

___

### isWalletConnect

▸ **isWalletConnect**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[isWalletConnect](../interfaces/strategies.WalletStrategy.md#iswalletconnect)

#### Defined in

[mint-sdk-js/src/strategies/FortmaticStrategy.ts:27](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L27)

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

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[offAccountsChange](../interfaces/strategies.WalletStrategy.md#offaccountschange)

#### Defined in

[mint-sdk-js/src/strategies/FortmaticStrategy.ts:91](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L91)

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

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[offConnect](../interfaces/strategies.WalletStrategy.md#offconnect)

#### Defined in

[mint-sdk-js/src/strategies/FortmaticStrategy.ts:70](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L70)

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

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[offDisconnect](../interfaces/strategies.WalletStrategy.md#offdisconnect)

#### Defined in

[mint-sdk-js/src/strategies/FortmaticStrategy.ts:107](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L107)

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

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[onAccountsChange](../interfaces/strategies.WalletStrategy.md#onaccountschange)

#### Defined in

[mint-sdk-js/src/strategies/FortmaticStrategy.ts:87](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L87)

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

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[onConnect](../interfaces/strategies.WalletStrategy.md#onconnect)

#### Defined in

[mint-sdk-js/src/strategies/FortmaticStrategy.ts:66](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L66)

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

[WalletStrategy](../interfaces/strategies.WalletStrategy.md).[onDisconnect](../interfaces/strategies.WalletStrategy.md#ondisconnect)

#### Defined in

[mint-sdk-js/src/strategies/FortmaticStrategy.ts:103](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/FortmaticStrategy.ts#L103)
