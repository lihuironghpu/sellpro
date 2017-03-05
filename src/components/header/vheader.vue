<template>
  <div class="header">
    <div class="sell-info">
      <img src="" alt="商家logo"/>
      <div class="content">
        <h3><span class="brand"></span><span>{{seller.name}}</span></h3>
        <p>
          <span class="description">{{seller.description}}</span>
          平均<span class="deliveryTime">{{seller.deliveryTime}}</span>分钟
          满<span class="sellCount">{{seller.sellCount}}</span>免外送费
        </p>
        <p class="bulletin">
          <!--{{seller.bulletin}}-->
        </p>
      </div>
    </div>
    <div class="supports-info" v-if="seller.supports">
      <span class="supports">{{seller.supports[0].description}}</span>

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      seller: {
        type: Object
      }
    }
  }
</script>

<style>
  .header{
    text-align: left;
  }
  .sell-info{
    display: flex;
    padding: 2.4rem 1.2rem 1.2rem 2.4rem;
  }
  .sell-info img {
    width: 5rem;
    height: 5rem;
  }
  .sell-info .content{
    flex: 1;
    margin-left: 1rem;
  }
  .sell-info h3{
    font-size: 2rem;
  }
  .sell-info h3 span{
    vertical-align: middle;
  }
  .supports-info{
    line-height: 3rem;;
    text-indent: 2.4rem;
  }
  .brand{
    display: inline-block;
    width: 3rem;
    height: 1.8rem;
    margin-right: 1rem;
  }
  .bulletin{
    text-align: justify;
  }
  @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2) {
    .brand{
      background: url("img/brand@2x.png") no-repeat center;
      background-size: 100%;
    }
  }
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
    .brand{
      background: url("img/brand@3x.png") no-repeat center;
      background-size: 100%;
    }
  }
</style>
