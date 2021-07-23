# Message queue test

This is an interview test.


## Installation and usage


```bash
git clone https://github.com/HosseinDotLink/message-queue-test.git

cd message-queue-test
```
You can update ```mongodb url``` and ```message queue server address``` in config files. Then start to build and run project on docker:

```bash
docker build -t root/mqTest .

docker run -p 3000:3000 -d root/mqTest
```

## Usage

Finally store users to db and automatically add a message on message queue server by post a request to ```localhost:3000/user/add```
```bash
curl --location --request POST 'localhost:3000/user/add' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstName": "sample first name",
    "lastName": "sample last name",
    "mobileNumaber": "09000000000"
}'
```