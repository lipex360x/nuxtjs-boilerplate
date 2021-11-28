<template>
  <section class="atoms-button">
    <button>{{ text }}</button>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: { type: String, required: true }
  }
})
</script>

<style lang="scss" scoped></style>
