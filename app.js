const apiKey = '4030928d6ff54eba817132703252402';  // Substitua com sua chave da API WeatherAPI

// Função que faz a requisição para a API e exibe os dados
async function getWeather() {
  const city = document.getElementById('city').value.trim();  // Captura a cidade selecionada

  if (!city) {
    alert("Por favor, selecione uma cidade!");
    return;
  }

  // Codificando a cidade para a URL
  const cityEncoded = encodeURIComponent(city);

  // URL para fazer a requisição à API WeatherAPI
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityEncoded}&lang=pt`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      alert("Cidade não encontrada. Tente novamente.");
      console.error(data.error);  // Exibe os dados da API no console para verificação
      return;
    }

    // Exibe as informações de clima
    document.getElementById('temperature').textContent = `Temperatura: ${data.current.temp_c} °C`;
    document.getElementById('description').textContent = `Clima: ${data.current.condition.text}`;
    document.getElementById('humidity').textContent = `Umidade: ${data.current.humidity}%`;
    document.getElementById('wind').textContent = `Vento: ${data.current.wind_kph} km/h`;

  } catch (error) {
    alert("Ocorreu um erro ao obter os dados.");
    console.error(error);  // Exibe o erro no console
  }
}




//4030928d6ff54eba817132703252402