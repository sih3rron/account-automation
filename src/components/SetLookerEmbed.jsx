'use client';

import { useState } from "react";
import {
    createTheFrame,
    setTheHeading,
    createShape,
    setAccountPlanDashboard,
    createText,
    setAccount360Dashboard,
    accountData
} from "../utils/helpers";

export default function SetLookerEmbed() {
    const [customerName, setCustomerName] = useState("<< Account Name >>");
    const [vertical, setVertical] = useState("<< Customer Vertical >>");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(e.target.salesforceAccountId.value);
        const data = await accountData(e.target.salesforceAccountId.value);
        console.log(data);
        //const title = await setTheHeading(customerName);

        /* const valueHypothesis = await createText({
            "type": "text",
            "content": `<p>If Miro can help <strong>${customerName}</strong> <strong style=\"color:rgb(133,184,255)\"> __ </strong> and <strong style=\"color:rgb(133,184,255)\"> __ </strong><strong> </strong>through better global collaboration, <strong>${customerName}</strong> can <strong style=\"color:rgb(255,128,128)\"> __ </strong>, <strong style=\"color:rgb(255,128,128)\"> __ </strong> in ${vertical} while also <strong style=\"color:rgb(255,128,128)\"> __ </strong>.</p>`,
            "style": {
                "fillColor": "transparent",
                "fillOpacity": 1,
                "fontFamily": "RoobertPRO",
                "fontSize": 38.65283264315433,
                "textAlign": "left",
                "color": "#2c2e33"
            },

            "x": -291.7166447072259,
            "y": -11481.528953513369,
            "width": 1203.2812736945098,
            "height": 220.87332938945335,
            "rotation": 0
        } );

        const account360 = await setAccount360Dashboard(e.target.salesforceAccountId.value); */
        setLoading(false);
    }

    if (loading) {
        return <div> Loading... </div>
    };


    return (
        <div className="grid form-example p-4">
            <div className="cs1 ce12">
                <h1>Create an Account Plan</h1>
            </div>
            <form className="cs1 ce12 form-example--main-content" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input className="input" type="text" placeholder="Please enter a Salesforce Account Id" id="salesforceAccountId" />
                </div>
                <button type="submit" className="button button-primary">Submit</button>
            </form>
        </div>
    )
}