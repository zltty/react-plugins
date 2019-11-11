// import React from 'react';

// import { Link } from 'react-router-dom';

// /**
//  * @author com.ppz.zl
//  * @dateTime  2017年05月26日10:27:05
//  * @desc tab
//  * @version v1
//  * @param {*} props 
//  */
// const Item = ({...props}) => {
//     // console.log('Tabitem------------------>',props);
//     const { 
//         id,//tab id用于点击事件 返回值 *{string}
//         title,//tab 说明 *{string}
//         path,//跳转的路由
//         icon,//图标 *{string}
//         color,
//         height
//     } = props;

//     //tab 容器样式
//     const tabStyles = {
//         height,
//         flex:1,
//         display:'flex',
//         flexDirection: 'column',
//         justifyContent:'center',
//         alignItems:'center', 
//         textDecoration: 'none',
//     }
//     //图标样式 
//     const iconStyles = {
//         width: 24,
//         height: 24,
//         backgroundSize: '24 24',
//     }
//     //title样式
//     const titleStyles = {
//         color,
//     }
//     return(
//         <Link to={`${path}/${id}`} style={tabStyles}>
//             <img src={icon} className='grid-item-img' alt="" style={iconStyles}/>
//             <div style={titleStyles} >
//                 {title}
//             </div>
//         </Link>
//     );
// };

// export default Item;