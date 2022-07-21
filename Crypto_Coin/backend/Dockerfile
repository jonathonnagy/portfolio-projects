FROM node:14-alpine
ADD . /appDir
WORKDIR /appDir
COPY package.json .
RUN npm install
CMD ["npm", "run", "dev"]
EXPOSE 4000

