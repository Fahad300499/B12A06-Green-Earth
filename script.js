
const categoriesContainer = document.getElementById("categories-container");
const allPlantCat = document.getElementById("all-plant-cat");
const modalContainer = document.getElementById("modal-container");
const myModal = document.getElementById("my_modal_4")
const cartContainer = document.getElementById("cart-container");
const loadingContainer = document.getElementById("loading-container");

let bookMarks = [];



const manageSpinner = (status) => {
    if(status === true){
        document.getElementById("loading-container").classList.remove('hidden');
        document.getElementById("all-plant-cat").classList.add('hidden');
    }
    else{
        document.getElementById("all-plant-cat").classList.remove('hidden');
        document.getElementById("loading-container").classList.add('hidden');
    }
}


const loadCategories = () =>{
    fetch(`https://openapi.programming-hero.com/api/categories`)
    .then(res=> res.json())
    .then(data => {
        showCategories(data.categories);
    })
    .catch(err => {
        console.log(err);

    })
}

const showCategories = (categories) => {

    categories.forEach(cat => {
      
        categoriesContainer.innerHTML += `
        <li id="${cat.id}" class="hover:bg-green-500 p-2 rounded-lg hover:text-white list-none">${cat.category_name}</li>
        `
        categoriesContainer.addEventListener('click', (e) => {
            const allLi = document.querySelectorAll('li');
    allLi.forEach(li=> {

        li.classList.remove('bg-green-600');
        li.classList.remove('text-white');
    });


           if(e.target.tagName === 'LI'){
            console.log(e.target.id);
            e.target.classList.add('bg-green-600')
            e.target.classList.add('text-white')

            loadPlantByCategories(e.target.id)
           }

           
        });
       
        
    });
    
}

allPlantCat.addEventListener('click', (e) => {
    
    if(e.target.tagName === 'H2'){
        handleViewDetails(e);  
    }

    if(e.target.innerText === 'Add to Cart'){
       handleBookmarks(e);
       alert(`${e.target.parentNode.children[1].innerText} add to cart `);
    }
    
})

const handleBookmarks = (e) => {
    const title = e.target.parentNode.children[1].innerText;
       const price = e.target.parentNode.children[3].children[1].innerText;
       const booksmarksId = e.target.parentNode.id;


       bookMarks.push({
        cartTitle : title,
        cartPrice : price,
        cartId : booksmarksId
       });
       showBookmarks(bookMarks);

       
}

const showBookmarks = (bookMarks) => {
    cartContainer.innerHTML = '';
    bookMarks.forEach(bookmark => {
        cartContainer.innerHTML +=`
        <div id="cart-Single-${bookmark.id}" class="border-gray-400 border rounded-lg mb-3 p-2 flex justify-between items-center shadow-md">
        <div>
        <h1 class="font-bold">${bookmark.cartTitle}</h1>
        <p>${bookmark.cartPrice}</p>
        </div>
        <div>
        <button onclick="handleDeleteBookmark('${bookmark.cartTitle}')" class="btn">❌</button>
        </div>
        </div>
        `
    });
    updateTotalPrice(bookMarks);
}


const updateTotalPrice = (bookMarks) => {
    const total = bookMarks.reduce((sum, bookmark) => sum + Number(bookmark.cartPrice), 0);
    const totalPriceConatiner = document.getElementById('total-price-container');
        totalPriceConatiner.innerText = `Total: ৳${total}`;
    
        
}


const handleDeleteBookmark = (bookmarkIds) => {
    bookMarks = bookMarks.filter(bookmark => 
        bookmark.cartTitle !== bookmarkIds
    );
        showBookmarks(bookMarks);
}


handleViewDetails = (e) => {
    const id = e.target.id;

    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then(res => res.json())
    .then(data => {
        showViewDetails(data.plants)
    })
    .catch(err=> {
        console.log(err)
    })
}

const showViewDetails = (details) => {
    modalContainer.innerHTML = '';
    myModal.showModal()


    modalContainer.innerHTML += `
        
                    <img class="mx-auto bg-gray-300 rounded-md h-[300px] w-[400px]" src="${details.image}" alt="" srcset="">
                    <h2 class="font-bold text-lg">${details.name}</h2>
                    <p>${details.description}</p>
                    <div class="flex justify-between items-center my-3">
                        <p class="bg-green-300 text-green-700 font-bold p-1 rounded-full">${details.category}</p>
                        <p class="font-bold"><span>${details.price}</span></p>
                    </div>
                    <button class="bg-green-600 text-white p-3 rounded-full mt-3">Add to Cart</button>
                
    `
}


const loadAllPlant = () => {
    manageSpinner(true)
    fetch(`https://openapi.programming-hero.com/api/plants`)
    .then(res => res.json())
    .then(data => {
        showAllPlant(data.plants);
    })
    .catch(err => {
        console.log(err)
    })
    
}

const showAllPlant = (allPlants) => {
   
    allPlants.forEach(plant => {
        allPlantCat.innerHTML += `
        <div id="${plant.id}" class="card bg-white rounded-xl p-3 space-y-2">
                    <img class="h-[300px] w-[350px] mx-auto bg-gray-300 rounded-md" src="${plant.image}" alt="" srcset="">
                    <h2 id=${plant.id}  class="font-bold text-lg">${plant.name}</h2>
                    <p>${plant.description}</p>
                    <div class="flex justify-between items-center my-3">
                        <p class="bg-green-300 text-green-700 font-bold p-1 rounded-full">${plant.category}</p>
                        <p class="font-bold">${plant.price}</p>
                    </div>
                    <button class="bg-green-600 text-white p-3 rounded-full mt-3">Add to Cart</button>
                </div>
        
        `
    });
    manageSpinner(false)
     
}

const loadPlantByCategories = (plantId) => {
    manageSpinner(true)
    fetch(`https://openapi.programming-hero.com/api/category/${plantId}`)
    .then(res => res.json())
    .then(data => {
        showPlantByCategories(data.plants);

    })
    .catch(err => {
        console.log(err)
    })
    

}

const showPlantByCategories = (plants) => {
    allPlantCat.innerHTML = '';

    plants.forEach(plant => {
        
        allPlantCat.innerHTML += `
        <div class="card bg-white rounded-xl p-3 space-y-2">
                    <img class="h-[300px] w-[350px] mx-auto bg-gray-300 rounded-md" src="${plant.image}" alt="" srcset="">
                    <h2 id=${plant.id} class="font-bold text-lg">${plant.name}</h2>
                    <p>${plant.description}</p>
                    <div class="flex justify-between items-center my-3">
                        <p class="bg-green-300 text-green-700 font-bold p-1 rounded-full">${plant.category}</p>
                        <p class="font-bold">${plant.price}</p>
                    </div>
                    <button  class="bg-green-600 text-white p-3 rounded-full mt-3">Add to Cart</button>
                </div>
           
        `
        
    })
    manageSpinner(false)
}
 
loadAllPlant();
loadCategories();



