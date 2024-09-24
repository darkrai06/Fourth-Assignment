// Array to store donation history
let donationHistory = [];

// Donation modal confirmation function
function addDonation(area, amount) {
    // Create a new donation object
    const donation = {
        area: area,
        amount: parseFloat(amount),
        date: new Date().toLocaleString()
    };
    // Add the donation to the history
    donationHistory.push(donation);

    // Update history view
    updateHistoryView();
}

// Function to update the history section
function updateHistoryView() {
    const historyContainer = document.getElementById('history-container');
    const noHistoryText = document.getElementById('no-history');

    // Clear previous history entries
    historyContainer.innerHTML = '';

    if (donationHistory.length === 0) {
        historyContainer.classList.add('hidden');
        noHistoryText.classList.remove('hidden');
    } else {
        noHistoryText.classList.add('hidden');
        historyContainer.classList.remove('hidden');

        // Create history elements for each donation
        donationHistory.forEach((donation, index) => {
            const historyItem = document.createElement('div');
            historyItem.classList.add('bg-white', 'shadow-lg', 'p-4', 'rounded-lg', 'flex', 'justify-between');

            historyItem.innerHTML = `
                <div class="flex flex-col">
                    <span class="font-bold text-lg">${donation.area}</span>
                    <span class="text-gray-600">${donation.date}</span>
                </div>
                <span class="text-xl font-bold">${donation.amount} BDT</span>
            `;
            historyContainer.appendChild(historyItem);
        });
    }
}

// Handle donation button clicks for each location
document.querySelector('#my_modal_noakhali form button').addEventListener('click', () => {
    const amount = document.getElementById('noakhali-money').value;
    if (amount && amount > 0) {
        addDonation('Noakhali Flood Relief', amount);
        document.getElementById('noakhali-money').value = ''; // Clear input field
    }
});

document.querySelector('#my_modal_feni form button').addEventListener('click', () => {
    const amount = document.getElementById('feni-money').value;
    if (amount && amount > 0) {
        addDonation('Feni Flood Relief', amount);
        document.getElementById('feni-money').value = ''; // Clear input field
    }
});

document.querySelector('#my_modal_quota form button').addEventListener('click', () => {
    const amount = document.getElementById('quota-money').value;
    if (amount && amount > 0) {
        addDonation('Aid for Injured in Quota Movement', amount);
        document.getElementById('quota-money').value = ''; // Clear input field
    }
});
