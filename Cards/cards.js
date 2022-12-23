var inputs = document.querySelectorAll(".mask");

let inputArr = [];

for (let i of inputs) {
  inputArr.push(i);
  let ind = inputArr.indexOf(i);
  inputArr[ind].addEventListener("keypress", () => {
    if (event.key == "Enter" && ind !== inputArr.length) {
      inputArr[ind + 1].focus();
    }
  });
}
