export const navigationtop = [
    { name: "HOTELS", href: "hotel", current: true },
    { name: "OFFERS", href: "offers", current: false, },
    { name: "ROOMS", href: "rooms", current: false,submenu:[{name:'ROOMS & SUITS',href:'rooms',current: false,},{name:'BUNKS',href:'bunks',current: false,},{name:'LONG TERM STAY',href:'long-term-stay',current: false,}] },
    { name: "EAT & DRINKS", href: "eat-drink", current: false }
  ];
  export const navigationbottom = [
    { name: "GROUPS", href: "groups-events", current: true },
    { name: "GALARY", href: "gallary", current: false },
    { name: "EXPERINCE", href: "experince", current: false,submenu:[{name:'EXPLORE ATLANTA',href:'experince',current: false,},{name:'CLERMONT EVENTS',href:'events',current: false,}] },
    { name: "SHOP", href: "shop", current: false }
  ];