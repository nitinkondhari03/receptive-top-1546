import { Tabs, TabList, TabPanels, Tab, TabPanel,InputGroup,InputLeftElement,Input,Img,
   Box,Button,  Popover,
   PopoverTrigger,
   PopoverContent,
   PopoverBody,
   PopoverArrow,
   Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Auth} from '../Context/Auth'
function Home(){
  const [adultscount,setadultcount]=useState(0)
  const [childrencount,setchildrencount]=useState(0)
  const [cityname,setcityname]=useState('')
  const [checkin,setcheckin]=useState('')
  const [checkout,setcheckout]=useState('')
  const [travell,setraveller]=useState('')
  const navigates=useNavigate()
const [redcoloer,setredcolr]=useState(false)
const {searchdata,setserachdata}=useContext(Auth)

  const handlecity=(event)=>{
    event.preventDefault()
    let obj={
      cityname:cityname,
      checkin:checkin,
      checkout:checkout,
      travell:adultscount+childrencount
    }
    if(obj.cityname===''){
      setredcolr(true)
    }else{
      setredcolr(false)
      setserachdata(obj)
    navigates('/allproduct')
      

    }
  }
    return(
        <div>
            <Tabs  border='1px' borderColor='black.200' padding="5px" borderRadius={'15'} m='auto'mt={'50'} width='80%'>
  <TabList borderBottom={1} borderStyle={'solid'}
        borderColor={'black'}>
    <Tab  ml={'auto'} gap={'20'} fontWeight="bold" >Stays</Tab>
    <Tab fontWeight="bold" >Flight</Tab>
    <Tab fontWeight="bold" >Cars</Tab>
    <Tab fontWeight="bold" >Packages</Tab>
    <Tab mr={'auto'} fontWeight="bold" >Thing to do</Tab>
  </TabList>

  <TabPanels>
    <TabPanel pt='10'>
      {redcoloer && 
      <Box  border='1px solid red' bg='red.600' borderRadius={'10'} h={'auto'}>
           <Text ml='5' fontWeight={'bold'} color='white' fontSize={'18'}>To continue, please correct the error below.</Text>
           <Text ml='5' fontWeight={'bold'} color='white' fontSize={'18'}>Go to the error.</Text>
      </Box> }
      <Box  display={'flex'}>
      <Text fontWeight={'bold'} ml={'2'} fontSize={'16'}>Going to</Text>
      <Text ml={"335"} fontWeight={'bold'} fontSize={'16'}>Check-in</Text>
      <Text  ml={"155"} fontWeight={'bold'} fontSize={'16'}>Check-out</Text>
      <Text ml={"147"} fontWeight={'bold'} fontSize={'16'}>Travellers</Text>
      </Box>

      
    <Box gap={4} mt='2'  display={'flex'} justifyContent="space-between">
    <InputGroup w={'1500px'}>
    <InputLeftElement
    
      children={<Img w={'5'} h={'5'} src="data:image/png;base64,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" />}
    />
    <Input type={'text'} name="cityname" value={cityname} onChange={((e)=>setcityname(e.target.value))}  borderColor={redcoloer? 'red':'teal'} placeholder='Going to' />
  </InputGroup>

  <InputGroup w={'800px'}>
    <InputLeftElement
      pointerEvents='none'
      children={<Img w={'5'} h={'5'} src="https://i.pinimg.com/originals/d2/28/d0/d228d012b5f3852abb2b66d9da526801.png" />}
    />
    <Input type='date' borderColor='teal' name="checkin" value={checkin} onChange={((e)=>setcheckin(e.target.value))}  placeholder='Check-in' />
  </InputGroup>

  <InputGroup w={'800px'}>
    <InputLeftElement
      pointerEvents='none'
      children={<Img w={'5'} h={'5'} src="https://i.pinimg.com/originals/d2/28/d0/d228d012b5f3852abb2b66d9da526801.png" />}
    />
    <Input type='date' borderColor='teal' name="checkout" value={checkout} onChange={((e)=>setcheckout(e.target.value))}  placeholder='Check-out'  />
  </InputGroup>

  <InputGroup w={'1500px'} border={'1px solid teal'} borderRadius="5" >
    <InputLeftElement
      pointerEvents='none'
      children={<Img w={'5'} h={'5'} src="https://cdn-icons-png.flaticon.com/128/3171/3171065.png" />}
    />
    <Popover>
  <PopoverTrigger>
    
  <Button ml={'10'}  colorScheme='whiteAlpha'  color={'black'} >
    1 Room,{adultscount+childrencount} Travellers
  </Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
   
    <PopoverBody >
        <Text fontSize={'20'} fontWeight={'bold'}>Travellers</Text>
        <Text mt={'2'} fontSize={'16'} fontWeight={'bold'}>Room 1</Text>
    </PopoverBody>
    <Box display={'flex'} justifyContent="space-between" pb='5'>
          <Box ml='3' mt='3'><Text>Adults</Text></Box>
          <Box >
            <Button mr='2' mt='1' disabled={adultscount==0} borderRadius={'50%'} onClick={(()=>setadultcount(adultscount-1))} textAlign="center" mb='auto' fontSize={'20'}>-</Button>
            <Button disabled  borderRadius={'50%'} mr='2'>{adultscount}</Button>
            <Button mr='2' mt='1' borderRadius={'50%'} onClick={(()=>setadultcount(adultscount+1))} textAlign="center" mb='auto' fontSize={'20'}>+</Button>
          </Box>
    </Box>
    <Box display={'flex'} justifyContent="space-between" pb='5'>
          <Box ml='3' mt='3'><Text>Children <br />Ages 0 to 17</Text></Box>
          <Box mt='3'>
            <Button mr='2' mt='1' disabled={childrencount==0} borderRadius={'50%'} textAlign="center" mb='auto' onClick={(()=>setchildrencount(childrencount-1))} fontSize={'20'}>-</Button>
            <Button  borderRadius={'50%'} mr='2' disabled>{childrencount}</Button>
            <Button mr='2' mt='1' borderRadius={'50%'} textAlign="center" mb='auto' onClick={(()=>setchildrencount(childrencount+1))} fontSize={'20'} >+</Button>
          </Box>
    </Box>
    <Button colorScheme='linkedin' mt='4' ml='4' mr='4' mb='8' >Done</Button>
    
  </PopoverContent>
</Popover>
  </InputGroup>

  </Box>
  {redcoloer &&  <Text color={'red.600'}>Please select a destination</Text>}
   

  <Box  w={'150px'} m={'auto'} mt={'100'} >
  <Button w={'100%'} onClick={handlecity}  colorScheme='blue'>Search</Button>
  </Box>
    </TabPanel>
    <TabPanel>

<Box gap={4} mt="10" display={'flex'} justifyContent="space-between">

<InputGroup w={'1500px'}>
<InputLeftElement
  children={<Img w={'5'} h={'5'} src="data:image/png;base64,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" />}
/>
<Input type={'text'} borderColor='teal'  placeholder='Leaving from' />
</InputGroup>
<InputGroup w={'1500px'}>
<InputLeftElement
  pointerEvents='none'
  children={<Img w={'5'} h={'5'} src="data:image/png;base64,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" />}
/>
<Input type='tel' borderColor='teal'  placeholder='Going to' />
</InputGroup>
<InputGroup w={'800px'}>
<InputLeftElement
  pointerEvents='none'
  children={<Img w={'5'} h={'5'} src="https://i.pinimg.com/originals/d2/28/d0/d228d012b5f3852abb2b66d9da526801.png" />}
/>
<Input type='date' borderColor='teal'  placeholder='Check-in' />
</InputGroup>
<InputGroup w={'800px'}>
<InputLeftElement
  pointerEvents='none'
  children={<Img w={'5'} h={'5'} src="https://i.pinimg.com/originals/d2/28/d0/d228d012b5f3852abb2b66d9da526801.png" />}
/>
<Input type='date' borderColor='teal'  placeholder='Check-out' />
</InputGroup>
</Box>
<Box  w={'150px'} m={'auto'} mt={'100'} >
<Button w={'100%'}   colorScheme='blue'>Search</Button>
</Box>
</TabPanel>
    <TabPanel>
    <Box gap={4} mt="10" display={'flex'} justifyContent="space-between">
<InputGroup w={'50%'}>
<InputLeftElement
  children={<Img w={'5'} h={'5'} src="data:image/png;base64,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" />}
/>
<Input type={'text'} borderColor='teal'  placeholder='Pick-up' />
</InputGroup>
<InputGroup w={'50%'}>
<InputLeftElement
  pointerEvents='none'
  children={<Img w={'5'} h={'5'} src="data:image/png;base64,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" />}
/>
<Input type='tel' borderColor='teal'  placeholder='Same as pick-up' />
</InputGroup>


</Box>  
    <Box gap={4} mt="10" display={'flex'} justifyContent="space-between">
<InputGroup w={'25%'}>
<InputLeftElement
  children={<Img w={'5'} h={'5'} src="https://i.pinimg.com/originals/d2/28/d0/d228d012b5f3852abb2b66d9da526801.png" />}
/>
<Input type={'date'} borderColor='teal'  placeholder='Pick-up Date' />
</InputGroup>
<InputGroup w={'25%'}>
<InputLeftElement
  pointerEvents='none'
  children={<Img w={'5'} h={'5'} src="https://i.pinimg.com/originals/d2/28/d0/d228d012b5f3852abb2b66d9da526801.png" />}
/>
<Input type='date' borderColor='teal'  placeholder='Going to' />
</InputGroup>
<InputGroup w={'25%'}>
<InputLeftElement
  pointerEvents='none'
  children={<Img w={'5'} h={'5'} src="https://i.pinimg.com/originals/d2/28/d0/d228d012b5f3852abb2b66d9da526801.png" />}
/>
<Input type='time' borderColor='teal'   placeholder='Check-out' />
</InputGroup>
<InputGroup w={'25%'}>
<InputLeftElement
  pointerEvents='none'
  children={<Img w={'5'} h={'5'} src="https://i.pinimg.com/originals/d2/28/d0/d228d012b5f3852abb2b66d9da526801.png" />}
/>
<Input type='time' borderColor='teal'  placeholder='Check-out' />
</InputGroup>
</Box>
<Box  w={'150px'} m={'auto'} mt={'100'} >
<Button w={'100%'}  colorScheme='blue'>Search</Button>
</Box>
    </TabPanel>
    <TabPanel>

<Box gap={4} mt="10" display={'flex'} justifyContent="space-between">

<InputGroup w={'1500px'}>
<InputLeftElement
  children={<Img w={'5'} h={'5'} src="data:image/png;base64,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" />}
/>
<Input type={'text'} borderColor='teal'  placeholder='Leaving from' />
</InputGroup>
<InputGroup w={'1500px'}>
<InputLeftElement
  pointerEvents='none'
  children={<Img w={'5'} h={'5'} src="data:image/png;base64,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" />}
/>
<Input type='tel' borderColor='teal'  placeholder='Going to' />
</InputGroup>
<InputGroup w={'800px'}>
<InputLeftElement
  pointerEvents='none'
  children={<Img w={'5'} h={'5'} src="https://i.pinimg.com/originals/d2/28/d0/d228d012b5f3852abb2b66d9da526801.png" />}
/>
<Input type='date'  borderColor='teal'  placeholder='Check-in' />
</InputGroup>
<InputGroup w={'800px'}>
<InputLeftElement
  pointerEvents='none'
  children={<Img w={'5'} h={'5'} src="https://i.pinimg.com/originals/d2/28/d0/d228d012b5f3852abb2b66d9da526801.png" />}
/>
<Input type='date' borderColor='teal'  placeholder='Check-out' />
</InputGroup>
</Box>
<Box  w={'150px'} m={'auto'} mt={'100'} >
<Button w={'100%'}  colorScheme='blue'>Search</Button>
</Box>
</TabPanel>
<TabPanel>

<Box gap={4} mt="10" display={'flex'} justifyContent="space-between">

<InputGroup w={'1500px'}>
<InputLeftElement
  children={<Img w={'5'} h={'5'} src="data:image/png;base64,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" />}
/>
<Input type={'text'} borderColor='teal'  placeholder='Leaving from' />
</InputGroup>

<InputGroup w={'1000px'}>
<InputLeftElement
  pointerEvents='none'
  children={<Img w={'5'} h={'5'} src="https://i.pinimg.com/originals/d2/28/d0/d228d012b5f3852abb2b66d9da526801.png" />}
/>
<Input type='date' borderColor='teal'  placeholder='Check-in' />
</InputGroup>
<InputGroup w={'800px'}>
<InputLeftElement
  pointerEvents='none'
  children={<Img w={'5'} h={'5'} src="https://i.pinimg.com/originals/d2/28/d0/d228d012b5f3852abb2b66d9da526801.png" />}
/>
<Input type='date' borderColor='teal'  placeholder='Check-out' />
</InputGroup>
</Box>
<Box  w={'150px'} m={'auto'} mt={'100'} >
<Button w={'100%'}  colorScheme='blue'>Search</Button>
</Box>
</TabPanel>
  </TabPanels>
</Tabs>
        </div>
    )
}
export default Home