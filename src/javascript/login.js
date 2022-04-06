


async function loginUser() {



    let login = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    }

    if (login.username && login.password) {
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


        let { user_id, role_id1 } = data;
        console.log(data);

        localStorage.setItem('role_id1', role_id1);
        localStroage.setItem('user_id', user_id);

        switch (role_id1) {

            case 'a':
                window.location.href = '';
                break;

            case 'f':
                window.location.href = ''
                break;

            case 'e':
                window.location.href = 'C:\Users\Chasls\Documents\GitHub\ishaan_chas_p1_frontend\src\Index.html'
                break;

            default:
                window.location.href = ''

        }
    }

    if (Response.status == 200) {
        alert("You have logged in");
    } else {
        alert("Login Failed")
    }

}