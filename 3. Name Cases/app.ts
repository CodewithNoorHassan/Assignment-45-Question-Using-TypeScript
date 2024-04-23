// Q NO 3 (Name Cases)
//lower case
let personName: string ="Noorhassan"
console.log("lowercase:", personName.toLowerCase());

//UPPER CASE
console.log("UPPERCASE:", personName.toLocaleUpperCase());

//Title Case
console.log("Titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
