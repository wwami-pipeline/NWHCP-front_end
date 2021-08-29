# compile
npm run build

# make docker
docker build -t loibucket/nwhcp-front_end . # update to your username/nwhcp-front_end
docker rm -f front_end || true # mostly for testing because have to remove docker img every time you redeploy

# Run server from docker img
docker run \
-p 80:80 \
--name front_end loibucket/nwhcp-front_end;
