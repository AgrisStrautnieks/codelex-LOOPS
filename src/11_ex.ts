/* Example:

> Enter the number:
> 5
A
B B
C C C
D D D D
E E E E E
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
   let str = '';
   for (let i = 1; i <= n; i++) {
            // printing characters
            for (let j = 0; j < i; j++) {
              str += String.fromCharCode((i - 1) + 65) + ' ';
            }
            str += "\n";
          }
          console.log(str);

})();
