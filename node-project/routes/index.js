var express = require('express');
var router = express.Router();
const {
  find,
  plus
} = require('../lib/db');


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// /*插入*/
// router.post('/plusProblem', async (req, res, next)=> {
//   let {
//     name,
//     problem
//   }=req.body;
//   // let name = req.body.name;
//   // let psw = req.body.psw;
//    await plus('problem', [{
//     name,
//     problem
//     // name:name,
//     // psw:psw
//   }])
//   let data = await find ('problem')
//   res.send({
//     sucess:true,
//     data
//   });
// });


// router.get('/test',async function (req, res, next) {
//   // res.append('Access-Control-Allow-Origin', '*');
//     let data = await find('goodlist', {});
//     res.send(data);
// });
// /* 登录*/ 
// router.post('/login', async function (req, res, next) {
//   // res.append('Access-Control-Allow-Origin', '*');
//   let name = req.body.name;
//   let psw = req.body.psw;
//   // console.log(req.body);
//   let data = await find('sign', {
//     name,
//     psw
//   });
//   // console.log(data);
//   res.send(data);
// });
// /*注册*/
// router.post('/reg', async function (req, res, next) {
//   let name = req.body.name;
//   let psw = req.body.psw;
//   let data = await plus('sign', {
//     name:name,
//     psw:psw
//   })
//   res.send(data);
// });


//查找
router.get('/inf',function (req, res, next) {
  // res.append('Access-Control-Allow-Origin', '*');

  (async ()=>{
    let data = await find('inf', null);
    console.log(data);
    res.send(data);
  })();
    
});
module.exports = router;
