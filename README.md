# Max's Sporting Goods
**Code Challenge**

## How to run
Install modules for the first time: `npm install`

To run the web app: `npm start`
Navigate to http://localhost:3000

## Other commands
Linting `npm run lint`
Unit testing: `npm run test`

## Development notes
- The store runs with an initial state loading the file `src/store/data.json`
- There is no persistance, so any page refresh will erease any change
- Reflux Store was implemented in the RootView using *Reflux.Component()* using Context and spreading it to children components using React hooks.

## Pending features
Because I was out of time I left some requirements uncompleted:
- Support many images insted of only one
- Images uploader
- Create and update forms UX

There are some other features that would be nice to have:
- Persist store and/or save it "in cloud" using an API
- Testing was not a requirement, there are some created but it would be necessary to have increase coverage in order to make the project more stable.

## Recomendations
- The Reflux library hasn't been updated for a long time, it seems deprecated and there are some implementations uncompatible with latests releases of React and some other implementations show warnings. i.e: `componentWillMount has been renamed, and is not recommended for use.`


------------

Developed with ❤️ by Sergio Enrique Vargas 🦊