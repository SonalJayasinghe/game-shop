import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronBarDown } from 'react-icons/bs'

function SortSelector() {
  return (
    <Menu> 
    <MenuButton as = {Button} rightIcon={<BsChevronBarDown/>}> Order by: Relevence </MenuButton>
    <MenuList>
        <MenuItem> Item 1 </MenuItem>
        <MenuItem> Item 2 </MenuItem>
        <MenuItem> Item 3 </MenuItem>
    </MenuList>
</Menu>
  )
}

export default SortSelector