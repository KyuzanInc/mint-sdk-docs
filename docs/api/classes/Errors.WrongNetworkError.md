---
id: "Errors.WrongNetworkError"
title: "Class: WrongNetworkError"
sidebar_label: "Errors.WrongNetworkError"
custom_edit_url: null
---

[Errors](../modules/Errors).WrongNetworkError

ユーザーのウォレットが接続しているネットワークが正しくない
The network connected to the wallet is not correct.

## Hierarchy

- `BaseError`

  ↳ **`WrongNetworkError`**

## Constructors

### constructor

• **new WrongNetworkError**(`e?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `string` |

#### Inherited from

BaseError.constructor

#### Defined in

[mint-sdk-js/src/Errors.ts:2](https://github.com/KyuzanInc/mint-sdk-js/blob/7cbd1d1/src/Errors.ts#L2)

## Properties

### message

• **message**: `string`

#### Inherited from

BaseError.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

___

### name

• **name**: `string`

#### Inherited from

BaseError.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1022

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

BaseError.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1024

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

BaseError.prepareStackTrace

#### Defined in

mint-sdk-js/node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

BaseError.stackTraceLimit

#### Defined in

mint-sdk-js/node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

BaseError.captureStackTrace

#### Defined in

mint-sdk-js/node_modules/@types/node/globals.d.ts:4
