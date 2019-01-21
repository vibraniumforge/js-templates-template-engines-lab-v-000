function createPost() {
  let text=document.getElementById("page-template");
  text.innerHTML.value="x";
}

function postComment(){
  let text = document.getElementById("post-template");
  let commenter = document.getElementById('commentName').value;
 let comment = document.getElementById('commentText').value;
 // let commentTemplate="
 // <div id="comment"><p><%= comment %></p><p>Posted by:<span class="commenter"><%= commenter %></span></p></div>"
  let commentTemplate = document.getElementById('comment-template').innerHTML;
  let templateFn = _.template(commentTemplate);

let commentsDiv = document.getElementById('comments');

//execute template function with JSON object for the interpolated values
let templateHTML = templateFn({ comment: comment, commenter: commenter });

//append rather than replace!
commentsDiv.innerHTML += templateHTML;
}
