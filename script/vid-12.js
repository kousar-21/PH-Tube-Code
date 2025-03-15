

function loadVideos(searchText = ""){

    // show loader call
    showLoading()




    // 1- fetch the data
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)

     // 2- convert promise to json
    .then(response => response.json())

    // 3- send data to display(display function). For this below line copy poperty path from browser console .  And single line code
    // .then(data => dispalyVideos(data.videos));
    
    // for multiple line code
    .then(data => {

        removeActiveClass()

        document.getElementById('btn-All').classList.add('active');

        dispalyVideos(data.videos)
    });
}



const loadVidDetail =(vidi) => {
    console.log(vidi);

    const url = ` https://openapi.programming-hero.com/api/phero-tube/video/${vidi}`

    fetch(url)
    .then(reso=>reso.json())
    .then(data => {
        displayVidDetail(data.video)
    })

}

const displayVidDetail = (vedeo)=>{
    console.log(vedeo)

    document.getElementById('video_modal_details').showModal();

    const detailsContainer = document.getElementById("details-container")

    detailsContainer.innerHTML=`
    

        <div class="card bg-base-100 image-full shadow-sm">
      <figure>
        <img
          src="${vedeo.thumbnail}"
          alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${vedeo.title}</h2>
        <h2>${vedeo.authors[0].profile_name}</h2>
        <p>${vedeo.description}</p>
        <div class="card-actions justify-end">
         
        </div>
      </div>
    </div>
    




    `
}




const dispalyVideos = (vidios) => {
    // console.log(vidios)

    // 4- get the container
    const videoContainer = document.getElementById("vid-container")


        // button e click korar por ager sob kicu khali korar jonno nicher tecnic use hoi

        videoContainer.innerHTML = "";

         // byDefault ba Length ===0 hole kicu set kora
         if(vidios.length == 0){
            videoContainer.innerHTML = `
            <div class="py-20 col-span-full flex flex-col justify-center items-center text-center">
            <img class="w-[120px]" src="Assets/Icon.png" alt="">
            <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
            </div>
            `;

            // sob  gula funtion call korle hide loader er use
            hideLoading()


            return;
         }
 


    // 5- Loop Operation on Array of Object
    vidios.forEach(video => {
        // console.log(video)


        // 6- create Element
        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
             <div class="card bg-base-100">
            <figure class="relative">
                <img class="w-full h-[150px] object-cover"
                src="${video.thumbnail}"
                alt="Shoes" />
                <span class="absolute bottom-2 right-2 bg-black text-white text-sm p-2 rounded">3hrs 56 min ago</span>
            </figure>
            <div class="flex gap-3 px-0 py-5">
                <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                          <img src="${video.authors[0].profile_picture}" />
                        </div>
                      </div>
                </div>
                <div class="intro">
                    <h2 class="text-sm font-semibold">${video.title}</h2>
                    <p class="text-gray-400 flex gap-2">${video.authors[0].profile_name}
                     ${video.authors[0].verified == true ? `<img class="w-5 h-5" src="https://img.icons8.com/?size=64&id=6xO3fnY41hu2&format=png" alt="">` : `` }</p>
                    
                    <p class="text-gray-400">${video.others.views} views</p>
                </div>
            </div>

            <button onclick="loadVidDetail('${video.video_id}')" class="btn btn-block">Show Details</button>

        </div>

        `
        // Verified ki na check korar jonno Ternary Operator use kora hoice


        // 7- Append the Element
        videoContainer.appendChild(videoCard)
    });


    // sob  gula funtion call korle hide loader er use
    hideLoading()

}













// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }