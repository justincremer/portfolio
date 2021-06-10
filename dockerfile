# build environment
FROM node:12-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json .
COPY yarn.lock .
RUN yarn -s
RUN yarn global add react-scripts -s
COPY . ./

# start
CMD ["yarn", "start"]

