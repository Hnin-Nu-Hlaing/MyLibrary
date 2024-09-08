// 'this' refers to 'window'
console.log(this); 

// 'this' refers to 'window's object'
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

// 'this' refers to  the name of object 'age'
var child = {
  age: 10,
  ageTenYears: function() {
    console.log(this.age + 10);
  }
};

// 'this' refers to  the name of object 'initialInvestment'
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15);
    }
  }
};

// call the 'helloThis' function
helloThis();

// Call the object methods
child.ageTenYears();
investor.investment.investmentGrowth();