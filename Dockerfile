#==================== Building Stage ================================================
# Create the image based on the official Node 8.9.0 image from Dockerhub
FROM node:lts-alpine as node
# Create a directory where our app will be placed. This might not be necessary
RUN mkdir -p /nuxt-app
# Change directory so that our commands run inside this new directory
WORKDIR /nuxt-app
# Copy dependency definitions
COPY package.json /nuxt-app
# Install dependencies using npm
#RUN npm install -g yarn && chmod +x /usr/local/bin/yarn  && yarn
RUN npm install
# Get all the code needed to run the app
COPY . /nuxt-app
# Expose the port the app runs in
EXPOSE 3000
#Add ARG
ARG APP_ENV=dev
ENV APP_ENV=${APP_ENV}
# ENV ENDPOINT_URL=https://claris-backend.artisandigital.tech
# ENV ENDPOINT_URL=https://deestone-backend-xvq2washyq-as.a.run.app
#Build the app
RUN yarn generate:${APP_ENV}

#==================== Setting up stage ====================
# Create image based on the official nginx - Alpine image
FROM nginx:1.13.7-alpine
COPY --from=node /nuxt-app/dist/ /usr/share/nginx/html
COPY ./nginx-nuxt-app.conf /etc/nginx/conf.d/default.conf
