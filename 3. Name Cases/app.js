// Q NO 3 (Name Cases)
//lower case
var personName = "Noorhassan";
console.log("lowercase:", personName.toLowerCase());
//UPPER CASE
console.log("UPPERCASE:", personName.toLocaleUpperCase());
//Title Case
console.log("Titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
