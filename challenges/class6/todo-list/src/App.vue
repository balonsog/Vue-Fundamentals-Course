<template>
  <div id="app">
            <div>
                <input type="text" placeholder="Add an item" v-model="item" />
                <button @click.prevent="addItem">Add</button>
                
                <list :items="items"></list>
            </div>
        </div>
</template>

<script>
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    List
  },  
  data: function () {
        return {
          item: '',
          items: ['item1', 'item2']
        }
    },
    methods: {
        addItem: function () {
            this.items.push(this.item);
            // this.items.unshift(this.item);
            this.item = '';
        }
    }
};
</script>

<style>
input {
    padding: 5px 15px;
    border-radius: 15px;
}
button {
    text-transform: uppercase;
    font-size: 14px;
    margin-left: 5px;
    font-weight: bold;
}
ul {
    margin-top: 15px;
}
li {
    padding: 5px 15px;
    margin-bottom: 5px;
    background: white;
    border-radius: 15px;
    color: #555;
    display: flex;
    justify-content: space-between;
}
</style>
