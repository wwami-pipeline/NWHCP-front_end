# run on webserver
docker run -d --network host --rm --pull=always --name nwhcpfrontend ghcr.io/wwami-pipeline/nwhcp-front_end:development

docker run --network host --rm --pull=always --name nwhcpfrontend ghcr.io/wwami-pipeline/nwhcp-front_end:development-nightly