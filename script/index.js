
// console.log("index is conected")

// show loader function
const showLoading=()=>{
    document.getElementById("loader").classList.remove('hidden');
    document.getElementById('vid-container').classList.add('hidden')
}
// show loader function hide kora
const hideLoading=()=>{
    document.getElementById("loader").classList.add('hidden');
    document.getElementById('vid-container').classList.remove('hidden')
}




function loadCategories(){

    // 1- fetch the data

    fetch ("https://openapi.programming-hero.com/api/phero-tube/categories")


    // 2- convert promise to json

    // console kore data check kora
    // .then((res)=>console.log(res))
    .then((res)=>res.json())


    // 1 line e then kora
    //   .then((data) => displayCategories(data.categories));


    // 3- send data to display(display function)

    .then(data => {
        // console.log(data)
        // 2nd time call kore vitor er data niye asa hoice
        // console.log(data.
        //     categories
        //     )

        // onno function diye data ke call kora
            displayCategories(data.categories)
    })

    

}

function displayCategories(categories){
    // console.log(categories)

    // 4- get the container
    const categoryContainer = document.getElementById("category-container");


    // 5- Loop Operation on Array of Object
    for(let cat of categories){

            // console.log(cat)

        // 6- create Element
            const categoryDiv = document.createElement("div");
            categoryDiv.innerHTML=`
            <button id="btn-${cat.category_id}" onclick="loadCategoryVid(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
            `
            // onclick er sahajje category js theke loadCategoryVid call kora hoice



        // 7- Append the Element
            categoryContainer.appendChild(categoryDiv);

    }

  
}



document.getElementById("search-input").addEventListener("keyup", (search)=>{
    const input = search.target.value;
    // console.log(input)
    loadVideos(input);
})



loadCategories()


// {
//     "category_id": "1001",
//     "category": "Music"
// }

// {
//     "category_id": "1003",
//     "category": "Comedy"
// }

// {
//     "category_id": "1005",
//     "category": "Drawing"
// }