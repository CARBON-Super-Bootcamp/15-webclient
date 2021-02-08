const tbody = document.querySelector('table>tbody');

function loadTable(state){
    tbody.innerHTML = '';
    let rows = '';
    for (let i = 0; i < state.length; i++) {
        rows += `<tr>
            <td>${state[i].name}</td>
            <td>${state[i].address}</td>
            <td>${state[i].email}</td>
            <td>${state[i].phone}</td>
            <td>${state[i].biografi}</td>
            <td>Aksi</td>
        </tr>\n`
    }
    tbody.innerHTML = rows;
    
}

module.exports = {loadTable}
