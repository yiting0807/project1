import styles from'./Footertwo.module.css'
export default function Footertwo(){
    return(
    <footer className="text-center d-flex row flex-column footer">
            
           
            <div className={styles.row1}>
                <div className={styles.col1}>
                    <div className={styles.iconig}>
                        <a href="#">
                        <img className="w-100" src="images/iconig.png" alt="" />
                        </a>
                    </div>
                 </div>
            
                 <div className={styles.col1}>
                    <div className={styles.icontiktok}>
                        <a href="#">
                        <img className="w-100" src="images/icontiktok.png" alt="" />
                        </a>
                    </div>
                 </div>
          
          
                 <div className={styles.col1}>
                    <div className={styles.iconyoutube}>
                        <a href="#">
                        <img className="w-100" src="images/iconyoutube.png" alt="" />
                        </a>
                    </div>
                 </div>
          
          
                 <div className={styles.col1}>
                    <div className={styles.iconfb}>
                        <a href="#">
                        <img className="w-100" src="images/iconfb.png" alt="" />
                        </a>
                    </div>
                 </div>
        </div>
        </footer>
        )
}