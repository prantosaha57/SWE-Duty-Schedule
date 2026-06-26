import { committeeMembers } from "./committee-data.js?v=8";

const status = document.querySelector("#committeeStatus");
const grid = document.querySelector("#committeeGrid");
const count = document.querySelector("#committeeCount");
const errorPanel = document.querySelector("#committeeError");
const errorText = document.querySelector("#committeeErrorText");

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function phoneHref(value) {
  const phone = String(value || "").split(",")[0].replace(/[^0-9+]/g, "");
  return phone && !phone.includes("X") ? `tel:${phone}` : "#";
}

function safePhoto(member) {
  return member.photo || "./committee-photos/demo-cv.png";
}

function renderCommittee() {
  try {
    if (!Array.isArray(committeeMembers) || !committeeMembers.length) {
      throw new Error("No demo committee entries found in committee-data.js");
    }
    count.textContent = `${committeeMembers.length} demo committee members`;
    grid.innerHTML = committeeMembers.map((member) => `
      <article class="committee-card ${/Convener|Contact Point|Slot/i.test(member.role || "") ? "lead" : ""}">
        <div class="committee-card-head">
          <span class="committee-photo image-ready" data-initial="${escapeHtml(member.initial || "SWE")}">
            <img src="${escapeHtml(safePhoto(member))}" alt="${escapeHtml(member.name)} demo photo" width="48" height="48" loading="lazy" decoding="async">
            <b>${escapeHtml(member.initial || "SWE")}</b>
          </span>
          <div><h2>${escapeHtml(member.name)}</h2><p>${escapeHtml(member.designation)}</p></div>
        </div>
        <span class="role-pill">${escapeHtml(member.role)}</span>
        <dl>
          <div><dt>Room</dt><dd>${escapeHtml(member.room || "Room 619, AB4 Building")}</dd></div>
          <div><dt>Phone</dt><dd><a href="${phoneHref(member.phone)}">${escapeHtml(member.phone || "01XXXXXXXXX")}</a></dd></div>
          <div><dt>Email</dt><dd><a href="mailto:${escapeHtml(member.email || "demo@example.edu")}">${escapeHtml(member.email || "demo@example.edu")}</a></dd></div>
          <div><dt>Photo</dt><dd>Replace demo image later</dd></div>
        </dl>
      </article>
    `).join("");
    status.className = "data-status ready";
    status.innerHTML = "<i></i> Demo contacts ready";
  } catch (error) {
    console.error(error);
    grid.classList.add("hidden");
    errorPanel.classList.remove("hidden");
    errorText.textContent = error.message;
    status.className = "data-status error";
    status.innerHTML = "<i></i> Contact error";
  }
}

if (!globalThis.__COMMITTEE_PARSER_TEST__) renderCommittee();

export { renderCommittee };
