import { ethers } from "hardhat";

async function main() {
  const NasWorldNFT = await ethers.getContractFactory("NasWorldNFT");
  const nasWorldNFT = await NasWorldNFT.deploy();

  await nasWorldNFT.deployed();

  console.log("NasWorldNFT with 1 ETH deployed to:", nasWorldNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then(() => process.exit(0))
      .catch((error) => {
        console.error(error);
        process.exitCode = 1;
});
