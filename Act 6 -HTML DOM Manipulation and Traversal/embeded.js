function replace(){
    const listItem = document.querySelector(".rep")
    const btn = document.querySelector('#replace')
    newelement=document.createElement('label')
  if(listItem.children.length == 0)
  {
    alert("No element to remove please refresh page")
  }
   if(listItem.firstElementChild.className == "audio")
    {
       newelement.innerHTML = '<video src="video/24_HOURS.mp4" controls muted width="500px">';
       newelement.className ="video"
       listItem.replaceChild(newelement, listItem.firstElementChild);
       btn.innerHTML="Replace to Audio"
       
}        

 else
    {
          newelement.innerHTML = '<audio src="audio/Jack Ma - How I Overcame Failure.mp3" controls muted>'
          newelement.className = "audio"
          listItem.replaceChild(newelement,listItem.firstElementChild)
          btn.innerHTML="Replace to Video"
    }


}

function removeAudio()
{
  const listItem = document.querySelector('.rep');

  if(listItem.firstElementChild.className =="audio")
  {
    listItem.removeChild(listItem.firstElementChild);
  }

  else
  {
    alert("Please change element to Audio to remove")
  }
}

function addElement()
{
  const listItem = document.querySelector('.rep');
  newE = document.createElement('img')
  newE.src = "./LOGO.png"

  listItem.appendChild(newE)
}