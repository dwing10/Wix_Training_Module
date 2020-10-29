import { getCurrentTemp } from 'backend/Weather';

export function button1_click(event) {
	getCurrentTemp($w("#userInput").value)
		.then(weather => {
			$w('#results').text = "Temp: " + weather.main.temp + "\n"
				+ "Feels Like: " + weather.main.feels_like + "\n"
				+ "Humidity: " + weather.main.humidity;
		});
}

$w.onReady(function () {
	// Write your JavaScript here

	// To select an element by ID use: $w("#elementID")

	// Click "Preview" to run your code


});