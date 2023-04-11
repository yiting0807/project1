import styles from './ProductList.module.css'
export default function ProductList(){
return(
<div className="row-content">
    <div className={styles.logintitle}>  
        <h1>LOGIN</h1>    
    </div>
    <div className={styles.loginpic}>
        <a href='#'>
            <img className="w-100" src="images/login.png" alt="" />
        </a>
    </div>  
    <div className={styles.logintitle1}>       
        <h6>Username</h6>
    </div>
    <div className={styles.type}></div>  
    <form action="" className={styles.loginenter}>    
        <input type="text" placeholder='Type your username'></input>
    </form>
    <div className={styles.logintitle1}>       
        <h6>Password</h6>
    </div>
    <form action="" className={styles.loginenter}>    
        <input type="password" placeholder='Type your password'></input>
    </form>
    <div className={styles.aa2}>
        <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">Login</button>
        </div>
    </div>
    <div className={styles.aa1}>
        <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">Sign up</button>
        </div>
    </div>
    <div className={styles.forgot}>
        <a href="#">
            <h5>Forgot?</h5>
        </a>
    </div>
    <div className={styles.sociallogin1}>    
        <h3>Social Login</h3>
    </div>
    <div className={styles.row1}>
        <div className={styles.col1}>
            <div className="fb">
                <a href="#">
                    <img className="w-100" src="images/loginicon1.png" alt="" />
                </a>
            </div>
        </div>
        <div className={styles.col1}>
            <div className="ig">
                <a href="#">
                    <img className="w-100" src="images/loginicon2.png" alt="" />
                </a>
            </div>
        </div>
        <div className={styles.col1}>
            <div className="line">
                <a href="#">
                    <img className="w-100" src="images/loginicon3.png" alt="" />
                </a>
            </div>
        </div>
        <div className={styles.col1}>
            <div className="gmail">
                <a href="#">
                    <img className="w-100" src="images/loginicon4.png" alt="" />
                </a>
            </div>
        </div>      
    </div>
</div>
)}








