
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
  commentToRemove.style.display ="none"
  deletePrompt.style.display = "none"
}else{ deletePrompt.style.display = "none"}
}
  
// Function to control comment delete end




//Function to edit comment 



let pathToCommentSeccion;
let pathToForm;
let textInside;
function editComment(PathToCommentSeccionDiv,PathToForm){
    pathToCommentSeccion =  PathToCommentSeccionDiv;
    pathToForm = PathToForm;
    textInside = PathToCommentSeccionDiv.innerText;// correct
    console.log(pathToCommentSeccion) 

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
   
     
     newDiv.classList.add('me');

     function myFunction(x) {
      if (x.matches) { // If media query matches
        
     newDiv.style.display="grid";
      } else {
    
        newDiv.style.display="flex";
      }
    }
    
    var x = window.matchMedia("(max-width: 700px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
    

     newDiv.lastElementChild.lastElementChild.lastElementChild.innerHTML =commentPlusTagname;
     apendTo.appendChild(newDiv)

  
}

