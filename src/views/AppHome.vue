<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {gets} from "@/api/60s/index.js";

const data = reactive({
  dailyData:[]
})
let loading = ref(false)
onMounted(()=>{
  loading.value = true;
  gets().then(res=>{
    data.dailyData = res.data
  }).finally(()=>{
    loading.value = false;
  })
})
</script>

<template>
<section>
  <div class="container">
    <span v-if="loading">加载中...</span>
    <ul>
      <li
          v-for="(item,index) of data.dailyData"
          :key="index"
      >
        {{item}}
      </li>
    </ul>
  </div>
</section>
</template>

<style scoped lang="scss">
section{
  box-sizing: border-box;
  display: grid;
}
.container{
  box-sizing: border-box;
  place-self: center;
  width: 1226px;
  padding: 2rem 0;
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
    >li:not(:last-child){
      margin-bottom: 1.15rem;
    }
  }
}
@media (max-width: 1226px) {
  .container{
    width: 100%;
    padding: 1rem 0.5rem;
  }
}
</style>
