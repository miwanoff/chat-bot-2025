const phrases = [
  "Наш менеджер передзвонить Вам найближчим часом!",
  "Уточнити деталі можна за телефоном 123456789",
  "Залишайтеся на зв'язку!",
  "Сьогодні чудова погода!",
  "З Вами дуже приємно спілкуватися!",
  "Все про Volvo",
  "Все про BMW",
  "Все про Fiat",
];

const hello = "Hello!";
const goodbye = "Good Bye!";
const dots = "...";

$(document).ready(function () {
  $("h1").css("color", "blue");

  $("#chatbot").click(function () {
    $(this).toggleClass("show");
  });

  $("#answers").append(`<div id="bot_anw">${hello}</div>`);

  $("#question").click(function () {
    return false;
  });

  $("#answers").click(function () {
    return false;
  });

  $("#ok").click(function () {
    let q = $("#question").val().trim();
    $("#question").val("");
    if (q != "") {
      console.log(q);
      $("#answers").append(`<div id="human_anw">${q}</div>`);

      setTimeout(function () {
        if (q.toLowerCase().includes("bye")) {
          $("#answers").append(`<div id="bot_anw">${goodbye}</div>`);
        } else if (q.toLowerCase().includes("volvo")) {
          $("#answers").append(`<div id="bot_anw">${phrases[5]}</div>`);
        } else {
          $("#answers").append(`<div id="bot_anw">${dots}</div>`);
        }
      }, 1000);
    }

    return false;
  });
});

$('#question').keypress("keyup", function (event) {
  if (event.keyCode == 13){
    $("#ok").click();
    return false;
  }
});
