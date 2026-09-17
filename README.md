# alex-eighti-preview

**Alex Huang** 個人站重設計 MVP 的**靜態預覽版**。

> ⚠ **非正式站**。請勿部署到 `https://alex.eighti.app`，也不要改動正式站 DNS／正式部署。

對齊規格：`/workspace/alex-eighti-redesign/` 內 `final-tokens.md`、`wireframe-dark.html`、`copy-aden.md`、`seven-checklist.md`、`aden-mvp-ab.md`。

## 本地預覽

```bash
python3 -m http.server 8765 --directory /workspace/alex-eighti-preview
```

瀏覽器開啟：http://localhost:8765/

或直接開檔：

```bash
xdg-open /workspace/alex-eighti-preview/index.html
```

## 檔案

| 檔案 | 說明 |
|------|------|
| `index.html` | 單頁 MVP |
| `styles.css` | Design tokens＋版面 |
| `ACCEPTANCE.md` | 對照 seven-checklist 勾選 |
| `README.md` | 本說明 |

## 結構（IA）

Hero → 服務邊界（短條列）→ 作品 `#works` → 經歷亮點（ul）→ 合作邀請 → Footer
