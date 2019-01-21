function createPost() {
  let pageTemplate=._template(document.getElementById("page-template").innerHTML);
  let postTemplate=._template(document.getElementById("post-template").innerHTML);
  let commentTemplate=._template(document.getElementById("comments-template").innerHTML);

  let postTitle=document.getElementById("postTitle").value;
  let postBody=document.getElementById("postBody").value;
  let postAuthor=document.getElementById("postAuthor").value;

  document.getElementsByTagName("main")[0].innerHTML+=pageTemplate();

  let blogSection = postTemplate({ 'title': postTitle, 'body': postBody, 'poster': postAuthor });
  let commentsSection = commentsTemplate();

  let postElement = document.getElementById("post");
  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment(){
  let commentTemplate = ._template(document.getElementById('comment-template').innerHTML);
  let commenterName = document.getElementById('commentName').value;
  let commentText = document.getElementById('commentText').value;
  
  let commentsSection = document.getElementById('comments');
  commentsSection.innerHTML+=commentTemplate({ "comment": commenterName, "commenter": commentText });

}
