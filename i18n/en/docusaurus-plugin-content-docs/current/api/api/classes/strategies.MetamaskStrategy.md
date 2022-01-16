---
id: "strategies.MetamaskStrategy"
title: "Class: MetamaskStrategy"
sidebar_label: "strategies.MetamaskStrategy"
custom_edit_url: null
---

[strategies](../modules/strategies).MetamaskStrategy

## Implements

- [`WalletStrategy`](../interfaces/strategies.WalletStrategy)

## Constructors

### constructor

• **new MetamaskStrategy**()

#### Defined in

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:14](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L14)

## Properties

### eventAccountsChangeCallbacks

• `Private` **eventAccountsChangeCallbacks**: (`accounts`: `string`[]) => `any`[] = `[]`

#### Defined in

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:8](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L8)

___

### eventConnectCallbacks

• `Private` **eventConnectCallbacks**: () => `any`[] = `[]`

#### Defined in

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:6](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L6)

___

### eventDisconnectCallbacks

• `Private` **eventDisconnectCallbacks**: () => `any`[] = `[]`

#### Defined in

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:7](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L7)

___

### metamaskProvider

• `Private` **metamaskProvider**: `Web3Provider`

#### Defined in

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:5](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L5)

## Methods

### connectWallet

▸ **connectWallet**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[connectWallet](../interfaces/strategies.WalletStrategy#connectwallet)

#### Defined in

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:32](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L32)

___

### disconnectWallet

▸ **disconnectWallet**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[disconnectWallet](../interfaces/strategies.WalletStrategy#disconnectwallet)

#### Defined in

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:66](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L66)

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

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:119](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L119)

___

### emitConnect

▸ `Private` **emitConnect**(): `void`

#### Returns

`void`

#### Defined in

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:123](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L123)

___

### emitDisconnect

▸ `Private` **emitDisconnect**(): `void`

#### Returns

`void`

#### Defined in

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:127](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L127)

___

### getConnectedNetworkId

▸ **getConnectedNetworkId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[getConnectedNetworkId](../interfaces/strategies.WalletStrategy#getconnectednetworkid)

#### Defined in

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:39](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L39)

___

### getProvider

▸ **getProvider**(): `Web3Provider`

#### Returns

`Web3Provider`

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[getProvider](../interfaces/strategies.WalletStrategy#getprovider)

#### Defined in

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:57](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L57)

___

### getWalletInfo

▸ **getWalletInfo**(): `Promise`<{ `address`: `string` ; `balance`: `BigNumber` ; `unit`: ``"MATIC"`` \| ``"ETH"``  }\>

#### Returns

`Promise`<{ `address`: `string` ; `balance`: `BigNumber` ; `unit`: ``"MATIC"`` \| ``"ETH"``  }\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[getWalletInfo](../interfaces/strategies.WalletStrategy#getwalletinfo)

#### Defined in

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:43](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L43)

___

### isWalletConnect

▸ **isWalletConnect**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[WalletStrategy](../interfaces/strategies.WalletStrategy).[isWalletConnect](../interfaces/strategies.WalletStrategy#iswalletconnect)

#### Defined in

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:61](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L61)

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

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:75](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L75)

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

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:91](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L91)

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

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:107](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L107)

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

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:71](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L71)

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

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:87](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L87)

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

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:103](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L103)

___

### checkExistsWeb3ProviderInWindow

▸ `Static` **checkExistsWeb3ProviderInWindow**(): `boolean`

#### Returns

`boolean`

#### Defined in

[mint-sdk-js/src/strategies/MetamaskStrategy.ts:10](https://github.com/KyuzanInc/mint-sdk-js/blob/116138b/src/strategies/MetamaskStrategy.ts#L10)
