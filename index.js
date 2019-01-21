function createPost() {
  let pageTemplate=._template.getElementById("page-template").innerHTML;
  let postTemplate=._template.getElementById("post-template").innerHTML;
  let commentTemplate=._template.getElementById("comments-template").innerHTML;

  let postTitle=document.getElementById("postTitle");
  let postBody=document.getElementById("postBody");
  let postAuthor=document.getElementById("postAuthor");





}

function postComment(){
  let text = document.getElementById("post-template");
  let commenter = document.getElementById('commentName').value;
  let comment = document.getElementById('commentText').value;
  let commentTemplate = document.getElementById('comment-template').innerHTML;
  let templateFn = _.template(commentTemplate);
  let commentsDiv = document.getElementById('comments');
  let templateHTML = templateFn({ comment: comment, commenter: commenter });
  commentsDiv.innerHTML += templateHTML;
}
