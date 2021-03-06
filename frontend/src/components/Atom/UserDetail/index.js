import { Component } from "react";
import styles from './UserDetail.module.css';

class UserDetail extends Component{
    render(){
        const { userName, userProfilePicURL } = this.props.user;
        return(
            <div className={styles.user_detail_box} onClick={this.props.onClick}>
                <div className={styles.inner_box}>
                    <div className={styles.user_image}>
                        <img src={userProfilePicURL} alt="User"/>
                    </div>
                    <div className={styles.user_info}>
                        <div className={styles.user_name}>
                            {userName}
                        </div>
                        <div className={styles.user_designation}>
                            SDE intern
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default UserDetail;