import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="heart-button"
export default class extends Controller {
  static values = { url: String }

  toggleBookmark() {
    const csrfToken = document.querySelector("meta[name='csrf-token']").content
    const url = this.urlValue

    if (this.element.classList.contains("heart-red")) {
      console.log(url)
      fetch(url, {
        method: "DELETE",
        headers: {
          "Accept": "text/plain",
          "X-CSRF-Token": csrfToken
        }
      })
    } else {
      console.log(url)

      // create bookmark
      fetch(url, {
        method: "POST",
        headers: {
          "Accept": "text/plain",
          "X-CSRF-Token": csrfToken
        }
      })
    }

    this.element.classList.toggle("heart-red")
  }

  connect() {
  }
}
