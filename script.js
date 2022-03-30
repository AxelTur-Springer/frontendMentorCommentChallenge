
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
  
// Function to control comment delete end




//Function to edit comment 

//document.getElementById("formNumber2").style.display ="none"

let pathToCommentSeccion;
let pathToForm;
let textInside;
function editComment(PathToCommentSeccionDiv,PathToForm){
    pathToCommentSeccion =  PathToCommentSeccionDiv;
    pathToForm = PathToForm;
    textInside = PathToCommentSeccionDiv.innerText;// correct
pathToCommentSeccion.style.visibility = "hidden" 
PathToForm.style.display ="initial" //
PathToForm.children[0].children[0].innerText = textInside;

}

function replaceNewComment(test){
pathToCommentSeccion.style.visibility = "visible"
pathToForm.style.display ="none"
pathToCommentSeccion.innerText = test.value;
}

//Function to edit comment End






function retrieveComment(Comment,commentBoxRemove,appendId,email){

    let commentPlusTagname = "@" + email + " " + Comment
    commentBoxRemove.remove();
    let newDiv = document.createElement("div");
    document.getElementById(appendId);
    let apendTo = document.getElementById(appendId);
     newDiv.innerHTML = document.getElementById("me").innerHTML;
   
     
     newDiv.classList.add('CopyCommentBox');
     newDiv.style.display="flex";
     newDiv.lastElementChild.lastElementChild.lastElementChild.innerHTML =commentPlusTagname;
     apendTo.appendChild(newDiv)

  
}

