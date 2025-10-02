This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

部署：
-- npm run build

Next.js 會執行 next build，這個指令會：

編譯 TypeScript / JSX

把 .tsx / .ts → 轉成瀏覽器能跑的 JavaScript

這個過程使用 Webpack (Next.js 12) 或 Turbopack (Next.js 13+ 測試版)

最佳化資源

做 程式碼分割 (Code Splitting)

壓縮 / 最小化 JS 和 CSS

預處理圖片與字體

生成伺服端渲染 (SSR) 與靜態頁 (SSG)

如果頁面用了 getStaticProps → 會在 build 階段生成 HTML

如果用了 getServerSideProps → 保留成伺服端渲染邏輯，等待 runtime 執行

輸出結果到 .next/ 資料夾

這就是 Next.js 的「編譯後輸出」目錄

-- 部暑：
npm run build:deploy
D:\work\Projects\iToneSocial\ExportFix.ps1
這邊已經寫好處理路徑，然後將 html 搬到各自資料夾變成 index
