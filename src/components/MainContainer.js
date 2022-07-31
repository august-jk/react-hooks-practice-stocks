import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [sortBy, setSortBy] = useState('')
  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(data => setStocks(data))
  }, [])
  const handlePurchase = (stock) => {
    if(!myStocks.includes(stock)){
      const purchasedStocks = [...myStocks, stock]
      setMyStocks(purchasedStocks)
    }
  }
  const handleSale = (stock) => {
    const updatedStocks = [...myStocks].filter(myStock => myStock.id !== stock.id)
    setMyStocks(updatedStocks)
  }
  const onSort = (e) => {
    setSortBy(e.target.value)
  }
  
  
  return (
    <div>
      <SearchBar onSort={onSort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handleClick={handlePurchase}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={myStocks} handleClick={handleSale}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
