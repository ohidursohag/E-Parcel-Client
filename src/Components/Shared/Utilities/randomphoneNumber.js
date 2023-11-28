export const randomphoneNumber =() => {
   const firstTwoDigits = '01';
   const thirdDigitOptions = ['8', '3', '4', '9', '5', '6'];

   const randomThirdDigit = thirdDigitOptions[Math.floor(Math.random() * thirdDigitOptions.length)];
   let fourthDigit = Math.floor(Math.random() * 9) + 1; // Ensuring the 4th digit is not 0

   let remainingDigits = '';

   for (let i = 0; i < 7; i++) {
      remainingDigits += Math.floor(Math.random() * 10);
   }

   return firstTwoDigits + randomThirdDigit + fourthDigit + remainingDigits;
}

