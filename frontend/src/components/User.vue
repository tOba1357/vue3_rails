<template>
  <div>
    <form>
      <label>
        name
        <input v-model="form.name" type="text"/>
      </label>
      <button @click.prevent="createUser">保存</button>
    </form>

    <table>
      <thead>
      <tr>
        <th>id</th>
        <td>name</td>
        <td>createdAt</td>
        <td>updatedAt</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.id">
        <th>{{ user.id }}</th>
        <td>{{ user.name }}</td>
        <td>{{ user.createdAt.format() }}</td>
        <td>{{ user.updatedAt.format() }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, reactive} from 'vue'
import User from "/@/models/user";
import * as UserApi from "/@/apis/users_api";

interface Form {
  name: string
}

export default defineComponent({
  async setup() {
    const form = ref<Form>({name: ''})
    const users = reactive<User[]>(await UserApi.getUsers())
    const createUser = async () => {
      const user = await UserApi.createUser(form.value)
      users.push(user)
      form.value = {name: ''}
    }
    return {form, users, createUser}
  },
})
</script>

<style scoped>
</style>
