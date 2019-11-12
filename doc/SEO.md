## SEO
优化搜索引擎搜索,让搜索引擎更好的识别内容，排名靠前。
```js
大多数所搜引擎不支持js渲染，也就是客户端渲染。

粗浅理解
添加title 与 meta Description

百度权能搜索引擎会分析所有文本，不仅仅是title。
title 详细描述，不仅仅是一个网站名
Description 显示在搜索标题右侧

优化文字
百度会分析是否原创，权重会比较高。
优化链接
其他网站链接本网站次数比较多，权重比较高
// <link rel="canonical" href="http://mysite.com/example" /> 重新制定正确的希望被收录的域名
优化图片
有图片的网站高于无图片

代码优化
使用react-helmet 定制每个页面的title description
这里也分为客户端与服务端渲染
客户端/服务端 需要分别引用。 服务端识别的是客户端的组件header
```
