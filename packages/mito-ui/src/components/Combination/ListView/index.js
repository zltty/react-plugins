import React,{ Component } from 'react';

import { View, ScrollView } from '../../../index.js';
import Pagination from './Pagination.js';

class ListView extends Component {
    state = {
        reload:false
    }
    static displayName='ListView';

    static defatulProps = {
        initialListSize:1,
        dataSource:[],
        onEndReachedThreshold:20,
        scrollTo:undefined,
        scrollToEnd:undefined,
        pageSize:5,
        removeClippedSubviews:true,
        renderFooter:()=>{},
        renderHeader:()=>{},
        renderRow:()=>{},
        renderSeparator:()=>{},
        scrollRenderAheadDistance:20
    }

    componentWillReceiveProps(nextProps) {
        // console.log('ListView nextProps------------------->', nextProps);

    }
    
    render(){
        const {
            dataSource,
            renderRow,
            renderHeader,
            renderFooter,
            renderSeparator,
            showPagination,
            //分页器属性
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
            ...scrollProps
        } = this.props;

        const header = renderHeader && renderHeader();
        const footer = renderFooter && renderFooter();


        //children 组件
        const childrenArr = dataSource.map((item, index)=>{
            const rowData = item; 
            const sectionID = undefined;
            const rowID = undefined; 
            const highlightRow = undefined;

            return React.cloneElement(
                renderRow(rowData,sectionID,rowID, highlightRow),
                {
                    key:`rc_${index}`
                }
            )
        });

        if(showPagination){
            const ListComp = this._getListComp(scrollProps,header,childrenArr,footer);
            //分页器属性
            const paginationStyles = {
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
            };
            return (
                <View>
                    {ListComp}
                    <Pagination {...paginationStyles}/>
                </View>
            )
        }
        return this._getListComp(scrollProps,header,childrenArr,footer);

    }
    _getListComp = (scrollProps,header,childrenArr,footer )=> {
        return React.cloneElement(
            this._getContainerComp(scrollProps),
            {},
            header,
            childrenArr,
            footer,
        );
    }
    _getContainerComp = (props)=> {
        return <ScrollView {...props} />
    }
}

module.exports = ListView;