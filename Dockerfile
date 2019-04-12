FROM node:11
EXPOSE 3001
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN rm -r node_modules && yarn
CMD ["yarn", "start"]