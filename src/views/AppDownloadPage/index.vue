<template>
    <section>
        <div class="container">
          <a href="/public/opal.apk" target="_blank" rel="noopener noreferrer">
            点击下载（适用于安卓7以上）
          </a>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>
<script lang="ts">
export default {
  name: 'AppDownloadPage',
}
</script>

<style scoped>
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
  padding: 2rem 0;
}
@media (max-width: 1226px) {
  .container{
    width: 100%;
    padding: 1rem 0.5rem;
  }
}
</style>