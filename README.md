# Zotero EPUB Reader

[![zotero target version](https://img.shields.io/badge/Zotero-10-green?style=flat-square&logo=zotero&logoColor=CC2936)](https://www.zotero.org)
[![Using Zotero Plugin Template](https://img.shields.io/badge/Using-Zotero%20Plugin%20Template-blue?style=flat-square&logo=github)](https://github.com/windingwind/zotero-plugin-template)
[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-blue?style=flat-square)](LICENSE)

> **Fork** de [vecear/zotero-epub](https://github.com/vecear/zotero-epub), actualizado e testado para **Zotero 10+** (mantendo compatibilidade com Zotero 9). Dependências na era Zotero 10 (`zotero-plugin-toolkit` 6, `zotero-plugin-scaffold` 0.9, `zotero-types` 4.1) e código de exemplo do _template_ removido para um startup limpo.

為 Zotero 9 / 10 打造接近 PDF 的 EPUB 閱讀體驗：字體 / 圖片 / 行距 / 字型 / 顏色獨立控制、捲動 ↔ 翻頁切換、單頁 / 雙頁模式，全部設定 GLOBAL 持久化。

> Experiência de leitura EPUB quase igual ao PDF para Zotero 9 / 10: controlo independente de fonte / imagem / espaçamento / tipo de letra / cores, alternância rolagem ↔ páginas, modo 1 ou 2 páginas e persistência GLOBAL de todos os ajustes.

## ✨ Features / Funcionalidades

| Toolbar 按鈕 Button | 功能 Função                                                    | 說明 Descrição                                                                        |
| ------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **A−** / **A+**     | 字體縮小 / 放大 `1 px` · Reduzir / aumentar a fonte `1 px`     | 整數偏移，`+N` 然後 `−N` 精確相消 · Deslocamento inteiro: `+N` e `−N` cancelam-se     |
| **▭−** / **▭+**     | 圖片縮小 / 放大 `2.5%` · Reduzir / ampliar as imagens `2.5%`   | 獨立控制（不跟字體聯動）· Controlo independente da fonte; 0.3×–3×                     |
| **≡−** / **≡+**     | 行距縮小 / 放大 `0.1` · Reduzir / aumentar o espaçamento `0.1` | 範圍 1.0–2.5 · Intervalo 1.0–2.5                                                      |
| **⇅**               | 切換捲動 / 翻頁模式 · Alternar rolagem / páginas               | Zotero 原生 `flowMode` · Nativo do Zotero `flowMode`                                  |
| **▤**               | 切換單頁 / 雙頁模式 · Alternar 1 ou 2 páginas                  | Zotero 原生 `spreadMode` · Nativo do Zotero `spreadMode`                              |
| **字型 Fonte ▾**    | 字型下拉選單 · Menu de tipo de letra                           | 11 個預設（正黑、細明、標楷、思源、Georgia、Times 等）· 11 opções                     |
| **顏色 Cor ▾**      | 配色 presets + 自訂 · Esquemas de cor + personalização         | 內建「米黃 / Papel (sépia)」等預設，另可自選文字色 e 背景色 · presets + cores manuais |
| **↺**               | 重置全部自訂設定 · Redefinir todos os ajustes                  | 一鍵回到 Zotero 預設 · Volta ao estado original do Zotero                             |

所有字體 / 圖片 / 行距 / 字型 / 顏色設定都是 **GLOBAL 持久化**：透過 `Zotero.Prefs` 儲存（`extensions.zotero.zotero-epub.*`），重啟 Zotero 與打開任何新的 EPUB 都會自動套用。

Todos os ajustes de fonte / imagem / espaçamento / tipo de letra / cores são **persistidos GLOBALMENTE** via `Zotero.Prefs` (`extensions.zotero.zotero-epub.*`) e reaplicados ao reiniciar o Zotero ou abrir qualquer novo EPUB.

## 🎨 顏色 / Cores

O botão **顏色 Cor ▾** abre um menu com duas partes / 这个按钮的菜单分两部分:

1. **Presets 预设方案** — um clique para aplicar texto + fundo em conjunto / 一键套用文字与背景色的组合：
   - `預設 · Padrão` — sem alteração (cores originais do EPUB) / 不改动（保留 EPUB 原始颜色）
   - `米黃 · Papel (sépia)` — **o tom amarelado confortável** (texto `#5b4636` sobre fundo `#f4ecd8`) / **那个偏黄舒适的阅读色调**
   - `深米 · Sépia escuro` · `護眼綠 · Verde suave` · `夜間 · Noite` · `淺灰 · Cinza claro`
2. **Personalizado · 自定义** — dois seletores nativos de cor para escolher **cor do texto** e **cor do fundo** livremente / 两个原生取色器，可分别自选「文字色」与「背景色」。

A cor é aplicada como CSS injectado **e** reforçada `!important` inline em `html`/`body`/elementos de texto, para vencer as folhas de estilo do próprio EPUB. A escolha fica guardada globalmente e é reaplicada nos próximos EPUB. / 颜色会通过注入 CSS 并对 html/body/文字元素上 `!important` 内联样式来覆盖 EPUB 自带样式；选择会全局保存并在之后的 EPUB 自动套用。

## 🔖 書籤工作流

Zotero 內建的 annotation 系統（highlight / underline / note / image / ink）已涵蓋書籤需求，本外掛**不重做**這塊。建議工作流：

1. EPUB reader 內選取段落 → 點 **Highlight** 工具反白
2. 給該 highlight 加 tag `bookmark`（或你習慣的顏色）當書籤標識
3. 在 Zotero 主庫的 attachment 下可看到所有 annotation（享有 Zotero 同步）
4. 點 annotation 即跳回 EPUB 對應位置
5. 用 tag 篩選快速找到所有書籤

優點：享有原生雲端同步、跨檔搜尋、Zotero Citation 整合。

## 📦 Installation

從 [GitHub Releases](https://github.com/redmagikarp13/zotero-epub/releases) 下載最新 `zotero-epub-reader.xpi`：

1. Zotero 10 → 工具（Tools）→ 外掛（Add-ons）
2. 齒輪選單 → **Install Add-on From File…** → 選下載的 `.xpi`
3. 重啟 Zotero
4. 開任一 EPUB → toolbar 右側應出現 11 個新控制元件（含字型 Fonte 與顏色 Cor 两个选单）

## 🛠 Development

### Prerequisites

- Node.js 22+（測試過 24.12）
- Zotero 10（[下載](https://www.zotero.org/download/)）
- 一個專屬 dev profile（強烈建議；用 `zotero.exe -p` 建立避免污染主 library）

### Setup

```bash
git clone https://github.com/redmagikarp13/zotero-epub.git
cd zotero-epub
npm install
cp .env.example .env
# 編輯 .env 填入 Zotero binary 路徑與 dev profile 路徑
```

### Develop

```bash
npm start        # 啟動 Zotero 並 hot reload（會先殺掉既有 Zotero process）
npm run build    # 打包 .xpi 到 .scaffold/build/zotero-epub-reader.xpi
npm run lint:fix # Prettier + ESLint 自動修正
npm test         # 單元測試（目前僅 scaffold smoke test）
```

### Release

```bash
# bump version in package.json
npm run build
gh release create vX.Y.Z .scaffold/build/zotero-epub-reader.xpi \
  --title "vX.Y.Z" --notes "..."
```

## 🏗 Architecture

Bootstrap plugin 模式，hook Zotero 9 / 10 內建 reader：

| 層             | 機制                                                                                          |
| -------------- | --------------------------------------------------------------------------------------------- |
| Plugin 入口    | `Zotero.Reader.registerEventListener("renderToolbar", ...)` 注入 toolbar UI                   |
| EPUB view 存取 | `reader._internalReader._primaryView` = `EPUBView` instance（`src/dom/epub/epub-view.ts`）    |
| 內容 iframe    | `_primaryView._iframeDocument`（不是 `reader._iframeWindow`，後者是 reader shell）            |
| 原生 API 呼叫  | `internalReader.flowMode` / `spreadMode`（setter 偵測 `applyState()`）+ `navigate*` / `find*` |
| CSS 注入       | 遞迴 walk `_iframeDocument` 與所有 nested iframes 注入 `<style id="ze-content-style">`        |
| 內容改寫       | **Inline `!important` force**（`setProperty(..., 'important')`）壓過 EPUB 自帶 stylesheet     |
| 設定持久化     | `Zotero.Prefs` (`extensions.zotero.zotero-epub.*`) — GLOBAL；float 以 string 存避免 int 截斷  |

詳細探路結果見 [`findings.md`](./findings.md)。

### 關鍵設計決策

| 決定                                        | 為什麼                                                                                   |
| ------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 字體用 **整數 px offset** 而非倍數          | `×1.1` 然後 `×1/1.1` 經 rounding 不會剛好 = 1；加減整數永遠精確互相抵銷                  |
| 字體 / 圖片 / 行距 **獨立三個控制**         | 合在一起的放大比例在 column-layout 的 EPUB 上會互相打架，拆開後每一項都可預期            |
| CSS + **inline `!important` force** 雙管    | EPUB stylesheet 常用 `.chapter p { !important }`，單靠 CSS rule 的 specificity 打不贏    |
| 圖片用 `zoom` + `width` + `max-width: none` | 某些 EPUB 鎖 `img { max-width: 100% !important }`，只設 width 或 zoom 單一屬性都會被擋   |
| 字型 popup 改 button + custom menu          | 原生 `<select>` 在 React 控制的 toolbar 需要 **兩次 click** 才展開（first = focus only） |
| 字體 / 圖片寫 `dataset.zeOrig*` 快取        | 每次調整從 cache 的 **原始值** 重算，避免從「被改過的值」再放大造成的 drift              |

## ✅ Milestones（全部完成）

- [x] M1 專案骨架（zotero-plugin-template + GitHub repo）
- [x] M2 Zotero 9 reader hook 探路（`findings.md`）
- [x] M3 Toolbar UI（字體 / 圖片 / 行距 / 模式 / 字型 / 重置）
- [x] M4 GLOBAL 設定持久化（`Zotero.Prefs`）
- [x] M5 書籤（用 Zotero 內建 annotation，文檔指引）
- [x] M6 全書搜尋（用 Zotero 內建 search toolbar）+ release

## ⚠️ 已知限制

- **flowMode / spreadMode 不持久化**：Zotero reader 自身 cache 此狀態，重複寫入可能衝突，故只支援即時切換，不寫入 prefs。
- **直式（中式直書）EPUB 不支援同螢幕兩頁**：雙頁是 Zotero 原生功能，以視窗寬度切兩欄的水平 multi-column 實作，排版引擎不支援直式書的分頁雙頁（官方僅在捲動模式支援直式書）。對直式書按 **▤** 會彈 alert 說明並建議改用 **⇅** 捲動模式，不再靜默失效。
- **圖片 zoom 失敗時會彈 alert**：self-diagnostic 協助除錯（例如 EPUB 圖在 shadow DOM 無法存取）。正常使用不會觸發。
- **多人共用 profile 的 annotation「bookmark」tag 會混在普通標註裡**：是設計選擇（享用內建同步），若要嚴格區分請使用專用 color。

## License

AGPL-3.0-or-later。基於 [windingwind/zotero-plugin-template](https://github.com/windingwind/zotero-plugin-template)。

## Acknowledgments

- [Zotero](https://www.zotero.org/) — Open-source reference manager
- [windingwind/zotero-plugin-template](https://github.com/windingwind/zotero-plugin-template) — bootstrap & hot reload
- [windingwind/zotero-plugin-toolkit](https://github.com/windingwind/zotero-plugin-toolkit) — UI helpers
- [zotero/reader](https://github.com/zotero/reader) — PDF/EPUB reader 原始碼參考
- [zotero/epub.js](https://github.com/zotero/epub.js) — EPUB 渲染引擎
