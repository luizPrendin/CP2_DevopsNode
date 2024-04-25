FROM node:lts-alpine3.19
WORKDIR /app-money
COPY . .
EXPOSE 8080
RUN npm install --silent
USER node
CMD ["npm", "start"]
