<script setup lang="ts">

</script>

<template>
<section>
  <div class="container">
    <h1>关于我们</h1>
    <p>Opal是一个开源网站，启发自原子阅读</p>
    <p>每日60s新闻接口学习自 <a href="https://github.com/vikiboss/60s">https://github.com/vikiboss/60s</a></p>
    <p>每日一言接口学习自 <a href="https://developer.hitokoto.cn/sentence">https://developer.hitokoto.cn/sentence</a></p>
    <p>搭建自2023年6月10日...</p>
    <p>将使用uni-app构建app...</p>
    <p>买了10年的域名和5年的服务器，好耶！</p>
  </div>
</section>
</template>

<style scoped lang="scss">
section {
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
}
@media (max-width: 1226px) {
  .container{
    width: 100%;
    padding: 0 0.5rem;
  }
}
</style>
