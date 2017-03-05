<template>
  <div class="header">
    <div class="sell-info">
      <img src="" alt="商家logo"/>
      <div class="content">
        <h3></h3>
        <p>
          <span class="send-type">{{seller.sendType}}</span>
          平均<span class="speed">{{seller.speed}}</span>分钟
          满<span class="money">{{seller.money}}</span>免外送费
        </p>
        <p>
          公告：<span class="ggao">{{seller.ggao}}</span>
        </p>
      </div>
    </div>
    <div class="yhui-info">
      <span class="type"></span>

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'header',
    data () {
      return {
        seller: {
          sendType: '蜂鸟',
          speed: '38',
          money: '80',
          ggao: '欢迎观临!'
        }
      }
    }
  }
</script>

<style>
  .sell-info{
    display: flex;
    width: 100%;
  }
  .sell-info img {
    width: 10rem;
    height: 10rem;
  }
  .sell-info .content{
    flex: 1;
  }
</style>
