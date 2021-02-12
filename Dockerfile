FROM node:14.15.4

WORKDIR /code

ENV PORT 8081

COPY /backend/package.json /code/package.json

RUN npm install

COPY /backend /code

EXPOSE 8081

CMD ["node", "server.js"]