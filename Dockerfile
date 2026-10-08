FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock ./
COPY client/package.json ./client/
COPY server/package.json ./server/

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 8080

CMD ["yarn", "start"]
