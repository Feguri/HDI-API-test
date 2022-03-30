
class HdiRequest {
    constructor(){
        this.countryCodes = {
            "AFG": "Afghanistan",
            "AGO": "Angola",
            "ALB": "Albania",
            "AND": "Andorra",
            "ARE": "United Arab Emirates",
            "ARG": "Argentina",
            "ARM": "Armenia",
            "ATG": "Antigua and Barbuda",
            "AUS": "Australia",
            "AUT": "Austria",
            "AZE": "Azerbaijan",
            "BDI": "Burundi",
            "BEL": "Belgium",
            "BEN": "Benin",
            "BFA": "Burkina Faso",
            "BGD": "Bangladesh",
            "BGR": "Bulgaria",
            "BHR": "Bahrain",
            "BHS": "Bahamas",
            "BIH": "Bosnia and Herzegovina",
            "BLR": "Belarus",
            "BLZ": "Belize",
            "BOL": "Bolivia (Plurinational State of)",
            "BRA": "Brazil",
            "BRB": "Barbados",
            "BRN": "Brunei Darussalam",
            "BTN": "Bhutan",
            "BWA": "Botswana",
            "CAF": "Central African Republic",
            "CAN": "Canada",
            "CHE": "Switzerland",
            "CHL": "Chile",
            "CHN": "China",
            "CIV": "Cote d'Ivoire",
            "CMR": "Cameroon",
            "COD": "Congo (Democratic Republic of the)",
            "COG": "Congo",
            "COL": "Colombia",
            "COM": "Comoros",
            "CPV": "Cabo Verde",
            "CRI": "Costa Rica",
            "CUB": "Cuba",
            "CYP": "Cyprus",
            "CZE": "Czechia",
            "DEU": "Germany",
            "DJI": "Djibouti",
            "DMA": "Dominica",
            "DNK": "Denmark",
            "DOM": "Dominican Republic",
            "DZA": "Algeria",
            "ECU": "Ecuador",
            "EGY": "Egypt",
            "ERI": "Eritrea",
            "ESP": "Spain",
            "EST": "Estonia",
            "ETH": "Ethiopia",
            "FIN": "Finland",
            "FJI": "Fiji",
            "FRA": "France",
            "FSM": "Micronesia (Federated States of)",
            "GAB": "Gabon",
            "GBR": "United Kingdom",
            "GEO": "Georgia",
            "GHA": "Ghana",
            "GIN": "Guinea",
            "GMB": "Gambia",
            "GNB": "Guinea-Bissau",
            "GNQ": "Equatorial Guinea",
            "GRC": "Greece",
            "GRD": "Grenada",
            "GTM": "Guatemala",
            "GUY": "Guyana",
            "HKG": "Hong Kong, China (SAR)",
            "HND": "Honduras",
            "HRV": "Croatia",
            "HTI": "Haiti",
            "HUN": "Hungary",
            "IDN": "Indonesia",
            "IND": "India",
            "IRL": "Ireland",
            "IRN": "Iran (Islamic Republic of)",
            "IRQ": "Iraq",
            "ISL": "Iceland",
            "ISR": "Israel",
            "ITA": "Italy",
            "JAM": "Jamaica",
            "JOR": "Jordan",
            "JPN": "Japan",
            "KAZ": "Kazakhstan",
            "KEN": "Kenya",
            "KGZ": "Kyrgyzstan",
            "KHM": "Cambodia",
            "KIR": "Kiribati",
            "KNA": "Saint Kitts and Nevis",
            "KOR": "Korea (Republic of)",
            "KWT": "Kuwait",
            "LAO": "Lao People's Democratic Republic",
            "LBN": "Lebanon",
            "LBR": "Liberia",
            "LBY": "Libya",
            "LCA": "Saint Lucia",
            "LIE": "Liechtenstein",
            "LKA": "Sri Lanka",
            "LSO": "Lesotho",
            "LTU": "Lithuania",
            "LUX": "Luxembourg",
            "LVA": "Latvia",
            "MAR": "Morocco",
            "MDA": "Moldova (Republic of)",
            "MDG": "Madagascar",
            "MDV": "Maldives",
            "MEX": "Mexico",
            "MHL": "Marshall Islands",
            "MKD": "North Macedonia",
            "MLI": "Mali",
            "MLT": "Malta",
            "MMR": "Myanmar",
            "MNE": "Montenegro",
            "MNG": "Mongolia",
            "MOZ": "Mozambique",
            "MRT": "Mauritania",
            "MUS": "Mauritius",
            "MWI": "Malawi",
            "MYS": "Malaysia",
            "NAM": "Namibia",
            "NER": "Niger",
            "NGA": "Nigeria",
            "NIC": "Nicaragua",
            "NLD": "Netherlands",
            "NOR": "Norway",
            "NPL": "Nepal",
            "NZL": "New Zealand",
            "OMN": "Oman",
            "PAK": "Pakistan",
            "PAN": "Panama",
            "PER": "Peru",
            "PHL": "Philippines",
            "PLW": "Palau",
            "PNG": "Papua New Guinea",
            "POL": "Poland",
            "PRT": "Portugal",
            "PRY": "Paraguay",
            "PSE": "Palestine, State of",
            "QAT": "Qatar",
            "ROU": "Romania",
            "RUS": "Russian Federation",
            "RWA": "Rwanda",
            "SAU": "Saudi Arabia",
            "SDN": "Sudan",
            "SEN": "Senegal",
            "SGP": "Singapore",
            "SLB": "Solomon Islands",
            "SLE": "Sierra Leone",
            "SLV": "El Salvador",
            "SRB": "Serbia",
            "SSD": "South Sudan",
            "STP": "Sao Tome and Principe",
            "SUR": "Suriname",
            "SVK": "Slovakia",
            "SVN": "Slovenia",
            "SWE": "Sweden",
            "SWZ": "Eswatini (Kingdom of)",
            "SYC": "Seychelles",
            "SYR": "Syrian Arab Republic",
            "TCD": "Chad",
            "TGO": "Togo",
            "THA": "Thailand",
            "TJK": "Tajikistan",
            "TKM": "Turkmenistan",
            "TLS": "Timor-Leste",
            "TON": "Tonga",
            "TTO": "Trinidad and Tobago",
            "TUN": "Tunisia",
            "TUR": "Turkey",
            "TZA": "Tanzania (United Republic of)",
            "UGA": "Uganda",
            "UKR": "Ukraine",
            "URY": "Uruguay",
            "USA": "United States",
            "UZB": "Uzbekistan",
            "VCT": "Saint Vincent and the Grenadines",
            "VEN": "Venezuela (Bolivarian Republic of)",
            "VNM": "Viet Nam",
            "VUT": "Vanuatu",
            "WSM": "Samoa",
            "YEM": "Yemen",
            "ZAF": "South Africa",
            "ZMB": "Zambia",
            "ZWE": "Zimbabwe"
        }
    }

