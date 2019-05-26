import React, {Component} from "react";
import '../css/footer.css'
class Footer extends Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="footer-copyright">
                    <div className="center-align">
                        Contact us: (206)221-4613 or <a style={{color: "white", textDecoration: "underline"}} href="mailto:somserve@uw.edu">somserve@uw.edu</a>
                        <br/>
                        © 2019 Northwest Health Career Path. All Rights Reserved
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer