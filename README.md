# douban

> 仿豆瓣电影app
> www.zwenx.cn:9090 预览

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## API
```bash
/v2/movie/search?q={text} 电影搜索api；
/v2/movie/in_theaters 正在上映的电影；
/v2/movie/coming_soon 即将上映的电影；
/v2/movie/subject/:id 单个电影条目信息。
```
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
