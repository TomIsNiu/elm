<template>
    <div class="shopfoods">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="标签名称" />
      </van-sidebar>
    </div>
</template>

<script>
    export default {
      name: "aShopFood",
      data(){
        return{
          data() {
            return {
              activeKey: 0
            };
          }
        }
      },

    }
</script>

<style scoped>
  .shopfoods{
    width: 100%;
    position: relative;
  }

</style>
