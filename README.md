# Script

Install: npm i
Build: npm run build
Run test: npm run test
Run server: npm run start

Server running at http://localhost:3000/

Endpoint to resize img: http://localhost:3000/api/images

Query argument:

- filename
  available filename: argentina, brazil
- width
  must be a number larger than 0
- height
  must be a number larger than 0

Example:

- http://localhost:3000/api/images?filename=argentina&width=200&height=200
  Display argentina image with the size is 200x200
- http://localhost:3000/api/images?filename=abc&width=200&height=200
  Display error that image does not exist
- http://localhost:3000/api/images?filename=argentina&width=-200&height=200
  Display error that width and height must be larger than 0
- http://localhost:3000/api/images
  Display error that query is not valid because argument is missing

Origin image store in ./assets/full
Output image store in ./assets/thumb
