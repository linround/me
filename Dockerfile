
# 基础镜像，基于golang的alpine镜像构建--编译阶段
FROM node:alpine AS builder


WORKDIR /me
# 将所有源文件复制到容器中
COPY . .

# 安装依赖包,编译代码并输出
RUN npm install && npm run build


# 使用 alpine 镜像
FROM node:alpine
WORKDIR .

# 复制构建好的可执行文件到镜像中
COPY --from=builder /me/.next /.next

# 丛编译容器中复制配置文件 到容器中
COPY --from=builder /me/package.json /package.json





# RUN 是在构建时执行的，CMD命令是在开启时执行的
# 设置服务入口
CMD ["npm","run","start"]
# 开启服务之后在暴露端口
EXPOSE 3000
