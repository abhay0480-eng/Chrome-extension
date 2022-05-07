
let myLeads = []

const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")
const delBtn = document.getElementById("del-btn")
const saveBtn = document.getElementById("save-btn")

let ulEl = document.getElementById("ul-el")

// localStorage.clear()

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

console.log(leadsFromLocalStorage)
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
    
}
renderLeads()
inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = null
localStorage.setItem("myLeads", JSON.stringify(myLeads))
  
    renderLeads()

})

delBtn.addEventListener("click", function () {
   myLeads.splice(0,myLeads.length)
    
localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    renderLeads()

})

saveBtn.addEventListener('click', function () {
    console.log('abhay')
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log(tabs[0].url)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads()
    }
    )
})
  



function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li>" + "<a target='_blank' href='https://" + myLeads[i] + "'>" + myLeads[i] + "</a>" + "</li>"
        listItems +=
            `<li>
           <a target='_blank' href='${myLeads[i]}' > ${myLeads[i]} 
           </a> 
        </li>`
    }

    ulEl.innerHTML = listItems
}

