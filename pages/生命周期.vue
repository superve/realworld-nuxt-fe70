<template>
  <div>
    <h1>首页</h1>
    <p>{{ foo }}</p>
    <p>{{ bar }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      foo: 'hello'
    }
  },
  
  /**
   * SEO，在这里发请求拿数据
   * 这里不能访问 Vue 实例 this
   * 这里只需要把请求得到的数据放到一个对象中并返回，对象中的数据会和 data 中的数据合并起来以供使用
   */
  asyncData () {
    console.log('=========== asyncData ===========\n\n\n')
    return {
      bar: 'world'
    }
  },
  beforeCreate () {
    console.log('=========== beforeCreate ===========\n\n\n')
  },
  created () {
    console.log('=========== created ===========\n\n\n')
  },
  beforeMount () {
    console.log('=========== beforeMount ===========\n\n\n')
  },
  /**
   * 不需要SEO，可以把请求写到这里
   */
  mounted () {
    console.log('=========== mounted ===========\n\n\n')
  },
  beforeUpdate () {
    console.log('=========== beforeUpdate ===========\n\n\n')
  },
  updated () {
    console.log('=========== updated ===========\n\n\n')
  },
  activated () {
    console.log('=========== activated ===========\n\n\n')
  },
  deactivated () {
    console.log('=========== deactivated ===========\n\n\n')
  },
  beforeDestroy () {
    console.log('=========== beforeDestroy ===========\n\n\n')
  },
  destroyed () {
    console.log('=========== destroyed ===========\n\n\n')
  },
}
</script>

<style>

</style>
