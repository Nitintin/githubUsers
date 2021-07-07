# Github User Details

This project was created purely using ReactJS. A user can fetch any user from github using just his username. The portal allows any visitor, to add multiple users, view their details and also sort them according to their name, location and followers. A user can then also reach to each users page by just clicking on indiviual card!
### Live Website 
The project has been hosted on a shared netlfiy server. This was done so that you can test it easily on your system, be it desktop or mobile.
Feel free to check this here - https://github-userdetails.netlify.app/

## Design Principles
 ### DRY - do not repeat yourself
 I have made sure to made components as modular as possible so that duplicate and verbose code can be removed
### SRP - single responsibilty principle
Single responsibilty principle is being used. Logic and views(jsx) are seprated so that debuggin becomes easy and code is alot more modular

## Technologies Used

### custom hooks
### node-sass
### react functional components

## Different Section of project
### Fetching Data
The data is being fetched directly from the API provided by github. You can access the API here - https://api.github.com/users/. To read more about this API please refer to this link - https://developer.github.com/v3/users/

### Sorting Data
Data is being sorted on the go using array sort methods

### Displaying Data
Each user is being displayed in a separate card. Flexbox layout is used for these card boxes.

## HOW TO RUN ON LOCAL
1 Take pull of this github repo
2 Make sure to run 'npm install' command to install all the dependencies
3 run npm start


### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.



You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
