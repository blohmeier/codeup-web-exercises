/* TODO: MINI-EXERCISE:
*   -> Write a function named getName() which will return the result of the user inputting their name(s)
*   -> Console log the invocation of getName() to ensure it works properly
*   -> Now, write a function named showName(username).
*       -> It takes in 'username' as an argument and alerts the user to their name
*       -> Pass an invocation of getName() as an argument to the invocation of showName()
*       -> showName() should be void function. That is, it should not return a value - only execute code
*   -> Test to ensure your code is working as expected
* */

function getName(){
    var userName = prompt("Enter name");
    return userName;
}
//console.log("Hello, " + getName());

function showName(){
    var userName = getName();
    alert("Your name is " + userName);
}
showName();
//let lilMermaid = parseInt(prompt("How long did you rent 'The Little Mermaid'?"));