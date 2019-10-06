const driver = {name: "Bob"}

function updateDriverWithKeyAndValue(obj, key, value){
    return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}

function deleteFromDriverByKey(obj, key){
    const newobj = Object.assign({}, obj)
    delete newobj[key]
    return newobj
}

function destructivelyDeleteFromDriverByKey(obj, key){
    delete obj[key]
    return obj
}