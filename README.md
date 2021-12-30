# longlin_vuexdemo_crud

### Description

This is an vuex+vue demo. It includes CRD(Create, Read, Update and Delete) 3 function, and they are integrated into different part of the application.
The left nav bar is an Additional design, It doesn't have a real "api request", I only simulate a function of "fetch data by type".

**Some thing need to know:**

(1) Everytime you restart api server, it will generate new "fruit data", but this application will automatically filter it.

(2) I haven't use get apt "GET /fruit/:id", because I think I'd gotten all data and I don't need it.

(3) If you delete a fruit from a filtered(nav) table, The nav bar will be set to "All", it is designed.

### Quick Setup

``` bash
# install dependencies
npm install

# start api server
npm run api

# serve with hot reload at localhost:8080
npm run serve

# run test
npm test

# build for production with minification
npm run build

