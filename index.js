function createPost() {
  let text=document.getElementById("page-template");
  text.innerHTML.value=""
}

function postComment(){
  let text=document.getElementById("post-template");
  let commenter = document.getElementById('commentName').value;
 let comment = document.getElementById('commentText').value;
 let commentTemplate="<div id=comment><p><%= comment %></p>"
}
