//---------------------------------ФОРМАТИРОВАНИЕ----------------------------------------------

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

//--------------------------------------ВАЛИДАЦИЯ----------------------------------------

export const validateAddress = (address) => {
    if (!address || address.trim().length === 0) {
        return { isValid: false, error: 'Введите адрес доставки' };
    }
    if (address.trim().length < 10) {
        return { isValid: false, error: 'Адрес слишком короткий' };
    }
    return { isValid: true, error: '' }
};

export const validatePhone = (phone) => {
    const digits = phone.replace(/\D/g, '');
    if (!phone || digits.length === 0) {
        return { isValid: false, error: 'Введите номер телефона' };
    }
    if (digits.length !== 11) {
        return { isValid: false, error: 'Номер должен содержать 11 цифр' };
    }
    return { isValid: true, error: '' }
};

export const validateCardNumber = (cardNumber) => {
    const digits = cardNumber.replace(/\D/g, '');
    
    if (!cardNumber || digits.length === 0) {
        return { isValid: false, error: 'Введите номер карты' };
    }
    if (digits.length !== 16) {
        return { isValid: false, error: 'Номер карты должен содержать 16 цифр' };
    }
    return { isValid: true, error: '' }
}

export const validateCardDate = (cardDate) => {
    if (!cardDate || cardDate.length === 0) {
        return { isValid: false, error: 'Введите срок действия карты' };
    }
    const parts = cardDate.split('/');
    if (parts.length !== 2) {
        return { isValid: false, error: 'Формат: ММ/ГГ' };
    }
    const month = parseInt(parts[0]);
    const year = parseInt(parts[1]);
    if (isNaN(month) || isNaN(year)) {
        return { isValid: false, error: 'Неверный формат даты' };
    }
    if (month < 1) {
        return { isValid: false, error: 'Неверный месяц (01-12)' };
    }
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
        return { isValid: false, error: 'Срок действия карты истёк' };
    }
    if (year > currentYear + 10) {
        return { isValid: false, error: 'Неверный год' };
    }
    return { isValid: true, error: '' };
};

export const validateCVV = (cardCVV) => {
    if (!cardCVV || cardCVV.length === 0) {
        return { isValid: false, error: 'Введите CVV код' };
    }
    if (cardCVV.length < 3){
        return { isValid: false, error: 'CVV код должен быть из 3ёх цифр'}
    }
    return { isValid: true, error: '' };
};

export const validatePaymentForm = (data) => {
    const errors = {};

    const addressValidation = validateAddress(data.address);
    if (!addressValidation.isValid) errors.address = addressValidation.error;

    const phoneValidation = validatePhone(data.phoneNumber);
    if (!phoneValidation.isValid) errors.phoneNumber = phoneValidation.error;
    
    const cardNumberValidation = validateCardNumber(data.cardNumber);
    if (!cardNumberValidation.isValid) errors.cardNumber = cardNumberValidation.error;
    
    const cardDateValidation = validateCardDate(data.cardDate);
    if (!cardDateValidation.isValid) errors.cardDate = cardDateValidation.error;
    
    const cvvValidation = validateCVV(data.cardCVV);
    if (!cvvValidation.isValid) errors.cardCVV = cvvValidation.error;
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};