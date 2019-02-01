var string = 'Whiskey in the jar'
console.log(string);

var browser = {
	hrome: 'nice',
	opera: 'fine',
	ie: 'bad'
};
console.log(browser);

var browser = {
	hrome: 'nice',
	opera: 'fine',
	ie: 'bad',
	sayHi: function() {
		return 'london is the capital of great britain';
	}
};
console.log(browser.sayHi());

for (var i = 2; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
};

var a = 2+2, 
Status;
switch (a) {
  case 2: Status = 'Мало'; break;
  case 5: Status = 'Перебор'; break;
  default: Status = 'Точняк'; 
};
 console.log(a + ' ' + Status);

var x = 9;
  var text = x > 15 ? 'x больше 15' : x < 15 ? 'x меньше 15' : 'x равен 15';
console.log(text);

var i = 0;
  while (i < 8) {
  console.log(i++);
}

function someFunction (arg1, arg2, callback) {
  console.log('Число ' + arg1 + ' в степени ' + arg2);
  var arg3 = (Math.pow(arg1, arg2));
  callback(arg3);
}
someFunction(2,4, function (arg3) {
  console.log('Результат ' + arg3);
});