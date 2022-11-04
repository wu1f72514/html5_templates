
// getters
/**
 * gid : alias de getElementById
 * @param {text} id Id de l'élement
 * @returns
 */
export let gid = (id) => document.getElementById(id)

 /**
  * gtagn : alias de getElementsByTagName
  * @param {text} tagname Nom de balise html
  * @param {*} ind Indice ou name de l'element à cibler (peut etre null)
  * @returns
  */
export let gtagn = (tagname, ind=null) => (ind)?document.getElementsByTagName(tagname)[ind]:document.getElementsByTagName(tagname)

 /**
  * gclass : alias de getElementsByClassName
  * @param {text} classname class CSS de l'élement
  * @param {*} ind Indice ou name de l'element à cibler (peut etre null)
  * @returns
  */
  export let gclass = (classname, ind=null) => (ind)?document.getElementsByClassName(classname)[ind]:document.getElementsByClassName(classname)

 /**
  * gname : alias de getElementsByName
  * @param {text} name attribut name de l'élement
  * @param {*} ind Indice de l'element à cibler (peut etre null)
  * @returns
  */
export let gname = (name, ind=null) => (ind)?document.getElementsByName(name)[ind]:document.getElementsByName(name)

 /**
  * gidata : alias de getElementsById.dataset.attribut
  * @param {text} id attribut id de l'élement
  * @param {text} attr nom de l'attribut à cibler
  * @returns
  */
export let gidata = (id, attr) => (attr)?gid(id).dataset[attr]:null

 /**
  * gidata : renvoie la valeur d'un attribut dataset
  * @param {object} elt élement
  * @param {text} attr nom de l'attribut à cibler
  * @returns
  */
export let godata = (elt, attr) => {

    if(typeof(elt) === 'undefined'){
        return null
    }
    if(elt.dataset === null){
        return null
    }
    if(elt.dataset[attr] === null || typeof(elt.dataset[attr]) === 'undefined'){
        return null
    }
    return elt.dataset[attr]
}

 // setters
 /**
  * sih : alias de innerHTML via accès à l'élément par id
  * @param {text} id Id de l'élement
  * @param {text} html contenu HTML à affecter
  * @returns
  */
  export let sih = (id, html) => {
     if(gid(id)){
         gid(id).innerHTML = html
         return true
     }
     return false
 }

 /**
  * sit : alias de innerText via accès à l'élément par id
  * @param {text} id Id de l'élement
  * @param {text} text contenu texte à affecter
  * @returns
  */
  export let sit = (id, text) => {
     if(gid(id)){
         gid(id).innerText = text
         return true
     }
     return false
 }

 /**
  * sth : alias de innerHTML via accès à l'élément par son tagname
  * @param {text} tn Nom de balise html
  * @param {*} ind Indice ou name de l'element à cibler (peut etre null)
  * @param {text} html contenu HTML à affecter
  * @returns
  */
  export let sth = (tn, ind, html) => { // @todo à tester
     if(gtagn(tn, ind)){
         gtagn(tn, ind).innerHTML = html
         return true
     }
     return false
 }

 /**
  * stt : alias de innerText via accès à l'élément par son tagname
  * @param {text} tn Nom de balise html
  * @param {*} ind Indice ou name de l'element à cibler (peut etre null)
  * @param {text} text contenu texte à affecter
  * @returns
  */
  export let stt = (tn, ind, text) => { // @todo à tester
     if(gtagn(tn, ind)){
         gtagn(tn, ind).innerText = text
         return true
     }
     return false
 }

 /**
  * ival : alias de .value =
  * @param {text} id Id de l'élement
  * @param {*} val valeur à affecter
  * @returns {boolean} true ou false
  */
  export let ival = (id, val) => {
     if(gid(id)){
         gid(id).value = val
         return true
     }
     return false
 }

 export let clone = (parent, tpl_ind) => {
     let clon = gtagn('template', tpl_ind).content.cloneNode(true)
     parent.appendChild(clon);
 }

//  clone(document.body, 'example')
