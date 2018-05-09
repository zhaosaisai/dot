module.exports = {
    get, 
    set
}

function get(object, path, def) {
    path = typeof path === 'string' ? path.split('.') : path
    object = path.reduce(function(obj, p) {
        return obj && obj[p]
    }, object)

    return object === undefined ? def : object
}

function set(object, path, val) {
    path = typeof path === 'string' ? path.split('.') : path
    path.slice(0, -1).reduce(function(obj, p) {
        return obj[p] = obj[p] || {}
    }, object)[path.pop()] = val

    return object
}
