# vi-slides 進度紀錄

## 專案結構
- `compose.html` — 模組組合器（勾選後預覽）
- `preview.html` — Reveal.js v5 簡報播放器
- `modules/` — 各投影片模組（每個 .html = 一至多頁 `<section>`）
- `shared/slides-core.css` / `slides-core.js` — 共用樣式與工具函式
- `assets/vi-assistive-tech/` — 圖片資源
- `pptx/` — 原始 PPTX（`淺談視障生學習與輔助科技.pptx`）

## preview.html 已啟用功能
| 功能 | 說明 |
|------|------|
| mouseWheel | 滾輪翻頁 |
| Lightbox | 點圖片全螢幕，Esc 關閉 |
| RevealZoom | Alt+點任意位置放大 |
| Chalkboard | B=黑板 / C=在投影片畫線 / Del=清除 |
| TOC 面板 | 右上角「標題列表」開關，滾動不翻頁 |

## viat 模組現況（視障生學習與輔助科技）

### 章節結構
- viat-ch1 視覺障礙認識
- viat-ch2 視覺輔具
- viat-ch3 點字與語音輔具
- viat-ch4 電腦、手機與 AI

### 各模組檔案
| 模組 id | 檔案 | 說明 |
|---------|------|------|
| viat-title | viat-title.html | 標題頁 |
| viat-definition | viat-definition.html | 定義（含鑑定辦法連結） |
| viat-eye-anatomy | viat-eye-anatomy.html | 眼球構造 + Amsler 測試連結 |
| viat-vision-field | viat-vision-field.html | 視野圖（3 頁，無說明文字） |
| viat-eye-conditions | viat-eye-conditions.html | 眼疾模擬（13 頁，閱讀/生活/戶外） |
| viat-eye-treatment | viat-eye-treatment.html | 眼科治療（近視/白內障/IOL） |
| viat-cvi | viat-cvi.html | CVI（視覺皮質損傷）4 頁 |
| viat-resources | viat-resources.html | 視障資源（表格：教育/勞政/社政） |
| viat-at-overview | viat-at-overview.html | 輔助科技分類（兩欄項目符號，含 class.kh 連結） |
| viat-materials | viat-materials.html | 大字書 & 點字書（2 頁） |
| viat-magnifier | viat-magnifier.html | 放大鏡 |
| viat-cctv-desktop | viat-cctv-desktop.html | 桌上型擴視機（5 頁） |
| viat-cctv-portable | viat-cctv-portable.html | 攜帶型擴視機 + 望遠鏡（6 頁） |
| viat-cctv-headmounted | viat-cctv-headmounted.html | 頭戴型擴視機 |
| viat-ocr-tts | viat-ocr-tts.html | OCR / 文字轉語音 |
| viat-braille-system | viat-braille-system.html | 點字系統（6 頁，已移除六點架構頁） |
| viat-braille-devices | viat-braille-devices.html | 點字輔具（25 頁，含 YouTube） |
| viat-computer | viat-computer.html | 電腦視覺設定 + 軟硬體關係圖 + NVDA |
| viat-ai | viat-ai.html | AI 辨識工具（7 頁：TalkBack/BME/Envision/Lookout/眼鏡） |

### 已知待處理
- slide 98（viat-computer 第 3 頁）：標籤已改為「軟硬體關係圖」，
  但圖片仍是 windows-accessibility.png，若有正確圖請替換。
- Chalkboard plugin 從 CDN 載入（需網路），版本鎖定為 @master。

## compose.html 模組順序（viat 區）
viat-title → viat-ch1（章節標題）→ viat-definition → viat-eye-anatomy →
viat-vision-field → viat-eye-conditions → viat-eye-treatment → viat-cvi →
viat-resources → viat-at-overview → viat-materials →
viat-ch2 → viat-magnifier → viat-cctv-desktop → viat-cctv-portable →
viat-cctv-headmounted →
viat-ch3 → viat-ocr-tts → viat-braille-system → viat-braille-devices →
viat-ch4 → viat-computer → viat-ai
