import { OfflineState } from "./offlineState.js";
import { OnlineState } from "./onlineState.js";
import jsonOverTcp from "json-over-tcp-2"; // (1)
export class OfflineState {
  constructor(failsafeSocket) {
    this.failsafeSocket = failsafeSocket;
  }
  send(data) {
    // (2)
    this.failsafeSocket.queue.push(data);
  }
  activate() {
    // (3)
    const retry = () => {
      setTimeout(() => this.activate(), 1000);
    };
    console.log("Trying to connect...");
    this.failsafeSocket.socket = jsonOverTcp.connect(
      this.failsafeSocket.options,
      () => {
        console.log("Connection established");
        this.failsafeSocket.socket.removeListener("error", retry);
        this.failsafeSocket.changeState("online");
      }
    );
    this.failsafeSocket.socket.once("error", retry);
  }
}

export class FailsafeSocket {
  constructor(options) {
    // (1)
    this.options = options;
    this.queue = [];
    this.currentState = null;
    this.socket = null;
    this.states = {
      offline: new OfflineState(this),
      online: new OnlineState(this),
    };
    this.changeState("offline");
  }
  changeState(state) {
    // (2)
    console.log(`Activating state: ${state}`);
    this.currentState = this.states[state];
    this.currentState.activate();
  }
  send(data) {
    // (3)
    this.currentState.send(data);
  }
}
