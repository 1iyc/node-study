# vue-front

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

Study Making Tree

fields: [         {key: 'example', label: '예문', sortable: true},         {key: 'delete', label: '', thStyle: {width:'5%'}}       ],       example: null,       exampleClass: null,       currentPage: 1,       perPage: 10,       totalRows: 0,       pageOptions: [5, 10, 15, 20, 25, 30]


@click.stop="delExample(row.item, row.index, $event.target)

delExample (item, index, button) {
