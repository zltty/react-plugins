import React ,{ Component }from 'react';

import { 
    Modal,
    View,
    Button,
    StyleSheet
} from '../../../../src';


class ModalScreen extends Component {
    state = {
        fade:false,
        none:false,
        slide:false,
    }

    render() {
        return (
            <View style={styles.container}>
                <Button 
                    title='fade' 
                    onPress = { this._onShowModal }
                    style={styles.btn}
                />
                <Button 
                    title='none' 
                    onPress = { this._onShowModal }
                    style={styles.btn}
                />
                <Button 
                    title='slide' 
                    onPress = { this._onShowModal }
                    style={styles.btn}
                />
                
                <Modal 
                    animationType='fade'
                    visible={this.state.fade} 
                >
                    <Button 
                        title='关闭模态框' 
                        onPress = { this._onCloseModal }
                    />
                </Modal>
                <Modal 
                    animationType='none'
                    visible={this.state.none} 
                >
                        <Button 
                            title='关闭模态框' 
                            onPress = { this._onCloseModal }
                        />
                </Modal>
                <Modal 
                    animationType='slide'
                    visible={this.state.slide} 
                >
                    <View style={styles.modal}>
                        <Button 
                            title='关闭模态框' 
                            onPress = { this._onCloseModal }
                        />
                    </View>
                </Modal>
            </View>
        )
    }
    _onShowModal = e=> {
        const name = e.title;
        console.log('_onShowModal--------->',e);
        this.setState({
            [name]: true
        })
    }
    _onCloseModal = ()=> {
        let name;
        Object.keys(this.state).forEach(item=>{
            if(this.state[item] ===true){
                name = item;
            }
        })

        this.setState({
            [name]: false
        })
    }
}

const styles = StyleSheet.create({
    container:{
        height:'calc(100vh)',
        width:'calc(100hv)',
        backgroundColor: 'red',
    },
    btn:{
        marginLeft:20,
        marginTop:5,
    },
    modal:{
        backgroundColor:'#fff',
        width:350,
        height:225,
    }
})

module.exports = ModalScreen;