docker pull ghcr.io/wwami-pipeline/nwhcp-front_end:development
docker rm -f front_end || true # mostly for testing because have to remove docker img every time you redeploy

# Run server from docker img
docker run \
-p 80:80 \
--name front_end ghcr.io/wwami-pipeline/nwhcp-front_end:development;
