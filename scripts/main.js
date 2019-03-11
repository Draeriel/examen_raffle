var shoe = {
    "model": "Sacai x Nike LDV Waffle",
    "colour": "Varsity Blue/Del Sol/Varsity Red",
    "code": "BV0073-400",
    "avaliable": "07/03/19",
    "price": "180$"
};

var raffles = {

    "Antonia Milano": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/AntoniaMilano.jpg",
        "country": "Italy",
        "purchase": "Online Raffle",
        "collection": "Postage Available",
        "Sizes": "4 to 12 US",
        "Opens": "live",
        "Closes": "06/03 @ 11AM CET",
        "url": "https://www.antonia.it/164-shoes"
    },

    "END": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/End.jpg",
        "country": "UK",
        "purchase": "Online Raffle",
        "collection": "Postage Available",
        "Sizes": "5 to 12 UK",
        "Opens": "live",
        "Closes": "07/03 @ 12AM GMT",
        "url": "https://launches.endclothing.com/"
    },

    "Foot Patrol": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/FootPatrol.png",
        "country": "France",
        "purchase": "Online Raffle",
        "collection": "Collection Only",
        "Sizes": "36.5 to 47.5 EU",
        "Opens": "live",
        "Closes": "04/02 @ 10AM CET",
        "url": "https://www.footpatrol.com/customer-service/raffle-fr/"
    },

    "Holypop": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/HolyPop.png",
        "country": "Italy",
        "purchase": "Online FCFS",
        "collection": "Postage Available",
        "Sizes": "TBC",
        "Opens": "announced",
        "Closes": "07/02 @ 12AM CET",
        "url": "https://www.holypopstore.com/en/footwear"
    },

    "Offspring": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/OffSpring.jpg",
        "country": "UK",
        "purchase": "Online Raffle",
        "collection": "Collection Only",
        "Sizes": "3.5 to 7 UK",
        "Opens": "live",
        "Closes": "closed",
        "url": "https://www.offspring.co.uk/release-dates"
    },

    "SNS": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/SNS.jpg",
        "country": "Swe, UK, Ger, Fr",
        "purchase": "Online Raffle",
        "collection": "Post and Collect",
        "Sizes": "4 to 13 US",
        "Opens": "live",
        "Closes": "06/03 @ 11AM CET",
        "url": "https://www.sneakersnstuff.com/en/937/sns-raffles"
    },

    "Solebox": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/SoleBox.jpg'",
        "country": "Germany",
        "purchase": "In-Store/Online",
        "collection": "Post and Collect",
        "Sizes": "41 to 46 EU",
        "Opens": "announced",
        "Closes": "When sold out",
        "url": "https://www.solebox.com/en/Footwear/"
    },

};

//exports.sole = {
//    "shoe": shoe,
//    "raffles": raffles
//};


window.onload = function () {
    displayShoeInfo();
    displayRaffles();
}

function getShoe() {
    return this.shoe;
}

function getRaffles() {
    return this.raffles;
}

function displayShoeInfo() {
    let shoe = this.getShoe();

    let container = document.createElement('div');
    container.setAttribute('class', 'mainProductContainer');

    let img = document.createElement('img');
    img.src = 'https://bit.ly/2EPgoOi';
    img.setAttribute('class', 'mainProductImage');

    let div = document.createElement('div');
    div.setAttribute('class', 'mainProductInfo');

    let h1 = document.createElement('h1');
    h1.innerHTML = shoe.model;

    let h3 = document.createElement('h3');
    h3.innerHTML = shoe.colour;

    let extraInfo = document.createElement('h3');
    extraInfo.innerHTML = `${shoe.code}|${shoe.avaliable}|${shoe.price}`;

    div.appendChild(h1);
    div.appendChild(h3);
    div.appendChild(extraInfo);

    container.appendChild(img);
    container.appendChild(div);

    document.body.appendChild(container);
}

function displayRaffles() {
    let raffles = this.getRaffles();

    let container = document.createElement('div');
    container.setAttribute('class', 'rafflesContainer');

    
    Object.keys(raffles).forEach( raffleKey => {
        let raffle = this.setRaffle(raffles[raffleKey]);
        container.appendChild(raffle);
        });
    document.body.appendChild(container);    
}

function setRaffle(raffle) {
    let raffleDiv = document.createElement('div');
    raffleDiv.setAttribute('class', 'raffleDiv');

    let raffleInfo = document.createElement('ul');
    
    let raffleAnchor = document.createElement('a');
    raffleAnchor.href = raffle['url'];

    let button = document.createElement('button');
    button.innerHTML = setButtonInfo(raffle);
    

    Object.keys(raffle).forEach(key => {
        if (key === 'logo') {
            let img = document.createElement('img');
            img.setAttribute('class', 'raffleImage');
            img.src = raffle[key];
            raffleDiv.appendChild(img);
        }
        else if (key === 'url') {
            if(button.innerHTML === 'ENTER RAFFLE') {
                button.setAttribute('class', 'greenButton');
            }
            if (button.innerHTML === 'CLOSED') {
                button.setAttribute('class', 'redButton');
                button.setAttribute('onclick', 'visitedPage()')
            }
        } else {
            let raffleData = document.createElement('li');
            raffleData.innerHTML = raffle[key];
            raffleInfo.appendChild(raffleData);
        }
        console.log(key, raffle[key])
    })
    raffleDiv.appendChild(raffleInfo);
    raffleAnchor.appendChild(button);
    raffleDiv.appendChild(raffleAnchor);
    return raffleDiv;
}

function setButtonInfo(raffle) {
    if (raffle['Opens'] === 'live') {
        return raffle['Closes'] === 'closed' ? 'CLOSED' : 'ENTER RAFFLE';
    } else {
        return 'ANNOUNCED';
    }
}

function visitedPage() {
    console.log($event);
}