import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Space from "./Space";
import {FormattedMessage} from 'react-intl';

const { useEffect, useState } = require("react");

function Spaces() {

    const [spaces, setSpaces] = useState([]);

    useEffect(() => {
        const URL = "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
        fetch(URL).then(data => data.json()).then(data => {
            setSpaces(data);
        })
    }, []);

    return (
        <div className="container">
            <h1>
                <FormattedMessage id="Spaces" />
            </h1>
            <hr></hr>
            <Row>
                {spaces.map(space => <Col><Space space={space} key={space.id} /></Col>)}
            </Row>

        </div>
    )
}

export default Spaces;