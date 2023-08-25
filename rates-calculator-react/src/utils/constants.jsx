export const STORAGE_TYPES = {
    1: {
    cardTitle: "I Need Storage",
      storageTitle: "At Home Storage",
      description: "We deliver the box to your property for your use and pick it up when your done",
      icon: "./how-it-works-3.png"
    },
    2: {
      cardTitle: "I'm Moving",
      storageTitle: "Transport",
      description: "We deliver the box to your property you fill it, we pick it up and deliver it to your new address",
      icon: "./how-it-works-4.png"
    },
    3: {
      cardTitle: "On Site Storage",
      storageTitle: "On Site Storage",
      description: "We deliver the box to your property you fill it, we pick it up and store it at our facility until you are ready for it again",
      icon: "./how-it-works-4.png"
    }
};
  
// Here, you can fetch or define your container data and display them accordingly
export const CONTAINERS = [
  {
    id: 1,
    size: "8'x8'x16'",
    image: "./container-sizes-16-ft.webp",
    monthlyCost: 165
  },
  {
    id: 2,
    size: "8'x8'x20'",
    image: "./container-sizes-20-ft.webp",
    monthlyCost: 165
  },
  {
    id: 3,
    size: "40'",
    image: "./Storage-2U-40-Foot-Container-Blue.png",
    monthlyCost: 185
  }
];
  
export const GOOGLE_MAPS_API_KEY = 'AIzaSyBNh4-tMKKCd0LVTkNbNaRqtAOXqyJQLok';

export const PDX_YARD_LATLONG = { lat: 45.384044684540335, lng: -122.78474009882885 }
export const RDM_YARD_LATLONG = { lat: 44.285720, lng: -121.157360 }

export const PRICES = {
  timeModifier: 10,
  fuelModifier: 2.5,
  matainenceModifier: 30,
  fixedCost: 100
}