document.getElementById('billing-toggle').addEventListener('change', function() {
    if(this.checked) {
        console.log('Yearly billing selected');
        // Add any functionality you need for yearly billing
    } else {
        console.log('Monthly billing selected');
        // Add any functionality you need for monthly billing
    }
});