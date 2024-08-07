let toggleBillingInput = document.getElementById('billing-toggle');
let rangeInput = document.getElementById('rangeSlider');
let monthPrice = document.querySelector('.price');
let pageViews = document.getElementById('viewsNumber');
const viewsArray = [10, 50, 100, 500];
const pricesArray = [8, 12, 16, 20];

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
