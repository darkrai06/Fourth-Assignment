const donationHistory = [];

function updateHistory() {
    const historyContainer = document.getElementById('history-container');
    const noHistory = document.getElementById('no-history');

    historyContainer.innerHTML = '';

    if (donationHistory.length > 0) {

        noHistory.classList.add('hidden');
        historyContainer.classList.remove('hidden');

        for (const entry of donationHistory) {
            const historyEntry = document.createElement('div');
            historyEntry.classList.add('bg-white', 'shadow', 'p-4', 'rounded-lg', 'flex', 'flex-col', 'gap-2');
        
            const donationText = document.createElement('p');
            donationText.textContent = `${entry.amount} Taka is Donated for ${entry.cause}`;
            donationText.classList.add('text-base', 'font-bold');
        
            const dateText = document.createElement('p');
            dateText.textContent = `Date: ${entry.date}`;
            dateText.classList.add('text-sm', 'text-gray-500');
        
            historyEntry.appendChild(donationText);
            historyEntry.appendChild(dateText);
        
            historyContainer.appendChild(historyEntry);
        }
    } else {
        noHistory.classList.remove('hidden');
        historyContainer.classList.add('hidden');
    }
}

function addDonationHistory(amount, cause) {
    const currentDate = new Date();
    donationHistory.push({
        amount: amount,
        cause: cause,
        date: currentDate.toString()
    });

    updateHistory();
}

const mainBalance= document.getElementById('taka').innerText;
const numBalance= parseFloat(mainBalance);



document.getElementById('noakhali-btn').addEventListener('click', function () {
    const donationAmount = document.getElementById('noakhali-money').value;
    let flag= 1;
    for (const child of donationAmount) {
        if (child >= '0' && child <= '9') 
             continue;
        else {
            flag=0;
            break;
        }
    }
    if (donationAmount && donationAmount > 0 && numBalance >= donationAmount && flag) {
        addDonationHistory(donationAmount, "Flood Relief in Noakhali, Bangladesh");
    }
});

document.getElementById('feni-btn').addEventListener('click', function () {
    const donationAmount = document.getElementById('feni-money').value;
    let flag= 1;
    for (const child of donationAmount) {
        if (child >= '0' && child <= '9') 
             continue;
        else {
            flag=0;
            break;
        }
    }
    if (donationAmount && donationAmount > 0 && numBalance >= donationAmount && flag) {
        addDonationHistory(donationAmount, "Flood Relief in Feni, Bangladesh");
    }
});

document.getElementById('quota-btn').addEventListener('click', function () {
    const donationAmount = document.getElementById('quota-money').value;
    let flag= 1;
    for (const child of donationAmount) {
        if (child >= '0' && child <= '9') 
             continue;
        else {
            flag=0;
            break;
        }
    }
    if (donationAmount && donationAmount > 0 && numBalance >= donationAmount && flag) {
        addDonationHistory(donationAmount, "Aid for Injured in the Quota Movement");
    }
});
