//遍历键值对
const hasOwnProperty = Object.prototype.hasOwnProperty;

const mapKeyValue = (obj , fn)=> {
    const result = [];
    for(var key in obj){
        const r = fn(key, obj[key]);
        r && result.push(r);
    }
    return result;
}

export default mapKeyValue;