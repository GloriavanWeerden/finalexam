const Page = require("./_layout/Default");

module.exports = class extends Page {
    constructor(){
        super({title:"About", sName:"Gloria van Weerden"});
    }
    render(sPage) {  
        return `
        <div class="row">
            <div class="column">
                <p><img src="https://unsplash.com/photos/GTYU1zvhv3U/download?force=true&w=1920" 
                width="600">
                </p>
            </div>
            <div class="column">
                <p> ${this.requireMarked('_pages/about.md')}</p>
            </div>
        </div>
        `;
    }                                      
 }
