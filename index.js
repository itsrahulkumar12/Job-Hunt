
const promiseData = fetch("data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let main = document.querySelector("#main");
      let output = "";

      for (let item of data) {
        output += `
        <div id="card" class="p-5 max-w-[1100px] w-[75%] flex flex-col md:flex-row bg-[#f3fdff] rounded drop-shadow-lg mb-12 md:mb-8">
            <div class="flex md:flex-1 items-center">
                <img class="absolute top-[-25px] md:static h-12 w-12 md:h-16 md:w-16" src="${item.image}" alt="img1">
                <div class="md:mx-4 mt-4">
                    <h5 class="text-sm font-semibold text-[#5aa9a6]">${item.company}</h5>
                    <h3 class="text-sm font-bold hover:text-[#5aa9a6] cursor-pointer">${item.jobTitle}</h3>
                    <div class="flex justify-between gap-2 text-xs font-semibold text-[#555555]">
                        <h5 class="">${item.time} <span class="ml-1">•</span></h5>
                        <h5>${item.jobType} <span class="ml-1">•</span></h5>
                        <h5>${item.country}</h5>
                    </div>
                </div>
            </div>

            <div class="md:hidden h-[1px] w-full bg-[#888888] my-5"></div>
            <div class="flex flex-wrap gap-5 md:flex-1 md:items-center md:justify-evenly text-sm font-semibold text-[#5aa9a6]">
                <h4 class="bg-[#ecf5f3] py-1 px-2 rounded hover:text-white hover:bg-[#5aa9a6] cursor-pointer">${item.skills[0]}</h4>
                <h4 class="bg-[#ecf5f3] py-1 px-2 rounded hover:text-white hover:bg-[#5aa9a6] cursor-pointer">${item.skills[1]}</h4>
                <h4 class="bg-[#ecf5f3] py-1 px-2 rounded hover:text-white hover:bg-[#5aa9a6] cursor-pointer">${item.skills[2]}</h4>
                <h4 class="bg-[#ecf5f3] py-1 px-2 rounded hover:text-white hover:bg-[#5aa9a6] cursor-pointer">${item.skills[3]}</h4>
                <h4 class="bg-[#ecf5f3] py-1 px-2 rounded hover:text-white hover:bg-[#5aa9a6] cursor-pointer">${item.skills[4]}</h4>
            </div>
        </div>
            `;
      }

      main.innerHTML = output;
    //   console.log(data);

    //   let skill = data;
    //   console.log(skill[1].skills[2]);
    //   let a = skill[1].skills[2];


      return data;

      
    });

    const searchSkill =  async () => {
        const b = await promiseData;

        // console.log(b[5].skills)

        let input = document.querySelector("#searchbar").value;
        input = input.toLowerCase();
        // let card = document.querySelector("#card");

        // for (let i=0; i< 10; i++) {
        //     for(let j=0; j< (b[i].skills).length; j++){
        //         if(!(b[i].skills[j]).toLowerCase().includes(input)){
        //             card.classList.add("hidden")
        //         } else {
        //             card.classList.remove("hidden")
        //         }
        //     }
        // }
        
    
        
    }


