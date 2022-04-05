// function init(){
//     let user ={
//         username: "", 
//         password: "", 
//         email: "", 
//         givenName: "", 
//         surname: "", 
//         roleId: ""
//     };

//     let users= [];

//     let emailRegex = ([A-Za-z]|[0-9])+$;

//     const roles = ["manager", "readUsers"]

// // User creation ID
//     document.getElementById("userIdCreation").addEventListener("input", validate);
//     document.getElementById("passwordIdCreation").addEventListener("input", validate);
//     document.getElementById("passwordIdCreationVerify").addEventListener("input", validate);
//     document.getElementById("emailCreation").addEventListener("input", validate);
//     document.getElementById("givenNameId").addEventListener("input", validate);
//     document.getElementById("surnameId").addEventListener("input", validate);
//     document.getElementById("roleIdId").addEventListener("input"), validate;

//     //User log on information
//     document.getElementById("userNameLoginId").addEventListener("input");
//     document.getElementById("passwordLoginId").addEventListener("input");


//     document.getElementById("createUserId").addEventListener("click", createUser)


// function createUser(){

// let newUsername = document.getElementById("userIdCreation");
// let newPassword = document.getElementById("passwordIdCreation");
// let newEmail =  document.getElementById("emailCreation");
// let newGivenName = document.getElementById("givenNameId");
// let newLastName = document.getElementById("surnameId");

// if(newEmail.value.match(emailRegex)){
//     user.username = newUsername.value;
//     user.password = newPassword.value;
//     user.email = newEmail.value;
//     user.givenName = newGivenName.value;
//     user.surname = newUsername.value;
//     user.roleId = "1";
    

//     newUsername.value = "";
//     newPassword.value ="";
//     newEmail.value = "";
//     newGivenName.value = "";
//     newUsername.value = "";

//     document.getElementById("id01").style.display = "block";
    

// }

// }

// function validate(e){
		
//     let hold = document.getElementById(e.target.id).value.replace(/[^a-z0-9_]/gi, "");
//     document.getElementById(e.target.id).value = hold;
// }
// }




