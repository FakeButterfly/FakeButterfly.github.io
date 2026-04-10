# FakeButterfly Blog

一个基于 Astro 的个人技术博客，用来记录 AI Agent、Go 工程化、项目重构与学习过程。

## 运行方式

这个仓库自带一份隔离的 Node 运行时，放在 `tools/` 目录下，不会影响你当前工作的全局 Node 版本。

### Windows PowerShell

```powershell
cd C:\Users\35980\projects\FakeButterfly.github.io
.\install.ps1
.\dev.ps1
```

本地开发地址默认是 [http://localhost:3000](http://localhost:3000)。

### 构建静态站点

```powershell
cd C:\Users\35980\projects\FakeButterfly.github.io
.\build.ps1
```

构建产物会输出到 `dist/`。

## 部署方式

仓库已经带好 GitHub Pages 工作流：

- 仓库建议名：`FakeButterfly.github.io`
- GitHub Pages Source：`GitHub Actions`
- 线上地址：`https://fakebutterfly.github.io`

## 内容结构

- `src/content/post/`：博客文章
- `src/content/project/`：项目介绍
- `src/pages/`：站点页面
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署

## 当前首发内容

- 第一篇博客：《从 0 到 1 搭建 GopherAI 的认证与启动层》
- 项目页：《GopherAI》