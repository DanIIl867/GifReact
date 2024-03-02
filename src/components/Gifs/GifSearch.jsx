export const GifSearch = ({onNameChange}) => {
    return(
        <form onSubmit={(e) => {
            e.preventDefault()
            const form = e.currentTarget
            onNameChange(form.elements.Input.value)
            form.reset()
            }}>
            <input type="text" name="Input"/>
            <button type="submit">Search</button>
        </form>
    )
}