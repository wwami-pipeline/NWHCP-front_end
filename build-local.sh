# compile
npm run build

# make docker
docker build -t localbuild/nwhcp-front_end . # update to your username/nwhcp-front_end
# docker rm -f front_end || true # mostly for testing because have to remove docker img every time you redeploy

# Run server from docker img
# Copy the /etc/letsencrypt folder from server to local
docker run \
--rm \
--publish 80:80 \
--publish 443:443 \
--network dockernet \
-v /etc/letsencrypt:/etc/letsencrypt \
--name nwhcp-front_end localbuild/nwhcp-front_end
