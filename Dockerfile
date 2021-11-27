FROM nginx

COPY /public /usr/share/nginx/html
COPY vhost.conf /etc/nginx/conf.d/default.conf

# install cron to enable auto renew
RUN apt-get update && apt-get install cron apt-transport-https -y
# install certbot
RUN add-apt-repository ppa:certbot/certbot
RUN apt-get update && apt-get install certbot python-certbot-nginx -y

CMD ["nginx", "-g", "daemon off;"]
