# react-components

## install
    1.复制getRCComponents.sh到项目中
    2../getRCComponents.sh执行脚本
    3. yarn install 或者npm install
    
    如果没有yarn 使用 brew install yarn 
## 1.View v

## 2.Text x
    * 2.1 不支持 Text 中 \n \t 等转义字符 
    * 2.2 不支持 字符超出文本容器范围换行
## 3.StyleSheet v
    * 3.1 不支持 基础组件行内样式 v 2017年08月18日16:37:24
        const styles = StyleSheet({
            container:{},
            background:{},
        })
        <Text style={[styles.container,{backgroundColor:'red'}]}></Text>
    * 3.2 不支持 基础组件不能继承自定义组件样式 v 2017年08月22日15:01:40
    
    * 3.3 不支持 平行标签 v 2017年08月18日16:37:24
        <View>
            <View style={}></View>
            <View style={}></View>
        </View>
    * 3.4 不支持 样式取相同名称 v 2017年08月18日22:39:01
## 4.button v
    * 4.1 Button onPress 根据当前运行时环境判断执行事件  v 2017年08月23日22:38:13
## 5.platform v 

## 6.Image x
    6.1 不支持 uri v 2017年08月23日16:57:45
    6.2 不支持 本地图片  v 2017年08月23日22:19:57
    6.3 不支持 svg v2017年08月23日22:39:36
        6.3.1 本地svg v 2017年08月23日22:20:24
        6.3.2 自定义svg标签 v 2017年08月23日22:37:54
    6.4 不支持 base64图片 v 2017年08月23日22:20:48
## 7. TextInput 
    7.1 不支持 onChange v2017年08月25日16:36:10
    7.2 不支持 onBlur 
    7.3 不支持 onFocus
    7.4 不支持 onKeyDown
    7.5 不支持 onKeyPress
    7.6 不支持 pattern
    7.7 不支持 disabled
    7.8 不支持 autofocus
    7.9 不支持 placeholder
    7.10 不支持 required
## 8.Modal
    8.1 不支持 透明度
    8.2 不支持 动画
    8.3 不支持 背景点击事件

    
    
