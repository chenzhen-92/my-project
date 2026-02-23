export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // 你的自訂邏輯，例如代理
    if (url.pathname.startsWith('/api/')) {
      // ...你的代碼...
      return new Response('OK');
    }
    // 重要：fallback 到靜態資產
    return env.ASSETS.fetch(request);
  }
};
