function fullName(firstName,lastName){
  return firstName +" "+ lastName;
}
let result=fullName("arya","stark");
let expected='arya stark';
if(result!==expected){
  throw new error(`${result} is not equal to ${expected}`)
};

function totalAmount(amount,taxRate){
  return amount + (amount * taxRate) 
}
let result=totalAmount(1000,10);
let expected=2000;
if(result!==expected){
  throw new error(`${result} is not equal to ${expected}`)
}