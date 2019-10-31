import { Controller } from "stimulus"

let total_minute = 0;
export default class extends Controller {
    static targets = [ "minute", "total_minute", "not_min", "have_min"];

    
    connect() {
        const event = document.createEvent("CustomEvent");
        event.initCustomEvent("inner-connected", true, true, null);
        this.element.dispatchEvent(event)
        console.log(event); // the element that was just connected
    }

    minMinute(event) {
      event.preventDefault();
      let content = parseInt(this.minuteTarget.textContent);
      if (content > 0) {
        this.minuteTarget.innerHTML = content - 1;
        total_minute -= 1;
        console.log(total_minute);
        }
      // if (total_minute == 0) {
      //   this.not_minTarget.style.visibility = "visible";
      //   this.have_minTarget.style.visibility = "hidden";
      // }
    }
  plsMinute(event) {
      event.preventDefault();
      let content = parseInt(this.minuteTarget.textContent);
      this.minuteTarget.innerHTML = content + 1;
      total_minute += 1;
      // this.not_minTarget.style.visibility = "visible";
      // this.have_minTarget.style.visibility = "hidden";
  }
}
