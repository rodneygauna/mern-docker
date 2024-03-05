# Dockerfile
# NodeJS and Alpine image
FROM node:20-alpine3.18

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the app files to the container
COPY . .

# Expose the port the app runs
EXPOSE 3001

# Run the app
CMD ["node", "index.js"]