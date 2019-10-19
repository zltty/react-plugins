import React from 'react';
import { View, Text } from '../../../index.js';

const TotalPages = ({...props})=> {
    const {  currentPage, totalPage } = props;
    return(
        <View><Text>{`第${currentPage}页/共${totalPage}页`}</Text></View>
    )
}

export default TotalPages;