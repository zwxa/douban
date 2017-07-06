<template>
<div>
    <div class="star star-24">
     	<span  v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span >
     		
     </div>
</div>
</template>

<script>
const LENGTH =5;
const CLS_ON='on';
const CLS_HALF='half';
const CLS_OFF = 'off';
	export default {
	      props :{	      	
	      	average:{
	      	      
	      	}
	      },
	      computed : {
	      	itemClasses() {
		       let result = [];
		       let average = Math.round(this.average)/2;
		       let hasDecimal = average % 1!==0;
		       let integer = Math.floor(average);
		       for(let i=0;i<integer;i++){
		       	result.push(CLS_ON);
		       }
		       if (hasDecimal){
		       	result.push(CLS_HALF);
		       }
		       while(result.length<LENGTH) {
		       	result.push(CLS_OFF);
		       }
		       return result;	       	
		}
	      }
	};
</script>

<style>
.star{font-size:0;margin: 0;padding: 0;height: 10px;margin-bottom: 6px;}
 .star .star-item{
 	display : inline-block;
       	background-repeat :no-repeat;
}
 .star-24 .star-item{
	 width:10px;
       	 height: 10px;
       	 margin-right:3px;
       	 background-size:10px 10px;  	    
 }

  .on{
  	background-image: url('star24_on@2x.png');
  }
  .half{
  	background-image: url('star24_half@2x.png');
  }
  .off{
  	background-image: url('star24_off@2x.png');
  }

       	   
</style>