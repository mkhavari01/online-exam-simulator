# online-exam-simulator


How To Run the Project:
-----------------------
get into the directory of project using terminal
1. docker-compose up
2. docker cp .\default.conf client:/etc/nginx/conf.d/default.conf
3. docker exec -it client /bin/sh
4. nginx -s reload

visit <a href="http://localhost:80">http://localhost:80</a>
