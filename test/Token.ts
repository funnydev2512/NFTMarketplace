// const { expect } = require("chai");
import { expect } from "chai";
// const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ethers } from "hardhat";
describe("Token contract", function () {
  // We define a fixture to reuse the same setup in every test. We use
  // loadFixture to run this setup once, snapshot that state, and reset Hardhat
  // Network to that snapshot in every test.
  async function deployTokenFixture() {
    // Get the ContractFactory and Signers here.
    const Token = await ethers.getContractFactory("MonoNFT");
    const NFTMarket = await ethers.getContractFactory("NFTMarketplace");
    const [owner, addr1, addr2] = await ethers.getSigners();
    const marketplace = await NFTMarket.deploy(ethers.utils.parseEther("0.01"));
    const MonoNFT = await Token.deploy(marketplace.address);

    await marketplace.deployed();
    await MonoNFT.deployed();
    // Fixtures can return anything you consider useful for your tests
    return {
      Token,
      NFTMarket,
      hardhatToken: MonoNFT,
      marketplace,
      owner,
      addr1,
      addr2,
    };
  }

  // You can nest describe calls to create subsections.
  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { hardhatToken, owner, addr1 } = await loadFixture(
        deployTokenFixture
      );
      await hardhatToken.giveAway(addr1.address);
      await hardhatToken.giveAway(addr1.address);
      // await MonoNFT.giveAway(addr1.address);
      // expect(await MonoNFT.owner()).to.equal(owner.address);
    });
  });

  // You can describe calls to list nft
  describe("List NFT", function () {
    it("Should list the NFT", async function () {
      const { marketplace, hardhatToken, addr1 } = await loadFixture(
        deployTokenFixture
      );
      // await marketplace;
      await hardhatToken.giveAway(addr1.address);
      expect(await hardhatToken.balanceOf(addr1.address)).to.equal(1);
      const listingPrice = await marketplace.listingPrice();
      //approve marketpalce to spend token'
      await hardhatToken.connect(addr1).approve(marketplace.address, 0);
      await marketplace
        .connect(addr1)
        .listNFT(hardhatToken.address, 0, ethers.utils.parseEther("0.01"), {
          value: listingPrice,
        });
      expect(await hardhatToken.ownerOf(0)).to.equal(marketplace.address);
    });
  });
});
