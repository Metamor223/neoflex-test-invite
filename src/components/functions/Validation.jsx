export function cardDateFormat (cardDate){
    let input = cardDate.replace(/\D/g, '');
    if (input.length >= 1) {
        const firstDigit = parseInt(input[0]);
        if (firstDigit > 1) {
            input = '0' + input; 
        }
    }
    if (input.length >= 2) {
        const month = parseInt(input.slice(0, 2));
        if (month > 12) {
        input = '12' + input.slice(2);
        }
        if (month === 0) {
        input = '01' + input.slice(2);
        }
        input = input.slice(0, 2) + '/' + input.slice(2, 4);
    }
    return input
}

export function phoneNumberFormat(phoneNumber){
    let input = phoneNumber.replace(/\D/g, '');
    if (input[0] === '7') {
        input = input.slice(1);
    }
    input = input.slice(0, 10);
    let formatted = input.length > 0 ? '+7' : '';
    for (let i = 0; i < input.length; i++) {
        if (i === 0) formatted += ' (';
        if (i === 3) formatted += ') ';
        if (i === 6 || i === 8) formatted += '-';
        formatted += input[i];
    }
    return formatted
}

export function cardNumberFormat(cardNumber){
    let input = cardNumber.replace(/\D/g, '');
    input = input.slice(0,16)
    let formatted = ''
    for(let i = 0; i < input.length; i++){
        if(i > 0 && i % 4 === 0){
            formatted += ' '
        }
        formatted += input[i];
    }
    return formatted
}