let toggleBillingInput = document.getElementById('billing-toggle');
let rangeInput = document.getElementById('rangeSlider');
let monthPrice = document.querySelector('.price');

rangeInput.addEventListener('input', (e) => {
    if (e.target.value === 0) {
        return 'one';
    }

    else if (e.target.value === 1) {
        return 'two';
    }
    else if (e.target.value === 2) {
        return 'three';
    }
    else {
        return 'four';
    }

});

toggleBillingInput.addEventListener('change', () => {
    if (toggleBillingInput.checked) {
        twentyFiveDiscount(monthPrice);
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
