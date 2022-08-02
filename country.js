class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])
let ireland = new Country("Ireland", "Irish", "Dia duit ar domhan!", ["green", "white", "orange"])
let colombia = new Country("Colombia", "Spanish", "Hola mundo!", ["yellow", "blue", "red"])
let yemen = new Country("Yemen", "Arabic", "Whats up world?", ["red", "black", "white"])
let bahamas = new Country("Bahamas", "English", "What da wybe is?!", ["aquamarine", "black", "yellow"]);
let benin = new Country("Benin", "French", "Koyo!", ["green", "yellow", "white"]);
let bhutan = new Country("Bhutan", "Dzongkha", "Kuzu zangpo la!", ["fulvous", "gold", "white"]);
let botswana = new Country("Botswana", "English", "Hello World!", ["blue", "black", "white"]);
let chad = new Country("Chad", "Arabic", "Marhaba!", ["blue", "yellow", "red"]);
let china = new Country("China", "Mandarin", "Ni hao!", ["red", "yellow"]);
let djibouti = new Country("Djibouti", "Arabic", "Salaam alaykum!", ["blue", "green", "red"]);
let jamaica = new Country("Jamaica", "English", "Wah Gwaan!", ["green", "black", "gold"]);
let morocco = new Country("Morocco", "Arabic", "Marhaba!", ["red", "green"]);
let nepal = new Country("Nepal", "Nepali", "Namaskara sansara!", ["crimson", "blue", "white"]);
let qatar = new Country("Qatar", "Arabic", "Marhaba!", ["maroon", "white"]);
let rwanda = new Country("Rwanda", "Kinyarwanda", "Muraho Bite!", ["blue", "yellow", "green"]);
let somalia = new Country("Somalia", "Somali", "Hello adduun!", ["blue", "white"]);
let uganda = new Country("Uganda", "Swahili", "Salamu, Dunia!", ["black", "yellow", "red"]);

function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    } 
    else if (input === "Ireland") {
        country = ireland;
    } 
    else if (input === "Colombia") {
        country = colombia;
    } 
    else if (input === "Yemen") {
        country = yemen;
    }
    else if (input === "Bahamas") {
        country = bahamas;
    }
    else if (input === "Benin") {
        country = benin;
    }
    else if (input === "Bhutan") {
        country = bhutan;
    }
    else if (input === "Botswana") {
        country = botswana;
    }
    else if (input === "Chad") {
        country = chad;
    }
    else if (input === "China") {
        country = china;
    }
    else if (input === "Djibouti") {
        country = djibouti;
    }
    else if (input === "Jamaica") {
        country = jamaica;
    }
    else if (input === "Morocco") {
        country = morocco;
    }
    else if (input === "Nepal") {
        country = nepal;
    }
    else if (input === "Qatar") {
        country = qatar;
    }
    else if (input === "Rwanda") {
        country = rwanda;
    }
    else if (input === "Somalia") {
        country = somalia;
    }
    else if (input === "Uganda") {
        country = uganda;
    }

    document.getElementById("CountryName").innerText = country.name;
    document.getElementById("OfficialLanguage").innerText = country.lang;
    document.getElementById("HelloWorld").innerText = country.greeting;

    document.getElementById("Color1").style.backgroundColor = country.colors[0];
    document.getElementById("Color2").style.backgroundColor = country.colors[1];
    
    if (country.colors.length > 2) {
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
        console.log("test1");
    }
    else {
        document.getElementById("Color3").style.backgroundColor = country.colors[1];
        console.log("test2");
    }
}
