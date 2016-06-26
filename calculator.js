// http://www.eio.com/images/Product/medium/27195.jpg
var num = "";
var sym = "=";
var mem = "";

function button(obj) {
  var text = $(obj).text();
  //don't want to have more than one decimal point
  if (text === "." && $("#numFont").text().indexOf(text) !== -1) {} else {
    num = num + text;
    $("#numFont").html("<h2>" + num + "</h2>");
  }
}

function clear2(obj) {
  var text = $(obj).text();
  num = "";
  $("#numFont").html("<h2>" + "0" + "</h2>");

  if (text === "C") {
    mem = "";
  }

}

function symbol(obj) {
  var text = $(obj).text();

  if (num !== "") {
    if (sym !== "=") {
      if (sym === "+") {
        num = parseFloat(num) + mem;
      } else if (sym === "-") {
        num = mem - parseFloat(num);
      } else if (sym === "/") {
        num = mem / parseFloat(num);
      } else {
        num = mem * parseFloat(num);
      }
    }
  }

  sym = text;

  if (num !== "") {
    mem = parseFloat(num);
  }
  $("#numFont").html("<h2>" + mem + "</h2>");
  num = "";
}