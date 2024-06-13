import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWallet] = useState("");
  const [web3Modal, setWeb3Modal] = useState(null);
  let [provider, setProvider] = useState(null);
  const [web3, setWeb3] = useState(0);
  const [saleActive, setSaleActive] = useState(false);
  const [balance, setBalance] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);

  return (
    <AppContext.Provider 
      value={{ 
        loading, 
        setLoading,
        walletConnected,
        setWalletConnected,
        walletAddress,
        setWallet,
        web3Modal,
        setWeb3Modal,
        provider,
        setProvider,
        web3,
        setWeb3,
        saleActive,
        setSaleActive,
        balance,
        setBalance,
        totalBalance,
        setTotalBalance
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.object,
};

export default AppContextProvider;
export const useAppContext = () => useContext(AppContext);