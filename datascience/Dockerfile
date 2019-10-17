FROM jupyter/datascience-notebook:1386e2046833
MAINTAINER Andrew Collier <andrew@exegetic.biz>

# ENV JUPYTER_ENABLE_LAB yes

USER root

RUN apt-get update && \
    apt-get install -y -qq \
        tesseract-ocr

USER $NB_UID

RUN pip install RISE && \
    jupyter-nbextension install rise --py --sys-prefix && \
    pip install \
      backoff \
      selenium \
      psycopg2-binary \
      opencv-python \
      opencv-contrib-python \
      imutils \
      pillow \
      pytesseract

