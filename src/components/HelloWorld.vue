<template>
  <div class="top">
    <div class="image-block">
      <img alt="Vue logo" src="../assets/headshot.jpeg" />
    </div>
    <div class="name-block">
      <div class="first-name">Khulan</div>
      <div class="last-name">Myagmardorj</div>
      <div class="name-line" />
    </div>
    <div class="intro-block">
      <div class="title">Hello.</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  background-color: #050505;
  color: #fff;
  min-height: 100vh;
  overflow: auto;
}

.image-block {
  z-index: 1;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
}

.image-block img {
  height: 100vh;
}

.name-block {
  position: absolute;
  bottom: 3rem;
  left: 6rem;
  z-index: 2;
  font-size: 5rem;
  line-height: 5rem;
}

.name-block .first-name {
  font-weight: bold;
}

.name-block .last-name {
  font-family: Avenir Light, Helvetica, Arial, sans-serif;
}

.name-line {
  border: 1px solid #fed23e;
  border-radius: 2px;
  margin: 1.5rem 0;
  width: 8rem;
}

.intro-block {
  position: absolute;
  top: 5rem;
  right: 6rem;
  z-index: 2;
}

.intro-block .title {
  font-weight: bold;
  font-size: 1rem;
  color: #fed23e;
}

h1 {
  margin: 0.5rem 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
