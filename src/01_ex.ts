/* Print the rectange with a size of n x n where n is a number provided by user.

Example:

> Enter the number:
> 10
**********
**********
**********
**********
**********
**********
**********
**********
**********
**********

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
      line += '*';
    }
    line += '\n';
}
console.log(line);


})();