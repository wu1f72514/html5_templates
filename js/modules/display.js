import { gid } from './dom.js'

 // visibility
 export let ihide = (id) => {
    if(gid(id)){
        gid(id).style.display = 'none'
        return true
    }
    return false
}
export let ishow = (id) => {
    if(gid(id)){
        gid(id).style.display = ''
        return true
    }
    return false
}
export let itoog = (id) => {
    if(gid(id)){
        gid(id).style.display = (gid(id).style.display === 'none')?'':'none'
        return true
    }
    return false
}
export let ivhide = (id) => {
    if(gid(id)){
        gid(id).style.visibility = 'hidden'
        return true
    }
    return false
}
/**
 * ivshow : Montre l'element avec visibility visible via son id
 * @param {text} id
 * @returns
 */
 export let ivshow = (id) => {
    if(gid(id)){
        gid(id).style.visibility = 'visible'
        return true
    }
    return false
}
/**
 * ivtoog : Inverse la visibility de l'element via son id
 * @param {text} id
 * @returns
 */
 export let ivtoog = (id) => {
    if(gid(id)){
        gid(id).style.display = (gid(id).style.visibility === 'hidden')?'visible':'hidden'
        return true
    }
    return false
}