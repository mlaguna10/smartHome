import { useParams } from "react-router-dom";
import Room from "./Room";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';

function Rooms() {
    const { useEffect, useState } = require("react");
    const params = useParams();
    const currentRooms = [];
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const URL = "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
        fetch(URL).then(data => data.json()).then(data => {
            setRooms(data);
        })
    }, []);

    const roomsBySpaceId = () => {
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].homeId === params.spaceId) {
                currentRooms.push(rooms[i])
            }
        }
    };

    roomsBySpaceId();

    return (
        <div className="container">
            <h1>My Rooms</h1>
            <hr></hr>
            <Row>
                {currentRooms.map(room => <Col><Room room={room} key={room.id} /></Col>)}
            </Row>

        </div>
    );
};

export default Rooms;