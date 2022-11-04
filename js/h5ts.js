import { gid, gtagn, gclass, gname, sih, sit, sth, stt, ival, clone, gidata, godata } from './modules/dom.js'
import { log, dir, error, debug, info, clear, trace, warn } from './modules/console.js'
import { ihide, ishow, itoog, ivhide, ivshow, ivtoog } from './modules/display.js'
import { h5ts_modals } from './modules/modals.js'

// init the javascript management
let init = () => {
    manage_h5ts()
}

// manage the h5ts objects
let manage_h5ts = () => {
    h5ts_modals()
}

document.body.onload = init