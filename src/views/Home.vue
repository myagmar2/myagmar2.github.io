<template>
  <div class="home">
    <HomeTopSection msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HomeTopSection from "@/components/HomeTopSection.vue"; // @ is an alias to /src

@Options({
  components: {
    HomeTopSection
  }
})
export default class Home extends Vue {}
</script>
