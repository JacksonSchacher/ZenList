import { ProxyState } from "../AppState.js"
import { Item } from "../Models/Item.js"
import { saveState } from "../Utils/LocalStorage.js"

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
    }
    addItem(itemData) {
        ProxyState.items = [...ProxyState.items, new Item(itemData)]
        console.log("list items service: AppState (items)" + JSON.stringify(ProxyState.items))
        console.log(this.itemsTotal(itemData.listId))
    }
    itemsTotal(itemId) {
        let itemInList = ProxyState.lists.find(l => l.id == itemId)
        itemInList.items++
            console.log("items total go here " + itemInList.items)
    }

}

export const listItemsService = new ListItemsService()