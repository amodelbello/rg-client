FROM node:11
EXPOSE 3000
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
CMD ["yarn", "dev", "-p", "3000"]