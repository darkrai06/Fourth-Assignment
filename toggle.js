document.getElementById('history-click').addEventListener('click', function(){

    console.log('History Button Clicked');
    document.getElementById('main-history').classList.remove('hidden');
    document.getElementById('main-donation').classList.add('hidden');
    document.getElementById('history-click').classList.remove('btn-outline');
    document.getElementById('donation-click').classList.remove('bg-[#B4F461]');
    document.getElementById('donation-click').classList.add('btn-outline');
    document.getElementById('history-click').classList.add('bg-[#B4F461]');
})

document.getElementById('donation-click').addEventListener('click', function(){

    console.log('Donation Button Clicked');
    document.getElementById('main-donation').classList.remove('hidden');
    document.getElementById('main-history').classList.add('hidden');
    document.getElementById('history-click').classList.add('btn-outline');
    document.getElementById('donation-click').classList.add('bg-[#B4F461]');
    document.getElementById('donation-click').classList.remove('btn-outline');
    document.getElementById('history-click').classList.remove('bg-[#B4F461]');
})