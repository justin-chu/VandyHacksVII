import React from "react";
import "./account.css";
import Transaction from "../../components/transaction/transaction";
import Avatar from "../../images/avatar.png";
import { getCustomerInfo, getTransactions } from "../../utils/backend";

export default function Finances() {
  const customer = getCustomerInfo();
  const getTransactions = async () => {
    // // let transactions = await getTransactions();
    // let content = [];
    // // console.log(transactions);
    // for (let i = 0; i < 15; i++) {
    //   content.push(<Transaction />);
    // }
    // return content;
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="content">
        <div className="left">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              marginBottom: 74,
            }}
          >
            <h1
              style={{
                position: "absolute",
                left: -558,
                width: 400,
              }}
            >
              {customer.firstName} {customer.lastName}
              <img
                style={{ marginLeft: 10, marginBottom: -5 }}
                src={Avatar}
                height={40}
                width={40}
              />
            </h1>
          </div>
          <div className="account1">
            <p>Total balance: {customer.balance}</p>
            <p>Email: {customer.email}</p>
            <p>First Name: {customer.firstName}</p>
            <p>Last Name: {customer.lastName}</p>
            <p>Username: {customer.username}</p>
          </div>
          <div className="account2">Items: {customer.items}</div>
        </div>
        <div className="right">
          <h1 style={{ marginBottom: 10, fontWeight: 100 }}>Transactions</h1>
          <div className="account3">{/* {getTransactions()} */}</div>
        </div>
      </div>
    </div>
  );
}
