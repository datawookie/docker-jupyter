# Keras Notebook

## Build Image

```
docker build -t pyspark-notebook .
```

## Running

On AWS:

```
docker run -d --rm --name keras --net=host --user 500 -v $PWD:/home/jovyan/ datawookie/jupyter-keras
```

Local:

```
docker run -d --rm --name keras -p 8888:8888 -v $PWD:/home/jovyan/ datawookie/jupyter-keras
```
