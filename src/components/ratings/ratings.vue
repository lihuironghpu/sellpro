<template >
  <div>
    <el-rate
            v-model="value5"
            disabled
            show-text
            text-color="#ff9900"
            text-template="{value}">
    </el-rate>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        value5: 3.7
      }
    }
  }
</script>

<style>

</style>
