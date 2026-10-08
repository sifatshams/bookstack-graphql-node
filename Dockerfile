# ---- Stage 1: Dependencies & Build ----
    FROM node:22-alpine AS builder
    WORKDIR /app
    
    # Package files copy
    COPY package.json yarn.lock ./
    COPY client/package.json ./client/
    COPY server/package.json ./server/
    
    # All dependencies install
    RUN yarn install --frozen-lockfile --network-timeout 600000
    
    # Copy source code
    COPY . .
    
    # Build step
    # RUN yarn workspace client build
    # RUN yarn workspace server build
    
    # Production dependencies only
    RUN yarn install --production --ignore-scripts --prefer-offline
    
    # ---- Stage 2: Final Production Image ----
    FROM node:22-alpine AS runner
    WORKDIR /app
    
    ENV NODE_ENV=production
    
    # Copy root configurations
    COPY package.json yarn.lock ./
    COPY client/package.json ./client/
    COPY server/package.json ./server/
    
    # Copy built app and node_modules from builder
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/client ./client
    COPY --from=builder /app/server ./server
    
    EXPOSE 8080
    
    CMD ["yarn", "start"]