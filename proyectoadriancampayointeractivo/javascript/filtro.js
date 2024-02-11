document.addEventListener('DOMContentLoaded', function () {
    var platos = document.querySelectorAll('.platillos');

    var checkboxes = document.querySelectorAll('.filtros input[type=checkbox]');
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            filtrarPlatos();
        });
    });

    function filtrarPlatos() {
        var filtroVegano = document.getElementById('filtroVegano').checked;
        var filtroCeliaco = document.getElementById('filtroCeliaco').checked;
        var filtroLactosa = document.getElementById('filtroLactosa').checked;

        platos.forEach(function (plato) {
            var esVegano = plato.querySelector('.intolerance').textContent.includes('Veganos');
            var esCeliaco = plato.querySelector('.intolerance').textContent.includes('Celiacos');
            var esLactosa = plato.querySelector('.intolerance').textContent.includes('Lactosa');

            if ((filtroVegano && !esVegano) ||
                (filtroCeliaco && !esCeliaco) ||
                (filtroLactosa && !esLactosa)) {
                plato.style.display = 'none';
            } else {
                plato.style.display = 'block';
            }
        });
    }

    filtrarPlatos();
});



document.addEventListener("DOMContentLoaded", function () {
    const ordenarSelect = document.getElementById("ordenar");

    ordenarSelect.addEventListener("change", function () {
        const orden = ordenarSelect.value;
        ordenarPlatillos(orden);
    });
});

function ordenarPlatillos(orden) {
    const platillosContainer = document.querySelector(".platillosPopulares");
    const platillos = Array.from(platillosContainer.querySelectorAll(".platillos"));

    platillos.sort(function (a, b) {
        const precioA = parseFloat(a.querySelector(".compraP").innerText.slice(1));
        const precioB = parseFloat(b.querySelector(".compraP").innerText.slice(1));

        if (orden === "asc") {
            return precioA - precioB;
        } else {
            return precioB - precioA;
        }
    });

    platillos.forEach(function (platillo) {
        platillosContainer.appendChild(platillo);
    });
}


document.addEventListener("DOMContentLoaded", function () {

    cargarFavoritos();
});

function alternarFavorito(icono) {
    const platillo = icono.closest(".platillos");
    const tituloPlatillo = platillo.querySelector(".platillosH1").innerText;

    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (favoritos.includes(tituloPlatillo)) {
        const indice = favoritos.indexOf(tituloPlatillo);
        favoritos.splice(indice, 1);
        icono.src = "img/vacio.png";
    } else {
        favoritos.push(tituloPlatillo);
        icono.src = "img/lleno.png";
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function cargarFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    const platillos = document.querySelectorAll(".platillos");
    platillos.forEach(function (platillo) {
        const tituloPlatillo = platillo.querySelector(".platillosH1").innerText;
        const iconoFavorito = platillo.querySelector(".favorito");

        if (favoritos.includes(tituloPlatillo)) {
            iconoFavorito.src = "img/corazon-lleno.png";
        } else {
            iconoFavorito.src = "img/vacio.png";
        }
    });
}

