if (typeof party !== 'undefined') {
    console.log('pas undefined');
    localStorage.setItem(location.href, party.name);
}