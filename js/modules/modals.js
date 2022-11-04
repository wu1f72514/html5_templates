import { ciremoveClass, ciaddClass, ciInClasses } from './css.js'
import { ishow } from './display.js'
import { gid, gtagn, gclass, gname, sih, sit, sth, stt, ival, clone, gidata, godata } from './dom.js'

// manage the h5ts modals
export let h5ts_modals = () => {
    let buttons = gtagn('button')
    for(const button of buttons){
        let modal_id = godata(button, 'modal_id')
        if(modal_id === null){
            continue
        }
        if(button.className.indexOf('close') === -1){
            button.onclick = showModal
        }
        else{
            button.onclick = closeModal
        }
    }

    let closeBts = gclass('closeBt')
    for(const closeBt of closeBts){
        closeBt.onclick = hideModalByClickCloseCross
    }

    let modals = gclass('modal')
    for(const modal of modals){
        modal.onclick = hideModalByClickModalShadow
        if(ciInClasses(modal.id, 'hidden')){
            document.body.style.overflow = 'auto'
        }
        else{
            document.body.style.overflow = 'hidden'
        }
    }

}

export let showModal = (e) => {
    ciremoveClass(godata(e.target, 'modal_id'), 'hidden')
    document.body.style.overflow = 'hidden'
}

export let closeModal = (e) => {
    ciaddClass(godata(e.target, 'modal_id'), 'hidden')
    document.body.style.overflow = 'auto'
}

let hideModalByClickCloseCross = (e) => {
    if(ciaddClass(e.target.parentNode.parentNode.id, 'hidden')){
        document.body.style.overflow = 'auto'
    }
}
let hideModalByClickModalShadow = (e) => {
    if(ciaddClass(e.target.id, 'hidden')){
        document.body.style.overflow = 'auto'
    }
}