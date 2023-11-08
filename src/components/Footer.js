import { ReactNode } from 'react'

import { Box, Button, Container, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import Logo from './Logo'

const ListHeader = ({ children }) => {
	return (
		<Text fontWeight={'500'} fontSize={'lg'} mb={2}>
			{children}
		</Text>
	)
}

export default function LargeWithLogoLeft() {
	return (
		<Box mt='80px' bg={useColorModeValue('gray.700', 'gray.900')} color={useColorModeValue('white', 'gray.200')}>
			<Container as={Stack} maxW={'8xl'} py={10}>
				<SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }} spacing={8}>
					<Stack spacing={6}>
						<Box>
							<Logo color={useColorModeValue('gray.700', 'white')} />
						</Box>

						<Text fontSize={'sm'}>© 2022 Chakra Templates. All rights reserved</Text>
						<Button colorScheme='gray' color='blue.700' size='md'>
							Cześć Uzytkowniku!
						</Button>
					</Stack>
					<Stack align={'flex-start'}>
						<ListHeader>PODSTAWY</ListHeader>
						<Box as='a' href={'#'}>
							O TMDB
						</Box>
						<Box as='a' href={'#'}>
							Skontaktuj się z nami
						</Box>
						<Box as='a' href={'#'}>
							Fora pomocy tech.
						</Box>
						<Box as='a' href={'#'}>
							API
						</Box>
						<Box as='a' href={'#'}>
							System Status
						</Box>
					</Stack>
					<Stack align={'flex-start'}>
						<ListHeader>ZAANGAŻUJ SIĘ</ListHeader>
						<Box as='a' href={'#'}>
							Biblia Współtwórców
						</Box>
						<Box as='a' href={'#'}>
							Dodaj nowy film
						</Box>
						<Box as='a' href={'#'}>
							Dodaj nowy serial
						</Box>
					</Stack>
					<Stack align={'flex-start'}>
						<ListHeader>SPOŁECZNOŚĆ</ListHeader>
						<Box as='a' href={'#'}>
							Wytyczne
						</Box>
						<Box as='a' href={'#'}>
							Dyskusje
						</Box>
						<Box as='a' href={'#'}>
							Ranking
						</Box>
						<Box as='a' href={'#'}>
							Twitter
						</Box>
					</Stack>
					<Stack align={'flex-start'}>
						<ListHeader>PRAWNE</ListHeader>
						<Box as='a' href={'#'}>
							Regulamin
						</Box>
						<Box as='a' href={'#'}>
							Warunki użytkowania interfejsu API
						</Box>
						<Box as='a' href={'#'}>
							Polityka prywatności
						</Box>
						<Box as='a' href={'#'}>
							Wniosek DMCA Takedown
						</Box>
					</Stack>
				</SimpleGrid>
			</Container>
		</Box>
	)
}
