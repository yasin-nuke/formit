const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

let mainWindow;

// مسیر امن ذخیره دیتا
const dataPath = path.join(app.getPath("userData"), "data.json");

function createWindow() {

  mainWindow = new BrowserWindow({
    width: 500,
    height: 600,

    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.loadFile("renderer/index.html");
}

app.whenReady().then(createWindow);


// دریافت دیتا از فرم
ipcMain.handle("save-data", async (e, data) => {

  let list = [];

  if (fs.existsSync(dataPath)) {
    list = JSON.parse(fs.readFileSync(dataPath));
  }

  list.push(data);

  fs.writeFileSync(dataPath, JSON.stringify(list, null, 2));

  return true;
});


// پاک‌سازی هنگام uninstall
app.on("before-quit", () => {
  // دیتا تو userData هست → ویندوز با uninstall پاک می‌کنه
});
