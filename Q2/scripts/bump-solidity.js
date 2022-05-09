const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

const bump = (contract_name) => {
    let content = fs.readFileSync(`./contracts/${contract_name}Verifier.sol`, { encoding: 'utf-8' });
    let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
    bumped = bumped.replace(verifierRegex, `contract ${contract_name}Verifier`);

    fs.writeFileSync(`./contracts/${contract_name}Verifier.sol`, bumped);
}

const bump_plonk = (contract_name) => {
    const solidityRegex = /pragma solidity .*;/
    const verifierRegex = /contract PlonkVerifier/
    let content = fs.readFileSync(`./contracts/${contract_name}Verifier.sol`, { encoding: 'utf-8' });
    let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0;');
    bumped = bumped.replace(verifierRegex, `contract ${contract_name}Verifier`);

    fs.writeFileSync(`./contracts/${contract_name}Verifier.sol`, bumped);
}

bump("HelloWorld");
bump("Multiplier3");
bump_plonk("Multiplier3_plonk_");

// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment