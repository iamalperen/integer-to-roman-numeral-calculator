interface RomanNumbersMap {
  [key: string]: number;
}

export const convertToRomans = (intNumb: number) => {
  const map: RomanNumbersMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let romanNumber = '';

  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const key in map) {
    const repeatCounter = Math.floor(intNumb / map[key]);

    if (repeatCounter !== 0) {
      romanNumber += key.repeat(repeatCounter);
    }

    intNumb %= map[key];

    if (intNumb === 0) return romanNumber;
  }

  return romanNumber;
};
