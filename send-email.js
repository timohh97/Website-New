$(document).ready(function () {
    $(".submit").click(function (event) {

       alert("hello")
        var name = $("#name").val()
        var email = $("#email").val()
        var subject = $("#subject").val()
        var message = $("#message").val()
        var status = $("#status")
        status.empty()


      if(name.length>1){
        if (email.length > 5 && email.includes("@") && email.includes(".")) {
            if (subject.length > 2) {
                if (message.length > 14) {

                }
                else {
                    event.preventDefault()
                    status.append("<div>Please enter at least 15 characters for the message!</div>")
                }
            }
            else {
                event.preventDefault()
                status.append("<div>Please enter at least 3 characters for the subject!</div>")
            }
        }
        else {
            event.preventDefault()
            status.append("<div>The email is not valid!</div>")
        }
    }
    else
    {
       
        event.preventDefault()
        status.append("<div>Please enter your name.</div>")
    }






    }
    )


}
)
