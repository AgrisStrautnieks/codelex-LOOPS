/* As in Exercise #1 print a rectangle, but this time draw stars separated by a space.

Example:

> Enter the number:
> 3
* * *
* * *
* * *

*/

import * as prompts from "prompts";

(async () => {
  const response = await prompts({
    type: "text",
    name: "num",
    message: ">Enter the number!",
  });
   console.log(response.num);

   let line = '';

  for (let i = 0; i <= response.num; i++) {
    for (let j = 0; j < response.num; j++) {
      line += '*' + ' ';
    }
    line += '\n';
}
console.log(line);

})();
