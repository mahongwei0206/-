const express = require('express');
const router = express.Router();

const mysql = require('mysql');

const pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'item',
	port:3306
})


router.use('/limit',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection((err,con)=>{
		if(err) throw err;
		con.query(`SELECT * FROM news`,(err,rows)=>{
			if(err) throw err;
			res.send(rows);
			con.release();
		})
	})
})








module.exports = router;