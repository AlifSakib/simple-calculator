function deletMe() {
  document.getElementById("my-result").value = "";
}

let getInputs = document.querySelectorAll(".inputs");

for (let inputs of getInputs) {
  inputs.addEventListener("click", function () {
    document.getElementById("my-result").value += inputs.value;
  });
}

document.getElementById("answer").addEventListener("click", function () {
  let answer = eval(document.getElementById("my-result").value);
  document.getElementById("my-result").value = answer;
});
