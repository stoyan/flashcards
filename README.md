# Flash cards

Template for creating self-test apps. It's a Progressive Web App. Works offline too. Build with React. Need a say more?

Easiest to use with [CRAFT](https://github.com/stoyan/craft) (Create React App From Template), [wrieteup](https://medium.com/@stoyanstefanov/craft-create-react-app-from-template-7fd3383d0954#.oymdipdto), [npm module](https://www.npmjs.com/package/craftool).

## Creating your own quizes

Install Node.js

then

    $ npm install -g create-react-app
    $ npm install -g craftool
    $ craft MyApp https://github.com/stoyan/flashcards/archive/master.zip
    $ cd MyApp
    $ npm install .
    $ npm start .
    
Then open `src/App.js` and edit the "// the actual quiz" part to create your own flash cards.

And finally

    $ npm run build
    
Copy the contents of `build/` to a server nearby.

Promote.

Profit.

## Demos

This template in action: https://tools.w3clubs.com/flashcards/

An app built from this template: https://tools.w3clubs.com/reactorpizza/ 