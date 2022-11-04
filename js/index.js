import { gtagn } from "./modules/dom.js";
import { log } from "./modules/console.js";

let codes = gtagn('blockquote')

for(const code of codes){
    log(code.innerHTML)
    code.innerHTML = code.innerHTML.replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll("\n", '<br />')
}