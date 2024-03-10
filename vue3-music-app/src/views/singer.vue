<template>
  <div class="singer" v-loading="!singers.length">
    <index-list :data="singers" @select="selectSinger"></index-list>
  </div>
  <!-- <div class="singer" v-loading="!singers.length">

    <router-view v-slot="{ Component }">
      <transition appear name="slide">
        <component :is="Component" :data="selectedSinger"/>
      </transition>
    </router-view>
  </div> -->
</template>

<script>
import { getSingerList } from "@/service/singer";
import IndexList from "@/components/index-list/index-list";
// import storage from 'good-storage'
// import { SINGER_KEY } from '@/assets/js/constant'

export default {
  name: "singer",
  components: {
    IndexList,
  },
  data() {
    return {
      singers: [],
      selectedSinger: null,
    };
  },
  async created() {
    const result = await getSingerList();
    this.singers = result.singers;
    console.log("result", result);
  },
};
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>
