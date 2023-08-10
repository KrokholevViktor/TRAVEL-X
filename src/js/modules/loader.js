function loader () {
    const loader = document.querySelector('#loader');

    window.addEventListener('load', () => {
        loader.classList.add('loader-wrapper--hidden');
    })
};

export default loader;