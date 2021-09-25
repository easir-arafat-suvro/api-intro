/* 
1. Fetch the data form JSON place holder web site
2. Loop throw the data
3. Creat 'div' > add 'h3' & 'p' tags
4. Dynamicly access and show data using templateString
 */


function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispalyPost(data))
}

loadPosts()

function dispalyPost(posts) {
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('posts');

        //Alt-1 :
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>  
        `

        /*  //alt-2 :
         const h1 = document.createElement('h1');
         h1.innerText = post.title;
         const p = document.createElement('p');
         p.innerText = post.body;
         div.append(h1);
         div.append(p);
         */

        postContainer.appendChild(div);
        // console.log(div)

    }
}

