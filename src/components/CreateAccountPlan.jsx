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

export default function CreateAccountPlan() {
    const [customerName, setCustomerName] = useState("<< Account Name >>");
    const [vertical, setVertical] = useState("<< Customer Vertical >>");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = await accountData(e.target.salesforceAccountId.value);
        console.log("data:", data);
        setCustomerName(data.account.accountName);
        const title = await setTheHeading(data.account.accountName);

        const valueHypothesis = await createText({
            "type": "text",
            "content": `<p>If Miro can help <strong>${data.account.accountName}</strong> <strong style=\"color:rgb(133,184,255)\"> __ </strong> and <strong style=\"color:rgb(133,184,255)\"> __ </strong><strong> </strong>through better global collaboration, <strong>${data.account.accountName}</strong> can <strong style=\"color:rgb(255,128,128)\"> __ </strong>, <strong style=\"color:rgb(255,128,128)\"> __ </strong> in ${data.account.accountName} while also <strong style=\"color:rgb(255,128,128)\"> __ </strong>.</p>`,
            "style": {
                "fillColor": "transparent",
                "fillOpacity": 1,
                "fontFamily": "RoobertPRO",
                "fontSize": 89.8803153902263,
                "textAlign": "left",
                "color": "#2c2e33"
            },

            "x": 93.94282301978001,
            "y": -14120.563517883664,
            "width": 2798.0174540188596,
            "height": 256.8009011149323,
            "rotation": 0
        } );

        const customerTeam = await createText({
            type: "text",
            content: `<p>The <strong>${data.account.accountName}</strong> account team consists of:</p><p><br></p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>AE: ${data.account.ae}</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>SE: ${data.account.se}</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>CSM: ${data.account.csm}</li></ol>`,
            style: {
                fillColor: "transparent",
                fillOpacity: 1,
                fontFamily: "RoobertPRO",
                fontSize: 89.8803153902263,
                textAlign: "left",
                color: "#2c2e33"
            },
            x: 93.94282301978001,
            y: -13494.355176818945,
            width: 2798.0174540188596,
            height: 642.0022527873307,
            rotation: 0
        });

        const dashboardHeading = await createShape({
            type: "shape",
            content: "<p><strong>Looker Account Dashboard</strong></p>",
            shape: "rectangle",
            style: {
                fillColor: "#808080",
                fontFamily: "open_sans",
                fontSize: 58,
                textAlign: "center",
                textAlignVertical: "middle",
                borderStyle: "normal",
                borderOpacity: 1,
                borderColor: "#1a1a1a",
                borderWidth: 2,
                fillOpacity: 1,
                color: "#ffffff"
            },
            x: -450.25817614149867,
            y: -12792.72295461536,
            width: 1678.6402294333918,
            height: 165.76907092299223,
            rotation: 0
        });

        const howDotheyMakeMoney = await createText({
            type: "text",
            content: `<p><strong>How do they make money?</strong></p><p><br></p><p>${data.insights[0].box1}</p>`,
            style: {
                fillColor: "transparent",
                fillOpacity: 1,
                fontFamily: "RoobertPRO",
                fontSize: 89.8803153902263,
                textAlign: "left",
                color: "#2c2e33"
            },
            x: 4211.6444134479,
            y: -8690.710286943955,
            width: 2798.0174540188596,
            height: 11941.24190184435,
            rotation: 0
        });

        const ProductsAndServices = await createText({
            type: "text",
            content: `<p><strong>What are the products and services they develop?</strong></p><p><br></p><p>${data.insights[0].box2}</p>`,
            style: {
                fillColor: "transparent",
                fillOpacity: 1,
                fontFamily: "RoobertPRO",
                fontSize: 89.8803153902263,
                textAlign: "left",
                color: "#2c2e33"
            },
            x: 7787.6417665394365,
            y: -11194.519072814544,
            width: 2798.0174540188596,
            height: 6933.624330103172,
            rotation: 0
        });

        const strategiesAndInitiatives = await createText({
            type: "text",
            content: `<p><strong>What are their key strategies/initiatives?</strong></p><p><br></p><p>${data.insights[0].box7}</p>`,
            style: {
                fillColor: "transparent",
                fillOpacity: 1,
                fontFamily: "RoobertPRO",
                fontSize: 89.8803153902263,
                textAlign: "left",
                color: "#2c2e33"
            },
            x: 11477.609478736787,
            y: -11451.319973929476,
            width: 2798.0174540188596,
            height: 6420.022527873307,
            rotation: 0
        });
        
        const account360 = await setAccount360Dashboard(e.target.salesforceAccountId.value);
        
        setLoading(false);
    }

    if (loading) {
        return (
        <div className="grid form-example p-4 ">
            <div className="cs1 ce12 border rounded-b-sm border-gray-200 p-2">
            <div className="flex items-center justify-center text-2xl">Loading...</div>
            </div>
        </div>
    )
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