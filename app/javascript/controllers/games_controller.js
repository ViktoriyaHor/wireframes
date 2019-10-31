import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "minute" ];

    initialize() {
        this.count = this.minuteTarget.textContent;
    }
    connect() {
        const event = document.createEvent("CustomEvent")
        event.initCustomEvent("games-connected", true, true, null)
        this.element.dispatchEvent(event);
        console.log(event);
    }
    minMinute(event) {
      event.preventDefault();
      if (this.count > 0) {
        this.count--;
        // console.log(this.count);
      }
      let formData = new FormData();
      formData.append("game[minutes_booked]", this.minuteTarget.textContent);
      fetch(this.data.get("url"), {
        body: formData,
        method: 'PATCH',
        dataType: 'script',
        credentials: "include",
        headers: {
                "X-CSRF-Token": getMetaValue("csrf-token")
                 },
      }).then(function(response) {

        })
    }
      // if (total_minute == 0) {
      //   this.not_minTarget.style.visibility = "visible";
      //   this.have_minTarget.style.visibility = "hidden";
      // }

      plsMinute(event) {
          event.preventDefault();
          this.count++;
          // this.not_minTarget.style.visibility = "visible";
          // this.have_minTarget.style.visibility = "hidden";
          // console.log(this.count);

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
