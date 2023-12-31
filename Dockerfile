# JDK sürümü
FROM openjdk:17

# Bilgilerndirme
LABEL maintainer="hamitmizrak@gmail.com"

# Çevresel Değişkenler
ENV APP_NAME="EGM Backend n-tier Architecture"
ENV VERSION="v1.0.0"
ENV PORT="4444"

# Çıktı almak
## RUN apt-get update && apt-get upgrade -y && apt-get dist-upgrade -y
RUN echo "App name: $APP_NAME"
RUN echo "Version : $VERSION"
RUN echo "Port    : $PORT"

# Dizin oluştur
#WORKDIR /var/www/html

# Localdeki dosyaları image dosyasındaki ile yaz
#COPY . /var/www/html


# Persist Data (Kalıcık Veri)
VOLUME /tmp

# Port
EXPOSE 4444

# Değişken
ARG JAR_FILE=/target/*.jar

# Değişkeni ekle
ADD ${JAR_FILE} blog_react

# Container çalışıyor mu çalışmıyor mu
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost || exit 1

ENTRYPOINT ["java","-jar","/blog_react"]


# docker image build -t imageAdi .
# Container çalışırken ne çalışsın
# CMD []