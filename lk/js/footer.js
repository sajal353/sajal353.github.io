// LEGAL NOTES

document.querySelector('.close-legal-notes').addEventListener('click', (e) => {
    e.preventDefault();
    closeLegalNotes();
});

document.querySelectorAll('.open-legal-notes').forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        openLegalNotes();
    });
});

function openLegalNotes() {
    let tl = gsap.timeline();
    tl.to('#legal-notes', 2, {width: '100%', ease: Expo.easeInOut})
    .to(['.close-legal-notes', '.legal-notes-container'], .5, {opacity: 1}, '-=.5');
}

function closeLegalNotes() {
    let tl = gsap.timeline();
    tl.to(['.close-legal-notes', '.legal-notes-container'], .5, {opacity: 0})
    .to('#legal-notes', 2, {width: 0, ease: Expo.easeInOut}, '-=.25');
}