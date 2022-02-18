document.getElementById('calculate-btn').addEventListener('click', function () {
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

    //error handling
    if (inc > 0 && foodCost > 0 && rentCost > 0 && rentCost > 0) {
        if (inc > totalCost) {
            // update total cost in total expence section 
            document.getElementById('total').innerText = totalCost;
            //  calculate balance 
            document.getElementById("balance").innerText = inc - totalCost;
        } else {
            document.getElementById('total').innerText = "Your can not expense more than what you have !";
            document.getElementById('total').style.color = "red";
            document.getElementById("balance").innerText = "Earn More Then Expense";
            document.getElementById("balance").style.color = "red";
            document.getElementById('income-input').value = '';
            document.getElementById('food-input').value = '';
            document.getElementById('rent-input').value = '';
            document.getElementById('cloth-input').value = '';
            document.getElementById('save-input').value = '';
        }
    } else if (isNaN(inc) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothsCost)) {
        document.getElementById('total').innerText = "Please enter a number!";
        document.getElementById('total').style.color = "red";
        document.getElementById("balance").innerText = "Please enter a number!";
        document.getElementById("balance").style.color = "red";
        document.getElementById('income-input').value = '';
        document.getElementById('food-input').value = '';
        document.getElementById('rent-input').value = '';
        document.getElementById('cloth-input').value = '';
        document.getElementById('save-input').value = '';
    }
});

// save button even handler
document.getElementById('save-btn').addEventListener('click', function () {

    const saveInput = document.getElementById('save-input');
    const savePercent = parseFloat(saveInput.value);
    /*  checking percentage is 
    not a string and 
    not a negative number */
    const income = document.getElementById('income-input');
    const inc = parseFloat(income.value);
    const balanced = document.getElementById("balance");
    const bl = parseFloat(balanced.innerText);
    const savingsAmout = (savePercent * inc) / 100;

    /* 
    savings should be 
    less than current balance */
    if (savePercent > 0) {
        if (savingsAmout <= bl && savingsAmout > 0) {
            document.getElementById('savingAmount').innerText = savingsAmout;
            document.getElementById('remainingBalance').innerText = bl - savingsAmout;
        } else {
            document.getElementById('savingAmount').innerText = "Savings Amount can not be more than the current balance";
            document.getElementById('savingAmount').style.color = "red";
            document.getElementById('remainingBalance').innerText = "Not Found";
            document.getElementById('remainingBalance').style.color = "red";
            document.getElementById('save-input').value = '';
        }
    } else if (isNaN(savePercent)) {
        document.getElementById('savingAmount').innerText = "Please enter a number!";
        document.getElementById('savingAmount').style.color = "red";
        document.getElementById('remainingBalance').innerText = "Not Found";
        document.getElementById('remainingBalance').style.color = "red";
    }


});