<template>
  <Loading v-if="isLoading" />
  <Modal v-if="currentModal" :componentName="currentModal" />
  <router-view/>
</template>

<script>
import { mapState } from 'vuex'
import Loading from '@/components/Loading.vue'
import Modal from '@/components/ModalMain.vue'

export default {
  components: {
    Loading,
    Modal
  },
  computed: {
    ...mapState('loading', ['isLoading']),
    ...mapState('modal', ['currentModal'])
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
