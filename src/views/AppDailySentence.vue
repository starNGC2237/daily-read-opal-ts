<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {getSentence} from "@/api/sentence/index.js";
interface Data {
  hitokoto?: string;
  from_who?: string;
  from?: string;
  // 其他属性
}
let data = reactive<Data>({})
let loading = ref(false)
onMounted(()=>{
  loading.value = true;
  getSentence().then((res:any)=>{
    data = res
  }).finally(()=>{
    loading.value = false;
  })
})
</script>

<template>
<section>
  <div class="container">
    <h1>每日一言</h1>
    <span v-if="loading">加载中...</span>
    <q v-if="!loading && data.hitokoto">{{data.hitokoto}}</q>
    <span class="end" v-if="!loading && data.hitokoto">——《{{data.from}}》&nbsp;{{data.from_who}}</span>
  </div>
  
</section>
</template>

<style scoped lang="scss">
section{
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.container {
  display: flex;
  flex-direction: column;
  width: 1226px;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 1rem;
  .end{
    width: 100%;
    text-align: end;
  }
}
@media (max-width: 1226px) {
  .container{
    width: 100%;
    padding: 0 0.5rem;
  }
}
</style>
