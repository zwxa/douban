<template>
	<div class="search-content" v-show="showInput" >
	<div class="curtain">
	    <div class="header">
	    	<div class="input">
	    		<span><i class=" icon-search"></i></span><input type="text" v-model.trim="text" @keyup.enter="submit" autofocus>
	    	</div>
	    	<div class="cancel" @click="cancel">
	    		<p>取消</p>
	    	</div>
	    </div>
	    <div class="result-warpper"  v-show="result.total>=0">
	    	<div class="result-total">共<span>{{result.total}}</span>个电影/电视</div>
	    	<ul v-for="movie in result.subjects" >
	    		<li class="result-list" @click="selectMovie(movie,$event)">
	    			<div class="img">
	    				<img :src="movie.images.small"  width="65" height="100">
	    			</div>
	    			<div class="content">
	    				<h2>{{movie.title}}</h2>
	    				 <div v-if="movie.rating.average>0" class="star-content">
                         				<star  :average="movie.rating.average"></star><p class="num">{{movie.rating.average}}</p>
                        				 </div>
                         				<div v-else-if="movie.rating.average==0" class="no-average"><p>暂无评分</p></div>
	    				<p >导演：<span v-for="director in movie.directors" class="director" >{{director.name }}</span></p>
	    				<p >主演：<span v-for="cast in movie.casts" class="cast" >{{cast.name}}</span></p>
	    			</div>
	    		</li>
	    	</ul>
	    </div>
	</div>
	 <movie :movie="details" :images="images" :title="title" :casts="casts" ref="movie" ></movie>
	</div>
</template>
<script >
import star from '../../components/star/star';
import axios from 'axios';
import movie from '../../components/movie/movie.vue'
export default{
	data(){
		return{
			showInput : false,
			text:'',
			result:{},
			details:{ },
                		images:{},
                		title:{},
                		casts:{}
		}
	},
	methods:{
		show(){
			this.showInput = true
		},
		cancel(){
			this.showInput = false
			this.result=''
			this.text=''
		},
		submit(){
			let text = this.text
			let url =  '/api/movie/search?q=' +text
			console.log(url)
			 axios.get(url)
		             .then((response)=>{
		                        this.result = response.data 
		                    })
		             .catch(function(err){
	        			alert('网络错误！')
	       		       })
		            },
		selectMovie(movie,event){
		                 this.images = movie.images
		                 this.title = movie.title
		                 this.casts = movie.casts     
		                let id  = movie.id
		                let url =  '/api/movie/'+id
		                axios.post(url)
		                     .then((response)=>{
		                        this.details = response.data
		                    })
		                      .catch(function(err){
	        			alert('网络错误！')
	       		       })
		                this.$refs.movie.show(); 
		            }
	},
	update:{
		
	},
	components:{
		star,
		movie
	}
}	
</script>

<style>
.search-content{
	position: fixed;
	top: 0;
	left:0;
	bottom: 0;
	width: 100%;
	background: #fff;
	z-index: 34;	
}
.search-content .header{
	display: flex;
	text-align: center;
}
.search-content .header .input{
	flex: 1;
	display: flex;
}
.search-content .header .input span{
	color: #aaa;
	flex:0 0 24px;
	margin-left: 8px;
	margin-right: -2px;
	background: #ece7e7;
	vertical-align: middle;
	 border-top-left-radius: 8px;
     	 border-bottom-left-radius: 8px;
}
.search-content .header .input input{
	flex: 1;
	background: #ece7e7;
	height: 28px;
	outline: none;
	 border-top-right-radius: 8px;
      	border-bottom-right-radius: 8px;
      
}
.search-content .header .cancel{
	flex: 0 0 60px;
	color: #036AFF;
}
.search-content .result-warpper {
	width: 94%;
	margin: 0 auto;
}
.search-content .result-warpper .result-total{
	color: #CAC7C7;
	font-size: 14px;
	text-align: left;
	margin: 10px 0;
}
.search-content .result-warpper .result-list{
	width: 100%;
	display: flex;
	padding: 10px 0 ;
	border-bottom: 1px solid  #c8c7cc;
}
.result-list .img{
	flex: 0 0 70px;
}
.result-list .content{
	flex: 1;
}
.result-list .content h2{
	color: #090909;
	font-size: 18px;
}
.result-list .content p{
	font-size: 14px;
	color: #CAC7C7;
	line-height: 120%;
}

.result-list .content span{
	margin: 0 2px;
}
.result-list .star-content{
    position: relative;
    margin: 4px 0 2px;
}
.result-list .star-content .num{
    position: absolute;
    left: 70px;
    top:0px;
    font-size: 10px;
    color: #CAC7C7;
  }
 .result-list .no-average{
 	margin: 4px 0 2px;
 }
 .curtain{
     width: 101%;
    top: 0;  
    bottom:0;  
    position:fixed;  
    overflow-y:scroll;  
    overflow-x:hidden;  
    background:#fff;
    padding-bottom: 60px;
  }
</style>