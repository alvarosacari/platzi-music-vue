<template>
  <v-text-field
    :value="search"
    class="my-2"
    append-icon="mdi-magnify"
    label="Buscar canción"
    single-line
    outlined
    hide-details
    @keyup="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  model: {
    prop: 'search',
    event: 'input'
  },
  props: {
    search: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
