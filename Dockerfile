FROM node:25.2.1-alpine AS node

WORKDIR app
COPY package.json ./
COPY dist dist
EXPOSE 7799
CMD ["npm", "run", "start"]