function myButton () {
    function handleClick () {
        console.log("Handling the click event");
    }
}
return ( 
    <button onClick={handleClick}>
        I'm a button {count}
    </button>
);


export default myButton;

