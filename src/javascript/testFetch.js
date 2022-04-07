
const thisURL = window.location.href;


let registerButton = document.getElementById("registerButton");
registerButton.addEventListener("click", registerFunction, false);


async function registerFunction()
{
    let userObj =
    {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value,
        givenName: document.getElementById("givenName").value,
        surname: document.getElementById("surname").value,
        roleId: document.getElementById("roleId").value
    }

    let nonNull = Object.values(userObj).every(value =>
    {
        if (!value)
            return false;
        else
            return true;
    })

    if (nonNull) {
        await fetch('http://localhost:8080/userservlet',
            {
                method: 'POST',
                headers:{"Content-type":"application/json"},
                body: JSON.stringify(userObj)
            }
        );
    }
    else
    {
        alert("one or more fields are missing");
    }
}

