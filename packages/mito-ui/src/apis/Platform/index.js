const getPlatform = ()=> {
    const u = global.navigator.userAgent;
    // console.log('global----global.navigator--------->', global.navigator);
    // console.log('global----navigator--------->', u);
    if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1){
        return 'android';
    }
    if(u.indexOf('iPhone') > -1 || u.indexOf('CPU') > -1){
        return 'iPhone';
    }
    if(u.indexOf('iPad') > -1 || u.indexOf('CPU') > -1){
        return 'iPad';
    }
    return 'web';
}

const getDeviceInfo = ()=> {
    const u = global.navigator.userAgent;
    const __u = u.split(' ');
    const deviceInfo = {
        browser: __u[0],
        buildVersion:__u[3].slice(0,-1),
        device: __u[4]+' '+__u[5].slice(0,-1),
    }
    return deviceInfo;
}

const Platform = {
    OS: getPlatform(),
    DeviceInfo: {
        OS: getPlatform(),
        ...getDeviceInfo()
    },
}

module.exports = Platform;