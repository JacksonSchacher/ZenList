import { ProxyState } from "../AppState.js"
import { Item } from "../Models/Item.js"
import { saveState } from "../Utils/LocalStorage.js"
import { listService } from "./ListService.js"

class ListItemsService {
    constructor() {
        ProxyState.on('items', saveState)
    }
    check(itemId) {
        let checkedItem = ProxyState.items.find(i => i.id == itemId)
        if (checkedItem.isChecked) {
            checkedItem.isChecked = false
        } else {
            checkedItem.isChecked = true
        }
        ProxyState.items = ProxyState.items
    }
    removeItem(itemId) {
        ProxyState.items = ProxyState.items.filter(i => i.id !== itemId)
        ProxyState.items = ProxyState.items
        listService.taskAmount(itemId)
    }
    addItem(itemData) {
        ProxyState.items = [...ProxyState.items, new Item(itemData)]
        console.log("list items service: AppState (items)" + JSON.stringify(ProxyState.items))
    }

}

export const listItemsService = new ListItemsService()