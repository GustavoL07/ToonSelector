class Toon {
  constructor(name, image){
    this.name = name;
    this.image = image;
  }
}


const toonsList = [
  new Toon("Boxten", "/assets/toon-images/Boxten_Render.webp"),
  new Toon("Brightney", "/assets/toon-images/Brightney_Render.webp"),
  new Toon("Connie", "/assets/toon-images/Connie_Render.webp"),
  new Toon("Cosmo", "/assets/toon-images/Cosmo_Render.webp"),
  new Toon("Finn", "/assets/toon-images/Finn_Render.webp"),
  new Toon("Flutter", "/assets/toon-images/Flutter_Render.webp"),
  new Toon("Gigi", "/assets/toon-images/Gigi_Render.webp"),
  new Toon("Glisten", "/assets/toon-images/Glisten_Render.webp"),
  new Toon("Goob", "/assets/toon-images/Goob_Render.webp"),
  new Toon("Looey", "/assets/toon-images/Looey_Render.webp"),
  new Toon("Poppy", "/assets/toon-images/Poppy_Render.webp"),
  new Toon("Razzel & Dazzel", "/assets/toon-images/RazzleDazzle_Render.webp"),
  new Toon("Rodger", "/assets/toon-images/Rodger_Render.webp"),
  new Toon("Scraps", "/assets/toon-images/Scraps_Render.webp"),
  new Toon("Shrimpo", "/assets/toon-images/Shrimpo_Render.webp"),
  new Toon("Teagan", "/assets/toon-images/Teagan_Render.webp"),
  new Toon("Tisha", "/assets/toon-images/Tisha_Render.webp"),
  new Toon("Toodles", "/assets/toon-images/Toodles_Render.webp"),
  new Toon("Yatta", "/assets/toon-images/Yatta_Render.webp"),

  new Toon("Astro", "/assets/toon-images/Astro_Render.webp"),
  new Toon("Bassie", "/assets/toon-images/Bassie_Render.webp"),
  new Toon("Bobette", "/assets/toon-images/Bobette_Render.webp"),
  new Toon("Pebble", "/assets/toon-images/Pebble_Render.webp"),
  new Toon("Shelly", "/assets/toon-images/Shelly_Render.webp"),
  new Toon("Sprout", "/assets/toon-images/Sprout_Render.webp"),
  new Toon("Vee", "/assets/toon-images/Vee_Render.webp"),

  new Toon("Cocoa", "/assets/toon-images/Cocoa_Render.webp"),
  new Toon("Eggson", "/assets/toon-images/Eggson_Render.webp"),
  new Toon("Flyte", "/assets/toon-images/Flyte_Render.webp"),

  new Toon("Coal", "/assets/toon-images/Coal_Render.webp"),
  new Toon("Ginger", "/assets/toon-images/Ginger_Render.webp"),
  new Toon("Rudie", "/assets/toon-images/Rudie_Render.webp"),
]

export function getRandomToon() {
  const randomIndex = Math.floor(Math.random() * toonsList.length);
  return toonsList[randomIndex];
}

export const DANDY = new Toon("Dandy", "/assets/toon-images/Dandy_Render.webp");