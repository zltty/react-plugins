import React from 'react';
import { ActivityIndicator } from '../../../../src';

import UIExplorer ,{ 
    DocItem,
    Description,
} from '../../../ui-explorer'

const ActivityIndicatorScreen = ({...props})=> {

    return(
        <UIExplorer title='ActivityIndicator'>
            <Description>加载器....</Description>
            <DocItem 
                name='color'
                typeInfo='?string'
                example={{
                    code:'<ActivityIndicator color="red" />'
                }}
            />
            <ActivityIndicator color='red' />
        </UIExplorer>
    )
}
module.exports = ActivityIndicatorScreen;