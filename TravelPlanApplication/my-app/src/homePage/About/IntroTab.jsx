function IntroTab() {
    return (
        <div className="tab">
            <div className="tab_content">
                <p>
                    Junni Notion is a Single Page Application(SPA) based on React.
                </p> 
                <ul>
                    <li>
                        Junni Notion is a social platform. Users can make schedules, post pictures, and see photos posted by other users.
                    </li>
                    <li>
                        First, you can see a loading animation and a login page. You can also enter the homepage after you enter the username and email.
                    </li>
                    <li>    
                        After entering the homepage, you can see your username and a logout button in the upper right corner of homepage.
                    </li>
                    <li>
                        You can log out and come back to the login page if you click logout button.
                    </li>
                </ul>    
            </div>
        </div>
    )
}

export default IntroTab;