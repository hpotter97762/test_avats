function login(event) {
    console.log("Logging in")
    event.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const url = 'https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp';
    console.log(email);
    console.log(password);

    const data = `{
        "login_id" : "${email}",
        "password" :"${password}"
    }`;
    
    $.ajax({
        url: url,
        type: "POST",
        contentType: "application/json",
        data: data,
        success: function (resp) {
          console.log(resp);
        },
      });
}
