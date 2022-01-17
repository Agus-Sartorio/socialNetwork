import { StyledDiv } from './styles'

export default function SearchBar() {
    return (
        <StyledDiv>
            <form>
                <button type="submit"><i className="fas fa-search"></i></button>
                <input
                    type="text"
                    placeholder="Search"
                />
            </form>
        </StyledDiv>
    )
}