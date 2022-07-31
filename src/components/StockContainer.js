import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleClick }) {
  const renderStocks = stocks.map(stock => 
    <Stock 
      key={stock.id} 
      stock={stock}
      handleClick={handleClick}
    />)

  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;
