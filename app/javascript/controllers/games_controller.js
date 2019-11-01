import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "minute", "price"];

    initialize() {
        this.count = this.minuteTarget.textContent;
    }

    minMinute(event) {
        event.preventDefault();
        if (this.count > 0) {
            this.count--;
        }
        const min = this.minuteTarget.textContent;
        const price = this.priceTarget.textContent;
        const url = this.data.get("url");
        this.OuterController.initialize(min, price, url);
        this.OuterController.reload();

    }
      // if (total_minute == 0) {
      //   this.not_minTarget.style.visibility = "visible";
      //   this.have_minTarget.style.visibility = "hidden";
      // }

    plsMinute(event) {
        event.preventDefault();
        this.count++;
        const min = this.minuteTarget.textContent;
        const price = this.priceTarget.textContent;
        const url = this.data.get("url");
        this.OuterController.initialize(min, price, url);
        this.OuterController.reload();
    }
    get OuterController() {
        return this.application.getControllerForElementAndIdentifier(this.element.parentElement, "outer");
    }
    get count() {
        return this.data.get("count");
    }
    set count(value) {
        this.data.set("count", value);
        this.minuteTarget.textContent = this.count;
    }
}

function getMetaValue(name) {
    const element = document.head.querySelector(`meta[name="${name}"]`)
    return element.getAttribute("content")
}
