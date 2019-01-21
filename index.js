function createPost() {
  let pageTemplate=._template(document.getElementById("page-template").innerHTML);
  let postTemplate=._template(document.getElementById("post-template").innerHTML);
  let commentTemplate=._template(document.getElementById("comments-template").innerHTML);

  let postTitle=document.getElementById("postTitle").value;
  let postBody=document.getElementById("postBody").value;
  let postAuthor=document.getElementById("postAuthor").value;

  document.getElementsByTagName("main")[0].innerHTML+=pageTemplate();

  let blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
  let commentsSection = commentsTemplate();
  let postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
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
