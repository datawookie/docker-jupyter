FROM jupyter/r-notebook:latest
MAINTAINER Andrew Collier <andrew@exegetic.biz>

USER root

ENV LD_LIBRARY_PATH=/opt/conda/lib/R/lib/

RUN apt-get update && \
    apt-get install -y \
        git \
        wget \
        unzip && \
    apt-get clean -y

RUN echo "options(repos = c(CRAN = 'https://cran.rstudio.com/'), download.file.method = 'libcurl')" >> .Rprofile && \
    R -e 'install.packages(c("littler", "docopt"))' && \
    ln -s /opt/conda/lib/R/library/littler/examples/install2.r /usr/local/bin/install2.r && \
    ln -s /opt/conda/lib/R/library/littler/bin/r /usr/local/bin/r

RUN install2.r -e \
        bookdown \
        rticles \
        rmdshower \
        RSelenium
