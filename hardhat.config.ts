import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";

// Template
const { ZHEJIANG_RPC, PRIVATE_KEY, ETHERSCAN_API } = process.env;

const config: HardhatUserConfig = {
  networks: {
    zhejiang: {
      url: ZHEJIANG_RPC || "",
      accounts: [PRIVATE_KEY as string],
    },
  },
  etherscan: {
    apiKey: {
      zhejiang: (ETHERSCAN_API as string) || "",
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.15",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};

export default config;
