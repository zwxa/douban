<template>
<div >
    <div class="movie-warpper box-shadow-1px" v-for="(item,index) in subjects" >
    	<div class="desc-box" >   	    
    	    <div class="content" @click="selectMovie(item,$event)">
    	    	<h2 class="name">{{item.title}}</h2>

    	    	<span class="directors">导演：<p class="casts">{{item.directors[0].name}}</p></span><br>
                         <span class="directors">主演：<p class="casts" v-for="cast in item.casts">{{cast.name}}</p></span>
                         <p class="count">{{item.collect_count}}人看过</p>
    	    </div>
    	    <div class="img" @click="selectMovie(item,$event)">
    	    	<img :src="item.images.small">
    	    </div>
    	    <div class="want">
    	    	<p class="btn">想看</p>
    	    </div>
    	</div>
    </div>
    <movie :movie="details" :images="images" :title="title" :casts="casts" ref="movie" ></movie>
</div>
</template>
<script >
import star from '../../components/star/star';
import movie from '../../components/movie/movie.vue'
import axios from 'axios';
    export default{
        data(){
        	return{
        	    subjects:{},
                details:{

                },
                images:{},
                title:{},
                casts:{}
        	}     	
        },
        created(){
        	axios.post('/api/movie/coming_soon')
        	        .then((response)=>{
        	        	this.subjects = response.data.subjects
        	        })
                    .catch(function(err){
                        alert('网络错误！')
                       })
        },
        methods:{
             selectMovie(item,event){
                 this.images = item.images
                 this.title = item.title
                 this.casts = item.casts     
                let id  = item.id
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
        components :{
        	star,
            movie
        }
    }
</script>
<style type="text/css">
.movie-warpper{
	width: 100%;
	height: 120px;
	line-height: 120px;
	position:relative;
}
.movie-warpper .desc-box{
	justify-content: space-between;
	width: 90%;
	display: flex;
	flex: 1;	
	height: 100px;
	position: absolute;
	top: 10px;
	left:5%;
}
.movie-warpper .desc-box .img{
	flex: 0 0 65px;
	order: -1;
}
.movie-warpper .desc-box .want{
	flex: 0 0 65px;
	position: relative;
}
.movie-warpper .desc-box .content{
	flex: 1;
            font-size: 0;
	line-height: initial;
	overflow: hidden;
	margin-left: 10px;
}
.star-content{
    position: relative;
}
 .desc-box .content .star-content .num{
    position: absolute;
    left: 70px;
    top:0px;
    font-size: 10px;
    color: #CAC7C7;
  }
.movie-warpper .name{	
	font-size: 15px;
	display: block;
	width:190px; white-space:nowrap; text-overflow:ellipsis; -o-text-overflow:ellipsis; overflow:hidden;
}
.movie-warpper .directors{
        font-size: 10px;
        color: #CAC7C7;
}
.movie-warpper .casts{
    display: inline-block;
        font-size: 10px;
        color: #CAC7C7;
        margin-right: 4px;
}
.movie-warpper .count{
    font-size: 10px;
    color: #272727;
    margin-top: 2px;
}
.want .btn {
    text-align:center;
    color: #F8700B;
    border-radius: 2px;
    width: 42px;
    line-height: initial;
    display: inline;
    font-size: 14px;
  position: absolute;
  left:50%;top:50%;
  transform: translate(-50%,-50%);
    border: 1px solid #F8700B;
  
}
.no-average p{
    display: block;
    line-height: 16px;
    height: 16px;
   color: #CAC7C7;
   font-size: 10px;
}
.box-shadow-1px {
  box-shadow: inset 0px -1px 1px -1px #c8c7cc;
}
</style>