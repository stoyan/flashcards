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

## A little more

Once you create your new app from the template, you need to go edit `App.js`.

Up there at the top are three functions you need to implement. (Of course you can edit any and all JS/CSS/HTML but this here describes the simplest use scenario).

The functions are:

### getCount()

You can return the total number of flashcards, e.g.

```js
function getCount() {
  return 101;
}
```

Or you can return `null`, meaning you can generate infinte number of flashcards (that is, until the cows come home, then...)

```js
function getCount() {
  return null;
}
```

### getQuestion()

This function should return a single question. It can be randomly generated to infinity (if your `getCount()` returned `null`)

```js
function getQuestion(_ignoreme) {
  return Math.random();
}
```

Or it can be the next in sequence

```js
const questions = ['Meaning of life?', 'Meaning of Love?'];
function getQuestion(i) { // i starts with 1
  return questions[i - 1];
}
```

### getAnswer()

Exactly like `getQuestion()`, it should return the answer to the `i`-th question

```js
const answers = ['42', '42'];
function getAnswer(i) {
  return answers[i - 1];
}
```

If your question was randomly generated, maybe a temp var could help

```js
let answer;
function getQuestion(_whatever) {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 10);
  answer = a + b;
  return `${a} + ${b}`;
}

function getAnswer(_nobodycares) {
  return answer;
}
```

## LMK

Find me on <a href="https://twitter.com/stoyanstefanov">Twitter</a> with questions, spelling corrections or utter disappointment in thus here offering.