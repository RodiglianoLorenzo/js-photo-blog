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
                        <img src="${url}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">
                            ${date}   
                            </p>
                        </div>
                    </div>
                </div>`

            console.log(markup);
            rowEl.insertAdjacentHTML('beforeend', markup)
        });
    })