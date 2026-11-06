# Chùa Tâm An — máy chủ nhiều người + trang web tĩnh
FROM node:20-alpine
WORKDIR /app
COPY server/package*.json server/
RUN cd server && npm install --omit=dev
COPY . .
RUN rm -f server/data.json
ENV PORT=8080 NODE_ENV=production
EXPOSE 8080
CMD ["node", "server/server.js"]
