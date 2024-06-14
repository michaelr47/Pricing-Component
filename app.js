let toggleBillingInput = document.getElementById('billing-toggle');
let rangeInput = document.getElementById('rangeSlider');
let priceChange = document.querySelector('.price');

toggleBillingInput.addEventListener('change', () => {
    if(this.checked) {
        console.log('Yearly billing selected');
        
    } else {
        console.log('Monthly billing selected');
        
    }
});
