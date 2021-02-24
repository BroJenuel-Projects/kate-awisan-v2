<template>
  <div v-scrollanimation class="Portfolio">
    <div class="item" v-for="(item) in ports" :key="item.img" @click="$router.push('/view/'+item.title)">
      <div class="image">
        <img class="cover__img js-lazy image-loaded" :src="item.img">
      </div>
      <div class="title">
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
import Works from './works'
export default {
  name: 'Portfolio',
  data: () => {
    return {
      ports: Works,
    }
  }
}
</script>
<style lang="scss" src="./style.scss" />
