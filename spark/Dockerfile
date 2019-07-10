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

USER $NB_UID

# Configure Unofficial Jupyter Notebook Extensions (installed above).
#
# https://jupyter-contrib-nbextensions.readthedocs.io/en/latest/index.html
#
RUN jupyter contrib nbextension install --user && \
    jupyter nbextension enable export_embedded/main

RUN mkdir /home/$NB_USER/.jupyter/custom
COPY custom.js /home/$NB_USER/.jupyter/custom
