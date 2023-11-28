import { useState } from "react";
import { Button } from "reactstrap";

export default function CreateMember(args) {

    const { members, setMembers } = args;
    const [member, setMember] = useState({
        name: "",
        phone: undefined,
        email: "",
        address: "",
        postalZip: undefined,
        region: "",
        country: ""
    });

    function handleSubmit(event) {
        event.preventDefault();
        setMembers([...members, member]);
    }

    function changeHandler(event) {
        const key = event.target.name;
        setMember({ ...member, [key]: event.target.value });
    }

    return (
        <div className="form-div">
            <form className="create-form" onSubmit={handleSubmit}>
                <label htmlFor="nameInput" >Name :</label>
                <input id="nameInput" placeholder="Enter" name="name" type="text" value={member.name} onChange={changeHandler} />

                <label htmlFor="emailInput" >E-mail :</label>
                <input id="emailInput" placeholder="Enter" name="email" type="email" value={member.email} onChange={changeHandler} />

                <label htmlFor="phoneInput" >Phone :</label >
                <input id="phoneInput" placeholder="Enter" name="phone" type="number" value={member.phone} onChange={changeHandler} />

                <label htmlFor="addressInput" >Adress : </label>
                <input id="addressInput" placeholder="Enter" name="address" type="text" value={member.address} onChange={changeHandler} />

                <label htmlFor="postalZipInput" >Postal Zip :</label>
                <input id="postalZipInput" placeholder="Enter" name="postalZip" type="number" value={member.postalZip} onChange={changeHandler} />

                <label htmlFor="regionInput" >Region :</label>
                <input id="regionInput" placeholder="Enter" name="region" type="text" value={member.region} onChange={changeHandler} />

                <label htmlFor="countryInput" >Country :</label>
                <input id="countryInput" placeholder="Enter" name="country" type="text" value={member.country} onChange={changeHandler} />
                <br />
                <Button type="submit" >Add Member</Button>
            </form>
        </div>

    );
}