import { Button, Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function TeamMembers(args) {

    const { members } = args;

    const history = useHistory();

    function clickHander() {
        history.push("/member:id");
    }

    return (
        <div className="membercard-list">
            {members
                .map((member, index) =>
                    <Card key={index} className="my-2" color="light" style={{ width: 18 + 'rem' }} >
                        <CardHeader>
                            <strong>{member.name}</strong>
                        </CardHeader>
                        <CardBody>
                            <CardTitle tag="h5">
                                <FontAwesomeIcon icon={faPhone} /> Phone
                            </CardTitle>
                            <CardText>
                                {member.phone}
                            </CardText>
                            <CardTitle tag="h5">
                                <FontAwesomeIcon icon={faEnvelope} /> E-mail
                            </CardTitle>
                            <CardText>
                                {member.email}
                            </CardText>
                            <CardTitle tag="h5">
                                <FontAwesomeIcon icon={faAddressBook} /> Adress
                            </CardTitle>
                            <CardText>{member.address}</CardText>
                            <CardText>{member.postalZip}, {member.region}</CardText>
                            <CardText>{member.country}</CardText>
                        </CardBody>
                        <Button outline onClick={clickHander}  >Details</Button>
                    </Card>

                )}
        </div>
    );
};