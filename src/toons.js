class Toon {
  constructor(name, image){
    this.name = name;
    this.image = image;
  }
}


const toonsList = [
  new Toon("Boxten", "/ToonSelector/assets/toon-images/Boxten_Render.webp"),
  new Toon("Brightney", "/ToonSelector/assets/toon-images/Brightney_Render.webp"),
  new Toon("Connie", "/ToonSelector/assets/toon-images/Connie_Render.webp"),
  new Toon("Cosmo", "/ToonSelector/assets/toon-images/Cosmo_Render.webp"),
  new Toon("Finn", "/ToonSelector/assets/toon-images/Finn_Render.webp"),
  new Toon("Flutter", "/ToonSelector/assets/toon-images/Flutter_Render.webp"),
  new Toon("Gigi", "/ToonSelector/assets/toon-images/Gigi_Render.webp"),
  new Toon("Glisten", "/ToonSelector/assets/toon-images/Glisten_Render.webp"),
  new Toon("Goob", "/ToonSelector/assets/toon-images/Goob_Render.webp"),
  new Toon("Looey", "/ToonSelector/assets/toon-images/Looey_Render.webp"),
  new Toon("Poppy", "/ToonSelector/assets/toon-images/Poppy_Render.webp"),
  new Toon("Razzel & Dazzel", "/ToonSelector/assets/toon-images/RazzleDazzle_Render.webp"),
  new Toon("Rodger", "/ToonSelector/assets/toon-images/Rodger_Render.webp"),
  new Toon("Scraps", "/ToonSelector/assets/toon-images/Scraps_Render.webp"),
  new Toon("Shrimpo", "/ToonSelector/assets/toon-images/Shrimpo_Render.webp"),
  new Toon("Teagan", "/ToonSelector/assets/toon-images/Teagan_Render.webp"),
  new Toon("Tisha", "/ToonSelector/assets/toon-images/Tisha_Render.webp"),
  new Toon("Toodles", "/ToonSelector/assets/toon-images/Toodles_Render.webp"),
  new Toon("Yatta", "/ToonSelector/assets/toon-images/Yatta_Render.webp"),

  new Toon("Astro", "/ToonSelector/assets/toon-images/Astro_Render.webp"),
  new Toon("Bassie", "/ToonSelector/assets/toon-images/Bassie_Render.webp"),
  new Toon("Bobette", "/ToonSelector/assets/toon-images/Bobette_Render.webp"),
  new Toon("Pebble", "/ToonSelector/assets/toon-images/Pebble_Render.webp"),
  new Toon("Shelly", "/ToonSelector/assets/toon-images/Shelly_Render.webp"),
  new Toon("Sprout", "/ToonSelector/assets/toon-images/Sprout_Render.webp"),
  new Toon("Vee", "/ToonSelector/assets/toon-images/Vee_Render.webp"),

  new Toon("Cocoa", "/ToonSelector/assets/toon-images/Cocoa_Render.webp"),
  new Toon("Eggson", "/ToonSelector/assets/toon-images/Eggson_Render.webp"),
  new Toon("Flyte", "/ToonSelector/assets/toon-images/Flyte_Render.webp"),

  new Toon("Coal", "/ToonSelector/assets/toon-images/Coal_Render.webp"),
  new Toon("Ginger", "/ToonSelector/assets/toon-images/Ginger_Render.webp"),
  new Toon("Rudie", "/ToonSelector/assets/toon-images/Rudie_Render.webp"),
]

export function getRandomToon() {
  const randomIndex = Math.floor(Math.random() * toonsList.length);
  return toonsList[randomIndex];
}

export const DANDY = new Toon("Dandy", "/ToonSelector/assets/toon-images/Dandy_Render.webp");