export default {
  async fetch(request, env) {
    // 強制讓 Worker 攔截所有請求，先證明它在運行
    return new Response(
      `Worker 已成功攔截所有請求！\n\n` +
      `請求路徑: ${new URL(request.url).pathname}\n` +
      `完整 URL: ${request.url}\n` +
      `請求方法: ${request.method}\n` +
      `時間: ${new Date().toISOString()}\n\n` +
      `這證明 _worker.js 正在工作。現在你可以逐步加回你的節點代理邏輯。`,
      {
        status: 200,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      }
    );
    
    // 等測試成功後，再註釋掉上面，返回下面這行讓靜態文件正常顯示：
    // return env.ASSETS.fetch(request);
  }
};