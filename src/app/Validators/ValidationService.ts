export class ValidationService {

    static getValidatorErrorMessage(code: string) {
        let config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
        };
        return config[code];
    }

    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return {'invalidCreditCard': true};
        }
    }

    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return {'invalidEmailAddress': true};
        }
    }

    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return {'invalidPassword': true};
        }
    }

    static validateControl(controlName) {
        return function (control) {
            if (typeof control._parent !== 'undefined') {
                if (typeof control._parent.controls !== 'undefined') {
                    control._parent.controls[controlName].updateValueAndValidity(control._parent.controls[controlName].value);
                }
            }
            return null;
        };
    }

    static matchesFieldValidator(passwordControlName) {
        return function (control) {
            let valid = false;
            if (typeof control._parent !== 'undefined') {
                if (typeof control._parent.controls !== 'undefined') {
                    if (control._parent.controls[passwordControlName].value === control.value) {
                        valid = true;
                    }
                }
            }
            if (valid) {
                return null;
            } else {
                return {'invalidPassword': true};
            }
        };
    }

}
