# Welcome to Undercity Cards

This is an online store for selling preconstructed Magic: The Gathering decks.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Note!

You will need my firebase api keys to run the site if you want the database context to work, so this might not work without this being hosted. LOL!

## General Info

I'm using react-bootstrap to save myself some time with CSS, as well as have some useful tools for building really nice looking components with useful behaviors. I'm personally a big fan of using the "Card" component for my shop items, as I feel like they look quite nice.

In general, this is nothing too crazy at the moment; I have a neat mapping setup on my shop page, but the rest of my site looks pretty rough. The cart page in particular does not exist. My admin view is also inoperable at this moment.

## Stuff that My App Uses Right Noww

Honestly no idea what/how you would go about building my app, but i have installed all of this stuff. Honestly not entirely sure how to make sure you're able to have all this stuff on your end. In general though, I remember using the following commands specifically:

npm react-router-dom@6
npm install react-bootstrap bootstrap
npm install -S react-router-bootstrap
npm install firebase

So, if something isn't working, you probably need these. I believe since my repo has a package-lock.json, you can run the command:

npm ci

Which should update it with all the dependencies on your local machine. Keyword should. I have no idea if this works or not :D

├── @testing-library/jest-dom@5.16.5
├── @testing-library/react@13.4.0
├── @testing-library/user-event@13.5.0
├── bootstrap@5.2.2
├── firebase@9.12.1
├── react-bootstrap@2.5.0
├── react-dom@18.2.0
├── react-router-bootstrap@0.26.2
├── react-router-dom@6.4.2
├── react-scripts@5.0.1
├── react@18.2.0
└── web-vitals@2.1.4

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
