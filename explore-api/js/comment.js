function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => displayComments(data));
}

function displayComments(comments){
    const commentContainer = document.getElementById('comments-container');
    for(const comment of comments){
        const commentDiv = document.createElement('div');
        commentDiv.innerHTML =  `
        <h3>name: ${comment.postId} </h3>
        <h3>name: ${comment.id} </h3>
        <h4>name: ${comment.name} </h4>
        <h5>email: ${comment.email} </h5>
        <p>comment description: ${comment.body} </p>

        `;
        commentContainer.appendChild(commentDiv);

    }

}

loadComments();
