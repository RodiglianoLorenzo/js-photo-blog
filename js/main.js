const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'

const rowEl = document.querySelector('.row')


console.log(endpoint);


fetch(endpoint)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        data.forEach(element => {
            console.log(element);
            const { title, date, url } = element
            const markup = `<div class="col-12 col-md-6 col-lg-4 mb-4">
                    <div class="card ">
                        <img class="pin " src="./img/pin.svg" alt="">
                        <img src="${url} " class="card-img-top" alt="...">
                        <div class="card-body">
                             <p class="card-text mono_font">
                                ${date}   
                            </p>
                            <h4 class="card-title edu_font">${title}</h4>
                        </div>
                    </div>
                </div>`

            console.log(markup);
            rowEl.insertAdjacentHTML('beforeend', markup)
        });
    })