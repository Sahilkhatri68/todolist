import React, { useEffect, useState } from "react";
import "../Assets/Styles/Table.css";
import axios from "axios";
function Data_fetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    axios
      .get("https://61c59aa5c003e70017b797e7.mockapi.io/users")
      .then((res) => {
        if (res.data.length > 0) {
          setData(res.data);
          console.log(res.data);
          setLoading(false);
        } else {
          console.log("ERROR");
        }
      })
      .catch((err) => {
        alert("Error");
        setLoading(true);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      Table
      <div>
        <table id="customers">
          <tr>
            <th>U_ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Address</th>
            <th>Bank</th>
            <th>Savings</th>
            <th>Profit</th>
            <th>Loss</th>
          </tr>
          {data.map((i) => {
            return (
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.phone}</td>
                <td>{i.country} </td>
                <td>{i.address} </td>
                <td>{i.bank} </td>
                <td>{i.savings} </td>
                <td>{i.profit} </td>
                <td>{i.loss} </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Data_fetch;
