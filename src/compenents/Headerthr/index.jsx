import styles from'./Headerthr.module.css'
export default function Headerthr(){
    return(
        <header className="text-center d-flex row flex-column header">
            <div className={styles.row2}>
                <div className={styles.col3}>
                <div className={styles.dropplease}>
        <ul>
            <li>
                <a href="#"><img className={styles.droppic} src="images/burger.png" alt="" /></a>
                <ul className={styles.dropdown}>
                    <li><a href='#'>Menu</a></li>
                    <li><a href='#'>Login</a></li>
                    <li><a href='#'>Korea</a></li>
                    <li><a href='#'>Japan</a></li>
                </ul>
            </li>
        </ul>
    </div>
                </div>
                <div className="col4">
                 <div className={styles.iconlogo}>
                   <a href="#">
                       <img className="w-100" src="images/menulogo.png" alt="" />
                   </a>
                 </div>
               </div>   
                <div className="col5">  
                    <div className={styles.col2}>
                        <div className="iconsearch">
                            <a href="#">
                                <img className="w-100" src="images/iconsearch.png" alt="" />
                            </a>
                        </div>
                    </div>
                    
                    <div className={styles.col2}>
                        <div className="iconlanguage">
                            <a href="#">
                                <img className="w-100" src="images/iconlanguage.png" alt="" />
                            </a>
                        </div>
                    </div>
                
                    <div className={styles.col2}>
                        <div className="iconlogin">
                            <a href="#">
                                <img className="w-100" src="images/iconlogin.png" alt="" />
                            </a>
                        </div>
                    </div>
                
                    <div className={styles.col2}>
                        <div className="iconcart">
                            <a href="#">
                                <img className="w-100" src="images/iconcart.png" alt="Pom Pom cushion 45x45 cm" />
                            </a>
                        </div>
                    </div>
                </div>  
            </div>
            
        </header>
    )
}