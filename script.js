const generateFibonacci = n => {
    const fibonacciSequence = [0, 1];
    while (fibonacciSequence.length < n) {
        fibonacciSequence.push(fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2]);
    }
    return fibonacciSequence;
}
const numberOfTerms = 10;
const fibonacciSeries = generateFibonacci(numberOfTerms);
console.log(fibonacciSeries);
