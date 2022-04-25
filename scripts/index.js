// Store the wallet amount to your local storage with key "amount"



//    document.ad
   function addw(){
    
    let dre = [];
   let  got = document.querySelector("#amount").value 

   

           console.log(dre)


           alert("added")
      
    dre.push(got)

    localStorage.setItem("amounts",JSON.stringify(dre))


    window.location.href = "movies.html"
  
   console.log(got)
   }

