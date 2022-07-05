import { ipcRenderer, contextBridge } from 'electron'

const api = {
  sendMessage: (message: string) => ipcRenderer.send('message', message),
  openUrl: (url: string) => ipcRenderer.send('openUrl', url),
  on: (channel: string, callback: Function) => ipcRenderer.on(channel, (_, data) => callback(data))
}

contextBridge.exposeInMainWorld('Main', api)

export default api