import './Titlecomponent.css'

function Titlecomponent({Title, Text}) {
  return (
    <div className="title-component">
        <div className="container">
            <div className="title-component-text">
                <h1>{Title}</h1>
                <p>{Text}</p>
            </div>
        </div>
    </div>
  )
}

export default Titlecomponent