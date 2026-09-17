# ACCEPTANCE｜alex-eighti-preview 對照 seven-checklist / Aden A＋B

**預覽路徑：** `/workspace/alex-eighti-preview/`  
**正式站：** 未改動、未部署  
**對齊：** `final-tokens.md` · `wireframe-dark.html` · `copy-aden.md` · `aden-mvp-ab.md` · `seven-checklist.md`

---

## A. 全域

- [x] 套用 `final-tokens.md`；正文／CTA 對比 ≥ WCAG AA（深底＋淺字／藍 CTA 白字）
- [x] `max-width: 1120px` 置中；左右 pad 24px（≤640px → 16px）；無右側裁切
- [x] 全中文主文案（專有名詞可原文）；品牌僅 **Alex Huang**
- [x] 無手帳／紙張／手寫／撕紙／傾斜裝飾
- [x] 核心定位、作品名、聯絡方式：無 JS 也可讀（純靜態 HTML）
- [x] 動效僅短 hover（≤200ms）＋錨點平滑；無視差／打字機／時間軸動畫

## B. 區塊

### Hero
- [x] H1「Alex Huang」＋副標「獨立 AI 產品開發者／全端工程師」
- [x] 信任句＋行動句跟 `copy-aden.md`
- [x] 主 CTA「來信聊聊接案」→ `mailto:alexabc@gmail.com`
- [x] 次 CTA「看作品」→ `#works`

### 服務邊界
- [x] 短條列：可做 3 點＋合作 1 點（**非**三欄服務卡）

### 作品 `#works`（6 · Aden 序）
- [x] 1 AgentSight（線上運行 · 外連）
- [x] 2 World Order Sim（線上運行 · 外連）
- [x] 3 Reverie（外連）
- [x] 4 StoryMagic（無正式站 → pill「作品」、無外連）
- [x] 5 Voxly Diary（外連）
- [x] 6 語音待辦與記帳 AI 助理（暫名 · pill「作品」、無外連）

### 經歷亮點
- [x] 單一 `ul` 亮點條列（5 條）
- [x] **非**時間軸 UI

### 合作＋Footer
- [x] 再次「來信聊聊接案」mailto
- [x] GitHub：https://github.com/Chuanyin1202
- [x] Footer 僅聯絡資訊

## C. WorkCard

- [x] Media 16:10；無圖用縮寫字標（AS／WOS／RV／SM／VD／VM）
- [x] Status pill 含文字（線上運行／作品）／Title／oneLiner≤2 行
- [x] 有 URL 整卡可點，`target=_blank` `rel=noopener noreferrer`
- [x] Hover 輕微上移；`:focus-visible` ring
- [x] stack tags（有資料者）；無圖故無 lazy img（字標佔位）

## D. Aden MVP 驗收

- [x] 一屏可見定位＋主 CTA；mailto → alexabc@gmail.com
- [x] 「看作品」抵達 `#works`；6 卡有預覽錨點
- [x] 無手帳風；深色冷静；無右側裁切
- [x] 經歷為亮點條列非時間軸
- [x] 全中文；不強調 Eighti 品牌
- [x] 禁用 JS 仍可读定位／作品名／聯絡
- [x] 視覺對齊 Wendy 線框 D（升級：tokens 分離、hamburger、stack tags、字標）

## E. 不含（確認未做）

多頁／CMS／表單後端／Calendly／複雜動畫／部落格／全面雙語／正式站部署

## 缺口／備註

- 作品預覽圖尚未提供 → 以縮寫字標佔位（符合 checklist fallback）
- StoryMagic／語音待辦依 Aden：無正式站則標「作品」、不外連（未使用早期規格中的 storymagic／voxmemo URL）
- Nav hamburger 為 CSS checkbox（無 JS）；核心文案不依賴它
