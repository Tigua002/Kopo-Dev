document.getElementsByClassName("kontaktInfoHolder")[0].addEventListener("submit", sendMail)

async function sendMail() {
    let name = document.getElementById("navn").value
    let Email = document.getElementById("Email").value
    let phone = document.getElementById("telefon").value
    let text = document.getElementById("EmailText").value
    let message = `
    ${text}

    ${name}
    ${Email}
    ${phone}
    `

    const data = {
        message: message,
        sender: name,
        email: Email,
    }
    // sends the data to the database
    fetch("/send/mail", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

}

