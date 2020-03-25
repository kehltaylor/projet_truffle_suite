pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Pokedex is ERC721{
    string[] typeNames;
    string[] weaknessNames;

    address public professorOak;

    struct Pokemon{
        string name;
        string category;
        string talent;
        string types;
        string weaknesses;
    }

    constructor() public {
        professorOak = msg.sender;
    }

    modifier restricted() {
        require(msg.sender == professorOak);
        _;
    }
    /*
    "bulbizarre","Graine","Engrais",["0x63616c6172686f00000000000000000000000000000000000000000000000000"], ["0x63616c6172686f00000000000000000000000000000000000000000000000000"]
    */
    Pokemon[] public pokemons;

    modifier restrictId(uint256 _id){
        require(_id <= pokemons.length);
        _;
    }

    function getPokemonName(uint256 i) public restrictId(i) view returns(string memory name){
        return pokemons[i].name;
    }

    function getPokemonCategory(uint256 i) public restrictId(i) view returns(string memory category){
        return pokemons[i].category;
    }

    function getPokemonTalent(uint256 i) public restrictId(i) view returns(string memory talent){
        return pokemons[i].talent;
    }

    function getPokemonTypes(uint256 i) public restrictId(i) view returns(string memory types){
        return pokemons[i].types;
    }

    function getPokemonWeaknesses(uint256 i) public restrictId(i) view returns(string memory weaknesses){
        return pokemons[i].weaknesses;
    }

    function createPokemon(
        string memory _name, string memory _category, string memory _talent,
        string memory _types, string memory _weaknesses
    ) public restricted {
        /* for (uint i = 0; i < _types.length; i++) {
            typeNames.push(bytes32ToString(_types[i]));
        }
        for (uint i = 0; i < _weaknesses.length; i++) {
            weaknessNames.push(bytes32ToString(_weaknesses[i]));
        } */
        uint256 id = pokemons.length;
        pokemons.push(
            Pokemon(_name, _category, _talent, _types, _weaknesses)
        );
        _mint(msg.sender, id);
    }

    function getPokemonCount() public view returns (uint256){
        return pokemons.length;
    }

    function bytes32ToString(bytes32 x) private pure returns (string memory) {
        bytes memory bytesString = new bytes(32);
        uint charCount = 0;
        for (uint j = 0; j < 32; j++) {
            byte char = byte(bytes32(uint(x) * 2 ** (8 * j)));
            if (char != 0) {
                bytesString[charCount] = char;
                charCount++;
            }
        }
        bytes memory bytesStringTrimmed = new bytes(charCount);
        for (uint j = 0; j < charCount; j++) {
            bytesStringTrimmed[j] = bytesString[j];
        }
        return string(bytesStringTrimmed);
    }

    function random() private view returns (uint256) {
        return uint(keccak256(abi.encodePacked(block.difficulty, now, professorOak)));
    }

    function catchPokemon(uint256 _id) public returns (string memory){
        require(ownerOf(_id) == professorOak);
        require(_id <= pokemons.length);
        uint index = random() % 100;
        if(index < 65){
            _transferFrom(professorOak, msg.sender, _id);
            return string(pokemons[_id].name);
        }
        return string("Not caught");
    }

    function getPokemonOwner(uint256 id) public view returns(address){
        if(pokemons.length != 0)
            return ownerOf(id);
    }
}
