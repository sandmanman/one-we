//
// Utils
//

import docCookies from './cookie'
import fecha from 'fecha'

// 中文格式
fecha.i18n = {
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    amPm: ['上午', '下午'],
}
fecha.masks = {
    default: 'ddd MMM DD YYYY HH:mm:ss',
    shortDate: 'M/D/YY',
    mediumDate: 'MMM D, YYYY',
    longDate: 'MMMM D, YYYY',
    fullDate: 'dddd, MMMM D, YYYY',
    shortTime: 'HH:mm',
    mediumTime: 'HH:mm:ss',
    longTime: 'HH:mm:ss.SSS'
}


// localStorage
var localStorage = {
    setter(key, val) {
        if (!key) return
        if (typeof val !== 'string') {
            val = JSON.stringify(val)
        }
        window.localStorage.setItem(key, val)
    },
    getter(key) {
        if (!key) return
        return window.localStorage.getItem(key)
    },
    remove(key) {
        if (!key) return
        window.localStorage.removeItem(key)
    }
}


// 歌单播放数量格式
var formatPlayCount = (num) => {
    if (num < 10000) {
        return parseInt(num)
    } else {
        return (num / 10000).toFixed(0) + '万'
    }
}

// 表示日期的字符串格式为月/日
var formatDate = {
    mmdd(date) {
        fecha.masks.mmdd = 'MM月DD日'
        return fecha.format(new Date(date), 'mmdd')
    },
    fullDate(date) {
        fecha.masks.full = 'MM月DD日 HH:mm'
        let todayRes = fecha.format(new Date(date), 'MMDD'),
            todayLocal = fecha.format(new Date(), 'MMDD')
        if ( todayRes == todayLocal ) {
            return fecha.format(new Date(date), 'HH:mm')
        } else {
            return fecha.format(new Date(date), 'full')
        }
        
    }
}


// 格式秒数
var formatSeconds = (duration) => {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = parseInt((duration / 1000) % 60),
        minutes = parseInt((duration / (1000 * 60)) % 60),
        hours = parseInt((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? '0' + hours : hours
    minutes = (minutes < 10) ? '0' + minutes : minutes
    seconds = (seconds < 10) ? '0' + seconds : seconds

    return minutes + ':' + seconds
}


export {
    formatPlayCount,
    localStorage,
    docCookies,
    formatDate,
    formatSeconds,
}