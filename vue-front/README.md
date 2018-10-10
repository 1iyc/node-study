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



about axios...

Study Making Tree

fields: [         {key: 'example', label: '예문', sortable: true},         {key: 'delete', label: '', thStyle: {width:'5%'}}       ],       example: null,       exampleClass: null,       currentPage: 1,       perPage: 10,       totalRows: 0,       pageOptions: [5, 10, 15, 20, 25, 30]


@click.stop="delExample(row.item, row.index, $event.target)

delExample (item, index, button) {
>>>>>>> origin/master

@keyup.native.enter=

Using method: this.method();

SELECT D.id, D.words, COALESCE(D.parent_id, 0) parent_id FROM domain D

data: [],
      loadData: function(oriNode, resolve) {
              var id = oriNode.data.id ? oriNode.data.id : 0;        
	              setTimeout(() => {
		                this.$http.get('/api/' + id).
				          then((res) => {
					              resolve(res.data);
						                });
								          }, 500)
									        },


#custom scss

change order for overriding

// Import styles
@import "~@coreui/coreui/scss/coreui";

// If you want to override variables do it here
@import "variables";

.btn-outline-primary:hover {
    background-color: #eb384c;
    border-color: #eb384c;
    color: #fff;
}



var vm = this;
in function use vm.~
