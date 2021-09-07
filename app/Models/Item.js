import { generateId } from "../Utils/generateId.js";

export class Item {
    constructor(itemData) {
        this.listId = itemData.listId
        this.id = itemData.id || generateId()
        this.task = itemData.task
        this.isChecked = itemData.isChecked
    }

    get Template() {
        return /*html*/ `
        <li class="list-group-item"><label><input type="checkbox" onclick="app.listItemsController.isChecked('${this.id}')"} ${(this.isChecked ? "checked ='checked'" : '')}><span>${this.task}</span></label><span onclick="app.listItemsController.removeItem('${this.id}')" class="selectable"><i class="mdi mdi-close-circle"></i></span></li>
        `
    }
}