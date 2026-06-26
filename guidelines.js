const status = document.querySelector("#guidelineStatus");

function loadGuidelines() {
  if (!status) return;
  status.className = "data-status ready";
  status.innerHTML = "<i></i> Guidelines ready";
}

if (!globalThis.__GUIDELINES_PARSER_TEST__) loadGuidelines();

export { loadGuidelines };
