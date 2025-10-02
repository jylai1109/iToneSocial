
/**
 * API 回應的基礎結構
 */
export interface ApiResponse<T = unknown> {
  status: "success" | "warning" | "error";
  message?: string;
  data?: T;  // 不同 API 可以指定不同型別
  [key: string]: any; // 允許後端額外回傳
}
