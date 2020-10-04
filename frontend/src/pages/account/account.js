import React from "react";
import "./account.css";
import Transaction from "../../components/transaction/transaction";
import Avatar from "../../images/avatar.png";
import { getCustomerInfo, getTransactions } from "../../utils/backend";
import axios from "axios";
import TransactionList from "../../components/transactionList/TransactionList";

export default function Finances() {
	const [deposit, setDeposit] = React.useState(true);
	const [amount, setAmount] = React.useState(0);
	const [desc, setDesc] = React.useState("");
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

	const postDeposit = () => {
		axios
			.post(
				"http://api.reimaginebanking.com/accounts/5f78b531f1bac107157e192e/deposits?key=7bdccafff961f37e0847de674d6f88be",
				{
					amount: amount,
					medium: "balance",
					transaction_date: "2020-10-04",
					status: "pending",
					description: desc,
				}
			)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const postWithdrawal = () => {};


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
                left: -556,
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
            <p className="subtitle" style={{ marginTop: -5 }}>
              <span style={{ fontWeight: "bold" }}>Total balance: </span>
              {customer.balance}
            </p>
            <p className="subtitle">
              <span style={{ fontWeight: "bold" }}>Email: </span>
              {customer.email}
            </p>
            <p className="subtitle">
              <span style={{ fontWeight: "bold" }}>First Name: </span>
              {customer.firstName}
            </p>
            <p className="subtitle">
              <span style={{ fontWeight: "bold" }}>Last Name: </span>
              {customer.lastName}
            </p>
            <p className="subtitle">
              <span style={{ fontWeight: "bold" }}>Username: </span>
              {customer.username}
            </p>
          </div>
          <div className="account2">
            <div className="categories" style={{ marginTop: -10 }}>
              <a
                onClick={() => setDeposit(true)}
                style={{ cursor: "pointer", marginRight: 25 }}
              >
                <p
                  style={{
                    marginTop: 0,
                    fontWeight: deposit ? "bold" : "",
                  }}
                >
                  Deposit
                </p>
              </a>
              <a
                onClick={() => setDeposit(false)}
                style={{ cursor: "pointer", marginRight: 25 }}
              >
                <p
                  style={{
                    marginTop: 0,
                    fontWeight: !deposit ? "bold" : "",
                  }}
                >
                  Withdraw
                </p>
              </a>
            </div>
            <textarea
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0"
              className="field"
              style={{ height: 15 }}
            ></textarea>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Description"
              className="field"
              style={{ height: 60 }}
            ></textarea>
            <a
              className="green-button"
              style={{ marginTop: 10 }}
              onClick={() => (deposit ? postDeposit() : postWithdrawal())}
            >
              <h4 style={{ margin: 0, color: "white" }}>Enter</h4>
            </a>
            {/* Items: {customer.items} */}
          </div>
        </div>
        <div className="right">
          <h1 style={{ marginBottom: 10, fontWeight: 100 }}>Transactions</h1>
          <div className="account3">
            <Transaction />
            <Transaction />
            {/* {getTransactions()} */}
          </div>
        </div>
      </div>
    </div>
  );
}
