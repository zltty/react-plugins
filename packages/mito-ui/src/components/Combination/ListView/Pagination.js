import React from 'react';
import { View, Text ,StyleSheet} from '../../../index.js'

import TotalPage from './TotalPage.js';
import JumpPage from './JumpPage.js';
import PageSelector from './PageSelector.js';

const styles = StyleSheet.create({
    pagination:{
        flexDirection:'row',
        alignItems:'center',
    }
})
const Pagination = ({...props})=> {
    const {
        paginationBackgroudColor,
        paginationMarginTop,
        paginationPaddingRight,
        paginationActiveButtonColor,
        paginationActiveValueColor,
        paginationInActiveButtonColor,
        paginationInActiveValueColor,
        paginationBorderColor,
        paginationBorderWidth,
        paginationHeight,
        paginationWidth,
        paginationBorderRadius,
        paginationDirection='flex-end'
    } = props;
    
    // console.log('Pagination---------->',props);
    const container = {
        height: paginationHeight,
        backgroundColor: paginationBackgroudColor,
        marginTop: paginationMarginTop,
        paddingRight:paginationPaddingRight,
        justifyContent: paginationDirection
    }
    
    const paginationStyle = {
        borderColor: paginationBorderColor,
        borderWidth: paginationBorderWidth,
        borderRadius: paginationBorderRadius,
        backgroundColor:'#999',
        flexDirection:'row',
        overflow:'hidden'
    }

    const buttonStyle = {
        backgroudColor: paginationActiveButtonColor,
        // paginationInActiveButtonColor,
    }
    const valueStyle = {
        // paginationInActiveValueColor,
        color:paginationActiveValueColor,
    }

    return(
        <View style={[styles.pagination,container]}>
            <TotalPage currentPage={1} totalPage={441} />
            <JumpPage marginLeft={15} marginRight={15} />
            <PageSelector style={paginationStyle}/>
        </View>
    )
}

export default Pagination;