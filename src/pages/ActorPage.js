import MainTemplate from '../templates/MainTemplate'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Grid, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ActorPage = () => {
	const [actor, setActor] = useState([])

	useEffect(() => {
		getActor()
	}, [])

	const getActor = async () => {
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}`
			)
			setActor(response.data.results)
		} catch (error) {
			console.log(error)
		}
	}
	if (!actor) {
		return
	}
	console.log(actor)
	return (
		<MainTemplate>
      
<Box my={5} maxW={"8xl"} mx="auto" px={{ base: 4 }}>

      
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
			{actor.map((item) => (
        <Link to={`/actors/${item.name.replaceAll(" ", "-").toLowerCase()}-${item.id}`}>
        <Card maxW='sm'>
				<CardBody>
					<Image borderRadius={15} src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`} alt='Dan Abramov'/>
          
          <Stack mt='4' spacing='3'>
            <Heading as="h1" size='sm'>{item.name}</Heading>
            <Text>{item.known_for.map((item) => item.title ? item.title.slice(0, 10) + ", " : item.name.slice(0, 10) + ", ")}...</Text>
          </Stack>
          </CardBody>
          </Card>
          </Link>
          
          
			))}
      </SimpleGrid>
      
      
  

      </Box>

		</MainTemplate>
	)
}

export default ActorPage
