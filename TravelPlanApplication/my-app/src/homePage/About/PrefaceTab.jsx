function PrefaceTab() {
    return (
        <div className="tab">
            <div className="tab_content">
                <p>
                    <strong>Purpose:</strong> The plan page is used to record all things that you want to do, including movie list, yearly goals and travel plan. After that, you can post your completed plan. 
                </p>
            <ul>
                <li>
                    <strong>Search:</strong> A search bar under the navigation and you can input the title of a plan and then you can see the filted plan.
                </li>
                <li>
                    <strong>Animation:</strong> The plus picture implements the animation effect. Click on the picture, and then you can see a form for adding your plan. Click again and the form will be closed.
                </li>
                <li>
                    <strong>Add:</strong> The add form consists of three parts, plan title, plan content and category. These fields are all required fields and are marked with *. If the user does not complete all sections, the form will not be submitted. The form will not be submitted successfully until all three sections are filled out.
                </li>
                <li>
                    <strong>Delete:</strong>After completing the plan, the user can click the delete button, then the completed plan disappears, and only the unfinished plan remains.
                </li>  
            </ul>    
            </div>
        </div>
    )
}

export default PrefaceTab;