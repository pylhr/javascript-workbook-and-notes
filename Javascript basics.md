# Javascript-Basics

## Variables

These are containers that store values.

The keyword we use to define variable is **let**.

```
let myVariable = 12;
```

Variable value can be retrieved by simply using variable name.

```
console.log(myVariable);
```

This will simply log out the value of variable in browser console.

### Following are the data types variables can hold:

- String
```
let myVariable = 'I'm a string';
```

- Number
```
let myVariable = 12;
```

- Boolean
```
let myVariable = true;
let myVariable = false;
```

- Array
```
let myVariable = [1, 'Bob', 'Charlie', 'Roronoa Zoro', False];
```

- Object
```
let myVariable = document.querySelector('h1');
```

## Comments

Comments are snippets of text that can be added along with the code.These are ignored by the browser.

There are two types of comments:
- Single line
```
/// This is a single line comment.
```
- Multi line comment
```
/* This is a multi
   line comment,
   as it has linebreaks. */
```

# Operators

An operator is a mathematical symbol that produces a result based on two values (or operands as they are called in mathematics.)

### Following are the operators allowed in javascript:
- Addition (+)
Addition operator is used to add numerical values which is an arithmetic operation and also to join two strings.

```
6 + 9;
'Hello ' + 'World!';
```

- Subtration (-)

```
6 - 9;
```

- Multiplication (*)

```
6 * 9;
```

- Division (/)

```
6 / 9;
```

- Assignment (=)
This variable assigns the value on the right of operator to the variable name on left.

```
let myVariable = 45;
```

- Strict equality (===)
This checks whether both the operands are of same value and same data type.

```
let myVar = 9;
console.log(myVar === 7);
```
This will produce **False** as both values are not equal.

- Not, does-not-equal (!, !=)
This returns logically opposite value of what it precedes.
For **Not**, the basic expression is true, but the comparison returns false because we negate it:

```
let myVariable = 3;
!(myVariable === 3);
```

**Does-not-equal** gives basically the same result with different syntax. Here we are testing "is myVariable NOT equal to 3". This returns false because myVariable IS equal to 3:

```
let myVariable = 3;
myVariable !== 3;
```
