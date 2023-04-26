# online-exam-simulator


How To Run the Project:
-----------------------
docker-compose up
docker cp [path to main directory]\default.conf client:/etc/nginx/conf.d/default.conf
docker exec -it client /bin/sh
nginx -s reload

