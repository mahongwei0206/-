<template>
	<div>
		<div id="box">
			<button id="jia" @click="jia">+</button>
			<div id="tan">
				<input type="text" id="titi">
				<input type="text" id="coni">
				<button id="tian" @click="xiao">添加</button>
			</div>
			<div id="tit"> <input type="text" id="inp"><button id="shan">删除</button></div>
			<div id="con"> <input type="text" id="inp"><button id="shana">删除</button></div>
			<div id="tit"> <input type="text" id="inp"><button id="shan">删除</button></div>
			<div id="con"> <input type="text" id="inp"><button id="shana">删除</button></div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				arr:[]
			}
		},
		created(){
			this.$http.get('http://localhost:1234/limit/limit')
			.then((e)=>{
				this.arr=e.body
			})
		},
		methods:{
			jia(){
				tan.style.display="block"
			},
			xiao(){
				tan.style.display="none"
			}
		}
	}
</script>
<style>
	#box{
		height: 300px;
		width: 250px;
		border: 1px solid #666;
		position: relative;
	}
	#tit{
		height: 30px;
		width: 200px;
		border: 1px solid #666;
		margin-left: 20px;
		margin-top: 5px;
	}
	
	#shan{
		margin-left: 150px;
		float: left;
	}
	#con{
		height: 50px;
		width: 200px;
		border: 1px solid #666;
		margin-left: 20px;
		margin-top: 5px;
	}
	#shana{
		margin-left: 150px;
	}
	#tan{
		height: 100px;
		width: 150px;
		background-color: #CCCCCC;
		position: absolute;
		margin-left: 50px;
		margin-top: 50px;
		display: none;
	}
	#titi{
		width: 120px;
	}
	#coni{
		width: 120px;
	}
	#inp{
		width: 100px;
		float: left;
	}
	
</style>