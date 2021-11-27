<template>
  <section>
    <h1>Nuxt Boilerplate</h1>
  </section>
</template>

<style lang="scss" scoped>
section {
  // colorPalette.scss
  color: color(primary);

  // breakpoints.css
  @include screen(small) {
    color: color(success);
    font-size: 0.8rem;
  }
}
</style>
