/*
=> In Big O, there are six major types of complexities (time and space):

    -> Constant: O(1)
    -> Linear time: O(n)
    -> Logarithmic time: O(n log n)
    -> Quadratic time: O(n^2)
    -> Exponential time: O(2^n)
    -> Factorial time: O(n!)
*/

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- // 

/*
    => Constant Time Complexity - O(1) : 
        When your algorithm is not dependent on the input size n, it is said to have a constant time complexity with
        order O(1). This means that the run time will always be the same regardless of the input size.
        For example, if an algorithm is to return the first element of an array. Even if the array has 1 million
        elements, the time complexity will be constant if you use this approach: 
*/

    const firstElement = (array) => {
        return array[0];
    };

    let score = [12, 54, 68, 96, 20];
    console.log(firstElement(score)); // 12

    // The function above will require only one execution step, meaning the function is in constant time with time complexity O(1).

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- // 

/*
    => Linear Time Complexity - O(n) : 
        You get linear time complexity when the running time of an algorithm increases linearly with the size of the input.
        This means that when a function has an iteration that iterates over an input size of n, it is said to have a time complexity of order O(n).
        For example, if an algorithm is to return the factorial of any inputted number. This means if you input 5 then you are to loop through and
        multiply 1 by 2 by 3 by 4 and by 5 and then output 120:
*/

    const calcFactorial = (n) => {
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
            factorial = factorial * i;
        }
        return factorial;
    };

    console.log(calcFactorial(5)); // 120

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- // 

/*
    => Logarithmic Time Complexity - O (log n) : 
        This is similar to linear time complexity, except that the runtime does not depend on the input size but rather
        on half the input size. When the input size decreases on each iteration or step, an algorithm is said to have 
        logarithmic time complexity.

        This method is the second best because your program runs for half the input size rather than the full size.
        After all, the input size decreases with each iteration.

        A great example is binary search functions, which divide your sorted array based on the target value.

        For example, suppose you use a binary search algorithm to find the index of a given element in an array:
*/

    const binarySearch = (array, target) => {
        let firstIndex = 0;
        let lastIndex = array.length - 1;
        while (firstIndex <= lastIndex) {
            let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

            if (array[middleIndex] === target) {
                return middleIndex;
            }

            if (array[middleIndex] > target) {
                lastIndex = middleIndex - 1;
            } else {
                firstIndex = middleIndex + 1;
            }
        }
        return -1;
    };

    // * Key points : sorted array, target value 

    /*
    In the code above, since it is a binary search, you first get the middle index of your array, compare it to the
    target value, and return the middle index if it is equal. Otherwise, you must check if the target value is greater
    or less than the middle value to adjust the first and last index, reducing the input size by half.

    Because for every iteration the input size reduces by half, the time complexity is logarithmic with the order O(log n).
    */

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- // 

    /*
    => Quadratic Time - O (n^2) : 
        When you perform nested iteration, meaning having a loop in a loop, the time complexity is quadratic, which is horrible.

        A perfect way to explain this would be if you have an array with n items. The outer loop will run n times, and the inner
        loop will run n times for each iteration of the outer loop, which will give total n^2 prints. If the array has ten items,
        ten will print 100 times (10^2).
    */

    // Find whether the array contains any matching element or not : 

    const matchElements = (array) => {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (i !== j && array[i] === array[j]) {
                    return `Match found at ${i} and ${j}`;
                }
            }
        }
        return "No matches found 😞";
    };

    const fruit = ["🍓", "🍐", "🍊", "🍌", "🍍", "🍑", "🍎", "🍈", "🍊", "🍇"];
    console.log(matchElements(fruit)); // "Match found at 2 and 8"

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- // 

    /*
        => Exponential Time Complexity - O (2^n) : 
            You get exponential time complexity when the growth rate doubles with each addition to the input (n), often
            iterating through all subsets of the input elements. Any time an input unit increases by 1, the number of 
            operations executed is doubled.

            The recursive Fibonacci sequence is a good example. Assume you're given a number and want to find the nth element
            of the Fibonacci sequence.

            The Fibonacci sequence is a mathematical sequence in which each number is the sum of the two preceding numbers,
            where 0 and 1 are the first two numbers. The third number in the sequence is 1, the fourth is 2, the fifth is 3,
            and so on... (0, 1, 1, 2, 3, 5, 8, 13, …).

            This means that if you pass in 6, then the 6th element in the Fibonacci sequence would be 8:
    */ 

    const recursiveFibonacci = (n) => {
        if (n < 2) {
            return n;
        }
        return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
    };

    console.log(recursiveFibonacci(6)); // 8

    // number of operations (steps to perform) get doubled with each and every next insertion of element

