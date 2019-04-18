FROM jupyter/tensorflow-notebook:latest
MAINTAINER Andrew Collier <andrew@exegetic.biz>

USER root
# WORKDIR /

RUN apt-get update && \
    apt-get install -y \
        build-essential \
        pkg-config \
        git \
        wget \
        unzip && \
    apt-get clean -y

RUN mkdir .keras
COPY keras.json .keras

# RUN pip install keras
