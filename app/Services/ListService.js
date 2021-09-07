import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"
import { saveState } from "../Utils/LocalStorage.js"

class ListService {
    constructor() {
        ProxyState.on('lists', saveState)
    }
    removeList(listData) {
        ProxyState.lists = ProxyState.lists.filter(l => l.id != listData)
    }
    addList(listData) {
        ProxyState.lists = [...ProxyState.lists, new List(listData)]
        console.log("list service: AppState (lists)" + ProxyState.lists)
    }
    taskAmount(itemId) {
        let findItems = ProxyState.lists.filter(l => l.id == itemId)
        findItems.forEach(i => {
            i.items++
        });
        ProxyState.lists = ProxyState.lists
    }
}

export const listService = new ListService()