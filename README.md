<div id="top"></div>
<div align="center">
    <img src="./public/img/app.gif">
</div>

# Pantry Tracker Website

## Table of Contents
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#key-features">Key Features</a></li>
      </ul>
    </li>
    <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#clone-the-repository">Clone the Repository</a></li>
        <li><a href="#install-dependencies">Install Dependencies</a></li>
        <li><a href="#run-the-application-locally">Run the Application Locally</a></li>
      </ul>
    </li>
    <li>
      <a href="#docker-setup">Docker Setup</a>
      <ul>
        <li><a href="#create-a-dockerfile">Create a Dockerfile</a></li>
        <li><a href="#build-and-run-the-docker-container">Build and Run the Docker Container</a></li>
      </ul>
    </li>
    <li>
      <a href="#deployment-to-aws-app-runner">Deployment to AWS App Runner</a>
      <ul>
        <li><a href="#push-docker-image-to-aws-ecr">Push Docker Image to AWS ECR</a></li>
        <li><a href="#deploy-to-aws-app-runner">Deploy to AWS App Runner</a></li>
      </ul>
    </li>
    <li><a href="#conclusion">Conclusion</a></li>
    <li><a href="#future-improvements">Future Improvements</a></li>
  </ol>
</details>


## About The Project
Pantrify: Simplify Your Pantry Management App | Add, Edit, Delete, and Search Items

Your ultimate pantry management solution. 
    
### Key Features
- Page Navigation: The ability to navigate between pages seamlessly.
- Add new pantry items easily.</li>
- Delete items you no longer need.
- Edit existing items for accurate tracking.
- Search for items quickly to find what you need.

### Overview

* [Repo Codes](https://github.com/ijayhub/pantry-tracker-app)
* [Hosted Link](https://pantry-tracker-app-delta.vercel.app/)

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase Console](https://firebase.google.com/)


<p align="right">(<a href="#top">back to top</a>)</p>

### Getting Started

To get a local copy up and running, follow these simple steps:

### Available Scripts

In the project directory, you can run:

`npm run dev`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

You may also see any lint errors in the console.

<p align="right">(<a href="#top">back to top</a>)</p>

# Contanization of the application

## Technologies Used

- Frontend: Next.js, React, Tailwind CSS.

- Backend: Firebase (Firestore for database).

- Deployment: AWS App Runner, AWS Elastic Container Registry (ECR), Docker.

<p align="right">(<a href="#top">back to top</a>)</p>

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en)

- [Docker](https://www.docker.com/)

- VsCode (IDE)
<p align="right">(<a href="#top">back to top</a>)</p>

### Clone the Repository
```
git clone https://github.com/ijayhub/pantry-tracker-app.git
cd pantry-tracker-app
```
 ### Install Dependencies
```
npm install
```
<p align="right">(<a href="#top">back to top</a>)</p>

### Run the Application Locally
```
npm start
```
The app will be available at `http://localhost:3000/`.

<p align="right">(<a href="#top">back to top</a>)</p>

### Docker Setup

To containerize the application for deployment:

### Create a Dockerfile

```
FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
```
<p align="right">(<a href="#top">back to top</a>)</p>

### Build and Run the Docker Container

```
docker build -t pantry-tracker-app .
docker run -p 3000:3000 pantry-tracker-app
```
<p align="right">(<a href="#top">back to top</a>)</p>

## Deployment to AWS App Runner

### Push Docker Image to AWS Elastic Container Registry (ECR)
```
aws ecr create-repository --repository-name pantry-tracker-app
aws ecr get-login-password --region <your-region> | docker login --username AWS --password-stdin <aws-account-id>.dkr.ecr.<your-region>.amazonaws.com
docker tag pantry-tracker-app:latest <aws-account-id>.dkr.ecr.<your-region>.amazonaws.com/pantry-tracker-app:latest
docker push <aws-account-id>.dkr.ecr.<your-region>.amazonaws.com/pantry-tracker-app:latest
```
<p align="right">(<a href="#top">back to top</a>)</p>

## Deploy to AWS App Runner

- Go to the AWS App Runner Console.

- Create a new service and select Container Registry.

- Choose your ECR repository and select the latest image.

- Configure environment variables and deployment settings.

- Deploy the service.

<p align="right">(<a href="#top">back to top</a>)</p>

## Conclusion

Pantry Tracker App provides an efficient way to manage pantry inventory.

<p align="right">(<a href="#top">back to top</a>)</p>

## Future improvements
- User authentication
- Notifications
- Enhanced UI features.

<p align="right">(<a href="#top">back to top</a>)</p>

For contributions and issues, visit the [GitHub Repository](https://github.com/ijayhub/pantry-tracker-app).

<p align="right">(<a href="#top">back to top</a>)</p>




