# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY --chown=node:node package.json .
RUN npm install

# Copy the source code
COPY --chown=node:node . .

# Build TypeScript code
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["node", "dist/index.js"]
