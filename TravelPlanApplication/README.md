#Final Project

Junni Notion is a Single Page Application(SPA) based on React.

##Login

Junni Notion is a social platform. Users can make schedules, post pictures, and see photos posted by other users.
First, you can see a loading animation and a login page. You can also enter the homepage after entering the username and email.
After entering the homepage, you can see their username and a logout button in the upper right corner of homepage.
You can log out and come back to the login page if you click logout button.


##Plan(Complex UI)

Purpose: The plan page is used to record all things that user want to do, including movie list, yearly goals and travel plan. After that, you can post your completed plan.

Search: A search bar under the navigation and you can input the title of a plan and then you can see the filted plan.
Animation: The plus picture implements the animation effect. Click on the picture, and then you can see a form for adding your plan. Click again and the form will be closed.
Add: The add form consists of three parts, plan title, plan content and category. These fields are all required fields and are marked with *. If the user does not complete all sections, the form will not be submitted. The form will not be submitted successfully until all three sections are filled out.
Delete:After completing the plan, the user can click the delete button, then the completed plan disappears, and only the unfinished plan remains.

##Post(Complex UI)

Purpose: The post page is used to record all the moment that you want to post and share and you can add or delete the posts.

Posts: This page uses grid-columns to ensure each row has 3 posts on the computer view and has 2 post on the mobile view.
More button: After clicking the more button, you can see a form which is used to add new post. The form will hide if you click the more button again.
Form: The form consists of three required inputs, including image path, theme and description. Especially, you should enter the image path, for example, ./image/inspo/art.JPG.

##Explore

Purpose: You can see posts shared by other users and the like and collection number.

This page uses grid-columns to ensure each row has 3 posts on the computer view and has 2 post on the mobile view.

##Image
All images are taken by Junni and title and collect icon are from bootstrap.

##Loading indicator
You can see a “loading...” word before you enter the login information.
