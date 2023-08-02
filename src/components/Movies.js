import { Box, CircularProgress, CircularProgressLabel, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

const Movies = ({ items, title }) => {
	console.log(items)
	return (
		<Box my={5} maxW={'8xl'} mx='auto' px={{ base: 4 }}>
			<Heading mb={4} mt={5} as='h2' size='lg' noOfLines={1}>
				{title}
			</Heading>

			<Swiper
				spaceBetween={15}
				slidesPerView={1.5}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				breakpoints={{
					640: {
						slidesPerView: 2.3,
					},
					768: {
						slidesPerView: 4.3,
					},
					1024: {
						slidesPerView: 7.5,
					},
				}}
				// onSlideChange={() => console.log("slide change")}
				// onSwiper={(swiper) => console.log(swiper)}
			>
				{items.map(item => (
					<SwiperSlide key={item.id}>
						<Box position={'relative'} bg='white'>
							<Image borderRadius={15} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt='Dan Abramov' />

							<CircularProgress
								position={'absolute'}
								bg='gray.900'
								borderRadius='50%'
								bottom='50px'
								left='10px'
								value={item.vote_average * 10}
								color='green.400'
								size='40px'>
								<CircularProgressLabel color='white' fontWeight={700} fontSize={13}>
									{item.vote_average}
								</CircularProgressLabel>
							</CircularProgress>

							<Heading mt={7} as='h2' size='sm' noOfLines={1}>
								{item.title}
							</Heading>
							<Text color='gray.400' fontSize='12px'>
								{item.release_date}
							</Text>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	)
}

export default Movies
