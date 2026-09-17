# alex-eighti-preview

**Alex Huang** 個人站 **Wendy v2 editorial** 靜態預覽（編輯工作室風）＋ **A. 克制質感** 捲動動畫。

> ⚠ **非正式站**。請勿部署到 `https://alex.eighti.app`，也不要改動正式站 DNS／正式部署。

## GitHub Pages

**https://kanibot818.github.io/alex-eighti-preview/**

Source：`main` branch，root `/`。

## 設計源

對齊 `/workspace/alex-eighti-redesign/v2/`：

- `wireframe-editorial.html`（結構／視覺金標）
- `final-tokens-v2.md`
- `seven-checklist-v2.md`
- `old-vs-new.md`
- `benchmarks-editorial.md`
- 文案：`../copy-aden.md`
- 動效：`v2/motion/`（storyboard／do-dont／prefers-reduced-motion／seven-motion-notes）

相對 v1：超大 Display 姓名、酸綠 `#C8F54A` CTA、Hero 左文右舞台、服務編號列表、作品英雄＋側欄＋不對稱三卡、經歷強調線亮點（非時間軸、非手帳）。

## 動效

- **GSAP 3 + ScrollTrigger**（CDN）；`motion.js` + Hero **CSS** 入場（LCP：文字不依赖 JS 才可見）
- 桌面：服務兩組、作品揭示、極輕舞台 parallax；**無 pin**
- 手機：減量 fade；無 pin／parallax／圖揭示
- 僅 `transform`／`opacity`

### 測 `prefers-reduced-motion`

1. Chrome DevTools → Rendering（或 More tools）→ **Emulate CSS media feature `prefers-reduced-motion`** → `reduce`
2. **硬重新整理**（Cmd/Ctrl+Shift+R）
3. 預期：內容**瞬顯**；無 stagger／scrub／parallax；錨點捲動為 `auto`；Hero CSS 入場也不會跑（包在 `no-preference`）
4. 可選 headless：Puppeteer `page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }])` 後檢查關鍵區塊無卡住 `opacity: 0`

## 本地預覽

```bash
python3 -m http.server 8765 --directory /workspace/alex-eighti-preview
```

http://localhost:8765/

## 檔案

| 檔案 | 說明 |
|------|------|
| `index.html` | 單頁 editorial MVP |
| `styles.css` | Design tokens v2＋版面＋Hero CSS 入場＋reduced-motion |
| `motion.js` | GSAP ScrollTrigger 區塊入場（桌面／手機／reduce） |
| `ACCEPTANCE.md` | 對照 seven-checklist-v2 + Aden + 動畫驗收 |
| `README.md` | 本說明 |

## IA

Hero → 服務邊界（01–04）→ 作品 `#works`（劇場）→ 經歷亮點 → 合作邀請 → Footer
