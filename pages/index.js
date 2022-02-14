import { Input, Box,FormControl,FormLabel,Container,HStack,Button,
	List,Text,ListItem,	Spinner,	Select,	Spacer,	Divider,	useToast,
	AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'
// Imports
import { QUERY, CREATE_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } from '../query/schema'
import { useMutation, useQuery} from "@apollo/client";
import { useState, useRef} from 'react';
import { CardInfo } from '../components/CardInfo';
import { FormInput } from '../components/FormInput';
//Select limit
const selectOptions = [
	{	value:'',	label:"Limit Items"	},
	{	value:0, 	label:"All"},
	{	value:5,	label:"5"	},
	{	value:10,	label:"10"	},
	{	value:20,	label:"20"},
]
export default function Home({options = selectOptions}) {
	// const [isOpen, setIsOpen] = useState(false)
  // const onClose = () => setIsOpen(false)
  // const cancelRef = useRef()
	const toast = useToast()
	const [handleStatus, setHandleStatus] = useState(true)
	const [ limit, setLimit] = useState(0)
	const [ sorts, setsSort] = useState("NAME_ASC")
	const [	myId, setMyId] = useState('')
	const [ state, setState ] = useState({productID:'',name:'',quantityPerUnit:'',unitPrice:''})
	const [	createProduct] = useMutation(CREATE_PRODUCT)
	const [	removeProduct] = useMutation(REMOVE_PRODUCT)
	const [	updateProduct] = useMutation(UPDATE_PRODUCT)
 	const { loading, data } = useQuery(QUERY,{variables: {limit: parseInt(limit), sort:sorts}})

 if(loading){
		return <Spinner
		thickness='4px'
		position="absolute"
		top="300px"
		left="700px"
		speed='0.65s'
		emptyColor='gray.200'
		color='blue.500'
		size='xl'
	/>
 }
 const newData = data.viewer.productList
	const handleSubmit = (e) => {
		const uuid = Math.floor(Math.random() * 3100)
		e.preventDefault()
		const dataAdded =	createProduct({variables: 
				{	createProductRecord2: {
						productID: uuid,
						name: state.name,
						quantityPerUnit: state.quantityPerUnit,
						unitPrice: parseInt(state.unitPrice)
					}}
			 })
			if(dataAdded) {
				handleCancel()
				return	toast({
          title: 'Success!',
          description: "Information Added!",
          status: 'success',
          duration: 9000,
					position: 'top-right',
          isClosable: true,
        })
			}
	}
	function handleChange(e) {
		const {name, value} =	e.target
		setState({...state,[name]:value});
	}
	const handleDelete = (id) => {
		const deleteConfirm =	confirm("You want to delete?")
		if(deleteConfirm) {
		removeProduct({variables: {	filter: {	productID: id}}})
		handleCancel()
		return	toast({
			title: 'Success!',
			description: "Information Deleted!",
			status: 'success',
			duration: 9000,
			position: 'top-right',
			isClosable: true,
		})
	}
	}
	const handleCancel = () => {
		setHandleStatus(true)
		setState({...state,	productID:'',	name: '',quantityPerUnit: '',	unitPrice: ''	})
	}

	const handleUpdate = (e) => {
		e.preventDefault()
		const updated =	updateProduct({variables: {  id: myId,
			updateProductRecord2: {
			name: state.name,
			quantityPerUnit: state.quantityPerUnit,
			unitPrice: parseInt(state.unitPrice)
			}
		}})
		if(updated) {
			handleCancel()
			return	toast({
				title: 'Success!',
				description: "Information Updated!",
				status: 'success',
				duration: 9000,
				position: 'top-right',
				isClosable: true,
			})
		}
	}

	const handleEdit = (updateData) => {
			const {_id, __typename, ...rest} = updateData
			setMyId(_id)
			setHandleStatus(false)
			setState({...state, ...rest})
	}
	return (
  <Box>
		 	<Box w="500px" boxShadow="xl" m="50px" p="30px">
				<form onSubmit={handleStatus? handleSubmit: handleUpdate }>
					<FormInput {...state} handleStatus={handleStatus} handleCancel={handleCancel} handleChange={handleChange} />
				</form>
			</Box>
			<Container maxW="container.lg">
				<HStack>
					<Box maxW={200}>
						<Select onChange={(e) => setLimit(e.target.value)}>
							{	
								options.map((e,i) => 
									<option key={i} value={e.value}>{e.label}</option> 
								)
							}
						</Select>
					</Box>
					<Box maxW={160}>
						<Select onChange={(e) => setsSort(e.target.value)}>
							<option value="NAME_DESC">Descend Name</option>
							<option value="NAME_ASC" >Ascend Name</option>
						</Select>
					</Box>
				</HStack>
			</Container>
			<Container maxW="container.3xl">
				<List display="flex" flexWrap="wrap">
					{
						newData.map((e,i)=>
							<CardInfo key={i} {...e} handleDelete={handleDelete} handleEdit={handleEdit} myInfo={e}  />
						)
					}
				</List>
			</Container>
	</Box>
  )
}

