function sumDigits(n) {
    let sum = 0;
    
    while (n !== 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    
    return sum;
}

function countOccurrences(arr, target) {
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    
    return count;
}

function main() {
    const n = 12345;
    const digitSum = sumDigits(n);
    console.log(`Сумма цифр числа ${n}: ${digitSum}`);
    
    const array = [1, 2, 3, 4, 2, 5, 2];
    const targetElement = 2;
    const occurrences = countOccurrences(array, targetElement);
    console.log(`Количество вхождений ${targetElement} в массиве: ${occurrences}`);
}

main();
