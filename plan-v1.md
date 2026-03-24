**Figma Make HOÀN TOÀN có thể giúp** — nhưng theo 2 chiều ngược nhau, và kế hoạch cần phản ánh cả 2:

1. **Figma Make as Generator** — Bạn _design component trong Figma_, Figma Make _sinh ra React + Tailwind code_ cho từng component. Đây là cách dùng để tạo nhanh phần UI/implementation.
2. **Figma Make as Consumer** — Sau khi package đã publish lên npm, bạn _bring package vào Figma Make_ kèm `guidelines/`, để Figma Make _dùng library của bạn_ khi generate app mới (thay vì tự viết raw Tailwind).

---

Dưới đây là kế hoạch đã cập nhật với Figma Make làm trục trung tâm:

---

## Plan: `@baole/ui` — Component Library, Figma Make-First Workflow

**TL;DR**: Dùng Figma làm source of truth cho design, Figma Make generate code React+Tailwind cho từng component → tinh chỉnh thành rich prop API kiểu Ant Design → đóng gói npm → viết `guidelines/` để Figma Make dùng lại library này trong mọi tool subdomain.

---

### Phase 1 — Design in Figma (Prerequisite)

1. Tạo một **Figma file** chứa toàn bộ component library — mỗi component có đủ **variants dạng Figma properties**: `variant`, `size`, `state` (default/hover/disabled/error), `loading`… Đây là input cho Figma Make generate code
2. Thiết lập **Figma Variables / Design Tokens** trong file: màu sắc từ palette baole.space (deep dark gradient, glass bg/border, accent purple/fuchsia/pink, text hierarchy), typography (Space Grotesk headings + Inter body), spacing scale
3. Nhóm component theo tier để generate tuần tự: Tier 1 (primitives) → Tier 2 (form elements) → Tier 3 (overlays/feedback) → Tier 4 (data display)

**Chú ý quan trọng**: Figma Make generate code _tốt nhất_ khi Figma design có đủ variants rõ ràng. Component thiếu variant trong Figma → code sinh ra sẽ thiếu prop tương ứng.

---

### Phase 2 — Generate with Figma Make (per component)

**Workflow lặp lại cho từng component:**

4. Mở Figma Make, trỏ vào component frame trong Figma
5. Prompt theo pattern: _"Generate a reusable React TypeScript component for [ComponentName] with the following props: [list]. Use Tailwind CSS v4. The component must extend native HTML element props. Use motion/react for animations."_
6. Figma Make xuất code → **review và lưu** vào `src/components/[category]/[ComponentName].tsx`
7. Với mỗi component, yêu cầu Figma Make generate thêm: TypeScript interface, JSDoc trên mỗi prop, và unit test shell

**Thứ tự generate:**

| Nhóm         | Components                                                                     | Ghi chú                   |
| ------------ | ------------------------------------------------------------------------------ | ------------------------- |
| Primitives   | `Button`, `Badge`, `Tag`, `Divider`, `Space`                                   | Formalize từ existing ui/ |
| Typography   | `Text`, `Heading`, `SectionHeading`                                            | Merge existing            |
| Form         | `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`                   | Mới hoàn toàn             |
| Feedback     | `Toast`, `Alert`, `Spinner`, `Skeleton`                                        | Generalize EVModeToast    |
| Overlay      | `Modal`, `Drawer`, `Tooltip`, `Popover`, `Dropdown`                            | Generalize PhotoModal     |
| Data Display | `Card`, `Tabs`, `Accordion`, `Table`, `Timeline`, `Avatar`                     | Mới                       |
| Specialized  | `ScrollReveal`, `ProgressBar`, `WordByWordStory`, `FilmStripGrid`, `PhotoCard` | Promote từ PhotoGallery   |

---

### Phase 3 — Refine to Rich API (manual, per component)

8. **Nâng prop API lên chuẩn Ant Design**: Figma Make generate code thường hardcode một variant — phải mở rộng thành union types, controlled/uncontrolled pattern, `size`, `status`, compound components (`Card.Header`, `Modal.Footer`, `Tabs.Panel`...)
9. **Chuẩn hóa TypeScript**: mỗi component phải `extends` HTML element props tương ứng (Button extends `ButtonHTMLAttributes`, Input extends `InputHTMLAttributes`…), không có `any`
10. **Thiết kế Token CSS**: tạo `src/tokens/index.css` với CSS custom properties từ palette baole.space — đây là output của Figma Variables ở Phase 1
11. **Viết `tailwind-preset.ts`** — cung cấp preset cho consumer apps để dùng token class `bg-baole-glass`, `text-baole-muted`, v.v.

