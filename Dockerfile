FROM nginx

COPY /public /usr/share/nginx/html
COPY vhost.conf /etc/nginx/conf.d/default.conf

# install certbot
RUN apt-get update && apt-get install certbot python-certbot-nginx -y

CMD ["nginx", "-g", "daemon off;"]
