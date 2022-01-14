'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    
    const adv = document.querySelectorAll('.promo__adv img');
    const poster = document.querySelector('.promo__bg');
    const genre = poster.querySelector('.promo__genre');
    const moviesList = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.promo__interactive .add input');
    const checkBox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let addFilm = addInput.value;
        const favoriteFilm = checkBox.checked;

        if (addFilm) {

            if (addFilm.lenght > 21) {
                addFilm = `${addFilm.substring(0, 22)}...`;
            }
            if (favoriteFilm) {
                console.log("Добавляем любимый фильм");
            }
            movieDB.movies.push(addFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, moviesList);

            event.target.reset();
        }
    });
    
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    

    const makeChanges = () => {
        genre.textContent = "Драма";
        poster.style.backgroundImage = "url('img/bg.jpg')";
    };
    

    const sortArr = (arr) => {
        arr.sort();
    };
    
    
    function createMovieList (films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
                    <li class="promo__interactive-item">${i + 1}. ${film}
                        <div class="delete"></div>
                    </li>
            `;
        });
    }
    
    

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(films, parent);
        });
    }); 

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, moviesList);
});














