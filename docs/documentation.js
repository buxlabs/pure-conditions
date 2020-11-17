module.exports = {
  isPositive: {
    parameters: ['number'],
    description: {
      en: 'Checks if the number is positive.',
      pl: 'Sprawdza czy liczba jest dodatnia.'
    }
  },
  isNegative: {
    parameters: ['number'],
    description: {
      en: 'Checks if the number is negative.',
      pl: 'Sprawdza czy liczba jest negatywna.'
    }
  },
  isFinite: {
    parameters: ['number'],
    description: {
      en: 'Checks if the number is finite.',
      pl: 'Sprawdza czy liczba jest skończona.'
    }
  },
  isInfinite: {
    parameters: ['number'],
    description: {
      en: 'Checks if the number is infinite.',
      pl: 'Sprawdza czy liczba jest nieskończona.'
    }
  },
  isPresent: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value is present (different than undefined).',
      pl: 'Sprawdza czy wartość jest zdefiniowana.'
    }
  },
  isUndefined: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value is undefined.',
      pl: 'Sprawdza czy wartość jest niezdefiniowana.'
    }
  },
  isNull: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value is null.',
      pl: 'Sprawdza czy wartość jest równa null.'
    }
  },
  isEven: {
    parameters: ['number'],
    description: {
      en: 'Checks if the number is even.',
      pl: 'Sprawdza czy liczba jest parzysta.'
    }
  },
  isOdd: {
    parameters: ['number'],
    description: {
      en: 'Checks if the number is odd.',
      pl: 'Sprawdza czy liczba jest nieparzysta.'
    }
  },
  isEmpty: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value is empty.',
      pl: 'Sprawdza czy wartość jest pusta.'
    }
  },
  isAlpha: {
    parameters: ['string'],
    description: {
      en: 'Checks if the string contains only letters.',
      pl: 'Sprawdza czy łańcuch znaków zawiera wyłącznie litery.'
    }
  },
  isAlphaNumeric: {
    parameters: ['string'],
    description: {
      en: 'Checks if the string contains only letters and numbers.',
      pl: 'Sprawdza czy łańcuch znaków zawiera wyłącznie litery i cyfry.'
    }
  },
  isObject: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value is an object.',
      pl: 'Sprawdza czy wartość jest obiektem.'
    }
  },
  isFrozen: {
    parameters: ['object'],
    description: {
      en: 'Checks if tje object is frozen (cannot add, remove, change object properties).',
      pl: 'Sprawdza czy obiekt jest zamrożony (nie można dodać, usunąć, zmienić właściwości obiektu).'
    }
  },
  isSealed: {
    parameters: ['object'],
    description: {
      en: 'Checks if the object is frozen (cannot add and remove object properties).',
      pl: 'Sprawdza czy obiekt jest zapieczętowany (nie można dodać i usunąć właściwości obiektu).'
    }
  },
  isRegExp: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value is an regural expression.',
      pl: 'Sprawdza czy wartość jest wyrażeniem regularnym.'
    }
  },
  isNumber: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value is an number.',
      pl: 'Sprawdza czy wartość jest liczbą.'
    }
  },
  isDigit: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value is an digit.',
      pl: 'Sprawdza czy wartość jest cyfrą.'
    }
  },
  isDecimal: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value is an decimal.',
      pl: 'Sprawdza czy przekazana wartość jest liczba dziesiętną.'
    }
  },
  isNumeric: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value is an numeric (a number or string that could be converted to number).',
      pl: 'Sprawdza czy przekazana wartość jest wartością numeryczną (liczba lub łańcuch znaków, który można skonwertować na liczbę).'
    }
  },
  isString: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value is an string.',
      pl: 'Sprawdza czy przekazana wartość jest łańcuchem znaków.'
    }
  },
  isBoolean: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value is an boolean.',
      pl: 'Sprawdza czy przekazana wartość jest wartością typu logicznego.'
    }
  },
  isArray: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value is an array.',
      pl: 'Sprawdza czy przekazana wartość jest tablicą.'
    }
  },
  isSymbol: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value is an symbol.',
      pl: 'Sprawdza czy przekazana wartość jest symbolem.'
    }
  },
  isMap: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value is a map.',
      pl: 'Sprawdza czy przekazana wartość jest mapą.'
    }
  },
  isWeakMap: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value is an weakmap.',
      pl: 'Sprawdza czy przekazana wartość jest słabą mapą.'
    }
  },
  isWeakSet: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value is an weakset.',
      pl: 'Sprawdza czy przekazana wartość jest słabym zbiorem.'
    }
  },
  isSet: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value is an set.',
      pl: 'Sprawdza czy przekazana wartość jest zbiorem.'
    }
  },
  isDate: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value is an date.',
      pl: 'Sprawdza czy przekazana wartość jest datą.'
    }
  },
  isTruthy: {
    parameters: ['value'],
    description: {
      en: 'Checks if passed value is an truthy value.',
      pl: 'Sprawdza czy przekazana wartość, jest wartością prawdziwą.'
    }
  },
  isFalsy: {
    parameters: ['value'],
    description: {
      en: 'Checks if passed value is an falsy value.',
      pl: 'Sprawdza czy przekazana wartość, jest wartością fałszywą.'
    }
  },
  hasWhitespace: {
    parameters: ['string'],
    description: {
      en: 'Checks if the string contains whitespaces.',
      pl: 'Sprawdza czy łańcuch znaków zawiera spacje.'
    }
  },
  hasNewLine: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value contains the new line char.',
      pl: 'Sprawdza czy łańcuch znaków zawiera znak nowej lini.'
    }
  },
  hasNumber: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value contains at least one number.',
      pl: 'Sprawdza czy przekazana wartość zawiera przynajmniej jedną liczbę.'
    }
  },
  hasNumbers: {
    parameters: ['value'],
    description: {
      en: 'Checks if the value contains more than one number.',
      pl: 'Sprawdza czy przekazana wartość zawiera więcej niż jedną liczbę.'
    }
  },
  hasDuplicates: {
    parameters: ['array'],
    description: {
      en: 'Checks if the array contains duplicate values.',
      pl: 'Sprawdza czy tablica zawiera duplikaty.'
    }
  },
  isPrime: {
    parameters: ['number'],
    description: {
      en: 'Checks if the number is prime.',
      pl: 'Sprawdza czy liczba jest liczbą pierwszą.'
    }
  },
  isPalindrome: {
    parameters: ['string'],
    description: {
      en: 'Checks if the value is palindrome.',
      pl: 'Sprawdza czy wartość jest palindromem.'
    }
  },
  isEmail: {
    parameters: ['string'],
    description: {
      en: 'Checks if the string is an email.',
      pl: 'Sprawdza czy łańcuch znaków jest adresem email.'
    }
  },
  isUrl: {
    parameters: ['string'],
    description: {
      en: 'Checks if the string is an url.',
      pl: 'Sprawdza czy łańcuch znaków jest poprawnym adresem url.'
    }
  },
  haveMany: {
    parameters: ['array'],
    description: {
      en: 'Checks if the array have more than one element.',
      pl: 'Sprawdza czy tablica zawiera więcej niż jedną wartość.'
    }
  },
  isMultiple: {
    parameters: ['numbe1', 'number2'],
    description: {
      en: 'Checks if one number is multiple of second number.',
      pl: 'Sprawdza czy jedna z przekazanych liczb jest wielokrotnością drugiej.'
    }
  },
  isDivisible: {
    parameters: ['number1', 'number2'],
    description: {
      en: 'Checks if one number is divisible by second number.',
      pl: 'Sprawdza czy jedna z liczb jest podzielna przez drugą.'
    }
  },
  isSoonerThan: {
    parameters: ['date1', 'date2'],
    description: {
      en: 'Checks if one date is sooner than second date.',
      pl: 'Sprawdza czy jedna z dat jest wcześniejsza niż druga.'
    }
  },
  isLaterThan: {
    parameters: ['date1', 'date2'],
    description: {
      en: 'Checks if one date is later than second date.',
      pl: 'Sprawdza czy jedna z dat jest późniejsza niż druga.'
    }
  },
  respondsTo: {
    parameters: ['object', 'string'],
    description: {
      en: 'Checks if object has function with the name given in string.',
      pl: 'Sprawdza czy obiekt posiada funkcję, której nazwa została przekazana w łańcuchu znaków.'
    }
  },
  startsWith: {
    parameters: ['string1', 'string2'],
    description: {
      en: 'Checks if first string starts with the second string.',
      pl: 'Sprawdza czy pierwszy łańcuch znaków zaczyna się od drugiego.'
    }
  },
  endsWith: {
    parameters: ['string1', 'string2'],
    description: {
      en: 'Checks if first string ends with the second string.',
      pl: 'Sprawdza czy pierwszy łańcuch znaków kończy się drugim łańcuchem znaków.'
    }
  },
  isAlternative: {
    parameters: ['value1', 'value2'],
    description: {
      en: 'Returns true when one value from passed values is truthy.',
      pl: 'Zwraca wartość logiczną prawda z alternatywy pierwszej wartości oraz drugiej wartości.'
    }
  },
  isExclusiveAlternative: {
    parameters: ['value1', 'value2'],
    description: {
      en: 'Returns true when one value from passed values is truthy and second is falsy.',
      pl: 'Zwraca wartość logiczną prawda, gdy jedna z przekazanych wartości jest prawdziwa, a druga fałszywa.'
    }
  },
  isConjunction: {
    parameters: ['value1', 'value2'],
    description: {
      en: 'Returns true when both values from passed values are truthy.',
      pl: 'Zwraca wartość logiczną prawda, gdy obie z przekazanych wartości są prawdziwe.'
    }
  },
  isEqual: {
    parameters: ['value1', 'value2'],
    description: {
      en: 'Checks if values are equal.',
      pl: 'Sprawdza czy wartości są równe.'
    }
  },
  notEqual: {
    parameters: ['value1', 'value2'],
    description: {
      en: 'Checks if values are different.',
      pl: 'Sprawdza czy wartości są różne.'
    }
  },
  isGreaterThanOrEqual: {
    parameters: ['value1', 'value2'],
    description: {
      en: 'Checks if first value is greater or equal second value.',
      pl: 'Sprawdza czy pierwsza wartośc jest większa lub równa drugiej wartości.'
    }
  },
  includes: {
    parameters: ['value1', 'value2'],
    description: {
      en: 'Checks if first value includes second value.',
      pl: 'Sprawdza czy pierwsza wartość zawiera drugą.'
    }
  },
  matches: {
    parameters: ['string', 'regExp'],
    description: {
      en: 'Checks if string matches passed regExp.',
      pl: 'Sprawdza czy łańcuch znaków posiada przekazana wyrażenie regularne.'
    }
  },
  isBitwiseAlternative: {
    parameters: ['value1', 'value2'],
    description: {
      en: 'Returns boolean value of bitwise alternative.',
      pl: 'Zwraca wartość logiczną z alternatywy bitowej .'
    }
  },
  isBitwiseAlternativeNegation: {
    parameters: ['value1', 'value2'],
    description: {
      en: 'Returns boolean value of bitwise alternative negation.',
      pl: 'Zwraca wartość logiczną z alternatywy wykluczającej.'
    }
  },
  isBitwiseNegation: {
    parameters: ['value'],
    description: {
      en: 'Returns boolean value of bitwise negation.',
      pl: 'Zwraca wartość logiczną z negacji bitowej.'
    }
  },
  isBitwiseConjunction: {
    parameters: ['value1', 'value2'],
    description: {
      en: 'Returns boolean value of bitwise conjunction.',
      pl: 'Zwraca wartość logiczną z koniunkcji bitowej .'
    }
  },
  haveMoreThan: {
    parameters: ['value', 'number'],
    description: {
      en: 'Checks if the length of value is greater than number.',
      pl: 'Sprawdza czy długość wartości jest większa niż liczba.'
    }
  },
  have: {
    parameters: ['value', 'number'],
    description: {
      en: 'Checks if the length of value is equal the number.',
      pl: 'Sprawdza czy długość wartości jest równa liczbie.'
    }
  },
  hasExtension: {
    parameters: ['string1', 'string2'],
    description: {
      en: 'Checks if the string is a name of audio file.',
      pl: 'Sprawdza czy łańcuch znaków jest nazwą pliku audio.'
    }
  },
  haveLessThan: {
    parameters: ['value', 'number'],
    description: {
      en: 'Checks if the length of value is smaller than the number.',
      pl: 'Sprawdza czy długość wartości jest większa niż liczba.'
    }
  },
  isBetween: {
    parameters: ['number1', 'number2', 'number3'],
    description: {
      en: 'Checks if first is between second and third number.',
      pl: 'Sprawdza czy pierwsza liczba jest pomiędzy drugą, a trzecią.'
    }
  },
  isLessThan: {
    parameters: ['number1', 'number2'],
    description: {
      en: 'Checks if first number is smaller than second.',
      pl: 'Sprawdza czy pierwsza liczba jest mniejsza od drugiej.'
    }
  },
  isGreaterThan: {
    parameters: ['number1', 'number2'],
    description: {
      en: 'Checks if first number is greater than second.',
      pl: 'Sprawdza czy pierwsza liczba jest większa od drugiej.'
    }
  },
  isLessThanOrEqual: {
    parameters: ['number1', 'number2'],
    description: {
      en: 'Checks if first number is smaller or equal second.',
      pl: 'Sprawdza czy pierwsza liczba jest mniejsza lub równa drugiej.'
    }
  },
  hasLengthOf: {
    parameters: ['value', 'number'],
    description: {
      en: 'Checks if the length of value is equal the number.',
      pl: 'Sprawdza czy długość wartości jest równa liczbie.'
    }
  },
  hasLengthOfAtLeast: {
    parameters: ['value', 'number'],
    description: {
      en: 'Checks if the length of value is greater or equal the number.',
      pl: 'Sprawdza czy długość wartości jest większa lub równa liczbie.'
    }
  },
  hasLengthOfAtMost: {
    parameters: ['value', 'number'],
    description: {
      en: 'Checks if the length of value is smaller or equal the number.',
      pl: 'Sprawdza czy długość wartości jest mniejsza lub równa liczbie.'
    }
  },
  isIn: {
    parameters: ['value1', 'value2'],
    description: {
      en: 'Checks if the first value includes second value.',
      pl: 'Sprawdza czy pierwsza wartość zawiera drugą.'
    }
  },
  isAudio: {
    parameters: ['string'],
    description: {
      en: 'Checks if the string is a name of audio file.',
      pl: 'Sprawdza czy łańcuch znaków jest nazwą pliku audio.'
    }
  },
  isVideo: {
    parameters: ['string'],
    description: {
      en: 'Checks if the string is a name of video file.',
      pl: 'Sprawdza czy łańcuch znaków jest nazwą pliku video.'
    }
  },
  isImage: {
    parameters: ['string'],
    description: {
      en: 'Checks if the string is a name of image file.',
      pl: 'Sprawdza czy łańcuch znaków jest nazwą pliku graficznego.'
    }
  },
  isEmptyObject: {
    parameters: ['object'],
    description: {
      en: 'Checks if the object is empty.',
      pl: 'Sprawdza czy obiekt jest pusty.'
    }
  },
  isEmptyArray: {
    parameters: ['array'],
    description: {
      en: 'Checks if the array is empty.',
      pl: 'Sprawdza czy tablica jest pusta.'
    }
  },
  isEmptySet: {
    parameters: ['set'],
    description: {
      en: 'Checks if the set is empty.',
      pl: 'Sprawdza czy zbiór jest pusty.'
    }
  },
  isPhone: {
    parameters: ['string'],
    description: {
      en: 'Checks if the string is a valid phone number.',
      pl: 'Sprawdza czy podany łańcuch jest prawidłowym numerem telefonu.'
    }
  },
  isMobile: {
    parameters: [],
    description: {
      en: 'Checks if device is a smartphone (The viewport is at most 767 pixels wide).',
      pl: 'Sprawdza czy urządzenie jest smartfonem (Szerokość okna przeglądarki wynosi maksymalnie 767 pikseli).'
    }
  },
  isTablet: {
    parameters: [],
    description: {
      en: 'Checks if device is a tablet (The viewport width is between 768px and 991px).',
      pl: 'Sprawdza czy urządzenie jest tabletem (Szerokość okna przeglądarki jest pomiędzy 768px a 991px).'
    }
  },
  isComputer: {
    parameters: [],
    description: {
      en: 'Checks if device is a computer (The viewport is at least 992 pixels wide).',
      pl: 'Sprawdza czy urządzenie jest komputerem (Szerokość okna przeglądarki wynosi przynajmniej 992px).'
    }
  },
  isNaN: {
    parameters: ['value'],
    description: {
      en: 'Checks if passed value is NaN and the type of value is Number.',
      pl: 'Sprawdza czy przekazana wartość jest równa NaN, a jej typ to Number.'
    }
  },
  hasTypeOf: {
    parameters: ['value', 'string'],
    description: {
      en: 'Checks the type of passed value.',
      pl: 'Sprawdza typ przekazanej wartości.'
    }
  },
  isFunction: {
    parameters: ['value'],
    description: {
      en: 'Checks if passed value is a function.',
      pl: 'Sprawdza czy przekazana wartość jest funkcją.'
    }
  },
  isError: {
    parameters: ['object'],
    description: {
      en: 'Checks if passed object is an error object.',
      pl: 'Sprawdza czy przekazany obiekt jest instacją klasy Error.'
    }
  },
  isExtensible: {
    parameters: ['object'],
    description: {
      en: 'Determines if an object can be extend by new properties.',
      pl: 'Sprawdza czy obiekt może być rozszerzony o nowe właściwości.'
    }
  },
  hasKeys: {
    parameters: ['object'],
    description: {
      en: 'Checks if the passed object has any key.',
      pl: 'Sprawdza czy przekazany obiekt posiada dowolny klucz.'
    }
  },
  isMissing: {
    parameters: ['object'],
    description: {
      en: 'Checks if object is undefined.',
      pl: 'Sprawdza czy obiekt jest niezdefiniowany.'
    }
  },
  exists: {
    parameters: ['object'],
    description: {
      en: 'Checks if object is defined.',
      pl: 'Sprawdza czy obiekt jest zdefiniowany.'
    }
  },
  hasWords: {
    parameters: ['string', 'number'],
    description: {
      en: 'Checks if the string contains particular number of words.',
      pl: 'Sprawdza czy łańcuch znaków zawiera określoną liczbę wyrazów.'
    }
  },
  isInstanceOf: {
    parameters: ['object', 'constructor'],
    description: {
      en: 'Checks if the prototype property of a constructor exists in the prototype chain of an object.',
      pl: 'Sprawdza czy obiekt jest instacją danej klasy.'
    }
  },
  isPlainObject: {
    parameters: ['value'],
    description: {
      en: 'Checks if passed value is an object.',
      pl: 'Sprawdza czy przekazana wartość jest obiektem.'
    }
  }
}
