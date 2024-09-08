// 'this' refers to 'window'
console.log(this); 

// 'this' refers to 'window's object'
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

// 'this' refers to  the name of object 'child'.Will console log 20
var child = {
  age: 10,
  ageTenYears: function() {
    console.log(this.age + 10);
  }
};

// 'this' refers to  the name of object 'Investment'.Will console log 5750
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15);
    }
  }
};

// call the 'helloThis' function to check results
helloThis();

// Call the object methods to check results
child.ageTenYears();
investor.investment.investmentGrowth();