
 let myLibrary = [
   {
    Library_book:"Harry Potter",
    author:"J.K.Rowling",
    number_of_pages:390,
    status:"completed"
},
{
    Library_book:"The Golden Compass",
    author:"Philip Pullman",
    number_of_pages:300,
    status:"not read yet"
},
{
    Library_book:"The Magicians",
    author:"Lev Grossman",
    number_of_pages:500,
    status:"reading"
},
{
    Library_book:"The Lightning Thief",
    author:"Rick Riordan",
    number_of_pages:800,
    status:"not read yet"
}
 ];
//-----------------------------------------------------------------
       const div1=document.createElement("div");
      div1.id="Bookname";

      div1.innerHTML=`
      <p style="font-size:20px;"> Book Added</p>
      ${myLibrary[0].Library_book}<br> 
      <span style="font-size:20px;"> 
      author:${myLibrary[0].author}<br>
      status:${myLibrary[0].status}<br>
      ${myLibrary[0].number_of_pages} pages</span>
      <br><br><br><br><br>
      <button id="ReadStatus" onclick="Readstatus()">
      Read
      
      </button>

      `;
      document.getElementById("cards").appendChild(div1); 
//----------------------------------------------------------------
  const div2=document.createElement("div");
      div2.id="Bookname";

      div2.innerHTML=`
      <p style="font-size:20px;"> Book Added</p>
      ${myLibrary[1].Library_book}<br> 
      <span style="font-size:20px;"> 
      author:${myLibrary[1].author}<br>
      status:${myLibrary[1].status}<br>
      ${myLibrary[1].number_of_pages} pages</span>
      <br><br><br><br><br>
      <button id="ReadStatus" onclick="Readstatus()">
      Read
      
      </button>

      `;
      document.getElementById("cards").appendChild(div2); 
//----------------------------------------------------------------------
  const div3=document.createElement("div");
      div3.id="Bookname";

      div3.innerHTML=`
      <p style="font-size:20px;"> Book Added</p>
      ${myLibrary[2].Library_book}<br> 
      <span style="font-size:20px;"> 
      author:${myLibrary[2].author}<br>
      status:${myLibrary[2].status}<br>
      ${myLibrary[2].number_of_pages} pages</span>
      <br><br><br><br><br>
      <button id="ReadStatus" onclick="Readstatus()">
      Read
      
      </button>

      `;
      document.getElementById("cards").appendChild(div3); 
//-----------------------------------------------------------------
  const div4=document.createElement("div");
      div4.id="Bookname";

      div4.innerHTML=`
      <p style="font-size:20px;"> Book Added</p>
      ${myLibrary[3].Library_book}<br> 
      <span style="font-size:20px;"> 
      author:${myLibrary[3].author}<br>
      status:${myLibrary[3].status}<br>
      ${myLibrary[3].number_of_pages} pages</span>
      <br><br><br><br><br>
      <button id="ReadStatus" onclick="Readstatus()">
      Read
      
      </button>

      `;
      document.getElementById("cards").appendChild(div4); 
//--------------------------------------------------------------------------









function Display(myLibrary){
    for(let i=0;i<=myLibrary.length-1;i++){
  let mybook=myLibrary[i].Library_book;
  let author=myLibrary[i].author;
  let pages=myLibrary[i].number_of_pages;
  let status=myLibrary[i].status;
  addBookToLibrary(mybook,author,pages,status,i);
} 
}

function Book(userbook,author,number_of_pages,status){

    this.book=userbook;
    this.author=author;
    this.number_of_pages=number_of_pages;
    this.status=status;
  
}

function addBookToLibrary(userbook,author,pages,status,index) {
     
      const div=document.createElement("div");
      div.id="Bookname";

      div.innerHTML=`
      <p style="font-size:20px;"> Book Added</p>
      ${userbook}<br> 
      <span style="font-size:20px;"> 
      author:${author}<br>
      status:${status}<br>
      ${pages} pages</span>
      <br><br><br><br><br>
      <button id="ReadStatus" onclick="Readstatus(${index})">
      Read
      <!-- ${index}-->
      </button>

      `;
      document.getElementById("cards").appendChild(div);    
      Display(myLibrary[myLibrary.length-1]);
      
}



document.querySelector('#book-add').addEventListener('submit',(event)=> {
 //prevent default action of clearing the console after submitting
    event.preventDefault();
  //get form values
  const author=document.querySelector('#author').value;
  const userbook=document.querySelector('#book').value;
  const pages=document.querySelector('#pages').value;
  const status=document.querySelector('#status').value;
  const newBook= new Book(userbook,author,pages,status);
  myLibrary.push(newBook);
  console.log(myLibrary);
  

 // document.getElementById('Bookname').innerHTML=userbook;
let index= myLibrary.length-1;
addBookToLibrary(userbook,author,pages,status,index);

document.querySelector('#author').value='';
document.querySelector('#book').value='';
document.querySelector('#pages').value='';
document.querySelector('#status').value='';
});

    
