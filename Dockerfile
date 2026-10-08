FROM node:22-alpine

WORKDIR /app

# 1. Root & Workspace package files copy
COPY package.json yarn.lock ./
COPY client/package.json ./client/
COPY server/package.json ./server/

# 2. Dependencies install
RUN yarn install --frozen-lockfile --network-timeout 600000

# 3. Source files copy (Entire monorepo copy hobe)
COPY . .

# 4. Prisma client generate (Jodi server-e Prisma thake)
# RUN yarn workspace server prisma generate

EXPOSE 8080

CMD ["yarn", "start"]