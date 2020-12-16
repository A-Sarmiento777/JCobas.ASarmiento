const articlesContent = document.querySelector('.articles-container')

window.onload = () => {

    fetch('http://localhost:3000/posts/')
    .then(data => data.json())
    .then(articles => {

        if (!articles.message) {

            articles.innerHTML = ''

            for (let article of articles) {

                const time = new Date(article.date)

                const content = `
                <article class="article">
                    <div class="article-body">
                        <h2 class="article-title">${article.title}</h2>
                        <p class="article-content">${article.content}</p>
                    </div>
                    <div class="article-bottom">
                        <small class="article-author">${article.author}</small>
                        <small class="article-date">${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}</small>
                    </div>
                    </article>
                `

                articlesContent.innerHTML += content

            }

        } else {
            console.log(articles)
        }

    })
    .catch(console.log)

}