import formatCSS from '../../../modules/formatCSS';

const normalizeValue = (property, value)=> {
    // console.log('property---normalizeValue--------->', property);
    // console.log('value------normalizeValue------>', value);

    if(!formatCSS[property] && typeof value ==='number'){
        value = `${value}px`;
    }
    return value;
}

export default normalizeValue;