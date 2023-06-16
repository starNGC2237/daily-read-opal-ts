<script setup lang="ts">

</script>

<template>
  <footer>
    <div class="container">
      <ul>
        <li class="logo">
          <a href="https://starlibrary.site">starlibrary</a>
        </li>
        <li>
          © 2023-至今
          <a href="https://starlibrary.site">starlibrary.site</a>
          版权所有
        </li>
        <li>
          本网站仅供学习使用
        </li>
        <li>
          <a href="https://beian.miit.gov.cn">ICP证：苏ICP备2023019228号</a>
        </li>
        <li>
          <a href="https://www.beian.gov.cn/portal/index.do" class="img-box">
            <img src="@/assets/beian.png" alt="备案"/>苏公网安备 32021402001231号
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@media (max-width: 1226px) {
  footer {
    >.container {
      width: 100%;
      padding: 0.5rem;
    }
  }
}
footer{
  display: grid;
  background-color: #333;
  color: #c0c0c0;
  box-sizing: border-box;
}
.container{
  place-self: center;
  width: 1226px;
  height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  ul{
    margin: 0;
    padding: 0;
    list-style: none;
    li:not(:first-child){
      margin-top: 10px;
    }
  }
  a{
    color: #c0c0c0;
    text-decoration: none;
  }
  .logo{
    font-size: 24px;
    margin: 0 10px 0 0;
  }
}
.img-box{
  display: flex;
  align-items: center;
  img{
    width: 20px;
    height: 20px;
    margin-right: 8px;
    line-height: 0;
    display: block;
  }
}
</style>
