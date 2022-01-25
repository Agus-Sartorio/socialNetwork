import { StyledForm } from './styles'
import Search from '../Icons/Search'

export default function SearchBar() {
    return (
        <StyledForm>
            <button type="submit"><Search /></button>
            <input
                type="text"
                placeholder="Search"
            />
        </StyledForm>
    )
}