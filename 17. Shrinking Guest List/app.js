"use strict";
let guest_list = ['Noor', 'Fahad', 'Noman', 'Kamal', 'Shoaib'];
let not_present = 'noman';
let new_guest = 'Umer Siddique';
guest_list[2] = new_guest;
// for (var i = 0; i < guest_list.length; i++) {
//     console.log('Respected Sir ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n');
// }
console.log(`Mr. ${not_present} will not coming tomorrow dinner. `);
guest_list.unshift('irfan', 'arif', 'amjad');
// for (var i = 0; i < guest_list.length; i++) {
//     console.log('Respected Sir ' + guest_list[i] + ',\nWe invited you on dinner tomorrow. we found bigger dinner table so we decide to invite 3 more guest\nThank You\n');
// }
console.log('\nUnfortunately we cant not arrange big dinner table, Only 2 people allow.');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir, ${remove_guest} you are not invited for dinner.`);
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir ' + guest_list[i] + ',\nYes you are still invited on tomorrow dinner \nThank You\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
