/* Examples:

> Enter the number:
> 1
  |
* | *
> Enter the number:
> 4
     |
   * | *
  ** | **
 *** | ***
**** | ****

*/

import * as prompts from "prompts";

(async () => {
  const response = await prompts({
    type: "text",
    name: "num",
    message: ">Enter the number!",
  });
   console.log(response.num);



})();
