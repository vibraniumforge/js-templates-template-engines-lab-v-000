function createPost() {
  let text=document.getElementById("page-template");
  text.innerHTML.value="x";
}

function postComment(){
  let text = document.getElementById("post-template");
  let commenter = document.getElementById('commentName').value;
 let comment = document.getElementById('commentText').value;
 let commentTemplate="
 <div id="comment"><p><%= comment %></p><p>Posted by:<span class="commenter"><%= commenter %></span></p></div>"
}