    async readJson () {

        try {
            const response = await fetch('./data.json');
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            const json = await response.json();

            // All mighty 😔🙏
            this.handleData(json);

        } catch {
            this.dataError = true;
        }

    }

    handleData(json){

        const dataHolder = document.getElementById('data-holder');

        for (let countryCode in this.countryCodes) {
            const hdiOverTime = json["indicator_value"][countryCode]["137506"];

            let v1;
            let v2;
            let year1;
            let year2;

            let start = true;
            
            for(let year in hdiOverTime){

                if(start){

                    v1 = hdiOverTime[year];
                    year1 = year;

                    start = false;
                }
                if(year === '2019'){

                    v2 = hdiOverTime[year];
                    year2 = year;

                }

            }
            const roundedPercentageOverTime = Math.round((this.calculateRateOfIncrease(v1, v2, year1, year2) + Number.EPSILON) * 100) / 100;
            const country = this.countryCodes[countryCode];
            dataHolder.innerHTML += `<hr><p>The rate of average yearly increase of the HDI of ${country} was
            ${roundedPercentageOverTime}%/year over a period of ${year2-year1} (${year1} to ${year2}) years. (${v1} to ${v2})</p>`;

            const accuratePercentageOverTime = this.calculateRateOfIncrease(v1, v2, year1, year2)

            let next5years = this.projectedValues(accuratePercentageOverTime, v2, 10);
            dataHolder.innerHTML += '<p>Predictions:</p>';
            let currentYear = 2020;
            for (let year of next5years){
                
                const roundedPredictedYear = Math.round((year + Number.EPSILON) * 200) / 200;
                dataHolder.innerHTML += `<li>in ${currentYear} | ${roundedPredictedYear}</li>`;
                currentYear++;
            }

        }

    }

    calculateRateOfIncrease(v1, v2, year1, year2){

        // total change
        const totalChange = v2 - v1;

        // percentage change
        const percentageChange = totalChange/v1;

        // percentage as a function of time
        const percentageOverTime = percentageChange * (1 / (year2 - year1));

        // Anual percent change
        return percentageOverTime * 100;

    }

    projectedValues(percentageOverTime, hdi, years){
        // contains the upcoming projected hdi's for the specific set of years
        
        let projectedArray = [];

        function addYear() {
            const currentYearIncrease = (percentageOverTime/100) * hdi;
            const projectedHdi = hdi + currentYearIncrease;
           
            projectedArray.push(projectedHdi);
            hdi = projectedHdi;
        }

        let yearsLeft = years;
        while (yearsLeft !== 0){
            yearsLeft -= 1;
            addYear();        
        }

        return projectedArray;
    }


}
const hdiData = new HdiRequest();
hdiData.readJson();
