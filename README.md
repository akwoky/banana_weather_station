### Starting the container in development mode

```
docker run -it -v ${PWD}/src:/root -p 80:3000 -w /root node /bin/bash
```

### Sending data to the server

```
curl -X POST http://localhost/data -H 'Content-Type: application/json' -d '{"windspeed": 22,"humidity": 60, "temperature": 23}'
```