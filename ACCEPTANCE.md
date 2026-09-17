# ACCEPTANCE｜Wendy v2 Editorial Preview

對照：`seven-checklist-v2.md` + Aden `copy-aden.md` + motion 包（A. 克制質感）  
目標：`https://kanibot818.github.io/alex-eighti-preview/`（非正式站）

## Seven checklist v2

- [x] 依 v2 wireframe 重構版面（非在 v1 上換色）— 整頁以 `wireframe-editorial.html` 為底拆成 `index.html` + `styles.css`
- [x] Display 姓名 ≥ 約 72px desktop（`clamp(2.75rem, 7vw, 5.5rem)` ≈ 88px）；Hero 右側代表作舞台
- [x] 作品：AgentSight 英雄位 + WOS／Reverie 側欄 + 下方其餘三卡不對稱；**非**等分 3×2
- [x] 服務：編號 01–04 編輯列表＋髮絲線；經歷：左側強調線亮點條列（非時間軸）
- [x] CTA「來信聊聊接案」→ `mailto:alexabc@gmail.com`（Hero＋頁尾）；次「看作品」→ `#works`
- [x] Tokens：`--ink #07080A`／`--accent #C8F54A`／Fraunces + Noto Serif TC Display；**無** `#5B8CFF`
- [x] 全中文主文案；品牌僅 Alex Huang；6 作品序不變
- [x] 無手帳／手寫；對比可讀；md 下 hamburger；skip-link／aria／focus-visible

## Aden 文案／連結

- [x] Hero：姓名、副標、信任、行動文案鎖定
- [x] 服務 4 項：AI agent／MCP、全端、雲端維運、接案／外包／顧問
- [x] 作品序：AgentSight(live) → WOS(live) → Reverie → StoryMagic(無連) → Voxly → 語音待辦(無連)
- [x] 經歷 5 條亮點
- [x] Footer：mailto + https://github.com/Chuanyin1202；無 Eighti 品牌敘事

## 動畫｜A. 克制質感（Wendy）

對照：`alex-eighti-redesign/v2/motion/`（storyboard／do-dont／reduced-motion／seven-motion-notes）

- [x] 技術：GSAP 3 + ScrollTrigger（jsDelivr CDN）；`gsap.matchMedia()` 分桌面／手機／reduced-motion
- [x] 只動 `transform`／`opacity`；入場 **once** 為主；**無 pin**；無第二套動畫庫
- [x] Hero 載入：眉標／姓名／副標等 stagger fade-up；舞台 fade+scale；CTA 最後 fade（**CSS**，不挡 LCP）
- [x] 服務：標題 fade-up；列表兩組（01–02／03–04），**無**逐列飛入
- [x] 作品：標題→英雄→側欄 stagger→下方三卡 stagger；桌面輕圖片揭示（media yPercent）；手機只 fade
- [x] 經歷：整塊 fade（無五條逐條）
- [x] CTA：fade（桌面按鈕輕 scale；手機只 fade）；無無限 pulse
- [x] Nav：滾過 Hero 後 hairline／微 blur（`.is-scrolled`）
- [x] **禁止項未做**：打字機、自定义游標、長 pin、手機 pin／強 parallax、逐行服務／經歷
- [x] `prefers-reduced-motion: reduce`：瞬顯、無 scrub／parallax；`scroll-behavior: auto`；文字預設可見（CSS 動畫僅在 `no-preference`）
- [x] 關掉 JS：內容完整、mailto／`#works` 可用（Hero CSS 仍可播；Scroll 入場退回靜態）

## 部署約束

- [x] 僅推 `kanibot818/alex-eighti-preview` Pages
- [x] **未**改動 `https://alex.eighti.app`（正式站 `theme-color` 仍為 `#f4ece0`）
