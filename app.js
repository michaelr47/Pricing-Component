let toggleBillingInput = document.getElementById('billing-toggle');
let rangeInput = document.getElementById('rangeSlider');
let monthPrice = document.querySelector('.price');
let pageViews = document.getElementById('viewsNumber');

const viewsArray = [10, 50, 100, 500, 100];
const pricesArray = [8, 12, 16, 20, 150];

rangeInput.addEventListener('input', (e) => {
    let currentValue = Number(e.target.value);

    if (currentValue === 0) {
        pageViews.textContent = `${viewsArray[0]}K`; 
        monthPrice.textContent= `$${pricesArray[0]}.00`;
    }

    else if (currentValue === 1) {
        pageViews.textContent = `${viewsArray[1]}K`; 
        monthPrice.textContent= `$${pricesArray[1]}.00`;
    }
    else if (currentValue === 2) { 
        pageViews.textContent = `${viewsArray[2]}K`; 
        monthPrice.textContent= `$${pricesArray[2]}.00`;
    }
    else if (currentValue === 3) {
        pageViews.textContent = `${viewsArray[3]}K`; 
        monthPrice.textContent= `$${pricesArray[3]}.00`;
    } else {
        pageViews.textContent = `${viewsArray[4]}M`; 
        monthPrice.textContent= `$${pricesArray[4]}.00`;
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
