

// button click korar por onno button e click korle ager button er background color remove korbe

function removeActiveClass(){
    const activeButton = document.getElementsByClassName('active');

    for(let btn of activeButton){
        btn.classList.remove("active");
    }

    // console.log(activeButton)
}








const loadCategoryVid = (id) => {


    // show loader call
    showLoading()


    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    console.log(url)

    fetch(url)
    .then(res=>res.json())

    // single line task er jonno below line
    // .then(data => dispalyVideos(data.category))


    // multi line task er jonno Below line
    .then((data) => {
        // console.log(data.category)

        removeActiveClass()

        
        

        const clickButton = document.getElementById(`btn-${id}`)
        clickButton.classList.add("active")
        
        
    
        console.log(clickButton)
        dispalyVideos(data.category)
    });
}


// loadCategoryVid()

//  id="btn-${cat.category_id}"




