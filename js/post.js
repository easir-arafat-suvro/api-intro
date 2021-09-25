/* NOTES:
Diffrence between get vs post
CRUD vs Rest API
*/


function addPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'MY new post',
            body: 'This is my posts',
            userId: 1
        }),
        Headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
}