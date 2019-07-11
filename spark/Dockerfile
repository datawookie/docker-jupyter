FROM jupyter/pyspark-notebook:41e066e5caa8
MAINTAINER Andrew Collier <andrew@exegetic.biz>

USER root

RUN wget http://central.maven.org/maven2/org/apache/hadoop/hadoop-aws/2.7.3/hadoop-aws-2.7.3.jar && \
    wget http://central.maven.org/maven2/com/amazonaws/aws-java-sdk/1.7.4/aws-java-sdk-1.7.4.jar && \
    wget http://central.maven.org/maven2/org/apache/spark/spark-streaming-kafka-0-8-assembly_2.11/2.3.1/spark-streaming-kafka-0-8-assembly_2.11-2.3.1.jar && \
    wget http://central.maven.org/maven2/org/xerial/sqlite-jdbc/3.28.0/sqlite-jdbc-3.28.0.jar && \
    mv *.jar /usr/local/spark/jars

RUN pip install --no-cache-dir \
    kafka \
    findspark \
    graphviz \
    pydot \
    jupyter_contrib_nbextensions

RUN apt-get update && \
    apt-get install -y -qq \
        zip

# Assuming that Python 3 is installed at /usr/bin/python3 on the cluster.
#
ENV PYSPARK_PYTHON /usr/bin/python3
#
# Make link to same location in container.
#
RUN ln -s /opt/conda/bin/python3 /usr/bin/python3

# Add some sample data.
#
RUN mkdir /data && cd /data && \
    wget -O developers.csv https://raw.githubusercontent.com/apache/spark/master/examples/src/main/resources/people.csv && \
    wget https://raw.githubusercontent.com/apache/spark/master/examples/src/main/resources/employees.json && \
    wget https://github.com/apache/spark/raw/master/examples/src/main/resources/users.parquet && \
    wget https://raw.githubusercontent.com/datawookie/data-diaspora/master/olympic-games/olympic-athlete-events.csv && \
    wget http://stat-computing.org/dataexpo/2009/airports.csv && \
    wget http://stat-computing.org/dataexpo/2009/carriers.csv && \
    wget -qO - http://stat-computing.org/dataexpo/2009/2008.csv.bz2 | bzip2 -dc | awk -F, 'BEGIN {OFS=","} {if ($2==2) print $2, $3, $4, $9, $10, $17, $18, $19, $6, $13, $15}' >flights.csv && \
    echo 'create table flights (\n\
      mon int,\n\
      dom int,\n\
      dow int,\n\ 
      carrier varchar(5),\n\
      flight int,\n\
      orig varchar(3),\n\
      dest varchar(3),\n\
      mile int,\n\
      depart int,\n\
      duration int,\n\
      delay int\n\
    );\n.separator ,\n.import flights.csv flights' | sqlite3 flights.db && \
    rm flights.csv

USER $NB_UID

# Configure Unofficial Jupyter Notebook Extensions (installed above).
#
# https://jupyter-contrib-nbextensions.readthedocs.io/en/latest/index.html
#
RUN jupyter contrib nbextension install --user && \
    jupyter nbextension enable export_embedded/main

RUN mkdir /home/$NB_USER/.jupyter/custom
COPY custom.js /home/$NB_USER/.jupyter/custom

