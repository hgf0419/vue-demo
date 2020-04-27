<template>
  <div id="app">
    <mt-header title="首页">
      <mt-button icon="back" slot="left">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>


    <hlist></hlist>
  </div>
</template>

<script>

import hlist from './components/hlist.vue'

export default {
  name: 'App',
  components: {
    hlist
  }
}
</script>

<style>
body{
  padding:0;
  margin:0;
}
</style>
