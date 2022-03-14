document.getElementById('deposit-button').addEventListener('click', function () {
    const depositButton = document.getElementById('deposit-input');


    const newDepositAmountText = depositButton.value;
    const newDepositAmount = parseFloat(newDepositAmountText)
    console.log(newDepositAmount);




    const depositTotal = document.getElementById('deposit-total');

    const preDepositTotalText = depositTotal.innerText;
    const preDepositTotal = parseFloat(preDepositTotalText)
    const newDeposit = preDepositTotal + newDepositAmount;

    depositTotal.innerText = newDeposit;
    depositButton.value = '';

    const balanceTotal = document.getElementById('Balance-total');
    const balanceTotalaText = balanceTotal.innerText;
    const preBalanceTotal = parseFloat(balanceTotalaText);
    const newBalanceTotal = preBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;



});

document.getElementById('widthdraw-button').addEventListener('click', function () {
    const widthdrawInput = document.getElementById('widthdraw-input');
    const widthdrawAmounttext = widthdrawInput.value;

    const widthdrawAmount = parseFloat(widthdrawAmounttext);

    const widthdrawTotal = document.getElementById('withdraw-total');
    const prewidthdrawTotalText = widthdrawTotal.innerText;
    const prewidthdrawTotal = parseFloat(prewidthdrawTotalText);

    const newWidthDrawTotal = prewidthdrawTotal + widthdrawAmount;
    widthdrawTotal.innerText = newWidthDrawTotal;

    const balanceTotal = document.getElementById('Balance-total');

    const preBalanceTotalText = balanceTotal.innerText;
    const preBalanceTotal = parseFloat(preBalanceTotalText);
    const newBalanceTotal = preBalanceTotal - newWidthDrawTotal;
    balanceTotal.innerText = newBalanceTotal;


    widthdrawInput.value = '';

});

