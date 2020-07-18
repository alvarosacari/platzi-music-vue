<template>
  <v-card :to="to">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div class="d-flex flex-wrap flex-column justify-space-center">
        <v-card-title class="headline" v-text="name" />
        <v-card-actions>
          <v-btn text x-small>
            Canciones
          </v-btn>
        </v-card-actions>
      </div>
      <v-avatar class="ma-3" size="125" tile>
        <v-img :src="imageUrl" />
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    to: { type: String, default: '' },
    name: { type: String, default: '' },
    imageUrl: { type: String, default: '' }
  }
}
</script>

<style lang="scss" scoped></style>
