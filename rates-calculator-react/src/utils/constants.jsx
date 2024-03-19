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
    id: 1,
    size: "8'x8'x16'",
    image: "/wp-content/themes/wp-storage2u/images/container-sizes-16-ft.webp",
    description: '3-4 rooms (1,024 sq ft)',
    monthlyCost: 165,
    offsiteCost: 0,
    availableFor: [1,2,3]
  },
  {
    id: 2,
    size: "8'x8'x20'",
    image: "/wp-content/themes/wp-storage2u/images/container-sizes-20-ft.webp",
    description: '4-5 rooms (1,280 sq ft)',
    monthlyCost: 185,
    offsiteCost: 0,
    availableFor: [1,2,3]
  },
  {
    id: 3,
    size: "40'",
    image: "/wp-content/themes/wp-storage2u/images/Storage-2U-40-Foot-Container-Blue.png",
    description: '',
    monthlyCost: 149,
    offsiteCost: 0,
    availableFor: [1]
  }
];
  
export const GOOGLE_MAPS_API_KEY = 'AIzaSyBNh4-tMKKCd0LVTkNbNaRqtAOXqyJQLok';

export const PDX_YARD_LATLONG = { lat: 45.384044684540335, lng: -122.78474009882885 }
export const YARD = { lat: 44.285720, lng: -121.157360 }

export const PRICES = {
  timeModifier: 0,
  fuelModifier: 0.6,
  maintenanceModifier: 1.5,
  fixedCost: 75,
  minDeliveryCost: 0
}