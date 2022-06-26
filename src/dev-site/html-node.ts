window.htmlNode = document
  .getElementById("shadow-container")
  .attachShadow({ mode: "open" }) as HTMLNode;

htmlNode.innerHTML = `<style>@import "./build/bundle.css"</style><div></div>`;
htmlNode.onpanelupdate = () => null;
