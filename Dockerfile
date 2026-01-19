# ... (Stage 1 Build Angular giữ nguyên) ...
FROM node:22-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Lưu ý: check lại folder output trong angular.json, thường là dist/my-app/browser hoặc dist/my-app
RUN npm run build -- --configuration production

# ... (Stage 2 Nginx) ...
FROM nginx:alpine as production-stage

# [THAY ĐỔI QUAN TRỌNG]
# Xóa file config mặc định cũ
RUN rm /etc/nginx/conf.d/default.conf

# Copy file nginx.conf mới của mình đè vào file cấu hình gốc
COPY nginx.conf /etc/nginx/nginx.conf

# Copy source code đã build
COPY --from=build-stage /app/dist/my-app/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]