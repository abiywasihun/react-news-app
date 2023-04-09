# Use an official Node.js runtime as a parent image
FROM node:current-alpine3.14
# Set working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code
COPY . .
# Expose port 3000 (default for a React app)
EXPOSE 3000
# Set command to run when container starts
CMD ["npm", "start"]