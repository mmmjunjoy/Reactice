// express 모듈 호출
const express = require('express');
const app = express();
const api = require('./routes/index');
// api 처리는 './routes/index'에서 일괄처리
app.use('/api', api);
 
// server port 4000 할당
// 클라이언트와 다른 번호로 충돌나지 않도록
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
})

//이렇게 수정한 이유는 앞으로 호출할  api가 많아질 것이기 때문이다.