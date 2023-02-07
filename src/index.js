addEventListener("fetch", event => {
  // Get the request from the client.
  const req = event.request;

  // Send the request to `origin_0`.
  const backendResponse = fetch(req, {
    backend: "origin_0"
  });

  // Send the backend response back to the client.
  event.respondWith(backendResponse);

  // This is a minimal Compute@Edge app in JavaScript.  For alternative starter
  // code for your fiddle, see the code examples on our developer hub:
  // https://developer.fastly.com/solutions/examples/javascript/
});