# 伦子的博客

### 目录结构说明 

<table>
    <tr align="left">
        <th>目录名或文件名</th>
        <th>功能描述</th>
    </tr>
    <tr>
        <td>
├── .nuxt<br>
├── assets<br>
├── components<br>
├── content<br>
├── layouts<br>
├── middleware<br>
├── pages<br>
├── plugins<br>
├── static<br>
├── store<br>
├── test<br>
├── .babelrc<br>
├── .editorconfig<br>
├── .eslintrc.js<br>
├── .gitignore<br>
├── .prettierrc<br>
├── commitlint.config.js<br>
├── jest.config.js<br>
├── nuxt.config.js<br>
├── package.json<br>
├── README.md<br>
├── stylelint.config.js<br>
├── tsconfig.json<br>
└── yarn.lock<br>
        </td>
        <td>
nuxt编译后文件<br>
全局打包文件<br>
公共Vue组件<br>
@nuxtjs/content 套件资源目录<br>
布局组件<br>
中间件<br>
路由组件<br>
插件<br>
全局静态文件<br>
vuex文件<br>
jest测试文件<br>
babel js语法 编译器<br>
项目字符编码风格配置文件<br>
eslint代码格式检测工具配置文件<br>
git忽略更新的配置文件<br>
prettier代码格式化工具配置文件<br>
git commit 信息格式检测工具配置文件<br>
jest测试框架配置文件<br>
nuxt配置文件<br>
依赖管理文件<br>
项目主文档<br>
css样式格式检测工具配置文件<br>
typescript配置文件<br>
为了跨机器安装得到一致的结果，yarn需要维护这个文件<br>
        </td>
    </tr>
</table>

### 项目执行命令
 
```bash
# 安装依赖
$ yarn install

# 启动项目（开发环境）
$ yarn dev

# 项目打包
$ yarn build
$ yarn start

# 项目纯静态打包（异步请求都没有）
$ yarn generate
```
