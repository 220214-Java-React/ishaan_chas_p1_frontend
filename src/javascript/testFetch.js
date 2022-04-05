const baseURL = "http://127.0.0.1:5500/src/"
const thisURL = window.location.href;
const url = "http://localhost:8080/UserServlet"

let registerButton = document.getElementById("registerButton");
registerButton.addEventListener("click", registerFunction, false);


async function registerFunction()
{
    let userObj =
    {
        username: document.getElementById("userIdCreation").value,
        password: document.getElementById("passwordIdCreationVerify").value,
        email: document.getElementById("emailCreation").value,
        givenName: document.getElementById("givenNameId").value,
        surname: document.getElementById("surnameId").value,
        roleId: document.getElementById("roleIdId").value
    }

    let nonNull = Object.values(userObj).every(value =>
    {
        if (!value)
            return false;
        else
            return true;
    })

    if (nonNull) {
        await fetch('http://localhost:8080/UserServlet',
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

