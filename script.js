const phrases = [
  "Наш менеджер перезвонит Вам в ближайшее время!",
  "Уточнить детали можно по телефону 123456789",
  "Оставайтесь на связи!",
  "Сегодня прекрасная погода!",
  "С Вами очень приятно общаться!",
];

const hello = "Hello!";
const goodbye = "Good Bye!";

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
    }

    return false;
  });
});
