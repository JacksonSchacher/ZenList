import { ProxyState } from "../AppState.js"
import { Item } from "../Models/Item.js"
import { List } from "../Models/List.js"
export function saveState() {
    localStorage.setItem("Lists", JSON.stringify({
        lists: ProxyState.lists,
        items: ProxyState.items
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('Lists'))
    if (data != null) {
        ProxyState.lists = data.lists.map(l => new List(l))
        ProxyState.items = data.items.map(i => new Item(i))
    }
}