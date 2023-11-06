let total = document.getElementById("total")
let ppl = document.getElementById("ppl")

let bill_total = document.getElementById("bill-tax")
let equaly = document.getElementById("equaly")

let calculate = document.getElementById("calculate")
calculate.addEventListener("click", ()=>{
    let tot = parseFloat(total.value);
    console.log(tot);
    let tota = tot * 0.15

    bill_total.textContent = "Your tax is: " + tota;

    let people = (tot + tota) / ppl.value;
    equaly.textContent = "Everyone pay: " + people;
})