const usernameInput = document.getElementById('username')
const emailInput = document.getElementById('email')
const numberInput = document.getElementById('phone-number')
const table = document.getElementById('table')
const tableBody = document.getElementById('table-body')
const tableData = document.getElementById('table-data')

class Row {
    constructor (username, email, phoneNumber) {
        this.username = username
        this.email = email
        this.phoneNumber = phoneNumber
    }

    add () {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${this.username}</td>
            <td>${this.email}</td>
            <td>${this.phoneNumber}</td>
            <td class="delete-btn">
                <button onclick="deleteContact(event)">Delete</button>
            </td>
        `
        tableBody.appendChild(row)
    }

}

function addContact () {
    tableData.classList.add('active')
    table.setAttribute('class', 'table-display')
    const row = new Row(usernameInput.value, emailInput.value, numberInput.value)
    row.add()
    usernameInput.value = ''
    emailInput.value = ''
    numberInput.value = ''
}



function deleteContact (event) {
    event.target.parentElement.parentElement.remove()
}

