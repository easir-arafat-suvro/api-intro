/* NOTES:
1. API help to load data form server.
2. When sent make it JSON.stringify(object) .
3. When receive make it JSON.parse(JSON string).
3. 
*/

/* JavaScript Object Notation (JSON) */

/* Single line object */
const user = { id: 11, name: 'Gorib Amir', job: 'actor' };
// console.log(user);


/* Multi line object */
const shop = {
    name: 'ALia Store',
    address: 'Ranabir road',
    products: ['laptop', 'mobile', 'pepsi'],
    profit: 15000,
    owner: {
        name: 'Alia Bhatt',
        profession: 'Actor',
    },
    isExpendive: false
};
const shopStringfied = JSON.stringify(shop);

// console.log(shop); // Normal object
console.log(shopStringfied); // stringify object in JSON

const converted = JSON.parse(shopStringfied); // convert a JSON to normal js code
console.log(converted);
