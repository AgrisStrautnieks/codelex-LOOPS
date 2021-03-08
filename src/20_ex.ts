
/* Examples:

> Enter the number:
> 4
1 * 2 * 3 * 4

1 * 2 * 3

1 * 2

1

*/

need to work on it

import * as prompts from "prompts";

(async () => {
  const response = await prompts({
    type: "text",
    name: "num",
    message: ">Enter the number!",
  });
   console.log(response.num);

   let string = "";
   for (let i = 0; i < response.num; i++) {
     // printing star
     for (let k = 1; k < response.num - i; k++) {
       string +=  k + ' ' + '*' + ' ';
     }
     string += "\n";
   }
   console.log(string);



})();
