function createPost() {
  var pageTemplate=._template(document.getElementById("page-template").innerHTML);
  var postTemplate=._template(document.getElementById("post-template").innerHTML);
  var commentTemplate=._template(document.getElementById("comments-template").innerHTML);

  var postTitle=document.getElementById("postTitle").value;
  var postBody=document.getElementById("postBody").value;
  var postAuthor=document.getElementById("postAuthor").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({ 'title': postTitle, 'body': postBody, 'poster': postAuthor });
  var commentsSection = commentsTemplate();

  var postElement = document.getElementById("post");
  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  var commenterName = document.getElementById('commentName').value;
  var commentText = document.getElementById('commentText').value;
  var commentTemplate = ._template(document.getElementById('comment-template').innerHTML);
  var commentsSection = document.getElementById('comments'); comment;
  commentsSection.innerHTML+=commentTemplate({ comment: comment, commenter: commenter });
}
