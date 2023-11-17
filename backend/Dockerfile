FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm clean-install
RUN npm install node-fetch@2

COPY . .
COPY entrypoint.sh /app/

EXPOSE 5000

CMD ["./entrypoint.sh"]
