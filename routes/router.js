const express=require("express");
const { post_method, get_method, select_method, get_by_id, put_method, deleted } = require("../controller/logic");
const router=express.Router();

router.post('/postmethod',post_method)
router.get('/get_data',get_method)
router.get('/get_method',select_method)
router.get('/get_by_id/:id',get_by_id)
router.put("/putmethod/:id",put_method)
router.delete('/deletemethod/:id',deleted)
module.exports={router}