- Launch EC2 instance and download the .pem file
- Execute the following command in the directory of .pem file:
  ```sh
  chmod 400 KARTIK.pem
  ```
  ```sh
  ssh -i "KARTIK.pem" ubuntu@ec2-13-127-35-54.ap-south-1.compute.amazonaws.com
  ```
- Once successfully SSHed, install nvm and then NodeJS on the system via terminal.
  ```sh
  npx express-generator
  ```
  ```sh
  npm i && DEBUG=server:* npm start
  ```
  Now you can go to url and server will be running.


