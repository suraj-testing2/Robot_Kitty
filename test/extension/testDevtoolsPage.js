
var port = new RnRPortDevtoolsForeground(function onMessage(message) {
  console.log("devtools got the message ", message);
});

port.postMessage("From devtools to you");