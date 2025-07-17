# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files first (better cache)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port (Render sets this via ENV)
EXPOSE 8000

# Start the server
CMD ["node", "server.js"]
