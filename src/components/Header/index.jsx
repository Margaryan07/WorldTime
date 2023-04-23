import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Scope } from "../../assets/scope.svg";
import { AiOutlineUser } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import {
    Box,
    Flex,
    Text,
    HStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Input
} from "@chakra-ui/react";


const Header = () => {
    const navigate = useNavigate()

    return (



        <Box>                                  
              {/* NavBar 1  */}

            <Flex flexDirection="raw" alignItems="center" justifyContent="space-between" w="full" h="40px" bg="black" p="20px">
                <HStack>
                    <Text fontSize="20px" fontWeight="600" color="orange">
                    //
                    </Text>
                    <Text fontSize="20px" fontWeight="600" color="white" fontFamily="cursive">
                        Shoot Smart. Shoot a Rock
                    </Text>
                </HStack>
                <HStack gap="30px">
                    <Text fontSize="20px" fontWeight="600" color="white" fontFamily="cursive">
                        About us
                    </Text>
                    <Text fontSize="20px" fontWeight="600" color="orange">
                 //
                    </Text>
                    <Text fontSize="20px" fontWeight="600" color="white" fontFamily="cursive">
                        Contacts
                    </Text>
                </HStack>


            </Flex>



               {/* NavBar 2 */}


            <Flex flexDirection="raw" alignItems="center" justifyContent="space-around" w="full" h="70px" bg="#262626">
                <HStack gap="10px" >
                    <Scope width="60px" />
                    <Text fontSize="30px" fontFamily="sans-serif" fontWeight="600" color="orange">
                        GrabaGun
                    </Text>
                </HStack>
                <Box>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon color="white" />} bg="none" _ hover={{bg: 'gray.400' }}>
                            <Text color="orange" fontSize="22px" fontWeight="700" fontFamily="cursive">GUNS</Text>
                        </MenuButton>
                        <MenuList bg="#262626">
                            <MenuItem bg="#262626" color="orange">Series</MenuItem>
                            <MenuItem bg="#262626" color="orange">Usage</MenuItem>
                            <MenuItem bg="#262626" color="orange">Caliber</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Text color="orange" fontSize="22px" fontWeight="700"  fontFamily="cursive" >AMMO</Text>
                <Text color="orange" fontSize="22px" fontWeight="700"  fontFamily="cursive" >PARTS & ACCESSORIES</Text>
                <HStack>
                    <Search2Icon fontSize="26px" color="orange" />
                    <Input w="350px" borderRadius="10px" placeholder="Search you Gun Here !" color="orange" border="1px" />
                </HStack>
                <HStack>
                    < AiOutlineUser color="orange" fontSize="28px" onClick={() => navigate("/login")} />
                    <BsBag color="orange" fontSize="26px" />
                </HStack>
            </Flex>
        </Box>
    )
}


export default Header