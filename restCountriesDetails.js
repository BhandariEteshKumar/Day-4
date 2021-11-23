var xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
xhr.send();
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let countries = JSON.parse(this.response);
    //let countries = res.filter((re) => re.currencies[0].code === "USD");
    for (let i = 0; i < countries.length; i++)
      console.log(
        `Name: ${countries[i].name}  Region: ${countries[i].region} SubRegion: ${countries[i].subregion} Population: ${countries[i].population}`
      );
  }
};

// Output:
// Name: Afghanistan  Region: Asia SubRegion: Southern Asia Population: 27657145
// Name: Åland Islands  Region: Europe SubRegion: Northern Europe Population: 28875
// Name: Albania  Region: Europe SubRegion: Southern Europe Population: 2886026
// Name: Algeria  Region: Africa SubRegion: Northern Africa Population: 40400000
// Name: American Samoa  Region: Oceania SubRegion: Polynesia Population: 57100
// Name: Andorra  Region: Europe SubRegion: Southern Europe Population: 78014
// Name: Angola  Region: Africa SubRegion: Middle Africa Population: 25868000
// Name: Anguilla  Region: Americas SubRegion: Caribbean Population: 13452
// Name: Antarctica  Region: Polar SubRegion:  Population: 1000
// Name: Antigua and Barbuda  Region: Americas SubRegion: Caribbean Population: 86295
// Name: Argentina  Region: Americas SubRegion: South America Population: 43590400
// Name: Armenia  Region: Asia SubRegion: Western Asia Population: 2994400
// Name: Aruba  Region: Americas SubRegion: Caribbean Population: 107394
// Name: Australia  Region: Oceania SubRegion: Australia and New Zealand Population: 24117360
// Name: Austria  Region: Europe SubRegion: Western Europe Population: 8725931
// Name: Azerbaijan  Region: Asia SubRegion: Western Asia Population: 9730500
// Name: Bahamas  Region: Americas SubRegion: Caribbean Population: 378040
// Name: Bahrain  Region: Asia SubRegion: Western Asia Population: 1404900
// Name: Bangladesh  Region: Asia SubRegion: Southern Asia Population: 161006790
// Name: Barbados  Region: Americas SubRegion: Caribbean Population: 285000
// Name: Belarus  Region: Europe SubRegion: Eastern Europe Population: 9498700
// Name: Belgium  Region: Europe SubRegion: Western Europe Population: 11319511
// Name: Belize  Region: Americas SubRegion: Central America Population: 370300
// Name: Benin  Region: Africa SubRegion: Western Africa Population: 10653654
// Name: Bermuda  Region: Americas SubRegion: Northern America Population: 61954
// Name: Bhutan  Region: Asia SubRegion: Southern Asia Population: 775620
// Name: Bolivia (Plurinational State of)  Region: Americas SubRegion: South America Population: 10985059
// Name: Bonaire, Sint Eustatius and Saba  Region: Americas SubRegion: Caribbean Population: 17408
// Name: Bosnia and Herzegovina  Region: Europe SubRegion: Southern Europe Population: 3531159
// Name: Botswana  Region: Africa SubRegion: Southern Africa Population: 2141206
// Name: Bouvet Island  Region:  SubRegion:  Population: 0
// Name: Brazil  Region: Americas SubRegion: South America Population: 206135893
// Name: British Indian Ocean Territory  Region: Africa SubRegion: Eastern Africa Population: 3000
// Name: United States Minor Outlying Islands  Region: Americas SubRegion: Northern America Population: 300
// Name: Virgin Islands (British)  Region: Americas SubRegion: Caribbean Population: 28514
// Name: Virgin Islands (U.S.)  Region: Americas SubRegion: Caribbean Population: 114743
// Name: Brunei Darussalam  Region: Asia SubRegion: South-Eastern Asia Population: 411900
// Name: Bulgaria  Region: Europe SubRegion: Eastern Europe Population: 7153784
// Name: Burkina Faso  Region: Africa SubRegion: Western Africa Population: 19034397
// Name: Burundi  Region: Africa SubRegion: Eastern Africa Population: 10114505
// Name: Cambodia  Region: Asia SubRegion: South-Eastern Asia Population: 15626444
// Name: Cameroon  Region: Africa SubRegion: Middle Africa Population: 22709892
// Name: Canada  Region: Americas SubRegion: Northern America Population: 36155487
// Name: Cabo Verde  Region: Africa SubRegion: Western Africa Population: 531239
// Name: Cayman Islands  Region: Americas SubRegion: Caribbean Population: 58238
// Name: Central African Republic  Region: Africa SubRegion: Middle Africa Population: 4998000
// Name: Chad  Region: Africa SubRegion: Middle Africa Population: 14497000
// Name: Chile  Region: Americas SubRegion: South America Population: 18191900
// Name: China  Region: Asia SubRegion: Eastern Asia Population: 1377422166
// Name: Christmas Island  Region: Oceania SubRegion: Australia and New Zealand Population: 2072
// Name: Cocos (Keeling) Islands  Region: Oceania SubRegion: Australia and New Zealand Population: 550
// Name: Colombia  Region: Americas SubRegion: South America Population: 48759958
// Name: Comoros  Region: Africa SubRegion: Eastern Africa Population: 806153
// Name: Congo  Region: Africa SubRegion: Middle Africa Population: 4741000
// Name: Congo (Democratic Republic of the)  Region: Africa SubRegion: Middle Africa Population: 85026000
// Name: Cook Islands  Region: Oceania SubRegion: Polynesia Population: 18100
// Name: Costa Rica  Region: Americas SubRegion: Central America Population: 4890379
// Name: Croatia  Region: Europe SubRegion: Southern Europe Population: 4190669
// Name: Cuba  Region: Americas SubRegion: Caribbean Population: 11239004
// Name: Curaçao  Region: Americas SubRegion: Caribbean Population: 154843
// Name: Cyprus  Region: Europe SubRegion: Southern Europe Population: 847000
// Name: Czech Republic  Region: Europe SubRegion: Eastern Europe Population: 10558524
// Name: Denmark  Region: Europe SubRegion: Northern Europe Population: 5717014
// Name: Djibouti  Region: Africa SubRegion: Eastern Africa Population: 900000
// Name: Dominica  Region: Americas SubRegion: Caribbean Population: 71293
// Name: Dominican Republic  Region: Americas SubRegion: Caribbean Population: 10075045
// Name: Ecuador  Region: Americas SubRegion: South America Population: 16545799
// Name: Egypt  Region: Africa SubRegion: Northern Africa Population: 91290000
// Name: El Salvador  Region: Americas SubRegion: Central America Population: 6520675
// Name: Equatorial Guinea  Region: Africa SubRegion: Middle Africa Population: 1222442
// Name: Eritrea  Region: Africa SubRegion: Eastern Africa Population: 5352000
// Name: Estonia  Region: Europe SubRegion: Northern Europe Population: 1315944
// Name: Ethiopia  Region: Africa SubRegion: Eastern Africa Population: 92206005
// Name: Falkland Islands (Malvinas)  Region: Americas SubRegion: South America Population: 2563
// Name: Faroe Islands  Region: Europe SubRegion: Northern Europe Population: 49376
// Name: Fiji  Region: Oceania SubRegion: Melanesia Population: 867000
// Name: Finland  Region: Europe SubRegion: Northern Europe Population: 5491817
// Name: France  Region: Europe SubRegion: Western Europe Population: 66710000
// Name: French Guiana  Region: Americas SubRegion: South America Population: 254541
// Name: French Polynesia  Region: Oceania SubRegion: Polynesia Population: 271800
// Name: French Southern Territories  Region: Africa SubRegion: Southern Africa Population: 140
// Name: Gabon  Region: Africa SubRegion: Middle Africa Population: 1802278
// Name: Gambia  Region: Africa SubRegion: Western Africa Population: 1882450
// Name: Georgia  Region: Asia SubRegion: Western Asia Population: 3720400
// Name: Germany  Region: Europe SubRegion: Western Europe Population: 81770900
// Name: Ghana  Region: Africa SubRegion: Western Africa Population: 27670174
// Name: Gibraltar  Region: Europe SubRegion: Southern Europe Population: 33140
// Name: Greece  Region: Europe SubRegion: Southern Europe Population: 10858018
// Name: Greenland  Region: Americas SubRegion: Northern America Population: 55847
// Name: Grenada  Region: Americas SubRegion: Caribbean Population: 103328
// Name: Guadeloupe  Region: Americas SubRegion: Caribbean Population: 400132
// Name: Guam  Region: Oceania SubRegion: Micronesia Population: 184200
// Name: Guatemala  Region: Americas SubRegion: Central America Population: 16176133
// Name: Guernsey  Region: Europe SubRegion: Northern Europe Population: 62999
// Name: Guinea  Region: Africa SubRegion: Western Africa Population: 12947000
// Name: Guinea-Bissau  Region: Africa SubRegion: Western Africa Population: 1547777
// Name: Guyana  Region: Americas SubRegion: South America Population: 746900
// Name: Haiti  Region: Americas SubRegion: Caribbean Population: 11078033
// Name: Heard Island and McDonald Islands  Region:  SubRegion:  Population: 0
// Name: Holy See  Region: Europe SubRegion: Southern Europe Population: 451
// Name: Honduras  Region: Americas SubRegion: Central America Population: 8576532
// Name: Hong Kong  Region: Asia SubRegion: Eastern Asia Population: 7324300
// Name: Hungary  Region: Europe SubRegion: Eastern Europe Population: 9823000
// Name: Iceland  Region: Europe SubRegion: Northern Europe Population: 334300
// Name: India  Region: Asia SubRegion: Southern Asia Population: 1295210000
// Name: Indonesia  Region: Asia SubRegion: South-Eastern Asia Population: 258705000
// Name: Côte d'Ivoire  Region: Africa SubRegion: Western Africa Population: 22671331
// Name: Iran (Islamic Republic of)  Region: Asia SubRegion: Southern Asia Population: 79369900
// Name: Iraq  Region: Asia SubRegion: Western Asia Population: 37883543
// Name: Ireland  Region: Europe SubRegion: Northern Europe Population: 6378000
// Name: Isle of Man  Region: Europe SubRegion: Northern Europe Population: 84497
// Name: Israel  Region: Asia SubRegion: Western Asia Population: 8527400
// Name: Italy  Region: Europe SubRegion: Southern Europe Population: 60665551
// Name: Jamaica  Region: Americas SubRegion: Caribbean Population: 2723246
// Name: Japan  Region: Asia SubRegion: Eastern Asia Population: 126960000
// Name: Jersey  Region: Europe SubRegion: Northern Europe Population: 100800
// Name: Jordan  Region: Asia SubRegion: Western Asia Population: 9531712
// Name: Kazakhstan  Region: Asia SubRegion: Central Asia Population: 17753200
// Name: Kenya  Region: Africa SubRegion: Eastern Africa Population: 47251000
// Name: Kiribati  Region: Oceania SubRegion: Micronesia Population: 113400
// Name: Kuwait  Region: Asia SubRegion: Western Asia Population: 4183658
// Name: Kyrgyzstan  Region: Asia SubRegion: Central Asia Population: 6047800
// Name: Lao People's Democratic Republic  Region: Asia SubRegion: South-Eastern Asia Population: 6492400
// Name: Latvia  Region: Europe SubRegion: Northern Europe Population: 1961600
// Name: Lebanon  Region: Asia SubRegion: Western Asia Population: 5988000
// Name: Lesotho  Region: Africa SubRegion: Southern Africa Population: 1894194
// Name: Liberia  Region: Africa SubRegion: Western Africa Population: 4615000
// Name: Libya  Region: Africa SubRegion: Northern Africa Population: 6385000
// Name: Liechtenstein  Region: Europe SubRegion: Western Europe Population: 37623
// Name: Lithuania  Region: Europe SubRegion: Northern Europe Population: 2872294
// Name: Luxembourg  Region: Europe SubRegion: Western Europe Population: 576200
// Name: Macao  Region: Asia SubRegion: Eastern Asia Population: 649100
// Name: Macedonia (the former Yugoslav Republic of)  Region: Europe SubRegion: Southern Europe Population: 2058539
// Name: Madagascar  Region: Africa SubRegion: Eastern Africa Population: 22434363
// Name: Malawi  Region: Africa SubRegion: Eastern Africa Population: 16832910
// Name: Malaysia  Region: Asia SubRegion: South-Eastern Asia Population: 31405416
// Name: Maldives  Region: Asia SubRegion: Southern Asia Population: 344023
// Name: Mali  Region: Africa SubRegion: Western Africa Population: 18135000
// Name: Malta  Region: Europe SubRegion: Southern Europe Population: 425384
// Name: Marshall Islands  Region: Oceania SubRegion: Micronesia Population: 54880
// Name: Martinique  Region: Americas SubRegion: Caribbean Population: 378243
// Name: Mauritania  Region: Africa SubRegion: Western Africa Population: 3718678
// Name: Mauritius  Region: Africa SubRegion: Eastern Africa Population: 1262879
// Name: Mayotte  Region: Africa SubRegion: Eastern Africa Population: 226915
// Name: Mexico  Region: Americas SubRegion: Central America Population: 122273473
// Name: Micronesia (Federated States of)  Region: Oceania SubRegion: Micronesia Population: 102800
// Name: Moldova (Republic of)  Region: Europe SubRegion: Eastern Europe Population: 3553100
// Name: Monaco  Region: Europe SubRegion: Western Europe Population: 38400
// Name: Mongolia  Region: Asia SubRegion: Eastern Asia Population: 3093100
// Name: Montenegro  Region: Europe SubRegion: Southern Europe Population: 621810
// Name: Montserrat  Region: Americas SubRegion: Caribbean Population: 4922
// Name: Morocco  Region: Africa SubRegion: Northern Africa Population: 33337529
// Name: Mozambique  Region: Africa SubRegion: Eastern Africa Population: 26423700
// Name: Myanmar  Region: Asia SubRegion: South-Eastern Asia Population: 51419420
// Name: Namibia  Region: Africa SubRegion: Southern Africa Population: 2324388
// Name: Nauru  Region: Oceania SubRegion: Micronesia Population: 10084
// Name: Nepal  Region: Asia SubRegion: Southern Asia Population: 28431500
// Name: Netherlands  Region: Europe SubRegion: Western Europe Population: 17019800
// Name: New Caledonia  Region: Oceania SubRegion: Melanesia Population: 268767
// Name: New Zealand  Region: Oceania SubRegion: Australia and New Zealand Population: 4697854
// Name: Nicaragua  Region: Americas SubRegion: Central America Population: 6262703
// Name: Niger  Region: Africa SubRegion: Western Africa Population: 20715000
// Name: Nigeria  Region: Africa SubRegion: Western Africa Population: 186988000
// Name: Niue  Region: Oceania SubRegion: Polynesia Population: 1470
// Name: Norfolk Island  Region: Oceania SubRegion: Australia and New Zealand Population: 2302
// Name: Korea (Democratic People's Republic of)  Region: Asia SubRegion: Eastern Asia Population: 25281000
// Name: Northern Mariana Islands  Region: Oceania SubRegion: Micronesia Population: 56940
// Name: Norway  Region: Europe SubRegion: Northern Europe Population: 5223256
// Name: Oman  Region: Asia SubRegion: Western Asia Population: 4420133
// Name: Pakistan  Region: Asia SubRegion: Southern Asia Population: 194125062
// Name: Palau  Region: Oceania SubRegion: Micronesia Population: 17950
// Name: Palestine, State of  Region: Asia SubRegion: Western Asia Population: 4682467
// Name: Panama  Region: Americas SubRegion: Central America Population: 3814672
// Name: Papua New Guinea  Region: Oceania SubRegion: Melanesia Population: 8083700
// Name: Paraguay  Region: Americas SubRegion: South America Population: 6854536
// Name: Peru  Region: Americas SubRegion: South America Population: 31488700
// Name: Philippines  Region: Asia SubRegion: South-Eastern Asia Population: 103279800
// Name: Pitcairn  Region: Oceania SubRegion: Polynesia Population: 56
// Name: Poland  Region: Europe SubRegion: Eastern Europe Population: 38437239
// Name: Portugal  Region: Europe SubRegion: Southern Europe Population: 10374822
// Name: Puerto Rico  Region: Americas SubRegion: Caribbean Population: 3474182
// Name: Qatar  Region: Asia SubRegion: Western Asia Population: 2587564
// Name: Republic of Kosovo  Region: Europe SubRegion: Eastern Europe Population: 1733842
// Name: Réunion  Region: Africa SubRegion: Eastern Africa Population: 840974
// Name: Romania  Region: Europe SubRegion: Eastern Europe Population: 19861408
// Name: Russian Federation  Region: Europe SubRegion: Eastern Europe Population: 146599183
// Name: Rwanda  Region: Africa SubRegion: Eastern Africa Population: 11553188
// Name: Saint Barthélemy  Region: Americas SubRegion: Caribbean Population: 9417
// Name: Saint Helena, Ascension and Tristan da Cunha  Region: Africa SubRegion: Western Africa Population: 4255
// Name: Saint Kitts and Nevis  Region: Americas SubRegion: Caribbean Population: 46204
// Name: Saint Lucia  Region: Americas SubRegion: Caribbean Population: 186000
// Name: Saint Martin (French part)  Region: Americas SubRegion: Caribbean Population: 36979
// Name: Saint Pierre and Miquelon  Region: Americas SubRegion: Northern America Population: 6069
// Name: Saint Vincent and the Grenadines  Region: Americas SubRegion: Caribbean Population: 109991
// Name: Samoa  Region: Oceania SubRegion: Polynesia Population: 194899
// Name: San Marino  Region: Europe SubRegion: Southern Europe Population: 33005
// Name: Sao Tome and Principe  Region: Africa SubRegion: Middle Africa Population: 187356
// Name: Saudi Arabia  Region: Asia SubRegion: Western Asia Population: 32248200
// Name: Senegal  Region: Africa SubRegion: Western Africa Population: 14799859
// Name: Serbia  Region: Europe SubRegion: Southern Europe Population: 7076372
// Name: Seychelles  Region: Africa SubRegion: Eastern Africa Population: 91400
// Name: Sierra Leone  Region: Africa SubRegion: Western Africa Population: 7075641
// Name: Singapore  Region: Asia SubRegion: South-Eastern Asia Population: 5535000
// Name: Sint Maarten (Dutch part)  Region: Americas SubRegion: Caribbean Population: 38247
// Name: Slovakia  Region: Europe SubRegion: Eastern Europe Population: 5426252
// Name: Slovenia  Region: Europe SubRegion: Southern Europe Population: 2064188
// Name: Solomon Islands  Region: Oceania SubRegion: Melanesia Population: 642000
// Name: Somalia  Region: Africa SubRegion: Eastern Africa Population: 11079000
// Name: South Africa  Region: Africa SubRegion: Southern Africa Population: 55653654
// Name: South Georgia and the South Sandwich Islands  Region: Americas SubRegion: South America Population: 30
// Name: Korea (Republic of)  Region: Asia SubRegion: Eastern Asia Population: 50801405
// Name: South Sudan  Region: Africa SubRegion: Middle Africa Population: 12131000
// Name: Spain  Region: Europe SubRegion: Southern Europe Population: 46438422
// Name: Sri Lanka  Region: Asia SubRegion: Southern Asia Population: 20966000
// Name: Sudan  Region: Africa SubRegion: Northern Africa Population: 39598700
// Name: Suriname  Region: Americas SubRegion: South America Population: 541638
// Name: Svalbard and Jan Mayen  Region: Europe SubRegion: Northern Europe Population: 2562
// Name: Swaziland  Region: Africa SubRegion: Southern Africa Population: 1132657
// Name: Sweden  Region: Europe SubRegion: Northern Europe Population: 9894888
// Name: Switzerland  Region: Europe SubRegion: Western Europe Population: 8341600
// Name: Syrian Arab Republic  Region: Asia SubRegion: Western Asia Population: 18564000
// Name: Taiwan  Region: Asia SubRegion: Eastern Asia Population: 23503349
// Name: Tajikistan  Region: Asia SubRegion: Central Asia Population: 8593600
// Name: Tanzania, United Republic of  Region: Africa SubRegion: Eastern Africa Population: 55155000
// Name: Thailand  Region: Asia SubRegion: South-Eastern Asia Population: 65327652
// Name: Timor-Leste  Region: Asia SubRegion: South-Eastern Asia Population: 1167242
// Name: Togo  Region: Africa SubRegion: Western Africa Population: 7143000
// Name: Tokelau  Region: Oceania SubRegion: Polynesia Population: 1411
// Name: Tonga  Region: Oceania SubRegion: Polynesia Population: 103252
// Name: Trinidad and Tobago  Region: Americas SubRegion: Caribbean Population: 1349667
// Name: Tunisia  Region: Africa SubRegion: Northern Africa Population: 11154400
// Name: Turkey  Region: Asia SubRegion: Western Asia Population: 78741053
// Name: Turkmenistan  Region: Asia SubRegion: Central Asia Population: 4751120
// Name: Turks and Caicos Islands  Region: Americas SubRegion: Caribbean Population: 31458
// Name: Tuvalu  Region: Oceania SubRegion: Polynesia Population: 10640
// Name: Uganda  Region: Africa SubRegion: Eastern Africa Population: 33860700
// Name: Ukraine  Region: Europe SubRegion: Eastern Europe Population: 42692393
// Name: United Arab Emirates  Region: Asia SubRegion: Western Asia Population: 9856000
// Name: United Kingdom of Great Britain and Northern Ireland  Region: Europe SubRegion: Northern Europe Population: 65110000
// Name: United States of America  Region: Americas SubRegion: Northern America Population: 323947000
// Name: Uruguay  Region: Americas SubRegion: South America Population: 3480222
// Name: Uzbekistan  Region: Asia SubRegion: Central Asia Population: 31576400
// Name: Vanuatu  Region: Oceania SubRegion: Melanesia Population: 277500
// Name: Venezuela (Bolivarian Republic of)  Region: Americas SubRegion: South America Population: 31028700
// Name: Viet Nam  Region: Asia SubRegion: South-Eastern Asia Population: 92700000
// Name: Wallis and Futuna  Region: Oceania SubRegion: Polynesia Population: 11750
// Name: Western Sahara  Region: Africa SubRegion: Northern Africa Population: 510713
// Name: Yemen  Region: Asia SubRegion: Western Asia Population: 27478000
// Name: Zambia  Region: Africa SubRegion: Eastern Africa Population: 15933883
// Name: Zimbabwe  Region: Africa SubRegion: Eastern Africa Population: 14240168
