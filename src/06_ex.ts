
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

   let emptyString = "";
   
   for (var i = 0; i < response.num; i++) {

            emptyString += '.'.repeat(i) + '*'.repeat(response.num - i) + '\n';
          }

          console.log(emptyString);


})();
