<template>
  <div class="header">
    <div class="bg" :style="styleObject"></div>
    <div class="sell-info">
      <img :src="seller.avatar" alt="商家logo"/>
      <div class="content">
        <h3><span class="brand"></span><span>{{seller.name}}</span></h3>
        <p>
          <span class="description">{{seller.description}}</span> /
          平均<span class="deliveryTime">{{seller.deliveryTime}}</span>分钟
          满<span class="sellCount">{{seller.sellCount}}</span>免外送费
        </p>
        <div class="supports-info" v-if="seller.supports">
          <span :class="classObject"></span>
          <span class="supports">{{seller.supports[0].description}}</span>
        </div>

      </div>

    </div>
    <div class="bulletin">
      <span>{{seller.bulletin}}</span>
    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      seller: {
        type: Object

      }
    },
    computed: {
      styleObject: function () {
        return {
          backgroundImage: 'url(' + this.seller.avatar + ')',
          backgroundSize: '100%'
        }
      },
      classObject: function () {
        return [
          'icon',
          'icon' + this.seller.supports[0].type
        ]
      }
    }
  }
</script>

<style>
  .header{
    text-align: left;
    color: #fff;
    background: rgba(0,0,0,.5);
    position: relative;
    overflow: hidden;
  }
  .header .bg{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: blur(10px);
    z-index: -1;
  }
  .sell-info{
    display: flex;
    padding: 2.4rem 1.2rem 1.8rem 2.4rem;
  }
  .sell-info img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: .2rem;
  }
  .sell-info .content{
    flex: 1;
    margin: 0.2rem 0 0 1.6rem;
  }
  .sell-info h3{
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }
  .sell-info h3 span{
    vertical-align: middle;
  }
  .sell-info p{
    font-size: 1.2rem;
    margin-bottom: 1rem;
    line-height: 1.2rem;
  }
  .supports-info{
    font-size: 1rem;
    font-weight: 200;
    line-height: 1.2rem;
  }
  .supports-info span{
    vertical-align: middle;
  }
  .supports-info .icon{
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    margin-right: .4rem;
  }
  .brand{
    display: inline-block;
    width: 3rem;
    height: 1.8rem;
    margin-right: 0.6rem;
  }
  .bulletin{
    text-align: justify;
    height: 2.8rem;
    line-height: 2.8rem;
    background: rgba(7,17,27,.2);
    font-size: 1rem;
    padding: 0 1.2rem;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    -o-text-overflow:ellipsis;
  }
  .bulletin span{
    vertical-align: middle;
  }
  .bulletin:before{
    content: "";
    display: inline-block;
    width: 2.2rem;
    height: 1.2rem;
    vertical-align: middle;
    margin-right: .4rem;
  }
  @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2) {
    .brand{
      background: url("img/brand@2x.png") no-repeat center;
      background-size: 100%;
    }
    .bulletin:before{
      background: url("img/bulletin@2x.png") no-repeat center;
      background-size: 100%;
    }
    .supports-info .icon0{
      background: url("img/decrease_1@2x.png") no-repeat center;
      background-size: 100%;
    }
    .supports-info .icon1{
      background: url("img/discount_1@2x.png") no-repeat center;
      background-size: 100%;
    }
    .supports-info .icon2{
      background: url("img/special_1@2x.png") no-repeat center;
      background-size: 100%;
    }
    .supports-info .icon3{
      background: url("img/invoice_1@2x.png") no-repeat center;
      background-size: 100%;
    }
    .supports-info .icon4{
      background: url("img/guarantee_1@2x.png") no-repeat center;
      background-size: 100%;
    }
  }
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
    .brand{
      background: url("img/brand@3x.png") no-repeat center;
      background-size: 100%;
    }
    .bulletin:before{
      background: url("img/bulletin@3x.png") no-repeat center;
      background-size: 100%;
    }
    .supports-info .icon0{
      background: url("img/decrease_1@3x.png") no-repeat center;
      background-size: 100%;
    }
    .supports-info .icon1{
      background: url("img/discount_1@3x.png") no-repeat center;
      background-size: 100%;
    }
    .supports-info .icon2{
      background: url("img/special_1@3x.png") no-repeat center;
      background-size: 100%;
    }
    .supports-info .icon3{
      background: url("img/invoice_1@3x.png") no-repeat center;
      background-size: 100%;
    }
    .supports-info .icon4{
      background: url("img/guarantee_1@3x.png") no-repeat center;
      background-size: 100%;
    }
  }
</style>
