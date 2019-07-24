<template>
  <div class="hello">
    <span></span>
    <div>{{this.$store.state.name}}</div>
    <div>{{this.$store.state.num}}</div>
    <div>{{this.$store.state.data}}</div>
    <button @click="mountion()">改变姓氏</button>
    <children :name="msg" @childByValue="parent => Bus = parent" :foo.sync="fatherFoo"></children>
    <p>{{childValue}}</p>
    <p>{{Bus}}</p>
    <!-- sync修饰使得父子组件绑定 -->
    <p>{{fatherFoo}}</p>
    <button @click="FatherUpdate()">父组件来点击改变</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import http from "../http/http.js";
import children from "@/components/children";
import bus from "../assets/bus";

export default {
  name: "HelloWorld",
  components: {
    children: children
  },
  data() {
    return {
      msg: "小明",
      childValue: "",
      Bus: "",
      fatherFoo: ""
    };
  },
  compute: {
    ...mapMutations(["changeanme"])
  },
  mounted() {
    mapMutations.callCheng;
    this.$axios.post("/post", { name: "李" }).then(res => {
      console.log(res);
    });
    http.test().then(res => {
      console.log(res);
    });

    bus.$on("bus", res => {
      console.log(res);
      this.Bus = res;
    });
  },
  methods: {
    mountion() {
      this.$store.commit("changeanme", "李");
      this.$store.dispatch("callAdd", 20);
      this.$store.getters.callCheng;
    },
    FatherUpdate() {
      this.fatherFoo = "被父组件改变";
    }
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
