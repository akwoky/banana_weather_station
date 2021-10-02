### Starting the container in development mode

```
docker run -it -v ${PWD}/src:/root -p 80:3000 -w /root node /bin/bash
```