A repository of projects and starter files for CS330

First download the cs330 folder, either using the "Download Zip" option or running `git clone https://github.com/Amartya/cs330.git` in Terminal (Mac) or Command Line / Powershell on Windows.

# For miniapp

### On a Mac
- Install a package manager like Homebrew: https://brew.sh  
- Open Terminal on a Mac
  - Install Node: `brew install node`
  - Then go to the miniapp folder/directory and run `npm install`
  - `npm install` reads the package.json file and installs the relevant packages
  - Now, run `npx nodemon app.js` to run the server, and go to `http:\\localhost:3000` in a browser of your choice 

### On a Windows PC 
- Go to https://nodejs.org/en to install Node using the nodeJS installer
- Then open up Powershell or Command line 
  - Go to the miniapp folder/directory and run `npm install`
  - Now, run `npx nodemon app.js` to run the server and go to `http:\\localhost:3000` in a browser of your choice

# For respapp
- If you have already installed node for prior assignments, you shouldn't have to do that again
- The setup is identical to miniapp, start by going to the respapp directory in Terminal/Command Line
  - Then run `npm install`
  - Now, run `npx nodemon app.js` to run the server, and go to `http:\\localhost:3000` in a browser of your choice
- The HTML file being served is in the "views" directory within respapp. 
- The javascript to hide and show the nav panel is in under assets/js/interaction.js.
- The CSS is under assets/css/style.css. Pay extra attention to the media queries near the bottom of the file.

### Adding your own HTML files
- You can add your own HTML files in the views directory
- Edit app.js to add a route to render/serve that new HTML file
