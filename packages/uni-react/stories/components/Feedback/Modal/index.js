import React ,{ Component }from 'react';

import { 
    Modal,
    View,
    Button,
    StyleSheet
} from '../../../../src';


class ModalScreen extends Component {
    state = {
        visible:false,
    }

    render() {
        return (
            <View style={styles.container}>
                <Button 
                    title='打开模态框' 
                    onPress = { this._onShowModal }
                    style={styles.btn}
                />
                <Modal 
                    visible={this.state.visible} 
                >
                    <Button 
                        title='关闭模态框' 
                        onPress = { this._onCloseModal }
                    />
                </Modal>
            </View>
        )
    }
    _onShowModal = ()=> {
        console.log('_onShowModal');
        this.setState({
            visible: true
        })
    }
    _onCloseModal = ()=> {
        this.setState({
            visible: false
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
    }
})

module.exports = ModalScreen;