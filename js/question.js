let questions = [
    {
        numb: 1,
        question: "Which keyword is used to declare a variable in JavaScript?",
        answer: "Alloftheabove ",
        options: [
            "var",
            "let",
            "const",
            "All of the above"
        ]
    },
    {
        numb: 2,
        question: "Which of the following is not a JavaScript data type?",
        answer: "Integer",
        options: [
            "String",
            "Boolean",
            "Integer",
            "Object"
        ]
      
    },

    {
        numb: 3,
        question: "What will console.log(typeof NaN); output?",
        answer: "number",
        options: [
            "number",
            "NaN",
            "undefined",
            "string"
        ]
    
    },

    {
        numb: 4,
        question: "Which method is used to convert a string to an integer in JavaScript?",
        answer: "parseInt()",
        options: [
            "parseInt()",
            "parseInteger()",
            "toInt()",
            "convertToInt()"
        ]
    
    },

    {
        numb: 5,
        question: "What is the output of console.log(2 + '2');?",
        answer: "22",
        options: [
            "NaN",
            "4",
            "22",
            "Error"
        ]
    
    },

    {
        numb: 6,
        question: "What is the correct syntax for an arrow function?",
        answer: "() => {}",
        options: [
            "=> function {}",
            "() -> {}",
            "function => {}",
            "() => {}"
        ]
    
    },
    
    {
        numb: 7,
        question: "Which loop runs at least once before checking the condition?",
        answer: "do...while",
        options: [
            "for",
            "while",
            "do...while",
            "foreach"
        ]
    },

    {
        numb: 8,
        question: "How do you add a new element to an array in JavaScript?",
        answer: "push()",
        options: [
            "push()",
            "append()",
            "add()",
            "insert()"
        ]
    },

    {
        numb: 9,
        question: "Which method removes the last element from an array?",
        answer: "pop()",
        options: [
            "pop()",
            "removeLast()",
            "deleteLast()",
            "splice()"
        ]
    },

    {
        numb: 10,
        question: "Which keyword is used for asynchronous operations in JavaScript?",
        answer: "async",
        options: [
            "async",
            "await",
            "setTimeout",
            "callback"
        ]
    },

    {
        numb: 11,
        question: "Which method is used to add an element to the end of an array?",
        answer: "push",
        options: [
        "pop",
        "push",
        "shift",
        "unshift"
    ]
},

{
    numb: 12,
    question: "What does '=== ' mean in JavaScript?",
    answer: "Strict equality comparison",
    options: [
        "Strict equality comparison",
        "Loose equality comparison",
        "Addition",
        "Type coercion"
    ]
},

{
    numb: 13,
    question: "What is the result of 3 + '3' in JavaScript?",
    answer: "'33'",
    options: [
        "6",
        "'33'",
        "TypeError",
        "NaN"
    ]
},

{
    numb: 14,
    question: "What is the default value of a variable declared with 'let' but not initialized?",
    answer: "undefined",
    options: [
        "null",
        "undefined",
        "NaN",
        "false"
    ]
},

{
    numb: 15,
    question: "Which of the following is a falsy value in JavaScript?",
    answer: "0",
    options: [
        "0",
        "'0'",
        "true",
        "[]"
    ]
},

{
    numb: 16,
    question: "Which method is used to join all the elements of an array into a string?",
    answer: "join",
    options: [
        "join",
        "concat",
        "split",
        "toString"
    ]
},

{
    numb: 17,
    question: "What is the correct syntax to create a new object in JavaScript?",
    answer: "let obj = {}",
    options: [
        "let obj = []",
        "let obj = ()",
        "let obj = {}",
        "let obj = Object()"
    ]
},

{
    numb: 18,
    question: "How can you avoid a function from running asynchronously?",
    answer: "By using 'await' inside an 'async' function",
    options: [
        "By using 'await' inside an 'async' function",
        "By calling the function inside a callback",
        "By using 'setTimeout'",
        "By declaring the function with 'async'"
    ]
},

{
    numb: 19,
    question: "What does the 'this' keyword refer to in JavaScript?",
    answer: "The object the function is a method of",
    options: [
        "The global object", 
        "The object the function is a method of",
        "The function itself",
        "null"
    ]
},

{
    numb: 20,
    question: "What is the purpose of 'const' in JavaScript?",
    answer: "To declare variables that cannot be reassigned",
    options: [
        "To declare variables that cannot be reassigned",
        "To declare block-scoped variables",
        "To declare variables with global scope",
        "To declare variables that can only be used inside functions"
    ]
},

{
    numb: 21,
    question: "Which of the following is used to select an element by ID in JavaScript?",
    answer: "document.getElementById()",
    options: [
        "document.getElementById()",
        "document.querySelector()",
        "document.getElementsByClassName()",
        "document.getElementsByTagName()"
    ]
},

{
    numb: 22,
    question: "Which of the following is a correct way to write an arrow function?",
    answer: "(x, y) => x + y",
    options: [
        "x, y => x + y",
        "x, y => {return x + y}",
        "(x, y) => x + y",
        "function(x, y) => x + y"
    ]
},

{
    numb: 23,
    question: "What does the 'map()' method do?",
    answer: "Creates a new array with the results of calling a function for every array element",
    options: [
        "Filters the elements of an array",
        "Creates a new array with the results of calling a function for every array element",
        "Sorts the elements of an array",
        "Adds an element to the end of an array"
    ]
},

{
    numb: 24,
    question: "How can you check the type of a variable in JavaScript?",
    answer: "Using typeof operator",
    options: [
        "Using typeOf() function",
        "Using checkType() function",
        "Using typeof operator",
        "Using isNaN() function"
    ]
},

{
    numb: 25,
    question: "What will be the output of console.log(0 == false)?",
    answer: "true",
    options: [
        "true",
        "false",
        "undefined",
        "NaN"
    ]
},

{
    numb: 26,
    question: "How can you create a promise in JavaScript?",
    answer: "new Promise()",
    options: [
        "new Promise()",
        "Promise.resolve()",
        "Promise()",
        "new resolve()"
    ]
},

{
    numb: 27,
    question: "Which operator is used to check both value and type equality?",
    answer: "===",
    options: [
        "===",
        "==",
        "=",
        "==="
    ]
},

{
    numb: 28,
    question: "Which of the following methods removes the first element of an array?",
    answer: "shift",
    options: [
        "pop",
        "shift",
        "unshift",
        "slice"
    ]
},

{
    numb: 29,
    question: "Which of the following is used to convert a string to an integer?",
    answer: "parseInt()",
    options: [
        "parseInt()",
        "toInteger()",
        "Number()",
        "parseFloat()"
    ]
},

{
    numb: 30,
    question: "Which method can be used to find the length of a string in JavaScript?",
    answer: "length",
    options: [
        "length",
        "size",
        "count",
        "sizeOf"
    ]
},

{
    numb: 31,
    question: "How do you create a new array with a slice of another array?",
    answer: "Using slice() method",
    options: [
        "Using splice() method",
        "Using slice() method",
        "Using map() method",
        "Using reduce() method"
    ]
},

{
    numb: 32,
    question: "What will be the result of the expression '10' + 5 in JavaScript?",
    answer: "'105'",
    options: [
        "15",
        "'105'",
        "NaN",
        "TypeError"
    ]
},

{
    numb: 33,
    question: "Which method is used to check if an array includes a specific element?",
    answer: "includes()",
    options: [
        "includes()",
        "indexOf()",
        "find()",
        "search()"
    ]
},

{
    numb: 34,
    question: "What is the difference between 'var' and 'let' in JavaScript?",
    answer: "'var' is function-scoped, while 'let' is block-scoped",
    options: [
        "'var' is function-scoped, while 'let' is block-scoped",
        "'var' is for constants, 'let' is for variables",
        "'let' is function-scoped, while 'var' is block-scoped",
        "There is no difference"
    ]
},

{
    numb: 35,
    question: "How can you make sure a function runs after a specified delay?",
    answer: "Using setTimeout()",
    options: [
        "Using setInterval()",
        "Using setTimeout()",
        "Using delay()",
        "Using wait()"
    ]
},

{
    numb: 36,
    question: "What method would you use to convert a value to a string in JavaScript?",
    answer: "toString()",
    options: [
        "toString()",
        "convert()",
        "toStringValue()",
        "String()"
    ]
},

{
    numb: 37,
    question: "Which of the following is used to handle errors in JavaScript?",
    answer: "try...catch",
    options: [
        "try...catch",
        "catch...finally",
        "throw...catch",
        "error...handler"
    ]
},

{
    numb: 38,
    question: "How can you remove all items from an array in JavaScript?",
    answer: "Using splice() method",
    options: [
        "Using splice() method",
        "Using pop() method",
        "Using shift() method",
        "Using length = 0"
    ]
},

{
    numb: 39,
    question: "Which of the following is used to check the type of a variable in JavaScript?",
    answer: "typeof",
    options: [
        "typeof",
        "checkType",
        "instanceof",
        "getType"
    ]
},

{
    numb: 40,
    question: "Which of the following is a way to create an empty object?",
    answer: "let obj = {}",
    options: [
        "let obj = {}",
        "let obj = Object()",
        "let obj = new Object()",
        "let obj = []"
    ]
},

{
    numb: 41,
    question: "What will the following code output: console.log(Boolean('0'))?",
    answer: "true",
    options: [
        "true",
        "false",
        "undefined",
        "TypeError"
    ]
},

{
    numb: 42,
    question: "Which of the following is the correct syntax for defining an anonymous function in JavaScript?",
    answer: "function() {}",
    options: [
        "function() {}",
        "() => {}",
        "function() => {}",
        "() => function()"
    ]
},

{
    numb: 43,
    question: "Which method is used to merge two arrays in JavaScript?",
    answer: "concat()",
    options: [
        "concat()",
        "merge()",
        "combine()",
        "join()"
    ]
},

{
    numb: 44,
    question: "What is the output of 'typeof NaN' in JavaScript?",
    answer: "'number'",
    options: [
        "'number'",
        "'undefined'",
        "'NaN'",
        "'object'"
    ]
},

{
    numb: 45,
    question: "How would you declare a function in JavaScript?",
    answer: "function functionName() {}",
    options: [
        "function functionName() {}",
        "var functionName() {}",
        "let functionName = () => {}",
        "function = functionName() {}"
    ]
},

{
    numb: 46,
    question: "Which of the following is used to create an empty array?",
    answer: "let arr = []",
    options: [
        "let arr = []",
        "let arr = Array()",
        "let arr = new Array()",
        "let arr = {}"
    ]
},

{
    numb: 47,
    question: "What is the correct way to create a regular expression in JavaScript?",
    answer: "/pattern/",
    options: [
        "/pattern/",
        "new RegExp('pattern')",
        "RegExp('pattern')",
        "/pattern/g"
    ]
},

{
    numb: 48,
    question: "Which of the following will return 'true' for an empty string?",
    answer: "str.length === 0",
    options: [
        "str.length === 0",
        "str === ''",
        "str.length == 0",
        "str.length > 0"
    ]
},

{
    numb: 49,
    question: "What does the 'call()' method do in JavaScript?",
    answer: "Invokes a function with a specified 'this' value and arguments",
    options: [
        "Invokes a function with a specified 'this' value and arguments",
        "Creates a new function",
        "Binds a function to a specific object",
        "Sets up a function to run after an interval"
    ]
},

{
    numb: 50,
    question: "Which method is used to remove the last element of an array in JavaScript?",
    answer: "pop",
    options: [
        "pop",
        "shift",
        "slice",
        "unshift"
    ]

},
    
]