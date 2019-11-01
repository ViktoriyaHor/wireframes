import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ["not_min", "have_min"];
    initialize(min, price, url) {
        this.min = min;
        this.price = price;
        this.url = url;
    }
    reload() {
        if (this.min > 0){
            this.not_minTarget.style.visibility = "hidden";
            this.have_minTarget.style.visibility = "visible";
            this.have_minTarget.firstElementChild.textContent = `${this.min}min added · total $${this.min*this.price}`
        }
        else {
            this.not_minTarget.style.visibility = "visible";
            this.have_minTarget.style.visibility = "hidden";
        }
    }
    checkout() {
        const formData = new FormData();
        formData.append("game[minutes_booked]", this.min);
        console.log(this.url);
        fetch(this.url, {
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
}
function getMetaValue(name) {
    const element = document.head.querySelector(`meta[name="${name}"]`)
    return element.getAttribute("content")
}