/**
 * Archive logic for Letters I Never Sent
 *
 * On the homepage (index.html): only the 10 most recent letters are shown.
 * Letters beyond the limit are hidden and a note appears linking to the archive.
 *
 * On the archive page (archive.html): all letters are shown with no limit.
 */

(function () {
  var MAX_ON_HOMEPAGE = 10;
  var isArchivePage = window.location.pathname.indexOf("archive") !== -1;

  if (isArchivePage) return; // show everything on the archive page

  var letters = document.querySelectorAll(".site-main .letter");
  if (letters.length <= MAX_ON_HOMEPAGE) return; // nothing to archive yet

  // Hide letters beyond the limit
  for (var i = MAX_ON_HOMEPAGE; i < letters.length; i++) {
    letters[i].style.display = "none";
  }

  // Add a subtle link to the archive
  var note = document.createElement("p");
  note.className = "archive-note";
  note.innerHTML =
    '<a href="archive.html">Older letters live in the archive &rarr;</a>';
  document.querySelector(".site-main").appendChild(note);
})();
