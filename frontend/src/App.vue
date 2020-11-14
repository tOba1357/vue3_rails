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
import {createUser, getUsers} from '/@/apis/users_api'
import {defineComponent} from 'vue'
import User from '/@/models/user'

export default defineComponent({
  data() {
    return {
      form: {
        name: '' as string
      },
      users: [] as User[]
    }
  },
  methods: {
    async createUser() {
      const user = await createUser(this.form)
      this.users.push(user)
      this.form.name = ''
    }
  },
  async created() {
    this.users = await getUsers()
  }
})
</script>
