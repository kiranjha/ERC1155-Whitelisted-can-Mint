    const { expect } = require('chai');
    const { ethers } = require('hardhat');
    describe("ERC1155 Contract",function(){
        it(`Should Set the owner in whitelisted address`,async function(){
            const [owner] = await ethers.getSigners();
            console.log("Signer object : ",owner);
            const token = await ethers.getContractFactory("ERC1155Whitelisted");
            const hardhatToken = await token.deploy();
            const isWhitelisted = await hardhatToken.isWhitelisted(owner.address);
            console.log("Owner is Whitelisted : ",isWhitelisted);

            expect(await hardhatToken.isWhitelisted(owner.address)).to.be.true;
        });
        it(`Should ADD address`,async function(){
            const [owner, addr1, addr2, addr3,addr4] = await ethers.getSigners();
            console.log("Signer object : ",owner);
            const token = await ethers.getContractFactory("ERC1155Whitelisted");
            const hardhatToken = await token.deploy();

            const isWhitelisted = await hardhatToken.isWhitelisted(owner.address);
            console.log("Owner is Whitelisted : ",isWhitelisted);
            expect(await hardhatToken.isWhitelisted(owner.address)).to.be.true;

            const isWhitelisted1 = await hardhatToken.addUser(addr1.address);
                console.log("Address1 is Whitelisted : ",isWhitelisted1);
                expect(await hardhatToken.isWhitelisted(addr1.address)).to.be.true;
            const isWhitelisted2 = await hardhatToken.addUser(addr2.address);
                console.log("Address2 is Whitelisted : ",isWhitelisted2);
                expect(await hardhatToken.isWhitelisted(addr2.address)).to.be.true;
            const isWhitelisted3 = await hardhatToken.addUser(addr3.address);
                console.log("Address3 is Whitelisted : ",isWhitelisted3);
                expect(await hardhatToken.isWhitelisted(addr3.address)).to.be.true;
            const isWhitelisted4 = await hardhatToken.addUser(addr4.address);
                console.log("Address4 is Whitelisted : ",isWhitelisted4);
                expect(await hardhatToken.isWhitelisted(addr4.address)).to.be.true;
        });
        it(`Should ADD address`,async function(){
            const [owner, addr1, addr2, addr3,addr4] = await ethers.getSigners();
            console.log("Signer object : ",owner);
            const token = await ethers.getContractFactory("ERC1155Whitelisted");
            const hardhatToken = await token.deploy();

            const isWhitelisted = await hardhatToken.isWhitelisted(owner.address);
            console.log("Owner is Whitelisted : ",isWhitelisted);
            expect(await hardhatToken.isWhitelisted(owner.address)).to.be.true;

            const isWhitelisted1 = await hardhatToken.addUser(addr1.address);
                console.log("Address1 is Whitelisted : ",isWhitelisted1);
                expect(await hardhatToken.isWhitelisted(addr1.address)).to.be.true;
            const isWhitelisted2 = await hardhatToken.addUser(addr2.address);
                console.log("Address2 is Whitelisted : ",isWhitelisted2);
                expect(await hardhatToken.isWhitelisted(addr2.address)).to.be.true;
            const isWhitelisted3 = await hardhatToken.addUser(addr3.address);
                console.log("Address3 is Whitelisted : ",isWhitelisted3);
                expect(await hardhatToken.isWhitelisted(addr3.address)).to.be.true;
            const isWhitelisted4 = await hardhatToken.addUser(addr4.address);
                console.log("Address4 is Whitelisted : ",isWhitelisted4);
                expect(await hardhatToken.isWhitelisted(addr4.address)).to.be.true;
        });
        it(`Should mintBatch to address`,async function(){
            const [owner, addr1, addr2, addr3,addr4, addr5] = await ethers.getSigners();
            console.log("Signer object : ",owner);
            const token = await ethers.getContractFactory("ERC1155Whitelisted");
            const hardhatToken = await token.deploy();
            let provider = await ethers.getDefaultProvider();

            const isWhitelisted = await hardhatToken.isWhitelisted(owner.address);
            console.log("Owner is Whitelisted : ",isWhitelisted);
            expect(await hardhatToken.isWhitelisted(owner.address)).to.be.true;

            const isWhitelisted1 = await hardhatToken.addUser(addr1.address);
                console.log("Address1 is Whitelisted : ",isWhitelisted1);
                expect(await hardhatToken.isWhitelisted(addr1.address)).to.be.true;
            const isWhitelisted2 = await hardhatToken.addUser(addr2.address);
                console.log("Address2 is Whitelisted : ",isWhitelisted2);
                expect(await hardhatToken.isWhitelisted(addr2.address)).to.be.true;
            const isWhitelisted3 = await hardhatToken.addUser(addr3.address);
                console.log("Address3 is Whitelisted : ",isWhitelisted3);
                expect(await hardhatToken.isWhitelisted(addr3.address)).to.be.true;
            const isWhitelisted4 = await hardhatToken.addUser(addr4.address);
                console.log("Address4 is Whitelisted : ",isWhitelisted4);
                expect(await hardhatToken.isWhitelisted(addr4.address)).to.be.true;
            /////////////// mintBatch in ERC1155 ////////////
                const minting = await hardhatToken.connect(addr1).mintBatch(addr5.address,[1,2],[2,3],0x00,{ value: ethers.utils.parseEther("1") });
                console.log(" MINTING ",minting);
                const contractBalance = await provider.getBalance(owner.address);
                console.log(" Contract Balance ",contractBalance);
                //console.log("HARDHAT TOKEN " ,hardhatToken);
                //expect(await owner.getBalance()).to.equal(contractBalance);
                expect(await hardhatToken.balanceOfBatch([addr5.address],[1])).to.deep.equal([2]);
        });
    });
