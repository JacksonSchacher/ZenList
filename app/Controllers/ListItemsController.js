import { listItemsService } from "../Services/ListItemsService.js"

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
        form.reset()
    }

    removeItem(itemId) {
        listItemsService.removeItem(itemId)
    }

    isChecked(itemId) {
        listItemsService.check(itemId)
    }
}