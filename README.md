# hermes-skills-plugin

A Claude Code plugin providing 74 skills from [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — research, ML ops, creative tools, software development, and more.

## Installation

Add the marketplace and install the plugin:

```
/plugin marketplace add IntegralMedia01/hermes-skills-plugin
/plugin install hermes-skills@hermes-skills-plugin
```

## Skills (74 Total)

| Skill | Description |
|-------|-------------|
| `hermes-apple-notes` | Manage Apple Notes via the memo CLI on macOS (create, view, search, edit). |
| `hermes-apple-reminders` | Manage Apple Reminders via remindctl CLI (list, add, complete, delete). |
| `hermes-arxiv` | Search and retrieve academic papers from arXiv using their free REST API. No API key needed. Search by keyword, author, category, or ID. Combine with web_extract or the ocr-and-documents skill to read full paper content. |
| `hermes-ascii-art` | Generate ASCII art using pyfiglet (571 fonts), cowsay, boxes, toilet, image-to-ascii, remote APIs (asciified, ascii.co.uk), and LLM fallback. No API keys required. |
| `hermes-ascii-video` | Production pipeline for ASCII art video — any format. Converts video/audio/images/generative input into colored ASCII character video output (MP4, GIF, image sequence). Covers: video-to-ASCII conversion, audio-reactive music visualizers, generative ASCII art animations, hybrid video+audio reactive, text/lyrics overlays, real-time terminal rendering. Use when users request: ASCII video, text art video, terminal-style video, character art animation, retro text visualization, audio visualizer in ASCII, converting video to ASCII art, matrix-style effects, or any animated ASCII output. |
| `hermes-audiocraft-audio-generation` | PyTorch library for audio generation including text-to-music (MusicGen) and text-to-sound (AudioGen). Use when you need to generate music from text descriptions, create sound effects, or perform melody-conditioned music generation. |
| `hermes-axolotl` | Expert guidance for fine-tuning LLMs with Axolotl - YAML configs, 100+ models, LoRA/QLoRA, DPO/KTO/ORPO/GRPO, multimodal support |
| `hermes-blogwatcher` | Monitor blogs and RSS/Atom feeds for updates using the blogwatcher CLI. Add blogs, scan for new articles, and track what you've read. |
| `hermes-claude-code` | Delegate coding tasks to Claude Code (Anthropic's CLI agent). Use for building features, refactoring, PR reviews, and iterative coding. Requires the claude CLI installed. |
| `hermes-clip` | OpenAI's model connecting vision and language. Enables zero-shot image classification, image-text matching, and cross-modal retrieval. Trained on 400M image-text pairs. Use for image search, content moderation, or vision-language tasks without fine-tuning. Best for general-purpose image understanding. |
| `hermes-codebase-inspection` | Inspect and analyze codebases using pygount for LOC counting, language breakdown, and code-vs-comment ratios. Use when asked to check lines of code, repo size, language composition, or codebase stats. |
| `hermes-codex` | Delegate coding tasks to OpenAI Codex CLI agent. Use for building features, refactoring, PR reviews, and batch issue fixing. Requires the codex CLI and a git repository. |
| `hermes-dogfood` | Systematic exploratory QA testing of web applications — find bugs, capture evidence, and generate structured reports |
| `hermes-dspy` | Build complex AI systems with declarative programming, optimize prompts automatically, create modular RAG systems and agents with DSPy - Stanford NLP's framework for systematic LM programming |
| `hermes-evaluating-llms-harness` | Evaluates LLMs across 60+ academic benchmarks (MMLU, HumanEval, GSM8K, TruthfulQA, HellaSwag). Use when benchmarking model quality, comparing models, reporting academic results, or tracking training progress. Industry standard used by EleutherAI, HuggingFace, and major labs. Supports HuggingFace, vLLM, APIs. |
| `hermes-excalidraw` | Create hand-drawn style diagrams using Excalidraw JSON format. Generate .excalidraw files for architecture diagrams, flowcharts, sequence diagrams, concept maps, and more. Files can be opened at excalidraw.com or uploaded for shareable links. |
| `hermes-find-nearby` | Find nearby places (restaurants, cafes, bars, pharmacies, etc.) using OpenStreetMap. Works with coordinates, addresses, cities, zip codes, or Telegram location pins. No API keys needed. |
| `hermes-findmy` | Track Apple devices and AirTags via FindMy.app on macOS using AppleScript and screen capture. |
| `hermes-fine-tuning-with-trl` | Fine-tune LLMs using reinforcement learning with TRL - SFT for instruction tuning, DPO for preference alignment, PPO/GRPO for reward optimization, and reward model training. Use when need RLHF, align model with preferences, or train from human feedback. Works with HuggingFace Transformers. |
| `hermes-gguf-quantization` | GGUF format and llama.cpp quantization for efficient CPU/GPU inference. Use when deploying models on consumer hardware, Apple Silicon, or when needing flexible quantization from 2-8 bit without GPU requirements. |
| `hermes-gif-search` | Search and download GIFs from Tenor using curl. No dependencies beyond curl and jq. Useful for finding reaction GIFs, creating visual content, and sending GIFs in chat. |
| `hermes-github-auth` | Set up GitHub authentication for the agent using git (universally available) or the gh CLI. Covers HTTPS tokens, SSH keys, credential helpers, and gh auth — with a detection flow to pick the right method automatically. |
| `hermes-github-code-review` | Review code changes by analyzing git diffs, leaving inline comments on PRs, and performing thorough pre-push review. Works with gh CLI or falls back to git + GitHub REST API via curl. |
| `hermes-github-issues` | Create, manage, triage, and close GitHub issues. Search existing issues, add labels, assign people, and link to PRs. Works with gh CLI or falls back to git + GitHub REST API via curl. |
| `hermes-github-pr-workflow` | Full pull request lifecycle — create branches, commit changes, open PRs, monitor CI status, auto-fix failures, and merge. Works with gh CLI or falls back to git + GitHub REST API via curl. |
| `hermes-github-repo-management` | Clone, create, fork, configure, and manage GitHub repositories. Manage remotes, secrets, releases, and workflows. Works with gh CLI or falls back to git + GitHub REST API via curl. |
| `hermes-google-workspace` | Gmail, Calendar, Drive, Contacts, Sheets, and Docs integration via Python. Uses OAuth2 with automatic token refresh. No external binaries needed — runs entirely with Google's Python client libraries in the Hermes venv. |
| `hermes-grpo-rl-training` | Expert guidance for GRPO/RL fine-tuning with TRL for reasoning and task-specific model training |
| `hermes-guidance` | Control LLM output with regex and grammars, guarantee valid JSON/XML/code generation, enforce structured formats, and build multi-step workflows with Guidance - Microsoft Research's constrained generation framework |
| `hermes-heartmula` | Set up and run HeartMuLa, the open-source music generation model family (Suno-like). Generates full songs from lyrics + tags with multilingual support. |
| `hermes-hermes-agent` | Complete guide to using and extending Hermes Agent — CLI usage, setup, configuration, spawning additional agents, gateway platforms, skills, voice, tools, profiles, and a concise contributor reference. Load this skill when helping users configure Hermes, troubleshoot issues, spawn agent instances, or make code contributions. |
| `hermes-himalaya` | CLI to manage emails via IMAP/SMTP. Use himalaya to list, read, write, reply, forward, search, and organize emails from the terminal. Supports multiple accounts and message composition with MML (MIME Meta Language). |
| `hermes-huggingface-hub` | Hugging Face Hub CLI (hf) — search, download, and upload models and datasets, manage repos, query datasets with SQL, deploy inference endpoints, manage Spaces and buckets. |
| `hermes-imessage` | Send and receive iMessages/SMS via the imsg CLI on macOS. |
| `hermes-jupyter-live-kernel` | Run Jupyter kernels in the Hermes venv to execute Python code interactively. Create notebooks, run cells, render outputs including plots. |
| `hermes-linear` | Manage Linear issues, projects, and teams via the GraphQL API. Create, update, search, and organize issues. Uses API key auth (no OAuth needed). All operations via curl — no dependencies. |
| `hermes-llama-cpp` | Runs LLM inference on CPU, Apple Silicon, and consumer GPUs without NVIDIA hardware. Use for edge deployment, M1/M2/M3 Macs, AMD/Intel GPUs, or when CUDA is unavailable. Supports GGUF quantization (1.5-8 bit) for reduced memory and 4-10× speedup vs PyTorch on CPU. |
| `hermes-manim-video` | Production pipeline for mathematical and technical animations using Manim Community Edition. Creates 3Blue1Brown-style explainer videos, algorithm visualizations, equation derivations, architecture diagrams, and data stories. Use when users request: animated explanations, math animations, concept visualizations, algorithm walkthroughs, technical explainers, 3Blue1Brown style videos, or any programmatic animation with geometric/mathematical content. |
| `hermes-mcporter` | Use the mcporter CLI to list, configure, auth, and call MCP servers/tools directly (HTTP or stdio), including ad-hoc servers, config edits, and CLI/type generation. |
| `hermes-minecraft-modpack-server` | Set up a modded Minecraft server from a CurseForge/Modrinth server pack zip. Covers NeoForge/Forge install, Java version, JVM tuning, firewall, LAN config, backups, and launch scripts. |
| `hermes-modal-serverless-gpu` | Serverless GPU cloud platform for running ML workloads. Use when you need on-demand GPU access without infrastructure management, deploying ML models as APIs, or running batch jobs with automatic scaling. |
| `hermes-nano-pdf` | Edit PDFs with natural-language instructions using the nano-pdf CLI. Modify text, fix typos, update titles, and make content changes to specific pages without manual editing. |
| `hermes-native-mcp` | Built-in MCP (Model Context Protocol) client that connects to external MCP servers, discovers their tools, and registers them as native Hermes Agent tools. Supports stdio and HTTP transports with automatic reconnection, security filtering, and zero-config tool injection. |
| `hermes-notion` | Notion API for creating and managing pages, databases, and blocks via curl. Search, create, update, and query Notion workspaces directly from the terminal. |
| `hermes-obliteratus` | Remove refusal behaviors from open-weight LLMs using OBLITERATUS — mechanistic interpretability techniques (diff-in-means, SVD, whitened SVD, LEACE, SAE decomposition, etc.) to excise guardrails while preserving reasoning. 9 CLI methods, 28 analysis modules, 116 model presets across 5 compute tiers, tournament evaluation, and telemetry-driven recommendations. Use when a user wants to uncensor, abliterate, or remove refusal from an LLM. |
| `hermes-obsidian` | Read, search, and create notes in the Obsidian vault. |
| `hermes-ocr-and-documents` | Extract text from PDFs and scanned documents. Use web_extract for remote URLs, pymupdf for local text-based PDFs, marker-pdf for OCR/scanned docs. For DOCX use python-docx, for PPTX see the powerpoint skill. |
| `hermes-opencode` | Delegate coding tasks to OpenCode CLI agent for feature implementation, refactoring, PR review, and long-running autonomous sessions. Requires the opencode CLI installed and authenticated. |
| `hermes-openhue` | Control Philips Hue lights, rooms, and scenes via the OpenHue CLI. Turn lights on/off, adjust brightness, color, color temperature, and activate scenes. |
| `hermes-outlines` | Guarantee valid JSON/XML/code structure during generation, use Pydantic models for type-safe outputs, support local models (Transformers, vLLM), and maximize inference speed with Outlines - dottxt.ai's structured generation library |
| `hermes-peft-fine-tuning` | Fine-tune LLMs with Parameter Efficient Fine-Tuning (PEFT) — LoRA, QLoRA, prefix-tuning, prompt-tuning. Memory efficient, works on limited hardware. Use when fine-tuning on consumer GPUs, reducing training time, or adapting pretrained models without full-weight updates. |
| `hermes-plan` | Guide users through AI-native planning for complex projects. Use when starting feature development, architecture design, or multi-step projects. Breaks goals into structured, testable milestones. |
| `hermes-pokemon-player` | Play Pokémon games (Red, Blue, Yellow, Gold, Silver, Crystal, Ruby, Sapphire) in your terminal using the pokete CLI. Battle, catch Pokémon, level up, and explore with text-based gameplay. |
| `hermes-polymarket` | Predict market outcomes using Polymarket's API. Search, analyze, and place bets on events (sports, politics, tech, crypto) via binary option markets. Uses Polymarket's REST API with no auth needed for read operations. |
| `hermes-popular-web-designs` | Recreate popular website designs (100+ sites: Apple, Figma, Linear, Stripe, Vercel, etc.) as single-file HTML with pixel-perfect accuracy. Use when users ask for HTML, site demos, design recreation, or templates. Hand-crafted from screenshots, no code generation or Figma scraping. Styles are pure CSS. |
| `hermes-powerpoint` | Create and edit PowerPoint presentations using python-pptx. Add slides, text, tables, images, charts. Full presentation lifecycle: create, edit, add speakers notes, save as PPTX. For editing existing presentations in-memory. |
| `hermes-product-hunt` | Browse and search Product Hunt launches via their API. Get daily trending products, search by category, view comments, and upvote. No authentication required for reads. |
| `hermes-python-packaging` | Build, publish, and manage Python packages with modern tooling (uv, hatch, flit). Create, test, and release Python projects. |
| `hermes-rag` | Implement Retrieval-Augmented Generation with vector databases and LLMs. Build question-answering systems, semantic search, and knowledge-base Q&A with local or hosted models. |
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
| `hermes-test-driven-development` | Use when implementing any feature or bugfix, before writing implementation code. Enforces RED-GREEN-REFACTOR cycle with test-first approach. |
| `hermes-twitter-x` | Interact with Twitter/X using Tweepy or the v2 API. |
| `hermes-vllm` | Deploy and serve LLMs with high throughput using vLLM. |
| `hermes-webhook-subscriptions` | Create and manage webhook subscriptions for event-driven automation. |
| `hermes-weights-and-biases` | Track and evaluate LLM applications with Weights & Biases Weave. |
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
git add skills/ skills-index.json README.md .claude-plugin/plugin.json
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
