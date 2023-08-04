import React, { useEffect, useState } from 'react'
import MainTemplate from '../templates/MainTemplate'
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/layout'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Image } from '@chakra-ui/image'
import { Button } from '@chakra-ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css/scrollbar'

const ActorDetail = () => {
	const params = useParams()
	const itemid = params.name.replace(/\D/g, '')
	const [details, setDetails] = useState([])
	const [knowfor, setKnowfor] = useState([])

	useEffect(() => {
		getDetails()
	}, [])

	const getDetails = async () => {
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/person/${itemid}?api_key=${process.env.REACT_APP_API_KEY}&language=en`
			)
			setDetails(response.data)

			const res = await axios.get(
				`https://api.themoviedb.org/3/discover/movie?with_cast=64&sort_by=release_date.asc&api_key=${process.env.REACT_APP_API_KEY}&page=1`
			)

			setKnowfor(res.data)
		} catch (error) {
			console.log(error)
		}
	}

	const checkGender = () => {
		switch (details.gender) {
			case 1:
				return ' Kobieta'
			case 2:
				return 'Mężczyzna'
			default:
				return 'Inna '
		}
	}
	console.log(knowfor)

	return (
		<div>
			<MainTemplate>
				<Box my={5} maxW={'8xl'} mx='auto' px={{ base: 4 }}>
					<Grid templateRows='repeat(5, 1fr)' templateColumns='repeat(5, 1fr)' gap={4}>
						<GridItem rowSpan={4} colSpan={1}>
							<Image
								minWidth='200px'
								src={`https://image.tmdb.org/t/p/w500/${details.profile_path}`}
								alt='Dan Abramov'
								borderRadius={8}
							/>

							<Text pt='10px' fontWeight='Bold' fontSize='2xl'>
								Informacje osobiste
							</Text>
							<Text pt='15px' fontWeight='Bold' fontSize='lg'>
								Znana/y z
							</Text>

							<Text>{details.known_for_department}</Text>

							<Text pt='15px' fontWeight='Bold' fontSize='lg'>
								Płeć <br />
							</Text>
							<Text> {checkGender()} </Text>
							<Text></Text>
							<Text pt='15px' fontWeight='Bold' fontSize='lg'>
								Data urodzenia
							</Text>
							<Text>{details.birthday}</Text>
							<Text pt='15px' fontWeight='Bold' fontSize='lg'>
								Miejce urodzenia
							</Text>
							<Text>{details.place_of_birth}</Text>

							<Text pt='15px' fontWeight='Bold' fontSize='lg'>
								Ocena treści
							</Text>

							<Button></Button>
						</GridItem>
						<GridItem colSpan={4}>
							<Heading size='lg'>{details.name}</Heading>
							<Text pt='15px' fontSize='lg' fontWeight='bold'>
								Biografia
							</Text>
							<Text fontSize='sm' pt='10px'>
								{details.biography ? details.biography : 'Brak informacji'}
							</Text>
						</GridItem>
						<GridItem colSpan={4}>
							<Heading pb='10px' size='md'>
								Znana/y z
							</Heading>
							{/* <Swiper
								Autoplay={true}

								spaceBetween={5}
								slidesPerView={8}
								onSlideChange={() => console.log('slide change')}
								onSwiper={swiper => console.log(swiper)}> */}
								<Box display="flex" overflowX="scroll">{knowfor.results?.map(item => (
									<Box  padding="5px" minWidth="200px">
										<Image borderRadius="5px" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}></Image>

										<Text textAlign="center" fontSize="12px">{item.title}</Text>
									</Box>
								))}</Box>
							
							{/* </Swiper> */}
						</GridItem>

						<GridItem colSpan={4} bg='tomato' />
						<GridItem colSpan={4} bg='tomato' />
					</Grid>
				</Box>
			</MainTemplate>
		</div>
	)
}

export default ActorDetail
