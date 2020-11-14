import axios from '/lib/axios'
import User from '/models/user'

function createUserFromResponse(res: any): User {
    return new User(res.id, res.name, res.created_at, res.updated_at)
}

export const getUsers: () => Promise<any> = async () => {
    const res = await axios.get('/users')
    return res.data.map((res: any) => createUserFromResponse(res))
}

export interface UserCreateParams {
    name: String;
}

export const createUser: (params: UserCreateParams) => Promise<User> = async (params: UserCreateParams) => {
    const res = await axios.post('/users', params)
    return createUserFromResponse(res.data)
}
