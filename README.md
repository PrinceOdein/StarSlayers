# StarSlayers Token

StarSlayers (SLAY) is an ERC20 token deployed on the Ethereum blockchain, specifically on the Sepolia testnet. This project is part of the larger StarSlayers ecosystem.

## Project Structure

- `contracts/`: Contains the Solidity smart contract for the StarSlayers token
- `scripts/`: Includes deployment and other utility scripts
- `test/`: Contains test files for the smart contract
- `hardhat.config.js`: Configuration file for the Hardhat development environment

## Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/starslayers-token.git
   cd starslayers-token
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```
   INFURA_PROJECT_ID=your_infura_project_id
   PRIVATE_KEY=your_wallet_private_key
   ```

## Usage

To compile the contract:
```
npx hardhat compile
```

To run tests:
```
npx hardhat test
```

To deploy to Sepolia testnet:
```
npx hardhat run scripts/deploy.js --network sepolia
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

For any queries, please reach out to odeinanyanwu@gmail.com.