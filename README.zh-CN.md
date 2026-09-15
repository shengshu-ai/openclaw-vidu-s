# openclaw-vidu-s

使用 **Vidu S** 创建实时互动数字人，或实时编辑视频流。

[English](README.md) | 中文

## 认识 Vidu S

**Vidu S** 面向企业应用提供两项核心实时视频能力：**Avatar** 与 **Editing**。

### Vidu S Avatar

只需一张图片，即可创建实时互动数字人。Vidu S Avatar 支持语音、文字和视频交互，并可自定义人设、音色与动作，接入记忆、知识库和会话录制等能力。

### Vidu S Editing

在视频流推送过程中实时完成画面编辑。Vidu S Editing 支持风格渲染、角色替换、背景替换和虚拟换衣，并可在不中断视频流的情况下切换参考图或编辑模式。

## 核心能力

### Avatar

- **自然互动**：支持实时对话、用户打断，以及音视频或纯语音交互。
- **个性化角色**：支持真人、二次元、萌宠等形象，可配置人设、克隆音色和表现动作。
- **上下文理解**：可接入平台内置或外部记忆与知识服务，实现个性化、专业化回答。

### Editing

- **四种编辑模式**：支持风格渲染、角色替换、背景替换和虚拟换衣。
- **实时流式处理**：持续接收原始视频流，并实时输出编辑后的视频流。
- **直播中切换**：可在会话过程中更换参考图或编辑模式，无需停止视频流。

## 落地场景

**Avatar：** AI 陪伴 · 虚拟偶像 · 培训讲解 · AI 客服 · 电商直播 · 游戏角色

**Editing：** 风格化直播 · 虚拟制作 · 角色变换 · 虚拟换衣 · 背景替换

## 这个插件做什么

这是一个 OpenClaw **工具插件**，让你的 claw 可以使用 Vidu S Avatar 与 Editing。描述你想要的数字人或实时视频编辑效果，插件会调用对应的 Vidu S 能力生成所需体验。

## 安装

```bash
openclaw plugins install clawhub:openclaw-vidu-s
```

## API 集成

### Avatar

- [Vidu S Avatar 整体介绍](https://platform.vidu.cn/vidu-stream/doc/s2-avatar/realtime/introduction)
- [Vidu S Avatar 详细参数](https://platform.vidu.cn/vidu-stream/doc/s2-avatar/realtime/parameters)

### Editing

- [Vidu S Editing 整体介绍](https://platform.vidu.cn/vidu-stream/doc/s2-editing/introduction)
- [Vidu S Editing 详细参数](https://platform.vidu.cn/vidu-stream/doc/s2-editing/parameters)
