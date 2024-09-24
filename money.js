function addingMoney(elementID, workID, modalID) {
    const balanceText = document.getElementById('taka').innerText;
    const addMoneyText = document.getElementById(elementID).value;
    const donatedText = document.getElementById(workID).innerText;

    const balanceNum = parseFloat(balanceText);
    const addMoneyNum = parseFloat(addMoneyText);
    const donatedNum = parseFloat(donatedText);

    if (isNaN(addMoneyNum) || addMoneyNum <= 0) {
        alert('Please enter a valid donation amount.');
        return;
    }

    for (const child of addMoneyText) {
        if (child >= 0 && child <= 9) 
            continue;
        else {
            alert('Please enter a valid Donation amount.');
            return;
        }
    }

    if (addMoneyNum > balanceNum) {
        alert('Insufficient balance.');
        return;
    }

    const newDonatedAmount = donatedNum + addMoneyNum;
    const updatedBalance = balanceNum - addMoneyNum;

    document.getElementById(workID).innerText = newDonatedAmount;
    document.getElementById('taka').innerText = updatedBalance;
    document.getElementById(elementID).value = '';

    const modalElement = document.getElementById(modalID);
    if (modalElement) {
        console.log('Modal found');
        modalElement.showModal();
    } else {
        console.error('Modal element not found');
    }
}

document.getElementById('noakhali-btn').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Donation for Noakhali button clicked.');

    addingMoney("noakhali-money", "noakhali", "my_modal_noakhali"); 
});

document.getElementById('feni-btn').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Donation for Feni button clicked.');

    addingMoney("feni-money", "feni", "my_modal_feni"); 
});

document.getElementById('quota-btn').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Donation for quota button clicked.');

    addingMoney("quota-money", "quota", "my_modal_quota"); 
});