import React from 'react';

import { TextInput } from '../../../../src';

const TextInputScreen = ()=> {

    const _onChangeText = rs => {
        console.log('输入框--------->',rs);
    }

    return(
        <TextInput 
            multiline={false}
            onChangeText={ _onChangeText }
        />
    )
}

module.exports = TextInputScreen;