import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr";
// Import the rangePlugin from the flatpickr library
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";

// Connects to data-controller="flatpickr"
export default class extends Controller {
  static targets = [ "startTime", "endTime" ]
  static values = {
    startTime: String,
    endTime: String,
  }
  connect() {
    const unvailableDates = JSON.parse(document.querySelector('.widget-content').dataset.unavailable)
    var today = new Date();
    var time = (today.getHours() + 1) + ":00";
    flatpickr(this.startTimeTarget, {
              "enableTime": true,
              minDate: 'today',
              minTime: time,
              dateFormat: "Y-m-d H:i",
              disable: unvailableDates,
              // Provide an id for the plugin to work
              plugins: [new rangePlugin({ input: "#endtime"})]
              // plugins: [new confirmDatePlugin({ input: this.startTimeValue})],

            })
    flatpickr(this.endTimeTarget, {
              "enableTime": true,

              minDate: 'today',
              minTime: time,
              dateFormat: "Y-m-d H:i",
              disable: unvailableDates,
              // Provide an id for the plugin to work
              plugins: [new rangePlugin({ input: "#endtime"})]
              // plugins: [new confirmDatePlugin({ })]
             })
  }
}
