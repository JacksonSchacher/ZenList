import { listItemsService } from "../Services/ListItemsService.js"
import { listService } from "../Services/ListService.js"

export class ListItemsController {
    constructor() {

    }

    addItem(listId) {
        event.preventDefault()
            /**
             * @type {HTMLFormElement}
             */
            // @ts-ignore
        const form = event.target

        let itemData = {
            task: form.addItem.value,
            listId: listId
        }
        listItemsService.addItem(itemData)
        listService.taskAmount(listId)
        form.reset()
    }

    removeItem(itemId) {
        listItemsService.removeItem(itemId)
    }

    isChecked(itemId) {
        listItemsService.check(itemId)
    }
}