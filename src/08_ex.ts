/* Examples:

> Enter the number:
> 1
*
> Enter the number:
> 4
   *
  * *
 * * *
* * * *
 * * *
  * *
   *
   
*/
need to fix

import * as prompts from "prompts";

(async () => {
  const response = await prompts({
    type: "text",
    name: "num",
    message: ">Enter the number!",
  });
   console.log(response.num);

   let string = "";
// Upside pyramid
for (let i = 1; i <= response.num; i++) {
  // printing spaces
  for (let j = response.num; j > i; j--) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}
// downside pyramid
for (let i = 1; i <= response.num - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = (response.num - i) * 2 - 1; k > 0; k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);



})();