function updatePrice(itemId, price) {
    document.getElementById(itemId).innerText = price;

    const BestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;

    const totalCost = parseFloat(BestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCost);
    const total = document.getElementById('total-price').innerText = totalCost;

};

onclickAdd('sixteenGB', 'memory-cost', 300);
onclickAdd('eightGB', 'memory-cost', 0);
onclickAdd('ssd2', 'storage-cost', 0);
onclickAdd('ssd3', 'storage-cost', 500);
onclickAdd('paid-delivery', 'delivery-cost', 50);
onclickAdd('free-delivery', 'delivery-cost', 0);

function onclickAdd(onclclickID, toTalcost, price) {
    document.getElementById(onclclickID).addEventListener('click', function() {

        updatePrice(toTalcost, price);
    })

}

document.getElementById('apply-btn').addEventListener('click', function() {
    const inputFiled = document.getElementById('promo-input').value;
    const totalCostOf = document.getElementById('total-price').innerText;
    if (inputFiled == totalCostOf) {
        inputFiled.value = ' ';
        alert('code is okay');

    } else {
        inputFiled.value = ' ';
        alert('Try again');
    }

});