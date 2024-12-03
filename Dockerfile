FROM node:alpine

RUN mkdir -p /home/node/app

WORKDIR /home/node/app
COPY . .

ENV ENV production
ENV NODE_ENV production

RUN yarn install --checkfile
RUN yarn global add tsc
RUN yarn build

EXPOSE 5000

CMD [ "yarn", "start" ]