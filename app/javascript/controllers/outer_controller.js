import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ["not_min", "have_min"];

    reload(d) {
        console.log(d)
        // whenever click is do: this.application.controllers['games'].handler_name_here()
        // document.addEventListener("games-connected", (e) => {
        //     console.log("update")});
        // // console.log("update");
        // this.not_minTarget.style.visibility = "hidden";
    }

}