// import jQuery from "jquery";
// const a = new jQuery();

// $(document).ready(function() {
//   });

$(document).ready(function () {
  $("#submit").click(function (event) {
    event.preventDefault();

    let name = $("#name").val();
    let email = $("#email").val();
    let phone = $("#phone").val();

    const required = [name, email, phone];

    for (let i = 0; i < required.length; i++) {

      if (required[i] == "") {
        $("#message")
          .html("Please Fill Out Required Fields")
          .addClass("warning");
        $("label").eq(i).addClass("warning");
      } else {
        $("#message").html("").removeClass("warning");
        $("label").eq(i).removeClass("warning");
      }
    
    }

    if(!$("label").hasClass("warning")) {
        $("form").remove();
        $("h2").html("Thanks for your feedback!")
    }

  });
});
