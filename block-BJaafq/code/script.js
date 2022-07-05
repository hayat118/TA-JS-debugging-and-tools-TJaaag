function add(numA,numB){
  return numA+numB;
}


// test framework
function test(message,callback){
  try{
    callback();
    console.log(`test ok`,message)
  }catch(error){
    console.error(error);
    console.log(`test fail`,message)
  }
}
function testAdd(){
  let result=add(24,6);
  let expected=29;
  if(result!==expected){
    throw new Error(`${result} is not equal to ${expected}`);
  }
}
test("adding 24 and 6",testAdd);

function subTestAdd(){
  let result=add(30,10);
  let expected=40;
  if(result!==expected){
    throw new Error(`${result} is not equal to ${expected}`);
  }
}
test("adding 30 and 10",subTestAdd);


function multiply(a,b){
  return a*b;
};

// test framework
function test(message,callback){
  try{
    callback();
    console.log(`test ok`,message)
  }catch(error){
    console.error(error);
    console.log(`test fail`,message);
  }
}

function testMultiply(){
  let result=multiply(20,10);
  let expected=200;
  if(result!==expected){
    throw new Error(`${result} is not equal to ${expected}`)
  }
}
test(`multily 20 and 10`,testMultiply);

