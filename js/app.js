document.getElementById('calculate-btn').addEventListener('click', function(){
    //get income from input field
    const income = document.getElementById("income-input");
  const inc = parseFloat(income.value);
    //get expense from input field
    const foodCostInput = document.getElementById("food-input");
    const foodCost = parseFloat(foodCostInput.value);
    const rentCostInput = document.getElementById("rent-input");
    const rentCost = parseFloat(rentCostInput.value);
    const clothsCostInput = document.getElementById("cloth-input");
    const clothsCost = parseFloat(clothsCostInput.value);
    const totalCost = foodCost + rentCost + clothsCost;
    console.log(totalCost);
});