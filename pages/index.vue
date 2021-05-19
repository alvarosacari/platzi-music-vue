<template>
  <v-container class="pa-4">
    <ArtistsDataIterator />
    <pre>TEST 1</pre>
  </v-container>
</template>

<script>
import ArtistsDataIterator from '~/components/artists/DataIterator'

export default {
  components: { ArtistsDataIterator }
}
</script>
