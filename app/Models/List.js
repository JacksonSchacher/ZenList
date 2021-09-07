import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class List {
    constructor(listData) {
        this.name = listData.name
        this.id = listData.id || generateId()
        this.color = listData.color
        this.items = listData.items || 0
        this.itemsChecked = listData.itemsChecked || 0
    }

    get cardTemplate() {
        return /*html*/ `
        <div class='col-md-4'>
            <div class="card shadow mb-4 ${this.color}" style="min-height: 14rem;min-width: 18rem;">
                <div class="d-flex justify-content-between card-header card-title">
                   <h3>${this.name.toUpperCase()}</h3>
                   <h6>${this.itemsChecked} / ${this.items}</h6>
                    <span onclick="app.listsController.removeList('${this.id}')" class="selectable"><i class="mdi mdi-close-circle"></i></span>
                </div>
                <ul class="list-group list-group-flush justify-content-between">
                    <!-- list items go here -->
                    ${this.listItems}
                </ul>
                <div class="card-footer">
                    <form onsubmit="app.listItemsController.addItem('${this.id}')" class="">
                        <label for="addItem" class="visually-hidden">Add Item</label>
                        <input 
                        class="form-control d-inline-flex w-75" 
                        type="text" 
                        placeholder="Add Item.." 
                        name="addItem" id="addItem"
                        minlength="3"
                        maxlength="50"
                        required>
                        <button class="btn btn-secondary flex-inline rounded-circle" type="submit"><i class="mdi mdi-plus-thick"></i></button>
                    </form>
                </div>
            </div>
        </div>
        `
    }

    get listItems() {
        let template = ""
        let findItems = ProxyState.items.filter(i => i.listId == this.id)
        findItems.forEach(i => template += i.Template)
        return template
    }
}