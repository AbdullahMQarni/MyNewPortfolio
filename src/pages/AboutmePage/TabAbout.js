import './Aboutme.css'


function TabAbout({children, isSelected, onSelect}) {
    return (
        <>
        <button className={isSelected ? 'active2' : undefined} onClick={onSelect}>
            {children}
        </button>
        </>
    )
}

export default TabAbout