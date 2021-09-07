import { ProxyState } from "../AppState.js";
import { listService } from "../Services/ListService.js";

function _drawLists() {
    let template = ''
    ProxyState.lists.forEach(l => template += l.cardTemplate)
    document.getElementById('lists').innerHTML = template
}
export class ListsController {
    constructor() {
        ProxyState.on('lists', _drawLists)
        ProxyState.on('items', _drawLists)
        _drawLists()
    }

    addList() {
        event.preventDefault()
            /**
             * @type {HTMLFormElement}
             */
            // @ts-ignore
        const form = event.target

        let listData = {
            name: form.listTitle.value,
            color: form.color.value
        }
        listService.addList(listData)
        form.reset()
    }

    removeList(listData) {
        listService.removeList(listData)
    }
}