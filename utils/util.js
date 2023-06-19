const formatTime = (date, type) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    if (type === 'date') {
        return `${[year, month, day].map(formatNumber).join('-')}`
    }
    if (type === 'datetime' || !type) {
        return `${[year, month, day].map(formatNumber).join('-')} ${[hour, minute, second].map(formatNumber).join(':')}`
    }

}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : `0${n}`
}

const formatGender = (val) => {
    const list = [{
        label: '未知',
        value: 0
    }, {
        label: '男',
        value: 1
    }, {
        label: '女',
        value: 2
    }, {
        label: '未说明',
        value: 9
    }]
    if (!val) {
        return list
    }
    if (val) {
        const temp = list.filter(f => f.value === val)
        if (temp && temp.length > 0) {
            return temp[0].label
        }else{
            return null
        }
        
    }

}

module.exports = {
    formatTime,
    formatGender
}