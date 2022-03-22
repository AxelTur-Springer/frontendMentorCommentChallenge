document.querySelectorAll('.replyBtn').forEach(item => {
    item.addEventListener('click', event => {

     
    })
  })
  function idOfResponse(id){
    console.log(id)
    let newDiv = document.createElement("div")
    let apendTo = document.getElementById(id);
     newDiv.innerHTML = document.getElementById("CopyCommentBox").innerHTML
     newDiv.classList.add('CopyCommentBox');
    apendTo.appendChild(newDiv)
    }
