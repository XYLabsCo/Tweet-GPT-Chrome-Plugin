# Twitter GPT

Twitter GPT is a Chrome extension that integrates OpenAI's GPT-3.5-turbo model with Twitter, allowing users to generate tweets based on a given prompt.

## Project Structure

The project is divided into two main parts:

- The server directory contains the server-side application that interacts with OpenAI's API.

- The app directory contains the Chrome extension which interacts with the user and the server-side application.

## Installation

### Server

The server-side application is a Node.js application. To install and run it, follow these steps:

- Navigate to the server directory in your terminal:

```bash
cd server
```

- Install the necessary Node.js packages using npm (Node Package Manager):

```bash
npm install
```

- Create a .env file in the server directory and add your OpenAI API key:

```makefile
OPENAI_API_KEY=your-api-key-here
```

- Run the server:

```bash
node server.js
```

### App (Chrome extension)
To install the Chrome extension, follow these steps:

- Navigate to chrome://extensions in your Google Chrome browser.

- Enable "Developer mode" by clicking the toggle switch in the upper-right corner of the screen.

- Click the "Load unpacked" button and select the app directory from this project.

- The Twitter GPT Chrome extension should now be installed and ready to use.

## Usage
To use Twitter GPT, click the extension icon while on twitter.com and enter a prompt for your tweet. Click the "Generate Tweet" button to send the prompt to the GPT-3.5-turbo model, which will generate a tweet based on the prompt. You can then copy the generated tweet and paste it into Twitter's tweet box. A history of all tweets are available which is stored in local storage.

## Notes
- The server-side application must be running for the Chrome extension to work.
- Make sure you have installed all the necessary dependencies in the server directory using npm install.
- Be sure to replace your-api-key-here with your actual OpenAI API key in the .env file.
- Make sure to obey OpenAI's usage policies when using this application.