# Use an official Node.js runtime as a parent image
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a lightweight web server for serving static files
FROM node:18-alpine AS runner
WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app ./

# Expose the port Next.js runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
