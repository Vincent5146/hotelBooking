<template>
  <component :is="componentName"></component>
</template>

<script>
import ModalError from './ModalError.vue'
import ModalSuccess from './ModalSuccess.vue'
import ModalBooking from './ModalBooking.vue'

export default {
  components: {
    ModalError,
    ModalSuccess,
    ModalBooking
  },
  props: {
    componentName: {
      type: String
    }
  }
}
</script>
