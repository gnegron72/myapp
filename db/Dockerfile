FROM mongo:latest

RUN mkdir -p /data/db2 \
    && echo "dbpath = /data/db2" > /etc/mongodb.conf \
    && chown -R mongodb:mongodb /data/db2

RUN mongod --fork --logpath /var/log/mongodb.log --dbpath /data/db2/ --smallfiles \
    && mongod --dbpath /data/db2 --shutdown \
    && chown -R mongodb /data/db2

CMD ["mongod", "--smallfiles"]
