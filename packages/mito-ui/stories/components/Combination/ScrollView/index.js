import React ,{ Component }from 'react';
import { ScrollView, View ,Text, StyleSheet ,RefreshControl} from '../../../../src';

class ScrollViewScreen extends Component {
    state = {
        reload:false,
        refreshing:false
    }
    page =1;
    config = [
        {id:0,title:'hh'},
        {id:1,title:'hh'},
        {id:2,title:'hh'},
        {id:3,title:'hh'},
        {id:4,title:'hh'},
        {id:5,title:'hh'},
        {id:6,title:'hh'},
        {id:7,title:'hh'},
        {id:8,title:'hh'},
        {id:9,title:'hh'},
    ];

    // scrollTo = e => {
    //     console.log('scrollTo----------->',e);
    // }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render(){

        return(
            <View style={styles.container}>
                <ScrollView 
                    style={styles.scrollView}
                    onEndReached={this._onEndReached}
                    scrollTo={this.scrollTo}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                            title="Loading..."
                            titleColor="#00ff00"
                            tintColor="#ff0000"
                            progressBackgroundColor="#fff"
                        />
                    }
                >
                {
                    this.config.map((item, index)=>
                        <View key={'item'+index} style={styles.item}><Text>{item.id}</Text></View>
                    )
                }
                </ScrollView>
            </View>
        )
    }
    _onRefresh = ()=> {
        console.log('_onRefresh------------->');
        this.timer = setTimeout(()=>{
            this.setState({ refreshing:false })
        },1500);
    }
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
}

const styles = StyleSheet.create({
    container:{
        height:'calc(100vh)',
    },
    scrollView:{
        flex:1,
        backgroundColor:'black'
    },
    item:{
        height:250,
        backgroundColor:'red',
        marginTop:10,
    }
})

module.exports = ScrollViewScreen;