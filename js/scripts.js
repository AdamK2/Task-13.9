var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
$('#search').click(searchCountries);
function searchCountries() {
 	var countryName = $('#country-name').val();	
if(!countryName.length) countryName = 'Poland';
$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}
function showCountriesList(resp) {
  countriesList.empty();
}
function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
           	$('<li>').text(item.name + " - capital is " + item.capital).appendTo(countriesList);
    });
}

var url2 = 'https://restcountries.eu/rest/v2/callingcode/';
var countriesList2 = $('#countries');
$('#search2').click(searchCountries2);
function searchCountries2() {
 	var countryName2 = $('#country-name2').val();	
if(!countryName2.length) countryName2 = 'No data'; 
$.ajax({
  		url: url2 + countryName2,
  		method: 'GET',
  		success: showCountriesList2
  	});
} 
function showCountriesList2(resp) {
  countriesList2.empty();
}
function showCountriesList2(resp) {
    countriesList2.empty();
    resp.forEach(function(item) {
           	$('<li>').text(item.name).appendTo(countriesList2);
    });
}