# hermes-skills-plugin

A Claude Code plugin marketplace providing 74 individually installable skills from [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — research, ML ops, creative tools, software development, and more.

## Installation

Add the marketplace:

```
/plugin marketplace add IntegralMedia01/hermes-skills-plugin
```

Then install individual skills:

```
/plugin install hermes-arxiv@hermes-skills-plugin
/plugin install hermes-spotify@hermes-skills-plugin
```

Browse all available skills with `/plugin` and look under the `hermes-skills-plugin` marketplace.

## Available Skills (74)

| Skill | Description |
|-------|-------------|
| `hermes-apple-notes` | Manage Apple Notes via the memo CLI on macOS |
| `hermes-apple-reminders` | Manage Apple Reminders via remindctl CLI |
| `hermes-arxiv` | Search and retrieve academic papers from arXiv |
| `hermes-ascii-art` | Generate ASCII art using pyfiglet, cowsay, boxes, and more |
| `hermes-ascii-video` | Production pipeline for ASCII art video |
| `hermes-audiocraft-audio-generation` | Text-to-music and text-to-sound with MusicGen/AudioGen |
| `hermes-axolotl` | Fine-tune LLMs with Axolotl |
| `hermes-blogwatcher` | Monitor blogs and RSS/Atom feeds |
| `hermes-claude-code` | Delegate coding tasks to Claude Code CLI |
| `hermes-clip` | Zero-shot image classification with CLIP |
| `hermes-codebase-inspection` | LOC counting and language breakdown with pygount |
| `hermes-codex` | Delegate coding tasks to OpenAI Codex CLI |
| `hermes-dogfood` | Exploratory QA testing of web applications |
| `hermes-dspy` | Build AI systems with DSPy |
| `hermes-evaluating-llms-harness` | Evaluate LLMs across 60+ benchmarks |
| `hermes-excalidraw` | Create hand-drawn style diagrams |
| `hermes-find-nearby` | Find nearby places using OpenStreetMap |
| `hermes-findmy` | Track Apple devices and AirTags |
| `hermes-fine-tuning-with-trl` | Fine-tune LLMs with TRL and RLHF |
| `hermes-gguf-quantization` | GGUF format and llama.cpp quantization |
| `hermes-gif-search` | Search and download GIFs from Tenor |
| `hermes-github-auth` | Set up GitHub authentication |
| `hermes-github-code-review` | Review code changes and leave PR comments |
| `hermes-github-issues` | Create and manage GitHub issues |
| `hermes-github-pr-workflow` | Full pull request lifecycle |
| `hermes-github-repo-management` | Clone, create, fork, and manage repos |
| `hermes-google-workspace` | Gmail, Calendar, Drive, Sheets, Docs integration |
| `hermes-grpo-rl-training` | GRPO/RL fine-tuning with TRL |
| `hermes-guidance` | Constrained generation with Microsoft Guidance |
| `hermes-heartmula` | Open-source music generation (Suno-like) |
| `hermes-hermes-agent` | Guide to using and extending Hermes Agent |
| `hermes-himalaya` | CLI email management via IMAP/SMTP |
| `hermes-huggingface-hub` | Hugging Face Hub CLI operations |
| `hermes-imessage` | Send and receive iMessages/SMS on macOS |
| `hermes-jupyter-live-kernel` | Run Jupyter kernels interactively |
| `hermes-linear` | Manage Linear issues and projects |
| `hermes-llama-cpp` | LLM inference on CPU and Apple Silicon |
| `hermes-manim-video` | 3Blue1Brown-style math animations |
| `hermes-mcporter` | MCP server management CLI |
| `hermes-minecraft-modpack-server` | Set up modded Minecraft servers |
| `hermes-modal-serverless-gpu` | Serverless GPU cloud for ML |
| `hermes-nano-pdf` | Edit PDFs with natural language |
| `hermes-native-mcp` | Built-in MCP client for Hermes Agent |
| `hermes-notion` | Notion API for pages, databases, blocks |
| `hermes-obliteratus` | Remove refusal behaviors from open-weight LLMs |
| `hermes-obsidian` | Read, search, create Obsidian notes |
| `hermes-ocr-and-documents` | Extract text from PDFs and scanned documents |
| `hermes-opencode` | Delegate coding tasks to OpenCode CLI |
| `hermes-openhue` | Control Philips Hue lights |
| `hermes-outlines` | Structured generation with dottxt Outlines |
| `hermes-peft-fine-tuning` | LoRA/QLoRA fine-tuning with PEFT |
| `hermes-plan` | AI-native planning for complex projects |
| `hermes-pokemon-player` | Play Pokemon in your terminal |
| `hermes-polymarket` | Prediction markets via Polymarket API |
| `hermes-popular-web-designs` | Recreate popular website designs as HTML |
| `hermes-powerpoint` | Create and edit PowerPoint presentations |
| `hermes-product-hunt` | Browse Product Hunt launches |
| `hermes-python-packaging` | Build and publish Python packages |
| `hermes-rag` | Retrieval-Augmented Generation with vector DBs |
| `hermes-reddit` | Browse Reddit and search posts |
| `hermes-research-paper-writing` | Write academic research papers |
| `hermes-runway` | Generate videos with Runway ML |
| `hermes-screenpipe` | Record and search screen/audio history |
| `hermes-semantic-scholar` | Search academic papers and citations |
| `hermes-smart-home-control` | Control smart home via Home Assistant |
| `hermes-spotify` | Control Spotify playback |
| `hermes-stable-diffusion` | Generate images with Stable Diffusion |
| `hermes-steam` | Browse Steam games and player data |
| `hermes-svelte` | Build reactive web UIs with Svelte |
| `hermes-test-driven-development` | RED-GREEN-REFACTOR cycle |
| `hermes-twitter-x` | Interact with Twitter/X |
| `hermes-vllm` | Deploy LLMs with vLLM |
| `hermes-webhook-subscriptions` | Webhook event-driven automation |
| `hermes-weights-and-biases` | Track LLM apps with W&B Weave |
| `hermes-whisper` | Transcribe audio with Whisper |
| `hermes-wikipedia` | Search and retrieve Wikipedia articles |
| `hermes-windows-automation` | Automate Windows with PowerShell |
| `hermes-wordpress` | Manage WordPress sites via REST API |
| `hermes-xcode` | iOS/macOS development with Xcode |
| `hermes-youtube` | Download YouTube videos with yt-dlp |
| `hermes-zoho-crm` | Manage Zoho CRM records |
| `hermes-zotero` | Manage research library with Zotero |

## Updating from Upstream

When NousResearch/hermes-agent ships new skills:

```bash
git subtree pull --prefix=upstream https://github.com/NousResearch/hermes-agent.git main --squash
node build.js
git add plugins/ .claude-plugin/marketplace.json README.md
git commit -m "Sync upstream: rebuild plugins from hermes-agent"
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
