<template>
  <HomeTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { sample } from '@/store'

export default Vue.extend({
  asyncData() {
    console.log(sample.$message)
  }
})
</script>
