let toggleBillingInput = document.getElementById('billing-toggle');
let rangeInput = document.getElementById('rangeSlider');
let monthPrices = document.querySelectorAll('.price');
let pageViews = document.getElementById('viewsNumber');

const viewsArray = [10, 50, 100, 500, 100];
const pricesArray = [8, 12, 16, 30, 50];

rangeInput.addEventListener('input', (e) => {
    let currentValue = Number(e.target.value);

    pageViews.textContent = `${viewsArray[currentValue]}${currentValue === 4 ? 'M' : 'K'}`;
    
    monthPrices.forEach(price => {
        price.textContent = `$${pricesArray[currentValue]}.00`;
    });
});

const applyDiscount = (prices, discountPercentage) => {
    if (Array.isArray(prices)) {
        return prices.map(price => price * (1 - discountPercentage));
    } else {
        return prices * (1 - discountPercentage);
    }
}

const updatePriceDisplay = prices => {
    const priceDisplays = document.querySelectorAll('.price'); 
    if (Array.isArray(prices)) {
        priceDisplays.forEach((priceDisplay, index) => {
            if (priceDisplay) {
                priceDisplay.textContent = `$${prices[index].toFixed(2)}`;
            }
        });
    } else {
        priceDisplays.forEach(priceDisplay => {
            if (priceDisplay) {
                priceDisplay.textContent = `$${prices.toFixed(2)}`;
            }
        });
    }
}

toggleBillingInput.addEventListener('change', () => {
    if (toggleBillingInput.checked) {

        const discountedPrices = Array.from(monthPrices).map(priceElement => {
            let textPrice = priceElement.innerText.replace('$', ''); 
            return applyDiscount(Number(textPrice), 0.25);
        });

        console.log(discountedPrices);
        updatePriceDisplay(discountedPrices);
    } else {

        const originalPrices = Array.from(monthPrices).map(priceElement => {
            return Number(priceElement.innerText.replace('$', ''));
        });

        updatePriceDisplay(originalPrices);
    }
});