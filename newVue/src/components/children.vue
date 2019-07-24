<!-- 组件说明 -->
<template>
  <div class="content">
    <h1>子组件</h1>
    <p>{{name}}</p>
    <p>{{foo}}</p>
    <button @click="send">子传父</button>
    <button @click="Bus()">兄弟传值</button><br>
    <button @click="updateFoo">点击改变</button>
  </div>
</template>

<script>
import bus from "../assets/bus";
export default {
  name: "children",
  data() {
    return {
      clild: "child",
      bus: "兄弟"
    };
  },
  computed: {},
  methods: {
    send() {
      this.$emit("childByValue", this.clild);
    },
    Bus() {
      bus.$emit("bus", this.bus);
    },
    updateFoo() {
      this.$emit("update:foo", "foo被子组件改变啦");
    }
  },
  props: ["name", "foo"]
};
</script>

<style scoped>
</style>