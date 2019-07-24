<template>
  <div class="hello">
    <span></span>
    <div>{{this.$store.state.name}}</div>
    <div>{{this.$store.state.num}}</div>
    <div>{{this.$store.state.data}}</div>
    <button @click="mountion()">改变姓氏</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import http from "../http/http.js";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  compute: {
    ...mapMutations(["changeanme"])
  },
  mounted() {
    mapMutations.callCheng;
    console.log(this.$store.state.name);
    // this.$axios.get('/api/get')
    //   .then(res=>{
    //     console.log(res)
    //   })
    http.getNewsList()
    .then(res=>{
      console.log(res)
    })
  },
  methods: {
    mountion() {
      this.$store.commit("changeanme", "李");
      this.$store.dispatch("callAdd", 20);
      this.$store.getters.callCheng;
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello {
  border: solid 1px black;
  & > span {
    display: block;
    width: 10px;
    height: 20px;
    background-color: $bg;
  }
}
</style>
