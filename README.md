# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

-------------------------------------------------------------

# Guess the Price Game 🎮

Ein Multiplayer-Spiel, bei dem die Spieler den Preis verschiedener Gegenstände erraten. Das Spiel besteht aus drei Phasen: WartePhase, Ratephase und Ergebnissphase. Dieses Projekt wurde mit **React** für das Frontend und einem **WebSocket-Server** für das Backend entwickelt.

------------------------------

## **Funktionen**
- **Multiplayer-Unterstützung**: Spieler können dem Spiel beitreten, indem sie ihren Namen eingeben.
- **Echtzeit-Updates**: Der Spielzustand wird über WebSocket synchronisiert.
- **Drei Phasen**:
  1. **Warten**: Spieler treten dem Spiel bei.
  2. **Raten**: Spieler schätzen den Preis eines Artikels innerhalb eines Zeitlimits.
  3. **Ergebnisse**: Der tatsächliche Preis wird angezeigt, und die Punkte werden basierend auf der Genauigkeit der Schätzungen berechnet.
- **Dynamischer Timer**: Jede Phase hat einen Countdown-Timer, um das Spiel spannend zu halten.

------------------------------

## **Installation**

### **Voraussetzungen**
- Node.js 
- npm
- Ein WebSocket-Server (im Backend dieses Projekts enthalten: https://github.com/svenjuen/GuessThePriceWS)

### **Schritte**
- Konsole
1. Repository klonen:
   https://github.com/svenjuen/REACT-price-guessing-game
2. cd price-guessing-game
3. npm install
4. npm start

------------------------------

src/
├── components/
│   ├── [GameContainer.jsx]       # Hauptcontainer für die Spielphasen
│   ├── GamePhases/
│   │   ├── WaitingPhase.jsx    # Warten auf Spieler
│   │   ├── GuessingPhase.jsx   # Preis raten
│   │   ├── ResultsPhase.jsx    # Ergebnisse anzeigen
│   ├── PlayerList.jsx          # Spieleranzeige
│   ├── JoinScreen.jsx          # Beitrittsbildschirm
│   ├── ItemDisplay.jsx         # Artikelanzeige
│   ├── Timer.jsx               # Countdown-Timer
├── hooks/
│   ├── useWebSocket.js         # WebSocket-Kommunikation
├── App.js                      # Haupteinstiegspunkt der Anwendung
├── App.css                     # Globale Styles