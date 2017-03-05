<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-goods">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-ratings">
        <router-link to="/ratings">评价</router-link>
      </div>
      <!--路由视图-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import vHeader from './components/header/vheader'
export default {
  components: {
    vHeader: vHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  #app .tab{
    border-bottom: 1px solid #ddd;
    line-height: 4rem;
    display: flex;
  }
  #app .tab>div{
    flex: 1;
  }
</style>
