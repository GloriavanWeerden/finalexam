const fetch = require('sync-fetch');
const Page = require("./_layout/Default");

module.exports = class extends Page {
    constructor(){
        super({title:"Home", sName:"Gloria van Weerden"});
        this.nSubtotal = 0.00;
    }
    render(sPage) {
        const oJson = fetch("https://finalexam-82022-default-rtdb.firebaseio.com/meals.json").json();
        console.log(oJson);
        let sResult = "<h1>Mrs. Colour's Painting Classes</h1>";
        "<p>The kit will be ready at the opening of the studio on the day that you order it. We open at 9 till 4 at 123 Speedvale Ave. Guelph.</p>" ;
        Object.keys(oJson).map((key) => {
            const oEntity = oJson[key];
            console.log(oEntity);
            oEntity.id = key;
            sResult += `
            <h2>${oEntity.title}</h2>
            <div class="row">
                <div class="column">
                    <p><img src="${oEntity.featured_image}" 
                        alt="${oEntity.title}"
                        width="500"
                        >
                    </p>
                </div>
            <div class="column">
                <p>${oEntity.full_description}</p>
                <form action="https://serene-taiga-04277.herokuapp.com/payment" method="post">
                <input type="hidden" name="title" value="${oEntity.title}" />
                <input type="hidden" name="price" value="45" />
                <input type="date" placeholder="date for pickup" name="date"/>
                <input type="tel" placeholder="enter your number" name="telephone"/>
                <button type="submit">Order paint kit.</button>
                </form></div>
                </div>
                `;
        
        }); 
        return sResult;
    }
}