<template>
  <section class="templates-home">
    <h1>Nuxt Boilerplate</h1>
    <p>{{ $message }}</p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { sample } from '@/store'

export default Vue.extend({
  computed: {
    $message(): string {
      return sample.$message
    }
  }
})
</script>

<style lang="scss" scoped>
.templates-home {
  // colorPalette.scss
  color: color(primary);

  // breakpoints.css
  @include screen(small) {
    color: color(success);
    font-size: 0.8rem;
  }

  text-align: center;
}
</style>
