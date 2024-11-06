import { Dropdown, DropdownButton, DropdownDivider, FormControl, InputGroup } from "react-bootstrap"
import { BsCheck2 } from "react-icons/bs";

const DropDown = ({sortBy,onSortByChange,orderBy,onOrderByChange}) => {
    return (
        <>
            <DropdownButton
                        variant="info"
                        title="Sort">
                        <Dropdown.Item href="#"onClick={() => onSortByChange('FirstName')}>FirstName {sortBy === "FirstName" && <BsCheck2 className="float-end" />}</Dropdown.Item>
                        <Dropdown.Item href="#"onClick={() => onSortByChange('LastName')}>LastName {sortBy === "LastName" && <BsCheck2 className="float-end" />}</Dropdown.Item>
                        <Dropdown.Item href="#"onClick={() => onSortByChange('AptDate')}>AptDate {sortBy === "AptDate" && <BsCheck2 className="float-end" />}</Dropdown.Item>
                        <DropdownDivider />
                        <Dropdown.Item href="#"onClick={() => onOrderByChange('asc')}>asc {orderBy === "asc" && <BsCheck2 className="float-end" />}</Dropdown.Item>
                        <Dropdown.Item href="#"onClick={() => onOrderByChange('desc')}>desc {orderBy === "desc" && <BsCheck2 className="float-end" />}</Dropdown.Item>
                        </DropdownButton>
        
        </>
    )
}


const Search = ({query,onQueryChange,sortBy,onSortByChange,orderBy,onOrderByChange}) => {
    return(
        <>
            <InputGroup className="mb-3">
                <FormControl placeholder="Search" onChange={(event)=>{
                    onQueryChange(event.target.value)
                }}  value={query}/>
                <DropDown 
                sortBy={sortBy}
                onSortByChange = {mySort => onSortByChange(mySort)}
                orderBy={orderBy}
                onOrderByChange = {myOrder => onOrderByChange(myOrder)}/>
                
            </InputGroup>
        </>
    )
}

export default Search;