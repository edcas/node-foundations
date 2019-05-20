# node-foundations


```sh
npm install

#Install dependencies.
node evaluations/first/index.js

#List all courses.
node evaluations/first/index.js enroll

#List the options of the command to enroll a student to a course.
node evaluations/first/index.js enroll --course=1020 --name="John Doe" --document=1044928364

#Show validation when a user tries to register in a course that does not exist
node evaluations/first/index.js enroll --course=1024 --name="John Doe" --document=1044928364
```