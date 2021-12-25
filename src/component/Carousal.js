import React from 'react'
import LinkCards from './LinkCards';

export default function Carousal() {
let carStyle = {
backgroundImage: `url(https://wallpaperaccess.com/full/2454628.png)`,
width: "100%",
height: "100%",
minHeight: "120vh",
backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'
};
let cardStyle = {
width: "auto",
display: "absolute",
backgroundColor:"transparent", 
border: 0.5,
alignContent: "center"
}
let linkStyle={
textDecoration: "none"
}
let imgStyle={
width: "30%",
height: "30%"
}
return (
<div style={carStyle}>
<h1 className='text-light display-1 py-5'> Welcome to  S~S~O~Z~I~E</h1>
<div className="row py-3">
<div className="col-sm-1"></div>
<div className="col-sm-2">
<div className="card" style={cardStyle}>
<a href="https://www.splunk.com/" target="_blank" style={linkStyle}>
<img src="https://rtview.com/wp-content/uploads/2016/10/mzl.tfigcody.png" className="card-img-top" style={imgStyle}/>
<div className="card-body">
<h5 className="card-title text-light">Splunk</h5>
</div>
</a>
</div>
</div>
<div className="col-sm-2">
<div className="card" style={cardStyle}>
<a href="https://developer.servicenow.com" target="_blank" style={linkStyle}>
<img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/servicenow_logo_icon_168835.png" className="card-img-top" style={imgStyle}/>
<div className="card-body">
<h5 className="card-title text-light">ServiceNow</h5>
</div>
</a>
</div>
</div>
<div className="col-sm-2">
<div className="card" style={cardStyle}>
<a href="https://developer.servicenow.com" target="_blank" style={linkStyle}>
<img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/servicenow_logo_icon_168835.png" className="card-img-top" style={imgStyle}/>
<div className="card-body">
<h5 className="card-title text-light">ServiceNow Test</h5>
</div>
</a>
</div>
</div>
<div className="col-sm-2">
<div className="card" style={cardStyle}>
<a href="https://developer.servicenow.com" target="_blank" style={linkStyle}>
<img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/servicenow_logo_icon_168835.png" className="card-img-top" style={imgStyle}/>
<div className="card-body">
<h5 className="card-title text-light">ServiceNow Dev</h5>
</div>
</a>
</div>
</div>
<div className="col-sm-2">
<div className="card" style={cardStyle}>
<a href="https://developer.servicenow.com" target="_blank" style={linkStyle}>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg/640px-Microsoft_Office_Word_%282019%E2%80%93present%29.svg.png" className="card-img-top" style={imgStyle}/>
<div className="card-body">
<h5 className="card-title text-light">MS WORD</h5>
</div>
</a>
</div>
</div>
</div>
<div className="row py-3">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<div className="card" style={cardStyle}>
<a href="https://developer.servicenow.com" target="_blank" style={linkStyle}>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png" className="card-img-top" style={imgStyle}/>
<div className="card-body">
<h5 className="card-title text-light">Outlook</h5>
</div>
</a>
</div>
</div>
<div className="col-sm-2">
<div className="card" style={cardStyle}>
<a href="https://www.splunk.com/" target="_blank" style={linkStyle}>
<img src="https://rtview.com/wp-content/uploads/2016/10/mzl.tfigcody.png" className="card-img-top" style={imgStyle}/>
<div className="card-body">
<h5 className="card-title text-light">Splunk Cluster</h5>
</div>
</a>
</div>
</div>
<div className="col-sm-2">
<div className="card" style={cardStyle}>
<a href="https://developer.servicenow.com" target="_blank" style={linkStyle}>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png" className="card-img-top" style={imgStyle}/>
<div className="card-body">
<h5 className="card-title text-light">Office 365</h5>
</div>
</a>
</div>
</div>
<div className="col-sm-2">
<div className="card" style={cardStyle}>
<a href="https://developer.servicenow.com" target="_blank" style={linkStyle}>
<img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/servicenow_logo_icon_168835.png" className="card-img-top" style={imgStyle}/>
<div className="card-body">
<h5 className="card-title text-light">ServiceNow Home</h5>
</div>
</a>
</div>
</div>
<div className="col-sm-2">
<div className="card" style={cardStyle}>
<a href="https://developer.servicenow.com" target="_blank" style={linkStyle}>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png" className="card-img-top" style={imgStyle}/>
<div className="card-body">
<h5 className="card-title text-light">Office Home</h5>
</div>
</a>
</div>
</div>
</div>
<LinkCards/>
</div>
)
}
