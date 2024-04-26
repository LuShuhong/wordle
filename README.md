# Wordle Exercise

Build your own version of the game Wordle.

Here is the [original](https://www.nytimes.com/games/wordle/index.html) version for anyone not familiar with it.

## MVP

Import a list of words (see below for options)

1. Randomly choose a 'target' word from the list

2. When the user clicks a letter in the on-screen keyboard, it should add the letter to the current guess

3. When the user presses the enter button:

   - Ensure the current guess has five letters
   - Provide colour feedback for the letter positions

## Extensions

- Link up the user's physical keyboard using `keypress` event handlers
- Add a delete button to the on-screen keyboard
- Implement Wordle's "Hard Mode" (any revealed hints must be used in subsequent guesses)
- Keep a record the user's score for each game and store them in a statistics panel on the page

## Getting started

Creating your first React app

```bash
npm create vite@latest wordle-exercise -- --template react
```

Logging into github packages (accelerator's private NPM repository)

# Create (and store a PAT)

https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens

```
npm login --registry https://npm.pkg.github.com

Username: <github username>
Password: <Your personal access token> (see above)
Email: <THG email (used on github)>
```

We have published a package to generate your random word, install it like so

```bash
yarn add @thg-accelerator/random-wordle-word
# or
npm install @thg-accelerator/random-wordle-word
```

```javascript
// import
import randomWord from "@thg-accelerator/random-wordle-word";
```

The file `words.js` can be copied into your repository if you have problems installing the package
