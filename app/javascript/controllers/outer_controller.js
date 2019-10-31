import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "thing", "not_min", "have_min"];

    connect(){
        document.addEventListener("games-connected", (e) => {
            console.log("update");
});
    }
    thingConnected(event) {
        console.log(event);
        this.not_minTarget.style.visibility = "hidden";
    }

}