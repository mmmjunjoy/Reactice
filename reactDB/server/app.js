const express = require('express')
const app = express()
const cors = require('cors') // import 해주는 것이다.

//cors 정책을 풀기 위해 -> 데이터를 꺼내가도 된다고 허락하는 것이다.
app.use(cors())

app.use(express.json())   // for parsing applicationjson
app.use(express.urlencoded({ extended: true}))  // for parsing
let id = 2;
const todoList = [{
    id:1,
    text:'work out',
    done: true

}];

//postman 이용해서 테스트해보기
app.get('/api/todo',(req,res)=> {
    res.json(todoList);

});

app.post('/api/todo', (req,res)=>{
    const {text, done} = req.body;
    todoList.push({
        id:id++,
        text,
        done,
    });
    return res.send('success');

});


app.listen(4000 , () => {
    console.log('server start!');
  
});

// 잘 실행되는지 확인하기 위해서 callback함술르 넣어준다