class Toon {
  constructor(name, image){
    this.name = name;
    this.image = image;
  }
}

const toonsList = [
  new Toon("Boxten", "src/assets/toon-images/Boxten_Render.webp"),
  new Toon("Brightney", "src/assets/toon-images/Brightney_Render.webp"),
  new Toon("Connie", "src/assets/toon-images/Connie_Render.webp"),
  new Toon("Cosmo", "src/assets/toon-images/Cosmo_Render.webp"),
  new Toon("Finn", "src/assets/toon-images/Finn_Render.webp"),
  new Toon("Flutter", "src/assets/toon-images/Flutter_Render.webp"),
  new Toon("Gigi", "src/assets/toon-images/Gigi_Render.webp"),
  new Toon("Glisten", "src/assets/toon-images/Glisten_Render.webp"),
  new Toon("Goob", "src/assets/toon-images/Goob_Render.webp"),
  new Toon("Looey", "src/assets/toon-images/Looey_Render.webp"),
  new Toon("Poppy", "src/assets/toon-images/Poppy_Render.webp"),
  new Toon("Razzel & Dazzel", "src/assets/toon-images/RazzleDazzle_Render.webp"),
  new Toon("Rodger", "src/assets/toon-images/Rodger_Render.webp"),
  new Toon("Scraps", "src/assets/toon-images/Scraps_Render.webp"),
  new Toon("Shrimpo", "src/assets/toon-images/Shrimpo_Render.webp"),
  new Toon("Teagan", "src/assets/toon-images/Teagan_Render.webp"),
  new Toon("Tisha", "src/assets/toon-images/Tisha_Render.webp"),
  new Toon("Toodles", "src/assets/toon-images/Toodles_Render.webp"),
  new Toon("Yatta", "src/assets/toon-images/Yatta_Render.webp"),

  new Toon("Astro", "src/assets/toon-images/Astro_Render.webp"),
  new Toon("Bassie", "src/assets/toon-images/Bassie_Render.webp"),
  new Toon("Bobette", "src/assets/toon-images/Bobette_Render.webp"),
  new Toon("Pebble", "src/assets/toon-images/Pebble_Render.webp"),
  new Toon("Shelly", "src/assets/toon-images/Shelly_Render.webp"),
  new Toon("Sprout", "src/assets/toon-images/Sprout_Render.webp"),
  new Toon("Vee", "src/assets/toon-images/Vee_Render.webp"),

  new Toon("Cocoa", "src/assets/toon-images/Cocoa_Render.webp"),
  new Toon("Eggson", "src/assets/toon-images/Eggson_Render.webp"),
  new Toon("Flyte", "src/assets/toon-images/Flyte_Render.webp"),

  new Toon("Coal", "src/assets/toon-images/Coal_Render.webp"),
  new Toon("Ginger", "src/assets/toon-images/Ginger_Render.webp"),
  new Toon("Rudie", "src/assets/toon-images/Rudie_Render.webp"),
]

export function getRandomToon() {
  const randomIndex = Math.floor(Math.random() * toonsList.length);
  return toonsList[randomIndex];
}

export const DANDY = new Toon("Dandy", "src/assets/toon-images/Dandy_Render.webp");