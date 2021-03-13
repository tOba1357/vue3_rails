<template>
  <suspense>
    <template #fallback>
      <p>loading</p>
    </template>

    <template #default>
      <User></User>
    </template>
  </suspense>
</template>


<script lang="ts">
import {defineComponent, reactive, ref} from 'vue'
import User from '/@/components/User.vue'


interface Form {
  name: string
}

export default defineComponent({
  components: {
    User
  }
})
</script>
