export default (element, callback) => {
    const outsideClickListener = event => {
        if (element && !element.contains(event.target)) {
            callback();
            // removeClickListener();
        }
    };

    // const removeClickListener = () => {
    //     document.removeEventListener('click', outsideClickListener)
    // };

    ['click', 'touch'].forEach(function(e) {
        document.addEventListener(e, outsideClickListener);
    });
}
