<template>
  <div>
    <el-switch
            v-model="value1"
            on-text=""
            off-text="">
    </el-switch>
    <el-switch
            v-model="value2"
            on-color="#13ce66"
            off-color="#ff4949">
    </el-switch>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        value1: true,
        value2: true
      }
    }
  }
</script>

<style>

</style>
