## PlosClan Source

这个仓库现在是一个 Astro 静态站点，保留了原网站的视觉样式、路由和交互，同时移除了 Svelte 运行时。

### 项目结构

- `src/pages/`：Astro 文件路由页面
- `src/layouts/`：公共页面壳层
- `src/components/`：导航、评论等可复用组件
- `src/content/`：Astro content collections，承载页面数据

### 如何开始

先安装依赖：

```bash
bun install
```

然后启动开发服务器：

```bash
bun run dev
```

常用检查命令：

```bash
bun run check
bun run build
```
