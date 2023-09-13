document.getElementById('generateButton').addEventListener('click', function () {
    const numberOfTerms = prompt('Enter the number of Fibonacci terms to generate:');
    if (numberOfTerms === null || isNaN(numberOfTerms)) {
        alert('Please enter a valid number.');
        return;
    }

    const fibonacciSequence = generateFibonacci(Number(numberOfTerms));
    document.getElementById('result').textContent = `Fibonacci Sequence: ${fibonacciSequence.join(', ')}`;
});

function generateFibonacci(n) {
    const fibonacciSequence = [0, 1];

    for (let i = 2; i < n; i++) {
        const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextTerm);
    }

    return fibonacciSequence;
}