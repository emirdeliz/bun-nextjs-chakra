import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Input,
  Text,
  CardFooter,
  Button,
  AbsoluteCenter,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";

export default function App() {
  return (
    <Flex height={'100%'} width={'100%'}>
      <Flex background={'gray.100'} width={'50%'} height={'100vh'} justifyContent={'flex-start'} alignItems={'center'} pl={10}>
        <Image alt="Ticket" src='/ticket.png' width={500} height={200} />
      </Flex>
      <AbsoluteCenter>
        <Flex align={'center'} justify={'center'} height={'100vh'}>
          <Card w={300}>
            <CardHeader>
              <Text textTransform='uppercase' fontWeight={'bold'}>
                Login
              </Text>
            </CardHeader>
            <CardBody>
              <Input mt={5} placeholder="usuário" width={'100%'} />
              <Input mt={5} placeholder="senha" width={'100%'} type="password"   />
            </CardBody>
            <CardFooter flexDirection={'column'} gap={3}>
              <Button colorScheme='blue' width={'100%'} fontSize={'xs'}>
                Acessar
              </Button>
              <Flex flexDirection={'row'}>
                <Text mr={2} fontSize={'xs'} width={'100%'}>Não tem uma conta?</Text>
                <Link colorScheme='blue' width={'100%'} textAlign={'end'} fontSize={'xs'}>
                  Registrar
                </Link>
              </Flex>
            </CardFooter>
          </Card>
        </Flex>
      </AbsoluteCenter>
    </Flex>
  )
}