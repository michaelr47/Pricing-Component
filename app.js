let toggleBillingInput = document.getElementById('billing-toggle');
let rangeInput = document.getElementById('rangeSlider');
let priceChange = document.querySelector('.price');

toggleBillingInput.addEventListener('change', () => {
    if (toggleBillingInput.checked) {
        console.log('Yearly billing selected');
        
    } else {
        console.log('Monthly billing selected');
        
    }
});

const twentyFiveDiscount = total => {

    let discountPercentage = 0.25;
    let handleDiscount = total * discountPercentage;
    let result = total - handleDiscount;
    return result;
    
}
