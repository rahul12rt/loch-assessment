// utilities.js
const alertData = [
    {
        name:"notification",
        icon: "/assets/svg/transp-bell.svg",
        heading:"Get notified when a highly correlated whale makes a move",
        content:"Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active."
    },
    {
        name:"watch",
        icon: "/assets/svg/eye.svg",
        heading:"Watch what the whales are doing",
        content:"All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.",
        cohorts:"/assets/images/cohort.png"
    }
];

const testimonialData= [
    {
        name:"Jack F",
        profession:"Ex Blackrock PM",
        feedback:"“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
        width:"313px"
    },
    {
        name:"Yash P",
        profession:"Research, 3poch Crypto Hedge Fund",
        feedback:"“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
        width:"313px"
    },
    {
        name:"Shiv S",
        profession:"Co-Founder Magik Labs",
        feedback:"“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
        width:"491px"
    }
];


const notificationData = [
    {
        icon:"/assets/svg/bell.svg",
        checkbox:false,
        header:"We’ll be sending notifications to you here",
        type:"email"
    },
    {
        icon:"/assets/svg/bar-chart.svg",
        checkbox:true,
        childer:"Notify me when any wallets move more than",
        type:"select",
        value:"$1,000.00"
    },
    {
        icon:"/assets/svg/clock.svg",
        checkbox:true,
        childer:"Notify me when any wallets move more than",
        type:"select",
        footer:"becomes active",
        value:"> 30 days"
    },
]

export { alertData, testimonialData, notificationData };
