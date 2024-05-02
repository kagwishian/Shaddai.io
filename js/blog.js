

// render article
const renderPost = (doc) => {

    let article = document.querySelector('.container-articles');

    let cardArticle = document.createElement('div');
    let link = document.createElement('a');
    let image = document.createElement('img');
    let title = document.createElement('h4');
    let body = document.createElement('p');
    cardArticle.classList.add('card-article');
    link.href = '#';

    cardArticle.setAttribute('article-id', doc.id);
    image.src=doc.data().image;
    title.textContent = doc.data().title;
    body.textContent = doc.data().body.slice(0,200) + '...';
    
    link.appendChild(image);
    link.appendChild(title);
    link.appendChild(body);
    cardArticle.appendChild(link);
    
    article.appendChild(cardArticle);

    link.addEventListener('click', (event) => {
        event.preventDefault();
        const id =  event.target.parentNode.parentNode.getAttribute('article-id');
        console.log(id);
        location.href = `../pages/article.html#${id}`;
    })

};

db.collection('Articles').onSnapshot((snapshot) => {
    // console.log(snapshot);
    let changes = snapshot.docChanges();
    console.log(changes);
    changes.forEach(element => {
        if (element.type == 'added') {
            renderPost(element.doc)
        }
    });
}) 
