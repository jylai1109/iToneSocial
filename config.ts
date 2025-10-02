//const API_BASE_URL = "https://localhost:44377";
//const API_BASE_URL = "https://localhost/EPMIS_Test";
//const API_BASE_URL = "https://1.34.204.21";
//const API_BASE_URL = "https://decision.dydc.com.tw/EPMIS_Test";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
  console.warn("⚠️ NEXT_PUBLIC_API_BASE_URL 沒設定，請檢查 .env.local 檔案");
}

export default {
  API_BASE_URL,
};
