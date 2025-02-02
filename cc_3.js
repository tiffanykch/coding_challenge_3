//TASK 1: PRODUCT PRICE MANAGEMENT

//Declare array with 5 numerical values
let prices = [99.99, 300, 122, 50, 15]

//Add new price to array
prices.push(888)
//console.log(prices)

//Remove first item from array
prices.shift()
//console.log(prices)

//Log updated list to the console
console.log("Updated Prices:", prices)

//TASK 2: MODIFYING CUSTOMER ORDERS

//Declare array with 5 numerical values representing quantities
let orders = [12, 43, 5, 54, 9]
//console.log("Initial Orders:", orders)

//Increase third quantity by 5
orders[2] += 5

//Log updated array to the console
console.log("Updated Orders:", orders)

//Calculate total number of orders
let total_orders = orders.reduce((total, order) => total + order, 0)

//Log total order quantity to the console
console.log("Total Orders:", total_orders)

//TASK 3: EMPLOYEE PERFORMANCE TRACKING

//Declare object containing employee details
let employee = {
    name: "Potato Mine",
    role: "Explosive",
    performanceScore: 75,
    isActive: true
};

//Update performanceScore property
employee.performanceScore = 80

//Add new promotionEligible property to array
employee.promotionEligible = true

//Log updated object to the console
console.log("Updated Employee Details:", employee)

//TASK 4 - CUSTOMER FEEDBACK RECORDS

//Declare array containing 3 objects
let feedback = [
    {customerName: "Crazy Dave", feedbackText: "This is crazy!!", rating: 4},
    {customerName: "Dr. Zomboss", feedbackText: "Too many plants.", rating: 2},
    {customerName: "Peashooter", feedbackText: "AHHH", rating: 5}
]

//Add new feedback object to the array
feedback.push({
    customerName: "Ngan Hang",
    feedbackText: "This looks nice!",
    rating: 4.5
});

//Log all customer feedback to the console
console.log("Customer Feedback:", feedback)
