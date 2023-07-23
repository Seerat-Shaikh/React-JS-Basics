//------Using Functional Based Componenets------

// PascalCasing (First letter of each word should be Capital)
function Message() {
    // JSX: JavaScript XML
    const name = 'Seerat';
    if (name)
       return <h1>Hello {name}</h1> //expression module will return Hello Seerat
    return <h1>Hello World</h1> //else this
}

export default Message;