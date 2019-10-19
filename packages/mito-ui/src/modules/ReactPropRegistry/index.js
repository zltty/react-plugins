//react prop 注册

const emptyObject = {};
const objects = {};
const prefix = 'r';
let uniqueID = 1;

//1.创建key
const createKey = id => `${prefix}-${id}`;

class ReactPropRegistry {
    static register(object) {
        const id = uniqueID++;
        if(process.env.NODE_ENV !== 'production'){
            Object.freeze(object);
        }
        const key = createKey(id);
        objects[key] = object;
        return id;
    };

    static getByID(id) {
        if(!id) {
            return emptyObject;
        }
        const key = createKey(id);
        const object = objects[key];

        if(!object){
            console.warn('非法的样式id'+id);
            return emptyObject;
        }

        return object;
    };
}
export default ReactPropRegistry;