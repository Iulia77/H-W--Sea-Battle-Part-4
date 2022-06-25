//Array of objects

//H-W1 Add explosion property to each layer
// and using if render the explosion only when torpedo is layer as the ship

let layers = [
    {
        ship: false,
        torpedo: false,
        explosion: false
    },
    {
        ship: false,
        torpedo: false,
        explosion: false
    },
    {
        ship: false,
        torpedo: false,
        explosion: false
    },
    {
        ship: false,
        torpedo: false,
        explosion: false
    },
    {
        ship: false,
        torpedo: false,
        explosion: false
    },
    {
        ship: false,
        torpedo: false,
        explosion: false
    },
    {
        ship: true,
        torpedo: true,
        explosion: true
    },
    {
        ship: false,
        torpedo: false,
        explosion: false
    },
    {
        ship: false,
        torpedo: false,
        explosion: false
    },
    {
        ship: false,
        torpedo: false,
        explosion: false
    },
    
]

const render = () => {
    let seaDiv = document.querySelector('.sea')

for(let i=0; i<=9; i++) {

    let objects = ''

    if (layers[i].ship) {
        objects += `
        <div class="ship">
                <div class="main"></div>
                <div class="middle">
                </div>
                <div class="top"></div>
                <div class="top-1"></div>
                <div class="top-2"></div>
                <div class="mast">
                    <div class="mast-1"></div>
                </div>
                
            </div>
        `
    }
    if (layers[i].torpedo) {
        objects += `
        <div class="torpedo reverse">
        <div class="head center">    
        </div>
        <div class="body center">
        </div>
        <div class="tail-h center"></div>
        <div class="tail-v center"></div>
        <div class="tail center"></div>
        </div>
        `
    }
    if (layers[i].explosion) {
        objects += `
        <div class="explosion">
        <div class="fire-bottom-sm"></div>
        <div class="fire-bottom-md"></div>
        </div>
        `
    }


    seaDiv.innerHTML += `
    <div class="layer"> <!--layer $(i) 0-->
    ${objects}

    <div class="wave"></div>
   </div>`
}

}


//
render()
