
  // Function that creates a form to respond a comment and gives it the general style
 
  function idOfResponse(id){

    let newDiv = document.createElement("div")
    let apendTo = document.getElementById(id);
     newDiv.innerHTML = document.getElementById("CopyCommentBox").innerHTML
     newDiv.classList.add('CopyCommentBox');
     newDiv.style.display="flex"
    apendTo.appendChild(newDiv)

    }

// Function to control comment delete

let commentToRemove;
let deletePrompt = document.getElementById("backgroundFume");
function deleteComm(id){
  deletePrompt.style.display = "flex"
   commentToRemove = id;

   }
    
function YesOrNo(confirm){
if(confirm === "si"){
  commentToRemove.remove()
  deletePrompt.style.display = "none"
}else{ deletePrompt.style.display = "none"}
}
  
// Function to control comment delete


function retrieveComment(Comment,commentBoxRemove,appendId,email){
    let commentPlusTagname = "@ axel" + Comment
    commentBoxRemove.remove();
    let newDiv = document.createElement("div");
    document.getElementById(appendId);
    let apendTo = document.getElementById(appendId);
     newDiv.innerHTML = document.getElementById("me").innerHTML;
   
     
     newDiv.classList.add('CopyCommentBox');
     newDiv.style.display="flex";
     newDiv.lastElementChild.lastElementChild.lastElementChild.innerHTML =commentPlusTagname;
     apendTo.appendChild(newDiv)

     console.log(newDiv.lastElementChild.lastElementChild.lastElementChild)
}

