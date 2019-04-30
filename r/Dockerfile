FROM jupyter/r-notebook:ae5f7e104dd5
MAINTAINER Andrew Collier <andrew@exegetic.biz>

USER root

RUN apt-get update && \
    apt-get install -y \
	build-essential \
        git \
        wget \
        unzip \
	# libgdal-dev \
	# libgeotiff-dev \
	# libpcre3-dev \
	# libgeos-dev \
	# libgif-dev \
	# libjpeg-dev \
	# libjbig-dev \
	# liblapack-dev \
	# libminizip-dev \
	# libcurl3-gnutls \
	# libgnutls30
    # apt-get clean -y

RUN echo "options(repos = c(CRAN = 'https://cran.rstudio.com/'), download.file.method = 'libcurl')" >> .Rprofile && \
    R -e 'install.packages(c("littler", "docopt"))' && \
    ln -s /opt/conda/lib/R/library/littler/examples/install2.r /usr/local/bin/install2.r && \
    ln -s /opt/conda/lib/R/library/littler/bin/r /usr/local/bin/r

# RUN conda install -c conda-forge r-essentials geos r-rgeos r-rgdal
#RUN conda install --yes \
#	r-essentials \
#	geos \
#	r-rgeos \
#	r-rgdal

# ENV LD_LIBRARY_PATH=/opt/conda/lib/R/lib/
# ENV R_LIBRARY_PATH=/opt/conda/lib/R/library/

#RUN install2.r -l $R_LIBRARY_PATH -e \
#	rgdal

#RUN install2.r -l $R_LIBRARY_PATH -e \
#	# Web scraping
#        RSelenium \
#	# Spatial
#	rgdal \
#	geosphere \
#	# Time series
#       prophet

