# Use the Node.js 14 image
FROM node:20

# Create and change to the /frontend directory
WORKDIR /frontend

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the frontend dev server port
EXPOSE 3000

# Start the frontend server
CMD ["npm", "run", "dev"]