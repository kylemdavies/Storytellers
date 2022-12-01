updateUl = document.querySelector(".updates")

let updates = [
    {num:"1.0", date:"12/01/2022", description:"Home page set up complete"},
    {num:"1.1", date:"12/01/2022", description:"Basic randomization complete"}
]
    

function updateTemplate(section,updates) {
    updates.forEach(element => {
        section.innerHTML += `<li>${element.num} - Date: ${element.date} - Description: ${element.description}`
    });
}

updateTemplate(updateUl,updates);