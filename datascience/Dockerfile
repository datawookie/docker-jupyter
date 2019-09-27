FROM jupyter/datascience-notebook:1386e2046833
MAINTAINER Andrew Collier <andrew@exegetic.biz>

# ENV JUPYTER_ENABLE_LAB yes

RUN pip install RISE && \
    jupyter-nbextension install rise --py --sys-prefix && \
    pip install selenium
