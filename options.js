console.log("hello from the options page!")
const nameInput = document.getElementById("name-input")
const saveBtn = document.getElementById("save-btn")

saveBtn.addEventListener("click", () => {
    //console.log(nameInput.value)
    const name = nameInput.value
    chrome.storage.sync.set({
        name,
    }, () => {
        console.log(`Name  is set to ${name}`)
    })

})
    chrome.storage.sync.get(["name", "test"],(res) => {
        console.log(res)
})