function sendMessage()
{
    var message = document.getElementById("messageinput").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if(name.length<2)
    {
        alert("Please enter your name.");
        return false;
    }
    if(re.test(email)==false)
    {
        alert("The email is not valid.");
        return false;
    }
    if(subject.length<3)
    {
        alert("The subject must be longer than 2 characters!");
        return false;
    }
    if(message.length<=10)
    {
        alert("Your message must be longer than 10 characters!");
        return false;
    }

    alert("Thank you for your message.");


}