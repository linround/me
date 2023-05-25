docker 生成镜像
> docker build -t bright_moon .

docker 镜像作为容器运行  
> docker run -d -p 3000:3000 bright_moon

docker 更新镜像
- 获取容器ID
  > docker ps
- 暂停之前运行的容器
  > docker stop <the-container-id>
  > 
- 移除之前的容器
  > docker rm <the-container-id>
- 重复前两个步骤：`生成镜像`、`镜像作为容器运行`
