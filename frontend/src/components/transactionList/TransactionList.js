import React, { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
// import { getTransactions, updateBalance } from "../../utils/backend";
import Transaction from "../transaction/transaction";

const TransactionList = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  // const [transactions, setTransactions] = useState([]);
  const transactions = [
    {
      date: "2020-09-18",
      amount: 19.8,
      description: "Bought medicine for allergies",
    },
    { date: "2020-09-20", amount: 350.22, description: "New headphones" },
    {
      date: "2020-09-24",
      amount: 110.54,
      description: "Night out with friends",
    },
    {
      date: "2020-09-26",
      amount: 20.33,
      description: "Bought snacks from convenience store",
    },
    { date: "2020-09-27", amount: 40.83, description: "Bought pair of jeans" },
    { date: "2020-09-27", amount: 112.39, description: "Weekly Groceries" },
    {
      date: "2020-09-30",
      amount: 300.25,
      description: "Bought plants for the house",
    },
    { date: "2020-10-01", amount: 96.1, description: "new shoes" },
    { date: "2020-10-03", amount: 180.55, description: "Bought winter tires" },
  ];

  // useEffect(async () => {
  //   var transactionData;
  //   function fetchData() {
  //     return new Promise(function (resolve) {
  //       getTransactions().then((res) => {
  //         transactionData = res;
  //         // console.log(res);
  //         // setTransactions([res]);
  //         resolve();
  //       });
  //       // setTransactions(transactionData);
  //     });
  //   }
  //   await fetchData();
  //   setTransactions(transactionData);
  //   console.log(transactions);
  // }, []);

  return (
    <Zoom>
      {transactions.map((transaction) => (
        <Transaction
          date={transaction.date}
          description={transaction.description}
          amount={transaction.amount}
        ></Transaction>
      ))}
    </Zoom>
  );
};

export default TransactionList;
