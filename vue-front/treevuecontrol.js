export default {
  name: 'forms',
  components: {cTable, VJstree},
  data () {
    return {
      examples: [
      ],
      intents: {
        id: null,
        name: null,
        description: null,
        answer: null,
        domain_id: null,
        available: null,
      },
      itemEvents: {
        contextmenu: function (oriNode) {
          console.log('oriNode', oriNode);
          console.log(arguments[2]);
          arguments[2].preventDefault();
          console.log('contextmenu');
        }
      },
      contextMenuShow: false,      
      treeOpened: false,
      selected: [], // Must be an array reference!
      show: true,
      data: [],
      loadData: function(oriNode, resolve) {
        var id = oriNode.data.id ? oriNode.data.id : 0;        
        setTimeout(() => {
          this.$http.get('/api/v1/domain/tree/' + id).
          then((res) => {
            resolve(res.data);
          });
          }, 500)
      },
      searchWord: null,
      searchClass: null,
      domainList: [],      
      openedNode: null,
      selectedNode: {selected: false},
    }
  },
  watch: {
    data: {
      handler (val, oldVal) {
        if (this.openedNode) {
          setTimeout(() => {
            if (this.openedNode[this.openedNode.length - 2]) {
              if (this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).opened = true) {
                setTimeout(() => {
                  if (this.openedNode[this.openedNode.length - 3]) {
                    if (this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 2].id).opened = true) {
                      setTimeout(() => {
                        if (this.openedNode[this.openedNode.length - 4]) {
                          if (this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 2].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 3].id).opened = true) {
                            setTimeout(() => {
                              if (this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 2].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 3].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 4].id).selected = true) {
                                this.selectedNode = this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 2].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 3].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 4].id);
                                this.intents.domain_id = this.selectedNode = this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 2].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 3].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 4].id).id;
                                this.selectedDomain.words = this.selectedNode = this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 2].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 3].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 4].id).text;
                                this.openedNode = null;
                                setTimeout(() => {
                                  this.openedNode = null;
                                }, 500);
                              }
                            }, 500);
                          }
                        } else {                          
                          if (this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 2].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 3].id).selected = true) {
                            this.selectedNode = this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 2].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 3].id);                            
                            this.intents.domain_id = this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 2].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 3].id).id;
                            this.selectedDomain.words = this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 2].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 3].id).text;
                            this.openedNode = null;
                            setTimeout(() => {
                              this.openedNode = null;
                            }, 500);
                          }
                        }
                      }, 500);
                    } else {                      
                      if (this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 2].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 3].id).selected = true) {
                        this.selectedNode  = this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 2].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 3].id);
                        this.intents.domain_id = this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 2].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 3].id).id;
                        this.selectedDomain.words = this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 2].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 3].id).text;
                        this.openedNode = null;
                        setTimeout(() => {
                          this.openedNode = null;
                        }, 500);
                      }
                    }
                  } else {
                    if (this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 2].id).selected = true) {
                      this.selectedNode = this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 2].id);
                      this.intents.domain_id = this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 2].id).id;
                      this.selectedDomain.words = this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).children.find(x => x.id == this.openedNode[this.openedNode.length - 2].id).text;
                      this.openedNode = null;
                      setTimeout(() => {
                        this.openedNode = null;
                      }, 500);
                    }
                  }
                }, 500);
              }            
            } else {              
              this.selectedNode.selected = false;
              this.selectedNode = this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id);
              console.log('this.selectedNode', this.selectedNode);
              if (this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).selected = true) {
                this.selectedNode = this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id);
                this.intents.domain_id = this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).id;
                this.selectedDomain.words = this.data.find(x => x.id == this.openedNode[this.openedNode.length - 1].id).text;
                this.openedNode = null;
                setTimeout(() => {
                  this.openedNode = null;
                }, 500);
              }
            }
          }, 500);
        }        
      },
      deep: true,
    }
  },
  methods: {
    click () {
      // do nothing
    },
    itemClick (node) {
      this.openedNode = null;
      this.intents.domain_id = node.model.id;
      this.selectedNode = node.model;
    },
    intentMod () {
      this.$http.put('/api/v1/intent/' + this.$route.params.id, {
        name : this.intents.name,
        description : this.intents.description,
        answer : this.intents.answer,
        domain_id: this.intents.domain_id,
        available: this.intents.available
      })
      .then((res) => {
        alert("수정 완료!");
      });
    },
    backPage () {
      this.$router.push("/intents");
    },
    searchDomain () {
      if (this.searchWord) {
        this.$http.get('/api/v1/intent', {
          params: {
            domain: this.searchWord,
          }
        })
        .then((res) => {
          this.domainList = res.data;
        })
        this.$refs.modalSearch.show();
      } else {
        searchClass = "form-control is-invalid";
      }
    },
    openDomain (id) {
      this.treeOpened = false;
      this.openedNode = null;
      this.$http.get('/api/v1/domain/toRoot/' + id)
      .then((res) => {  
        this.openedNode = res.data;
        this.data.find(x => x.id == res.data[res.data.length - 1].id).opened = true;
        console.log('this.openedNode', this.openedNode);
        this.$refs.modalSearch.hide();
        this.selectedNode.selected = false;
      })
    }
  },
  created () {    
    this.treeOpened = false;
    this.openedNode = null;
    this.$http.get('/api/v1/intent/' + this.$route.params.id)
    .then((response) => {
      this.examples = response.data.examples;
      this.intents = response.data.intents;
      this.$http.get('/api/v1/domain/toRoot/' + response.data.intents.domain_id)      
      .then((res) => {
        this.openedNode = res.data;
      })
    });
  }
}
</script>