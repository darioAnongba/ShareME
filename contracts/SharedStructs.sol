pragma solidity ^0.4.17;

library SharedStructs {
    struct User {
        bytes32 name;
        uint nbRatings;
        uint rating; // Rating between 0 and 500
    }

    struct Car {
        uint startTime;
        uint endTime;
        uint price;
        bytes32 plateNumber;
        address owner;
        bool taken;
    }
}
