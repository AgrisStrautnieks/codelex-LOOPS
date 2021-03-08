/* Example:

> Enter the number:
> 5
> Select the character:
> $
$
$ $
$ $ $
$ $ $ $
$ $ $ $ $

*/

import * as prompts from "prompts";

(async () => {
  const response = await prompts({
    type: "text",
    name: "num",
    message: ">Enter the number!",
  });
   console.log('>' + ' ' + response.num);

   const characters = await prompts({
    type: "text",
    name: "character",
    message: "> Select the character:",
  });
  console.log('>' + ' ' + characters.character);

   let line = '';

  for (let i = 1; i <= response.num; i++) {
    for (let j = 0; j < i; j++) {
      line += characters.character + ' ';
    }
    line += '\n';
}
console.log(line);

})();
