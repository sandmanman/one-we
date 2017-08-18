//
// Utils
//

import docCookies from './cookie'


var log = (console) => {
    return console.log.bind(console)
}

// 歌单播放数量格式
var formatPlayCount = (num) =>{
    if( num < 10000 ) {
        return parseInt(num)
    } else {
        return (num/10000).toFixed(0) + '万'
    }
}

// localStorage
var localStorage = {
    setter(key, val){
        if ( !key ) return
        if( typeof val !== 'string' ) {
            val = JSON.stringify(val)
        }
        window.localStorage.setItem(key, val)
    },
    getter(key) {
        if( !key ) return
        return window.localStorage.getItem(key)
    },
    remove(key) {
        if( !key ) return
        window.localStorage.removeItem(key)
    }
}


export {
    log,
    formatPlayCount,
    localStorage,
    docCookies,
}