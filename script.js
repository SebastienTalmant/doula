/* **************** Cache NavBar ****************** */
let lastScrollTop = 0;
navBar = document.querySelector('nav')

window.addEventListener('scroll', function(){
    const scrollTop = window.pageTOffset || 
    this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navBar.style.top = "-60px";
    } else {
        navBar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})


/* *************** Options communes animations ************************ */
const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

/* ************************* animation titre ******************* */
const handleIntersectHeader = function (entries, observer) {
    entries.forEach(function(entry) {
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
        }

    })
}
const observerHeader = new IntersectionObserver(handleIntersectHeader, options)
document.querySelectorAll('h1').forEach(function (r){
    observerHeader.observe(r)
})
document.querySelectorAll('h2').forEach(function(r) {
    observerHeader.observe(r)
})

/* ********************* Aniamtion section ************************* */
const handleIntersectRole = function (entries, observer) {
    entries.forEach(function(entry) {
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
        }

    })
}
const observerRole = new IntersectionObserver(handleIntersectRole, options)
document.querySelectorAll('section').forEach(function (r){
    observerRole.observe(r)
})


/* ******************* Animation service *********************** */
const handleIntersectService = function (entries, observer) {
    entries.forEach(function(entry) {
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible') 
            observer.unobserve(entry.target)
        }

    })
}
const observerService = new IntersectionObserver(handleIntersectService, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function (r){
    observerService.observe(r)
})


/* ************************ Animation tarifs *********************** */

const ratioBis = .1
const optionsBis = {
    root: null,
    rootMargin: '0px',
    threshold: ratioBis
}

const handleIntersectTarifs = function (entries, observer) {
    entries.forEach(function(entry) {
        if(entry.intersectionRatio > ratioBis) {
            entry.target.classList.add('visible-tarifs')
            observer.unobserve(entry.target)
        }

    })
}

const observerTarifs = new IntersectionObserver(handleIntersectTarifs, optionsBis)
document.querySelectorAll('.tarifs-card-left').forEach(function (r){
    observerTarifs.observe(r)
})
document.querySelectorAll('.tarifs-card-right').forEach(function(r) {
    observerTarifs.observe(r)
})

