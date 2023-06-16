<script setup lang="ts">
</script>

<template>
    <header>
      <div class="container">
        <router-link to="/" class="logo">
          <img src="@/assets/opal.png"  alt="opal"/>
        </router-link>
        <nav>
          <span @click="$router.push('/dailySentence')">
            每日一言
          </span>
          <span @click="$router.push('/about')">关于我们</span>
        </nav>
      </div>
    </header>
</template>

<style scoped lang="scss">
header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  box-shadow: 0 0 6px rgba(0, 0, 0, .12);
  background-color: var(--white-color);
  z-index: 99;
  box-sizing: border-box;
}
.container{
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1226px;
  height: 100%;
  .logo{
    cursor: pointer;
    height: 100%;
    img{
      height: 100%;
    }
  }
  nav{
    display: flex;
    cursor: pointer;
    span{
      box-sizing: border-box;
    }
    span:hover{
      color: var(--green);
    }
    span:not(:last-child){
      margin-right: 10px;
    }
  }
}
@media (max-width: 1226px) {
  .container{
    width: 100%;
    padding: 0 0.5rem;
  }
}
</style>
