FROM jupyter/tensorflow-notebook:7d427e7a4dde
MAINTAINER Andrew Collier <andrew@exegetic.biz>

ENV OPENCV_VERSION 4.1.0.25

RUN pip install opencv-python==$OPENCV_VERSION opencv-contrib-python==$OPENCV_VERSION

RUN mkdir .keras
COPY keras.json .keras

