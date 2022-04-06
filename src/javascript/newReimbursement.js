console.log(localStorage.getItem("user_ID"));
async function employeeOptions() {
  // var a = localStorage['user_ID']
  // typeof a;
  var author_id = +localStorage["user_ID"];
  typeof author_id;
  let type_id = document.getElementById("type_id").value;
  let amount = document.getElementById("amount").value;
  let description = document.getElementById("description").value;
  //const author_id = localStorage.getItem('user_ID');
  let reimbursementCreation = {
    type_id: type_id,
    amount: Number(amount),
    description: description,
    
  };

  const reimbursementJSON = JSON.stringify(reimbursementCreation);
  console.log(reimbursementJSON);
  let data = await fetch('http://localhost:8080/reimbursment/*', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: reimbursementJSON,
  })
//   .then(response => response.json())
//   .catch((error) => console.log(error));

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