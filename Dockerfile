# --- Stage 1: Build Angular App ---
FROM node:22-alpine as build-stage

WORKDIR /app

# Copy package files và cài đặt dependencies
COPY package*.json ./
RUN npm ci

# Copy toàn bộ source code
COPY . .

# Build project (Output sẽ nằm trong folder dist/my-app)
RUN npm run build -- --configuration production

# --- Stage 2: Serve with Nginx ---
FROM nginx:alpine as production-stage

# Copy file cấu hình Nginx custom vào container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts từ stage 1 sang thư mục phục vụ của Nginx
# Lưu ý: Kiểm tra kỹ folder output, Angular mới thường là dist/my-app/browser
COPY --from=build-stage /app/dist/my-app/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]