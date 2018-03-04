console.log("Why, hello there.");
function writeToDOM(domString,domId){
  var myBody = document.getElementById("writeHere");
  myBody.innerHTML += "<div id='" + domId + "'></div>";
  var myElement = document.getElementById(domId);
  myElement.innerHTML += "<h1>" + domId + "</h1>";
  myElement.innerHTML += "<h3>" + domString + "</h3>";
};

//CHALLENGE 1
function ageThing(birthYear, myYear){
  if(birthYear < myYear){
    var calcAge = birthYear - myYear;
    var builtString = ("In the year " + myYear + ", you will be " + calcAge + " years old");
    return builtString;
  }else if(birthYear > myYear){
    var calcAge = birthYear - myYear;
    var builtString = ("In the year " + myYear + ", it will be " + calcAge + " years before you are born.");
    return builtString;
  }else{
    var builtString = ("Silly, you were born in this year.");
    return builtString;
  };
  writeToDOM(builtString,'challenge-1');
};

writeToDOM(ageThing(1986,1956),"challenge-1");

//Challenge 2

function tryMe(myNum){
  var resultArray = [];
  for(var i = 2; i < myNum; i++){
    if(myNum % i === 0){
      var isPrime = false;
    }else{
      var isPrime = true;
    };
  };
  resultArray.push(isPrime);
  
  if(myNum % 2 === 0){
    var isEven = true;
  }else{
    var isEven = false;
  };
  
  resultArray.push(isEven);

  if(myNum % 10 === 0){
    var multOf10 = true;
  }else{
    var multOf10 = false;
  };
  resultArray.push(multOf10);

  return resultArray;
};

writeToDOM(tryMe(12),"challenge-2");

