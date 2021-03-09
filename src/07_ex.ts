/* Example:

> Enter the number:
> 4
+ - - +
| - - |
| - - |
+ - - +

*/

import * as prompts from "prompts";

(async () => {
  const response = await prompts({
    type: "text",
    name: "num",
    message: ">Enter the number!",
  });
   console.log(response.num);

     let line = '-';
     let pluss = '+';
     let verticalLine = '|';

     console.log(pluss + ' ' + line.repeat(response.num - 2) + ' ' +  pluss);

   for(let i = 1; i < response.num - 1; i++){  
       for (let j = 1; j < response.num - 1; j++){  
       }  
       console.log(verticalLine + ' ' + line.replace(' ','-').repeat(response.num - 2) + ' ' + verticalLine);
   }  
   console.log(pluss + ' ' + line.repeat(response.num - 2) + ' ' +  pluss);


})();