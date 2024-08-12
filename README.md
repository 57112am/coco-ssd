# Coco ssd Model

## Running the server

1) Clone the project repository

```
git clone https://github.com/57112am/coco-ssd.git
```

2) Navigate to server directory 

```
cd server
```

3) Build the docker image

```
docker build -t <container_name> .
```

4) Run the server 

```
docker run -p 5000:5000 <container_name>
```

Replace the <container_name> with the name you used during the docker build step

## Running the client

1) Navigate to client directory

```
cd client
```

2) Install dependencies

```
npm install
```

3) Run the frontend

```
npm run dev
```

4) Open a web-browser and navigate to http://localhost:3006. The application should be running there.