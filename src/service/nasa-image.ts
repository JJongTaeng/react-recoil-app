import axios from "axios";

export async function getNasaInfo() {
  return await axios.get('https://images-api.nasa.gov/search?q=seoul');
}
