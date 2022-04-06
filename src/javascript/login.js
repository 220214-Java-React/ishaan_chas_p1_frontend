 
 let loginSubmit = document.getElementById(login);
 if(loginSubmit){
     loginSubmit.addEventListener('click', loginUser())
 }
 
 function loginUser(){
   


    let login = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    }

        if(login.username && login.password){
            const currentUserJSON = JSON.stringify(login);

            let data = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: currentUserJSON
            })
            .then(res => res.json());
            console.log(data);
        }

        let {user_id, role_id1} = data;
        console.log(data);

        localStorage.setItem('role_id1', role_id1);
        localStroage.setItem('user_id', user_id);

        if(role_id1 == manager){
                    document.getElementById();
        }

        if(response.status == 200){
            alert("Successful Account Creation");
          }else{
            alert("Account creation unsuccessful.")
          }

}