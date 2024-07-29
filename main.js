    document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
    document.querySelector(
    "body").style.visibility = "hidden";
    document.querySelector(
    "#loader").style.visibility = "visible";
    } else {
    document.querySelector(
    "#loader").style.display = "none";
    document.querySelector(
    "body").style.visibility = "visible";
    }
    };

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("headingBar").style.fontSize = "70%";
    document.getElementById("logo").style.width = "13%";
    document.getElementById("search").style.marginTop = "3%";
    } else {
    document.getElementById("headingBar").style.fontSize = "100%";
    document.getElementById("logo").style.width = "15%";
    document.getElementById("search").style.marginTop = "5%";
    }
    }  

    document.addEventListener('DOMContentLoaded', () => {
        const searchBar = document.getElementById('search');
        const resultsContainer = document.getElementById('results');
        
        const items = [
            { name: 'Features', id: 'features' },
            { name: 'Ratings', id: 'ratings' }
        ];
    
        searchBar.addEventListener('input', () => {
            const searchTerm = searchBar.value.toLowerCase();
            resultsContainer.innerHTML = '';
    
            const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm));
            
            filteredItems.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.name;
                li.dataset.id = item.id;
                resultsContainer.appendChild(li);
            });
    
            if (filteredItems.length === 0) {
                resultsContainer.innerHTML = '<li>No results found</li>';
            }
        });
    
        resultsContainer.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI' && e.target.dataset.id) {
                const section = document.getElementById(e.target.dataset.id);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }

    function disFunction() {
    confirm("Allow this website to send your personal details");
    }