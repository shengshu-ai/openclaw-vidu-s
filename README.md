# openclaw-vidu-s

Create real-time digital humans and transform live video with **Vidu S**.

English | [Chinese](README.zh-CN.md)

## Meet Vidu S

**Vidu S** provides two core real-time video capabilities for enterprise applications: **Avatar** and **Editing**.

### Vidu S Avatar

Create a real-time interactive digital human from a single image. Vidu S Avatar supports voice, text, and video interaction, along with customizable personas, voices, motions, memory, knowledge, and session recording.

### Vidu S Editing

Transform a live video stream as it is being published. Vidu S Editing supports style rendering, character replacement, background replacement, and virtual try-on, and can switch reference images or editing modes without interrupting the stream.

## Core Capabilities

### Avatar

- **Natural interaction**: Supports real-time conversation, user interruption, and audio-video or audio-only interaction.
- **Custom characters**: Supports real people, anime characters, mascots, custom personas, voice cloning, and expressive motions.
- **Context-aware responses**: Connects to built-in or external memory and knowledge services for personalized, domain-specific conversations.

### Editing

- **Four editing modes**: Style rendering, character replacement, background replacement, and virtual try-on.
- **Continuous streaming**: Receives a source video stream and outputs the edited result in real time.
- **Live switching**: Changes the reference image or editing mode during a session without stopping the stream.

## Use Cases

**Avatar:** AI companionship · Virtual idols · Training and explainers · AI customer service · E-commerce livestreaming · Game characters

**Editing:** Stylized livestreams · Virtual production · Character transformation · Virtual try-on · Background replacement

## What This Plugin Does

This OpenClaw **tool plugin** gives your claw access to Vidu S Avatar and Editing. Describe the digital human or live-video transformation you want, and the plugin creates the requested experience with the appropriate Vidu S capability.

## Install

```bash
openclaw plugins install clawhub:openclaw-vidu-s
```

## API Integration

### Avatar

- [Vidu S Avatar Overview](https://platform.vidu.cn/vidu-stream/doc/s2-avatar/realtime/introduction)
- [Vidu S Avatar API Reference](https://platform.vidu.cn/vidu-stream/doc/s2-avatar/realtime/parameters)

### Editing

- [Vidu S Editing Overview](https://platform.vidu.cn/vidu-stream/doc/s2-editing/introduction)
- [Vidu S Editing API Reference](https://platform.vidu.cn/vidu-stream/doc/s2-editing/parameters)
