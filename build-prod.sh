# run on webserver manually to udpate 
docker run -d --rm --network host --pull=always -v /etc/letsencrypt:/etc/letsencrypt --name nwhcpfrontend ghcr.io/wwami-pipeline/nwhcp-front_end:main
