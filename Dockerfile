FROM nginx

COPY /public /usr/share/nginx/html
COPY vhost.conf /etc/nginx/conf.d/default.conf
COPY docker-entrypoint.sh /usr/bin/docker-entrypoint.sh

# install certbot and get cert
RUN apt-get update && apt-get install certbot python-certbot-nginx -y
# RUN certbot certonly --register-unsafely-without-email --agree-tos --preferred-challenges http --nginx -d nwhealthcareerpath.uw.edu

#ENTRYPOINT ["certbot","certonly","--register-unsafely-without-email","--agree-tos","--preferred-challenges=http","--nginx","-d nwhealthcareerpath.uw.edu;"]
CMD ["nginx", "-g", "daemon off;"]
#ENTRYPOINT ["sh","/usr/bin/docker-entrypoint.sh"]
