const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

let multiplier3VerifierContent = fs.readFileSync("./contracts/Multiplier3Verifier.sol", { encoding: 'utf-8' });
let multiplier3VerifierBumped = multiplier3VerifierContent.replace(solidityRegex, 'pragma solidity ^0.8.0');
multiplier3VerifierBumped = multiplier3VerifierBumped.replace(verifierRegex, 'contract Multiplier3Verifier');

fs.writeFileSync("./contracts/Multiplier3Verifier.sol", multiplier3VerifierBumped);

let plonkMultiplier3VerifierContent = fs.readFileSync("./contracts/Multiplier3Verifier_plonk.sol", { encoding: 'utf-8' });
let plonkMultiplier3VerifierBumped = plonkMultiplier3VerifierContent.replace(solidityRegex, 'pragma solidity ^0.8.0');
plonkMultiplier3VerifierBumped = plonkMultiplier3VerifierBumped.replace(verifierRegex, 'contract Multiplier3VerifierPlonk');

fs.writeFileSync("./contracts/Multiplier3Verifier_plonk.sol", plonkMultiplier3VerifierBumped);