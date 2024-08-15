let toggleBillingInput = document.getElementById('billing-toggle');
let rangeInput = document.getElementById('rangeSlider');
let monthPrices = document.querySelectorAll('.price');
let pageViews = document.getElementById('viewsNumber');

const viewsArray = [10, 50, 100, 500, 100];
const pricesArray = [8, 12, 16, 20, 150];

rangeInput.addEventListener('input', (e) => {
    let currentValue = Number(e.target.value);

    pageViews.textContent = `${viewsArray[currentValue]}${currentValue === 4 ? 'M' : 'K'}`;
    
    monthPrices.forEach(price => {
        price.textContent = `$${pricesArray[currentValue]}.00`;
    });
});


// toggleBillingInput.addEventListener('change', () => {
//     if (toggleBillingInput.checked) {
//         twentyFiveDiscount(monthPrices);
//     } else {
//         console.log('Monthly billing selected');
        
//     }
// });

// const twentyFiveDiscount = total => {

//     let discountPercentage = 0.25;
//     let handleDiscount = total * discountPercentage;
//     let result = total - handleDiscount;
//     return result;
    
// }

toggleBillingInput.addEventListener('change', () => {
    if (toggleBillingInput.checked) {
        const discountedPrice = applyDiscount(monthPrices, 0.25);
        updatePriceDisplay(discountedPrice);
    } else {
        updatePriceDisplay(monthPrices); 
    }
});

const applyDiscount = (total, discountPercentage) => {
    return total * (1 - discountPercentage);
}

const updatePriceDisplay = price => {
    monthPrices.forEach(priceDisplay => {
        if (priceDisplay) {
            priceDisplay.textContent = `$${priceDisplay.toFixed(2)}`;
        }
    })
}

