import React, { Component } from 'react';
import axios from 'axios'

const styles = {
}

const rule = {
  "Taiwan": "Mainland China",
  "Hong Kong SAR": "Mainland China"
}

const defaultData = [
  {
    "name": "Ishigaki (ISG), Japan",
    "code": "ISG",
    "countryName": "Japan",
    "countryCode": "JP"
  },
  {
    "name": "Jeju (CJU), South Korea",
    "code": "CJU",
    "countryName": "South Korea",
    "countryCode": "KR"
  },
  {
    "name": "Chiang Rai (CEI), Thailand",
    "code": "CEI",
    "countryName": "Thailand",
    "countryCode": "TH"
  },
  {
    "name": "Tokyo (NRT), Japan",
    "code": "NRT",
    "countryName": "Japan",
    "countryCode": "JP"
  },
  {
    "name": "Hong Kong (HKG), Hong Kong SAR",
    "code": "HKG",
    "countryName": "Hong Kong SAR",
    "countryCode": "HK"
  },
  {
    "name": "Fukuoka (FUK), Japan",
    "code": "FUK",
    "countryName": "Japan",
    "countryCode": "JP"
  },
  {
    "name": "Osaka (KIX), Japan",
    "code": "KIX",
    "countryName": "Japan",
    "countryCode": "JP"
  },
  {
    "name": "Tokyo (HND), Japan",
    "code": "HND",
    "countryName": "Japan",
    "countryCode": "JP"
  },
  {
    "name": "Tokyo (TYO), Japan",
    "code": "TYO",
    "countryName": "Japan",
    "countryCode": "JP"
  },
  {
    "name": "Pusan (PUS), South Korea",
    "code": "PUS",
    "countryName": "South Korea",
    "countryCode": "KR"
  },
  {
    "name": "Seoul (ICN), South Korea",
    "code": "ICN",
    "countryName": "South Korea",
    "countryCode": "KR"
  },
  {
    "name": "Chiang Mai (CNX), Thailand",
    "code": "CNX",
    "countryName": "Thailand",
    "countryCode": "TH"
  },
  {
    "name": "Phuket (HKT), Thailand",
    "code": "HKT",
    "countryName": "Thailand",
    "countryCode": "TH"
  },
  {
    "name": "Da Nang (DAD), Vietnam",
    "code": "DAD",
    "countryName": "Vietnam",
    "countryCode": "VN"
  },
  {
    "name": "Taichung (RMQ), Taiwan",
    "code": "RMQ",
    "countryName": "Taiwan",
    "countryCode": "TW"
  },
  {
    "name": "Saipan (SPN), United States",
    "code": "SPN",
    "countryName": "United States",
    "countryCode": "US"
  },
  {
    "name": "Kunming (KMG), Mainland China",
    "code": "KMG",
    "countryName": "Mainland China",
    "countryCode": "CN"
  },
  {
    "name": "Ningbo (NGB), Mainland China",
    "code": "NGB",
    "countryName": "Mainland China",
    "countryCode": "CN"
  },
  {
    "name": "Hiroshima (HIJ), Japan",
    "code": "HIJ",
    "countryName": "Japan",
    "countryCode": "JP"
  },
  {
    "name": "Kagoshima (KOJ), Japan",
    "code": "KOJ",
    "countryName": "Japan",
    "countryCode": "JP"
  },
  {
    "name": "Nagoya (NGO), Japan",
    "code": "NGO",
    "countryName": "Japan",
    "countryCode": "JP"
  },
  {
    "name": "Takamatsu (TAK), Japan",
    "code": "TAK",
    "countryName": "Japan",
    "countryCode": "JP"
  },
  {
    "name": "Nha-Trang (CXR), Vietnam",
    "code": "CXR",
    "countryName": "Vietnam",
    "countryCode": "VN"
  },
  {
    "name": "Siem Reap (REP), Cambodia",
    "code": "REP",
    "countryName": "Cambodia",
    "countryCode": "KH"
  },
  {
    "name": "Nagasaki (NGS), Japan",
    "code": "NGS",
    "countryName": "Japan",
    "countryCode": "JP"
  }
]
const url = "https://booking.uflyholidays.com/api/get-all-airports/en-US"
export default class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch(url, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert(JSON.stringify(responseJson))
      })
      .catch((error) => {
        console.log(error);
        this.processData(defaultData)
      });
  }

  processData = (data) => {
    const result = {};
    const resultArray = []
    data.map((item) => {
      let countryName = item.countryName
      if (rule[countryName]) {
        countryName = rule[item.countryName]
      }
      if (result[countryName]) {
        result[countryName].push(item.code)
      } else {
        result[countryName] = [item.code]
      }
    })
    for (const [key, value] of Object.entries(result)) {
      const airports = value.sort()
      resultArray.push({ country: key, airports })
    }

    // resultArray.sort()
    this.setState({ data: resultArray })
  }

  render() {
    const { data } = this.state
    return <div>
      {data.map((item) => {
        return <div>
          <div>{item.country} : {item.airports.toString()}<br />
            <br />
          </div>
        </div>
      })}
    </div >
  }
}