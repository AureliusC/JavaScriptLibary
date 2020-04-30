let myTv = {
   screenSize: 27,
   screenType: "plasma",
   refreshRate: 140,
   manufacturer:"sony",
};

let yourTV = {
 screenSize:60,
 screenType:"lcd",
 refreshRate: 60,
 manufacturer:"samsung"
}

function TV (screenSize, screenType, refreshRate, manufacturer) {
    this.screenSize = screenSize;
    this.screenType = screenType;
    this.refreshRate = refreshRate;
    this.manufacturer = manufacturer;
}

myTv.refreshRate;

let firstTv = new TV(80, "led", 80, "LG");

console.log(firstTv.getDescription());

class TV {
 constructor(screenSize, screenType, refreshRate, manufacturer) {
    this.screenSize = screenSize;
    this.screenType = screenType;
    this.refreshRate = refreshRate;
    this.manufacturer = manufacturer;
    }

    getDescription() {
        return `A ${this.screenSize}"${this.refreshRate}hz ${this.screenType}${this.manufacturer} TV.`;
    }
}



