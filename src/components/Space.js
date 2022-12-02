import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

function Space(props) {

    const setImage = () => {
        if (props.space.type === "house") return "https://cdn.dribbble.com/users/485292/screenshots/6758663/houserevealanimate.png";
        else return "https://png.pngtree.com/png-clipart/20190520/original/pngtree-2-5d-building-2-5d-bungalow-building-bungalow-png-image_3920651.jpg";
    };

    return (
        <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">
            <Card.Body>
                <Card.Img style={{ height: '14rem' }} variant="top" src={setImage()} />
                <Card.Title>
                    <Link to={"/spaces/" + props.space.id}>
                        {props.space.name}
                    </Link>
                </Card.Title>
                <Card.Text>{props.space.address}</Card.Text>
                <Card.Text>
                    <FormattedMessage id="Phone" /><Card.Text>{props.space.phone}</Card.Text>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Space;