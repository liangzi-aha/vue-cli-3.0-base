<!-- 组件说明 -->
<template>
    <div class='content'>
        <h1>子组件</h1>
        <p>{{name}}</p>
        <button @click="send">子传父</button>
        <button @click="Bus()">兄弟传值</button>
    </div>
</template>

<script>
    import bus from '../assets/bus';
    export default {
        name:'children',
        data () {
            return {
                clild:'child',
                bus:'兄弟',
            };
        },
        computed: {

        },
        methods: {
            send(){
                this.$emit('childByValue', this.clild)
            },
            Bus(){
                bus.$emit('bus',this.bus)
            }
        },
         props:['name']
    }
</script>

<style scoped>

</style>