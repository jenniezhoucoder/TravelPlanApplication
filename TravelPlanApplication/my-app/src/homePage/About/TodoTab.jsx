function TodoTab() {
    return (
        <div className="tab">
            <div className="tab_content">
                <p>
                <strong>Purpose:</strong> The post page is used to record all the moment that you want to post and share and you can add or delete the posts.
                </p>
                <ul>
                    <li>
                        <strong>Posts:</strong> This page uses grid-columns to ensure each row has 3 posts on the computer view and has 2 post on the mobile view. 
                    </li>
                    <li>
                        <strong>More button:</strong> After clicking the more button, you can see a form which is used to add new post. The form will hide if you click the more button again.
                    </li>
                    <li>
                        <strong>Form:</strong> The form consists of three required inputs, including image path, theme and description. Especially, you should enter the image path, for example, ./image/inspo/art.JPG.  
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TodoTab;