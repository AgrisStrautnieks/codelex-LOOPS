/* Examples:

> Enter the number:
> 1
*
> Enter the number:
> 4
-**-
*--*
-**-
> Enter the number:
> 9
----*----
---*-*---
--*---*--
-*-----*-
*-------*
-*-----*-
--*---*--
---*-*---
----*----

*/
need to fix

import * as prompts from "prompts";

(async () => {
  const response = await prompts({
    type: "text",
    name: "num",
    message: ">Enter the number!",
  });
   console.log(response.num);
  
  

})();



