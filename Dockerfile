FROM node:11
EXPOSE 3001
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
ENV CHOKIDAR_USEPOLLING true
CMD ["yarn", "dev", "-p", "3001"]