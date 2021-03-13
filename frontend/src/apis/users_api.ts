import axios from "/@/lib/axios"
import User from "/@/models/user"

interface UserResponse {
    id: number
    name: string
    created_at: string,
    updated_at: string
}

function createUserFromResponse(res: UserResponse): User {
    return new User(res.id, res.name, res.created_at, res.updated_at)
}

export const getUsers: () => Promise<User[]> = async () => {
    const res = await axios.get('/users')
    return res.data.map((res: any) => createUserFromResponse(res))
}

export interface UserCreateParams {
    name: string
}

export const createUser: (params: UserCreateParams) => Promise<User> = async (params: UserCreateParams) => {
    const res = await axios.post('/users', {user: params})
    return createUserFromResponse(res.data)
}
