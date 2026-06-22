//  Write a JavaScript function to capitalize the first letter of a string.

// Test Data :

// console.log(capitalize('js string exercises'));

// "Js String Exercises"
//  Write a JavaScript function to convert a string into camel case.

// Test Data :

// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));
// "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"

//solution

function capitalize (text){
  let capital = text.charAt(0).toUpperCase() + text.slice(1);
  return capital;
}
console.log(capitalize('js string exercises'));


function toCamelCase(str) {
  return str
    .trim()
    .split(/[\s_\-]+/)
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('');
}
console.log(toCamelCase('js string exercises'))