import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";


const LogIn = () => {
    const navigate = useNavigate()
    const { handleSubmit, register } = useForm()
    const submit = handleSubmit()
    console.log(submit, "submit");
    return (

        <Flex w="full" flexDirection="row" h="1000px" bg="#111111">
            <Flex w="100%" bg="#262626" justifyContent="center" alignItems="center" borderTopRightRadius="50%" borderBottomLeftRadius="40%" mt="30px">
                <Flex flexDirection="column" alignItems="center" w="500px" bg="#111111" h="400px" borderRadius="40px" gap="30px">
                    <Text mt="20px" color="orange" fontSize="36px" fontWeight="800" fontFamily="cursive">LogIn</Text>
                    <Input w="350px" h="45px" borderColor="orange" color="orange" fontSize="19px" type="email" borderRadius="16px" placeholder="Email"  {...register("email")}/>
                    <Input w="350px" h="45px" borderColor="orange" color="orange" fontSize="19px" type="password" borderRadius="16px" placeholder="Password" {...register("password")} />
                    <Button w="350px" h="45px" bg="orange" color="black" borderRadius="16px" fontSize="20px" fontWeight="700" type="submit">Confirm </Button>
                    <Text  color="orange.700" onClick={() => navigate("/register")} _hover={{bg: "gray.700" }}>New here. register now !</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}


export default LogIn