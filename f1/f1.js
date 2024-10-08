
const APIAdress = 'https://archive-api.open-meteo.com/v1/archive?';
async function f1 (lat, long, timeStr) {
        const response = await fetch(`APIAdress`)
        const data = await response.json();
        const max = data.daily.temperature_2m_max[0];
        const min = data.daily.temperature_2m_min[0];
        const avgTemp = Math.floor((max + min) / 2);
}

module.exports = f1;
