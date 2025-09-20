// server.js
// 간단한 Express 정적 서버. Nginx Proxy Manager를 사용할 때는 이것만 실행하면 됩니다.

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
