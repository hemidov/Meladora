const Clear = document.getElementById("clear");
const Menu = document.getElementById("menu");

const NavMobile = document.getElementById("nav_mobilee");

const Filteralll = document.querySelectorAll(".ll");

const FilterAll = document.getElementById("filterAll");

const Meyveler = document.getElementById("fruits");

const Digerler = document.getElementById("others");

const Terevezler = document.getElementById("vegetables");

const Taxillar = document.getElementById("grains");

const Hamisi = document.getElementById("all");

const P = document.getElementById("p");

const Search = document.getElementById("search")

const Mydiv = document.getElementById("mydiv")

const Remove = document.getElementById("remove");

const Cleardiv = document.getElementById("clear");





// !


AddEventListener()
function AddEventListener() {

    Clear.addEventListener("click", sil);
    
    Menu.addEventListener("click", menu);

    Meyveler.addEventListener("click", filterAll);

    Terevezler.addEventListener("click", filterAll);

    Digerler.addEventListener("click", filterAll);

    Taxillar.addEventListener("click", filterAll);

    Hamisi.addEventListener("click", hamsi);

    P.addEventListener("click", sc);

    Search.addEventListener("click", search);

    Remove.addEventListener("click", remove);

    Cleardiv.addEventListener("click", remove);





}

// !rmeove

function remove() {
    Mydiv.style.top = "-50%";
    
}

// !serac
function search(e){
    Mydiv.style.top = "40%";


    e.preventDefault()


}


let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// !function mehsul
async function Mehsul() {
    let response = await fetch("./file.json");
    let data = await response.json();
    return data;

}



Mehsul()
.then((response) => response.forEach((element) => {
  
    FilterAll.innerHTML +=
            `
          <div id="meyve" >
          <div >
          <img src="${element.img}" alt="">

          </div>
          <div  class="tre">
          <p>${element.title}</p>
          <p>${element.price}</p>
          </div>
        </div>
        `
    }))
    .catch((err) => console.log(err));


    // !function sc
function sc() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// !function sil()
function sil() {
    NavMobile.style.left = "-100%";
}

// !function menu()
function menu() {
    NavMobile.style.left = "0%"


}


//! filterall function

async function filterAll(e) {
    FilterAll.innerHTML = "";

    let id = e.target.id;
 
    let response = await fetch("./file.json");
    let data =await response.json();

    data.forEach(el => {
        if (el.id===id) {
            FilterAll.innerHTML +=
            `
          <div id="meyve" >
          <div >
          <img src="${el.img}" alt="">

          </div>


          <div  class="tre">
          <p>${el.title}</p>
          <p>${el.price}</p>
          </div>

        </div>
        ` 
        }

    })
}

// !hamsi function

async function hamsi() {
    FilterAll.innerHTML = "";
    
    let response = await fetch("./file.json");
    let data =await response.json();

    data.forEach(e => {
        
            FilterAll.innerHTML +=
            `
          <div id="meyve" >
          <div >
          <img src="${e.img}" alt="">

          </div>


          <div  class="tre">
          <p>${e.title}</p>
          <p>${e.price}</p>
          </div>

        </div>

        `
    })
}

