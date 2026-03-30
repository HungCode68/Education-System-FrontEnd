FROM nginx:alpine

# Xóa file config mặc định cũ
RUN rm -rf /etc/nginx/conf.d/*

# Copy file nginx.conf của dự án đè vào hệ thống
COPY nginx.conf /etc/nginx/nginx.conf

# COPY TRỰC TIẾP thư mục dist đã được build sẵn từ GitHub vào Nginx
COPY dist/my-app/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]