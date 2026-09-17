# alex-eighti-preview

**Alex Huang** 個人站 **Wendy v2 editorial** 靜態預覽（編輯工作室風）。

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

相對 v1：超大 Display 姓名、酸綠 `#C8F54A` CTA、Hero 左文右舞台、服務編號列表、作品英雄＋側欄＋不對稱三卡、經歷強調線亮點（非時間軸、非手帳）。

## 本地預覽

```bash
python3 -m http.server 8765 --directory /workspace/alex-eighti-preview
```

http://localhost:8765/

## 檔案

| 檔案 | 說明 |
|------|------|
| `index.html` | 單頁 editorial MVP |
| `styles.css` | Design tokens v2＋版面 |
| `ACCEPTANCE.md` | 對照 seven-checklist-v2 + Aden |
| `README.md` | 本說明 |

## IA

Hero → 服務邊界（01–04）→ 作品 `#works`（劇場）→ 經歷亮點 → 合作邀請 → Footer
