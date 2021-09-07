import { ListItemsController } from "./Controllers/ListItemsController.js";
import { ListsController } from "./Controllers/ListsController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {
    listsController = new ListsController();
    listItemsController = new ListItemsController();
}

loadState()

window["app"] = new App();