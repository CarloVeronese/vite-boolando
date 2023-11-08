import { reactive } from 'vue';
import itemsJson from '../db.json'

export const store = reactive( {
    items: itemsJson
})