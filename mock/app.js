 
 // Dependency INjection 
 
 export function processOrder (data, dependency ) {
    // some logic 

    const paymentInfo = dependency.processPayment(data.amount);

    return paymentInfo
}

function processPayment (amount) {

    // API call to external paymet gateway

    console.log('I am mocked .....')
    return {id: '123', amount : amount};
}