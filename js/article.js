const id = location.hash.slice(1);

const arti = (doc) => {
    const img = document.querySelector('.image');
    const title = document.querySelector('.title');
    const body = document.querySelector('.body');

    img.src = doc.image;
    title.textContent = doc.title;
    body.textContent = doc.body;
    
}

// Getting articles
db.collection('Articles').doc(id).get().then((article) => {
    arti(article.data());
})


// Render comment 


const renderComment =  (doc) => {
    let div = document.querySelector('.comment-section');
    let name = document.createElement('h1');
    let comment = document.createElement('p');
    let eachComment = document.createElement('div');
    name.textContent = doc.data().name;
    comment.textContent = doc.data().message;

    eachComment.classList.add('comment')
    
    div.appendChild(eachComment);
    eachComment.appendChild(name);
    eachComment.appendChild(comment);

}

const formComment = document.querySelector('#form');

formComment.addEventListener('submit', (event) => {
    event.preventDefault();
    const ids = uuidv4();
    const name = event.target.name.value;
    const message = event.target.message.value;
    db.collection('comments').add({
        name: formComment.name.value,
        message: formComment.message.value,  
        articleID: id,
        // timestamp: Date.parse(new Date())   
    }).then(() => {
        //alert(`Comment saved!`);
        document.getElementById('text').value = '';
        document.getElementById('textarea').value = '';

    }).catch((error) => {
        alert(error)
    })
    console.log('It works');

})

db.collection('comments').where('articleID','==', id).onSnapshot((snapshot) => {
    console.log(snapshot);
    let changes = snapshot.docChanges();
    console.log(changes);
    changes.forEach(element => {
        if (element.type == 'added') {
            renderComment(element.doc);
        }
    });
}) 


