updateUl = document.querySelector(".updates")

let updates = [{num:"1.0", date:"12/01/2022", description:"First"}]
    

function updateTemplate(section,updates) {
    updates.forEach(element => {
        section.innerHTML += `<li>${element.num} - Date: ${element.date} - Description: ${element.description}`
    });
}

updateTemplate(updateUl,updates);