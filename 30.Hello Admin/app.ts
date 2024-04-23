let usernames: string[] = ['admin', 'Noor', 'Fahad', 'Saad', 'Faizan'];

for (let i=0; i<usernames.length; i++) {
    if (usernames[i].includes('admin')) {
        console.log('Hello admin, would you like to see a status report?');
    } else {
        console.log(`Hello ${usernames}, thank you for logging in again.`);
    }
}
