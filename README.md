基于 webpack pug sass 的 传统html优化编辑脚手架
===================

这个框架的目的在于使用 更加高级的 html模板语言 `PUG` 和  `CSS`　预处理器　SASS 等 高级语言的支持，优化传统的html开发

并且使用`webpack`来提供热更新能力
## 使用的技术

- HTML模板: `Pug`
- CSS预处理器: `Sass` *可以增加*
- JS: `jQuery 或者 普通 Javascript`
- 模块化工具: `Webpack, Webpack Dev Server`

## 当你新建一个`pug`文件并且需要单独输出网页时

-  在`build/pages`中的`pages`列表变量中新建一个如下对象即可

```js
{
     template: "views/index.pug",//pug模板路径
     target: "index.html",      //目标文件名
}
```