FROM node:22-alpine

WORKDIR /app

# ১. Root & Workspaces package.json copy
COPY package.json yarn.lock ./
COPY client/package.json ./client/
COPY server/package.json ./server/

# ২. Dependencies install
RUN yarn install --frozen-lockfile --network-timeout 600000

# ৩. All source code copy
COPY . .

# ৪. TypeScript build
RUN yarn build

EXPOSE 8080

CMD ["yarn", "start"]