import { gid } from "./dom.js"

export let ciClasses = (id) => {
    if(gid(id)){
        return gid(id).className.split(' ')
    }
    return false
}

export let ciInClasses = (id, isIn) => {
    if(gid(id)){
        if(gid(id).className.indexOf(isIn)){
            return true
        }
    }
    return false
}

export let ciapplyClasses = (id, classes) => {
    gid(id).className = classes.join(' ')
    return true
}

export let ciremoveClass = (id, toRemove) => {
    let classes = ciClasses(id)
    if(!classes){
        return false
    }
    classes.splice(classes.indexOf(toRemove),1)
    return ciapplyClasses(id, classes)
}

export let ciaddClass = (id, toAdd) => {
    let classes = ciClasses(id)
    if(!classes){
        return false
    }
    classes.push(toAdd)
    return ciapplyClasses(id, classes)
}