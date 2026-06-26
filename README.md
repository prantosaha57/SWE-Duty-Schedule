# SWE Invigilation Duty Finder

GitHub Pages-ready duty lookup website for the Department of Software Engineering, Daffodil International University.

## Included pages

- `index.html` - search the SWE duty roster by faculty initial.
- `guidelines.html` - SWE exam guidelines, slot times, exchange form, and important reminders.
- `committee.html` - clean demo committee page with replaceable photos and contacts.

## Current roster

The project now includes the official uploaded SWE roster:

- `duty-roster.pdf` - Duty Roster for SWE Department, Midterm Examination, Summer 2026.
- `roster-data.js` - pre-indexed roster data extracted from the PDF so the search works reliably on GitHub Pages.
- `docs/Duty Roster-Midterm-Summer-2026-Teacher_V2.pdf` - reference copy.

Search works by faculty initial because the supplied roster lists initials and designations, not full faculty names.

## Slot information

- Slot A: 09:00 AM - 10:30 AM
- Slot B: 11:30 AM - 01:00 PM
- Slot C: 02:00 PM - 03:30 PM
- Reporting time: at least 20 minutes before the exam starts.

## How to update for a new roster later

1. Replace `duty-roster.pdf` with the new official SWE duty roster.
2. Update `roster-data.js` if the new PDF table format changes. This file is used for fast and reliable searching.
3. Keep all filenames exactly the same when publishing.

## How to publish

Upload all project files to the repository root, then enable GitHub Pages:

`Settings > Pages > Deploy from a branch > main > root`

No server, database, PHP, XAMPP, or build step is required.

## Committee page customization

- Edit `committee-data.js` to replace demo names, roles, phone numbers, and emails.
- Add real images inside `committee-photos/`.
- Update each member's `photo` value in `committee-data.js`.

## Notes

The committee page intentionally uses demo images and placeholder committee data so the official list can be added later without changing the page design.
