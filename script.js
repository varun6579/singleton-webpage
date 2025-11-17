// Logger Singleton
class Logger {
  constructor() {
    // If an instance already exists, return it (Singleton logic)
    if (Logger.instance) {
      return Logger.instance;
    }

    // Otherwise, create properties
    this.logs = [];
    Logger.instance = this; // Save the single instance
  }

  log(message) {
    const time = new Date().toLocaleTimeString();
    const fullMessage = `[${time}] ${message}`;
    this.logs.push(fullMessage);
    console.log("Logger instance:", this); // For demo in console
    return fullMessage;
  }

  getLogs() {
    return this.logs;
  }
}

// Helper to update UI
function updateLogArea() {
  const logger = new Logger(); // Always returns same instance
  const logDiv = document.getElementById("log");
  logDiv.textContent = logger.getLogs().join("\n") || "No logs yet...";
}

// Attach events on DOM load
document.addEventListener("DOMContentLoaded", () => {
  const logger = new Logger(); // Single instance

  document.getElementById("btn1").addEventListener("click", () => {
    logger.log("Button 1 clicked");
    updateLogArea();
  });

  document.getElementById("btn2").addEventListener("click", () => {
    logger.log("Button 2 clicked");
    updateLogArea();
  });

  updateLogArea();
});
