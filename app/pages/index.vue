<script setup lang="ts">
import { defineAbility } from 'nuxt-authorization/utils'

const createProduct = defineAbility(() => {
  console.log("this is createProduct")
  return true
})
</script>

<template>
  <Can :ability="createProduct">can you see this? </Can>
</template>
