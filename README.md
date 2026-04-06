# hermes-skills-plugin

A Claude Code plugin providing 74 skills from [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — research, ML ops, creative tools, software development, and more.

## Installation

```bash
claude plugin add IntegralMedia01/hermes-skills-plugin
```

## Skills

| Skill | Description |
|-------|-------------|
| `hermes-apple-notes` | Manage Apple Notes via the memo CLI on macOS (create, view, search, edit). |
| `hermes-apple-reminders` | Manage Apple Reminders via remindctl CLI (list, add, complete, delete). |
| `hermes-arxiv` | Search and retrieve academic papers from arXiv using their free REST API. |
| `hermes-ascii-art` | Generate ASCII art using pyfiglet (571 fonts), cowsay, boxes, toilet, image-to-ascii. |
| `hermes-ascii-video` | Production pipeline for ASCII art video — any format. Converts video/audio/image/GIF. |
| `hermes-audiocraft-audio-generation` | PyTorch library for audio generation including text-to-music (MusicGen) and text-to-audio. |
| `hermes-axolotl` | Expert guidance for fine-tuning LLMs with Axolotl - YAML configs, 100+ models, LoRA/QLoRA. |
| `hermes-blogwatcher` | Monitor blogs and RSS/Atom feeds for updates using the blogwatcher CLI. |
| `hermes-claude-code` | Delegate coding tasks to Claude Code (Anthropic's CLI agent). |
| `hermes-clip` | OpenAI's model connecting vision and language. Zero-shot image classification. |
| `hermes-codebase-inspection` | Inspect and analyze codebases using pygount for LOC counting, language breakdown. |
| `hermes-codex` | Delegate coding tasks to OpenAI Codex CLI agent. |
| `hermes-dogfood` | Systematic exploratory QA testing of web applications — find bugs, capture evidence. |
| `hermes-dspy` | Build complex AI systems with declarative programming, optimize prompts automatically. |
| `hermes-evaluating-llms-harness` | Evaluates LLMs across 60+ academic benchmarks (MMLU, HumanEval, GSM8K, TruthfulQA). |
| `hermes-excalidraw` | Create hand-drawn style diagrams using Excalidraw JSON format. |
| `hermes-find-nearby` | Find nearby places using OpenStreetMap Nominatim + Overpass API (no API key). |
| `hermes-findmy` | Track Apple devices and AirTags via FindMy.app on macOS using AppleScript. |
| `hermes-fine-tuning-with-trl` | Fine-tune LLMs using reinforcement learning with TRL - SFT, DPO, PPO. |
| `hermes-gguf-quantization` | GGUF format and llama.cpp quantization for efficient CPU/GPU inference. |
| `hermes-github-actions` | Build, debug, and optimize GitHub Actions CI/CD workflows. |
| `hermes-github-issues` | Manage GitHub issues via the gh CLI. |
| `hermes-github-prs` | Manage GitHub pull requests via the gh CLI. |
| `hermes-github-releases` | Manage GitHub releases and tags via the gh CLI. |
| `hermes-hackernews` | Search and browse Hacker News via the Algolia HN Search API. |
| `hermes-image-generation` | Generate images using ComfyUI with local or remote Stable Diffusion models. |
| `hermes-inference-sh` | Deploy LLMs in seconds with inference.sh. Supports Llama, Mistral, Gemma. |
| `hermes-instagram-reels` | Download Instagram Reels and posts using gallery-dl. |
| `hermes-kindle-clippings` | Parse and analyze Kindle clippings using kindle-clippings CLI. |
| `hermes-lobechat` | Deploy and manage LobeChat — open-source ChatGPT UI with plugin support. |
| `hermes-lm-studio` | Run and manage local LLMs via LM Studio's REST API. |
| `hermes-lmarena` | Analyze LLM benchmark data from LMSYS Chatbot Arena leaderboard. |
| `hermes-macos-automation` | Automate macOS workflows using AppleScript, shortcuts, and system commands. |
| `hermes-mastodon` | Interact with Mastodon instances via the Mastodon.py API. |
| `hermes-mcp-server-development` | Build MCP servers for Claude integrations. |
| `hermes-mlflow` | Track experiments, log models, and manage ML lifecycle with MLflow. |
| `hermes-model-file` | Create and manage Ollama Modelfiles for custom LLM configurations. |
| `hermes-obsidian` | Manage Obsidian vaults — create, search, link notes using the REST API. |
| `hermes-ocr-and-documents` | Extract text from images and PDFs using OCR tools (tesseract, surya). |
| `hermes-ollama` | Run and manage local LLMs via the Ollama API. |
| `hermes-open-interpreter` | Execute Python, bash, and JavaScript locally using Open Interpreter. |
| `hermes-openrouter` | Access 200+ LLMs via OpenRouter's unified API. |
| `hermes-openvino` | Optimize deep learning models with Intel OpenVINO for fast CPU/iGPU inference. |
| `hermes-pdf-generation` | Generate PDFs from HTML/Markdown using WeasyPrint or Puppeteer. |
| `hermes-perplexity` | Search the web using Perplexity AI's API for up-to-date information. |
| `hermes-popular-web-designs` | Recreate popular website designs as single-file HTML with pixel-perfect accuracy. |
| `hermes-powerpoint` | Create and edit PowerPoint presentations using python-pptx. |
| `hermes-product-hunt` | Browse and search Product Hunt launches via their API. |
| `hermes-python-packaging` | Build, publish, and manage Python packages with modern tooling (uv, hatch, flit). |
| `hermes-rag` | Implement Retrieval-Augmented Generation with vector databases and LLMs. |
| `hermes-reddit` | Browse Reddit and search posts/comments using the PRAW API. |
| `hermes-research-paper-writing` | Write academic research papers following IEEE/ACM formatting standards. |
| `hermes-runway` | Generate videos with Runway ML's Gen-3 API. |
| `hermes-screenpipe` | Record and search screen/audio history using ScreenPipe. |
| `hermes-semantic-scholar` | Search academic papers and citations using the Semantic Scholar API. |
| `hermes-smart-home-control` | Control smart home devices via Home Assistant REST API. |
| `hermes-spotify` | Control Spotify playback and search music via the Web API. |
| `hermes-stable-diffusion` | Generate images with Stable Diffusion via Automatic1111 or ComfyUI APIs. |
| `hermes-steam` | Browse Steam games and player data via the Steam Web API. |
| `hermes-svelte` | Build reactive web UIs with Svelte and SvelteKit. |
| `hermes-test-driven-development` | Enforces RED-GREEN-REFACTOR cycle with test-first approach. |
| `hermes-twitter-x` | Interact with Twitter/X using Tweepy or the v2 API. |
| `hermes-vllm` | Deploy and serve LLMs with high throughput using vLLM. |
| `hermes-webhook-subscriptions` | Create and manage webhook subscriptions for event-driven automation. |
| `hermes-weave` | Track and evaluate LLM applications with Weights & Biases Weave. |
| `hermes-whisper` | Transcribe audio and video using OpenAI Whisper locally or via API. |
| `hermes-wikipedia` | Search and retrieve Wikipedia articles via the MediaWiki API. |
| `hermes-windows-automation` | Automate Windows using PowerShell, pywinauto, and Win32 API. |
| `hermes-wordpress` | Manage WordPress sites via the REST API — posts, media, users, plugins. |
| `hermes-xcode` | Develop iOS/macOS apps with Xcode — build, test, archive, deploy. |
| `hermes-youtube` | Download YouTube videos and audio using yt-dlp. |
| `hermes-zoho-crm` | Manage Zoho CRM records — contacts, leads, deals via the v2 API. |
| `hermes-zotero` | Manage research library and citations with the Zotero API. |

## Updating from Upstream

When NousResearch/hermes-agent ships new skills:

```bash
git subtree pull --prefix=upstream https://github.com/NousResearch/hermes-agent.git main --squash
node build.js
git add skills/ skills-index.json
git commit -m "Sync upstream: rebuild skills from hermes-agent"
git push
```

The `upstream/` directory is never modified — merges are always clean.

## Excluded Skills

| Skill | Reason |
|-------|--------|
| `godmode` | Jailbreak/safety-bypass tooling — inappropriate for a public plugin |
| `index-cache/` | Not a skill — cached JSON indexes from other marketplaces |

## Credits

Skills are sourced from [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) and converted for Claude Code compatibility. Original skills are MIT licensed.

## License

MIT
