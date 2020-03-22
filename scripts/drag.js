
if (navigator.draganddrop) {
    alert('oui');
    // Browser supports native HTML5 DnD.
} else {
    alert('non');
    // Fallback to a library solution.
}
