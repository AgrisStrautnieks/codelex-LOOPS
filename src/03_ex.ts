/* Example:

> Enter the number:
> 5
*****
*   *
*   *
*   *
*****


*/


import * as prompts from "prompts";

(async () => {
  const response = await prompts({
    type: "text",
    name: "num",
    message: ">Enter the number!",
  });
   console.log(response.num);

     let line = '*';
     console.log(line.repeat(response.num));

   for(let i = 1; i < response.num - 1; i++){  
       for (let j = 1; j < response.num - 1; j++){  
       }  
       console.log(line + line.replace('*',' ').repeat(response.num - 2) + line);
   }  
   console.log(line.repeat(response.num));


})();

