/*const timeElement = document.getElementById(time)
const currentTime = new Date().toLocaleTimeString()
timeElement.textContent = `The Time is: ${currentTime}`

chrome.action.setBadgeText({
    text: "TIME",
}, () => {

    console.log("Finished setting badge text.")
})

*/
// Ensure the DOM content is loaded before accessing elements
document.addEventListener("DOMContentLoaded", function() {
    // Get the element with ID "time"
    const timeElement = document.getElementById("time")
    const nameElement = document.getElementById("name")
    // Get the current time and format it
    const currentTime = new Date().toLocaleTimeString();
    // Set the text content of the element
    timeElement.textContent = `The Time is: ${currentTime}`

    // Set the badge text for the Chrome extension
    chrome.action.setBadgeText({
        text: "TIME",
    }, () => {
        console.log("Finished setting badge text.")
    })

    chrome.storage.sync.get(["name"],(res) => {
        const name = res.name ?? "???"
        nameElement.textContent = `Hello ${res.name}`
    })
});

function getCurrentURL () {
    return window.location.href
  }
  
  // Example
  const url = getCurrentURL()
