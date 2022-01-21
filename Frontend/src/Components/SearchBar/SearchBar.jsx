import { StyledDiv } from './styles'
import Search from '../Icons/Search'

export default function SearchBar() {
    return (
        <StyledDiv>
            <form>
                <button type="submit"><Search /></button>
                <input
                    type="text"
                    placeholder="Search"
                />
            </form>
        </StyledDiv>
    )
}