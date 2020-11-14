import dayjs, {Dayjs} from 'dayjs';


export default class User {
    id: number
    name: string
    createdAt: Dayjs
    updatedAt: Dayjs


    constructor(id: number, name: string, createdAt: string, updatedAt: string) {
        this.id = id
        this.name = name
        this.createdAt = dayjs(createdAt)
        this.updatedAt = dayjs(updatedAt)
    }
}
