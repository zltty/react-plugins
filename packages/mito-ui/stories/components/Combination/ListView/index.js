import React ,{ Component }from 'react';
import { ListView, StyleSheet, View, Text } from '../../../../src';

class ListViewScreen extends Component{
    state = {
        reload:false
    }
    page =1;
    config = [
        {id:1,title:'1'},
        {id:2,title:'2'},
        {id:3,title:'3'},
        {id:4,title:'4'},
        {id:5,title:'5'},
        {id:6,title:'6'},
        {id:7,title:'7'},
        {id:8,title:'8'},
        {id:9,title:'9'},
        {id:10,title:'10'},
    ]

    _onEndReached = ()=> {
        console.log('_onEndReached------------->');
        const config = [
            {id: this.page+'0',title:'hh'},
            {id: this.page+'1',title:'hh'},
            {id: this.page+'2',title:'hh'},
            {id: this.page+'3',title:'hh'},
            {id: this.page+'4',title:'hh'},
            {id: this.page+'5',title:'hh'},
            {id: this.page+'6',title:'hh'},
            {id: this.page+'7',title:'hh'},
            {id: this.page+'8',title:'hh'},
            {id: this.page+'9',title:'hh'},
        ]
        this.page += 1;
        this.config = this.config.concat(config);
        console.log('this.config------------>',this.config);
        this.setState({
            reload:!this.state.reload
        })
    }
    _onRenderRow = (item)=> {
        // console.log('_onRenderRow----------------->',item);
        return(
            <View style={styles.row}><Text>{item.id}</Text></View>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <ListView 
                    style={styles.scrollView}
                    dataSource={this.config}
                    onEndReached={this._onEndReached}
                    renderRow={this._onRenderRow}
                    showPagination={true}
                    paginationBackgroudColor='red'
                    paginationMarginTop={10}
                    paginationPaddingRight={30}
                    paginationActiveButtonColor='#faaf45'
                    paginationActiveValueColor='#fff'
                    paginationInActiveButtonColor='#fff'
                    paginationInActiveValueColor='#ccc'
                    paginationBorderColor='#ccc'
                    paginationBorderWidth={1}
                    paginationHeight={100}
                    paginationBorderRadius={5}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        height:'calc(100vh)',
    },
    scrollView:{
        flex:1,
        backgroundColor:'orange'
    },
    row:{
        height:250,
        backgroundColor:'red',
        marginTop:10,
    },
})
module.exports = ListViewScreen;