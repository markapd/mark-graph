// import { useRef, useState } from 'react'
// import { AlertDialogOverlay,AlertDialogContent,AlertDialogHeader,
// 	AlertDialogBody,AlertDialogFooter, Box,Button } from '@chakra-ui/react'

// export const DeleteButton = ({ myId, handleDelete }) => {
// 	const [isOpen, setIsOpen] = useState(false)
//   const onClose = () => setIsOpen(false)
// 	const cancelRef = useRef()
// 	return (
// 		<>
// 		<Box>
// 				<Button size="xs" onClick={() => setIsOpen(true)}>
// 					Delete
// 				</Button>
		
// 		<AlertDialogOverlay>
// 			<AlertDialogContent>
// 				<AlertDialogHeader fontSize='lg' fontWeight='bold'>
// 					Delete Customer
// 				</AlertDialogHeader>

// 				<AlertDialogBody>
// 					Are you sure? You can't undo this action afterwards.
// 				</AlertDialogBody>

// 				<AlertDialogFooter>
// 					<Button ref={cancelRef} onClick={onClose}>
// 						Cancel
// 					</Button>
// 					<Button colorScheme='red' onClick={() => handleDelete(myId) } ml={3}>
// 						Delete
// 					</Button>
// 				</AlertDialogFooter>
// 			</AlertDialogContent>
// 		</AlertDialogOverlay>
// 	</Box>
// 		</>
// 	)
// }

