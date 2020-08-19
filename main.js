const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    frame: true,
    transparent: true,
    resizable: false,
    width: 600,
    height: 1000,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.removeMenu();

  // and load the index.html of the app.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
