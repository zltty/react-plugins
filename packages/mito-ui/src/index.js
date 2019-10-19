const ReactComponent = {
    /***********apis**********************/
    get Platform () { return require('./apis/Platform'); },
    get StyleSheet (){ return require('./apis/StyleSheet'); },
    get StyleRegistry (){ return require('./apis/StyleSheet/registry'); },
    /***********Components**********************/
    //Combination
    get ListView (){ return require('./components/Combination/ListView'); },
    get ScrollView (){ return require('./components/Combination/ScrollView'); },
    get RefreshControl (){ return require('./components/Combination/RefreshControl'); },
    //DataDisplay
    get Grid () { return require('./components/DataDisplay/Grid'); },
    get Icon () { return require('./components/DataDisplay/Icon'); },
    get Text () { return require('./components/DataDisplay/Text'); },
    get Image () { return require('./components/DataDisplay/Image'); },
    //Navigation
    get NavBar () { return require('./components/Navigation/NavBar'); },
    get Tabbar () { return require('./components/Navigation/Tabbar'); },
    get TabItem () { return require('./components/Navigation/Tabbar/TabItem.js'); },
    //Layout
    get View () { return require('./components/Layout/View'); },
    get WhiteSpace () { return require('./components/Layout/WhiteSpace'); },
    //Feedback
    get ActivityIndicator () { return require('./components/Feedback/ActivityIndicator'); },
    get TouchableOpacity () { return require('./components/Feedback/TouchableOpacity'); },
    get Modal () { return require('./components/Feedback/Modal'); },

    //DataEntry
    get Button () { return require('./components/DataEntry/Button'); },
    get TextInput () { return require('./components/DataEntry/TextInput'); },
}

global.deviceInfo =  ReactComponent.Platform.DeviceInfo;

module.exports = ReactComponent;