const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = process.cwd();
const DEV_PORT_START = 3000;
const DEV_PORT_END = 3010;

function removeDirSafe(relativeDir) {
  const target = path.join(ROOT, relativeDir);
  try {
    fs.rmSync(target, { recursive: true, force: true });
  } catch (_) {
    // Ignore cleanup errors; runtime can still proceed.
  }
}

function killDevPortsWindows() {
  try {
    const output = execSync("netstat -ano -p tcp", { encoding: "utf8" });
    const lines = output.split(/\r?\n/);
    const pids = new Set();

    for (const line of lines) {
      const normalized = line.trim().replace(/\s+/g, " ");
      if (!normalized.startsWith("TCP ")) continue;
      if (!normalized.includes(" LISTENING ")) continue;

      const parts = normalized.split(" ");
      const localAddress = parts[1] || "";
      const pid = parts[parts.length - 1];
      const port = Number(localAddress.split(":").pop());
      if (!Number.isFinite(port)) continue;

      if (port >= DEV_PORT_START && port <= DEV_PORT_END && pid && pid !== "0") {
        pids.add(pid);
      }
    }

    for (const pid of pids) {
      try {
        execSync(`taskkill /PID ${pid} /T /F`, { stdio: "ignore" });
      } catch (_) {
        // Process may already be gone; continue.
      }
    }
  } catch (_) {
    // If netstat fails, continue with cache cleanup.
  }
}

function main() {
  if (process.platform === "win32") {
    killDevPortsWindows();
  }

  removeDirSafe(".next");
  removeDirSafe(".next-build");
}

main();
