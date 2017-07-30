# Use an official Python runtime as a parent image
FROM node:boron

# Set the working directory to /app
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /app
ADD /public /usr/src/app

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["node", "app.js"]