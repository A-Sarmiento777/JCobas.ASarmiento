const form = document.querySelector('form')
const inputAuthor = document.getElementById('input-author');
const inputTitle = document.getElementById('input-title');
const inputContent = document.getElementById('input-content');
const id = localStorage.getItem('article-id')

window.onload = () => {
    fetch(`http://localhost:3000/posts/${id}`)
    .then(data => data.json())
    .then(data => {

        inputAuthor.value = data.author
        inputTitle.value = data.title
        inputContent.value = data.content

    })
}

const saveArticle = (e) => {
    e.preventDefault()

    const body = {
        title: inputTitle.value,
        author: inputAuthor.value,
        content: inputContent.value
    }

    fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(()=> location.href = './index.html')

}


form.addEventListener('submit', saveArticle)