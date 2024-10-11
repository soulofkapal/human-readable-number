module.exports = function toReadable (number) {
	const simpleNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen','sixteen','seventeen', 'eighteen', 'nineteen'];
	const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	
	if (number === 0) return 'zero';

	let result = '';


	if(number >= 100){
		result += simpleNum[Math.floor(number / 100)] + ' hundred';
		number %= 100;
	}

	if(number >= 20){
		result += ' ' + tens[Math.floor(number / 10) - 1];
		number %= 10;
		if(number > 0) result += ' ' + simpleNum[number];
	}else if(number >= 11 && number <= 19){
		result += ' ' + teens[number - 11]
	}else if(number === 10){
		result += ' ten';
	}else if(number === 10 || number <= 9  && number > 0){
		result += ' ' + simpleNum[number];
	}
	
	return result.trim();
}
