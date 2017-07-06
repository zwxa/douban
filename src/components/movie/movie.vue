<template>
    <div class="movie" v-show="showFlag" >
    	<div class="warpper">
    	<div class="img">
    		<img :src="images.large">
    		<div class="back" @click="hide">
		<i class=" icon-angle-left"></i>
		</div>
    	</div>
    	<div class="movie-desc" >
    		<div class="content">
    		<h1 class="title">{{title}}</h1>
    		<div class="type" >
    		<span>{{movie.attrs.year[0]}}/</span><span v-for="item in movie.attrs.movie_type">{{item}}/</span><span>{{movie.attrs.country[0]}}</span>
    		<p class="pubdate">上映时间：{{movie.attrs.pubdate[0]}}</p>
    		<p class="pubdate">片长：{{movie.attrs.movie_duration[0]}}</p>
    		</div>
    		</div>
    		<div class="average">
    			<div class="content">
    			<p>豆瓣评分</p>
    			<h2>{{movie.rating.average}}</h2>
    			<star :average="movie.rating.average"></star>
    			<p>{{movie.rating.numRaters}}人</p>
    			</div>
    		</div>
    	</div>
    	<div class="summary">
    		<p class="title">剧情简介</p>
    		<p class="desc">{{movie.summary}}</p>
    	</div>
    	<div class="cast">
    		<p class="title">影人</p>
    		<div class="pic-wrapper" ref="picWrapper">
			<ul class="pic-list" ref="picList">
				<li class="pic-item" v-for="pic in casts">
					<img width="70" height="100" :src="pic.avatars.large">
					<span>{{pic.name}}</span>
				</li>
			</ul>
		</div>
    	</div>
    	</div>
    </div>
</template>

<script>
import axios from 'axios';
import star from '../../components/star/star.vue';
    export default{
    	props:{
    	    movie:{

    	    },
    	    images:{

    	    },
    	    title:{},
    	    casts:{}
    	    
    	},
    	data(){
    	    return{
    	    	showFlag:false,
    	    }
    	},
    	methods:{
    	    show(){
    	    	this.showFlag=true   	    	
    	    },
    	    hide(){
    	    	this.showFlag=false
    	    }
    	},
    	components:{
    		star
    	}
    }
</script>
<style>
.movie{
	position: fixed;
	top:0;
	left: 0;
	background:#fff;
	width: 100%;
	z-index: 33;
}
.movie .warpper{
     top: 0;  
    bottom:0;  
    position:fixed;  
    overflow-y:scroll;  
    overflow-x:hidden;  
    background:#fff;
    padding-bottom: 60px;

}
.movie .img{
	width: 100%;
	height: 260px;
	background-color: #aaa;
	position: relative;
}
.movie .img img{
	position: absolute;
	top:50%;
	left: 50%;
	width: 140px;
	height: 190px;
	transform: translate(-50%,-50%);
}
.back{
	position:absolute;
	top:5px;
	left:0;
}
.back .icon-angle-left{
	display:block;
	padding:10px;
	font-size:20px;
	color:#fff;
}
.movie-desc {
	display: flex;
	margin: 14px;
	padding-bottom: 20px;
	border-bottom: 1px solid #CAC7C7;

}
.movie-desc .content{
	flex: 1
}

.movie-desc .content .title{
	font-size: 24px;
	margin-bottom: 6px;
	line-height: 120%;
}
.movie-desc .content .pubdate{
	font-size: 12px;
	color: #CAC7C7;
	line-height: 120%;
}
.movie-desc .type span{
	font-size: 12px;
	color: #CAC7C7;
	line-height: 120%;
}
.movie-desc .average{
	position: relative;
	flex: 0 0 90px;
	border: 1px solid #ccc;
	box-shadow: -2px 2px #ccc;
	text-align: center;
	line-height: 100%;
}
.movie-desc .average .content{
	width: 100%;	
	position: absolute;
	top:50%;
	left: 50%;
	transform: translate(-50%,-50%);	
	
}
.movie-desc .average p{
	font-size: 12px;
	color: #CAC7C7;
}	
.movie-desc .average h2{
	margin: 4px 0;
	font-size: 20px;
	color: #090909;
}
.movie .summary{
	margin: 14px;
}
.movie .summary .title{
	font-size: 14px;
	color: #CAC7C7;
	margin-bottom: 14px;
}
.movie .summary .desc{
	font-size: 14px;
	color: #090909;
	line-height: 120%;
	font-family: Helvetica, Arial, sans-serif;
	white-space: pre-line;
}
.movie .cast{
	margin: 14px;
}
.cast .title{
	font-size: 14px;
	color: #CAC7C7;
	margin-bottom: 14px;
}
.cast .pic-wrapper{
	width: 100%;
	overflow: hidden;
	white-space: nowrap;
}
.cast .pic-list{
	font-size: 0;
}
.cast .pic-wrapper .pic-item{
	display: inline-block;
	margin-right: 8px;
	width: 70px;
}
.cast .pic-wrapper .pic-item span{
	color: #CAC7C7;
	text-align: center;
	font-size: 12px;
	display: block;
	overflow: hidden;
	margin: 4px 2px;
	width:58px; white-space:nowrap; text-overflow:ellipsis; -o-text-overflow:ellipsis; overflow:hidden;
}
					
			
</style>