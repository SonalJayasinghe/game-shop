import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronBarDown } from 'react-icons/bs'


interface Props{
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrderText: string
}
function SortSelector({onSelectSortOrder, sortOrderText}: Props) {
    
    const sortOrder = [
        {value: '', label: 'Relevence' },
        {value: '-added', label: 'Date Added' },
        {value: 'name', label: 'Name' },
        {value: '-released', label: 'Release date' },
        {value: '-metacritic', label: 'Popularity' },
        {value: '-rating', label: 'Average Rating' },
    ];

    const currentSortOrder = sortOrder.find(order => order.value == sortOrderText)

  return (
    <Menu> 
    <MenuButton as = {Button} rightIcon={<BsChevronBarDown/>}> Order by: {currentSortOrder?.label} </MenuButton>
    <MenuList>
        {sortOrder.map((order, index) => <MenuItem onClick = {() => onSelectSortOrder(order.value)} key={index} value={order.value}>{order.label}</MenuItem>)}
    </MenuList>
</Menu>
  )
}

export default SortSelector