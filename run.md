docker 生成镜像
> cd   /usr/local/me

构建一个
> docker build -t me .

docker 镜像作为容器运行  
> docker run -d -p 3000:3000 me

docker 更新镜像
- 获取容器ID
  > docker ps
- 暂停之前运行的容器
  > docker stop <the-container-id>
  > 
- 移除之前的容器
  > docker rm <the-container-id>
- 重复前两个步骤：`生成镜像`、`镜像作为容器运行`


# 项目文件地址
/usr/linyuan/calendarServer
# 优化工具
-[ closure-compiler ](https://github.com/google/closure-compiler)
