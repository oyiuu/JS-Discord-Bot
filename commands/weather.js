const Discord = require("discord.js");
const axios = require("axios");

const exampleEmbed = (
	temp,
	maxTemp,
	minTemp,
	pressure,
	humidity,
	wind,
	cloudness,
	icon,
	cityName,
	country
) =>
	new Discord.MessageEmbed()
		.setColor('#D30171')
		.setTitle(`It is ${temp}\u00B0 C in ${cityName}, ${country}`)
		.addField(`Max. Temperature:`, `${maxTemp}\u00B0 C`, true)
		.addField(`Min. Temperature:`, `${minTemp}\u00B0 C`, true)
		.addField(`Humidity:`, `${humidity} %`, true)
		.addField(`Wind Speed:`, `${wind} m/s`, true)
		.addField(`Pressure:`, `${pressure} hpa`, true)
		.addField(`Cloudiness:`, `${cloudness}`, true)
		.setThumbnail(`http://openweathermap.org/img/w/${icon}.png`)
		.setFooter('The weather was brought to you by BALLS.');		

module.exports = {
	name: "weather",
	description: "weather stats with the help of openweather!",
	execute(message, args) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=6215376b3f568f0481e1a140faa8ba90`)
            .then(response => {
                let apiData = response;
                let currentTemp = Math.ceil(apiData.data.main.temp)
                let maxTemp = apiData.data.main.temp_max;
                let minTemp = apiData.data.main.temp_min;
                let humidity = apiData.data.main.humidity;
                let wind = apiData.data.wind.speed;
                let icon = apiData.data.weather[0].icon
                let cityName = args
                let country = apiData.data.sys.country
                let pressure = apiData.data.main.pressure;
                let cloudness = apiData.data.weather[0].description;
                message.channel.send(exampleEmbed(currentTemp, maxTemp, minTemp, pressure, humidity, wind, cloudness, icon, cityName, country));
            }).catch(err => {
                message.reply(`please enter a valid city name.`)
            })
    }
}