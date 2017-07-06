<template>
<div>
    <header>
      <div class="header">
        <div class="location">北京</div>
        <div class="search">
          <span><i class=" icon-search"></i></span>
          <input type="text" name="search" placeholder="电影/电视剧/影人" @click="selectInput">
        </div>
      </div>
    </header>
    <div class="tab">
      <div class="tab-item">
          <router-link to="/in" >正在热映</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/coming" >即将上映</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <search ref="search"></search>
</div>
</template>

<script>
import search from '../src/components/search/search.vue'
  export default{
          methods:{
            selectInput(){
               this.$refs.search.show(); 
            }
          },
          components:{
            search
          }
  }
</script>

<style>

header{
  width: 98%;
}
  .header{
    width: 100%;
    margin-top: 2px;
    display: flex;
    justify-content: flex-end;
    height: 28px;
    line-height:28px;
  }
   .header .location{
    flex:1;
    text-align: center;
   }
  .header .search{
    display: flex;
    flex: 0 0 84%;
    background: #ece7e7;
    opacity: .4;
    border-radius: 8px;
    justify-content: flex-start;
  }
   .header .search span {
    margin-left: 6px;
    color: #aaa;
    letter-spacing: 2px;
   }
    .header .search input{
      flex:1;
      background: #ece7e7;
    opacity: .4;
      outline: none;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .tab-item{
    flex:1;
    text-align: center;
  }
 .router-link-active{
    border-bottom: 1px solid #040000;
    color: #040000 !important;
  }

.tab-item a{
    display: block;
    font-size: 14px;
    color: #897F7F;
    font-weight: normal;
  }
</style>
