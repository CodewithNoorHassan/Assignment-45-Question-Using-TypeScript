"use strict";
// Q NO 15 (Changing Guest List)
let Guest_list = ['Fahad', 'Noman', 'Hamza', 'Noor', 'Asif'];
let messege = ('Today is my birthday party you are invited on dinner\n');
let not_present = ("Hamza");
let new_guest = 'Hassan';
Guest_list[2] = new_guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`"${Guest_list[i]}",\n${messege}`);
}
;
console.log(`Mr. ${not_present} will not be coming to dinner tonight. `);
