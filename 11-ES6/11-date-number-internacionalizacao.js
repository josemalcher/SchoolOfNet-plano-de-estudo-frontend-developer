// api Intl

//let date = new Date();

//Intl.DateTimeFormat('pt-BR').format(date); //BCP47
//Intl.DateTimeFormat('en-US').format(date); 

//console.log(new Intl.DateTimeFormat('pt-BR').format(date));
//console.log(Intl.DateTimeFormat('pt-BR', {month:"long", day:"numeric", year: "numeric"}).format(date));

var date = new Date();
// Results below assume UTC timezone - your results may vary

console.log(new Intl.DateTimeFormat('pt-BR').format(date));

console.log(new Intl.DateTimeFormat('en-GB').format(date));
// expected output: "20/12/2012"

// Include a fallback language, in this case Indonesian
console.log(new Intl.DateTimeFormat(['ban', 'id']).format(date));
// expected output: "20/12/2012

console.log('----------------------------------------------');
console.log(new Intl.NumberFormat('pt-BR').format(2.22));

console.log(new Intl.NumberFormat('pt-BR').format(2000.22));
console.log(new Intl.NumberFormat('en-US').format(2000.22));

console.log(new Intl.NumberFormat('en-US', {minimumFractionDigits:2}).format(2000));
console.log(new Intl.NumberFormat('en-US', {minimumFractionDigits:2, maximumFractionDigits:2}).format(2000.12345));
console.log(new Intl.NumberFormat('en-US', {minimumFractionDigits:2, maximumFractionDigits:2, currency: 'EUR', style: 'currency'}).format(2000.12345));
console.log(new Intl.NumberFormat('en-US', {minimumFractionDigits:2, maximumFractionDigits:2, currency: 'BRL', style: 'currency'}).format(2000.12345));