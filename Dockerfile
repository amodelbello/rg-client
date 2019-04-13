FROM node:11
EXPOSE 3001
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN yarn install
CMD ["yarn", "dev", "-p", "3001"]