<template>
  <div :class="{ active: active }">
    <v-card class="card" @click="$emit('click')">
      <div class="d-flex flex-no-wrap justify-space-between">
        <div class="d-flex flex-wrap flex-column justify-space-center">
          <v-card-title class="card-title" v-text="name" />
          <v-card-actions>
            <v-btn text x-small>
              Reproducir
            </v-btn>
          </v-card-actions>
        </div>

        <v-avatar class="ma-3" size="125" tile>
          <v-img :src="imageUrl" />
        </v-avatar>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: ''
    },
    active: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  z-index: 1;
}
.card-title {
  font-size: 1.2rem;
  line-height: 1.2;
}
.active {
  position: relative;
  box-shadow: none;
  animation: effect 0.3s ease 0.3s infinite;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 4px;
  }
  &:before {
    background-color: #00ffff;
    z-index: 0;
    animation: effect2 0.3s ease 0.3s infinite;
  }

  &:after {
    background-color: #ff00ff;
    z-index: 0;
    animation: effect2 0.3s ease infinite reverse;
  }
}

@keyframes effect {
  0% {
    transform: translate(-1px, 1px);
  }
  25% {
    transform: translate(-1px, -1px);
  }
  50% {
    transform: translate(1px, 1px);
  }
  75% {
    transform: translate(1px, -1px);
  }
  100% {
    transform: translate(-1px, 1px);
  }
}
@keyframes effect2 {
  0% {
    transform: translate(-2px, 2px);
  }
  25% {
    transform: translate(-2px, -2px);
  }
  50% {
    transform: translate(2px, 2px);
  }
  75% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(-2px, 2px);
  }
}
</style>
