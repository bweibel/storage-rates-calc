export const STORAGE_TYPES = {
    1: {
    cardTitle: "I Need Storage",
      storageTitle: "At Home Storage",
      description: "We deliver the box to your property and pick it up when you're done",
      icon: "/wp-content/themes/wp-storage2u/images/storage-icon.svg"
    },
    2: {
      cardTitle: "I'm Moving",
      storageTitle: "Transport",
      description: "We deliver the box to your property, you fill it, we pick it up and deliver it to your new address",
      icon: "/wp-content/themes/wp-storage2u/images/moving-icon.svg"
    },
    3: {
      cardTitle: "Off-Site Storage",
      storageTitle: "Off-Site Storage",
      description: "We deliver the box to your property, you fill it, we pick it up and store it at our facility until you are ready for it again",
      icon: "/wp-content/themes/wp-storage2u/images/off-site-icon.svg"
    }
};
  
// Here, you can fetch or define your container data and display them accordingly
export const CONTAINERS = [
    {
        "size": "8'x8'x16'",
        "image": "/wp-content/uploads/2018/05/container-sizes-16-ft.png",
        "monthly_fee": "165",
        "offsite_fee": "75",
        "dropoff_fee": "",
        "pickup_fee": "",
        "description": "3-4 rooms (1,024 sq ft)",
        "id": 1
    },
    {
        "size": "8'x8'x20'",
        "image": "/wp-content/uploads/2018/05/container-sizes-20-ft.png",
        "monthly_fee": "185",
        "offsite_fee": "75",
        "dropoff_fee": "",
        "pickup_fee": "",
        "description": "4-5 rooms (1,280 sq ft)",
        "id": 2
    },
    {
        "size": "40'",
        "image": "/wp-content/uploads/2019/11/Storage-2U-40-Foot-Container-Blue.png",
        "monthly_fee": "149",
        "offsite_fee": "75",
        "dropoff_fee": "",
        "pickup_fee": "",
        "description": "",
        "id": 3
    }
];
  
export const GOOGLE_MAPS_API_KEY = 'AIzaSyBNh4-tMKKCd0LVTkNbNaRqtAOXqyJQLok';

export const PDX_YARD_LATLONG = { lat: 45.384044684540335, lng: -122.78474009882885 }
export const YARD = { lat: 44.285720, lng: -121.157360 }
export const YARD_STORAGE = { lat: 44.285720, lng: -121.157360 }


export let PRICES = {
  timeModifier: 0,
  fuelModifier: 0.6,
  maintenanceModifier: 1.5,
  fixedCost: 75,
  minDeliveryCost: 0
}

export let VARS;

  if (typeof CalculatorData !== "undefined") {
    console.log("Data: ");
    console.log(CalculatorData);
    VARS = CalculatorData;
  } else {
    VARS = {
      "yardLocation": {
          "address": "2095 NE Hwy 20, Bend, OR 97701, USA",
          "lat": 44.05455980000001,
          "lng": -121.2723346,
          "zoom": 11,
          "place_id": "ChIJAQCUzA3GuFQRnbFmbHYyYRk",
          "name": "2095 NE Hwy 20",
          "street_number": "2095",
          "street_name": "Northeast Highway 20",
          "street_name_short": "NE Hwy 20",
          "city": "Bend",
          "state": "Oregon",
          "state_short": "OR",
          "post_code": "97701",
          "country": "United States",
          "country_short": "US"
      },
      "yardLocationStorage": {
          "address": "1075 NE 11th St, Redmond, OR 97756, USA",
          "lat": 44.285826,
          "lng": -121.156945,
          "zoom": 11,
          "place_id": "ChIJ-_8cbL4qv1QRDiXh6D9cKqU",
          "name": "1075 NE 11th St",
          "street_number": "1075",
          "street_name": "Northeast 11th Street",
          "street_name_short": "NE 11th St",
          "city": "Redmond",
          "state": "Oregon",
          "state_short": "OR",
          "post_code": "97756",
          "country": "United States",
          "country_short": "US"
      },
      "fuelCost": ".6",
      "timeCost": "0",
      "maintenanceCost": "3",
      "minimumDeliveryCost": "0",
      "flatFee": "20",
      "containers": [
          {
              "size": "8'x8'x16'",
              "image": "/wp-content/uploads/2018/05/container-sizes-16-ft.png",
              "monthly_fee": "165",
              "offsite_fee": "",
              "dropoff_fee": "",
              "pickup_fee": "",
              "description": "3-4 rooms (1,024 sq ft)",
              "id": 1
          },
          {
              "size": "8'x8'x20'",
              "image": "/wp-content/uploads/2018/05/container-sizes-20-ft.png",
              "monthly_fee": "185",
              "offsite_fee": "",
              "dropoff_fee": "",
              "pickup_fee": "",
              "description": "4-5 rooms (1,280 sq ft)",
              "id": 2
          },
          {
              "size": "40'",
              "image": "/wp-content/uploads/2019/11/Storage-2U-40-Foot-Container-Blue.png",
              "monthly_fee": "149",
              "offsite_fee": "",
              "dropoff_fee": "",
              "pickup_fee": "",
              "description": "",
              "id": 3
          }
      ],
      "configMode": "1"
  }
  }

