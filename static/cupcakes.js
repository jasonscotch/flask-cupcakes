
const URL = 'http://127.0.0.1:5000/api';

// handle form to add a new cupcake

function createCupcake(cupcake) {
    return `
    <div data-cupcake-id="${cupcake.id}" class="card h-100 my-3">
        <img src="${cupcake.image}" class="card-img-top cupcake-img">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">${cupcake.flavor}</h5>
            <p class="card-text">${cupcake.size} | ${cupcake.rating} 
            <div class="mt-auto">    
                <button class="delete btn btn-danger"> X </button> </p>
            </div>
        </div>
    </div>`;
};

// Function that shows inital cupcakes
async function showCupcakes() {
    const resp = await axios.get(`${URL}/cupcakes`);
    for (let cupcake of resp.data.cupcakes) {
        let newCupcake = $(createCupcake(cupcake));
        $('#cupcakes').append(newCupcake);
    }
};



$('#new-cupcake').on("submit", async function (evt) {
    evt.preventDefault();
    console.log("Form Submitted!");
    let flavor = $('#form-flavor').val();
    console.log(flavor);
    let size = $('#form-size').val();
    let rating = $('#form-rating').val();
    let image = $('#form-image').val();

    const newCupcakeResp = await axios.post(`${URL}/cupcakes`, {
        flavor, 
        size, 
        rating, 
        image
    });

    let newCupcake = $(createCupcake(newCupcakeResp.data.cupcake));
    $('#cupcakes').append(newCupcake);
    $('#new-cupcake').trigger('reset');
});

// delete cupcake button
$('#cupcakes').on('click', '.delete', async function (evt) {
    evt.preventDefault();
    let $cupcake = $(evt.target).closest('.card');
    let cupcakeId = $cupcake.attr('data-cupcake-id');

    await axios.delete(`${URL}/cupcakes/${cupcakeId}`);
    $cupcake.remove();
});

$(showCupcakes);






