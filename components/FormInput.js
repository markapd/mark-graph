import React,{Fragment} from 'react'
import { Input,FormControl,FormLabel,HStack,Button,
		Spacer,
	
} from '@chakra-ui/react'

export const FormInput = ({name,quantityPerUnit,unitPrice, handleCancel, handleStatus, handleChange}) => {
	return (
		<Fragment>
			<FormControl isRequired>
					<HStack m="10px">
						<FormLabel htmlFor='name'>name</FormLabel>
						<Input required id='name' name="name" type='text' value={name} onChange={handleChange} />
					</HStack>
				</FormControl>
				<FormControl>
					<HStack  m="10px">
						<FormLabel htmlFor='quantityPerUnit'>quantityPerUnit</FormLabel>
						<Input type='text' name="quantityPerUnit" value={quantityPerUnit} onChange={handleChange} />
					</HStack>
				</FormControl>
				<FormControl>
					<HStack  m="10px">
						<FormLabel htmlFor='unitPrice'>unitPrice</FormLabel>
						<Input type='number' name="unitPrice" value={unitPrice} onChange={handleChange} />
					</HStack>
				</FormControl>
				<FormControl>
					{ handleStatus ? 
						<Button bg="red.300" type="submit"  variant="solid"> Submit </Button>:
						<HStack>
						<Button bg="red.300" type="submit"   variant="solid"> Update </Button>
						<Spacer />
						<Button bg="red.300"  variant="solid" onClick={()=> handleCancel()	}> Cancel </Button>
						</HStack>
					}
				</FormControl>
		</Fragment>
	)
}

