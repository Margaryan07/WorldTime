import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";


const Register = () => {
    const navigate = useNavigate()
    return(
        <Flex w="full" flexDirection="row" h="1000px" bg="#111111">
        <Flex w="100%" bg="#262626" justifyContent="center" alignItems="center" borderTopRightRadius="50%" borderBottomLeftRadius="40%" mt="30px">
            <Flex flexDirection="column" alignItems="center" w="500px" bg="#111111" borderRadius="40px" gap="30px">
                <Text mt="20px" color="orange" fontSize="34px" fontWeight="700" fontFamily="cursive">Create your Account</Text>
                <Input w="350px" h="45px" borderColor="orange" color="orange" fontSize="19px" type="text" borderRadius="16px" placeholder="Name"/>
                <Input w="350px" h="45px" borderColor="orange" color="orange" fontSize="19px" type="text" borderRadius="16px" placeholder="Last Name" />
                <Input w="350px" h="45px" borderColor="orange" color="orange" fontSize="19px" type="email" borderRadius="16px" placeholder="Email" />
                <Input w="350px" h="45px" borderColor="orange" color="orange" fontSize="19px" type="password" borderRadius="16px" placeholder="Password" />
                <Input w="350px" h="45px" borderColor="orange" color="orange" fontSize="19px" type="text" borderRadius="16px" placeholder="Adress" />
                <Button w="350px" h="45px" bg="orange" color="black" borderRadius="16px" fontSize="20px" fontWeight="700" >Confirm </Button>
                <Text mb="20px" color="orange.700" onClick={() => navigate("/login")} _hover={{bg: "gray.700" }}>  Have an Account. LogIn !</Text>
            </Flex>
        </Flex>
    </Flex>
    )
}

export default Register