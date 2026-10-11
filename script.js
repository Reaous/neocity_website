(function() {
    const btn =document.getElementById('enter-btn')
    const dialog = document.getElementById('enter-dialog')

    if (!btn || !dialog) return;

const REDIRECT_URL ="page2.html"

btn.addEventListener('click', () => {
    dialog.showModal();
});

    dialog.addEventListener('close', () => {
        if (dialog.returnValue === 'confirm') {
            window.location.href = REDIRECT_URL;
        }
    });
})();
