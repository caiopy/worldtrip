import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { RiArrowLeftSLine } from 'react-icons/ri'

export function Header() {

  const { asPath } = useRouter()

  const notHomePage = asPath !== "/"

  return (
    <Flex as="header" bg="white" w="100%" mx="auto" px="1rem" h={["50px", "80px"]} align="center" justify="center">
      <Grid maxW="1160px" w="100%" h="100%" mx="auto" alignItems="center" templateColumns="repeat(3,1fr)" justifyContent="center">
        {notHomePage && (
          <Link href="/">
            <a >
              <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start" />
            </a>
          </Link>
        )}
        <Image src="/Logo.svg" alt="Worldtrip" w={["80px", "160px"]} justifySelf="center" gridColumn="2" />
      </Grid>
    </Flex>
  )
}