pragma solidity ^0.4.17;

import './SharedStructs.sol';
import './Authentication.sol';

contract Loan {

    mapping (bytes32 => SharedStructs.Car) public cars;
    mapping (address => bytes32[]) public ownedPlates;
    uint nbCars;

    function Loan() {
        nbCars = 0;
    }

    function addCar(bytes32 plateNumber) public payable returns (bool) {
        cars[plateNumber].plateNumber = plateNumber;
        cars[plateNumber].owner = msg.sender;
        ownedPlates[msg.sender].push(plateNumber);
        nbCars = nbCars + 1;

        return true;
    }

    function getPlates() public view returns (bytes32[]) {
        return ownedPlates[msg.sender];
    }
}
