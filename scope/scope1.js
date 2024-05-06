//Lexical scope

// in this child access all variables from parent but parent cannot access all variables and data from their child
function parent() {
  let user = "alpha";
  function child() {
    let email = "alpha@gmail.com";
    console.log(`${user} email is : ${email}`); // user accessible in to child
  }
  child();
  console.log(`your upcoming email is : ${email}`); // throw error because email is not accessible out of child function
}

parent();
