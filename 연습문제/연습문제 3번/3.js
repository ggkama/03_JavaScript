const btn = document.getElementById("btn"); 
const result = document.getElementById("result");
const fruitLi = document.getElementsByClassName("fruit");

btn.addEventListener("click", () => {

  let str = "";
  let sum = 0;

  for (let fruit of fruitLi) {
    

    if (fruit.checked) {
      const label = fruit.nextElementSibling.innerText;
      const price = fruit.nextElementSibling.nextElementSibling.innerText;
      const input = fruit.nextElementSibling.nextElementSibling.nextElementSibling.value;

      sum += Number(price) * input;

      str += label + "" + input + "개 ";
    }
  }

  str += "가격" + sum + "원";
  result.innerText = str;

});