//if users add a note add it to local storage
console.log('myNotes app');
 showNotes();
let addBtn = document.getElementById('addBtn');
let addBtnTitle =document.getElementById('addBtnTitle');

// for notes
addBtn.addEventListener('click',(e)=>{
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');
    // let title = localStorage.getItem('title');

    if (notes == null){
       notesObj = [];
    }
    else if(notes !=null){
      alert("note added sucessfully")// alerts note addd
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let myObj ={
      title:addTitle.value,
      text:addTxt.value,
    }
    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value=" ";
    addTitle.value=" "; 
    
    // console.log(notesObj);
    showNotes();
});


//for title
// addBtnTitle.addEventListener('click',(e)=>{
    
    
    
//     if (title== null){
//        titleObj = [];
//     }
//     else{
//         titleObj=JSON.parse(title);
//     }
  
//     titleObj.push(addTitle.value);
    
//     localStorage.setItem('title', JSON.stringify(titleObj));
//     addTitle.value=" ";
    
//     // console.log(notesObj);
//     // showNotes();

// });

   function showNotes(){
     let notes= localStorage.getItem('notes');
     if (notes == null ){
        notesObj = [];
     }else{
         notesObj=JSON.parse(notes);
     }
     let html = '';
     notesObj.forEach((element,index)=>{
         html+=`
         <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.text}</p>
              <button id="${index}"  onclick="deleteNote(this.id)"  class="btn btn-primary">Delet Note</button>
            </div>
          </div>`;
     });

     let notesElm= document.getElementById('notes');
    //  let tileElm = document.getElementById()
     if(notesObj.length!=0){
        notesElm.innerHTML=html;
     }else{
         notesElm.innerHTML=`nothing to show! add your first note <br>`;
     }

   }

   //delet function
   function deleteNote(index){
     console.log('delet sucessfully',index);
     
     let notes= localStorage.getItem('notes');
     if (notes == null ){
        notesObj = [];
  
     }else{
         notesObj=JSON.parse(notes);
         
     }
     notesObj.splice(index,1);
     alert("deleted Sucessfully");// adds alert
     localStorage.setItem('notes', JSON.stringify(notesObj));
     showNotes();
   }

   // for searching an elemnt
   let searchTxt = document.getElementById('searchTxt');
   searchTxt.addEventListener('input',()=>{
     let inputVal = searchTxt.value.toLowerCase(); //gives the text user typed
     console.log('you have inputed',inputVal);
     let noteCard=document.getElementsByClassName('noteCard');
     Array.from(noteCard).forEach((element)=>{
         let cardTxt=element.getElementsByTagName("p")[0].innerText;
        //  console.log(cardTxt);
         if(cardTxt.includes(inputVal)){
           element.style.display="block";
         }
         else{
          element.style.display="none";
         }
     })
   })