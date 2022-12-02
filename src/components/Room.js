import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import Button from "react-bootstrap/Button";

function Room(props) {

    const devices = props.room.devices;
    const [showDevices, setShowDevices] = useState(false);

    const setImage = () => {
        if (props.room.type === "room") return "https://img.freepik.com/free-vector/living-room-interior-with-sofa-tv-apartment_107791-3226.jpg?w=2000";
        else return "https://img.freepik.com/free-vector/cartoon-set-kitchen-counter-with-appliances-fridge-microwave-oven-kettle-blender_1441-1819.jpg?w=2000";
    };

    const openDevicesTable = () => {
        setShowDevices(!showDevices);
    };

    return (
        <div className="container">
            <Row>
                <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">
                    <Card.Body>
                        <Card.Title>{props.room.name}</Card.Title>
                        <Card.Img style={{ height: '14rem' }} variant="top" src={setImage()} />
                        <hr></hr>
                        <Button variant="primary" onClick={openDevicesTable}>
                            {showDevices ? 'Hide Devices' : 'Show Devices'}
                        </Button>
                    </Card.Body>
                </Card>
            </Row>
            {showDevices ?
                <Row>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ID</th>
                                <th scope="col">Device</th>
                                <th scope="col">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                devices.map((device, index) => (
                                <tr>
                                    <th scope="row">{index}</th>
                                    <td>{device.id}</td>
                                    <td>{device.name}</td>
                                    <td>{device.desired.value}</td>
                                </tr>))
                            }
                        </tbody>
                    </table>
                </Row>
                : <></>
            }
        </div>
    );
}

export default Room;