console.log(localStorage.getItem("user_ID"));



// creation of reimbursment function
async function reimbursments() {
 
  var author_id = +localStorage["user_ID"];
  typeof author_id;

  //Get the type of reimburstment food, lodging, travel
  let type_id = document.getElementById("type_id").value; 
//the amount that needs to be reimbursted
  let amount = document.getElementById("amount").value;
//the name type of the reimburstment or description
  let description = document.getElementById("description").value;




// the actual creation of reimbursment let
  let reimbursementCreation = {
    type_id: type_id,
    amount: Number(amount),
    description: description,
    author_id: author_id,
    payment_id: 3,

    
  };
//the push 
  const reimbursementJSON = JSON.stringify(reimbursementCreation);
  console.log(reimbursementJSON);
  let data = await fetch('http://localhost:8080/reimbursment', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: reimbursementJSON,
  })




  console.log(reimbursementJSON);

  let { reimbAmount, reimbType, reimbDescription } = data;
  localStorage.setItem("amount", reimbAmount);
  localStorage.setItem("type_id", reimbType);
  localStorage.setItem("description", reimbDescription);
  console.log(reimbAmount);

  if (data.status == 204) {
    window.location.href = "/HTML/employee.html";
  }
}