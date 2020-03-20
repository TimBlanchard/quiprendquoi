if(navigator.share){
    document.querySelectorAll('[data-share-url]').forEach(($shareEl) => {
        const $button = document.createElement('button');
        $button.innerHTML = 'partager';
        $shareEl.parentNode.append($button);
        $button.addEventListener(
            'click',
            shareEvent.bind(this, $shareEl)
        );
    });
} else {
    console.warn("Pas de share ");
}

function shareEvent($shareEl) {
    navigator.share({
            title: $shareEl.getAttribute('data-share-title'),
            text: $shareEl.getAttribute('data-share-text'),
            url: $shareEl.getAttribute('data-share-url'),
        })
}