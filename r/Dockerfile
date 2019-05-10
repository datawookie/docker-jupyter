FROM jupyter/r-notebook:ae5f7e104dd5
MAINTAINER Andrew Collier <andrew@exegetic.biz>

USER root

RUN apt-get update && \
    apt-get install -y \
	build-essential \
        git \
        wget \
        unzip && \
    apt-get clean -y

RUN echo "options(repos = c(CRAN = 'https://cran.rstudio.com/'), download.file.method = 'libcurl')" >> .Rprofile && \
    R -e 'install.packages(c("littler", "docopt"))' && \
    ln -s /opt/conda/lib/R/library/littler/examples/install2.r /usr/local/bin/install2.r && \
    ln -s /opt/conda/lib/R/library/littler/bin/r /usr/local/bin/r

# ENV LD_LIBRARY_PATH=/opt/conda/lib/R/lib/
ENV R_LIBRARY_PATH=/opt/conda/lib/R/library/

RUN install2.r -l $R_LIBRARY_PATH -e \
        # Web scraping
        RSelenium \
        # Time series
        prophet

