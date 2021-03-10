/* Example:

> Enter the number:
> 5
       1
     1   1
   1   2   1
 1   3   3   1
1   4   6   4   1

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
  for (let i = 1; i <= n; i++) {

    let str = ' '.repeat(n - i);

    let str2 = n.repeat(i * 2 - 1)



    console.log(str + str2 + str);

  }

})();
