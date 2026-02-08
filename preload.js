const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {

  saveData: (data) => ipcRenderer.invoke("save-data", data)

});
