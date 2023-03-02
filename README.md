# Robot Game

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run the following (more are available but for simplicity's sake they have been removed):

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Pages

The following pages are available:

-   `/`

    This is where the app loads into (home page). From here you can navigate to the follow pages. There is info regarding how to setup the game and start playing, as well as who the active player is.

-   `/game`

    This is where the game is played. Initially a user can't access the game until player information exists, as it is required for the leaderboard. Should a user access this page beforehand, it will display info directing them to the setup page.

-   `/setup`

    This is where the user can find a list of players as well as a form to input player info. A user must add and select a player to activate the navigation on the home page to go to the game. On entering, the user can select a new active player and should they choose not to, the previous active player remains active. A user can also delete players, and will correctly handle any cases involving deleting the active player and removing all players. The form handles no input, and input of the same user.

    `Note:` pages reached through the url that aren't found display a basic 404 not found error.

## Local Storage

The local storage is used instead of a backend.

### Variables

-   `activePlayer` - player who is actively playing the game (used for leaderboard)
-   `players` - array of names (all handled in lowercase for consistency)
-   `games` - array of games (score, player) used to record games for leaderboard display
