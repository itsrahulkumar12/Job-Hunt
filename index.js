
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
          


        
          /*-----------------------for all job filter-------------------------*/ 
        //all job function
        const allJobs = () => {
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

          djangojobs.classList.remove("active");
           alljobs.classList.add("active");
           frontendjobs.classList.remove("active");
           backendjobs.classList.remove("active");
           fullstackjobs.classList.remove("active");
           javascriptjobs.classList.remove("active");
           cssjobs.classList.remove("active");
           reactjobs.classList.remove("active");
           pythonjobs.classList.remove("active");
           htmljobs.classList.remove("active");
           sassjobs.classList.remove("active");
           rubyjobs.classList.remove("active");
    
        }
         
        //   for all jobs by clicking => all filter  
        let alljobs = document.querySelector("#alljobs");
        alljobs.addEventListener("click",allJobs);   


        /*---------------Frontend Jobs starts----------------------*/

        //for frontendData
        let frontendData = data.filter(e => e.skills.includes("Frontend"));
        
                // frontendjob function
        const frontendJobs = () => {
            let main = document.querySelector("#main");
          let output = "";
    
          for (let item of frontendData) {
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

          djangojobs.classList.remove("active");
           alljobs.classList.remove("active");
           frontendjobs.classList.add("active");
           backendjobs.classList.remove("active");
           fullstackjobs.classList.remove("active");
           javascriptjobs.classList.remove("active");
           cssjobs.classList.remove("active");
           reactjobs.classList.remove("active");
           pythonjobs.classList.remove("active");
           htmljobs.classList.remove("active");
           sassjobs.classList.remove("active");
           rubyjobs.classList.remove("active");
    
        }

        // for frontend filter
        let frontendjobs = document.querySelector("#frontendJobs");
        frontendjobs.addEventListener("click",frontendJobs);


        /*---------------Backend Jobs starts----------------------*/

         //for backendData
         let backendData = data.filter(e => e.skills.includes("Backend"));
         
                 // backendjob function
         const backendJobs = () => {
             let main = document.querySelector("#main");
           let output = "";
     
           for (let item of backendData) {
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

           djangojobs.classList.remove("active");
           alljobs.classList.remove("active");
           frontendjobs.classList.remove("active");
           backendjobs.classList.add("active");
           fullstackjobs.classList.remove("active");
           javascriptjobs.classList.remove("active");
           cssjobs.classList.remove("active");
           reactjobs.classList.remove("active");
           pythonjobs.classList.remove("active");
           htmljobs.classList.remove("active");
           sassjobs.classList.remove("active");
           rubyjobs.classList.remove("active");
     
         }
 
         // for backend filter
         let backendjobs = document.querySelector("#backendJobs");
         backendjobs.addEventListener("click",backendJobs);




         /*---------------Fullstack Jobs starts----------------------*/

         //for fullstackData
         let fullstackData = data.filter(e => e.skills.includes("Fullstack"));
         
                 // fullstackjob function
         const fullstackJobs = () => {
             let main = document.querySelector("#main");
           let output = "";
     
           for (let item of fullstackData) {
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

           djangojobs.classList.remove("active");
           alljobs.classList.remove("active");
           frontendjobs.classList.remove("active");
           backendjobs.classList.remove("active");
           fullstackjobs.classList.add("active");
           javascriptjobs.classList.remove("active");
           cssjobs.classList.remove("active");
           reactjobs.classList.remove("active");
           pythonjobs.classList.remove("active");
           htmljobs.classList.remove("active");
           sassjobs.classList.remove("active");
           rubyjobs.classList.remove("active");
     
         }
 
         // for fullstack filter
         let fullstackjobs = document.querySelector("#fullstackJobs");
         fullstackjobs.addEventListener("click",fullstackJobs);



         /*---------------JavaScript Jobs starts----------------------*/

         //for JavascriptData
         let javascriptData = data.filter(e => e.skills.includes("JavaScript"));
         
                 // Javascriptjob function
         const javascriptJobs = () => {
             let main = document.querySelector("#main");
           let output = "";
     
           for (let item of javascriptData) {
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

           djangojobs.classList.remove("active");
           alljobs.classList.remove("active");
           frontendjobs.classList.remove("active");
           backendjobs.classList.remove("active");
           fullstackjobs.classList.remove("active");
           javascriptjobs.classList.add("active");
           cssjobs.classList.remove("active");
           reactjobs.classList.remove("active");
           pythonjobs.classList.remove("active");
           htmljobs.classList.remove("active");
           sassjobs.classList.remove("active");
           rubyjobs.classList.remove("active");
     
         }
 
         // for Javascript filter
         let javascriptjobs = document.querySelector("#javascriptJobs");
         javascriptjobs.addEventListener("click",javascriptJobs);



         /*---------------Css Jobs starts----------------------*/

         //for CSSData
         let cssData = data.filter(e => e.skills.includes("CSS"));
         
                 // CSSjob function
         const cssJobs = () => {
             let main = document.querySelector("#main");
           let output = "";
     
           for (let item of cssData) {
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

           djangojobs.classList.remove("active");
           alljobs.classList.remove("active");
           frontendjobs.classList.remove("active");
           backendjobs.classList.remove("active");
           fullstackjobs.classList.remove("active");
           javascriptjobs.classList.remove("active");
           cssjobs.classList.add("active");
           reactjobs.classList.remove("active");
           pythonjobs.classList.remove("active");
           htmljobs.classList.remove("active");
           sassjobs.classList.remove("active");
           rubyjobs.classList.remove("active");
     
         }
 
         // for CSS filter
         let cssjobs = document.querySelector("#cssJobs");
         cssjobs.addEventListener("click",cssJobs);



         /*---------------React Jobs starts----------------------*/

         //for reactData
         let reactData = data.filter(e => e.skills.includes("React"));
         
                 // Reactjob function
         const reactJobs = () => {
             let main = document.querySelector("#main");
           let output = "";
     
           for (let item of reactData) {
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

           djangojobs.classList.remove("active");
           alljobs.classList.remove("active");
           frontendjobs.classList.remove("active");
           backendjobs.classList.remove("active");
           fullstackjobs.classList.remove("active");
           javascriptjobs.classList.remove("active");
           cssjobs.classList.remove("active");
           reactjobs.classList.add("active");
           pythonjobs.classList.remove("active");
           htmljobs.classList.remove("active");
           sassjobs.classList.remove("active");
           rubyjobs.classList.remove("active");
     
         }
 
         // for react filter
         let reactjobs = document.querySelector("#reactJobs");
         reactjobs.addEventListener("click",reactJobs);


         /*---------------Python Jobs starts----------------------*/

         //for PythonData
         let pythonData = data.filter(e => e.skills.includes("Python"));
         
                 // pythonjob function
         const pythonJobs = () => {
             let main = document.querySelector("#main");
           let output = "";
     
           for (let item of pythonData) {
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

           djangojobs.classList.remove("active");
           alljobs.classList.remove("active");
           frontendjobs.classList.remove("active");
           backendjobs.classList.remove("active");
           fullstackjobs.classList.remove("active");
           javascriptjobs.classList.remove("active");
           cssjobs.classList.remove("active");
           reactjobs.classList.remove("active");
           pythonjobs.classList.add("active");
           htmljobs.classList.remove("active");
           sassjobs.classList.remove("active");
           rubyjobs.classList.remove("active");
     
         }
 
         // for python filter
         let pythonjobs = document.querySelector("#pythonJobs");
         pythonjobs.addEventListener("click",pythonJobs);


         /*---------------HTML Jobs starts----------------------*/

         //for htmlData
         let htmlData = data.filter(e => e.skills.includes("HTML"));
         
                 // HTMLjob function
         const htmlJobs = () => {
             let main = document.querySelector("#main");
           let output = "";
     
           for (let item of htmlData) {
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

           djangojobs.classList.remove("active");
           alljobs.classList.remove("active");
           frontendjobs.classList.remove("active");
           backendjobs.classList.remove("active");
           fullstackjobs.classList.remove("active");
           javascriptjobs.classList.remove("active");
           cssjobs.classList.remove("active");
           reactjobs.classList.remove("active");
           pythonjobs.classList.remove("active");
           htmljobs.classList.add("active");
           sassjobs.classList.remove("active");
           rubyjobs.classList.remove("active");
     
         }
 
         // for html filter
         let htmljobs = document.querySelector("#htmlJobs");
         htmljobs.addEventListener("click",htmlJobs);


         /*---------------Sass Jobs starts----------------------*/

         //for sassData
         let sassData = data.filter(e => e.skills.includes("Sass"));
         
                 // sass job function
         const sassJobs = () => {
             let main = document.querySelector("#main");
           let output = "";
     
           for (let item of sassData) {
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

           djangojobs.classList.remove("active");
           alljobs.classList.remove("active");
           frontendjobs.classList.remove("active");
           backendjobs.classList.remove("active");
           fullstackjobs.classList.remove("active");
           javascriptjobs.classList.remove("active");
           cssjobs.classList.remove("active");
           reactjobs.classList.remove("active");
           pythonjobs.classList.remove("active");
           htmljobs.classList.remove("active");
           sassjobs.classList.add("active");
           rubyjobs.classList.remove("active");
     
         }
 
         // for sass filter
         let sassjobs = document.querySelector("#sassJobs");
         sassjobs.addEventListener("click",sassJobs);


         /*---------------Ruby Jobs starts----------------------*/

         //for rubyData
         let rubyData = data.filter(e => e.skills.includes("Ruby"));
         
                 // rubyjob function
         const rubyJobs = () => {
             let main = document.querySelector("#main");
           let output = "";
     
           for (let item of rubyData) {
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

           djangojobs.classList.remove("active");
           alljobs.classList.remove("active");
           frontendjobs.classList.remove("active");
           backendjobs.classList.remove("active");
           fullstackjobs.classList.remove("active");
           javascriptjobs.classList.remove("active");
           cssjobs.classList.remove("active");
           reactjobs.classList.remove("active");
           pythonjobs.classList.remove("active");
           htmljobs.classList.remove("active");
           sassjobs.classList.remove("active");
           rubyjobs.classList.add("active");
     
         }
 
         // for ruby filter
         let rubyjobs = document.querySelector("#rubyJobs");
         rubyjobs.addEventListener("click",rubyJobs);


         /*---------------Django Jobs starts----------------------*/

         //for djangoData
         let djangoData = data.filter(e => e.skills.includes("DJango"));
         
                 // djangojob function
         const djangoJobs = () => {
             let main = document.querySelector("#main");
           let output = "";
     
           for (let item of djangoData) {
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

           djangojobs.classList.add("active");
           alljobs.classList.remove("active");
           frontendjobs.classList.remove("active");
           backendjobs.classList.remove("active");
           fullstackjobs.classList.remove("active");
           javascriptjobs.classList.remove("active");
           cssjobs.classList.remove("active");
           reactjobs.classList.remove("active");
           pythonjobs.classList.remove("active");
           htmljobs.classList.remove("active");
           sassjobs.classList.remove("active");
           rubyjobs.classList.remove("active");

           
     
         }
 
         // for django filter
         let djangojobs = document.querySelector("#djangoJobs");
         djangojobs.addEventListener("click",djangoJobs);


         



       return data;  
    });

    




