
/* Example:

> Enter the number:
> 5
******
.*****
..****
...***
....**
.....*

*/

import * as prompts from "prompts";

(async () => {
  const response = await prompts({
    type: "text",
    name: "num",
    message: ">Enter the number!",
  });
   console.log(response.num);

   let  n = response.num;
   let emptyString = "";
   let star = '*';
   
   console.log(star.repeat(n) + star);

   for (var i = 0; i < n; i++) {

            emptyString += '.'.repeat(i) + star.repeat(n - i) + '\n';
          }

          console.log(emptyString);


})();