---

### Phase 4 — Package Setup

12. **`package.json`**: `name: "@baole/ui"`, peer deps `react`, `react-dom`, `tailwindcss`, `motion`, `lucide-react`; exports map cho `./dist/index.js`, `./dist/style.css`, `./tailwind-preset`
13. **`vite.config.ts`** library mode: entry `src/index.ts`, formats `es`+`cjs`, externalize all peer deps, `vite-plugin-dts` cho type declarations
14. **`src/index.ts`** barrel export — mọi component, hooks, types, tailwind-preset
15. **`.npmignore`**: loại `src/`, `guidelines/`, `*.figma*`; chỉ giữ `dist/`, `tailwind-preset.js`

---

### Phase 5 — Figma Make Guidelines _(song song với Phase 4)_

Đây là bước **"bring package back to Figma Make"** — để sau khi publish xong, bất kỳ Figma Make file nào cũng biết cách dùng `@baole/ui` đúng cách:

16. **`guidelines/Guidelines.md`** — master index: giới thiệu `@baole/ui`, bảng component lookup, quy tắc enforcement ("Always prefer `@baole/ui` components over raw Tailwind")
17. **`guidelines/overview-components.md`** — bảng đầy đủ mọi component: mô tả + link đến guideline file
18. **`guidelines/overview-icons.md`** — Lucide React: import pattern, danh sách icon thường dùng, icon naming convention
19. **`guidelines/design-tokens/colors.md`** — CSS variables từ `src/tokens/index.css`, decision tree (background? → `var(--color-glass-bg)`, accent? → `var(--color-accent-*)`)
20. **`guidelines/design-tokens/typography.md`** — Space Grotesk / Inter scale, gradient text pattern
21. **`guidelines/components/*.md`** — một file per complex component: Button, Input, Modal, Toast, Tabs, Select, Table, Tooltip, Dropdown — mỗi file có: purpose, props API table, ví dụ đúng/sai

---

### Phase 6 — Publish & Integration

22. **Publish npm**: `npm publish --access public` → package `@baole/ui` lên npm public registry
23. **Figma Make template**: cài `@baole/ui` trong một Figma Make file + attach `guidelines/` → publish làm team template
24. **Tích hợp vào mỗi tool app**: `npm install @baole/ui`, import `@baole/ui/dist/style.css`, thêm `@source "../node_modules/@baole/ui/dist"` vào Tailwind config (Tailwind v4 dùng `@source` directive, không phải `content` array)

---

**Relevant files**

- ui — source cho Tier 1 refinement
- EVModeToast.tsx — pattern cho Toast generalization
- PhotoModal.tsx — pattern cho Modal generalization
- `src/tokens/index.css` (new) — CSS design tokens từ Figma Variables
- `guidelines/` (new) — Figma Make consumer docs

---

**Verification**

1. Figma Make generate được `Button` component từ Figma design — code chạy đúng với tất cả variants
2. `npm run build` → `dist/index.js`, `dist/index.d.ts`, `dist/style.css` đều sinh ra, không lỗi
3. `tsc --noEmit` → 0 errors (strict mode)
4. Test app: `npm install @baole/ui` → import 5 components khác nhau → render đúng styling
5. Figma Make template test: cài package + guidelines → prompt "build a settings form" → AI dùng `@baole/ui` components thay vì raw HTML

---

**Decisions**

- **Figma Make role**: Generator (Phase 2) + Consumer (Phase 5) — hai vai trò tách biệt, không trộn lẫn
- **Code ownership**: Code from Figma Make là _starting point_, không phải final — vẫn cần refinement thủ công ở Phase 3
- **Tailwind v4**: Consumer apps dùng `@source` directive, không phải `content` array cũ — phải document rõ trong README

**Further Considerations**

1. **Figma Make code quality**: Figma Make có thể generate code không đồng nhất giữa các component (khác naming, khác animation pattern). Cần thiết lập **prompt template chuẩn** trước Phase 2 để code sinh ra nhất quán.
2. **Floating UI**: Tooltip/Popover/Dropdown cần positioning engine — nên add `@floating-ui/react` như peer dep thay vì tự build, tránh mất thời gian ở Phase 3.
3. **Private vs Public npm**: `@baole/ui` scoped public package cần `--access public` lần đầu. Nếu muốn dùng Figma Make private registry (org plan), có thể dùng private package — linh hoạt hơn về versioning.
