# lighting

该工程定位 node 轻量级工程的项目模板，建议使用 node version>=16, 包管理器任意

模板特性集成情况：

- [x] typescript
- [x] nodemon 支持
- [x] prettier
- [x] editorconfig
- [ ] eslint
- [ ] jest

## 命令使用

以包管理器 pnpm 为例

`pnpm run tsc` 开启 ts 编译观察模式

`pnpm run dev` 运行 dist/app.js

### nodemon 使用

全局安装 nodemon 模块，可以使用 `nodemon *.js`运行任意的 js 文件

### typescript 支持

ts 配置文件位于 `/tsconfig.json`，可以根据自己的需要改变配置

全局安装 typescript，可以手动编译 ts 文件，只需要执行命令 `tsc`

**注意 当删除 src 里的源码文件时，tsc 并不会同步删除操作，需要自己 clean dist 文件夹以防止运行程序发生非预期行为**

## 开源协议

**MIT**
