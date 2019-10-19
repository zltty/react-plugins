// import React from 'react';
// import _ from 'lodash';

// import Item from './Item.js';
// import { View } from '../../index.js';

// // import './index.css';
// /**
//  * @author com.ppz.zl
//  * @dateTime 2017年05月26日09:58:57
//  * @desc 表格
//  * @version v1
//  * @param {*} props 
//  */
// const Grid = ({...props})=>{
//     // console.log('Grid------------>',Grid);

//     const {
//         itemHeight=80,
//         config,//配置数组 *{object}
//         path,//跳转的路由
//         onClick,//点击事件 *{function}
//         column,//显示列数,剩余的在一个数组中 opt{number} 默认显示长度为当前config长度  
//         lastRange,//最后一行排列 opt{string}:'center','left','right' 默认'center
//     } = props;
    
//     //1.分组
//     const _arr = column ? _.chunk(config, column) : config;
//     // console.log('_arr----------->',_arr);

//     return(
//         <View display='row'>
//             {
//                 column 
//                 ?   _arr.map((item, index) => 
//                         _arr.map((item, index) => 
//                             <Item 
//                                 key={'grid'+index}
//                                 id={ item.id }
//                                 color='#666'
//                                 path={path}
//                                 title={ item.title }
//                                 icon={ item.source }
//                                 lastRange={lastRange}
//                                 height={itemHeight}
//                                 onClick={ ()=>onClick(item.id) }
//                             />
//                         )
//                     )
//                 :   _arr.map((item, index) => 
//                         <Item 
//                             key={'grid'+index}
//                             id={ item.id }
//                             color='#666'
//                             path={path}
//                             title={ item.title }
//                             icon={ item.source }
//                             lastRange={lastRange}
//                             height={itemHeight}
//                             onClick={ ()=>onClick(item.id) }
//                         />
//                     )
//             }
//         </View>
//     )
// }
//     {/*</div><div className="grid-container">*/}
       
// module.exports = Grid;

import React from 'react';
const Grid = ()=>{
    return(
        <div>Grid</div>
    )
}
module.exports = Grid;