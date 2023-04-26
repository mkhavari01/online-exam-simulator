# online-exam-simulator


How To Run the Project:
-----------------------
1. docker-compose up
2. docker cp [path to main directory]\default.conf client:/etc/nginx/conf.d/default.conf
3. docker exec -it client /bin/sh
4. nginx -s reload

