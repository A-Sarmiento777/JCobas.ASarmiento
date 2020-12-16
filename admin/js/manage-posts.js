 
 const table = document.querySelector('.table-body')

 window.onload = () => {

        fetch('http://localhost:3000/posts/')
        .then(data => data.json())
        .then(articles => {
    
            if (!articles.err) {
    
                articles.innerHTML = ''
    
                for (let article of articles) {

                    const time = new Date(article.date)

                    const tableRow = document.createElement('tr')
                    tableRow.className = 'table-row'

                    tableRow.innerHTML = `
                    <td class="table-column">${article.title}</td>
                    <td class="table-column">${article.author}</td>
                    <td class="table-column">${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}</td>
                    `

                    const btnColumn = document.createElement('td')
                    btnColumn.className = 'table-column'

                    const btnUpdate = document.createElement('button')
                    btnUpdate.className = 'btn'
                    btnUpdate.textContent = 'Update'
                    btnUpdate.onclick = () => {
                        localStorage.setItem('article-id', article._id)
                        window.location.href = './update-post.html'
                    }

                    const btnDelete = document.createElement('button')
                    btnDelete.className = 'btn'
                    btnDelete.textContent = 'Delete'
                    btnDelete.onclick = () => {
                        fetch(`http://localhost:3000/posts/${article._id}`, { method: 'DELETE' })
                        .then(()=>tableRow.remove())
                    }

                    btnColumn.appendChild(btnUpdate);
                    btnColumn.appendChild(btnDelete);

                    tableRow.appendChild(btnColumn);
                    table.appendChild(tableRow)
    
                }
    
            } else {
                console.log(articles)
            }
    
        })
        .catch(console.log)

}
