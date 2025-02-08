const items = [
  { id: 1, item: 'Item 1', price: 10 },
  { id: 1, item: 'Item 2', price: 20 },
  { id: 1, item: 'Item 3', price: 15 },
  { id: 1, item: 'Item 4', price: 25 },
];

const itemListContainer = document.querySelector('#itemList');
const totalCost = document.querySelector('#totalCost');
const averageCost = document.querySelector('#averageCost');

const mainitemList = items.reduce((acc,curr)=>{
acc.totalCost += curr.price

const itemList = document.createElement("li")
itemList.innerHTML = `${curr.item} - $${curr.price}`
itemListContainer.appendChild(itemList)
 
return acc
},{totalCost:0})

const avgCost = mainitemList.totalCost/items.length

 totalCost.innerHTML =mainitemList.totalCost
averageCost.innerHTML = avgCost
