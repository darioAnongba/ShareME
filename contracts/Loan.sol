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
        if (cars[plateNumber].plateNumber == 0x0) {
            cars[plateNumber].plateNumber = plateNumber;
            cars[plateNumber].owner = msg.sender;
            ownedPlates[msg.sender].push(plateNumber);
            nbCars = nbCars + 1;
            return true;
        }

        return false;
    }

    function getPlates() public view returns (bytes32[]) {
        return ownedPlates[msg.sender];
    }

    function createBooking(bytes32 plateNumber, uint startTime, uint endTime, uint price) public returns (bool) {        
        if (ownedPlates[msg.sender].length > 0) {
            for (uint i = 0; i < ownedPlates[msg.sender].length; i++) {
                if (ownedPlates[msg.sender][i] == plateNumber && cars[plateNumber].startTime == 0x0) {
                    cars[plateNumber].startTime = startTime;
                    cars[plateNumber].endTime = endTime;
                    cars[plateNumber].price = price;
                    return true;
                }
            }
        }
        
        return false;
    }
}
