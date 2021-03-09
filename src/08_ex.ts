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

import * as prompts from "prompts";

(async () => {
  const response = await prompts({
    type: "text",
    name: "num",
    message: ">Enter the number!",
  });
   console.log(response.num);
   let n = response.num;
   let string = "";

for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = n; j > i; j--) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}
// downside
for (let i = 1; i <= n - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);



})();