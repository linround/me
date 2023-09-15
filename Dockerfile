FROM node:alpine as builder
COPY ./ /app
WORKDIR /app
RUN npm install && npm run build


FROM node:alpine
WORKDIR /app
COPY --from=builder ./app/.next          /app/.next
COPY --from=builder ./app/package.json   /app/package.json

CMD ["npm","run","start"]
EXPOSE 3000
