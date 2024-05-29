import "./styles.css";
for (var num = 9; num > 0; num--) {
  var elm = document.createElement("button");
  elm.innerHTML = num;
  elm.setAttribute("id", num);
  elm.setAttribute("class", "circle");
  var function_name = "remove(" + num + ")";
  elm.setAttribute("onclick", function_name);
  document.getElementById("main").appendChild(elm);

  var left_pos = 10;
  var top_pos = 100;

  left_pos = left_pos + Math.floor(Math.random() * 400);
  top_pos = top_pos + Math.floor(Math.random() * 300);

  document.getElementById(num).style.left = "" + left_pos + "px";
  document.getElementById(num).style.top = "" + top_pos + "px";

  var size = 30 + Math.floor(Math.random() * 61); // ランダムなサイズの設定
  elm.style.width = size + "px";
  elm.style.height = size + "px";
  elm.style.borderRadius = size / 2 + "px";

  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  elm.style.backgroundColor = randomColor;
}
var next = 1;
document.remove = function (id) {
  if (id === next) {
    document.getElementById("main").removeChild(document.getElementById(id));
    next = next + 1;
  }
};
// Function to reposition remaining circles
function repositionCircles() {
  for (var num = next; num <= 9; num++) {
    var elm = document.getElementById(num);
    if (elm) {
      var left_pos = 10 + Math.floor(Math.random() * 400);
      var top_pos = 100 + Math.floor(Math.random() * 300);
      elm.style.left = left_pos + "px";
      elm.style.top = top_pos + "px";
    }
  }
}

// Set interval to reposition circles every 5 seconds
setInterval(repositionCircles, 5000);
