---
id: fetch-api
title: Fetch
---

This component accepts the props described below and can override all of the props described on [CroodsProvider](/docs/croods-provider-api).

| Property                        |     Type      | Required |                        Default                        |
| ------------------------------- | :-----------: | :------: | :---------------------------------------------------: |
| [name](#name)                   |    String     |    ✔     |                           -                           |
| [stateId](#stateid)             | String/number |          |                           -                           |
| [path](#path)                   |    String     |          |                           -                           |
| [id](#id)                       |    String     |          |                           -                           |
| [query](#query)                 |    Object     |          |                           -                           |
| [render](#render)               |     Func      |    ✔     |                           -                           |
| [renderError](#rendererror)     |     Func      |          | error => <div style={{ color: 'red' }}>{error}\</div> |
| [renderEmpty](#renderempty)     |     Func      |          |                      () => null                       |
| [renderLoading](#renderloading) |     Func      |          |             () => \<div>Loading...\</div>             |

## name

Read more on about it on [useCroods hook API](/docs/use-croods-api#name).

#### Usage:

```
<Fetch
  name="todos"
  render={list => list.map(item => <div />)}
/>
// GET /todos
// state = { todos: { list: [...], fetchingList: false, ... } }
```

## path

Read more on about it on [useCroods hook API](/docs/use-croods-api#path).

#### Usage:

```
<Fetch
  name="todos"
  id={1}
  path="foo/bar"
  render={info => <div />}
/>
// GET /foo/bar
```

## id

Read more on about it on [useCroods hook API](/docs/use-croods-api#id).

#### Usage:

```
<Fetch
  name="todos"
  id={1}
  render={info => <div />}
/>
// GET /todos/1
// state = { todos: { info: {...}, fetchingInfo: false, ... } }
```

## stateId

Read more on about it on [useCroods hook API](/docs/use-croods-api#stateid).

#### Usage:

```
<Fetch
  name="todos"
  stateId="user"
  render={list => list.map(item => <div />)}
/>
// GET /todos
// state = { todos@user: { list: [...], fetchingList: false, ... } }
```

## query

Read more on about it on [useCroods hook API](/docs/use-croods-api#query).

#### Usage:

```
<Fetch
  name="todos"
  query={{ page: 2, tags: ['red', 'yellow'] }}
  render={list => list.map(item => <div />)}
/>
// GET /todos?page=2&tags[]=red&tags[]=yellow
```

## render

## renderError

## renderEmpty

## renderLoading