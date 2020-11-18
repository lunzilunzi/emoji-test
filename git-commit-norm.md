## 提交消息格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 邮件主题（第一行）

- `<subject>`开头大写
- 第一行不要以句号结尾。
- 第一行的总字符**必须**是*少*于或*等于*到**50**个字符长。
- 使用**现在时**（“添加..功能”而不是“已添加..功能”）。
- 使用祈使语气。
- 使用<type>表示本次commit的更改类型; 允许的<type>关键字：
  - 表情符号（请参阅下面[的建议](https://github.com/slashsBin/styleguide-git-commit-message#suggested-emojis)表情符号[列表](https://github.com/slashsBin/styleguide-git-commit-message#suggested-emojis)）
  - 或文字：
    - feat：用户的新功能（或 ![闪闪发光](https://github.githubassets.com/images/icons/emoji/unicode/2728.png) 表情符号）
    - fix：针对用户的错误修复（或 ![救护车](https://github.githubassets.com/images/icons/emoji/unicode/1f691.png) 表情符号）
    - docs：对文档的更改（或 ![图书](https://github.githubassets.com/images/icons/emoji/unicode/1f4da.png) 表情符号）
    - style：格式化，缺少半冒号等；生产代码无变化（或![艺术](https://github.githubassets.com/images/icons/emoji/unicode/1f3a8.png) 表情符号）
    - refactor：重构生产代码，例如。重命名变量（或![拖拉机](https://github.githubassets.com/images/icons/emoji/unicode/1f69c.png) 表情符号）
    - test：添加缺失的测试，重构测试；生产代码无变化（或![显微镜](https://github.githubassets.com/images/icons/emoji/unicode/1f52c.png) 表情符号）
    - chore：更新艰苦的任务等；生产代码不变
- 如果您需要使用多个关键字或表情符号，则应该三思而后行。通常，这意味着您需要将此提交分解为更小的提交。如果不是这种情况，请用空格分隔每个表情符号。
- 使用<scope>以确定哪些组件此<type>有关; <scope>值示例：
  - init
  - runner
  - watcher
  - config
  - web-server
  - proxy
  - etc.
- `<scope>`也可以是空的（例如，如果变化是全球或难以分配到单个部件），在这种情况下，省略了括号。

### 邮件正文

- 包括改变的**动机**，并与以前的行为形成对比。
- 用身体去解释**什么**和**个为什么**与*怎么样了*。
- 将正文的每一行换成**72个**字符。

### 邮件页脚

- 此提交的参考问题与该问题的状态有关；例如 `Issue #27`，`Ref T27`或`Ref T27, T56`或`Fixes T8`。
- 支持的问题跟踪器状态关键字：
  - Fixes
  - Fixed
  - Closes
  - Closed
  - Resolves
  - Resolved
  - Ref
  - Issue
  - Issues
- 有关问题跟踪器状态关键字的更多信息：
  - [GitHub问题](https://help.github.com/articles/closing-issues-using-keywords/)
  - [GitLab问题](https://docs.gitlab.com/ee/user/project/issues/automatic_issue_closing.html)
  - [ab药者任务](https://secure.phabricator.com/book/phabricator/article/diffusion_autoclose/)
- 还[建议](https://github.com/slashsbin/styleguide-git-commit-message/issues/19)对*Issues*使用*完整的URL*，而不仅仅是问题ID号。这样做将减轻来自终端的浏览问题。
- 如果有多个问题，请用逗号将它们分开，例如。`Closes #27, #56`。

### 笔记

- 在中使用有效的[MarkDown](https://daringfireball.net/projects/markdown/basics)格式`<body>`。
- 所有**WIP**（进行中的工作）提交**都应**具有![施工](https://github.githubassets.com/images/icons/emoji/unicode/1f6a7.png) 表情符号
- **应该**避免所有**WIP**提交！
- 使用特殊关键字（例如`Fixes`或）引用问题，`Resolves`将其自动标记为已关闭！有关使用缩排词自动关闭问题的更多信息，请参见其文档（以上链接）。
- 有**否**之后的新线`<footer>`。
- 每个表情文字（`:emoji:`）均视为一个字符！
- 有关注释标签的更多信息，请参见[ToDo语法StyleGuide](https://github.com/slashsbin/styleguide-todo-grammar)`@XXX`。



# 增
:tada:
`:tada:`
开始一个项目。

:sparkles:
`:sparkles:`
引入新功能。

:memo:
`:memo:`
添加或更新文档。
# 改

:bug:
`:bug:`
修正错误。

:poop:
`:poop:`
编写需要改进的错误代码。

:art:
`:art:`
改善代码的结构/格式。

:zap:
`:zap:`
提高性能。

:wrench:
`:wrench:`
添加或更新配置文件。

:card_file_box:
`:card_file_box:`
执行与数据库相关的更改。

:ambulance:
`:ambulance:`
关键修补程序。

:children_crossing:
`:children_crossing:`
改善用户体验/可用性。

:dizzy:
`:dizzy:`
添加或更新动画和过渡。

:iphone:
`:iphone:`
进行响应式设计。

:alien:
`:alien:`
由于外部API的更改而更新了代码。

:truck:
`:truck:`
移动或重命名资源（例如：文件，路径，路由）。

:mag:
`:mag:`
改善SEO。

:pencil2:
`:pencil2:`
修正错别字。

:rewind:
`:rewind:`
还原更改。

:wheelchair:
`:wheelchair:`
改善可访问性。

# 删

:fire:
`:fire:`
删除代码或文件。

# 查

:lipstick:
`:lipstick:`
添加或更新UI和样式文件。

:white_check_mark:
`:white_check_mark:`
添加或更新测试。

:bulb:
`:bulb:`
在源代码中添加或更新注释。

# 版本
:heavy_plus_sign:
`:heavy_plus_sign:`
添加依赖项。

:heavy_minus_sign:
`:heavy_minus_sign:`
删除依赖项。

:arrow_up:
`:arrow_up:`
升级依赖项。

:arrow_down:
`:arrow_down:`
降级依赖性。

:rocket:
`:rocket:`
部署东西。

:twisted_rightwards_arrows:
`:twisted_rightwards_arrows:`
合并分支。

:bookmark:
`:bookmark:`
发布/版本标签。

:recycle:
`:recycle:`
重构代码。

:boom:
`:boom:`
介绍重大更改。

# 不常用
:lock:
`:lock:`
解决安全问题。

:rotating_light:
`:rotating_light:`
修复编译器/ linter警告。

:construction:
`:construction:`
工作正在进行中。

:green_heart:
`:green_heart:`
修复CI构建。

:pushpin:
`:pushpin:`
引脚依赖于特定版本。

:construction_worker:
`:construction_worker:`
添加或更新CI构建系统。

:chart_with_upwards_trend:
`:chart_with_upwards_trend:`
添加或更新分析或跟踪代码。

:hammer:
`:hammer:`
添加或更新开发脚本。

:globe_with_meridians:
`:globe_with_meridians:`
国际化和本地化。

:package:
`:package:`
添加或更新编译的文件或包。

:page_facing_up:
`:page_facing_up:`
添加或更新许可证。

:bento:
`:bento:`
添加或更新资产。

:beers:
`:beers:`
酒后写代码。

:speech_balloon:
`:speech_balloon:`
添加或更新文本和文字。

:loud_sound:
`:loud_sound:`
添加或更新日志。

:mute:
`:mute:`
删除日志。

:busts_in_silhouette:
`:busts_in_silhouette:`
添加或更新贡献者。

:building_construction:
`:building_construction:`
进行体系结构更改。


:clown_face:
`:clown_face:`
模拟的东西。

:egg:
`:egg:`
添加或更新复活节彩蛋。

:see_no_evil:
`:see_no_evil:`
添加或更新.gitignore文件。

:camera_flash:
`:camera_flash:`
添加或更新快照。

:alembic:
`:alembic:`
进行实验。

:label:
:`label:`
添加或更新类型。

:seedling:
`:seedling:`
添加或更新种子文件。

:triangular_flag_on_post:
`:triangular_flag_on_post:`
添加，更新或删除功能标志。

:goal_net:
`:goal_net:`
捕获错误。

:wastebasket:
`:wastebasket:`
弃用需要清除的代码。

:passport_control:
`:passport_control:`
处理与授权，角色和权限相关的代码。


| 表情符号                                                     | 原始表情符号代码         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------ | ------------------------------------------------------------ |
| ![艺术](https://github.githubassets.com/images/icons/emoji/unicode/1f3a8.png) | `:art:`                  | 在改进代码的**格式**/结构时                                  |
| ![报纸](https://github.githubassets.com/images/icons/emoji/unicode/1f4f0.png) | `:newspaper:`            | 创建**新文件时**                                             |
| ![备忘录](https://github.githubassets.com/images/icons/emoji/unicode/1f4dd.png) | `:pencil:`               | 当**执行小的变化/固定**的代码或语言                          |
| ![赛马](https://github.githubassets.com/images/icons/emoji/unicode/1f40e.png) | `:racehorse:`            | 在提高**性能时**                                             |
| ![图书](https://github.githubassets.com/images/icons/emoji/unicode/1f4da.png) | `:books:`                | 在编写**文档时**                                             |
| ![虫子](https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png) | `:bug:`                  | 报告**错误时**，带有[`@FIXME`](https://github.com/slashsbin/styleguide-todo-grammar#bug-report)注释标签 |
| ![救护车](https://github.githubassets.com/images/icons/emoji/unicode/1f691.png) | `:ambulance:`            | 修复**错误时**                                               |
| ![企鹅](https://github.githubassets.com/images/icons/emoji/unicode/1f427.png) | `:penguin:`              | 在**Linux**上修复某些东西时                                  |
| ![苹果](https://github.githubassets.com/images/icons/emoji/unicode/1f34e.png) | `:apple:`                | 在**Mac OS**上修复某些东西时                                 |
| ![checkered_flag](https://github.githubassets.com/images/icons/emoji/unicode/1f3c1.png) | `:checkered_flag:`       | 在**Windows**上修复某些问题时                                |
| ![火](https://github.githubassets.com/images/icons/emoji/unicode/1f525.png) | `:fire:`                 | 当**删除代码**或文件，*可能*与`@CHANGED`注释标记             |
| ![拖拉机](https://github.githubassets.com/images/icons/emoji/unicode/1f69c.png) | `:tractor:`              | 当**改变文件结构**。通常与![艺术](https://github.githubassets.com/images/icons/emoji/unicode/1f3a8.png) |
| ![锤子](https://github.githubassets.com/images/icons/emoji/unicode/1f528.png) | `:hammer:`               | 当**重构**代码                                               |
| ![雨伞](https://github.githubassets.com/images/icons/emoji/unicode/2614.png) | `:umbrella:`             | 添加**测试时**                                               |
| ![显微镜](https://github.githubassets.com/images/icons/emoji/unicode/1f52c.png) | `:microscope:`           | 添加**代码覆盖率时**                                         |
| ![green_heart](https://github.githubassets.com/images/icons/emoji/unicode/1f49a.png) | `:green_heart:`          | 修复**CI**构建时                                             |
| ![锁](https://github.githubassets.com/images/icons/emoji/unicode/1f512.png) | `:lock:`                 | 在处理**安全性时**                                           |
| ![arrow_up](https://github.githubassets.com/images/icons/emoji/unicode/2b06.png) | `:arrow_up:`             | 升级**依赖项时**                                             |
| ![arrow_down](https://github.githubassets.com/images/icons/emoji/unicode/2b07.png) | `:arrow_down:`           | 降级**依赖项时**                                             |
| ![快进](https://github.githubassets.com/images/icons/emoji/unicode/23e9.png) | `:fast_forward:`         | 从旧版本/分支**转发功能**时                                  |
| ![倒带](https://github.githubassets.com/images/icons/emoji/unicode/23ea.png) | `:rewind:`               | 从较新版本/分支**向后移植功能**时                            |
| ![衬衫](https://github.githubassets.com/images/icons/emoji/unicode/1f455.png) | `:shirt:`                | 删除**短绒**/严格/弃用警告时                                 |
| ![口红](https://github.githubassets.com/images/icons/emoji/unicode/1f484.png) | `:lipstick:`             | 改善**UI** /化妆品时                                         |
| ![轮椅](https://github.githubassets.com/images/icons/emoji/unicode/267f.png) | `:wheelchair:`           | 在改善**可及性时**                                           |
| ![globe_with_meridians](https://github.githubassets.com/images/icons/emoji/unicode/1f310.png) | `:globe_with_meridians:` | 在应对**全球化**/ internationalization / i18n / g11n时       |
| ![施工](https://github.githubassets.com/images/icons/emoji/unicode/1f6a7.png) | `:construction:`         | **WIP**（进行中的工作）提交，*可能*带有`@REVIEW`注释标签     |
| ![宝石](https://github.githubassets.com/images/icons/emoji/unicode/1f48e.png) | `:gem:`                  | 新品**发布**                                                 |
| ![蛋](https://github.githubassets.com/images/icons/emoji/unicode/1f95a.png) | `:egg:`                  | 新**发布**的Python egg                                       |
| ![摩天轮](https://github.githubassets.com/images/icons/emoji/unicode/1f3a1.png) | `:ferris_wheel:`         | 新**发布**的Python轮包                                       |
| ![书签](https://github.githubassets.com/images/icons/emoji/unicode/1f516.png) | `:bookmark:`             | 版本**标签**                                                 |
| ![多田](https://github.githubassets.com/images/icons/emoji/unicode/1f389.png) | `:tada:`                 | **初次**提交                                                 |
| ![扬声器](https://github.githubassets.com/images/icons/emoji/unicode/1f508.png) | `:speaker:`              | 添加**日志记录时**                                           |
| ![静音](https://github.githubassets.com/images/icons/emoji/unicode/1f507.png) | `:mute:`                 | 减少**日志记录时**                                           |
| ![闪闪发光](https://github.githubassets.com/images/icons/emoji/unicode/2728.png) | `:sparkles:`             | 引入**新**功能时                                             |
| ![扎普](https://github.githubassets.com/images/icons/emoji/unicode/26a1.png) | `:zap:`                  | 引入**向后不兼容**功能时，*可能*带有`@CHANGED`注释标签       |
| ![灯泡](https://github.githubassets.com/images/icons/emoji/unicode/1f4a1.png) | `:bulb:`                 | 新**想法**，带有`@IDEA`注释标签                              |
| ![雪花](https://github.githubassets.com/images/icons/emoji/unicode/2744.png) | `:snowflake:`            | 更改**配置**，通常与![企鹅](https://github.githubassets.com/images/icons/emoji/unicode/1f427.png) 要么 ![色带](https://github.githubassets.com/images/icons/emoji/unicode/1f380.png) 要么 ![火箭](https://github.githubassets.com/images/icons/emoji/unicode/1f680.png) |
| ![色带](https://github.githubassets.com/images/icons/emoji/unicode/1f380.png) | `:ribbon:`               | 客户要求的应用程序**定制**，带有`@HACK`注释标签              |
| ![火箭](https://github.githubassets.com/images/icons/emoji/unicode/1f680.png) | `:rocket:`               | 与Deployment / **DevOps**相关的任何内容                      |
| ![象](https://github.githubassets.com/images/icons/emoji/unicode/1f418.png) | `:elephant:`             | 特定于**PostgreSQL**数据库（迁移，脚本，扩展等）             |
| ![海豚](https://github.githubassets.com/images/icons/emoji/unicode/1f42c.png) | `:dolphin:`              | 特定于**MySQL**数据库（迁移，脚本，扩展等）                  |
| ![树叶](https://github.githubassets.com/images/icons/emoji/unicode/1f343.png) | `:leaves:`               | **MongoDB**数据库特定的（迁移，脚本，扩展等）                |
| ![银行](https://github.githubassets.com/images/icons/emoji/unicode/1f3e6.png) | `:bank:`                 | 特定于**通用数据库**（迁移，脚本，扩展等）                   |
| ![鲸](https://github.githubassets.com/images/icons/emoji/unicode/1f433.png) | `:whale:`                | **Docker**配置                                               |
| ![握手](https://github.githubassets.com/images/icons/emoji/unicode/1f91d.png) | `:handshake:`            | 当**合并文件**                                               |
| ![樱桃](https://github.githubassets.com/images/icons/emoji/unicode/1f352.png) | `:cherries:`             | 从一个或多个[**Cherry-Pick**](https://git-scm.com/docs/git-cherry-pick)提交中提交时 |