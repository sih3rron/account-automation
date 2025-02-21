export const dynamic = 'force-dynamic'

export async function accountData(id) {  

    const accountData = await fetch(
      `http://localhost:3000/api/salesforce?id=${id}`,
    );

    const result = await accountData.json();

    const insights = await fetch(`http://localhost:3000/api/insights-by-id?accountId=${result.data.records[0].id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "GET",
        cache: 'no-store',
      },
    ); 

    const insightsData = await insights.json();

    const output = result.data.records.sort(compareFn);
  
    return { 
        account: output[0], 
        insights: insightsData.data
    };
}

export function compareFn(a, b){
        if (a.created < b.created)
            return -1;
        else if (a.created == b.created)
            return 0;
        else
            return 1;
}

export const notification = async (message) => {
    return await miro.board.notifications.showInfo(message);
}

export const createTheFrame = async (sfdcAccountId) => {
    const accountFrame = await miro.board.createFrame(
        {
            type: "frame",
            title: "Account Plan",
            style: {
                "fillColor": "#fbf7ef"
            },
            x: 500.54168205346195,
            y: -11482.851089499947,
            height: 6554.03986297638,
            width: 3764.746997914799
        });
    return accountFrame.id;
}

export const setTheHeading = async (heading) => {
    const titleShape = await miro.board.createShape({
            content: `<p><strong>${ heading }</strong></p>`,
            shape: 'rectangle',
            style: {
                fillColor: "#2c2e33",
                fontFamily: "RoobertPRO",
                fontSize: 137,
                textAlign: "center",
                textAlignVertical: "middle",
                borderStyle: "normal",
                borderOpacity: 1,
                borderColor: "transparent",
                borderWidth: 2,
                fillOpacity: 1,
                color: "#ffffff"
            },
            x: 500.54168205346195,
            y: -14561.33123786613, 
            width: 3611.215172086223,
            height: 200,
        });

        return titleShape.id;
};

export const createShape = async (json) => {
    const shape = await miro.board.createShape(json);
    return shape.id;
}

export const createText = async (json) => {
    const text = await miro.board.createText(json);
    return text.id;
}

export const setAccount360Dashboard = async (sfdcAccountId) => {

    const embed = await miro.board.createEmbed({
        type: "embed",
        previewUrl: "https://mirostatic.com/partners-embed/preview-images/looker-preview.svg",
        mode: "inline",
        url: `https://miro.looker.com/dashboards/509?SFDC%20Account%20ID=${sfdcAccountId}`,
        x: -889.5782908581946,
        y: -12293.434910647078,
        width: 800,
        height: 600
    })

    return embed.id;

}

export const setAccountPlanDashboard = async (account) => {

    const embed = await miro.board.createEmbed({
        url: `https://miro.looker.com/dashboards/4144?SFDC+Account+ID=${account}`,
        mode: 'inline',
        width: 1227.6657428204458,
        x: -337.3496481444108,
        y: -13813.376796592243,
      });

      return embed.id;
}


