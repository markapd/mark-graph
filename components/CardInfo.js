import React from 'react'
import { Box, ListItem,Text,Button,HStack } from '@chakra-ui/react'

export const CardInfo = ({productID, name, unitPrice, quantityPerUnit, handleDelete, handleEdit, myInfo}) => {
	return (
		<ListItem rounded={10} p={3} bg="gray.300" m="7px">
			<Text fontWeight="bold">ID: {productID}</Text>
			<Text>{name}</Text>
			<Text fontStyle="italic" fontSize={15}>{quantityPerUnit}</Text>
			<Text>{unitPrice}</Text>
			<HStack justify="space-between">
				<Button size="xs" onClick={() => handleDelete(productID) } >Delete</Button>
				<Button size="xs" onClick={() => handleEdit(myInfo) } >Edit</Button>
			</HStack>
		</ListItem>
	)
}	

