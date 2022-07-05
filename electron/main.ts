import { app, BrowserWindow, ipcMain, shell } from 'electron'
import theme from '../src/styles/theme'
import { blue, magenta } from './utils/colorsLogs'

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

// const assetsPath =
//   process.env.NODE_ENV === 'production'
//     ? process.resourcesPath
//     : app.getAppPath()

function createWindow () {
  mainWindow = new BrowserWindow({
    // icon: path.join(assetsPath, 'assets', 'icon.png'),
    width: 1100,
    height: 700,
    backgroundColor: theme.backgroundColor,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  })

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

async function registerListeners () {
  ipcMain.on('message', (_, message) => {
    console.log(blue('>> Message receipted'))
    console.log(magenta(`  >> ${message}`))
    console.log(message)
  })

  ipcMain.on('openUrl', (_, url) => {
    console.log(blue('>> URL opened'))
    console.log(magenta(`  >> ${url}`))
    shell.openExternal(url)
  })
}

app.on('ready', createWindow)
  .whenReady()
  .then(registerListeners)
  .catch(e => console.error(e))

app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit())

app.on('activate', () => BrowserWindow.getAllWindows().length === 0 && createWindow())