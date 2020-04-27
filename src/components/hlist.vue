<template>
  <div class="hlist">
    <div class="hlist-item" v-for="item in list" :key="item.a">
      <div class="hlist-t">{{item.a}}</div>
      <div>{{item.b}}</div>
    </div>
   
   
  </div>
</template>

<script>
var list=[{a:'ceshi',b:123},{a:'hello',b:222},{a:'test',b:345},{a:'demo',b:666}]
export default {
  name: 'hlist',
  data:function(){
    return {
      list:list

    }
  }
}
</script>


<style scoped>
.hlist-item{
  padding:10px;
  display:flex;
  justify-content: space-between;
}
.hlist-t{
  font-weight:600;
  color:#4173ff;
  font-size:20px;
}
</style>
