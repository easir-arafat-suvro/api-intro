/* NOTES:
 1. API conection from JSON place holder
 */

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

function dataLoad() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        // .then(data => console.log(data[0].title))
        .then(data => document.getElementById('ShowData').innerHTML = data[0].title)
}


/*  fetch the data form API and show it on html as appendChild */
function users() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        // .then(data => console.log(data[0]));
        .then(data => loadUsers(data));
}
function loadUsers(data) {
    const ul = document.getElementById('users');
    console.log(ul)
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name}
        Email: ${user.email}
        Company: ${user.company.name}`;
        ul.appendChild(li);
    }
}

