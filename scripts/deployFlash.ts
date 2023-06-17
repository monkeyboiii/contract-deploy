import { ethers } from "hardhat";
import { erc20Address, uniswapRouter } from "../constant/address";

async function main() {
    // use the second signer
    const [_, signer] = await ethers.getSigners();

    // const initalValue = ethers.parseEther("0.01");

    const flash = await ethers.deployContract(
        "FlashSwap",
        [
            uniswapRouter.POLYGON_UNISWAP_V3,
            erc20Address.DAI,
            erc20Address.WETH9,
        ],
        {
            // value: initalValue,
            signer: signer,
        }
    );

    await flash.waitForDeployment();

    console.log(`Contract ${flash.getAddress()} deployed to ${flash.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
