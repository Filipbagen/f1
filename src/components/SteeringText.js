import React from "react"
import styled from "styled-components";

const Text = styled.h3`
position: relative;
top: 220vh;
color white;
font-weight: bold;
padding: 260px;
`
const Text2 = styled.h3`
position: relative;
 top: 260vh;
 color white;
 font-weight: bold;
 margin-left: 1500px; 
`

export default function SteeringText() {
    return (
        <div>
            <Text>
                A F1 steering wheel can cost about $40,000 to $100,000.<br></br>
                However, it could be more than $100,000 million depending on the level of sophistication.<br></br>
                FIA regulations state a driver must be very quick at exiting the car,<br></br>
                with just five seconds being the maximum limit.<br></br>
                So a rapid release of the steering wheel is extremely important.
            </Text >

            <Text2>
                The steering wheel of an F1 Car weighs 3-4 pounds,<br></br>
                and this will need to be held and controlled by the driver in a high G turn.<br></br>
                On the current grid, steering wheels are customisable,<br></br>
                so if a driver wants a certain button in a specific place,<br></br>
                this can be accommodated. This means no unit is the same.
            </Text2 >
        </div>
    );
}