const form = document.querySelector('form')
const inputAuthor = document.getElementById('input-author');
const inputTitle = document.getElementById('input-title');
const inputContent = document.getElementById('input-content');
const id = localStorage.getItem('article-id')

const saveArticle = (e) => {
    e.preventDefault()

    const body = {
        title: inputTitle.value,
        author: inputAuthor.value,
        content: inputContent.value
    }

    console.log(body)

    fetch(`http://localhost:3000/posts`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(()=> location.href = './index.html')
    .catch(console.log)

}


form.addEventListener('submit', saveArticle)