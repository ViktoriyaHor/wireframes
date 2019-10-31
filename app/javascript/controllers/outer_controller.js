import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "thing" ];

    thingConnected(event) {

        console.log(1); // the element that was just connected
    }
}