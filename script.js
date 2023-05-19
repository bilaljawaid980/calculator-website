const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((item) => {
  item.onclick = () => {
    switch (item.id) {
      case "clear":
        display.innerText = "";
        break;
      case "backspace":
        display.innerText = display.innerText.slice(0, -1);
        break;
      case "equal":
        if (display.innerText !== "") {
          display.innerText = eval(display.innerText);
        } else {
          display.innerText = "Empty!";
          setTimeout(() => (display.innerText = ""), 2000);
        }
        break;
      default:
        display.innerText += item.id;
    }
  };
});

function toggleTheme() {
  document.body.classList.toggle("dark");
}
