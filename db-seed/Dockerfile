FROM mongo:latest
RUN mkdir -p /seed-data
WORKDIR /seed-data
COPY things.json /seed-data/things.json
CMD mongoimport --host db --db things --collection things --type json --file /seed-data/things.json --jsonArray
